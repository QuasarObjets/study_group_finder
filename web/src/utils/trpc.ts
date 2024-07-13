// File: /mi-app-estudio/web/src/utils/trpc.ts

import { createReactQueryHooks } from '@trpc/react';
import { createTRPCClient } from '@trpc/client';
import { z } from 'zod';

// Define the API schema using zod
const apiSchema = z.object({
  // Define your API methods here
});

// Create the TRPC client
export const trpc = createTRPCClient({
  url: '/api/trpc',
  transformer: async (data) => {
    // Transform the response data if needed
    return data;
  },
});

// Create the React Query hooks
export const { useQuery, useMutation } = createReactQueryHooks({
  trpc,
  queryDefaults: {
    // Set default options for queries
  },
  mutationDefaults: {
    // Set default options for mutations
  },
});

// Export the API schema
export type APISchema = typeof apiSchema;
export type APIError = z.infer<typeof apiSchema>['error'];
export type APIResponse<T extends z.ZodTypeAny> = z.infer<T>['success'];