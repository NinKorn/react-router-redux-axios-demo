import React, { Component } from 'react';
import { Input, Button, List } from 'antd';
import store from '../store'
import '../style/todolist.scss'

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: store.getState().list,
            inputVlue:''
        };
        store.subscribe(this.storeChange)
    }
    changeValue = (e) => {
        this.setState({
            inputVlue:e.target.value
        })
    }
    addList = () => {
        console.log('aa');
        const action ={
            type:'addList',
            value:this.state.inputVlue
        }
        store.dispatch(action);
    }
    delList = (index) => {
        const action = {
            type:'delList',
            value:index
        }
        store.dispatch(action)
    }
    storeChange =() =>{
        this.setState({
            list:store.getState().list
        });
    }

    render() {
        return (
            <div className="todo-lidt">
                <div className="content">
                    <div className="input">
                        <Input placeholder="Basic usage" onChange={this.changeValue} />
                        <Button type="primary" onClick={this.addList}>添加</Button>
                    </div>
                    <div className="list-box">
                        <List
                            bordered
                            dataSource={this.state.list}
                            renderItem={(item,index) => (
                                <List.Item onClick={ this.delList.bind(this,index) }>
                                    {item}
                                </List.Item>
                            )}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default TodoList;