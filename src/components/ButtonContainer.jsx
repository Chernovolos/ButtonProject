import React from "react";

class ButtonContainer extends React.Component {
    state = {
        count : 0
    };

    plusClick = () => {
        this.setState((prevState) => ({count: prevState.count + 1}))
    };

    minusClick = () => {
        this.setState((prevState) => ({count: prevState.count - 1}))
    };

    reset = () => {
        this.setState((prevState) => ({count: prevState.count = 0}))
    };


    render() {
        return (
           <div>
                <p>counter: {this.state.count}</p>
                <button onClick={this.plusClick} className="btn btn-success btn-sm">PLUS</button>
                <button onClick={this.minusClick} className="btn btn-warning btn-sm">MINUS</button>
                <button onClick={this.reset} className="btn btn-danger btn-sm">RESET</button>
           </div>
        )
    }
}

export default ButtonContainer;
