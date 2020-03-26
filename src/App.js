import React from 'react';
import './App.css';
import {Layout, Navigation, Header, Drawer, Content, Footer, FooterSection, FooterLinkList} from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';
function App() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title="Freddyzine" scroll>
            <Navigation>
                <Link to="/">Home</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact Me</Link>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
                <Link to="/">Home</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact Me</Link>
            </Navigation>
        </Drawer>
        
        <Content>
            <div className="page-content" />
              <Main/>
        </Content>
        <div className="foot">
            <Footer className="footsect" size="mini">
            <FooterSection  type="left" logo="Title">
                
            <FooterLinkList> &copy; Copyright 2020
                <a href="/">Help</a>
                <a href="/">Privacy & Terms</a>
                &reg; Registered Trademark of Freddyzine Inc.
                </FooterLinkList>
            </FooterSection>
            </Footer></div>
    </Layout>
    
</div>
  );
}

export default App;
