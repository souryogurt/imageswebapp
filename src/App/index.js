import React from 'react';
import { AppNavbar } from '../AppNavbar';
import { ImageBrowser } from '../ImageBrowser';
import { UploadImageDialog } from '../UploadImageDialog';
import './index.css';
import { Classes } from '@blueprintjs/core';
import { connect } from 'react-redux';
import classNames from 'classnames';
import * as ui from '../store/ui';
import * as imagesapp from '../store/imagesapp';

class App extends React.Component {
  componentDidMount() {
    this.props.fetchImages().catch(e => {
      console.error(e);
    });
  }
  render() {
    const isDarkTheme = this.props.isDarkTheme;
    const classes = classNames('App', {
      [Classes.DARK]: isDarkTheme
    });
    return (
      <div className={classes}>
        <AppNavbar />
        <UploadImageDialog />
        <ImageBrowser className="App__content" />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isDarkTheme: ui.isDarkTheme(state)
  };
};
const AppWithHotkeys = connect(
  mapStateToProps,
  {
    toggleTheme: ui.toggleTheme,
    fetchImages: imagesapp.fetchImages
  }
)(App);

export { AppWithHotkeys as App };
