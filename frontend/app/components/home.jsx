"use client";
import Link from "next/link";
import Heading from "./mini/heading";
import { GetData } from "../utils/getApiData";
import LoadingSkeleton from "./skeleton";
import ProfileBox from "./mini/profileBox";
import { useEffect, useState } from "react";
const Home = () => {
	const { data, isLoading } = GetData(
		"users",
		process.env.NEXT_PUBLIC_API_URL + "users"
	);
	// let result = data?.result?.success;
	const [udata, setUdata] = useState([]);
	useEffect(() => {
		setUdata(data);
	}, [data]);
	let result = udata?.result?.success;
	return (
		<section id="homeComponent" className="Container">
			<Heading>
				Meet Our Users (
				{!isLoading ? (
					result?.length
				) : (
					<LoadingSkeleton width="30px" height={"30px"} />
				)}
				)
			</Heading>
			<div className="grid grid-cols-12 gap-y-4 md:gap-6 ">
				{!isLoading ? (
					result?.length > 0 ? (
						result?.map((item, index) => {
							return <ProfileBox key={index} item={item} />;
						})
					) : (
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
					Array.from({ length: 12 }, (_, index) => (
						<ProfileBox key={index} loading={isLoading} />
					))
				)}
			</div>
		</section>
	);
};

export default Home;
