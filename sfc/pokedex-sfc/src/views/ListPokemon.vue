<style>
    .card{
        background: rgba(255,255,255, 0.21);
        border-radius: 10px;
        box-shadow: 0 4px 30px rgba(0,0,0, 0.1);
        backdrop-filter: blur(9px);
        border-left: 2px solid rgba(255, 255, 255, 0.58);
        border-top: 2px solid rgba(255,255,255, 0.58);
    }
</style>

<template>
    <div class="view-all text-white">
        <div class="row px-5">
            <div class="col-12 col-md-4 col-lg-3 mb-3" v-for="item in pokemonList">
                <RouterLink :to="'/pokemon/'+item.name" style="text-decoration: none;" class="text-white">
                    <div class="card text-center">
                        <img :src='item.sprites.front_default' alt=''>
                        <label style="font-size: 18px"> {{item.name}} </label>
                    </div>
                </RouterLink>

            </div>
        </div>
    </div>

</template>

<script setup>
    import {ref, reactive, onMounted, computed} from 'vue'

    let pokemonList = ref([])

    async function getListPokemon(){
        let response = await fetch("https://pokeapi.co/api/v2/pokemon");
        let data = await response.json();
        let results = data.results;

        results.forEach(item =>{
            getEachPokemon(item)
        })
    }

    async function getEachPokemon(item){
        let response = await fetch("https://pokeapi.co/api/v2/pokemon/" + item.name);
        let data = await response.json();
        
        pokemonList.value.push(data)
        pokemonList.value.sort((a,b) => a.id - b.id) //agar datanya urut
    }

    async function viewDetail(name){
        let response = await fetch("https://pokeapi.co/api/v2/pokemon/" + name);
        let data = await response.json();
        this.selectedPokemon = data
    }

    onMounted(() => {
        getListPokemon()
    })
</script>