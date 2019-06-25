import * as React from "react";
import produce from "immer";
import IconButton from "./IconButton";
import Modal from "./Modal";

interface AssistanceIconButtonProps {

}

interface AssistanceIconButtonState {
  isModalOpen: boolean;
}

class AssistanceIconButton extends React.PureComponent<AssistanceIconButtonProps, AssistanceIconButtonState> {
  constructor(props: AssistanceIconButtonProps) {
    super(props);
    this.state = {
      isModalOpen: false
    }
  }

  _onClick = () => {
    this.setState(
      produce<AssistanceIconButtonState>(draft => {
        draft.isModalOpen = !draft.isModalOpen;
      })
    );
  }

  _renderModal = () => {
    if(this.state.isModalOpen) {
      return (
        <Modal
          title="Please wait,"
          content="help is on the way"
          imgsrc="img_helper.png"
          callbackClose={this._onClick}
        />
      );
    }
    return <React.Fragment/>
  }

  render() {
    return (
      <React.Fragment>
        <IconButton color="WARN" icon="ic_help.png" onClick={this._onClick} isFat={true}>Request<br/>Help</IconButton>
        {this._renderModal()}
      </React.Fragment>
      );
  }
}

export default AssistanceIconButton;
