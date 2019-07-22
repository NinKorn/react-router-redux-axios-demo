import React, { Component } from 'react';
import { Input, Button, List } from 'antd';
import '../style/todolist.scss'

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        let list = [
            '第一天的计划',
            '第二天的计划',
            '第三天的计划'
        ];
        return (
            <div className="todo-lidt">
                <div className="content">
                    <div className="input">
                        <Input placeholder="Basic usage" />
                        <Button type="primary">添加</Button>
                    </div>
                    <div className="list-box">
                        <List
                            bordered
                            dataSource={list}
                            renderItem={item => (
                                <List.Item>
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