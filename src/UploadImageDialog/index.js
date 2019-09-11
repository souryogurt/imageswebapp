import React from 'react';
import {
  Dialog,
  Button,
  Intent,
  Classes,
  FormGroup,
  InputGroup,
  FileInput
} from '@blueprintjs/core';
import { connect } from 'react-redux';
import * as ui from '../store/ui';
import * as imagesapp from '../store/imagesapp';
import './index.css';

class UploadImageDialog extends React.Component {
  state = {
    imageName: '',
    sourceFile: '',
    rejected: false,
    rejectMessage: ''
  };
  handleChange = event => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value,
      rejected: false
    });
  };
  fileChange = event => {
    this.setState({
      ...this.state,
      sourceFile: event.target.value,
      rejected: false
    });
  };
  render() {
    const {
      isDarkTheme,
      isOpen,
      closeUploadImageDialog,
      uploadNewImage
    } = this.props;
    const { imageName, sourceFile, rejected, rejectMessage } = this.state;
    return (
      <Dialog
        className={isDarkTheme && Classes.DARK}
        canEscapeKeyClose={true}
        canOutsideClickClose={true}
        isCloseButtonShown={true}
        isOpen={isOpen}
        onClose={closeUploadImageDialog}
        title="Upload new image"
        icon="upload"
      >
        <form
          onSubmit={e => {
            e.preventDefault();
            uploadNewImage(imageName)
              .then(() => {
                this.setState({
                  imageName: '',
                  rejected: false,
                  rejectMessage: ''
                });
                closeUploadImageDialog();
              })
              .catch(e => {
                this.setState({
                  ...this.state,
                  rejected: true,
                  rejectMessage: e.message
                });
              });
          }}
        >
          <div className={Classes.DIALOG_BODY}>
            <FormGroup
              label="Name:"
              labelFor="upload-image-name"
              helperText={rejected ? rejectMessage : undefined}
              intent={rejected ? Intent.DANGER : Intent.DEFAULT}
            >
              <InputGroup
                id="upload-image-name"
                name="imageName"
                type="text"
                placeholder="Name of new image..."
                intent={rejected ? Intent.DANGER : Intent.DEFAULT}
                onChange={this.handleChange}
                value={imageName}
              />
              <FileInput
                className={'UploadImageDialog__file'}
                fill="true"
                text={sourceFile ? sourceFile : 'Choose a file...'}
                hasSelection={sourceFile !== ''}
                intent={rejected ? Intent.DANGER : Intent.DEFAULT}
                onInputChange={this.fileChange}
              />
            </FormGroup>
          </div>
          <div className={Classes.DIALOG_FOOTER}>
            <div className={Classes.DIALOG_FOOTER_ACTIONS}>
              <Button type="submit" intent={Intent.PRIMARY} text="OK" />
              <Button
                intent={Intent.DEFAULT}
                text="Cancel"
                onClick={closeUploadImageDialog}
              />
            </div>
          </div>
        </form>
      </Dialog>
    );
  }
}

const mapStateToProps = state => {
  return {
    isDarkTheme: ui.isDarkTheme(state),
    isOpen: ui.isUploadImageDialogOpen(state)
  };
};
const UploadImageDialogWithState = connect(
  mapStateToProps,
  {
    closeUploadImageDialog: ui.closeUploadImageDialog,
    uploadNewImage: imagesapp.uploadNewImage
  }
)(UploadImageDialog);
export { UploadImageDialogWithState as UploadImageDialog };
