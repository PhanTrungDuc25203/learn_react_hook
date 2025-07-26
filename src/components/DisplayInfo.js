import React, { useEffect, useState } from "react";


//this is stateless class in which data gathered from ancestor, can changed to function component, when hook not invented yet
// class DisplayInfo extends React.Component {

//     render() {
//         const { listUsers } = this.props;
//         console.table(listUsers);
//         return (
//             <div className="display-info-container">
//                 {true &&
//                     <div>
//                         {listUsers.map((user) => {
//                             // if (user.age > 23) {
//                             //     return (
//                             //         <div key={user.id} className="red-text">
//                             //             <div>
//                             //                 My name is {user.name}
//                             //             </div>
//                             //             <div>
//                             //                 My age is {user.age}
//                             //             </div>
//                             //         </div>
//                             //     )
//                             // } else {
//                             //     return (
//                             //         <div key={user.id} className="green-text">
//                             //             <div>
//                             //                 My name is {user.name}
//                             //             </div>
//                             //             <div>
//                             //                 My age is {user.age}
//                             //             </div>
//                             //         </div>
//                             //     )
//                             // }

//                             return (
//                                 <div key={user.id} className={user.age > 23 ? "red-text" : "green-text"}>
//                                     <div>
//                                         My name is {user.name}
//                                     </div>
//                                     <div>
//                                         My age is {user.age}
//                                     </div>
//                                 </div>
//                             )
//                         })}
//                     </div>
//                 }
//             </div>
//         )
//     }
// }

const DisplayInfo = (props) => {
    // const { listUsers } = this.props; //this.props only be used when using class component
    const { listUsers, handleDeleteUser } = props;
    const [isShowHideUserList, setShowHideUserList] = useState(true);
    // useState

    const handleShowHideUserList = () => {
        setShowHideUserList(!isShowHideUserList)
    }

    //hàm useEffect khi không truyền mảng tham số vào đằng sau thì nó tương tự như có cả hàm componentDidMount và hàm componentDidUpdate
    // useEffect(() => {

    // });

    //hàm useEffect mà để mảng tham số đầu vào là rỗng thì nó sẽ tương ứng với hàm componentDidMount, chỉ chạy khi giao diện render lần đầu
    // useEffect(() => {

    // }, []);

    //hàm useEffect mà mảng tham số đầu vào chứa gì đó thì nó sẽ tương ứng với hàm componentDidUpdate, chạy mỗi khi render lại giao diện trừ lần đầu render
    // useEffect(() => {

    // }, [someDependencies]);

    useEffect(
        () => {
            if (listUsers.length == 2) alert('2 users still remain')
        }, [listUsers] // có nghĩa là mỗi khi listUsers thay đổi thì hàm useEffect sẽ được chạy
    )

    return (
        <div className="display-info-container">
            <div>
                <span style={{ cursor: 'pointer' }} onClick={() => handleShowHideUserList()}>{isShowHideUserList === true ? "Hide user's list" : "Show user's list"}</span>
            </div>
            {isShowHideUserList &&
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
                                <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
                            </div>
                        )
                    })}
                </div>
            }
        </div>
    )
}

export default DisplayInfo;