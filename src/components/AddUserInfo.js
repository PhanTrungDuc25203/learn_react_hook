import React from "react";

class AddUserInfo extends React.Component {

    state = {
        name: 'Piscean',
        address: 'Vietnam',
        age: 22
    }

    handleOnChangeNameInput(event) {
        this.setState({
            name: event.target.value
        })
    }

    handleOnChangeAgeInput(event) {
        this.setState({
            age: event.target.value
        })
    }

    handleOnSubmit(event) {
        event.preventDefault();
        console.log(this.state)
        this.props.handleAddNewUsers({
            id: 100,
            name: this.state.name,
            age: this.state.age,
        })
    }

    render() {
        return (
            <div>
                My name is {this.state.name}
                <br />
                <form onSubmit={(event) => { this.handleOnSubmit(event) }}>
                    <label>Your name: </label>
                    <input
                        value={this.state.name}
                        type="text"
                        onChange={(event) => { this.handleOnChangeNameInput(event) }}>
                    </input>
                    <label>Your age: </label>
                    <input
                        value={this.state.age}
                        type="text"
                        onChange={(event) => { this.handleOnChangeAgeInput(event) }}>
                    </input>

                    <button>Change</button>

                </form>
            </div>
        );
    }
}

export default AddUserInfo;