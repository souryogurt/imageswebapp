import React from 'react';
import './index.css';
import * as ui from '../store/ui';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { Button, Intent, NonIdealState } from '@blueprintjs/core';

function NoImage({ className, uploadImageDialog }) {
  return (
    <NonIdealState
      className={className}
      visual="document"
      title="Create new image"
      action={
        <Button
          large
          icon="document"
          text="New image..."
          intent={Intent.PRIMARY}
          onClick={uploadImageDialog}
        />
      }
    />
  );
}

function ImageBrowser({ className, images, uploadImageDialog }) {
  if (images.length === 0) {
    return (
      <NoImage uploadImageDialog={uploadImageDialog} className={className} />
    );
  }
  const classes = classNames('ImageBrowser', className);
  return <div className={classes}></div>;
}

const mapStateToProps = state => {
  return {
    images: []
  };
};

const ImageBrowserWithRedux = connect(
  mapStateToProps,
  {
    uploadImageDialog: ui.openUploadImageDialog
  }
)(ImageBrowser);
export { ImageBrowserWithRedux as ImageBrowser };
