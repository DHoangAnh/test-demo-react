import React from "react";
import './DisplayInfor.scss';
import logo from './../logo.svg';

class DisplayInfor extends React.Component {
    constructor(props) {
        console.log('>>> call constructor: 1');
        super(props);
        // babel compiler
        this.state = {
            isShowListUser: true
        }
    }

    componentDidMount() {
        console.log('>>> call me component did mount');
        setTimeout(() => {
            document.title = 'Hoi Dan IT && Eric';
        }, 3000);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('>>> call me component did update', this.props, prevProps);
        if (this.props.listUsers !== prevProps.listUsers) {
            if (this.props.listUsers.length === 5) {
                alert('You got 5 user');
            }
        }
    }

    handleShowHide = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser
        })
    }

    render() {
        console.log('>>> call me render');
        // destructuring array/object
        const { listUsers } = this.props;
        // props => properties

        // template + logic js
        return(
            <div className="display-infor-container">
                {/* <img src={logo} /> */}
                <div>
                    <span onClick={() => {this.handleShowHide()}}>
                        {this.state.isShowListUser === true ? "Hide list users:" : "Show list users:"}
                    </span>
                </div>

                {
                    this.state.isShowListUser &&
                    <>
                        { listUsers.map((user) => {
                            
                            return(
                                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                    <div>
                                        <div>My name is {user.name}</div>
                                        <div>My age is {user.age}</div>
                                    </div>
                                    <div>
                                        <button onClick={() => {this.props.handleDeleteNewUser(user.id)}}>Delete</button>
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
}

export default DisplayInfor;