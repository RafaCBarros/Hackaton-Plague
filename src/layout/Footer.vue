<template>
  <!-- 
  Criado 06/05/2023, por Rafael
  -->
  <q-footer bordered class="bg-dark inline text-white q-pa-none absolute">
    <q-toolbar style="min-height: fit-content">
      <q-toolbar-title class="text-subtitle1 text-weight-thin">
        Por Rafael Luís © 2023 Todos os direitos reservados
      </q-toolbar-title>

      <q-tabs dense indicator-color="transparent" class="text-subtitle2">
        <q-tab label="Versão" />
        <q-tab label="Contato" />
        <q-tab label="Sobre nós" />
      </q-tabs>
    </q-toolbar>
  </q-footer>
</template>

<script>
export default {
  name: "LayoutFooter",
};
</script>
