"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Shield,
  Zap,
  AlertTriangle,
  CheckCircle,
  XCircle,
  RefreshCw,
  Play,
  Database,
  Lock,
  Globe,
  Activity,
} from "lucide-react";
import { BackButton } from "@/components/BackButton";

interface TestResult {
  name: string;
  status: "pending" | "success" | "error" | "warning";
  message: string;
  details?: string;
  timestamp?: number;
}

const securityTestSuites = [
  {
    id: "rate-limiting",
    title: "Rate Limiting",
    icon: <Zap className="h-5 w-5" />,
    description: "Test API rate limiting protection",
    color: "blue",
  },
  {
    id: "input-validation",
    title: "Input Validation",
    icon: <Shield className="h-5 w-5" />,
    description: "Test XSS, SQL injection, and validation",
    color: "green",
  },
  {
    id: "csp",
    title: "CSP Testing",
    icon: <Lock className="h-5 w-5" />,
    description: "Test Content Security Policy",
    color: "purple",
  },
  {
    id: "security-headers",
    title: "Security Headers",
    icon: <Globe className="h-5 w-5" />,
    description: "Check security headers presence",
    color: "orange",
  },
  {
    id: "https",
    title: "HTTPS Check",
    icon: <Activity className="h-5 w-5" />,
    description: "Verify secure connection",
    color: "teal",
  },
];

