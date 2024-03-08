<template>
    Component
    
    <div class="getters-button">
        <button @click="changeShow('all')">Show All</button>
        <button @click="changeShow('done only')">Done Only</button>
        <button @click="changeShow('undone only')">Undone Only</button>
    </div>

    <ul>
        <li v-for="list in data">
            <span>{{ list.name }}</span>
            <span>
                <button v-if="list.isDone == false" @click="dataTodo.setAsDone(list.name)">set as Done</button>
                <button v-if="list.isDone" @click="dataTodo.setAsUnDone(list.name)">set as Un-Done</button>
            </span>
        </li>
    </ul>
</template>

<script setup>
    import {ref, reactive, onMounted, computed} from 'vue'

    let show= ref('all')
    const props = defineProps(['dataTodo'])
    let data = ref(props.dataTodo.todoList)
    

    function changeShow(value){
        if(value == 'done only') {
            data.value = props.dataTodo.doneOnly           
        } else if(value == 'undone only') {
            data.value = props.dataTodo.unDoneOnly
        } else {
            data.value = props.dataTodo.todoList
        }
    }
</script>