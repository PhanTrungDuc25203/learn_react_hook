import React from "react";

class MyComponent extends React.Component {
    state = {
        name: 'Piscean',
        address: 'Vietnam',
        age: 22
    }

    handleClick(event) {
        alert("Button clicked");
        // console.log("State's name:", this.state.name);
    }

    render() {
        return (
            <div>
                My name is {this.state.name}
                <br />
                <button onClick={this.handleClick}>Click me</button>
            </div>
        );
    }
}

export default MyComponent;