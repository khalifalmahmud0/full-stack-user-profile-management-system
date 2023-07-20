"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Default from "../../../../layouts/default/default";
import { useMutation } from "react-query";
import { GetData } from "../../../../utils/api/getData";
import cogoToast from "@successtar/cogo-toast";
import axios from "axios";
// import Default from "@/app/layouts/default/default";
// import { GetData } from "@/app/utils/api/getData";
// import Image from "next/image";
// import { useMutation } from "react-query";
// import axios from "axios";
// import cogoToast from "cogo-toast";

function EditUserPage({ params }) {
	// Function to fetch the latest user data

	const updateUserMutation = useMutation((newUserData) =>
		axios.put(
			`http://localhost:5000/api/v1/update-user/${params.id}`,
			newUserData,
			{}
		)
	);
	const { data } = GetData(
		"users",
		process.env.NEXT_PUBLIC_API_URL + "single-user/" + params.id
	);
	let user = data?.result?.success;
	const [showSuccessToast, setShowSuccessToast] = useState(false);
	const [showErrorToast, setShowErrorToast] = useState(false);
	const [profilePictureBase64, setProfilePictureBase64] = useState("");
	const [gender, setGender] = useState("male");
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		dateOfBirth: "",
		biography: "",
		address: "",
		profilePicture: "",
		gender: "",
	});
	useEffect(() => {
		if (user) {
			setFormData({
				name: user.name,
				email: user.email,
				phone: user.phone,
				dateOfBirth: user.dateOfBirth,
				biography: user.biography,
				address: user.address,
				profilePicture: user.profilePicture,
				gender: user.gender,
			});
		}
		if (updateUserMutation.isSuccess && !showSuccessToast) {
			cogoToast.success("Success!");
			setShowSuccessToast(true);
		}
		if (updateUserMutation.isError && !showErrorToast) {
			cogoToast.error("Fail!");
			setShowErrorToast(true);
		}
	}, [
		user,
		updateUserMutation.isSuccess,
		showSuccessToast,
		updateUserMutation.isError,
		showErrorToast,
	]);
	const handleProfilePictureChange = (event) => {
		const file = event.target.files?.[0];
		if (file) {
			const reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onloadend = () => {
				if (typeof reader.result === "string") {
					setProfilePictureBase64(reader.result);
					setFormData({ ...formData, profilePicture: reader.result });
				}
			};
		}
	};
	const handleGenderChange = (event) => {
		setGender(event.target.value);
		setFormData({ ...formData, gender: event.target.value });
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
			profilePicture: "",
			gender: gender,
		};
		// Check if a new profile picture is selected
		if (profilePictureBase64) {
			newUserData.profilePicture = profilePictureBase64;
		} else {
			// If no new picture is selected, keep the existing one
			newUserData.profilePicture = user?.profilePicture;
		}
		// console.log(newUserData);
		updateUserMutation.mutate(newUserData);
	};
	return (
		<>
			<Default>
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
										value={formData.name}
										onChange={(e) =>
											setFormData({ ...formData, name: e.target.value })
										}
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
										value={formData.phone}
										onChange={(e) =>
											setFormData({ ...formData, phone: e.target.value })
										}
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
										value={formData.dateOfBirth.slice(0, 10)}
										// value="2018-07-22"
										onChange={(e) =>
											setFormData({ ...formData, dateOfBirth: e.target.value })
										}
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
										value={formData?.gender}
										onChange={handleGenderChange}
										// value={gender}
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
										value={formData.email}
										onChange={(e) =>
											setFormData({ ...formData, email: e.target.value })
										}
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
										value={formData.address}
										onChange={(e) =>
											setFormData({ ...formData, address: e.target.value })
										}
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
										value={formData.biography}
										onChange={(e) =>
											setFormData({ ...formData, biography: e.target.value })
										}
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
										// value={formData.name}
										// onChange={(e) =>
										// 	setFormData({ ...formData, name: e.target.value })
										// }
										// src={
										// 	profilePictureBase64
										// 		? profilePictureBase64
										// 		: "/blank-avatar.jpeg"
										// }
										src={
											formData?.profilePicture
												? formData?.profilePicture
												: `/blank-avatar.jpeg`
										}
										alt="Profile Preview"
										className="rounded-full w-[80px] h-[80px]"
										width={100}
										height={100}
										// value={user?.dateOfBirth}
									/>
								</div>
								<label className="block">
									<span className="sr-only">Choose profile photo</span>
									<input
										type="file"
										className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
										id="profilePicture"
										name="profilePicture"
										accept="image/*"
										// onChange={(e) =>
										// 	setFormData({ ...formData, name: e.target.value })
										// }
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
								{/* {createUserMutation.isLoading ? "Adding User..." : "Add User"} */}
								ABC
							</button>
						</div>
					</form>
				</div>
			</Default>
		</>
	);
}

export default EditUserPage;
