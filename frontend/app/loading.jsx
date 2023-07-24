import LoadingSkeleton from "./components/skeleton";

const Loading = () => {
	return (
		<>
			<div className="Container">
				<LoadingSkeleton width="150" height="30" />
				<LoadingSkeleton width="150" height="30" />
				<LoadingSkeleton width="150" height="30" />
				<LoadingSkeleton width="150" height="30" />
				<LoadingSkeleton width="150" height="30" />
				<LoadingSkeleton width="150" height="30" />
			</div>
		</>
	);
};

export default Loading;
