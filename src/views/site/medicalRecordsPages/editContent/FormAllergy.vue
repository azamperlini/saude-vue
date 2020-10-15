<template>
    <form class="form-content">
        <div class="inputsBox">
            <div class="inputBoxCol3">
                <label>Possui Alergia a Alimentos?</label><br>
                <input
                    class="inputCheck inputCheck2"
                    type="checkBox"
                >
                <label class="labelCheck">SIM</label>
                <input
                    class="inputCheck inputCheck2"
                    type="checkBox"
                >
                <label class="labelCheck">NÃO</label>
            </div>
            <div class="inputBoxCol2">
                <label>Quais?</label><br>
                <v-select taggable multiple
                    placeholder="Digite o alimento e tecle Enter"
                />
            </div>
        </div>
        <div class="inputsBox">
            <div class="inputBoxCol3">
                <label>Possui Alergia a Medicamentos?</label><br>
                <input
                    class="inputCheck inputCheck2"
                    type="checkBox"
                >
                <label class="labelCheck">SIM</label>
                <input
                    class="inputCheck inputCheck2"
                    type="checkBox"
                >
                <label class="labelCheck">NÃO</label>
            </div>
            <div class="inputBoxCol2">
                <label>Quais?</label><br>
                <v-select taggable multiple
                    placeholder="Digite o medicamento e tecle Enter"
                />
            </div>
        </div>
        <div class="inputsBox">
            <div class="inputBoxCol3">
                <label>Possui Alergia a Picadas de Insetos?</label><br>
                <input
                    class="inputCheck inputCheck2"
                    type="checkBox"
                >
                <label class="labelCheck">SIM</label>
                <input
                    class="inputCheck inputCheck2"
                    type="checkBox"
                >
                <label class="labelCheck">NÃO</label>
            </div>
        </div>
        <div class="boxBtn">
            <button class="btn buttonSalve">Salvar</button>
            <button class="btn buttonEdit">Editar</button>
        </div>
    </form>
</template>

<script>

import Vue from 'vue';
import vSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';

Vue.component('v-select', vSelect);

export default {
  name: 'FormAllergy',
};
</script>

<style scoped>

.vs__dropdown-toggle {
    border: none;
}

.v-select {
  width: 100%;
  border-top: none;
  border-left: none;
  border-right: var(--padraobordacinza-border-right);
  border-bottom: var(--padraobordacinza-border-bottom);
  border-radius: var(--padraoborda-border-radius);
  font-size: 1.1em;
}

.v-select:focus {
  outline: none;
}

</style>
