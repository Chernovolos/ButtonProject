import React from "react";
import ButtonContainer from "./ButtonContainer";
import Users from "./Users";
import logo from '../logo.svg';

export default class Page extends React.Component {
    render() {
        return(
            <div className="wrapper">
                <div className="container">
                    <div>
                        <img src={logo} className="App-logo" alt="logo"/>
                    </div>
                    <ButtonContainer/>
                    <Users/>
                </div>
            </div>
        );
    }
}
