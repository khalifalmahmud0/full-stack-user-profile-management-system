import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const LoadingSkeleton = ({
	width = "100%",
	height = 15,
	count = 1,
	circle = false,
}) => {
	return (
		<SkeletonTheme
			baseColor="#F2F2F2"
			highlightColor="#E0E0E0"
			width={width}
			height={height}
			duration={2.5}
		>
			<Skeleton count={count} circle={circle} />
		</SkeletonTheme>
	);
};

export default LoadingSkeleton;
