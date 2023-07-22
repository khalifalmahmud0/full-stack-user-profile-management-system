import Layout from "@/app/layouts/default";
import UserForm from "@/app/components/userForm";
export const metadata = {
	title: "ProfilesPlus User Profile Editing",
	description:
		"Discover the power of ProfilesPlus - the leading User Profile Management System. Enhance your profile management experience by accessing the Edit feature for user profiles. ProfilesPlus empowers you to effortlessly explore and update user information, facilitating seamless interaction and fostering meaningful connections. Embrace the next level of profile management - Join ProfilesPlus now!",
};

const Page = ({ params }) => {
	return (
		<Layout>
			<UserForm type="EDIT" params={params} />
		</Layout>
	);
};
export default Page;
