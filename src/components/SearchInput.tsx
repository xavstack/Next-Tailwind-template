"use client";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export function SearchInput() {
  return (
    <div className="max-w-md mx-auto">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input
          placeholder="Search for pages or features..."
          className="pl-10"
          onKeyDown={e => {
            if (e.key === "Enter") {
              // Simple search implementation - redirect to home with query
              const query = (e.target as HTMLInputElement).value;
              window.location.href = `/?search=${encodeURIComponent(query)}`;
            }
          }}
        />
      </div>
      <p className="text-xs text-muted-foreground mt-2">Press Enter to search</p>
    </div>
  );
}
