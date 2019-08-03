import * as React from "react";
import AssistanceIconButton from "./AssistanceIconButton";
import DisabledIconButton from "./DisabledIconButton";

export interface BottomProps {
}

const Bottom: React.SFC<BottomProps> = () => {
  return (
    <React.Fragment>
      <div className="footer bottom-container">
        <DisabledIconButton/>
        <AssistanceIconButton>Request Help</AssistanceIconButton>
      </div>
      <style jsx>{`
        .bottom-container {
          display: flex;
          flex: 1 1 auto;
          padding: 5px;
          align-items: center;
          justify-content: flex-end;
          background-color: rgba(205, 213, 222, 1);
        }
      `}</style>
    </React.Fragment>
  )
}

export default Bottom;
