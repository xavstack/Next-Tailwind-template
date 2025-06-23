import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Header Skeleton */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <Skeleton className="h-12 w-96 mx-auto mb-4" />
          <Skeleton className="h-6 w-[600px] mx-auto mb-2" />
          <Skeleton className="h-6 w-[500px] mx-auto" />
        </div>

        {/* Navigation Skeleton */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-2">
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} className="h-10 w-32" />
            ))}
          </div>
        </div>

        {/* Cards Grid Skeleton */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {Array.from({ length: 9 }).map((_, i) => (
            <Card key={i} className="relative overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <Skeleton className="h-6 w-6 rounded" />
                  <Skeleton className="h-6 w-32" />
                </div>
                <Skeleton className="h-4 w-full mb-2" />
                <div className="flex items-center gap-2">
                  <Skeleton className="h-5 w-20 rounded-full" />
                </div>
              </CardHeader>
              <CardContent>
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-3/4" />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Demo Section Skeleton */}
        <div className="space-y-12">
          {/* Tabs Skeleton */}
          <div className="w-full">
            <div className="flex space-x-1 mb-6">
              {Array.from({ length: 5 }).map((_, i) => (
                <Skeleton key={i} className="h-10 w-24" />
              ))}
            </div>

            {/* Tab Content */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Skeleton className="h-5 w-5" />
                  <Skeleton className="h-6 w-40" />
                </div>
                <Skeleton className="h-4 w-full mb-1" />
                <Skeleton className="h-4 w-2/3" />
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-3">
                    {Array.from({ length: 4 }).map((_, i) => (
                      <div key={i} className="space-y-2">
                        <Skeleton className="h-4 w-24" />
                        <Skeleton className="h-8 w-full" />
                        <Skeleton className="h-3 w-full" />
                      </div>
                    ))}
                  </div>
                  <div className="space-y-2">
                    <Skeleton className="h-32 w-full" />
                    <div className="grid grid-cols-2 gap-2">
                      <Skeleton className="h-8 w-full" />
                      <Skeleton className="h-8 w-full" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Footer Skeleton */}
          <div className="text-center space-y-4 pt-8 border-t">
            <Skeleton className="h-8 w-64 mx-auto" />
            <div className="flex justify-center space-x-4">
              {Array.from({ length: 3 }).map((_, i) => (
                <Skeleton key={i} className="h-4 w-20" />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Loading Animation */}
      <div className="fixed bottom-8 right-8">
        <div className="flex items-center gap-3 bg-background/80 backdrop-blur-sm border rounded-lg p-3 shadow-lg">
          <div className="animate-spin rounded-full h-4 w-4 border-2 border-primary border-t-transparent"></div>
          <span className="text-sm text-muted-foreground">Loading...</span>
        </div>
      </div>
    </div>
  );
}
