import {
  cloneElement,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
import styled from "styled-components";
import { useOutsideClick } from "../hooks/useOutsideClick";
import { useDispatch, useSelector } from "react-redux";
import { releaseYoutubeFrame } from "../features/home/session/youtubeFrameSlice";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  transition: all 0.5s;
  opacity: 0.5;
  z-index: 100;
`;
export const StyledModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: fixed;
  top: 50vh;
  left: 50vw;
  transform: translate(-50%, -50%);
  background-color: #000;
  border-radius: 5px;
  transition: all 0.5s;
  z-index: 101;
  width: 88%;
  height: 90vh;

  .title {
    width: 100%;
    display: flex;
    justify-content: space-between;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
    padding: 1rem;
    color: #fff;
    font-size: 1.25rem;
  }
  .title span {
    line-height: 1.5;
  }
`;

const Button = styled.button`
  background: none;
  border: none;
  border-radius: 5px;
  transition: all 0.2s;
  &:hover {
    background-color: gray;
  }
  & svg {
    width: 1.5rem;
    height: 1.5rem;
    color: #fff;
    padding: 2px;
    display: flex;
    align-items: center;
  }
`;

const ModalContext = createContext();

function Modal({ children }) {
  const dispatch = useDispatch();
  const [openName, setOpenName] = useState("");
  const close = () => {
    document.body.classList.remove("modal-open");
    setOpenName("");
    dispatch(releaseYoutubeFrame());
  };
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: opensWindowName }) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, {
    onClick: () => open(opensWindowName),
  });
}

function Window({ children, name, movieName }) {
  const { openName, close } = useContext(ModalContext);
  // const ref = useOutsideClick(close);
  if (name !== openName) return null;
  document.body.classList.add("modal-open");

  return createPortal(
    <>
      <Overlay className="Overlay" />
      <StyledModal className="StyledModal" style={{ top: "50%", left: "50%" }}>
        <div className="title">
          <span>{movieName}</span>
          <Button onClick={close}>
            <HiXMark />
          </Button>
        </div>
        {cloneElement(children, { onCloseModal: close })}
      </StyledModal>
    </>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
