const todoListData = {
    inputValue:'请输入待办事件',
    list: [
        '第一天事项',
        '第二天事项',
        '第三天事项',
    ]
}
export default (state = todoListData , actions) => {
    console.log(state,actions);
    if(actions.type == 'addList'){
        let newState = JSON.parse(JSON.stringify(state));
        newState.list.push(actions.value)
        return newState
    }
    return state
}