import React from 'react';
import {
  Navbar,
  NavbarGroup,
  NavbarHeading,
  Alignment
} from '@blueprintjs/core';

function AppNavbar() {
  return (
    <Navbar fixedToTop>
      <NavbarGroup align={Alignment.LEFT}>
        <NavbarHeading>Awesome Images App</NavbarHeading>
      </NavbarGroup>
    </Navbar>
  );
}

export { AppNavbar };
