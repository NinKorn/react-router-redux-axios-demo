import Home from '../pages/Home'
import TodoList from '../pages/TodoList'

const routes = [
    { path: '/', component: Home, isExact: true },
    { path: '/todoList', component: TodoList }
]

export default routes