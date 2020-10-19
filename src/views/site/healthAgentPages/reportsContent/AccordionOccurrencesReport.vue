<template>
    <div class="content-accordion" :class="accordionClasses">
        <div class="title-accordion" @click="toggleAccordion">
          <h3>RELATÓRIO DE OCORRÊNCIAS</h3>
        </div>
        <div class="table-body">
          <div class="content-table">
           <table>
              <tr>
                <td class="tdLeft2">Matrícula do Usuário:</td>
                <td class="tdRigth2">20181044</td>
                <td class="tdLeft2">Data:</td>
                <td class="tdRigth2">23/07/2020</td>
              </tr>
              <tr>
                <td class="tdLeft2">Horária de Abertura:</td>
                <td class="tdRigth2">20:15</td>
                <td class="tdLeft2">Horário de Fechamento:</td>
                <td class="tdRigth2">20:40</td>
              </tr>
              <tr>
                <td class="tdLeft2">Descrição da Ocorrência:</td>
                <td class="tdRigth2" colspan="3">Typesetting industry. Lorem Ipsum has been the
                industry’s standard dummy text ever since the 1500s, when an unknown printer took
                a galley.stry’s standard dummy text ever since the 1500s, when an unknown stry’s
                standard dummy text ever since the 1500s, when an unknown</td>
              </tr>
            </table>
          </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'AccordionOccurrencesReport',
  data() {
    return {
      isOpen: true,
    };
  },
  methods: {
    toggleAccordion() {
      this.isOpen = !this.isOpen;
    },
  },
  computed: {
    accordionClasses() {
      return {
        'is-closed': this.isOpen,
        'is-primary': !this.isOpen,
        'is-dark': this.isOpen,
      };
    },
  },
};
</script>

<style scoped>

.content-accordion {
  width: 100%;
  margin: 20px 0 0 0;
}

.title-accordion {
  cursor: pointer;
  background-color: var(--black20-background-color);
  border-radius: 30px 30px 0 0;
  text-align: center;
}

.title-accordion h3 {
  padding: 10px;
  font-size: 1.1em;
  font-weight: normal;
}

.table-body   {
  margin: 0;
  margin-top: -16px;
  padding: 0;
  overflow: hidden;
  transition: 0.3s ease all;
  border-bottom: 1px solid#d9d9d9;
  border-left: 1px solid#d9d9d9;
  border-right: 1px solid#d9d9d9;
}

.is-primary .table-body {
  position: relative;
}

.is-closed .table-body {
  position: relative;
  top: -17px;
  max-height: 0;
  border: none;
}

.content-table {
  padding: 30px;
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
