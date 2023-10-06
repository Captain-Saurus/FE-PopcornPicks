import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import ReservationModal from "../styles/components/reservation/ReservationModal";
import SignupModal from "../pages/signup/SignupModal";

const Modal: React.FC = () => {
  const modalState = useSelector((state: RootState) => state.modal.isOpen);
  const modalTypeState = useSelector(
    (state: RootState) => state.modal.modalType
  );

  const renderModalContent = (modalTypeState: string) => {
    switch (modalTypeState) {
      case "ReservationModal":
        return <ReservationModal />;
      case "RegisteredMemberModal":
        return <SignupModal />;
    }
  };

  return <>{modalState && renderModalContent(modalTypeState)}</>;
};

export default Modal;
