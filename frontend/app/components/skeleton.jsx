import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

/**
 * Generates a loading skeleton component with customizable width, height, count, and shape.
 *
 * @param {object} props - The props object containing the following properties:
 *   - {string} width (optional) - The width of the loading skeleton. Defaults to "100%".
 *   - {number} height (optional) - The height of the loading skeleton. Defaults to 15.
 *   - {number} count (optional) - The number of loading skeletons to display. Defaults to 1.
 *   - {boolean} circle (optional) - Whether to display the loading skeleton as a circle. Defaults to false.
 * @return {JSX.Element} - The loading skeleton component.
 */
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
