<template>
<nuxt-link :to="'Heroes/' + id">
    <div class="heroclass">
      <p>{{ hero }}</p>
    </div>
</nuxt-link>
</template>

<script>
export default {
  name: "Hero",
  props: ["hero", "id"]
};
</script>

<style>
.heroclass {
  padding: 1rem;
  border: 1px dotted #ccc;
  margin: 1rem 0;
}
</style>