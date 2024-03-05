<template>
    <h1>Ini adalah halaman USer</h1>
    <h2>List User</h2>
    <ul>
        <li v-for="val in users">
            <RouterLink :to="'user/'+val.params">{{ val.name }}</RouterLink>
        </li>
    </ul>
</template>

<script>
    export default {
        data() {
            return {
                users:[
                    {params: 'meg', name: 'Meg'},
                    {params: 'ben', name: 'Ben'},
                    {params: 'greg', name: 'Greg'},
                ]
            }
        }
    }
</script>