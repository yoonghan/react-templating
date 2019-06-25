import * as React from "react";
import produce from "immer";
import IconButton from "./IconButton";
import Modal from "./Modal";

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
        <IconButton icon="ic_disable.png" onClick={this._onClick}></IconButton>
      </React.Fragment>
      );
  }
}

export default DisabledIconButton;
