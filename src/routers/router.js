import Home from '../pages/Home'
import TodoList from '../pages/TodoList'
import User from '../pages/User/User'
import UserInfo from '../pages/User/UserInfo'
import UserList from '../pages/User/UserList'

const routes = [
    { path: '/', component: Home, exact: true },
    { path: '/todoList', component: TodoList },
    {
        path: '/user', component: User,
        routes: [
            { path: '/user/', component: UserInfo, exact: true  },
            { path: '/user/UserList', component: UserList }
        ]
    }
]

export default routes