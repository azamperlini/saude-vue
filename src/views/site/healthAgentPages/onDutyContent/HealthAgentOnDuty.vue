<template>
  <section class="content-forms">
    <div class="inputBoxSearch">
      <div class="search">
        <img  alt="Ícone Localizador" src="@/assets/search_image.png">
          <input
            class="inputSearch"
            type="search"
            placeholder=" Matrícula Usuário"
          >
      </div>
    </div>
    <article class="content-article">
      <div class="title-article">
        <a href="#">
          <button
            class="btn-tab" :class="{fixed: currentItem === 'editOnDuty'}"
            @click.prevent="redirectTab('editOnDuty')">
            ABERTURA DE PLANTÃO
          </button>
        </a>
        <a href="#">
          <button
            class="btn-tab" :class="{fixed: currentItem === 'editOccurrences'}"
            @click.prevent="redirectTab('editOccurrences')">
            REGISTRO DE OCORRÊNCIAS
          </button>
        </a>
      </div>
      <div class="form-body">
        <FormEditOnDuty v-show="currentItem === 'editOnDuty'" />
        <FormEditOccurrences v-show="currentItem === 'editOccurrences'" />
      </div>
    </article>
    <article class="content-article2">
      <MedicalRecordsView />
    </article>
  </section>
</template>

<script>
import FormEditOnDuty from './FormEditOnDuty.vue';
import FormEditOccurrences from './FormEditOccurrences.vue';
import MedicalRecordsView from '../../medicalRecordsPages/viewContent/MedicalRecordsView.vue';

export default {
  name: 'HealthAgentOnDuty',
  data() {
    return {
      currentItem: 'editOnDuty',
    };
  },
  components: {
    FormEditOnDuty,
    FormEditOccurrences,
    MedicalRecordsView,
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

.inputBoxSearch {
  width: 100%;
}

.search {
  float: right;
  width: 200px;
  border-bottom: var(--padraobordaazul-border-bottom);
  border-right: var(--padraobordaazul-border-right);
  border-radius: var(--padraoborda-border-radius);
}

.search img {
  margin: 0 3%;
}

.inputSearch{
  width: 75%;
  border: none;
  font-size: 1em;
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
  width: 200px;
  margin: 0 10px;
  border: none;
  border-radius: 10px;
  padding: 8px;
  font-size: 1.1em;
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
