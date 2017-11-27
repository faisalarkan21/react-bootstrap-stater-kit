import React, { Component } from 'react';
import { Panel, Col, Button, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

class Dashboard extends Component {
  render() {
    return (
      <div className >
        <Navbar className="navbar navbar-default navbar-fixed-top">
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Bootstrap Paper</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href="#">Link</NavItem>
            <NavItem eventKey={2} href="#">Link</NavItem>
            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.4}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
          <Navbar.Form pullRight>
            <Button bsStyle="primary" >Login / Sign up</Button>
          </Navbar.Form>
        </Navbar>

        <Col id="post-panel" xs={4} md={5} lg={4} >
          <Panel header="ReadMe" bsStyle="primary">
            Hi there, i'm just making webpack config and basic example component
            <code>bootstrap paper with react and redux stuff</code>,
            so i can clone this repo if need it &nbsp; 😎.
            <br />
           Feel free for use it on your own..  &nbsp;  🎧
          </Panel>
          <Button bsStyle="primary">hello !</Button>
        </Col>
      </div>
    );
  }
}


export default Dashboard;
