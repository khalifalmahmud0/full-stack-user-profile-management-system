import { Skeleton, SkeletonTheme } from "@/app/import/packages";
import "react-loading-skeleton/dist/skeleton.css";
import "./skeleton.scss";
interface RectangleSkeletonProps {
	width?: string;
	height?: string;
	count?: number;
	circle?: boolean;
}
const RectangleSkeleton: React.FC<RectangleSkeletonProps> = ({
	width = "100%",
	height = 15,
	count = 1,
	circle = false,
}) => {
	return (
		<SkeletonTheme
			baseColor="#202020"
			highlightColor="#444"
			width={width}
			height={height}
			duration={2.5}
		>
			<Skeleton count={count} circle={circle} />
		</SkeletonTheme>
	);
};

export default RectangleSkeleton;
