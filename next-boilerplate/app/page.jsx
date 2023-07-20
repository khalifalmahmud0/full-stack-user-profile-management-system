import Image from "next/image";
import Layout from "@/app/layouts/default";
import Link from "next/link";

export default function Home() {
	return (
		<>
			<Layout>
				<section id="homePage" className="Container">
					<h1 className="text-2xl  md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-center sm:text-left pb-6 md:pb-8 lg:pb-9 xl:pb-10 2xl:pb-11">
						Meet Our Users (100)
					</h1>
					<div className="grid grid-cols-12 gap-y-4 md:gap-6 ">
						{Array.from({ length: 20 }, (_, index) => (
							<div
								className="col-span-12 md:col-span-6 xl:col-span-4 2xl:col-span-3"
								key={index}
							>
								{/* w-full h-[250px]  md:w-[288px] */}
								<div class=" Darkmode bg-white rounded-xl shadow-lg  flex flex-col justify-center items-center space-y-2 h-[250px]">
									<img
										class="h-24 w-24 rounded-full"
										src="/khalif.jpeg"
										alt="Woman's Face"
									/>
									<div class="text-center space-y-4">
										<div class="space-y-0.5">
											<p class="text-lg font-semibold">Khalif AL Mahmud</p>

											<p class="text-slate-500 font-medium">
												almahmudkhalif@gmail.com
											</p>
										</div>
										<div>
											<Link
												href={"#"}
												class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
											>
												View Profile
											</Link>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</section>
				<br />
				<br />
				<section id="userFormPage" className="Container">
					<form
						// onSubmit={handleSubmit}
						className="Darkmode mx-auto bg-white rounded-xl shadow-lg p-4 md:p-16 rounded-lg"
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
										// onChange={handleGenderChange}
										// value={gender}
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
											// src={
											// 	profilePictureBase64
											// 		? profilePictureBase64
											// 		: "/blank-avatar.jpeg"
											// }
											src="/khalif.jpeg"
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
											// onChange={handleProfilePictureChange}
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
									Add User
								</button>
							</div>
						</div>
					</form>
				</section>
				<br />
				<br />
				<section id="userSinglePage" className="Container ">
					<div className="Darkmode grid grid-cols-12 bg-white shadow-lg px-4 py-10 md:p-16 rounded-lg ">
						<div className="col-span-12 order-4 text-center md:col-span-4 md:order-1">
							<p>khalif@gmail.com</p>
							<p>01936085430</p>
						</div>
						<div className="col-span-12 order-2 pb-3 md:col-span-4 md:order-2">
							<Image
								className="block mx-auto w-48 rounded-full "
								// src={
								// 	data?.result?.success?.profilePicture
								// 		? data?.result?.success?.profilePicture
								// 		: data?.result?.success?.gender === "male"
								// 		? "/male.svg"
								// 		: "/female.svg"
								// }
								src="/khalif.jpeg"
								alt="Woman's Face"
								width={100}
								height={100}
							/>
						</div>
						<div className="col-span-12 order-1 text-center md:col-span-4 md:order-3">
							<Link href={"#"}>Edit</Link>
							<button onClick={"#"}>Delete</button>
						</div>
						<div className="col-span-12 order-3 text-center md:order-4">
							<h1>Khalif AL Mahmud</h1>
						</div>
						<div className="col-span-12 order-5 text-center md:order-5">
							<p>12 june 1290</p>
							<p>Male</p>
							<p>South Banasree</p>
						</div>
						<div className="col-span-12 order-6 text-center md:order-6">
							<p>I am BioGraphy</p>
						</div>
					</div>
					{/* ....  */}
					{/* <div className="top">
						<div className="grid grid-cols-12 items-center">
							<div className="col-span-12 order-2">
								<p>01936085430</p>
								<p>khalif@gmail.com</p>
							</div>
							<div className="col-span-12 order-1 flex justify-center">
								<Image
									className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
									// src={
									// 	data?.result?.success?.profilePicture
									// 		? data?.result?.success?.profilePicture
									// 		: data?.result?.success?.gender === "male"
									// 		? "/male.svg"
									// 		: "/female.svg"
									// }
									src="/khalif.jpeg"
									alt="Woman's Face"
									width={100}
									height={100}
								/>
							</div>
							<div className="col-span-12 order-3 flex justify-end">
								<Link href={"#"}>Edit</Link>
								<button onClick={"#"}>Delete</button>
							</div>
						</div>
					</div>
					<div className="center border-b border-[#4d4d4d] py-[35px] mb-[35px] text-center">
						<h1>Khalif AL Mahmud</h1>
					</div>
					<div className="bottom text-center">I am BioGraphy</div> */}
					{/* ....  */}
				</section>
			</Layout>
			{/* <main className="flex min-h-screen flex-col items-center justify-between p-24">
				<div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
					<p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 ">
						Get started by editing&nbsp;
						<code className="font-mono font-bold">app/page.js</code>
					</p>
					<div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
						<a
							className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
							href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
							target="_blank"
							rel="noopener noreferrer"
						>
							By{" "}
							<Image
								src="/vercel.svg"
								alt="Vercel Logo"
								className="dark:invert"
								width={100}
								height={24}
								priority
							/>
						</a>
					</div>
				</div>

				<div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]"></div>

				<div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
					<a
						href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
						className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
						target="_blank"
						rel="noopener noreferrer"
					>
						<h2 className={`mb-3 text-2xl font-semibold`}>
							Docs{" "}
							<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
								-&gt;
							</span>
						</h2>
						<p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
							Find in-depth information about Next.js features and API.
						</p>
					</a>

					<a
						href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
						className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
						target="_blank"
						rel="noopener noreferrer"
					>
						<h2 className={`mb-3 text-2xl font-semibold`}>
							Learn{" "}
							<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
								-&gt;
							</span>
						</h2>
						<p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
							Learn about Next.js in an interactive course with&nbsp;quizzes!
						</p>
					</a>

					<a
						href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
						className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
						target="_blank"
						rel="noopener noreferrer"
					>
						<h2 className={`mb-3 text-2xl font-semibold`}>
							Templates{" "}
							<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
								-&gt;
							</span>
						</h2>
						<p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
							Explore the Next.js 13 playground.
						</p>
					</a>

					<a
						href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
						className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
						target="_blank"
						rel="noopener noreferrer"
					>
						<h2 className={`mb-3 text-2xl font-semibold`}>
							Deploy{" "}
							<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
								-&gt;
							</span>
						</h2>
						<p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
							Instantly deploy your Next.js site to a shareable URL with Vercel.
						</p>
					</a>
				</div>
			</main> */}
		</>
	);
}
