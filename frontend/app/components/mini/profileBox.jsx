import Image from "next/image";
import Link from "next/link";
import LoadingSkeleton from "../skeleton";
/**
 * Renders a profile box component.
 *
 * @param {Object} item - The profile item object.
 * @param {boolean} loading - Indicates if the profile is still loading.
 * @return {JSX.Element} The rendered profile box component.
 */
const ProfileBox = ({ item, loading }) => {
	// Return the JSX for the 'ProfileBox' component
	return (
		<div className="col-span-12 md:col-span-6 xl:col-span-4 2xl:col-span-3">
			{/* Render the profile box */}
			<div className="darkMode bg-white rounded-xl shadow-lg grid justify-items-center px-4 py-8 gap-y-3">
				{/* Display the user's profile picture or a loading skeleton */}
				{!loading ? (
					<Image
						className={`h-24 w-24 rounded-full ${
							item?.profilePicture ? "" : "dark:invert"
						}`}
						src={item?.profilePicture ? item?.profilePicture : "/avatar.svg"}
						alt="User Avatar"
						height={100}
						width={100}
					/>
				) : (
					<LoadingSkeleton circle={true} width="6rem" height="6rem" />
				)}
				{/* Display the user's name or a loading skeleton */}
				<p className="text-lg font-semibold break-all">
					{!loading ? (
						item?.name
					) : (
						<LoadingSkeleton width="150px" height="1.125rem" />
					)}
				</p>
				{/* Display the user's email or a loading skeleton */}
				<p className="text-slate-500 font-medium break-all">
					{!loading ? (
						item?.email
					) : (
						<LoadingSkeleton width="200px" height="1.125rem" />
					)}
				</p>
				{/* Display a link to view the user's profile or a loading skeleton */}
				{!loading ? (
					<Link
						href={`/user/details/${item?._id}`}
						className="px-5 py-2 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 break-all"
					>
						View Profile
					</Link>
				) : (
					<LoadingSkeleton width="100px" height="1.125rem" />
				)}
			</div>
		</div>
	);
};

export default ProfileBox;
