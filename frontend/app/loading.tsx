import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const Loading = () => {
	return (
		<>
			<div className="Container">
				<SkeletonTheme baseColor="#202020" highlightColor="#444">
					<p>
						<Skeleton count={30} />
					</p>
				</SkeletonTheme>
			</div>
		</>
	);
};

export default Loading;
