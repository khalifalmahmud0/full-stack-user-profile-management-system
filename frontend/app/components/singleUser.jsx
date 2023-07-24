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
import LoadingSkeleton from "./skeleton";

/**
 * Renders the single user component.
 *
 * @param {Object} params - The parameters object.
 * @param {string} params.id - The ID of the user.
 * @return {JSX.Element} The JSX element representing the single user component.
 */
const SingleUser = ({ params }) => {
	// Function to format date in a specific format
	function formatDate(dateString) {
		const options = { day: "numeric", month: "long", year: "numeric" };
		const formattedDate = new Date(dateString).toLocaleDateString(
			"en-GB",
			options
		);
		return formattedDate;
	}
	// Fetch the data of this user using the 'GetData' function
	const { data, isLoading } = GetData(
		`users-${params?.id}`,
		process.env.NEXT_PUBLIC_API_URL + "single-user/" + params?.id
	);
	let result = data?.result?.success;

	// Create a mutation hook 'deleteUserMutation' to handle user deletion
	const deleteUserMutation = useMutation((userId) => {
		return axios.delete(
			`${process.env.NEXT_PUBLIC_API_URL}delete-user/${userId}`
		);
	});

	// UseState & UseEffect = Related With User Delete Functionality
	const [showSuccessToast, setShowSuccessToast] = useState(false);
	const [showErrorToast, setShowErrorToast] = useState(false);

	// Set up an effect to show success or error toasts when user deletion succeeds or fails
	useEffect(() => {
		if (deleteUserMutation.isSuccess && !showSuccessToast) {
			cogoToast.success("User deletion successful!");
			setShowSuccessToast(false);
			redirect("/");
		}
		if (deleteUserMutation.isError && !showErrorToast) {
			cogoToast.error("Failed to delete user!");
			setShowErrorToast(false);
		}
	}, [
		deleteUserMutation.isSuccess,
		showSuccessToast,
		deleteUserMutation.isError,
		showErrorToast,
	]);

	// Function to show a confirmation popup when the user clicks the delete button
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
				// If the user confirms deletion, call the 'deleteUserMutation' hook with the user ID
				deleteUserMutation.mutate(params.id);
			}
		});
	};

	// Return the JSX for the 'SingleUser' component
	return (
		<section id="singleUserComponent" className="Container ">
			<Heading>
				Explore{" "}
				{!isLoading ? (
					result?.name + `'s `
				) : (
					<>
						<LoadingSkeleton height={25} width={70} />
					</>
				)}
				Universe
			</Heading>
			<div className="darkMode grid grid-cols-12 bg-white shadow-lg px-4 py-10 md:p-16 rounded-lg items-center gap-y-2">
				{/* Email - Mobile  */}
				<div className="col-span-12 order-4 text-center md:col-span-4 md:order-1 space-y-1 pt-1 ">
					{!isLoading ? (
						<p className="flex justify-center md:justify-start xl:pr-3 break-all">
							<Image
								className="w-7 h-7 pr-2"
								alt="email-icon"
								src={"/email.svg"}
								width={100}
								height={100}
							/>
							{result?.email}
						</p>
					) : (
						<p className="flex justify-center md:justify-start xl:pr-3">
							<LoadingSkeleton height={25} width={150} />
						</p>
					)}

					{!isLoading ? (
						result?.phone ? (
							<p className="flex justify-center md:justify-start break-all">
								<Image
									className="w-7 h-7 pr-2"
									alt="phone-icon"
									src={"/phone.svg"}
									width={100}
									height={100}
								/>
								{result?.phone}
							</p>
						) : (
							<p></p>
						)
					) : (
						<p className="flex justify-center md:justify-start">
							<LoadingSkeleton height={25} width={150} />
						</p>
					)}
				</div>
				{/* Profile Image  */}
				<div className="col-span-12 order-2 py-5 md:col-span-4 md:order-2">
					{!isLoading ? (
						<Image
							className={`block mx-auto w-28 h-28 rounded-full ${
								result?.profilePicture ? "" : "dark:invert"
							}`}
							src={
								result?.profilePicture ? result?.profilePicture : "/avatar.svg"
							}
							alt="User Avatar"
							width={100}
							height={100}
						/>
					) : (
						<div className="flex justify-center">
							<LoadingSkeleton circle={true} width="6rem" height="6rem" />
						</div>
					)}
				</div>
				{/* Edit - Delete Icon  */}
				<div className="col-span-12 order-1 text-center md:col-span-4 md:order-3 flex justify-end  items-center space-x-3 ">
					<Link href={`/user/edit/${params.id}`}>
						<Image
							className="w-8 h-8"
							src={"/edit.svg"}
							alt="edit-icon"
							width={100}
							height={100}
						/>
					</Link>
					<button onClick={deleteUser}>
						<Image
							className="w-8 h-8"
							src={"/delete.svg"}
							alt="delete-icon"
							width={100}
							height={100}
						/>
					</button>
				</div>
				{/* Name  */}
				{!isLoading ? (
					<div className="col-span-12 order-3 text-center md:order-4 text-xl font-bold">
						<h1>{result?.name}</h1>
					</div>
				) : (
					<div className="col-span-12 order-3 text-center md:order-4 text-xl font-bold">
						<LoadingSkeleton height={25} width={150} />
					</div>
				)}

				{/* DOB - Gender - Address  */}
				<div className="col-span-12 order-5 text-center md:order-5 space-y-1 pt-1">
					{!isLoading ? (
						result?.dateOfBirth ? (
							<p className="flex justify-center">
								<Image
									className="w-7 h-7 pr-2"
									src={"/birthday.svg"}
									alt="birthday-icon"
									width={100}
									height={100}
								/>
								{formatDate(result?.dateOfBirth)}
							</p>
						) : (
							<p></p>
						)
					) : (
						<p className="flex justify-center">
							<LoadingSkeleton height={25} width={125} />
						</p>
					)}

					{!isLoading ? (
						result?.gender ? (
							<p className="flex justify-center">
								<Image
									className="w-7 h-7 pr-2"
									src={"/gender.svg"}
									alt="Gender-Icon"
									width={100}
									height={100}
								/>
								{result?.gender}
							</p>
						) : (
							<p></p>
						)
					) : (
						<p className="flex justify-center">
							<LoadingSkeleton height={25} width={100} />
						</p>
					)}

					{!isLoading ? (
						result?.address ? (
							<p className="flex justify-center">
								<Image
									className="w-7 h-7 pr-2"
									src={"/location.svg"}
									alt="location-icon"
									width={100}
									height={100}
								/>
								{result?.address}
							</p>
						) : (
							<p></p>
						)
					) : (
						<p className="flex justify-center">
							<LoadingSkeleton height={25} width={180} />
						</p>
					)}
				</div>
				{/* Biography  */}
				{!isLoading ? (
					result?.biography ? (
						<div className="col-span-12 order-6 text-center md:order-6 border-t-2 pt-3 mt-3 md:pt-4 xl:pt-6 2xl:pt-8 md:mt-8">
							<p>{result?.biography}</p>
						</div>
					) : (
						<div className="col-span-12 "></div>
					)
				) : (
					<div className="col-span-12 order-6 text-center md:order-6 border-t-2 pt-3 mt-3 md:pt-4 xl:pt-6 2xl:pt-8 md:mt-8">
						<LoadingSkeleton height={25} width={100} />
						<LoadingSkeleton height={25} width={250} />
						<LoadingSkeleton height={25} width={100} />
					</div>
				)}
			</div>
		</section>
	);
};
export default SingleUser;
