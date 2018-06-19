import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

var Container = styled.div`
  width: 100px;
  height: 100px;
  background-color: red;
`;

class Home extends Component {
  render() {
    return <Container>home ft</Container>;
  }
}
export default connect()(Home);
