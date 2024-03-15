<template>
     <div class="view-detail text-white">
        <div class="mb-5">
            <button @click="back()">Back</button>
        </div>
        <div class="row">
            <div class="col-12 col-md-6">
                <div class="card">
                    <img v-if="selectedPokemon.sprites" :src='selectedPokemon.sprites.front_default' alt=''>
                </div>
            </div>
            <div class="col-12 col-md-6">
                 <h2>{{selectedPokemon.name}}</h2>
                <p>
                    <label>Type:&nbsp;&nbsp;</label>
                    <span v-for="i in selectedPokemon.types">
                        {{i.type.name}} |
                    </span>
                </p>
                <p>
                    <label>Skills:&nbsp;&nbsp;</label>
                    <ul v-for="i in selectedPokemon.moves">
                        <li> {{i.move.name}} </li>
                    </ul>
                </p>
            </div>
        </div>
    </div> 
    
</template>

<script setup>
import {  useRouter, useRoute } from "vue-router";
import {ref, reactive, onMounted, computed, watch} from 'vue'


const router = useRouter();
const route = useRoute();
// let selectedPokemon = ref({})
let selectedPokemon = reactive({})



    function back(){
        // router.back()
        router.push('/')
    }

    async function getPokemon(){
        let name =route.params.name
        let response = await fetch("https://pokeapi.co/api/v2/pokemon/" + name);
        let data = await response.json();
        
        // selectedPokemon.value = data
        Object.assign(selectedPokemon, data)
    }

    watch(() => route.params.name, (newId, oldId) => {
        getPokemon()
    })

    onMounted(() => {
        getPokemon()
    })
</script>