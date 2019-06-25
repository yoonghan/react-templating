import * as React from "react";

export interface AnchorProps {
  href: string;
  children: any;
}

const Anchor: React.SFC<AnchorProps> = ({href, children}) => {
  function goTo() {
      window.location.href = href;
  };
  return (
    <React.Fragment>
      <div onClick={goTo} className="clicker">
        {children}
      </div>
      <style jsx>{`
        .clicker {
          cursor: pointer;
          min-width: 10%;
          height: 100%;
        }
      `}</style>
    </React.Fragment>
  )
}

export default Anchor;
