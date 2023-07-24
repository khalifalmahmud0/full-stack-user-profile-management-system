/**
 * Renders a Heading component with the given children.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {ReactNode} props.children - The content to be displayed inside the heading.
 * @return {JSX.Element} The rendered heading component.
 */
const Heading = ({ children }) => {
	return (
		<h1 className="flex text-2xl  md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-center sm:text-left pb-6 md:pb-8 lg:pb-9 xl:pb-10 2xl:pb-11">
			{children}
		</h1>
	);
};
export default Heading;
