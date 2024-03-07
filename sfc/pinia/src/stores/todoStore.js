import { defineStore } from 'pinia'

/*export const useTodoStore = defineStore('todo', {
    state: () => ({ count: 5, name: 'Eduardo' }),
    getters: {
        doubleCount: (state) => state.count * 2,
    },
    actions: {
        increment() {
            this.count++
        },
    },
})*/

export const useTodoStore = defineStore('todo', {
    state: () => ({ 
        todoList: [
            {'name' : 'Belajar HTML', isDone: false},
            {'name' : 'Belajar CSS', isDone: false},
            {'name' : 'Belajar JS', isDone: false},
            {'name' : 'Belajar PHP', isDone: false},
        ]
    }),
    getters: {
       showAll(state){
            return state.todoList
       },
       doneOnly(state){
            return state.todoList.filter(item => item.isDone == true)
       },
       unDoneOnly(state){
            return state.todoList.filter(item => item.isDone == false)
       }
    },
    actions: {
        setAsDone(name){
            this.todoList.find(item => item.name == name).isDone = true
        },
        setAsUnDone(name){
            this.todoList.find(item => item.name == name).isDone = false
        },
        addTodo(data){
            let exist = this.todoList.filter(item=>item.name == data).length

            if(exist) {
                alert('Already Exist')
                return
            } 

            this.todoList.push(
                {name : data, isDone: false}
            )
            
        }
    },
})