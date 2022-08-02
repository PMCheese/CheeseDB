<template>
    <div>
        <div v-for="hero in heroes">
            <h3>{{hero.Hero}}</h3>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Heroes',
        props: {
            heroes: Array,
        },
    }
</script>