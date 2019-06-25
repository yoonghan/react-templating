import Logo from "./Logo";
import * as Consts from "./Consts";

const Receipt: React.SFC<any> = ({children, isCenter, isComplete, isInit}) => {
  return (
    <React.Fragment>
      <div className="receipt">
        <div className={`receipt-container ${isCenter ? "receipt-adjust": ""}`}>
        </div>
      </div>
      <style>{`
        .receipt-container {
          background-color: #FFFFFF;
          position: absolute;
          bottom: 0;
          width: 515px;
          height: ${isComplete? "360px":"300px"};
          margin: 0 25px;
          background-image: url(${Consts.GENERAL_IMG_FOLDER}receipt${isComplete?"_complete":isInit?"_init":""}.png);
          background-size: contain;
        }
        .receipt-adjust {
          transform: translate(0, -50%);
          top: 50%;
        }
      `}
      </style>
    </React.Fragment>
  );
}

export default Receipt;
