import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    headers: {
        'API-KEY': 'b1db3679-9250-4f87-8cab-ad04d6b2ac93'
    },
    withCredentials: true
})

/*const settings = {
    withCredentials: true,
    headers: {
        'API-KEY': 'b1db3679-9250-4f87-8cab-ad04d6b2ac93'
    }
}*/
type TodoType = {
    addedDate: string,
    id:string,
    title: string,
    order: number
}

type CreatTodoType = {
    resultCode: number,
    messages: Array<string>,
    fieldsError: Array<string>,
    data: {
        item: TodoType
    }
}

type DeleteAndType = {
    resultCode: number,
    messages: string,
    data: {}
}

export const todolistApi = {
    getTodos() {
        return instance.get<Array<TodoType>>('todo-lists')
    },
createTodo(title:string){
    return instance.post<CreatTodoType[]>('todo-lists', {title: "newTodolist"})
},
    deleteTodo(todolistId:string){
        let pr = instance.delete(`todo-lists/${todolistId}`)
return pr
    },
    updateTodo(todolistId:string, title:string){
        let pr = instance.put(`todo-lists/${todolistId}`, {title})
return pr
    }
};

