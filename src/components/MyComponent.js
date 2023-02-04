// class component
// function component
import React from "react";
import DisplayInfor from "./DisplayInfor";
import UserInfor from "./UserInfor";

class MyComponent extends React.Component {
    
    //JSX
    render() {
        const myInfor = ['ab', 'c', 'c'];
        return(
            <div>
                <UserInfor />
                <br />
                <DisplayInfor name="HoiDanIT" age="30" />
                <hr />
                <DisplayInfor name={"Eric"} age={26} myInfor={myInfor} />
            </div>
        );
    };
}

export default MyComponent;