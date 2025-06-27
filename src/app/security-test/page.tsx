"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Shield, Zap, AlertTriangle, CheckCircle, XCircle } from "lucide-react";

interface TestResult {
  name: string;
  status: "pending" | "success" | "error" | "warning";
  message: string;
  details?: string;
}

export default function SecurityTestPage() {
  const [results, setResults] = useState<TestResult[]>([]);
  const [loading, setLoading] = useState(false);

  const addResult = (result: TestResult) => {
    setResults(prev => [...prev, { ...result, timestamp: Date.now() }]);
  };

  const clearResults = () => {
    setResults([]);
  };

  // Rate Limiting Tests
  const testRateLimiting = async () => {
    setLoading(true);
    addResult({ name: "Rate Limiting", status: "pending", message: "Testing API rate limits..." });

    try {
      const requests = Array.from({ length: 10 }, (_, i) =>
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
          message: `Rate limiting working! ${rateLimited.length} requests blocked`,
          details: `HTTP 429 responses: ${rateLimited.length}/${responses.length}`,
        });
      } else {
        addResult({
          name: "Rate Limiting",
          status: "warning",
          message: "No rate limiting detected",
          details: "All requests passed through - consider lowering limits for testing",
        });
      }
    } catch (error) {
      addResult({
        name: "Rate Limiting",
        status: "error",
        message: "Rate limiting test failed",
        details: error instanceof Error ? error.message : "Unknown error",
      });
    }
    setLoading(false);
  };

  // Input Validation Tests
  const testInputValidation = async () => {
    setLoading(true);
    addResult({
      name: "Input Validation",
      status: "pending",
      message: "Testing input validation...",
    });

    const testCases = [
      { name: "XSS Script", email: "test@example.com", message: "<script>alert('xss')</script>" },
      { name: "SQL Injection", email: "'; DROP TABLE users; --", message: "Test message" },
      { name: "Long Input", email: "test@example.com", message: "A".repeat(2000) },
      { name: "Empty Fields", email: "", message: "" },
      { name: "Invalid Email", email: "not-an-email", message: "Test message" },
      { name: "Unicode/Emoji", email: "test@example.com", message: "Hello 👋 🚀 测试" },
    ];

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
          addResult({
            name: `Input Validation - ${testCase.name}`,
            status: "success",
            message: "Properly rejected invalid input",
            details: `HTTP ${status}: ${data.details?.[0]?.message || "Validation error"}`,
          });
        } else if (status === 200) {
          addResult({
            name: `Input Validation - ${testCase.name}`,
            status: "warning",
            message: "Input was accepted",
            details: `HTTP ${status}: Consider stricter validation`,
          });
        } else {
          addResult({
            name: `Input Validation - ${testCase.name}`,
            status: "error",
            message: "Unexpected response",
            details: `HTTP ${status}: ${JSON.stringify(data)}`,
          });
        }
      } catch (error) {
        addResult({
          name: `Input Validation - ${testCase.name}`,
          status: "error",
          message: "Test failed",
          details: error instanceof Error ? error.message : "Unknown error",
        });
      }
    }
    setLoading(false);
  };

  // CSP Tests
  const testCSP = async () => {
    setLoading(true);
    addResult({
      name: "CSP Testing",
      status: "pending",
      message: "Testing Content Security Policy...",
    });

    // Test allowed external connection
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
      if (response.ok) {
        addResult({
          name: "CSP - Allowed External API",
          status: "success",
          message: "External API call successful",
          details: "jsonplaceholder.typicode.com is properly whitelisted",
        });
      }
    } catch (error) {
      addResult({
        name: "CSP - Allowed External API",
        status: "error",
        message: "External API call failed",
        details: error instanceof Error ? error.message : "Unknown error",
      });
    }

    // Test CSP violation (this will be caught by the browser)
    try {
      // This should trigger a CSP violation
      const script = document.createElement("script");
      script.src = "https://evil-website.com/malicious.js";
      document.head.appendChild(script);

      // If we get here, CSP might not be working
      addResult({
        name: "CSP - Script Injection",
        status: "warning",
        message: "Script injection not blocked",
        details: "CSP might not be properly configured",
      });
    } catch {
      addResult({
        name: "CSP - Script Injection",
        status: "success",
        message: "Script injection blocked by CSP",
        details: "Content Security Policy is working",
      });
    }

    setLoading(false);
  };

  // Security Headers Test
  const testSecurityHeaders = async () => {
    setLoading(true);
    addResult({
      name: "Security Headers",
      status: "pending",
      message: "Checking security headers...",
    });

    try {
      const response = await fetch("/api/contact", { method: "HEAD" });
      const headers = response.headers;

      const securityHeaders = [
        "x-frame-options",
        "x-content-type-options",
        "referrer-policy",
        "permissions-policy",
        "content-security-policy",
      ];

      const missingHeaders = securityHeaders.filter(header => !headers.get(header));
      const presentHeaders = securityHeaders.filter(header => headers.get(header));

      if (missingHeaders.length === 0) {
        addResult({
          name: "Security Headers",
          status: "success",
          message: "All security headers present",
          details: `Found: ${presentHeaders.join(", ")}`,
        });
      } else {
        addResult({
          name: "Security Headers",
          status: "warning",
          message: "Some security headers missing",
          details: `Missing: ${missingHeaders.join(", ")}`,
        });
      }
    } catch (err) {
      addResult({
        name: "Security Headers",
        status: "error",
        message: "Failed to check headers",
        details: err instanceof Error ? err.message : "Unknown error",
      });
    }
    setLoading(false);
  };

  // HTTPS Test
  const testHTTPS = () => {
    addResult({
      name: "HTTPS Check",
      status: "pending",
      message: "Checking HTTPS configuration...",
    });

    if (window.location.protocol === "https:") {
      addResult({
        name: "HTTPS Check",
        status: "success",
        message: "Site is served over HTTPS",
        details: "Secure connection established",
      });
    } else {
      addResult({
        name: "HTTPS Check",
        status: "warning",
        message: "Site is served over HTTP",
        details: "Consider enforcing HTTPS in production",
      });
    }
  };

  const runAllTests = async () => {
    clearResults();
    testHTTPS();
    await testSecurityHeaders();
    await testCSP();
    await testInputValidation();
    await testRateLimiting();
  };

  const getStatusIcon = (status: TestResult["status"]) => {
    switch (status) {
      case "success":
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case "error":
        return <XCircle className="h-4 w-4 text-red-500" />;
      case "warning":
        return <AlertTriangle className="h-4 w-4 text-yellow-500" />;
      default:
        return <Zap className="h-4 w-4 text-blue-500" />;
    }
  };

  const getStatusBadge = (status: TestResult["status"]) => {
    const variants = {
      success: "bg-green-100 text-green-800",
      error: "bg-red-100 text-red-800",
      warning: "bg-yellow-100 text-yellow-800",
      pending: "bg-blue-100 text-blue-800",
    };
    return variants[status] || variants.pending;
  };

  return (
    <div className="container mx-auto p-6 max-w-6xl">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <Shield className="h-6 w-6 text-blue-600" />
          <h1 className="text-3xl font-bold">Security Testing Dashboard</h1>
        </div>
        <p className="text-muted-foreground">
          Test your application&apos;s security features including rate limiting, CSP, input
          validation, and more.
        </p>
      </div>

      <Tabs defaultValue="dashboard" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="manual">Manual Tests</TabsTrigger>
          <TabsTrigger value="results">Results</TabsTrigger>
        </TabsList>

        <TabsContent value="dashboard" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Quick Security Scan</CardTitle>
                <CardDescription>Run all security tests at once</CardDescription>
              </CardHeader>
              <CardContent>
                <Button onClick={runAllTests} disabled={loading} className="w-full">
                  {loading ? "Running Tests..." : "Run All Tests"}
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Rate Limiting</CardTitle>
                <CardDescription>Test API rate limiting protection</CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  onClick={testRateLimiting}
                  disabled={loading}
                  variant="outline"
                  className="w-full"
                >
                  Test Rate Limits
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Input Validation</CardTitle>
                <CardDescription>Test XSS, SQL injection, and validation</CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  onClick={testInputValidation}
                  disabled={loading}
                  variant="outline"
                  className="w-full"
                >
                  Test Input Validation
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">CSP Testing</CardTitle>
                <CardDescription>Test Content Security Policy</CardDescription>
              </CardHeader>
              <CardContent>
                <Button onClick={testCSP} disabled={loading} variant="outline" className="w-full">
                  Test CSP
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Security Headers</CardTitle>
                <CardDescription>Check security headers presence</CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  onClick={testSecurityHeaders}
                  disabled={loading}
                  variant="outline"
                  className="w-full"
                >
                  Check Headers
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">HTTPS Check</CardTitle>
                <CardDescription>Verify secure connection</CardDescription>
              </CardHeader>
              <CardContent>
                <Button onClick={testHTTPS} disabled={loading} variant="outline" className="w-full">
                  Check HTTPS
                </Button>
              </CardContent>
            </Card>
          </div>

          <Alert>
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              These tests are for development purposes. Always use professional security auditing
              tools for production environments.
            </AlertDescription>
          </Alert>
        </TabsContent>

        <TabsContent value="manual" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Manual Security Tests</CardTitle>
              <CardDescription>Perform manual security testing with custom inputs</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="text-sm font-medium mb-2">Test Contact Form</div>
                <div className="space-y-2">
                  <Input placeholder="Name (try XSS: <script>alert('xss')</script>)" />
                  <Input placeholder="Email (try SQL: '; DROP TABLE users; --)" />
                  <Textarea placeholder="Message (try long input or special characters)" />
                  <Button variant="outline">Submit Test</Button>
                </div>
              </div>

              <div>
                <div className="text-sm font-medium mb-2">Test External Connections</div>
                <div className="space-y-2">
                  <Input placeholder="URL to test (e.g., https://evil-site.com/api)" />
                  <Button variant="outline">Test Connection</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="results" className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Test Results</h2>
            <Button onClick={clearResults} variant="outline">
              Clear Results
            </Button>
          </div>

          <div className="space-y-4">
            {results.length === 0 ? (
              <Card>
                <CardContent className="pt-6">
                  <p className="text-center text-muted-foreground">
                    No test results yet. Run some tests to see results here.
                  </p>
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
                            <p className="text-xs text-muted-foreground mt-1">{result.details}</p>
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
