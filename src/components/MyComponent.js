// class component
// function component
import React from "react";
import DisplayInfor from "./DisplayInfor";
import AddUserInfor from "./AddUserInfor";

class MyComponent extends React.Component {

    state = {
        listUsers: [
            {id: 1, name: "HoiDanIT", age: "16"},
            {id: 2, name: "Eric", age: "26"},
            {id: 3  , name: "HaryPhamDev", age: "69"},
        ]
    }

    handleAddNewUser = (userObj) => {
        console.log(userObj);
        this.setState({
            listUsers: [userObj, ...this.state.listUsers]
        });
    }
    
    //JSX
    render() {

        // DRY: don't repeat yourself
        return(
            <>
                <div className="a">
                    <AddUserInfor
                        handleAddNewUser={this.handleAddNewUser}
                        />
                    <br />
                    <DisplayInfor 
                        listUsers={this.state.listUsers}
                        />
                </div>

                <div className="b">

                </div>
            </>
        );
    };
}

export default MyComponent;