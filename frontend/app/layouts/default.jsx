import Image from "next/image";
import Link from "next/link";

const Layout = ({ children }) => {
	return (
		<div className="min-h-screen relative font-mono">
			<header id="header" className="Container py-10 xl:py-12 text-sm">
				<div className="grid grid-cols-2 gap-y-8 justify-items-center md:justify-items-stretch md:items-center ">
					<div className="col-span-2 md:col-span-1 text-center">
						<Link href={"/"}>
							<Image
								className="w-52 dark:invert"
								width={100}
								alt="Site Logo"
								height={100}
								src={"/logo.svg"}
							/>
						</Link>
					</div>
					<div className="col-span-2 md:col-span-1 text-center md:text-right">
						<code className="font-bold">
							<Link href={"/"}>All Users</Link> /{" "}
							<Link href={"/add-user"}>Add New User</Link>
						</code>
					</div>
				</div>
			</header>
			<div className="pt-[25px] pb-[150px]">
				<div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]"></div>
				{children}
			</div>
			<footer className="absolute w-full bottom-0 p-10">
				<p className="text-center text-sm tracking-[-0.5px]">
					Feel free to drop a 'hello' @{" "}
					<code className="font-bold "> almahmudkhalif@gmail.com </code>
				</p>
			</footer>
		</div>
	);
};

export default Layout;
