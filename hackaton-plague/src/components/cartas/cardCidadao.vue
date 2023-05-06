<template>
  <q-card class="col-5" style="max-height: 20vh">
    <router-link
      class="fit row justify-center text-black text-center"
      style="text-decoration: none"
      :to="{ name: 'AreaCidadao' }"
    >
      <h4>Área do Cidadão</h4>
    </router-link>
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
  name: "CartaCidadao",
};
</script>
