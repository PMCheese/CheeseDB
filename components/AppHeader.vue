<template>
    <header class = "header">
        <h1 class = "title">CheeseDB</h1>
        <ul>
            <l1>
                <nuxt-link to="/">Home</nuxt-link>
            </l1>
        </ul>
    </header>
</template>

<script>
export default {
    name: 'AppHeader'
}
</script>

<style>

    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
        padding-bottom: 1rem;
        border-bottom: 1px dotted #ccc;
    }

    .header .title {
        font-size: 3rem;
        color:black;
    }

    .header ul {
        display: flex;
    }

    .header a {
        display: inline-block;
        background:black;
        color:blanchedalmond;
        padding: 0.3rem 1rem;
        margin-right: 0.5rem;
    }

</style>