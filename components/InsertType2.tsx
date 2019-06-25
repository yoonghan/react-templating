import Logo from "./Logo";
import * as Consts from "./Consts";

const InsertType2: React.SFC<any> = ({children, img}) => {
  return (
    <React.Fragment>
      <div className="insert">
        <div className="insert-container">
          {children}
        </div>
      </div>
      <style jsx global>{`
        .insert-container {
          display: -ms-grid;
          display: grid;
              grid-template-areas:
            'panel1 panel1'
            'panel2 panel2'
            'panel3_1 panel3_2'
            'panel4 panel4'
            'panel5 panel5'
            'panel6_1 panel6_2';
          grid-row-gap: 20px;
          grid-column-gap: 10px;
          -ms-grid-rows: 50px 20px 50px 20px 100px 20px 80px 20px 100px 20px 100px;
          grid-template-rows: 50px 50px 100px 80px 100px 100px;
          -ms-grid-columns: 50% 10px 50%;
          grid-template-columns: 50% 50%;
          width: 100%;
          height: 100%;
          font-size: 0.7rem;
        }
        .panel1 {
          -ms-grid-row:1;
          -ms-grid-column:1;
          -ms-grid-column-span:3;
          grid-area: panel1;
          font-size: 0.6rem;
          display: flex;
          align-items: flex-end;
          margin: 0 auto;
        }
        .panel2 {
          -ms-grid-row:3;
          -ms-grid-column:1;
          -ms-grid-column-span:3;
          grid-area: panel2;
          display: flex;
          align-items: center;
          margin: auto;
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
        .panel5 {
          -ms-grid-row:9;
          -ms-grid-column:1;
          -ms-grid-column-span:3;
          grid-area: panel5;
        }
        .panel6_1 {
          -ms-grid-row:11;
          -ms-grid-column:1;
          grid-area: panel6_1;
        }
        .panel6_2 {
          -ms-grid-row:11;
          -ms-grid-column:3;
          grid-area: panel6_2;
        }
      `}
      </style>
    </React.Fragment>
  );
}

export default InsertType2;
