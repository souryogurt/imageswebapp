import React from 'react';
import './index.css';
import * as ui from '../store/ui';
import * as images from '../store/images';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { Button, Intent, NonIdealState } from '@blueprintjs/core';
import { ImagesSelector } from '../ImagesSelector';
import { ImagePreview } from '../ImagePreview';

function NoImage({ className, uploadImageDialog }) {
  return (
    <NonIdealState
      className={className}
      visual="document"
      title="No images"
      action={
        <Button
          large
          icon="upload"
          text="Upload image..."
          intent={Intent.PRIMARY}
          onClick={uploadImageDialog}
        />
      }
    />
  );
}

function ImageBrowser({ className, isEmpty, uploadImageDialog }) {
  if (isEmpty) {
    return (
      <NoImage uploadImageDialog={uploadImageDialog} className={className} />
    );
  }
  const classes = classNames('ImageBrowser', className);
  return (
    <div className={classes}>
      <ImagesSelector className="ImageBrowser__Left" />
      <ImagePreview className="ImageBrowser__Right" />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isEmpty: images.empty(state)
  };
};

const ImageBrowserWithRedux = connect(
  mapStateToProps,
  {
    uploadImageDialog: ui.openUploadImageDialog
  }
)(ImageBrowser);
export { ImageBrowserWithRedux as ImageBrowser };
