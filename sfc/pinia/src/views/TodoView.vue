<template>
    <h1>Halaman todolist</h1>

    <form @submit.prevent="todoStore.addTodo(newTodo)">
        <input type='text' v-model="newTodo" placeholder="add new todo ....">
        <input type="submit" value="Add">
    </form>

    <div style="width:500px; padding-inline-start: 40px;">
        <h3 style="text-align: center;">My Todo List</h3>
    </div>

    <div class="getters-button">
        <button @click="show = 'all'">Show All</button>
        <button @click="show = 'done only'">Done Only</button>
        <button @click="show = 'undone only'">Undone Only</button>
    </div>
    <!-- show all -->
    <div v-if="show == 'all'">
        <ul>
            <li v-for="list in todoStore.todoList">
                <span>{{ list.name }}</span>
                <span>
                    <button v-if="list.isDone == false" @click="todoStore.setAsDone(list.name)">set as Done</button>
                    <button v-if="list.isDone" @click="todoStore.setAsUnDone(list.name)">set as Un-Done</button>
                </span>
            </li>
        </ul>
    </div>
    <!-- done only -->
    <div v-if="show == 'done only'">
        <ul>
            <li v-for="list in todoStore.doneOnly">
                <span>{{ list.name }}</span>
                <span>
                    <button v-if="list.isDone == false" @click="todoStore.setAsDone(list.name)">set as Done</button>
                    <button v-if="list.isDone" @click="todoStore.setAsUnDone(list.name)">set as Un-Done</button>
                </span>
            </li>
        </ul>
    </div>
    <!-- undone only -->
    <div v-if="show == 'undone only'">
        <ul>
            <li v-for="list in todoStore.unDoneOnly">
                <span>{{ list.name }}</span>
                <span>
                    <button v-if="list.isDone == false" @click="todoStore.setAsDone(list.name)">set as Done</button>
                    <button v-if="list.isDone" @click="todoStore.setAsUnDone(list.name)">set as Un-Done</button>
                </span>
            </li>
        </ul>
    </div>
    

</template>

<style scooped>
    form{
        width:500px;
        padding-inline-start: 40px;
        margin-bottom: 40px;
    }

    form input {
        padding:10px
    }

    form input:first-child{
        width: 80%;
        margin: 0px 10px;
    }
    
    ul{
        list-style: none;
        width: 500px;
    }

    li{
        border: solid 1px;
        margin:10px;
        padding: 10px;
        display: flex;
        justify-content: space-between;
    }

    .getters-button{
        display: flex;
        justify-content: center;
        gap: 10px;
        width:500px; 
        padding-inline-start: 40px;
    }


</style>


<script setup>
import { useTodoStore } from '../stores/todoStore'
import {ref, reactive, onMounted, computed} from 'vue'


const todoStore = useTodoStore()
const newTodo= ref()
let show= ref('all')


</script>