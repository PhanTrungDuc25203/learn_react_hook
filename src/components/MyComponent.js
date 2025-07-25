import React from "react";
import UserInfo from "./UserInfo";
import DisplayInfo from "./DisplayInfo";

class MyComponent extends React.Component {

    render() {
        return (
            <div>
                <UserInfo />
                <DisplayInfo name="Duc" age="22" />
            </div>
        );
    }
}

export default MyComponent;