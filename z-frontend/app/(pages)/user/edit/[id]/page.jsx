import Layout from "@/app/layouts/default";
import UserForm from "@/app/components/userForm";
const Page = ({ params }) => {
	return (
		<Layout>
			<UserForm type="EDIT" params={params} />
		</Layout>
	);
};
export default Page;
