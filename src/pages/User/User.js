import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import '../../style/user.scss'
class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    componentDidMount() {
        console.log(this.props.routes);
    }
    render() {
        return (
            <div className="user">
                <div className="title">用户主页</div>
                <div className="body">
                    <div className="sidle">
                        <Link to="/user/">用户信息</Link>
                        <Link to="/user/userList">用户列表</Link>
                    </div>
                    <div className="main">
                        {/* {
                            this.props.routes.map((route, key) => {
                                if (route.exact) {
                                    return (<Router exact key={key} path={route.path} component={route.component} />)
                                } else {
                                    return (<Router key={key} path={route.path} component={route.component} />)
                                }
                            })
                        } */}

                        {this.props.routes.map((route, key) => {
                            if (route.exact) {
                                return (
                                    <Route
                                        exact
                                        key={key}
                                        path={route.path}
                                        component={route.component} />)
                            } else {
                                return (
                                    <Route
                                        key={key}
                                        path={route.path}
                                        component={route.component} />)
                            }

                        }
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default User;