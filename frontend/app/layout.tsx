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
				<body className="bg-[#272727] ">
					<QueryClientProvider client={queryClient}>
						<div className="space-y-10 ">
							<div
								className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
								aria-hidden="true"
							>
								<div className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]" />
							</div>
							{children}
						</div>
						<ReactQueryDevtools initialIsOpen={false} />
					</QueryClientProvider>
				</body>
			</html>
		</>
	);
};
export default RootLayout;
