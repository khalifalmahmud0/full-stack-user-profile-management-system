import Layout from "@/app/layouts/default";
import UserForm from "@/app/components/userForm";
export const metadata = {
	title: "Add New User - ProfilesPlus User Profile Management System",
	description:
		"Easily add a new user to your User Profile Management System with ProfilesPlus. Our platform offers a seamless and intuitive experience for creating and managing user profiles. With powerful features and a user-friendly interface, you can effortlessly add user information and start building meaningful connections with your audience. Join us now and take advantage of the cutting-edge technology that ensures data security and privacy, giving you peace of mind. Simplify your profile management process with ProfilesPlus!",
};

const Page = () => {
	return (
		<Layout>
			<UserForm type="ADD" />
		</Layout>
	);
};
export default Page;
