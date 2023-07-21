"use client";
import { useEffect, useState } from "react";
import { useMutation } from "react-query";
import axios from "axios";
import Image from "next/image";
import Heading from "./mini/heading";
import cogoToast from "cogo-toast";
const UserForm = ({ type }) => {
	// ................. ADD START ....................
	const createUserMutation = useMutation((newUserData) =>
		axios.post("http://localhost:5000/api/v1/create-user", newUserData, {})
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
	// ................. ADD END ....................
	return (
		<section id="userFormComponent" className="Container">
			<Heading>Meet Our Users (1000)</Heading>
			<form
				onSubmit={handleSubmit}
				className="Darkmode mx-auto bg-white rounded-xl shadow-lg px-4 py-10 md:p-16 rounded-lg"
			>
				<div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
					{/* Name  */}
					<div>
						<label
							htmlFor="name"
							className="block text-sm font-semibold leading-6 "
						>
							First name
						</label>
						<div className="mt-2.5">
							<input
								type="text"
								name="name"
								placeholder="Enter Name"
								required
								className="Darkmode rounded-md border-0 px-3.5 h-[50px]  shadow-sm w-full ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
							/>
						</div>
					</div>
					{/* Phone  */}
					<div>
						<label
							htmlFor="phone"
							className="block text-sm font-semibold leading-6 "
						>
							Phone
						</label>
						<div className="mt-2.5">
							<input
								name="phone"
								type="tel"
								placeholder="Enter Phone Number"
								className="Darkmode rounded-md border-0 px-3.5 h-[50px]  shadow-sm w-full ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
							/>
						</div>
					</div>
					{/* Date of Birth  */}
					<div>
						<label
							htmlFor="dateOfBirth"
							className="block text-sm font-semibold leading-6 "
						>
							Date of Birth
						</label>
						<div className="mt-2.5">
							<input
								name="dateOfBirth"
								type="date"
								placeholder="Date of Birth"
								className="Darkmode rounded-md border-0 px-3.5 h-[50px]  shadow-sm w-full ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
							/>
						</div>
					</div>
					{/* Gender  */}
					<div>
						<label
							htmlFor="gender"
							className="block text-sm font-semibold leading-6 "
						>
							Gender
						</label>
						<div className="mt-2.5">
							<select
								onChange={handleGenderChange}
								value={gender}
								name="gender"
								className="Darkmode rounded-md border-0 px-3.5 h-[50px]  shadow-sm w-full ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
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
							className="block text-sm font-semibold leading-6 "
						>
							Email
						</label>
						<div className="mt-2.5">
							<input
								name="email"
								type="email"
								placeholder="Enter Email Address"
								required
								className="Darkmode rounded-md border-0 px-3.5 h-[50px]  shadow-sm w-full ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
							/>
						</div>
					</div>
					{/* Address  */}
					<div className="sm:col-span-2">
						<label
							htmlFor="address"
							className="block text-sm font-semibold leading-6 "
						>
							Address
						</label>
						<div className="mt-2.5">
							<input
								name="address"
								type="text"
								placeholder="Address"
								className="Darkmode rounded-md border-0 px-3.5 h-[50px]  shadow-sm w-full ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
							/>
						</div>
					</div>
					{/* Biography  */}
					<div className="sm:col-span-2">
						<label
							htmlFor="biography"
							className="block text-sm font-semibold leading-6 "
						>
							Biography
						</label>
						<div className="mt-2.5">
							<textarea
								name="biography"
								placeholder="Biography"
								rows={4}
								className="Darkmode block w-full rounded-md border-0 px-3.5 py-2  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							/>
						</div>
					</div>
					{/* Profile Picture  */}
					<div className="">
						<label
							htmlFor="biography"
							className="block text-sm font-semibold leading-6 "
						>
							Profile Picture
						</label>
						<div className="flex items-center space-x-2 ">
							<div className="shrink-0">
								<Image
									src={
										profilePictureBase64 ? profilePictureBase64 : "/avatar.svg"
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
									className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100
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
					<div className="flex flex-row justify-end items-center">
						<button
							type="submit"
							className="Darkmode w-full md:w-max rounded-md bg-indigo-600 px-12 py-4 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						>
							{createUserMutation.isLoading ? "Adding User..." : "Add User"}
						</button>
					</div>
				</div>
			</form>
		</section>
	);
};
export default UserForm;
