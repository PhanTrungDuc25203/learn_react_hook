import React, { useState } from "react";
import AddUserInfo from "./AddUserInfo";
import DisplayInfo from "./DisplayInfo";

// class MyComponent extends React.Component {

//     state = {
//         listUsers: [
//             { id: 1, name: "Piscean", age: "22" },
//             { id: 2, name: "Piscean2", age: "23" },
//             { id: 3, name: "Piscean3", age: "24" },
//         ]
//     }

//     handleAddNewUsers = (userObj) => {
//         console.log(userObj)
//         this.setState({
//             listUsers: [userObj, ...this.state.listUsers]
//         })
//     }

//     render() {
//         return (
//             <div>
//                 <AddUserInfo handleAddNewUsers={this.handleAddNewUsers} />
//                 <DisplayInfo
//                     listUsers={this.state.listUsers}
//                 />
//             </div>
//         );
//     }
// }

const MyComponent = (props) => {

    // state = {
    //     listUsers: [
    //         { id: 1, name: "Piscean", age: "22" },
    //         { id: 2, name: "Piscean2", age: "23" },
    //         { id: 3, name: "Piscean3", age: "24" },
    //     ]
    // }

    const [listUsers, setListUsers] = useState(
        [
            { id: 1, name: "Piscean", age: "22" },
            { id: 2, name: "Piscean2", age: "23" },
            { id: 3, name: "Piscean3", age: "24" },
        ]
    );

    const handleAddNewUsers = (userObj) => {
        setListUsers([userObj, ...listUsers])
        // this.setState({
        //     listUsers: [userObj, ...this.state.listUsers]
        // })
    }

    const handleDeleteUser = (userId) => {
        let listUsersClone = listUsers;
        listUsersClone = listUsersClone.filter(item => item.id !== userId)
        setListUsers(listUsersClone)
    }

    return (
        <div>
            <AddUserInfo handleAddNewUsers={handleAddNewUsers} />
            <DisplayInfo
                listUsers={listUsers}
                handleDeleteUser={handleDeleteUser}
            />
        </div>
    )
}

export default MyComponent;