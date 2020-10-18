<template>
  <form class="contentArticle">
    <div class="contentBrandProfile">
      <div class="brandProfile">
        <img class="brand" alt="Logo Saúde em Foco" src="@/assets/brand_SF_white.png">
        <img class="profile" alt="Imagem Perfil" src="@/assets/profilePerfil/profile-01.jpg">
      </div>
    </div>
    <div class="contentMedicalRecordsView">
      <h2>ALEXANDRE ZAMPERLINI</h2>
      <table>
        <tr>
          <td class="tdLeft">Data de Nascimento:</td>
          <td class="tdRigth">23/07/1973</td>
        </tr>
        <tr>
          <td class="tdLeft">Tipo Sanguíneo:</td>
          <td class="tdRigth">O POSITIVO</td>
        </tr>
        <tr>
          <td class="tdLeft">Peso (Kg):</td>
          <td class="tdRigth">89</td>
        </tr>
        <tr>
          <td class="tdLeft">Altura (M):</td>
          <td class="tdRigth">1.73</td>
        </tr>
        <tr>
          <td class="tdLeft">IMC:</td>
          <td class="tdRigth">29.7</td>
        </tr>
        <tr>
          <td class="tdLeft">Matrícula:</td>
          <td class="tdRigth">20181044</td>
        </tr>
      </table>
      <AccordionGeneralData />
      <AccordionAllergy />
      <AccordionMedicineContinuours />
      <AccordionAddressContact />
    </div>
  </form>
</template>

<script>

import AccordionGeneralData from './AccordionGeneralData.vue';
import AccordionAllergy from './AccordionAllergy.vue';
import AccordionMedicineContinuours from './AccordionMedicineContinuours.vue';
import AccordionAddressContact from './AccordionAddressContact.vue';

export default {
  name: 'MedicalRecordsView',
  components: {
    AccordionGeneralData,
    AccordionAllergy,
    AccordionMedicineContinuours,
    AccordionAddressContact,
  },
};
</script>

<style>

.contentArticle {
  margin: 0 auto;
  margin-top: 30px;
  margin-bottom: 60px;
  width: 60%;
  border: 2px solid #92cd01;
  background-color: white;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2);
}

.contentBrandProfile {
  height: 410px;
}

.brandProfile {
  background-color: var(--verde-backgruond-color);
  height: 198px;
  padding: 40px;
  text-align: center;
}

.brand {
  float: left;
  margin: 0;
}

.profile {
  position: relative;
  top: 100px;
  left: -40px;
  border: 2px solid #6f6f6e;
  border-radius: 50%;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.4);
}

.contentMedicalRecordsView {
  padding: 10px 60px 60px 60px;
  text-align: center;
}

.contentMedicalRecordsView h2 {
  margin-bottom: 40px;
}

table {
  width: 100%;
  margin: 0 auto;
  margin-bottom: 40px;
  padding: 0;
  border-spacing: 0;
  text-align: left;
}

tr {
  width: 100%;
}

tr:nth-child(even) {
  background-color: var(--black20-background-color);
}

.tdLeft {
  width: 55%;
  padding: 6px 20px;
  font-size: 1em;
}

.tdRigth {
  width: 45%;
  padding: 6px 20px;
  color: #6f6f6e;
  font-size: 0.9em;
}

.buttonPDF {
  width: 200px;
  margin: 60px 0 60px 60px;
  float: right;
  border: none;
  border-radius: 10px;
  padding: 8px;
  font-size: 1.1em;
  color: black;
  background-color: var(--verde-backgruond-color);
}

.buttonPDF:hover {
  background-color: #78a115;
}

</style>
