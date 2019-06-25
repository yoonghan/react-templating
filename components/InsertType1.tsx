import Logo from "./Logo";
import * as Consts from "./Consts";

const InsertType1: React.SFC<any> = ({children, img}) => {
  return (
    <React.Fragment>
      <div className="insert">
        <div className="insert-container">
          <div className="panel1 background"></div>
          {children}
        </div>
      </div>
      <style jsx global>{`
        .insert-container {
          display: grid;
          display: -ms-grid;
          grid-template-areas:
            'panel1 panel1'
            'panel2 panel2'
            'panel3_1 panel3_2'
            'panel4 panel4';
          grid-row-gap: 10px;
          grid-column-gap: 10px;
          grid-template-rows: 162px 120px 140px 120px ;
          -ms-grid-rows: 162px 10px 120px 10px 140px 10px 120px;
          -ms-grid-columns: 205px 10px 205px;
          width: 100%;
          height: 100%;
          font-size: 0.7rem;
        }
        .panel1 {
          -ms-grid-row:1;
          -ms-grid-column:1;
          -ms-grid-column-span:3;
          grid-area: panel1;
        }
        .panel1.background {
          background: url(${img});
          background-size: contain;
          border-radius: 10px;
        }
        .panel2 {
          -ms-grid-row:3;
          -ms-grid-column:1;
          -ms-grid-column-span:3;
          grid-area: panel2;
        }
        .panel3_1 {
          -ms-grid-row:5;
          -ms-grid-column:1;
          grid-area: panel3_1;
        }
        .panel3_2 {
          -ms-grid-row:5;
          -ms-grid-column:3;
          grid-area: panel3_2;
        }
        .panel4 {
          -ms-grid-row:7;
          -ms-grid-column:1;
          -ms-grid-column-span:3;
          grid-area: panel4;
        }
      `}
      </style>
    </React.Fragment>
  );
}

export default InsertType1;
