import {
	ReactNode,
	Fonts,
	QueryClientProvider,
	ReactQueryDevtools,
	queryClient,
} from "@/app/import/packages";
import "@/app/style.scss";
interface RootLayoutProps {
	children: ReactNode;
}
const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
	return (
		<>
			<html lang="en" className={Fonts}>
				<body className="bg-[#272727]">
					<QueryClientProvider client={queryClient}>
						<div className="space-y-20">{children}</div>
						<ReactQueryDevtools initialIsOpen={false} />
					</QueryClientProvider>
				</body>
			</html>
		</>
	);
};
export default RootLayout;
