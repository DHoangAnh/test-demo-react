// class component
// function component
import React from "react";
import DisplayInfor from "./DisplayInfor";
import UserInfor from "./UserInfor";

class MyComponent extends React.Component {

    state = {
        listUsers: [
            {id: 1, name: "HoiDanIT", age: "16"},
            {id: 2, name: "Eric", age: "26"},
            {id: 3  , name: "HaryPhamDev", age: "69"},
        ]
    }
    
    //JSX
    render() {

        // DRY: don't repeat yourself
        return(
            <div>
                <UserInfor />
                <br />
                <DisplayInfor listUsers={this.state.listUsers} />
            </div>
        );
    };
}

export default MyComponent;