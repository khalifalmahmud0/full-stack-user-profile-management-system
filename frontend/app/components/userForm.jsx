"use client";
import { useEffect, useState } from "react";
import { useMutation } from "react-query";
import axios from "axios";
import Image from "next/image";
import Heading from "./mini/heading";
import cogoToast from "cogo-toast";
import { GetData } from "../utils/getApiData";
const UserForm = ({ type, params }) => {
	const createUserMutation = useMutation((newUserData) =>
		axios.post(`${process.env.NEXT_PUBLIC_API_URL}create-user`, newUserData, {})
	);
	const updateUserMutation = useMutation((newUserData) =>
		axios.put(
			`${process.env.NEXT_PUBLIC_API_URL}update-user/${params.id}`,
			newUserData,
			{}
		)
	);
	// global Form Data
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		dateOfBirth: "",
		biography: "",
		address: "",
		profilePicture: "",
		gender: "male",
	});
	// Edit Page a User Data Update
	if (type === "EDIT") {
		const { data } = GetData(
			"users",
			process.env.NEXT_PUBLIC_API_URL + "single-user/" + params.id
		);
		let user = data?.result?.success;

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
		}, [user]);
	}
	// Handle Image Upload
	const handleProfilePictureChange = (event) => {
		const file = event.target.files?.[0];
		if (file) {
			const reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onloadend = () => {
				if (typeof reader.result === "string") {
					setFormData({ ...formData, profilePicture: reader.result });
				}
			};
		}
	};
	// Handle Gender
	const handleGenderChange = (event) => {
		setFormData({ ...formData, gender: event.target.value });
	};
	// Handle Form Submit
	const handleSubmit = (event) => {
		event.preventDefault();
		const xformData = new FormData(event.currentTarget);
		const newUserData = {
			name: xformData.get("name"),
			email: xformData.get("email"),
			phone: xformData.get("phone"),
			dateOfBirth: xformData.get("dateOfBirth"),
			biography: xformData.get("biography"),
			address: xformData.get("address"),
			profilePicture: formData.profilePicture,
			gender: xformData.get("gender"),
		};
		console.log(newUserData);
		if (type === "ADD") {
			createUserMutation.mutate(newUserData);
			setFormData({
				name: "",
				email: "",
				phone: "",
				dateOfBirth: "",
				biography: "",
				address: "",
				profilePicture: "",
				gender: "",
			});
		}
		if (type === "EDIT") {
			updateUserMutation.mutate(newUserData);
		}
	};
	// Show Toast
	const [showSuccessToast, setShowSuccessToast] = useState(false);
	const [showErrorToast, setShowErrorToast] = useState(false);
	useEffect(() => {
		if (createUserMutation.isSuccess && !showSuccessToast) {
			cogoToast.success("User created successfully!");
			setShowSuccessToast(false);
		}
		if (createUserMutation.isError && !showErrorToast) {
			cogoToast.error(
				"Failed to create. Please ensure your email is unique or try again later."
			);
			setShowErrorToast(false);
		}
		// Edit
		if (updateUserMutation.isSuccess && !showSuccessToast) {
			cogoToast.success("User updated successfully!");
			setShowSuccessToast(false);
		}
		if (updateUserMutation.isError && !showErrorToast) {
			cogoToast.error(
				"Failed to update. Please ensure your email is unique or try again later."
			);
			setShowErrorToast(false);
		}
	}, [
		createUserMutation.isSuccess,
		showSuccessToast,
		createUserMutation.isError,
		showErrorToast,
		updateUserMutation.isSuccess,
		showSuccessToast,
		updateUserMutation.isError,
		showErrorToast,
	]);
	return (
		<section id="userFormComponent" className="Container">
			<Heading>
				{type === "EDIT"
					? `Enhancing the Profile of ${formData?.name ? formData?.name : ""}`
					: "Enrich Our Community: Add a New User"}
			</Heading>
			<form
				onSubmit={handleSubmit}
				className="Darkmode mx-auto bg-white rounded-xl shadow-lg px-4 py-10 md:p-16 rounded-lg"
			>
				<div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
					{/* Name  */}
					<div>
						<label
							htmlFor="name"
							className="block text-sm font-semibold leading-6 required"
						>
							Name
						</label>
						<div className="mt-2.5">
							<input
								value={formData?.name}
								onChange={(e) =>
									setFormData({ ...formData, name: e.target.value })
								}
								type="text"
								name="name"
								placeholder='Enter your name... (e.g., "John Smith")'
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
								value={formData?.phone}
								onChange={(e) =>
									setFormData({ ...formData, phone: e.target.value })
								}
								name="phone"
								type="tel"
								placeholder='Enter your phone number...(e.g. "+8801XXXXXXXXX")'
								pattern="^\+8801[0-9]{9}$"
								className="Darkmode rounded-md border-0 px-3.5 h-[50px]  shadow-sm w-full ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
								maxLength={14}
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
								value={
									formData?.dateOfBirth
										? formData?.dateOfBirth.slice(0, 10)
										: formData?.dateOfBirth
								}
								onChange={(e) =>
									setFormData({ ...formData, dateOfBirth: e.target.value })
								}
								name="dateOfBirth"
								type="date"
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
								value={formData?.gender}
								onChange={handleGenderChange}
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
							className="block text-sm font-semibold leading-6 required"
						>
							Email
						</label>
						<div className="mt-2.5">
							<input
								value={formData?.email}
								onChange={(e) =>
									setFormData({ ...formData, email: e.target.value })
								}
								name="email"
								type="email"
								placeholder='Your email address here...(e.g., "john.smith@example.com")'
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
								value={formData?.address}
								onChange={(e) =>
									setFormData({ ...formData, address: e.target.value })
								}
								name="address"
								type="text"
								placeholder='Please provide your complete address... (e.g., "123 Main Street, Anytown, USA")'
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
								value={formData?.biography}
								onChange={(e) =>
									setFormData({ ...formData, biography: e.target.value })
								}
								placeholder='Share your story and achievements with us... (e.g., "Passionate about technology and innovation, with a track record of leading successful projects in the IT industry.")'
								name="biography"
								rows={4}
								className="Darkmode block w-full rounded-md border-0 px-3.5 py-2  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							/>
						</div>
					</div>
					{/* Profile Picture  */}
					<div>
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
										formData?.profilePicture
											? formData?.profilePicture
											: `/avatar.svg`
									}
									alt="Avatar Image"
									className={`rounded-full w-[80px] h-[80px] ${
										formData?.profilePicture ? "" : "dark:invert"
									}`}
									width={100}
									height={100}
								/>
							</div>
							<label className="block">
								<span className="sr-only">Choose profile photo</span>
								<input
									onChange={handleProfilePictureChange}
									type="file"
									className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100
    "
									id="profilePicture"
									name="profilePicture"
									accept="image/*"
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
							{type === "EDIT"
								? updateUserMutation.isLoading
									? "Updating..."
									: "Update Now"
								: createUserMutation.isLoading
								? "Adding User ..."
								: "Add New User"}
						</button>
					</div>
				</div>
			</form>
		</section>
	);
};
export default UserForm;
