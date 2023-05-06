<template>
  <div id="dashboard">
    <!-- Classe para garantir alinhamento

      Uso de h1 para título de página e h2 para subtítulo,
          garantindo formatação padrão através do projeto
      
      Q-card para garantia de uma div para diminuir o uso de CSS específico
      -->
    <ItemCidadao />
  </div>
</template>

<script>
// @ is an alias to /src
import ItemCidadao from "@/components/itemCidadao.vue";

export default {
  name: "CidadaoView",
  components: {
    ItemCidadao,
  },
};
</script>
