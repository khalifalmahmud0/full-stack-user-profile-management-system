const Header = () => {
	return (
		<>
			<header id="header" className="Container mobile:hidden desktop:block">
				<div className="pt-[39px] pb-[37px] flex justify-between  items-center">
					<h1 className="font-slab text-[#fff] text-2xl font-bold tracking-wider">
						User Profiles
					</h1>
				</div>
			</header>
		</>
	);
};

export default Header;
