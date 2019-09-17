import React from 'react';
import './index.css';
import { connect } from 'react-redux';
import classNames from 'classnames';

function ImagePreview({ className }) {
  const classes = classNames('ImagePreview', className);
  return <div className={classes}></div>;
}

const mapStateToProps = state => {
  return {};
};

const ImagePreviewWithRedux = connect(
  mapStateToProps,
  {}
)(ImagePreview);
export { ImagePreviewWithRedux as ImagePreview };
