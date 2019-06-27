import * as React from 'react';
import Image from "../Image";

export interface ModalProps {
  content: string;
  title: string;
  imgsrc: string;
  callbackClose: ()=>void;
}

const Modal: React.SFC<ModalProps> = ({title, content, imgsrc, callbackClose}) => {
  return (
    <React.Fragment>
      <div className="modal" onClick={callbackClose}>
        <div className="modal-container">
          <div className="modal-panel">
            <div><Image imgsrc={`${imgsrc}`}/></div>
            <div className="modal-title">{title}</div>
            <div>{content}</div>
          </div>
        </div>
        <div className="modal-background"></div>
      </div>
      <style jsx>{`
        .modal {
          cursor:pointer;
          height: 100%;
          width: 100%;
          position: absolute;
          top: 0;
          left: 0;
          font-size: 0.5rem;
        }
        .modal-background {
          background-color: rgba(100, 100, 100, 0.5);
          width: 100%;
          height: 100%;
          position: absolute;
          z-index:99;
        }
        .modal-container {
          position: absolute;
          background-color: rgba(255,255,255, 1);
          width: 70%;
          height: 70%;
          margin: 12% 15%;
          border-radius: 5%;
          z-index:100;
        }
        .modal-panel {
          display: flex;
          align-items: center;
          flex-direction: column;
          height: 100%;
          justify-content: center;
          flex-wrap: wrap;
        }
        .modal-panel > div {
          margin-top: 10px;
        }
        .modal-title {
          font-weight: bold;
          font-size: 1rem;
        }
      `}
      </style>
    </React.Fragment>
  );
}

export default Modal;
