"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertTriangle, RefreshCw, Home, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Application Error:", error);

    // In production, you might want to send this to your error monitoring service
    if (process.env.NODE_ENV === "production") {
      // Example: Sentry, LogRocket, Bugsnag, etc.
      // errorReportingService.captureException(error)
    }
  }, [error]);

  // Check if it's a network error or other specific error types
  const isNetworkError = error.message.includes("fetch") || error.message.includes("network");
  const is404Error = error.message.includes("404") || error.message.includes("Not Found");

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-background via-background to-muted/20">
      <Card className="w-full max-w-2xl mx-auto shadow-lg">
        <CardHeader className="text-center pb-4">
          <div className="flex justify-center mb-4">
            <div className="rounded-full bg-destructive/10 p-3">
              <AlertTriangle className="h-8 w-8 text-destructive" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold">
            {is404Error ? "Page Not Found" : "Something went wrong!"}
          </CardTitle>
          <CardDescription className="text-lg">
            {is404Error
              ? "The page you are looking for does not exist."
              : isNetworkError
                ? "We are having trouble connecting to our servers."
                : "An unexpected error occurred while loading this page."}
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Error Details (Development only) */}
          {process.env.NODE_ENV === "development" && (
            <Alert>
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription className="font-mono text-sm">
                <strong>Error Details (Development):</strong>
                <br />
                {error.message}
                {error.digest && (
                  <>
                    <br />
                    <strong>Digest:</strong> {error.digest}
                  </>
                )}
              </AlertDescription>
            </Alert>
          )}

          {/* Recovery Actions */}
          <div className="grid gap-3 sm:grid-cols-2">
            <Button onClick={reset} className="w-full" size="lg">
              <RefreshCw className="mr-2 h-4 w-4" />
              Try Again
            </Button>

            <Button variant="outline" asChild className="w-full" size="lg">
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Go Home
              </Link>
            </Button>
          </div>

          {/* Additional Help */}
          <div className="text-center space-y-2 pt-4 border-t">
            <p className="text-sm text-muted-foreground">If the problem persists, you can:</p>
            <div className="flex flex-col sm:flex-row gap-2 justify-center">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/contact">Report Issue</Link>
              </Button>
              <Button variant="ghost" size="sm" onClick={() => window.history.back()}>
                <ArrowLeft className="mr-1 h-3 w-3" />
                Go Back
              </Button>
            </div>
          </div>

          {/* Error Context */}
          <div className="text-center text-xs text-muted-foreground pt-2">
            Error occurred at {new Date().toLocaleString()}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
