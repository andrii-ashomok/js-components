import Modal from "../components/Modal";
import Button from "../components/Button";
import {useState} from "react";
function ModalPage() {
    const [showModal, setShowModal] = useState(false);
    const handleClick = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    };

    const actionBar = (
        <div>
            <Button primary onClick={handleClose}>Accept</Button>
        </div>
    );

    const modal = <Modal onClose={handleClose} actionBar={actionBar}>
        <p>
            Here is text
        </p>
    </Modal>;

    return (
        <div className="relative">
            <Button primary onClick={handleClick}>Open modal</Button>
            {showModal && modal}
        </div>
    );
}

export default ModalPage;