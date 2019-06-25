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
            'panel1'
            'panel2';
          grid-row-gap: 20px;
          grid-column-gap: 10px;
          -ms-grid-rows: 50px 20px 400px;
          grid-template-rows: 50px 400px;
          width: 100%;
          height: 100%;
          font-size: 0.7rem;
        }
        .panel1 {
          -ms-grid-row:1;
          -ms-grid-column:1;
          grid-area: panel1;
          font-size: 0.6rem;
          display: flex;
          align-items: flex-end;
          margin: 0 auto;
        }
        .panel2 {
          -ms-grid-row:3;
          -ms-grid-column:1;
          grid-area: panel2;
          margin: 0 auto;
        }
      `}
      </style>
    </React.Fragment>
  );
}

export default InsertType2;
