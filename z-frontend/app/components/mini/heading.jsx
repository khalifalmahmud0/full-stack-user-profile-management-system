const Heading = ({ children }) => {
	return (
		<h1 className="text-2xl  md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-center sm:text-left pb-6 md:pb-8 lg:pb-9 xl:pb-10 2xl:pb-11">
			{children}
		</h1>
	);
};
export default Heading;
