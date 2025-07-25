import React from "react";
import AddUserInfo from "./AddUserInfo";
import DisplayInfo from "./DisplayInfo";

class MyComponent extends React.Component {

    state = {
        listUsers: [
            { id: 1, name: "Piscean", age: "22" },
            { id: 2, name: "Piscean2", age: "23" },
            { id: 3, name: "Piscean3", age: "24" },
        ]
    }

    handleAddNewUsers = (userObj) => {
        console.log(userObj)
        this.setState({
            listUsers: [userObj, ...this.state.listUsers]
        })
    }

    render() {
        return (
            <div>
                <AddUserInfo handleAddNewUsers={this.handleAddNewUsers} />
                <DisplayInfo
                    listUsers={this.state.listUsers}
                />
            </div>
        );
    }
}

export default MyComponent;