<template>
  <q-card class="col-5 q-pl-md" style="max-height: 20vh">
    <router-link
      class="fit row justify-center text-black text-center"
      style="text-decoration: none"
      :to="{ name: 'BlogFatos' }"
    >
      <h4>Fato ou Fake</h4>
    </router-link>
  </q-card>
</template>

<script>
export default {
  name: "CartaBlog",
};
</script>
