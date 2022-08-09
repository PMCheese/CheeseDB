<template>
    <div class="heroclass">
        <p>{{ skillenhance }}</p>
    </div>
</template>

<script>
export default {
    name: "Skillenhancements",
    props: ["skillenhance"]
};
</script>

<style>
.heroclass {
  padding: 1rem;
  border: 1px dotted #ccc;
  margin: 1rem 0;
}
</style>