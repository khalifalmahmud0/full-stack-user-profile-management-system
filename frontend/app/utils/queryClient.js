"use client";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			cacheTime: 300000, // default cache time
		},
	},
});
export { queryClient, QueryClientProvider };
