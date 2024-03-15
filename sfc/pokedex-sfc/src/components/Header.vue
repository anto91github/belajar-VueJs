<style>
.suggested-pokemon{
    cursor: pointer;
}
</style>
<template>
    <div class="row justify-content-center">
        <div class="col-4">
            <img src="../assets/img/pngegg.png" alt="" style="width: 100%;">
        </div>
    </div>

    <div class="row justify-content-center mt-3 text-white">
        <div class="col-5">
            <input type="text" class="form-control" placeholder="Search Pokemon" v-model=search>
            <div class="mt-2">
                <label>Suggestion: &nbsp;</label>
                <span v-for="i in suggestedPokemon" class="suggested-pokemon">
                    <RouterLink :to='"/pokemon/"+i.name' style="text-decoration: none;" class="text-white"> 
                        {{i.name}}
                    </RouterLink> |
                </span>
            </div>
        </div>
    </div>
</template>

<script setup>
    import {ref, reactive, onMounted, computed, watch } from 'vue'

    let search = ref('')
    let gen1List = ref([])
    let suggestedPokemon = ref('')

    async function getGen1Pokemon(){
        let response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
        let data = await response.json();
        let results = data.results;

        gen1List.value= results
    }

    watch(search, (currentValue, oldValue) => {
        let filteredPokemon = gen1List.value.filter( item => {
            return item.name.includes(currentValue)
        })
        
        suggestedPokemon.value = filteredPokemon.slice(0,5) //hanya ambil 5 data pertama
    });

    onMounted(() => {
        getGen1Pokemon()
    })
</script>