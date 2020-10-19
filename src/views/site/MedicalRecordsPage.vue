<template>
  <div>
    <Header />
    <main class="content">
      <div class="navMR">
        <div class="breadcrumb">
          <img  alt="Ícone Coração" src="../../assets/heart_blue.png">
          rotas
        </div>
        <div>
          <a href="#">
            <button
              class="btn-content" :class="{fixed: currentItemContent === 'edit'}"
              @click="redirectContent('edit')">Formulários
            </button>
          </a>
          <a href="#">
            <button
              class="btn-content" :class="{fixed: currentItemContent === 'view'}"
              @click="redirectContent('view')">Prontuário
            </button>
          </a>
        </div>
      </div>
        <MedicalRecordsEdit v-show="currentItemContent === 'edit'"/>
        <MedicalRecordsView v-show="currentItemContent === 'view'"/>
    </main>
    <Footer />
  </div>
</template>

<script>

import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import MedicalRecordsEdit from './medicalRecordsPages/editContent/MedicalRecordsEdit.vue';
import MedicalRecordsView from './medicalRecordsPages/viewContent/MedicalRecordsView.vue';

export default {
  name: 'Medical-records',
  data() {
    return {
      currentItemContent: 'edit',
    };
  },
  components: {
    Header,
    Footer,
    MedicalRecordsEdit,
    MedicalRecordsView,
  },
  methods: {
    redirectContent(item) {
      this.currentItemContent = item;
    },
  },
};
</script>

<style scoped>

.content {
  padding: 20px 20px 0 20px;
}
.navMR {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  margin: 10px 60px;
}

.navMR p {
  text-align: center;
}

.btn-content {
  margin: 0 0 0 30px;
  padding: 3px;
  width: 140px;
  border: 1px solid #6f6f6e;
  border-radius: var(--padraoborda-border-radius);
  text-align: center;
  font-size: 0.9em;
  color: var(--txtblack70-color);
  background-color: white;
}

.btn-content:hover {
  background-color: var(--black20-background-color);
  color: black;
  font-weight: bold;
}

.btn-content.fixed {
  outline: none;
  font-weight: bold;
  color: white;
  background-color: var(--azul-background-color);
  border-right: var(--padraobordaazul-border-right);
  border-bottom: var(--padraobordaazul-border-bottom);
}

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

</style>
