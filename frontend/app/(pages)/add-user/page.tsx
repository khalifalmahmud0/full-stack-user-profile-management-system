import React from "react";
import Default from "@/app/layouts/default/default";
import AddUserForm from "@/app/components/addUserForm/addUserForm";

const AddUser: React.FC = () => {
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
