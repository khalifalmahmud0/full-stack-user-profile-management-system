"use client";
import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useMutation } from "react-query";
import Default from "@/app/layouts/default/default";
import { GetData } from "@/app/utils/api/getData";
import Image from "next/image";
import axios from "axios";
import cogoToast from "cogo-toast";
const UserDetailsPage = ({ params }: any) => {
	const { data } = GetData(
		"users",
		process.env.NEXT_PUBLIC_API_URL + "single-user/" + params.id
	);
	const deleteUserMutation = useMutation((userId: any) => {
		return axios.delete(`http://localhost:5000/api/v1/delete-user/${userId}`);
	});
	//
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
	//
	const handleDeleteClick = () => {
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
				// Call the delete mutation when user confirms
				deleteUserMutation.mutate(params.id);
			}
		});
	};

	return (
		<Default>
			<div className="Container">
				<div className="mainContent mx-auto max-w-6xl bg-white p-4 md:p-16 rounded-lg">
					<div className="top">
						<div className="grid grid-cols-12 items-center">
							<div className="col-span-4">
								<p>{data?.result?.success?.phone}</p>
								<p>{data?.result?.success?.email}</p>
							</div>
							<div className="col-span-4 flex justify-center">
								<Image
									className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
									src={
										data?.result?.success?.profilePicture
											? data?.result?.success?.profilePicture
											: data?.result?.success?.gender === "male"
											? "/male.svg"
											: "/female.svg"
									}
									alt="Woman's Face"
									width={100}
									height={100}
								/>
							</div>
							<div className="col-span-4 flex justify-end">
								<button>Edit</button>
								<button onClick={handleDeleteClick}>Delete</button>
							</div>
						</div>
					</div>
					<div className="center border-b border-[#4d4d4d] py-[35px] mb-[35px] text-center">
						<h1>{data?.result?.success?.name}</h1>
						<p>{data?.result?.success?.gender}</p>
						<p>{data?.result?.success?.dateOfBirth}</p>
						<p>{data?.result?.success?.address}</p>
					</div>
					<div className="bottom text-center">
						{data?.result?.success?.biography}
					</div>
				</div>
			</div>
		</Default>
	);
};

export default UserDetailsPage;
