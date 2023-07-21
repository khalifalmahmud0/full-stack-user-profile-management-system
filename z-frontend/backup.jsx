"use client";
import { useEffect, useState } from "react";
import { useMutation } from "react-query";
import axios from "axios";
import Image from "next/image";
import cogoToast from "@successtar/cogo-toast";

const AddEditUserForm = ({ type, params }) => {
	const createUserMutation = useMutation((newUserData) =>
		axios.post("http://localhost:5000/api/v1/create-user", newUserData, {})
	);

	const updateUserMutation = useMutation((newUserData) =>
		axios.put(
			`http://localhost:5000/api/v1/update-user/${params.id}`,
			newUserData,
			{}
		)
	);

	const [showSuccessToast, setShowSuccessToast] = useState(false);
	const [showErrorToast, setShowErrorToast] = useState(false);
	const [profilePictureBase64, setProfilePictureBase64] = useState("");
	const [gender, setGender] = useState("male");

	const handleProfilePictureChange = (event) => {
		const file = event.target.files?.[0];
		if (file) {
			const reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onloadend = () => {
				if (typeof reader.result === "string") {
					setProfilePictureBase64(reader.result);
				}
			};
		}
	};

	const handleGenderChange = (event) => {
		setGender(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);
		const newUserData = {
			name: formData.get("name"),
			email: formData.get("email"),
			phone: formData.get("phone"),
			dateOfBirth: formData.get("dateOfBirth"),
			biography: formData.get("biography"),
			address: formData.get("address"),
			profilePicture: profilePictureBase64,
			gender: gender,
		};

		if (type === "ADD") {
			createUserMutation.mutate(newUserData);
		} else if (type === "EDIT") {
			// Check if a new profile picture is selected
			if (profilePictureBase64) {
				newUserData.profilePicture = profilePictureBase64;
			}
			updateUserMutation.mutate(newUserData);
		}
	};

	useEffect(() => {
		if (createUserMutation.isSuccess && !showSuccessToast) {
			cogoToast.success("Success!");
			setShowSuccessToast(true);
		}
		if (updateUserMutation.isSuccess && !showSuccessToast) {
			cogoToast.success("Success!");
			setShowSuccessToast(true);
		}
		if (createUserMutation.isError && !showErrorToast) {
			cogoToast.error("Fail!");
			setShowErrorToast(true);
		}
		if (updateUserMutation.isError && !showErrorToast) {
			cogoToast.error("Fail!");
			setShowErrorToast(true);
		}
	}, [
		createUserMutation.isSuccess,
		updateUserMutation.isSuccess,
		showSuccessToast,
		createUserMutation.isError,
		updateUserMutation.isError,
		showErrorToast,
	]);

	return (
		<>
			<div>
				<form onSubmit={handleSubmit}>
					<div>
						<label htmlFor="name">Name</label>
						<div>
							<input type="text" placeholder="Name" name="name" />
						</div>
					</div>
					<div>
						<label htmlFor="email">Email</label>
						<div>
							<input type="email" placeholder="Email" name="email" />
						</div>
					</div>
					<div>
						<label htmlFor="phone">Phone</label>
						<div>
							<input type="tel" placeholder="Phone" name="phone" />
						</div>
					</div>
					<div>
						<label htmlFor="dateOfBirth">Date of Birth</label>
						<div>
							<input
								type="date"
								placeholder="Date of Birth"
								name="dateOfBirth"
							/>
						</div>
					</div>
					<div>
						<label htmlFor="biography">Biography</label>
						<div>
							<textarea placeholder="Biography" name="biography" />
						</div>
					</div>
					<div>
						<label htmlFor="address">Address</label>
						<div>
							<input type="text" placeholder="Address" name="address" />
						</div>
					</div>
					<div>
						<label htmlFor="gender">Gender</label>
						<div>
							<select
								onChange={handleGenderChange}
								value={gender}
								name="gender"
							>
								<option value="male">Male</option>
								<option value="female">Female</option>
							</select>
						</div>
					</div>
					<div>
						<label htmlFor="profilePicture">Profile Picture</label>
						<div>
							<div>
								<Image
									src={
										profilePictureBase64
											? profilePictureBase64
											: "/blank-avatar.jpeg"
									}
									alt="Profile Preview"
									width={100}
									height={100}
								/>
							</div>
							<input
								type="file"
								id="profilePicture"
								name="profilePicture"
								accept="image/*"
								onChange={handleProfilePictureChange}
							/>
						</div>
					</div>
					<div>
						<button type="submit">
							{type === "ADD" && createUserMutation.isLoading
								? "Adding User..."
								: type === "EDIT" && updateUserMutation.isLoading
								? "Updating User..."
								: "Submit"}
						</button>
					</div>
				</form>
			</div>
		</>
	);
};

export default AddEditUserForm;
