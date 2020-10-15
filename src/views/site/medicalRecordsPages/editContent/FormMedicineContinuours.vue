<template>
    <form class="form-content">
        <div class="inputsBox">
            <div class="inputBoxCol3">
                <label>Faz Uso de Medicamentos Contínuos?</label><br>
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
                <v-select
                    taggable multiple
                    placeholder="Digite o medicamento e tecle Enter"
                />
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
  name: 'Form-medicine-continuours',
};

</script>

<style scoped>

.vs__dropdown-toggle {
    border: none;
}

.v-select:focus {
  outline: none;
}

</style>
