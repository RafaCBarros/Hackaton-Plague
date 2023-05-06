<template>
  <q-splitter class="q-py-lg fit" v-model="splitterModel" style="height: 250px">
    <template v-slot:before>
      <q-tabs v-model="aba" vertical>
        <q-tab name="form" label="Testes de Sintomas" />
        <q-tab name="alert" label="Denunciar" />
      </q-tabs>
    </template>

    <template v-slot:after>
      <q-tab-panels
        v-model="aba"
        swipeable
        vertical
        transition-prev="jump-up"
        transition-next="jump-up"
      >
        <q-tab-panel name="form">
          <div class="text-h4 q-mb-md">Teste de Sintomas</div>
          <div class="row">
            <q-option-group
              class="col-6"
              v-model="group"
              :options="sintomas"
              color="green"
              type="checkbox"
            />
            <div class="column">
              <q-btn label="testar" @click="verificarSintomas()" />
              <p class="q-ma-md">
                {{
                  diagnostico
                    ? "Sintomas não condizem com doença"
                    : "Procure o médico mais proximo"
                }}
              </p>
            </div>
          </div>
        </q-tab-panel>
        <q-tab-panel name="alert">
          <div class="column justify-evenly">
            <q-btn
              class="self-center q-mb-lg"
              style="width: fit-content"
              label="Guia de Prevenção e Sintomas"
            />
            <div class="row justify-evenly">
              <q-btn label="Denunciar estabelecimento" />
              <q-btn label="Reportar sintomas" />
            </div>
          </div>
        </q-tab-panel>
      </q-tab-panels>
    </template>
  </q-splitter>
</template>

<script>
import { ref } from "vue";

export default {
  name: "ItemCidadao",
  setup() {
    const aba = ref("");

    return {
      splitterModel: ref(20),
      aba,
    };
  },
  data() {
    const sintomas = [
      {
        label: "Tosse",
        value: "op1",
      },
      {
        label: "Fadiga",
        value: "op2",
      },
      {
        label: "Coriza",
        value: "op3",
      },
      {
        label: "Bolhas com pus na pele",
        value: "op4",
      },
      {
        label: "Visão Turva",
        value: "op5",
      },
      {
        label: "Agitação Psicomotora",
        value: "op6",
      },
      {
        label: "Confusão Mental",
        value: "op7",
      },
      {
        label: "Rigidez na Nuca",
        value: "op8",
      },
      {
        label: "Febre",
        value: "op9",
      },
      {
        label: "Tosse com sangue",
        value: "op10",
      },
    ];
    let group = ref([]);
    let diagnostico = ref(true);
    function verificarSintomas() {
      if (!group.value.includes("op9") && !group.value.includes("op10")) {
        console.log(group.value);
        if (group.value.length >= 4) {
          console.log("Diagnostico");
          diagnostico = ref(false);
        } else {
          diagnostico = ref(true);
        }
      } else {
        diagnostico = ref(true);
      }
      console.log(diagnostico);
    }

    return {
      group,
      sintomas,
      diagnostico,
      verificarSintomas,
    };
  },
};
</script>
