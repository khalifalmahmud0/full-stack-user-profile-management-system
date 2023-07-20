import AddUserForm from "../../components/addUserForm/addUserForm";
import Default from "../../layouts/default/default";

const AddUser = () => {
	return (
		<>
			<Default>
				<div className="Container">
					<div>Nice Title here ...</div>
					<div>
						<AddUserForm />
					</div>
				</div>
			</Default>
		</>
	);
};

export default AddUser;
