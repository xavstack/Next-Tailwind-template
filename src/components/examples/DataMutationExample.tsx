"use client";

import { useState } from "react";
import useSWR from "swr";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { CheckCircle, AlertCircle, Loader2, Trash2, Plus } from "lucide-react";

interface User {
  id: number;
  name: string;
  email: string;
  status: "active" | "inactive";
}

// Mock API
const mockApi = {
  getUsers: async (): Promise<User[]> => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return [
      { id: 1, name: "John Doe", email: "john@example.com", status: "active" },
      { id: 2, name: "Jane Smith", email: "jane@example.com", status: "inactive" },
    ];
  },
  createUser: async (data: Omit<User, "id">): Promise<User> => {
    await new Promise(resolve => setTimeout(resolve, 1500));
    if (Math.random() > 0.8) throw new Error("Failed to create user");
    return { id: Date.now(), ...data };
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  deleteUser: async (id: number): Promise<void> => {
    await new Promise(resolve => setTimeout(resolve, 800));
    if (Math.random() > 0.9) throw new Error("Failed to delete user");
  },
};

export default function DataMutationExample() {
  const [newUser, setNewUser] = useState({ name: "", email: "" });
  const [isCreating, setIsCreating] = useState(false);
  const [deletingId, setDeletingId] = useState<number | null>(null);
  const [notification, setNotification] = useState<string | null>(null);

  const {
    data: users,
    error,
    isLoading,
    mutate,
  } = useSWR<User[]>("/api/users", mockApi.getUsers, { revalidateOnFocus: false });

  const showNotification = (message: string) => {
    setNotification(message);
    setTimeout(() => setNotification(null), 3000);
  };

  const handleCreateUser = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newUser.name || !newUser.email) return;

    setIsCreating(true);
    try {
      const user = await mockApi.createUser({ ...newUser, status: "active" });
      mutate(current => (current ? [...current, user] : [user]), false);
      setNewUser({ name: "", email: "" });
      showNotification("User created successfully!");
    } catch {
      showNotification("Failed to create user");
    } finally {
      setIsCreating(false);
    }
  };

  const handleDeleteUser = async (id: number) => {
    setDeletingId(id);
    try {
      await mockApi.deleteUser(id);
      mutate(current => current?.filter(user => user.id !== id), false);
      showNotification("User deleted successfully!");
    } catch {
      showNotification("Failed to delete user");
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Data Mutation Example</CardTitle>
          <CardDescription>
            SWR with CRUD operations, loading states, and error handling
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          {notification && (
            <Alert className="border-green-200 bg-green-50">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <AlertDescription className="text-green-800">{notification}</AlertDescription>
            </Alert>
          )}

          {/* Create User Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Add New User</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleCreateUser} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    placeholder="Name"
                    value={newUser.name}
                    onChange={e => setNewUser(prev => ({ ...prev, name: e.target.value }))}
                    required
                  />
                  <Input
                    type="email"
                    placeholder="Email"
                    value={newUser.email}
                    onChange={e => setNewUser(prev => ({ ...prev, email: e.target.value }))}
                    required
                  />
                </div>
                <Button type="submit" disabled={isCreating}>
                  {isCreating ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Creating...
                    </>
                  ) : (
                    <>
                      <Plus className="w-4 h-4 mr-2" />
                      Create User
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Users List */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Users</h3>
              <Button variant="outline" onClick={() => mutate()} disabled={isLoading}>
                {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Refresh"}
              </Button>
            </div>

            {isLoading ? (
              <div className="space-y-3">
                {[1, 2].map(i => (
                  <div key={i} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-32" />
                      <Skeleton className="h-3 w-48" />
                    </div>
                    <Skeleton className="h-8 w-16" />
                  </div>
                ))}
              </div>
            ) : error ? (
              <Alert className="border-red-200 bg-red-50">
                <AlertCircle className="h-4 w-4 text-red-600" />
                <AlertDescription className="text-red-800">
                  Failed to load users. Please try refreshing.
                </AlertDescription>
              </Alert>
            ) : users && users.length > 0 ? (
              <div className="space-y-3">
                {users.map(user => (
                  <div
                    key={user.id}
                    className="flex items-center justify-between p-4 border rounded-lg"
                  >
                    <div>
                      <h4 className="font-medium">{user.name}</h4>
                      <p className="text-sm text-muted-foreground">{user.email}</p>
                      <Badge variant={user.status === "active" ? "default" : "secondary"}>
                        {user.status}
                      </Badge>
                    </div>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDeleteUser(user.id)}
                      disabled={deletingId === user.id}
                    >
                      {deletingId === user.id ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        <Trash2 className="w-4 h-4" />
                      )}
                    </Button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-muted-foreground">No users found. Create your first user!</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Key Features</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="text-sm space-y-1 text-muted-foreground">
            <li>• SWR for data fetching with automatic revalidation</li>
            <li>• Optimistic updates for better UX</li>
            <li>• Loading states during mutations</li>
            <li>• Error handling with user feedback</li>
            <li>• Skeleton loading states</li>
            <li>• Manual refresh functionality</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
