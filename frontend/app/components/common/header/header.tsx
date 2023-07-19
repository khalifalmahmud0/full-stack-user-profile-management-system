import Link from "next/link";
const Header = () => {
	return (
		<>
			<header id="header" className="Container mobile:hidden desktop:block">
				<div className="pt-[35px] pb-[35px] flex justify-between  items-center border-b border-[#4d4d4d]">
					<Link href={"/"}>
						<h1 className="font-slab text-white text-2xl not-italic font-bold leading-[30px] tracking-[0.5px]">
							User Profiles
						</h1>
					</Link>
					<ul className="flex space-x-16 justify-center">
						<li>
							<Link
								className="text-[#D1D1D1] text-right text-base not-italic font-semibold font-poppins"
								href={"/"}
							>
								All Users
							</Link>
						</li>
						<li>
							<Link
								className="text-[#D1D1D1] text-right text-base not-italic font-semibold font-poppins"
								href={"/add-user"}
							>
								Add User
							</Link>
						</li>
					</ul>
				</div>
			</header>
		</>
	);
};

export default Header;
