import React from "react";
import MyLogo from "../assets/Images/mylogo.png";

class HeaderContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeLink: "Home"
        }
    };

    actArticleLink = (event) => {
        event.preventDefault();
        event.target.getAttribute("data-name");
        this.setState({
           activeLink: event.target.getAttribute("data-name")
        })
    };

    render(){
        const activeLink = this.state;

        return (
            <div className="header-container">
                <div className="container">
                    <header className="header">
                        <div>
                            <a href="#" className="logo"><img src={MyLogo}  alt="logo"/></a>
                        </div>
                        <nav className="nav">
                            <a href="#" data-name="Home" onClick={this.actArticleLink} className={`nav-item ${this.state.activeLink === "Home"? "is-active": ""}`}>Home</a>
                            <a href="#" data-name="Contact" onClick={this.actArticleLink} className={`nav-item  ${this.state.activeLink === "Contact"? "is-active": ""}`}>Contact</a>
                            <a href="#" data-name="About us" onClick={this.actArticleLink} className={`nav-item   ${this.state.activeLink === "About us"? "is-active": ""}`}>About us</a>
                        </nav>
                    </header>
                </div>
            </div>
        )
    }
}

export default HeaderContainer;
