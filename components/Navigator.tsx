import * as React from "react";
import * as Consts from "./Consts";

interface NavigatorProps {

}

interface NavigatorState {
  pageState: string;
}

class Navigator extends React.PureComponent<NavigatorProps, NavigatorState> {
  constructor(props: NavigatorProps) {
    super(props);
    this.state = {
      pageState: "/"
    }
  }

  _removeSlash = (href:string) => {
    if(href==="/" || href==="") {
      return "index";
    }
    return href.indexOf("/")===0?href.substr(1):href;
  }

  _checkpage = (isForward:boolean) => {
    const paths = ["notindex.html", "/firstpage", "/secondpage", "/thirdpage", "/fourthpage", "/fifthpage", "/sixthpage", "/seventhpage", "/eightpage"];
    const pathname = window.location.pathname;
    let toPathIndex = 0;
    for(let i=0; i<paths.length; i++) {
      if(pathname.indexOf(paths[i]) > -1) {
        toPathIndex = i;
        break;
      }
    }
    toPathIndex = toPathIndex + (isForward ? 1: -1);
    toPathIndex = toPathIndex === -1? 0: toPathIndex;
    toPathIndex = toPathIndex > paths.length-1? 0: toPathIndex;
    const toPath = (toPathIndex ===0? (Consts.OVERRIDE_URL?"index":"/"): paths[toPathIndex]);

    return (Consts.OVERRIDE_URL ? ("./"+this._removeSlash(toPath)+".html"): toPath);
  }

  _prevClick = () => {
    window.location.href=this._checkpage(false);
  }

  _nextClick = () => {
    window.location.href=this._checkpage(true);
  }

  render() {
    return (
      <React.Fragment>
        <div className="navigator">
          <div className="navigator-top">
            {this.props.children}
          </div>
          <div className="navigator-bottom">
            <div onClick={this._prevClick}> &lt; Previous</div>
            <div onClick={this._nextClick}>Next &gt;</div>
          </div>
        </div>
        <style jsx global>
        {`
        .navigator {
          display: flex;
          flex-direction: column;
        }
        .navigator-top {
          height: 768px;
          width: 1024px;
          position: relative;
          border: 1px solid #AAAAAA;
          align-self: center;
        }
        .navigator-bottom {
          height: 150px;
          width: 1024px;
          display: flex;
          flex-direction: row;
          align-self: center;
        }
        .navigator-bottom div {
          border: 1px solid #AAA;
          background: rgba(200,200,200,0.5);
          width: 100%;
          align-self: center;
          text-align: center;
          cursor: pointer;
          padding:10px 0;
          font-size: 15pt;
        }
        `}
        </style>
      </React.Fragment>
      );
  }
}

export default Navigator;
