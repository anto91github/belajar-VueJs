<template>
    Halaman detail dari {{ $route.params.id }}
    <br><br>
    <RouterLink :to="'/user/'+ $route.params.id + '/posts'"> {{ $route.params.id }}'s POSTs</RouterLink>
    <br>
    <RouterLink :to="'/user/'+ $route.params.id + '/profile'"> {{ $route.params.id }}'s Profile</RouterLink>
</template>

