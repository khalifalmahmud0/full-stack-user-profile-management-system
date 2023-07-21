"use client";
import Image from "next/image";
import Link from "next/link";
import Heading from "./mini/heading";
import { GetData } from "../utils/getApiData";
import cogoToast from "cogo-toast";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import { useMutation } from "react-query";
import axios from "axios";
import { redirect } from "next/navigation";
const SingleUser = ({ params }) => {
	// :::::::::: API CALL ::::::::::
	// Get this User Data
	const { data } = GetData(
		`users-${params?.id}`,
		process.env.NEXT_PUBLIC_API_URL + "single-user/" + params?.id
	);
	let result = data?.result?.success;
	// Delete this User
	const deleteUserMutation = useMutation((userId) => {
		return axios.delete(`http://localhost:5000/api/v1/delete-user/${userId}`);
	});

	// UseState & UseEffect = Related With User Delete Functionality
	const [showSuccessToast, setShowSuccessToast] = useState(false);
	const [showErrorToast, setShowErrorToast] = useState(false);
	useEffect(() => {
		if (deleteUserMutation.isSuccess && !showSuccessToast) {
			cogoToast.success("Success!");
			setShowSuccessToast(true);
			redirect("/");
		}
		if (deleteUserMutation.isError && !showErrorToast) {
			cogoToast.error("Fail!");
			setShowErrorToast(true);
		}
	}, [
		deleteUserMutation.isSuccess,
		showSuccessToast,
		deleteUserMutation.isError,
		showErrorToast,
	]);

	// Delete User Popup
	const deleteUser = () => {
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!",
		}).then((result) => {
			if (result.isConfirmed) {
				deleteUserMutation.mutate(params.id);
			}
		});
	};
	return (
		<section id="singleUserComponent" className="Container ">
			<Heading>Explore {result?.name}'s Universe</Heading>
			<div className="Darkmode grid grid-cols-12 bg-white shadow-lg px-4 py-10 md:p-16 rounded-lg items-center">
				{/* Email - Mobile  */}
				<div className="col-span-12 order-4 text-center md:col-span-4 md:order-1 xl:flex xl:justify-center xl:gap-x-6 space-y-1 pt-1 items-center">
					<p className="flex justify-center xl:pr-3">
						<Image
							className="w-7 h-7 pr-2"
							src={"/email.svg"}
							width={100}
							height={100}
						/>
						{result?.email}
					</p>
					<p className="flex justify-center">
						<Image
							className="w-7 h-7 pr-2"
							src={"/phone.svg"}
							width={100}
							height={100}
						/>
						{result?.phone}
					</p>
				</div>
				{/* Profile Image  */}
				<div className="col-span-12 order-2 py-5 md:col-span-4 md:order-2">
					<Image
						className="block mx-auto w-28 rounded-full "
						src={
							result?.profilePicture ? result?.profilePicture : "/avatar.svg"
						}
						alt="User Avatar"
						width={100}
						height={100}
					/>
				</div>
				{/* Edit - Delete Icon  */}
				<div className="col-span-12 order-1 text-center md:col-span-4 md:order-3 flex justify-end md:justify-center items-center space-x-3 ">
					<Link href={`/user/edit/${params.id}`}>
						<Image
							className="w-8 h-8"
							src={"/edit.svg"}
							width={100}
							height={100}
						/>
					</Link>
					<button onClick={deleteUser}>
						<Image
							className="w-8 h-8"
							src={"/delete.svg"}
							width={100}
							height={100}
						/>
					</button>
				</div>
				{/* Name  */}
				<div className="col-span-12 order-3 text-center md:order-4 text-xl font-bold">
					<h1>{result?.name}</h1>
				</div>
				{/* DOB - Gender - Address  */}
				<div className="col-span-12 order-5 text-center md:order-5 space-y-1 pt-1">
					<p className="flex justify-center">
						<Image
							className="w-7 h-7 pr-2"
							src={"/birthday.svg"}
							width={100}
							height={100}
						/>
						{result?.dateOfBirth}
					</p>
					<p className="flex justify-center">
						<Image
							className="w-7 h-7 pr-2"
							src={"/gender.svg"}
							width={100}
							height={100}
						/>
						{result?.gender}
					</p>
					<p className="flex justify-center">
						<Image
							className="w-7 h-7 pr-2"
							src={"/location.svg"}
							width={100}
							height={100}
						/>
						{result?.address}
					</p>
				</div>
				{/* Biography  */}
				<div className="col-span-12 order-6 text-center md:order-6 border-t-2 pt-3 mt-3 md:pt-4 xl:pt-6 2xl:pt-8 md:mt-8">
					<p>{result?.biography}</p>
				</div>
			</div>
		</section>
	);
};
export default SingleUser;
