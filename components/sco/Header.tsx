import * as React from "react";
import * as Consts from "../Consts";

const Header: React.SFC<any> = ({children}) => {
  return (
    <React.Fragment>
      <div className="header">
        <div className="logo"><img src={`${Consts.GENERAL_IMG_FOLDER}ic_logowhite.png`}/></div>
        <p>{children}</p>
      </div>
      <style jsx>
        {`
          .logo {
            height: 100%;
            display: flex;
            align-items: center;
            padding-left: 20px;
          }
          `}
      </style>
    </React.Fragment>
  );
}

export default Header;
