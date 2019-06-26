import * as Consts from "../Consts";

const InsertType1: React.SFC<any> = ({children, img, isDisabled}) => {
  return (
    <React.Fragment>
      <div className="insert">
        <div className="insert-container">
          <div className={`panel1 background${isDisabled?" disabled":""}`}></div>
          {children}
        </div>
      </div>
      <style jsx global>{`
        .insert-container {
          display: grid;
          display: -ms-grid;
          grid-template-areas:
            'panel1'
            'panel2'
            'panel3'
            'panel4';
          grid-row-gap: 10px;
          grid-template-rows: 162px 120px 140px 120px ;
          -ms-grid-rows: 162px 10px 120px 10px 140px 30px 120px;
          -ms-grid-columns: 100%;
          width: 100%;
          height: 100%;
          font-size: 0.7rem;
        }
        .panel1 {
          -ms-grid-row:1;
          -ms-grid-column:1;
          grid-area: panel1;
        }
        .panel1.background {
          background: url(${Consts.GENERAL_IMG_FOLDER}${img});
          background-size: contain;
          border-radius: 10px;
        }
        .panel1.background.disabled {
          filter: grayscale(100%);
          opacity: 0.3;
        }
        .panel2 {
          -ms-grid-row:3;
          -ms-grid-column:1;
          grid-area: panel2;
        }
        .panel3 {
          -ms-grid-row:5;
          -ms-grid-column:1;
          grid-area: panel3;
          margin-bottom: 20px;
        }
        .panel4 {
          -ms-grid-row:7;
          -ms-grid-column:1;
          grid-area: panel4;
        }
      `}
      </style>
    </React.Fragment>
  );
}

export default InsertType1;
