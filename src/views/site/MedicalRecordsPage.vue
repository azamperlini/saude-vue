<template>
  <div>
    <Header />
    <main class="content">
      <div class="navMR">
        <div class="breadcrumb">
          <img  alt="Ícone Coração" src="../../assets/heart_blue.png">
          rotas
        </div>
        <ul>
          <router-link to="/agenda"><li>Agendamento</li></router-link>
          <router-link to="/medical-records"><li>Editar</li></router-link>
          <router-link to="/view-records"><li>Visualizar</li></router-link>
        </ul>
      </div>
      <section class="content-forms">
        <div class="content-numberMR">
          <h2 class="numberMR">Prontuário nº: 2020</h2>
        </div>
        <FormPersonalData />
        <FormAddress />
        <FormContact />
        <FormBlood />
        <FormAllergy />
        <FormMedContin />
      </section>
    </main>
    <Footer />
  </div>
</template>

<script>

import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import FormPersonalData from '@/components/accordionMedicalRecords/AccordionPersonalData.vue';
import FormAddress from '@/components/accordionMedicalRecords/AccordionAddress.vue';
import FormContact from '@/components/accordionMedicalRecords/AccordionContact.vue';
import FormBlood from '@/components/accordionMedicalRecords/AccordionBlood.vue';
import FormAllergy from '@/components/accordionMedicalRecords/AccordionAllergy.vue';
import FormMedContin from '@/components/accordionMedicalRecords/AccordionMedicineForContinu.vue';

export default {
  name: 'Medical-records-modelo',
  components: {
    Header,
    Footer,
    FormPersonalData,
    FormAddress,
    FormContact,
    FormBlood,
    FormAllergy,
    FormMedContin,
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
  margin: 10px 40px 10px 50px;
}

.navMR p {
  text-align: center;
}

.navMR ul li {
  display: inline-block;
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

.nav ul li:hover {
  background-color: var(--black20-background-color);
  color: black;
  font-weight: bold;
}

.navMR .router-link-exact-active li {
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
