import * as React from "react";

export interface ContainerProps {
  children: any;
}

export const Container: React.SFC<ContainerProps> = ({children}) => {
  return (
    <React.Fragment>
      <div className="sco-container">
        {children}
      </div>
      <style jsx global>{`
        .sco-container {
          display: -ms-grid;
          display: grid;
          grid-template-areas:
            'header header'
            'receipt insert'
            'footer footer';
          width: 100%;
          height: 100%;
          -ms-grid-rows: 60px 615px 93px;
          grid-template-rows: 60px 615px 93px;
          -ms-grid-columns: 565px 459px;
          grid-template-columns: 565px 459px;
        }
        .header {
          -ms-grid-row:1;
          -ms-grid-column:1;
          -ms-grid-column-span:2;
          grid-area: header;
          background-color: rgba(17, 90, 167, 1);
          position: relative;
          font-size: 0.5rem;
        }
        .header p {
          margin: 0;
          color: #FFFFFF;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        .receipt {
          -ms-grid-row:2;
          -ms-grid-column:1;
          grid-area: receipt;
          background-color: rgba(220, 225, 231, 1);
          position: relative;
        }
        .insert {
          -ms-grid-row:2;
          -ms-grid-column:2;
          grid-area: insert;
          padding: 20px;
        }
        .footer {
          -ms-grid-row:3;
          -ms-grid-column:1; 
          -ms-grid-column-span:2;
          grid-area: footer;
          background-color: '';
        }
      `}
      </style>
    </React.Fragment>
  )
}
