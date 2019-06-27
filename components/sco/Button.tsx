import * as React from "react";
import Link from "../Link";
import Image from "../Image";

export interface ButtonProps {
  href: string;
  icon?: string;
  color?: string;
  isLeft?: boolean;
  isBig?: boolean;
  isDisabled?: boolean;
}

const Button: React.SFC<ButtonProps> = ({href, icon, children, color, isLeft, isBig, isDisabled}) => {
  function _getColor() {
    switch(color) {
      case "PRIMARY":
        return "rgba(17, 90, 167, 1)";
      case "OK":
        return "rgba(95, 167, 23, 1)";
      case "RETURN":
        return "rgba(103, 138, 180, 1)";
      case "BLACK":
        return "rgba(50, 51, 69, 1)";
      default:
        return "rgba(17, 90, 167, 1)";
    }
  }

  function _renderItem() {
    if(!icon) {
      return (
        <React.Fragment>
          <div className="withNoIcon">{children}</div>
          <style jsx>
          {`
            .withNoIcon {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
            }
          `}
          </style>
        </React.Fragment>
      );
    }

    return (
      <React.Fragment>
        <div className={"withIcon"}>
          <div className={"toLeft"}>
            <div><Image imgsrc={`${icon}`}/></div>
            <div>{children}</div>
          </div>
        </div>
        <style jsx>
        {`
          .withIcon {
            display: flex;
            flex-direction: column;
            font-size: ${isBig? "0.7rem": "0.5rem"};
            justify-content: center;
            height: 100%;
          }
          .withIcon .toLeft {
            padding: 15px;
            align-items: center;
            justify-content: center;
            display: ${isLeft? "flex": "block"};
          }
          .withIcon .toLeft img {
            padding-right: 10px;
          }
          .withIcon div {
            padding: 3px;
          }
        `}
        </style>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <Link href={href} isRoot={false}>
        <div className={`button${isDisabled?" disabled":""}`}>
          {_renderItem()}
        </div>
      </Link>
      <style jsx>{`
        .button {
          border-radius: 10px;
          text-align: center;
          height: 100%;
          width: 100%;
          color: #FFF;
          background-color: ${_getColor()};
          position: relative;
        }
        .disabled {
          filter: grayscale(100%);
          opacity: 0.3;
        }
      `}</style>
    </React.Fragment>
  )
}

export default Button;
