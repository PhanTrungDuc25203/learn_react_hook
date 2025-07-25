import React from "react";

class MyComponent extends React.Component {
    state = {
        name: 'Piscean',
        address: 'Vietnam',
        age: 22
    }
    render() {
        return (
            <div>
                My name is {this.state.name}
            </div>
        );
    }
}

export default MyComponent;