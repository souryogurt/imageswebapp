import React from 'react';
import { AppNavbar } from '../AppNavbar';
import { ImageBrowser } from '../ImageBrowser';
import './index.css';
import { Classes } from '@blueprintjs/core';
import { connect } from 'react-redux';
import classNames from 'classnames';
import * as ui from '../store/ui';

class App extends React.Component {
  render() {
    const isDarkTheme = this.props.isDarkTheme;
    const classes = classNames('App', {
      [Classes.DARK]: isDarkTheme
    });
    return (
      <div className={classes}>
        <AppNavbar />
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
    toggleTheme: ui.toggleTheme
  }
)(App);

export { AppWithHotkeys as App };
