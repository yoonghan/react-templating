import * as React from "react";
import IconButton from "./IconButton";

interface DisabledIconButtonProps {

}

interface DisabledIconButtonState {
}

class DisabledIconButton extends React.PureComponent<DisabledIconButtonProps, DisabledIconButtonState> {
  constructor(props: DisabledIconButtonProps) {
    super(props);
    this.state = {
    }
  }

  _onClick = () => {
    alert("Not implemented in design");
  }

  render() {
    return (
      <React.Fragment>
        <IconButton icon="ic_disable.png" onClick={this._onClick} color="OTHERS"></IconButton>
      </React.Fragment>
      );
  }
}

export default DisabledIconButton;
