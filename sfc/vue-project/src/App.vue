<template>
  <Student @responseName="(value)=> selectedStudent=value" studentName="Andy">
    ini adalah nilai slot Parent
  </Student> 
  <br>
  <Student @responseName="showData" studentName="Budi"/> <br>
  <Student @responseName="showData" studentName="Elly"/> <br>

  <p>
    Student yg di pilih = {{ selectedStudent }}
  </p>
</template>

<script>
  import Student from './components/Student.vue'

  export default {
    components: {
      Student
    },
    data(){
      return{
        selectedStudent:'',
        testData:''
    }
  },
  methods:{
    showData(value){
      this.selectedStudent = value
    }
  }
}
</script>