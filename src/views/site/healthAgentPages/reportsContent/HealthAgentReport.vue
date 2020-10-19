<template>
  <section class="content-forms">
    <div class="inputBoxSearch">
      <div class="search">
        <img  alt="Ícone Localizador" src="@/assets/search_image.png">
          <input
            class="inputSearch"
            type="search"
            placeholder=" Matrícula / CPF"
          >
      </div>
    </div>
    <div class="contentHealthAgentReport">
      <h2>ALEXANDRE ZAMPERLINI</h2>
      <table>
        <tr>
          <td class="tdLeft2">CPF:</td>
          <td class="tdRigth2">168.683.628-70</td>
          <td class="tdLeft2">Perfil:</td>
          <td class="tdRigth2">SOCORRISTA</td>
        </tr>
        <tr>
          <td class="tdLeft2">Matrícula:</td>
          <td class="tdRigth2">20181044</td>
          <td class="tdLeft2">Período:</td>
          <td class="tdRigth2">6º PERÍODO</td>
        </tr>
        <tr>
          <td class="tdLeft2">CEP:</td>
          <td class="tdRigth2">89228-600</td>
          <td class="tdLeft2">Logradouro:</td>
          <td class="tdRigth2">RUA WALDEMIRO PAULO LOPES</td>
        </tr>
        <tr>
          <td class="tdLeft2">Número:</td>
          <td class="tdRigth2">725</td>
          <td class="tdLeft2">Complemento:</td>
          <td class="tdRigth2">CASA 2</td>
        </tr>
        <tr>
          <td class="tdLeft2">Estado:</td>
          <td class="tdRigth2">SANTA CATARINA</td>
          <td class="tdLeft2">Município:</td>
          <td class="tdRigth2">JOINVILLE</td>
        </tr>
        <tr>
          <td class="tdLeft2">Bairro:</td>
          <td class="tdRigth2">ESPINHEIROS</td>
          <td class="tdLeft2">Tel. Residencial:</td>
          <td class="tdRigth2">(47) XXXX-XXXX</td>
        </tr>
        <tr>
          <td class="tdLeft2">Celular:</td>
          <td class="tdRigth2">(11) 96540-7520</td>
          <td class="tdLeft2">WhatsApp:</td>
          <td class="tdRigth2">SIM</td>
        </tr>
        <tr>
          <td class="tdLeft2">E-mail:</td>
          <td class="tdRigth2" colspan="3">20181044@IELUSC.BR</td>
        </tr>
      </table>
      <AccordionHourReport />
      <AccordionOccurrencesReport />
    </div>
  </section>
</template>

<script>

import AccordionHourReport from './AccordionHourReport.vue';
import AccordionOccurrencesReport from './AccordionOccurrencesReport.vue';

export default {
  name: 'HealthAgentReport',
  components: {
    AccordionHourReport,
    AccordionOccurrencesReport,
  },
};
</script>

<style scoped>

.contentHealthAgentReport {
  width: 80%;
  margin: 0 auto;
  padding: 60px 0;
  text-align: center;
}

.tdLeft2 {
  width: 20%;
  padding: 6px 20px;
  font-size: 1em;
  border-left: 2px solid white;
}

.tdRigth2 {
  width: 30%;
  padding: 6px 20px;
  color: #6f6f6e;
  font-size: 0.9em;
}

</style>
