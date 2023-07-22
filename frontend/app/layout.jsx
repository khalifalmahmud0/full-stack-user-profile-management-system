"use client";
import "./style.scss";
import { QueryClient, QueryClientProvider } from "react-query";

export default function RootLayout({ children }) {
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				cacheTime: 300000, // 5 minutes
			},
		},
	});
	return (
		<html lang="en">
			<QueryClientProvider client={queryClient}>
				<body>{children}</body>
			</QueryClientProvider>
		</html>
	);
}
