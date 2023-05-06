<template>
  <!-- Criado por Quasar/Padrão
    Criação 06/05/2023, por Rafael Luís
  -->
  <q-layout view="hhh lpR fFf">
    <q-header elevated class="bg-blue-3 text-black">
      <q-toolbar>
        <q-toolbar-title class="row q-mt-sm q-gutter-x-lg">
          <img
            src="@/assets/governoPara.png"
            style="max-height: 5vh; width: auto"
          />
          <p>Combate e Prevenção - Criptococose</p>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <LayoutFooter />
  </q-layout>
</template>

<script>
// componentes de layout para navegação
// import Header from '@/layout/cpnav_Header.vue'
import LayoutFooter from "@/layout/Footer.vue";

export default {
  name: "LayoutNavigation",
  components: { LayoutFooter },
};
</script>
