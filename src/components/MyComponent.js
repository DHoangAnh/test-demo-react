// class component
// function component
import React, { useState } from "react";
import DisplayInfor from "./DisplayInfor";
import AddUserInfor from "./AddUserInfor";

// class MyComponent extends React.Component {

//     state = {
//         listUsers: [
//             {id: 1, name: "HoiDanIT", age: "16"},
//             {id: 2, name: "Eric", age: "26"},
//             {id: 3  , name: "HaryPhamDev", age: "69"},
//         ]
//     }

//     handleAddNewUser = (userObj) => {
//         this.setState({
//             listUsers: [userObj, ...this.state.listUsers]
//         });
//     }

//     handleDeleteNewUser = (userId) => {
//         let listUsersClone = [...this.state.listUsers];
//         listUsersClone = listUsersClone.filter(item => item.id !== userId)
//         this.setState({
//             listUsers: listUsersClone
//         });
//     }
    
//     //JSX
//     render() {

//         // DRY: don't repeat yourself
//         return(
//             <>
//                 <div className="a">
//                     <AddUserInfor
//                         handleAddNewUser={this.handleAddNewUser}
//                         />
//                     <br />
//                     <DisplayInfor 
//                         listUsers={this.state.listUsers}
//                         handleDeleteNewUser={this.handleDeleteNewUser}
//                         />
//                 </div>

//                 <div className="b">

//                 </div>
//             </>
//         );
//     };
// }

const MyComponent = (props) => {

    const [listUsers, setListUsers] = useState(
        [
            {id: 1, name: "HoiDanIT", age: "16"},
            {id: 2, name: "Eric", age: "26"},
            {id: 3  , name: "HaryPhamDev", age: "69"},
        ]
    );

    const handleAddNewUser = (userObj) => {
        setListUsers([userObj, ...listUsers]);
    }

    const handleDeleteNewUser = (userId) => {
        let listUsersClone = [...listUsers];
        listUsersClone = listUsersClone.filter(item => item.id !== userId)
        setListUsers(listUsersClone);
    }

    return(
        <>
            <div className="a">
                <AddUserInfor
                    handleAddNewUser={handleAddNewUser}
                    />
                <br />
                <DisplayInfor 
                    listUsers={listUsers}
                    handleDeleteNewUser={handleDeleteNewUser}
                    />
            </div>

            <div className="b">

            </div>
        </>
    );
}

export default MyComponent;