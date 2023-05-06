<template>
  <div id="dashboard">
    <!-- Classe para garantir alinhamento

      Uso de h1 para título de página e h2 para subtítulo,
          garantindo formatação padrão através do projeto
      
      Q-card para garantia de uma div para diminuir o uso de CSS específico
      -->
    <h4 class="q-ma-lg">Combate e Prevenção</h4>
    <div class="row justify-between q-ma-lg">
      <CartaMapa />
      <div class="column q-gutter-y-xl q-mr-xl">
        <CartaCidadao />
        <CartaBlog />
        <CartaSecretaria />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CartaMapa from "@/components/cartas/cardMapa.vue";
import CartaCidadao from "@/components/cartas/cardCidadao.vue";
import CartaBlog from "@/components/cartas/cardBlog.vue";
import CartaSecretaria from "@/components/cartas/cardSecretaria.vue";

export default {
  name: "HomeView",
  components: {
    CartaMapa,
    CartaCidadao,
    CartaBlog,
    CartaSecretaria,
  },
};
</script>
