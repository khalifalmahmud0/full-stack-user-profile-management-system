"use client";
import React, { useEffect, useState } from "react";
import { useMutation } from "react-query";
import axios from "axios";
import Image from "next/image";
import cogoToast from "cogo-toast";
import "./addUserForm.scss";
import moment from "moment";
const AddUserForm: React.FC = () => {
	const createUserMutation = useMutation((newUserData: any) =>
		axios.post("http://localhost:5000/api/v1/create-user", newUserData, {})
	);
	const [showSuccessToast, setShowSuccessToast] = useState(false);
	const [showErrorToast, setShowErrorToast] = useState(false);
	const [profilePictureBase64, setProfilePictureBase64] = useState<string>("");
	const [gender, setGender] = useState<string>("male");

	const handleProfilePictureChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
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

	const handleGenderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setGender(event.target.value);
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);
		const newUserData = {
			name: formData.get("name"),
			email: formData.get("email"),
			phone: formData.get("phone"),
			dateOfBirth: formData.get("dateOfBirth"),
			// dateOfBirth: formData.get("dateOfBirth"),
			biography: formData.get("biography"),
			address: formData.get("address"),
			profilePicture: profilePictureBase64,
			gender: gender,
		};

		createUserMutation.mutate(newUserData);
	};
	useEffect(() => {
		if (createUserMutation.isSuccess && !showSuccessToast) {
			cogoToast.success("Success!");
			setShowSuccessToast(true);
		}
		if (createUserMutation.isError && !showErrorToast) {
			cogoToast.error("Fail!");
			setShowErrorToast(true);
		}
	}, [
		createUserMutation.isSuccess,
		showSuccessToast,
		createUserMutation.isError,
		showErrorToast,
	]);
	return (
		<>
			{/* ....................  */}
			<div className="isolate px-4 ">
				<form
					onSubmit={handleSubmit}
					className="mx-auto  max-w-6xl  bg-white p-4 md:p-16 rounded-lg"
				>
					<div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
						{/* Name  */}
						<div>
							<label
								htmlFor="name"
								className="block text-sm font-semibold leading-6 text-gray-900"
							>
								First name
							</label>
							<div className="mt-2.5">
								<input
									type="text"
									name="name"
									placeholder="Enter Name"
									required
									className="rounded-md border-0 px-3.5 h-[50px] text-gray-900 shadow-sm w-full ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
								/>
							</div>
						</div>
						{/* Phone  */}
						<div>
							<label
								htmlFor="phone"
								className="block text-sm font-semibold leading-6 text-gray-900"
							>
								Phone
							</label>
							<div className="mt-2.5">
								<input
									name="phone"
									type="tel"
									placeholder="Enter Phone Number"
									className="rounded-md border-0 px-3.5 h-[50px] text-gray-900 shadow-sm w-full ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
								/>
							</div>
						</div>
						{/* Date of Birth  */}
						<div>
							<label
								htmlFor="dateOfBirth"
								className="block text-sm font-semibold leading-6 text-gray-900"
							>
								Date of Birth
							</label>
							<div className="mt-2.5">
								<input
									name="dateOfBirth"
									type="date"
									placeholder="Date of Birth"
									className="rounded-md border-0 px-3.5 h-[50px] text-gray-900 shadow-sm w-full ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
								/>
							</div>
						</div>
						{/* Gender  */}
						<div>
							<label
								htmlFor="gender"
								className="block text-sm font-semibold leading-6 text-gray-900"
							>
								Gender
							</label>
							<div className="mt-2.5">
								<select
									onChange={handleGenderChange}
									value={gender}
									name="gender"
									className="rounded-md border-0 px-3.5 h-[50px] text-gray-900 shadow-sm w-full ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
								>
									<option value="male">Male</option>
									<option value="female">Female</option>
								</select>
							</div>
						</div>
						{/* Email  */}
						<div className="sm:col-span-2">
							<label
								htmlFor="email"
								className="block text-sm font-semibold leading-6 text-gray-900"
							>
								Email
							</label>
							<div className="mt-2.5">
								<input
									name="email"
									type="email"
									placeholder="Enter Email Address"
									required
									className="rounded-md border-0 px-3.5 h-[50px] text-gray-900 shadow-sm w-full ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
								/>
							</div>
						</div>
						{/* Address  */}
						<div className="sm:col-span-2">
							<label
								htmlFor="address"
								className="block text-sm font-semibold leading-6 text-gray-900"
							>
								Address
							</label>
							<div className="mt-2.5">
								<input
									name="address"
									type="text"
									placeholder="Address"
									className="rounded-md border-0 px-3.5 h-[50px] text-gray-900 shadow-sm w-full ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
								/>
							</div>
						</div>
						{/* Biography  */}
						<div className="sm:col-span-2">
							<label
								htmlFor="biography"
								className="block text-sm font-semibold leading-6 text-gray-900"
							>
								Biography
							</label>
							<div className="mt-2.5">
								<textarea
									name="biography"
									placeholder="Biography"
									rows={4}
									className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									defaultValue={""}
								/>
							</div>
						</div>
					</div>

					{/* Profile Picture  */}
					<div className="sm:col-span-2 mt-6">
						<label
							htmlFor="biography"
							className="block text-sm font-semibold leading-6 text-gray-900"
						>
							Profile Picture
						</label>
						<div className="flex items-center space-x-2 ">
							<div className="shrink-0">
								<Image
									src={
										profilePictureBase64
											? profilePictureBase64
											: "/blank-avatar.jpeg"
									}
									alt="Profile Preview"
									className="rounded-full w-[80px] h-[80px]"
									width={100}
									height={100}
								/>
							</div>
							<label className="block">
								<span className="sr-only">Choose profile photo</span>
								<input
									type="file"
									className="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100
    "
									id="profilePicture"
									name="profilePicture"
									accept="image/*"
									onChange={handleProfilePictureChange}
								/>
							</label>
						</div>
					</div>

					{/* Submit Button  */}
					<div className="mt-10">
						<button
							type="submit"
							className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						>
							{createUserMutation.isLoading ? "Adding User..." : "Add User"}
						</button>
					</div>
				</form>
			</div>
			{/* ..........................  */}
			{/* <form onSubmit={handleSubmit}>
				<div className="mb-4">
					<label htmlFor="name">Name</label>
					<input name="name" type="text" placeholder="Name" required />
				</div>

				<div className="mb-4">
					<label htmlFor="email">Email</label>
					<input name="email" type="email" placeholder="Email" required />
				</div>

				<div className="mb-4">
					<label htmlFor="phone">Phone</label>
					<input name="phone" type="tel" placeholder="Phone" />
				</div>

				<div className="mb-4">
					<label htmlFor="dateOfBirth">Date of Birth</label>
					<input name="dateOfBirth" type="date" placeholder="Date of Birth" />
				</div>

				<div className="mb-4">
					<label htmlFor="biography">Biography</label>
					<textarea
						name="biography"
						placeholder="Biography"
						rows={4}
					></textarea>
				</div>

				<div className="mb-4">
					<label htmlFor="address">Address</label>
					<input name="address" type="text" placeholder="Address" />
				</div>

				<div className="mb-4">
					<label htmlFor="gender">Gender</label>
					<select name="gender" onChange={handleGenderChange} value={gender}>
						<option value="male">Male</option>
						<option value="female">Female</option>
					</select>
				</div>

				<div className="flex items-center space-x-6 mb-4">
					<div className="shrink-0">
						<Image
							src={
								profilePictureBase64
									? profilePictureBase64
									: gender === "male"
									? "/male.svg"
									: "/female.svg"
							}
							alt="Profile Preview"
							className="rounded-full w-[80px] h-[80px]"
							width={100}
							height={100}
						/>
					</div>
					<label className="block">
						<span className="sr-only">Choose profile photo</span>
						<input
							type="file"
							className="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100
    "
							id="profilePicture"
							name="profilePicture"
							accept="image/*"
							onChange={handleProfilePictureChange}
						/>
					</label>
				</div>
				<div>
					<button type="submit">
						{createUserMutation.isLoading ? "Adding User..." : "Add User"}
					</button>
				</div>
			</form> */}
		</>
	);
};

export default AddUserForm;
