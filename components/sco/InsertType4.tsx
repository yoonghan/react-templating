import * as Consts from "../Consts";

const InsertType4: React.SFC<any> = ({children, img}) => {
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
            'panel2'
            'panel3';
          grid-row-gap: 10px;
          grid-column-gap: 10px;
          -ms-grid-rows: 250px 10px 100px 10px 150px;
          grid-template-rows: 250px 100px 150px;
          width: 100%;
          height: 100%;
          font-size: 0.7rem;
        }
        .panel1 {
          -ms-grid-row:1;
          -ms-grid-column:1;
          grid-area: panel1;
          margin: 0 auto;
        }
        .panel2 {
          -ms-grid-row:3;
          -ms-grid-column:1;
          grid-area: panel2;
          margin: 0 auto;
          text-align: center;
        }
        .panel3 {
          -ms-grid-row:5;
          -ms-grid-column:1;
          grid-area: panel3;
          margin: 0 auto;
        }

        .panel1 :global(img), .panel2 :global(img), .panel3 :global(img) {
          width: 420px;
        }
      `}
      </style>
    </React.Fragment>
  );
}

export default InsertType4;
