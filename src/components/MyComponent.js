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
        console.log("My name is", this.state.name);

        // merge State => react class
        this.setState({
            name: 'Eric',
            age: Math.floor((Math.random()*100)+1)
            // address: 'Hoi Dan IT,
            // age: 26
        });
    }

    handleOnMouseOver(event) {
        console.log(event.pageX);
    }
    
    //JSX
    render() {
        return(
            <div>
                My name is {this.state.name} and I'm {this.state.age}
                <button onMouseOver={this.handleOnMouseOver}>Hover Me</button>
                <button onClick={(event) => {this.handleClick(event)}}>Click Me</button>
            </div>
        );
    };
}

export default MyComponent;