"use client";
import Link from "next/link";
import Heading from "./mini/heading";
import { GetData } from "../utils/getApiData";
import LoadingSkeleton from "./skeleton";
import ProfileBox from "./mini/profileBox";

/**
 * Renders the Home component.
 *
 * @returns {JSX.Element} The rendered Home component.
 */
const Home = () => {
	// Fetch user data using the 'GetData' function
	const { data, isLoading } = GetData(
		"users",
		process.env.NEXT_PUBLIC_API_URL + "users"
	);
	let result = data?.result?.success;

	// Return the JSX for the 'Home' component
	return (
		<section id="homeComponent" className="Container">
			{/* Render the heading */}
			<Heading>
				Meet Our Users (
				{!isLoading ? (
					result?.length // Display the number of users if data is loaded
				) : (
					<LoadingSkeleton width="30px" height={"30px"} /> // Display a loading skeleton while data is being fetched
				)}
				)
			</Heading>
			<div className="grid grid-cols-12 gap-y-4 md:gap-6 ">
				{!isLoading ? (
					// If data is loaded and it's an array with at least one user
					Array.isArray(result) && result?.length > 0 ? (
						// Render the user profiles using the 'ProfileBox' component
						result?.map((item, index) => {
							return <ProfileBox key={index} item={item} />;
						})
					) : (
						// If no users are found, display a message
						<div className="col-span-12 text-center sm:text-left">
							<p className="font-bold">No Users Found, Yet!</p>
							<br />
							<p>
								We apologize, but it seems that we haven't connected with any
								users just yet. Don't worry, though – our community is growing,
								and exciting profiles will be joining soon!{" "}
								<Link className="font-bold" href={"/add-user"}>
									Click here
								</Link>{" "}
								to create your user profile and join the excitement! Let's
								embark on this journey together and make our platform an even
								more diverse and engaging space.
							</p>
						</div>
					)
				) : (
					// While data is loading, display loading skeletons
					Array.from({ length: 12 }, (_, index) => (
						<ProfileBox key={index} loading={isLoading} />
					))
				)}
			</div>
		</section>
	);
};
export default Home;
