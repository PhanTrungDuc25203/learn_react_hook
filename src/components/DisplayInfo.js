import React from "react";

class DisplayInfo extends React.Component {
    render() {
        const { listUsers } = this.props;
        console.table(listUsers);
        return (
            <div>
                {listUsers.map((user) => {
                    // if (user.age > 23) {
                    //     return (
                    //         <div key={user.id} className="red-text">
                    //             <div>
                    //                 My name is {user.name}
                    //             </div>
                    //             <div>
                    //                 My age is {user.age}
                    //             </div>
                    //         </div>
                    //     )
                    // } else {
                    //     return (
                    //         <div key={user.id} className="green-text">
                    //             <div>
                    //                 My name is {user.name}
                    //             </div>
                    //             <div>
                    //                 My age is {user.age}
                    //             </div>
                    //         </div>
                    //     )
                    // }

                    return (
                        <div key={user.id} className={user.age > 23 ? "red-text" : "green-text"}>
                            <div>
                                My name is {user.name}
                            </div>
                            <div>
                                My age is {user.age}
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default DisplayInfo;