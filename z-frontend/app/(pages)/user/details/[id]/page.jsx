import Layout from "@/app/layouts/default";
import SingleUser from "@/app/components/singleUser";
// export const metadata = {
// 	title: "Khalif Al Mahmud - ProfilesPlus User Profile",
// 	description:
// 		"Welcome to Khalif Al Mahmud's user profile on ProfilesPlus - the ultimate User Profile Management System! Explore Khalif's profile, update information, and engage with him effortlessly. ProfilesPlus provides a seamless and secure profile management experience, allowing you to focus on building meaningful connections. Join now and take profile management to the next level!",
// };

const Page = ({ params }) => {
	return (
		<Layout>
			<SingleUser params={params} />
		</Layout>
	);
};
export default Page;
