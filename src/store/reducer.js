const todoListData = {
    inputValue:'请输入待办事件',
    list: [
        '第一天事项',
        '第二天事项',
        '第三天事项',
    ]
}
export default (state = todoListData , actions) => {
    if(actions.type == 'addList'){
        let newState = JSON.parse(JSON.stringify(state));
        newState.list.push(actions.value)
        return newState
    }
    if(actions.type == 'delList'){
        let newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(actions.value,1)
        return newState
    }
    return state
}