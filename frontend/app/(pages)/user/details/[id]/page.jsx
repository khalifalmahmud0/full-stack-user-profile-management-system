import Layout from "@/app/layouts/default";
import SingleUser from "@/app/components/singleUser";
export const metadata = {
	title: "ProfilesPlus User Profile Details",
	description:
		"Discover the comprehensive user profile experience on ProfilesPlus - the ultimate User Profile Management System! Immerse yourself in exploring user profiles, effortlessly updating information, and engaging with others. ProfilesPlus ensures a seamless and secure profile management encounter, enabling you to prioritize meaningful connections. Don't miss out on the opportunity to elevate your profile management - Join ProfilesPlus now!",
};

const Page = ({ params }) => {
	return (
		<Layout>
			<SingleUser params={params} />
		</Layout>
	);
};
export default Page;
