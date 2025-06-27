"use client";

import React, { Component, ReactNode, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertTriangle, RefreshCw, Bug } from "lucide-react";

// Error boundary component
interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

interface ErrorBoundaryProps {
  children: ReactNode;
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Error Boundary caught:", error, errorInfo);

    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
  }

  resetError = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <Alert className="border-red-200 bg-red-50">
          <AlertTriangle className="h-4 w-4 text-red-600" />
          <AlertDescription>
            <div className="space-y-3">
              <div>
                <h3 className="font-semibold text-red-900">Something went wrong</h3>
                <p className="text-red-700 text-sm">
                  {this.state.error?.message || "An unexpected error occurred"}
                </p>
              </div>
              <Button onClick={this.resetError} variant="outline" size="sm">
                <RefreshCw className="w-4 h-4 mr-2" />
                Try Again
              </Button>
            </div>
          </AlertDescription>
        </Alert>
      );
    }

    return this.props.children;
  }
}

// Components that intentionally throw errors for demonstration
function BuggyComponent({ shouldThrow }: { shouldThrow: boolean }) {
  if (shouldThrow) {
    throw new Error("Demo error from BuggyComponent");
  }
  return (
    <div className="p-4 border rounded-lg bg-green-50 border-green-200">
      <p className="text-green-800">✅ Component working normally</p>
    </div>
  );
}

// Main example component
export default function ErrorBoundaryExample() {
  const [triggerError, setTriggerError] = useState(false);

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Error Boundary Example</CardTitle>
          <CardDescription>
            Demonstrates React error boundaries with fallback UI and recovery
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="flex gap-2">
            <Button onClick={() => setTriggerError(true)} variant="destructive" size="sm">
              <Bug className="w-4 h-4 mr-2" />
              Trigger Error
            </Button>
            <Button onClick={() => setTriggerError(false)} variant="outline" size="sm">
              <RefreshCw className="w-4 h-4 mr-2" />
              Reset
            </Button>
          </div>

          <ErrorBoundary>
            <BuggyComponent shouldThrow={triggerError} />
          </ErrorBoundary>

          <div className="p-4 bg-muted rounded-lg">
            <h3 className="font-semibold mb-2">Key Features:</h3>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>• Catches JavaScript errors in component tree</li>
              <li>• Displays fallback UI instead of crashing</li>
              <li>• Provides error recovery mechanism</li>
              <li>• Logs errors for debugging and monitoring</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
