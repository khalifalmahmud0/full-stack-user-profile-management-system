import { ReactNode } from "@/app/import/packages";
import Footer from "@/app/components/common/footer/footer";
import Header from "@/app/components/common/header/header";

interface DefaultProps {
	children: ReactNode;
}
const Default: React.FC<DefaultProps> = ({ children }) => {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
};

export default Default;
