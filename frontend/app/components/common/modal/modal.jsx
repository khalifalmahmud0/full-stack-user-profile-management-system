import { Modal } from "@/app/import/packages";
import "react-responsive-modal/styles.css";
import "./modal.scss";
function CustomModal({ onCloseModal, children }) {
	return (
		<div className="Container">
			<Modal open={true} onClose={onCloseModal} center>
				{children}
			</Modal>
		</div>
	);
}

export default CustomModal;
