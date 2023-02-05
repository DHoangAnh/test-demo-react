import React, { useState } from "react";
import './DisplayInfor.scss';
import logo from './../logo.svg';
// stateless
// class DisplayInfor extends React.Component {
//     render() {
//         console.log('>>> call me render');
//         // destructuring array/object
//         const { listUsers } = this.props;
//         // props => properties

//         // template + logic js
//         return(
//             <div className="display-infor-container">

//                 {
//                     true &&
//                     <>
//                         { listUsers.map((user) => {
                            
//                             return(
//                                 <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
//                                     <div>
//                                         <div>My name is {user.name}</div>
//                                         <div>My age is {user.age}</div>
//                                     </div>
//                                     <div>
//                                         <button onClick={() => {this.props.handleDeleteNewUser(user.id)}}>Delete</button>
//                                     </div>
//                                     <hr />
//                                 </div>
//                             );
//                         })}
//                     </>
//                 }
//             </div>
//         );
//     };
// }

const DisplayInfor = (props) => {
    const { listUsers } = props;

    const [isShowHideListUser, setShowHideListUser] = useState(true);
    // Destructuring assignment

    // this.state = {
    //     isShowHideListUser: true
    // }

    const handleShowHideListUser = () => {
        // this.setState = {
        //     isShowHideListUser: true
        // }
        setShowHideListUser(!isShowHideListUser);
    }

    return(
        <div className="display-infor-container">
            <div>
                <span onClick={() => handleShowHideListUser()}>
                    {isShowHideListUser === true ? 'Hide List User' : 'Show List User'}
                </span>
            </div>
            {
                isShowHideListUser &&
                <>
                    { listUsers.map((user) => {
                        
                        return(
                            <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                <div>
                                    <div>My name is {user.name}</div>
                                    <div>My age is {user.age}</div>
                                </div>
                                <div>
                                    <button onClick={() => props.handleDeleteNewUser(user.id)}>Delete</button>
                                </div>
                                <hr />
                            </div>
                        );
                    })}
                </>
            }
        </div>
    );
};

export default DisplayInfor;