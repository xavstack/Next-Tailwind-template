"use client";

import useSWR from "swr";
import fetcher from "@/lib/fetcher";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { RefreshCw, Wifi, WifiOff, Loader2 } from "lucide-react";
import { useState } from "react";

// Example data type for demonstration
interface ExamplePost {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface ApiError {
  message: string;
  status?: number;
}

export function SWRExample() {
  const [selectedUserId, setSelectedUserId] = useState<number>(1);

  // Primary SWR usage example - fetching posts
  const {
    data: posts,
    error: postsError,
    isLoading: postsLoading,
    mutate: refreshPosts,
  } = useSWR<ExamplePost[], ApiError>(
    `https://jsonplaceholder.typicode.com/posts?userId=${selectedUserId}`,
    fetcher,
    {
      revalidateOnFocus: false,
      refreshInterval: 0, // Disable auto-refresh for demo
      errorRetryCount: 3,
      errorRetryInterval: 1000,
    }
  );

  // Secondary SWR usage - user info
  const {
    data: user,
    error: userError,
    isLoading: userLoading,
  } = useSWR<{ id: number; name: string; email: string }, ApiError>(
    `https://jsonplaceholder.typicode.com/users/${selectedUserId}`,
    fetcher
  );

  // Conditional SWR - only fetch if posts exist
  const shouldFetchComments = posts && posts.length > 0;
  const {
    data: comments,
    error: commentsError,
    isLoading: commentsLoading,
  } = useSWR(
    shouldFetchComments
      ? `https://jsonplaceholder.typicode.com/comments?postId=${posts[0]?.id}`
      : null,
    fetcher
  );

  const handleRefresh = () => {
    refreshPosts();
  };

  const handleUserChange = (userId: number) => {
    setSelectedUserId(userId);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>SWR Data Fetching Demo</span>
            <Button variant="outline" size="sm" onClick={handleRefresh} disabled={postsLoading}>
              {postsLoading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <RefreshCw className="h-4 w-4" />
              )}
              Refresh
            </Button>
          </CardTitle>
          <CardDescription>
            Demonstrating SWR patterns: fetching, loading states, error handling, and revalidation.
            Uses the configured <code>lib/fetcher.ts</code> utility.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* User Selection */}
          <div className="flex gap-2 flex-wrap">
            <span className="text-sm font-medium">Select User:</span>
            {[1, 2, 3, 4, 5].map(userId => (
              <Button
                key={userId}
                variant={selectedUserId === userId ? "default" : "outline"}
                size="sm"
                onClick={() => handleUserChange(userId)}
              >
                User {userId}
              </Button>
            ))}
          </div>

          {/* User Info Section */}
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              User Information
              {userLoading && <Loader2 className="h-4 w-4 animate-spin" />}
            </h3>
            {userError ? (
              <div className="flex items-center gap-2 text-destructive">
                <WifiOff className="h-4 w-4" />
                <span>Error loading user: {userError.message}</span>
              </div>
            ) : userLoading ? (
              <div className="flex items-center gap-2 text-muted-foreground">
                <Loader2 className="h-4 w-4 animate-spin" />
                <span>Loading user data...</span>
              </div>
            ) : user ? (
              <div className="space-y-1">
                <p>
                  <strong>Name:</strong> {user.name}
                </p>
                <p>
                  <strong>Email:</strong> {user.email}
                </p>
                <Badge variant="secondary" className="mt-2">
                  <Wifi className="h-3 w-3 mr-1" />
                  Data loaded via SWR
                </Badge>
              </div>
            ) : null}
          </div>

          {/* Posts Section */}
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              User Posts ({posts?.length || 0})
              {postsLoading && <Loader2 className="h-4 w-4 animate-spin" />}
            </h3>
            {postsError ? (
              <div className="flex items-center gap-2 text-destructive">
                <WifiOff className="h-4 w-4" />
                <span>Error loading posts: {postsError.message}</span>
              </div>
            ) : postsLoading ? (
              <div className="flex items-center gap-2 text-muted-foreground">
                <Loader2 className="h-4 w-4 animate-spin" />
                <span>Loading posts...</span>
              </div>
            ) : posts && posts.length > 0 ? (
              <div className="space-y-2 max-h-60 overflow-y-auto">
                {posts.slice(0, 3).map(post => (
                  <div key={post.id} className="p-3 bg-muted rounded border-l-2 border-primary">
                    <h4 className="font-medium text-sm">{post.title}</h4>
                    <p className="text-xs text-muted-foreground line-clamp-2 mt-1">{post.body}</p>
                  </div>
                ))}
                {posts.length > 3 && (
                  <p className="text-xs text-muted-foreground">
                    ... and {posts.length - 3} more posts
                  </p>
                )}
              </div>
            ) : (
              <p className="text-muted-foreground">No posts found</p>
            )}
          </div>

          {/* Conditional Comments Section */}
          {shouldFetchComments && (
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                Comments on First Post
                {commentsLoading && <Loader2 className="h-4 w-4 animate-spin" />}
                <Badge variant="outline" className="text-xs">
                  Conditional SWR
                </Badge>
              </h3>
              {commentsError ? (
                <div className="flex items-center gap-2 text-destructive">
                  <WifiOff className="h-4 w-4" />
                  <span>Error loading comments: {commentsError.message}</span>
                </div>
              ) : commentsLoading ? (
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Loading comments...</span>
                </div>
              ) : comments && comments.length > 0 ? (
                <div className="space-y-2 max-h-40 overflow-y-auto">
                  {comments
                    .slice(0, 2)
                    .map((comment: { id: number; name: string; body: string }) => (
                      <div key={comment.id} className="p-2 bg-muted/50 rounded text-xs">
                        <p className="font-medium">{comment.name}</p>
                        <p className="text-muted-foreground">{comment.body.substring(0, 100)}...</p>
                      </div>
                    ))}
                  {comments.length > 2 && (
                    <p className="text-xs text-muted-foreground">
                      ... and {comments.length - 2} more comments
                    </p>
                  )}
                </div>
              ) : (
                <p className="text-muted-foreground text-sm">No comments found</p>
              )}
            </div>
          )}

          {/* SWR Features Explanation */}
          <div className="border rounded-lg p-4 bg-muted/20">
            <h3 className="font-semibold mb-2">SWR Features Demonstrated</h3>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>
                • <strong>Loading States:</strong> Visual indicators for data fetching
              </li>
              <li>
                • <strong>Error Handling:</strong> Graceful error display with retry logic
              </li>
              <li>
                • <strong>Manual Revalidation:</strong> Refresh button triggers data refetch
              </li>
              <li>
                • <strong>Conditional Fetching:</strong> Comments only load when posts exist
              </li>
              <li>
                • <strong>Multiple Endpoints:</strong> Parallel data fetching for user + posts
              </li>
              <li>
                • <strong>Configuration:</strong> Custom revalidation and retry settings
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
