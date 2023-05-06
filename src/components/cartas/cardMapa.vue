<template>
  <q-card class="col-6" style="max-height: auto">
    <q-img
      src="@/assets/ParaBrasil.png"
      style="height: 100%; object-fit: contain"
    />
    <!--
      <router-link
      class="fit row justify-center text-white text-center"
        style="text-decoration: none"
        :to="{
          name: 'submenu',
          params: { prm_menuId: menu.id, prm_titulo_menu: menu.label },
        }"
      >
      <q-icon size="xl" class="q-mt-md" :class="menu.fonticon" />
      <h6 class="q-pa-sm absolute-bottom">{{ menu.label }}</h6>
      </router-link>
    -->
  </q-card>
</template>

<script>
export default {
  name: "CartaMapa",
};
</script>