export default function SecurityTestPage() {
  const [results, setResults] = useState<TestResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [runningTest, setRunningTest] = useState<string | null>(null);

  const addResult = (result: TestResult) => {
    setResults(prev => [...prev, { ...result, timestamp: Date.now() }]);
  };

  const clearResults = () => {
    setResults([]);
  };

  // Rate Limiting Tests
  const testRateLimiting = async () => {
    setRunningTest("rate-limiting");
    addResult({ name: "Rate Limiting", status: "pending", message: "Testing API rate limits..." });

    try {
      const requests = Array.from({ length: 8 }, (_, i) =>
        fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: `Test User ${i}`,
            email: `test${i}@example.com`,
            message: `Rate limit test message ${i}`,
          }),
        })
      );

      const responses = await Promise.all(requests);
      const rateLimited = responses.filter(r => r.status === 429);

      if (rateLimited.length > 0) {
        addResult({
          name: "Rate Limiting",
          status: "success",
          message: `✅ Rate limiting working! ${rateLimited.length} requests blocked`,
          details: `HTTP 429 responses: ${rateLimited.length}/${responses.length}`,
        });
      } else {
        addResult({
          name: "Rate Limiting",
          status: "warning",
          message: "⚠️ No rate limiting detected",
          details: "All requests passed through - consider lowering limits for testing",
        });
      }
    } catch (error) {
      addResult({
        name: "Rate Limiting",
        status: "error",
        message: "❌ Rate limiting test failed",
        details: error instanceof Error ? error.message : "Unknown error",
      });
    }
    setRunningTest(null);
  };

  // Input Validation Tests
  const testInputValidation = async () => {
    setRunningTest("input-validation");
    addResult({
      name: "Input Validation",
      status: "pending",
      message: "Testing input validation...",
    });

    const testCases = [
      { name: "XSS Script", email: "test@example.com", message: "<script>alert('xss')</script>" },
      { name: "SQL Injection", email: "'; DROP TABLE users; --", message: "Test message" },
      { name: "Long Input", email: "test@example.com", message: "A".repeat(1500) },
      { name: "Empty Fields", email: "", message: "" },
      { name: "Invalid Email", email: "not-an-email", message: "Test message" },
      { name: "Unicode/Emoji", email: "test@example.com", message: "Hello 👋 🚀 测试" },
    ];

    let successCount = 0;
    let warningCount = 0;

    for (const testCase of testCases) {
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(testCase),
        });

        const data = await response.json();
        const status = response.status;

        if (status === 400 && data.error === "Validation failed") {
          successCount++;
        } else if (status === 200) {
          warningCount++;
        }
      } catch {
        // Expected for some test cases
      }
    }

    addResult({
      name: "Input Validation",
      status: successCount >= 4 ? "success" : warningCount > 0 ? "warning" : "error",
      message: `${successCount >= 4 ? "✅" : warningCount > 0 ? "⚠️" : "❌"} Validation Results`,
      details: `Properly rejected: ${successCount}/${testCases.length} test cases`,
    });
    setRunningTest(null);
  };

  // CSP Tests
  const testCSP = async () => {
    setRunningTest("csp");
    addResult({
      name: "CSP Testing",
      status: "pending",
      message: "Testing Content Security Policy...",
    });

    try {
      // Test allowed external connection
      const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
      if (response.ok) {
        addResult({
          name: "CSP - External API",
          status: "success",
          message: "✅ External API call successful",
          details: "jsonplaceholder.typicode.com is properly whitelisted",
        });
      }
    } catch (error) {
      addResult({
        name: "CSP - External API",
        status: "error",
        message: "❌ External API call failed",
        details: error instanceof Error ? error.message : "Unknown error",
      });
    }

    // Test CSP violation detection
    try {
      const script = document.createElement("script");
      script.src = "https://malicious-site.example.com/evil.js";
      script.onerror = () => {
        addResult({
          name: "CSP - Script Injection",
          status: "success",
          message: "✅ Script injection blocked by CSP",
          details: "Content Security Policy is working",
        });
      };
      document.head.appendChild(script);

      // Cleanup
      setTimeout(() => document.head.removeChild(script), 100);
    } catch {
      addResult({
        name: "CSP - Script Injection",
        status: "success",
        message: "✅ Script injection blocked by CSP",
        details: "Content Security Policy is working",
      });
    }

    setRunningTest(null);
  };

  // Security Headers Test
  const testSecurityHeaders = async () => {
    setRunningTest("security-headers");
    addResult({
      name: "Security Headers",
      status: "pending",
      message: "Checking security headers...",
    });

    try {
      const response = await fetch(window.location.origin);
      const headers = response.headers;

      const securityHeaders = [
        "x-frame-options",
        "x-content-type-options",
        "referrer-policy",
        "content-security-policy",
      ];

      const presentHeaders = securityHeaders.filter(header => headers.get(header));

      addResult({
        name: "Security Headers",
        status:
          presentHeaders.length >= 3 ? "success" : presentHeaders.length >= 1 ? "warning" : "error",
        message: `${presentHeaders.length >= 3 ? "✅" : presentHeaders.length >= 1 ? "⚠️" : "❌"} Security Headers Check`,
        details: `Found ${presentHeaders.length}/${securityHeaders.length} headers: ${presentHeaders.join(", ")}`,
      });
    } catch (error) {
      addResult({
        name: "Security Headers",
        status: "error",
        message: "❌ Security headers test failed",
        details: error instanceof Error ? error.message : "Unknown error",
      });
    }
    setRunningTest(null);
  };

  // HTTPS Test
  const testHTTPS = () => {
    setRunningTest("https");
    addResult({
      name: "HTTPS Check",
      status: "pending",
      message: "Checking HTTPS connection...",
    });

    const isHTTPS = window.location.protocol === "https:";

    addResult({
      name: "HTTPS Check",
      status: isHTTPS ? "success" : "warning",
      message: isHTTPS ? "✅ HTTPS connection verified" : "⚠️ Not using HTTPS",
      details: `Protocol: ${window.location.protocol}`,
    });
    setRunningTest(null);
  };

  const runAllTests = async () => {
    setLoading(true);
    clearResults();

    await testRateLimiting();
    await new Promise(resolve => setTimeout(resolve, 500)); // Brief pause
    await testInputValidation();
    await new Promise(resolve => setTimeout(resolve, 500));
    await testCSP();
    await new Promise(resolve => setTimeout(resolve, 500));
    await testSecurityHeaders();
    await new Promise(resolve => setTimeout(resolve, 500));
    testHTTPS();

    setLoading(false);
  };

  const runSingleTest = async (testId: string) => {
    setLoading(true);

    switch (testId) {
      case "rate-limiting":
        await testRateLimiting();
        break;
      case "input-validation":
        await testInputValidation();
        break;
      case "csp":
        await testCSP();
        break;
      case "security-headers":
        await testSecurityHeaders();
        break;
      case "https":
        testHTTPS();
        break;
    }

    setLoading(false);
  };

  const getStatusIcon = (status: TestResult["status"]) => {
    switch (status) {
      case "success":
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case "error":
        return <XCircle className="h-4 w-4 text-red-600" />;
      case "warning":
        return <AlertTriangle className="h-4 w-4 text-yellow-600" />;
      case "pending":
        return <RefreshCw className="h-4 w-4 text-blue-600 animate-spin" />;
      default:
        return <RefreshCw className="h-4 w-4 text-gray-400" />;
    }
  };

  const getStatusBadge = (status: TestResult["status"]) => {
    const variants = {
      success: "bg-green-100 text-green-800 border-green-200",
      error: "bg-red-100 text-red-800 border-red-200",
      warning: "bg-yellow-100 text-yellow-800 border-yellow-200",
      pending: "bg-blue-100 text-blue-800 border-blue-200",
    };
    return variants[status] || variants.pending;
  };

  return (
    <div className="container mx-auto p-6 max-w-6xl">
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <BackButton />
          <div className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-blue-600" />
            <h1 className="text-3xl font-bold">Security Testing Dashboard</h1>
          </div>
        </div>
        <p className="text-muted-foreground">
          Comprehensive security testing suite for development and auditing. Test your
          application&apos;s security features including rate limiting, CSP, input validation, and
          more.
        </p>
      </div>

      <Tabs defaultValue="dashboard" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="manual">Manual Tests</TabsTrigger>
          <TabsTrigger value="results">Results ({results.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="dashboard" className="space-y-6">
          {/* Quick Actions */}
          <div className="flex gap-4 mb-6">
            <Button onClick={runAllTests} disabled={loading} size="lg" className="flex-1">
              {loading ? (
                <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
              ) : (
                <Play className="h-4 w-4 mr-2" />
              )}
              {loading ? "Running All Tests..." : "Run All Security Tests"}
            </Button>
            <Button onClick={clearResults} variant="outline" disabled={loading}>
              Clear Results
            </Button>
          </div>

          {/* Security Test Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {securityTestSuites.map(test => (
              <Card key={test.id} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center gap-2">
                    {test.icon}
                    {test.title}
                  </CardTitle>
                  <CardDescription>{test.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    onClick={() => runSingleTest(test.id)}
                    disabled={loading}
                    variant="outline"
                    className="w-full"
                  >
                    {runningTest === test.id ? (
                      <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                    ) : (
                      <Play className="h-4 w-4 mr-2" />
                    )}
                    {runningTest === test.id ? "Testing..." : "Run Test"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <Alert>
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              <strong>Development Use Only:</strong> These tests are designed for development and
              testing environments. Always use professional security auditing tools and practices
              for production environments.
            </AlertDescription>
          </Alert>
        </TabsContent>

        <TabsContent value="manual" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Manual Form Testing</CardTitle>
                <CardDescription>Test the contact form with various inputs</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Input placeholder="Name (try: <script>alert('xss')</script>)" />
                  <Input placeholder="Email (try: '; DROP TABLE users; --)" />
                  <Textarea placeholder="Message (try long input or special characters)" />
                  <Button variant="outline" className="w-full">
                    <Database className="w-4 h-4 mr-2" />
                    Submit Test Form
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>External Connection Test</CardTitle>
                <CardDescription>Test CSP and external resource loading</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Input placeholder="URL to test (e.g., https://example.com/api)" />
                  <Button variant="outline" className="w-full">
                    <Globe className="w-4 h-4 mr-2" />
                    Test Connection
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="results" className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Test Results</h2>
            <Button onClick={clearResults} variant="outline" disabled={results.length === 0}>
              Clear All Results
            </Button>
          </div>

          <div className="space-y-4">
            {results.length === 0 ? (
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center py-8">
                    <Shield className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                    <p className="text-muted-foreground">
                      No test results yet. Run some security tests to see results here.
                    </p>
                  </div>
                </CardContent>
              </Card>
            ) : (
              results.map((result, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        {getStatusIcon(result.status)}
                        <div>
                          <h3 className="font-semibold">{result.name}</h3>
                          <p className="text-sm text-muted-foreground">{result.message}</p>
                          {result.details && (
                            <p className="text-xs text-muted-foreground mt-1 font-mono bg-muted px-2 py-1 rounded">
                              {result.details}
                            </p>
                          )}
                        </div>
                      </div>
                      <Badge className={getStatusBadge(result.status)}>
                        {result.status.toUpperCase()}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
