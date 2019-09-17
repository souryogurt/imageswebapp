import React from 'react';
import './index.css';
import { connect } from 'react-redux';
import classNames from 'classnames';

function ImagesSelector({ className, pics }) {
  const classes = classNames('ImagesSelector', className);
  return <div className={classes}></div>;
}

const mapStateToProps = state => {
  return {};
};

const ImagesSelectorWithRedux = connect(
  mapStateToProps,
  {}
)(ImagesSelector);
export { ImagesSelectorWithRedux as ImagesSelector };
