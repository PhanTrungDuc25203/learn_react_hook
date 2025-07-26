import React, { useState } from "react";

// class AddUserInfo extends React.Component {

//     state = {
//         name: 'Piscean',
//         address: 'Vietnam',
//         age: 22
//     }

//     handleOnChangeNameInput(event) {
//         this.setState({
//             name: event.target.value
//         })
//     }

//     handleOnChangeAgeInput(event) {
//         this.setState({
//             age: event.target.value
//         })
//     }

//     handleOnSubmit(event) {
//         event.preventDefault();
//         console.log(this.state)
//         this.props.handleAddNewUsers({
//             id: 100,
//             name: this.state.name,
//             age: this.state.age,
//         })
//     }

//     render() {
//         return (
//             <div>
//                 My name is {this.state.name}
//                 <br />
//                 <form onSubmit={(event) => { this.handleOnSubmit(event) }}>
//                     <label>Your name: </label>
//                     <input
//                         value={this.state.name}
//                         type="text"
//                         onChange={(event) => { this.handleOnChangeNameInput(event) }}>
//                     </input>
//                     <label>Your age: </label>
//                     <input
//                         value={this.state.age}
//                         type="text"
//                         onChange={(event) => { this.handleOnChangeAgeInput(event) }}>
//                     </input>

//                     <button>Change</button>

//                 </form>
//             </div>
//         );
//     }
// }

const AddUserInfo = (props) => {

    // state = {
    //     name: 'Piscean',
    //     address: 'Vietnam',
    //     age: 22
    // }

    const [name, setName] = useState('Piscean')
    const [address, setAddress] = useState('Vietnam')
    const [age, setAge] = useState(22)

    const handleOnChangeNameInput = (event) => {
        // this.setState({
        //     name: event.target.value
        // })
        setName(event.target.value)
    }

    const handleOnChangeAgeInput = (event) => {
        // this.setState({
        //     age: event.target.value
        // })
        setAge(event.target.value)
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();
        props.handleAddNewUsers({
            id: 100,
            name: name,
            age: age,
        })
    }

    return (
        <div>
            My name is {name}
            <br />
            <form onSubmit={(event) => { handleOnSubmit(event) }}>
                <label>Your name: </label>
                <input
                    value={name}
                    type="text"
                    onChange={(event) => { handleOnChangeNameInput(event) }}>
                </input>
                <label>Your age: </label>
                <input
                    value={age}
                    type="text"
                    onChange={(event) => { handleOnChangeAgeInput(event) }}>
                </input>

                <button>Change</button>

            </form>
        </div>
    )
}

export default AddUserInfo;