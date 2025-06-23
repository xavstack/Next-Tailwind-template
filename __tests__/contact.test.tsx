/**
 * @jest-environment node
 */
import { POST } from "@/app/api/contact/route";

// Mock the env module to avoid environment validation during tests
jest.mock("@/lib/env", () => ({
  env: {
    NODE_ENV: "development",
    ENABLE_RATE_LIMITING: false,
  },
}));

describe("/api/contact", () => {
  const createRequest = (body: Record<string, unknown>): Request => {
    return {
      json: async () => body,
    } as Request;
  };

  describe("POST", () => {
    it("should successfully process valid contact form data", async () => {
      const validData = {
        name: "John Doe",
        email: "john@example.com",
        message: "This is a test message that is long enough to pass validation.",
      };

      const request = createRequest(validData);
      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(200);
      expect(data.success).toBe(true);
      expect(data.message).toBe("Your message has been received. We'll get back to you soon!");
    });

    it("should reject request with missing name", async () => {
      const invalidData = {
        email: "john@example.com",
        message: "This is a test message that is long enough to pass validation.",
      };

      const request = createRequest(invalidData);
      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(400);
      expect(data.error).toBe("Validation failed");
      expect(data.details).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            field: "name",
            message: "Required",
          }),
        ])
      );
    });

    it("should reject request with invalid email", async () => {
      const invalidData = {
        name: "John Doe",
        email: "not-an-email",
        message: "This is a test message that is long enough to pass validation.",
      };

      const request = createRequest(invalidData);
      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(400);
      expect(data.error).toBe("Validation failed");
      expect(data.details).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            field: "email",
            message: "Invalid email address",
          }),
        ])
      );
    });

    it("should reject request with message too short", async () => {
      const invalidData = {
        name: "John Doe",
        email: "john@example.com",
        message: "Short",
      };

      const request = createRequest(invalidData);
      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(400);
      expect(data.error).toBe("Validation failed");
      expect(data.details).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            field: "message",
            message: "Message must be at least 10 characters",
          }),
        ])
      );
    });

    it("should reject request with message too long", async () => {
      const invalidData = {
        name: "John Doe",
        email: "john@example.com",
        message: "a".repeat(1001), // 1001 characters
      };

      const request = createRequest(invalidData);
      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(400);
      expect(data.error).toBe("Validation failed");
      expect(data.details).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            field: "message",
            message: "Message must be less than 1000 characters",
          }),
        ])
      );
    });

    it("should reject request with name too long", async () => {
      const invalidData = {
        name: "a".repeat(101), // 101 characters
        email: "john@example.com",
        message: "This is a test message that is long enough to pass validation.",
      };

      const request = createRequest(invalidData);
      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(400);
      expect(data.error).toBe("Validation failed");
      expect(data.details).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            field: "name",
            message: "Name must be less than 100 characters",
          }),
        ])
      );
    });

    it("should handle malformed JSON gracefully", async () => {
      const request = {
        json: async () => {
          throw new Error("Invalid JSON");
        },
      } as unknown as Request;

      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(500);
      expect(data.error).toBe("An unexpected error occurred. Please try again later.");
    });
  });
});
