<template>
  <section class="content-forms">
    <div class="content-numberMR">
      <h2 class="numberMR">Prontuário nº: 2020</h2>
    </div>
    <article class="content-article">
      <div class="title-article">
        <a href="#">
          <button
            class="btn-tab" :class="{fixed: currentItem === 'personalData'}"
            @click.prevent="redirectTab('personalData')">
            DADOS PESSOAIS
          </button>
        </a>
        <a href="#">
          <button
            class="btn-tab" :class="{fixed: currentItem === 'address'}"
            @click.prevent="redirectTab('address')">
            ENDEREÇO
          </button>
        </a>
        <a href="#">
          <button
            class="btn-tab" :class="{fixed: currentItem === 'contact'}"
            @click.prevent="redirectTab('contact')">
            CONTATOS
          </button>
        </a>
        <a href="#">
          <button
            class="btn-tab" :class="{fixed: currentItem === 'blood'}"
            @click.prevent="redirectTab('blood')">
            INFORMAÇÕES SANGUINEAS
          </button>
        </a>
        <a href="#">
          <button
            class="btn-tab" :class="{fixed: currentItem === 'allergy'}"
            @click.prevent="redirectTab('allergy')">
            ALERGIAS
          </button>
        </a>
        <a href="#">
          <button
            class="btn-tab" :class="{fixed: currentItem === 'medicine'}"
            @click.prevent="redirectTab('medicine')">
            MEDICAMENTOS DE USO CONTÍNUO
          </button>
        </a>
      </div>
      <div class="form-body">
        <FormPersonalData v-show="currentItem === 'personalData'" />
        <FormAddress v-show="currentItem === 'address'" />
        <FormContact v-show="currentItem === 'contact'" />
        <FormBlood v-show="currentItem === 'blood'" />
        <FormAllergy v-show="currentItem === 'allergy'" />
        <FormMedicineContinuours v-show="currentItem === 'medicine'" />
      </div>
    </article>
  </section>
</template>

<script>

import FormPersonalData from './FormPersonalData.vue';
import FormAddress from './FormAddress.vue';
import FormContact from './FormContact.vue';
import FormBlood from './FormBlood.vue';
import FormAllergy from './FormAllergy.vue';
import FormMedicineContinuours from './FormMedicineContinuours.vue';

export default {
  name: 'MedicalRecordsEdit',
  data() {
    return {
      currentItem: 'personalData',
    };
  },
  components: {
    FormPersonalData,
    FormAddress,
    FormContact,
    FormBlood,
    FormAllergy,
    FormMedicineContinuours,
  },
  methods: {
    redirectTab(item) {
      this.currentItem = item;
    },
  },
};
</script>

<style>

.content-forms {
  display: grid;
  grid-template-rows: auto;
  margin: 0 auto;
  width: 100%;
  background-color: white;
  padding: var(--padrao-padding);
}

.numberMR {
  float: right;
  width: 220px;
  padding: 6px;
  background-color: white;
  border-right: var(--padraobordaazul-border-right);
  border-bottom: var(--padraobordaazul-border-bottom);
  border-radius: 0 0 20px 0;
  font-size: 1.2em;
  font-weight: normal;
  text-align: center;
}

.content-article {
  width: 100%;
}

.title-article {
  margin-top: 30px;
  background-color: var(--black20-background-color);
  border-radius: 0 20px 0 0;
  text-align: left;
}

.btn-tab {
  cursor: pointer;
  padding: 15px 30px 10px 30px;
  background-color: var(--black20-background-color);
  border-top: none;
  border-left: none;
  border-right: var(--padraobordacinza-border-right);
  border-bottom: none;
  border-radius: 0 20px 0 0;
  font-size: 0.9em;
  font-weight: normal;
}

.btn-tab:focus {
  outline: none;
}

.btn-tab:hover {
  background-color: var(--black40-background-color);
  color: black;
  font-weight: bold;
}

.btn-tab.fixed {
  font-weight: bold;
  color: white;
  background-color: var(--azul-background-color);
  border-right: var(--padraobordaazul-border-right);
  border-bottom: var(--padraobordaazul-border-bottom);
}

.form-body   {
  margin: 0;
  padding: 60px;
  border: 2px solid#d9d9d9;
}

.form-content {
  height: auto;
}

label {
  font-size: 1.1em;
  color: var(--txtAzul-color);
}

.label2 {
  margin-right: 5%;
}

.labelCheck {
  margin-right: 10%;
  color: black;
}

.inputsBox {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.inputBoxCol1 {
  width: 100%;
  margin: 2%;
}

.inputBoxCol2 {
  width: 63%;
  margin: 2%;
}

.inputBoxCol3 {
  width: 29%;
  margin: 2%;
}

.inputBoxCol4 {
  width: 21%;
  margin: 2%;
}

.inputPadrao, select {
  width: 100%;
  border-top: none;
  border-left: none;
  border-right: var(--padraobordacinza-border-right);
  border-bottom: var(--padraobordacinza-border-bottom);
  border-radius: var(--padraoborda-border-radius);
  font-size: 1.1em;
}

.inputCheck {
  margin: 10% 5% 5% 0;
}

.inputCheck2 {
  margin: 2% 3% 2% 0;
}

select {
  width: 101%;
}

select:focus {
  outline: none;
}

.boxBtn{
  margin-top: 20px;
  text-align: right;
}

.btn {
  width: 150px;
  margin: 0 10px;
  border: none;
  border-radius: 15px;
  padding: 6px;
  font-size: 1em;
  color: black;
}

.buttonEdit {
  background-color: var(--black20-background-color);
}

.buttonEdit:hover {
  background-color: var(--black40-background-color);
}

.buttonSalve {
  background-color: var(--verde-backgruond-color);
}

.buttonSalve:hover {
  background-color: #78a115;
}

</style>
