<template>
    <h1>Halaman todolist</h1>

    <form @submit.prevent="todoStore.addTodo(newTodo)">
        <input type='text' v-model="newTodo" placeholder="add new todo ....">
        <input type="submit" value="Add">
    </form>

    <div style="width:500px; padding-inline-start: 40px;">
        <h3 style="text-align: center;">My Todo List</h3>
    </div>

    <TodoList v-bind:dataTodo="todoStore"/>
    

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
import TodoList from '../components/TodoList.vue'


const todoStore = useTodoStore()
const newTodo= ref()



</script>

<!-- <script>
    import { useTodoStore } from '../stores/todoStore'
    import TodoList from '../components/TodoList.vue'

    export default{
        setup(){
            const todoStore = useTodoStore()

            return {todoStore}
        },
        components:{
            TodoList
        }
    }
</script> -->