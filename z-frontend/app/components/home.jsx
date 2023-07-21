"use client";
import Image from "next/image";
import Link from "next/link";
import Heading from "./mini/heading";
import { GetData } from "../utils/getApiData";
const Home = () => {
	const { data } = GetData("users", process.env.NEXT_PUBLIC_API_URL + "users");
	let result = data?.result?.success;
	return (
		<section id="homeComponent" className="Container">
			<Heading>Meet Our Users ({result?.length})</Heading>
			<div className="grid grid-cols-12 gap-y-4 md:gap-6 ">
				{result?.map((item, index) => {
					return (
						<div
							className="col-span-12 md:col-span-6 xl:col-span-4 2xl:col-span-3"
							key={index}
						>
							<div className="Darkmode bg-white rounded-xl shadow-lg  flex flex-col justify-center items-center space-y-2 h-[250px]">
								<Image
									className="h-24 w-24 rounded-full"
									src={
										item?.profilePicture ? item?.profilePicture : "/avatar.svg"
									}
									alt="User Avatar"
									height={100}
									width={100}
								/>
								<div className="text-center space-y-4">
									<div className="space-y-0.5">
										<p className="text-lg font-semibold">{item?.name}</p>
										<p className="text-slate-500 font-medium">{item?.email}</p>
									</div>
									<div>
										<Link
											href={`/user/details/${item?._id}`}
											className="px-5 py-2 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
										>
											View Profile
										</Link>
									</div>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default Home;
