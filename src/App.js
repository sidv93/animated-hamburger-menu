import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header';

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    position: relative;
`;
const Wrapper = styled.div`
  flex: 9;
  display: flex;
  align-items: center;
  justify-content: center;
`;
function App() {
  return (
    <Router>
      <Container>
        <Header />
        <Wrapper>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/opportunities' component={Opportunities} />
              <Route exact path='/solutions' component={Solutions} />
              <Route exact path='/contact-us' component={Contact} />
            </Switch>
        </Wrapper>
      </Container>
    </Router>
  );
}

function Opportunities() {
  return <p>Discover our numerous opportunities</p>;
}

function Solutions() {
  return <p>Solutions that help you.</p>;
}

function Contact() {
  return <p>Feel free to reach us.</p>;
}

function Home() {
  return (
    <Wrapper>
      <h5>
        The <b>HAMBRG</b>, is a creative, engineer driven, global agency
          working on advancing the software, advertising and design communities
          to new heights.
        </h5>
    </Wrapper>
  );
}

export default App;
