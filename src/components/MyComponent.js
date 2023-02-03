// class component
// function component
import React from "react";


class MyComponent extends React.Component {

    state = {
        name: 'HaryPhamDev',
        address: 'Hoi Dan IT',
        age: 26
    };

    handleClick(event) {
        console.log("Click Me");
        console.log("My name is ", this.state.name);
    }

    handleOnMouseOver(event) {
        console.log(event.pageX);
    }
    
    //JSX
    render() {
        return(
            <div>
                My name is {this.state.name} and I'm from {this.state.address}
                <button onMouseOver={this.handleOnMouseOver}>Hover Me</button>
                <button onClick={this.handleClick}>Click Me</button>
            </div>
        );
    };
}

export default MyComponent;