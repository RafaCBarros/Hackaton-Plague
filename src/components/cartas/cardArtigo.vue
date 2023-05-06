<template>
  <q-card
    class="col-6 q-py-lg q-pl-md"
    style="max-height: 20vh; overflow: hidden"
  >
    <h4 class="q-my-none" vertical-top>Título Artigo</h4>
    <q-separator />
    <p class="text-subtitle2 q-my-none">Subtitulo do artigo muahahahaha</p>
    <!--
      <router-link
      class="fit row justify-center text-white text-center"
        style="text-decoration: none"
        :to="{
          name: 'submenu',
          params: { prm_artigoId: artigo.id, prm_artigoTitle: artigo.title },
        }"
      >
      <q-icon size="xl" class="q-mt-md" :class="artigo.banner" />
      <h6 class="q-pa-sm absolute-bottom">{{ artigo.title }}</h6>
      </router-link>
    -->
  </q-card>
</template>

<script>
export default {
  name: "CartaArtigo",
};
</script>
