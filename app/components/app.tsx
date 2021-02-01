import * as React from "react";
import * as _ from "lodash";
import * as io from "socket.io-client";

import styled from "styled-components";
import { Route, BrowserRouter as Router, Redirect } from "react-router-dom";
import { NewContainerDialog } from "./newContainerModal";
import NavBar from "./NavBar";
import Dashboard from "./Dashboard";
import Stopped from"./Stopped";
import Aws from "./Aws";
import Azure from "./Azure" ;
import Ibm from "./Ibm" ;


const Header = styled.div`
  background: lightgreen;
  width: 100vw;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 25px;
  padding-right: 25px;
  img {
    width: 100px;
    height: 100px;
    margin-left: 10%;
  }
`;

const AppTitle = styled.h1`
  color: white;
  font-size: 45px;
`;

const socket = io.connect();

export const AppComponent: React.FC<{}> = () => {
  const onRunImage = (name: String): void => {
    socket.emit("image.run", { name });
  };
  return (
    <Router>
      <div>
        <Header>
          <AppTitle>edifixio</AppTitle>
          
        </Header>
        <NavBar />
        
        <Route exact path="/" component={() => <Redirect to="/aws" />} />
        <Route exact path="/dashboard" component={() => <Dashboard />} />
        <Route exact path="/stop" component={() => <Stopped />} />
        <Route exact path="/aws" component={() => <Aws />} />
        <Route exact path="/azure" component={() => <Azure />} />
        <Route exact path="/ibm" component={() => <Ibm />} />
      
       </div>
       </Router>
    


     
  );
};
