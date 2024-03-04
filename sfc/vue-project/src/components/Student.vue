<template>
    <slot>default msg</slot>
    <br>
    Hallo student {{ studentName }}
    <button @click="sendName">Show</button>
    <br>
</template>

<script>
    export default {
        props:{
            studentName : String
        },
        emits:['responseName'],
        methods:{
            sendName(){
                this.$emit('responseName', this.studentName)
            }
        }
    }
</script>