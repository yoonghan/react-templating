import * as React from "react";
import Link from "../Link";
import Image from "../Image";

export interface IconButtonProps {
  href?: string;
  icon?: string;
  color: string;
  isFat?: boolean;
  onClick?: ()=>void;
}

const IconButton: React.SFC<IconButtonProps> = ({href, icon, children, color, isFat, onClick}) => {

  function _getColorType() {
    switch(color) {
      case "WARN":
        return "rgba(254, 195, 3, 1)";
      default:
        return "rgba(17, 90, 167, 1)";
    }
  }

  function _renderIcon() {
    return (
      <div className="withIcon">
        <Image imgsrc={`${icon}`}/>
        <div>{children}</div>
        <style jsx>{`
          .withIcon {
            padding: ${isFat? "0 30px ": "0"};
          }
        `}</style>
      </div>
    );
  }

  function _renderNoIcon() {
    return (
      <div className={"textOnly"}>{children}</div>
    );
  }

  function _renderInnerBody() {
    return (
      <React.Fragment>
        <div className="iconbutton" onClick={onClick}>
          {icon && _renderIcon()}
          {!icon && _renderNoIcon()}
        </div>
        <style jsx>{`
          .iconbutton {
            cursor:pointer;
            border-radius: 15px;
            text-align: center;
            color: #000;
            position: relative;
            height: 100%;
            font-size: 12px;
            background-color: ${_getColorType()};
            min-width: 80px;
            margin-left: 5px;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
          .iconbutton .textOnly {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
        `}</style>
      </React.Fragment>
    );
  }

  function _renderBody() {
    if(href) {
      return (
        <Link href={href}>
          {_renderInnerBody()}
        </Link>
      )
    }
    else {
      return _renderInnerBody();
    }
  }

  return (
    <React.Fragment>
      {_renderBody()}
    </React.Fragment>
  )
}

export default IconButton;
