<template>
    <div class="content-accordion" :class="accordionClasses">
        <div class="title-accordion" @click="toggleAccordion">
          <h3>Dados Gerais</h3>
        </div>
        <div class="table-body">
          <div class="content-table">
            <table>
              <tr>
                <td class="tdLeft">CPF:</td>
                <td class="tdRigth">168.683.628-70</td>
              </tr>
              <tr>
                <td class="tdLeft">Nacionalidade:</td>
                <td class="tdRigth">BRASILEIRO</td>
              </tr>
              <tr>
                <td class="tdLeft">Estado Civil:</td>
                <td class="tdRigth">CASADO</td>
              </tr>
              <tr>
                <td class="tdLeft">Nome da Mãe:</td>
                <td class="tdRigth">NEUZA MARQUES DA SILVA</td>
              </tr>
              <tr>
                <td class="tdLeft">Nome do Pai:</td>
                <td class="tdRigth">JOÃO ZAMPERLINI </td>
              </tr>
              <tr>
                <td class="tdLeft">Sexo:</td>
                <td class="tdRigth">MASCULINO</td>
              </tr>
              <tr>
                <td class="tdLeft">Município de Nascimento:</td>
                <td class="tdRigth">SÃO PAULO - SP</td>
              </tr>
              <tr>
                <td class="tdLeft">Identidade de Gênero:</td>
                <td class="tdRigth">-</td>
              </tr>
            </table>
          </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'AccordionGeneralData',
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

</style>
