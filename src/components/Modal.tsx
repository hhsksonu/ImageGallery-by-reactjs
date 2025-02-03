import React from "react";
import styled from "styled-components";

interface ModalProps {
  imageSrc: string;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ imageSrc, onClose }) => {
  return (
    <Overlay onClick={onClose}>
      <ModalContent>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <Image src={imageSrc} alt="Enlarged" />
      </ModalContent>
    </Overlay>
  );
};

// Styled Components
const Overlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
`;

const ModalContent = styled.div`
  position: relative;
  max-width: 80%;
  max-height: 80%;
`;

const CloseButton = styled.span`
  position: absolute;
  top: 10px;
  right: 20px;
  color: white;
  font-size: 30px;
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 10px;
`;

export default Modal;
