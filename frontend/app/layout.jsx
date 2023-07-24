import "./style.scss";
import { QueryClientProvider, queryClient } from "./utils/queryClient";
export const metadata = {
	title: "ProfilesPlus: Your Ultimate User Profile Management System",
	description:
		"Welcome to our User Profile Management System! Our platform is designed to provide a seamless and intuitive experience for managing user profiles. With powerful features and a user-friendly interface, you can easily create, update, and view user profiles with just a few clicks. Say goodbye to tedious profile management and embrace the efficiency and convenience of our User Profile Management System. Let us handle the complexities while you focus on what truly matters – building meaningful connections and engaging with your users. Powered by cutting-edge technology, our system ensures data security and privacy, giving you peace of mind. Join us now and take your profile management to the next level!",
};
export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<QueryClientProvider client={queryClient}>
				<body>{children}</body>
			</QueryClientProvider>
		</html>
	);
}
