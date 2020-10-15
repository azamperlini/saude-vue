<template>
    <div class="content-accordion" :class="accordionClasses">
        <div class="title-accordion" @click="toggleAccordion">
          <h3>Endereço | Contatos</h3>
        </div>
        <div class="table-body">
          <div class="content-table">
            <table>
              <tr>
                <td class="tdLeft">CEP:</td>
                <td class="tdRigth">89228-600</td>
              </tr>
              <tr>
                <td class="tdLeft">Logradouro:</td>
                <td class="tdRigth">RUA WALDEMIRO PAULO LOPES</td>
              </tr>
              <tr>
                <td class="tdLeft">Número:</td>
                <td class="tdRigth">725</td>
              </tr>
              <tr>
                <td class="tdLeft">Complemento:</td>
                <td class="tdRigth">CASA 2</td>
              </tr>
              <tr>
                <td class="tdLeft">Estado:</td>
                <td class="tdRigth">SANTA CATARINA</td>
              </tr>
              <tr>
                <td class="tdLeft">Município:</td>
                <td class="tdRigth">JOINVILLE</td>
              </tr>
              <tr>
                <td class="tdLeft">Tel. Residencial:</td>
                <td class="tdRigth">-</td>
              </tr>
              <tr>
                <td class="tdLeft">Celular:</td>
                <td class="tdRigth">(11)96540-7520)</td>
              </tr>
              <tr>
                <td class="tdLeft">WhatsApp:</td>
                <td class="tdRigth">SIM</td>
              </tr>
              <tr>
                <td class="tdLeft">Contato de Emergência:</td>
                <td class="tdRigth">(XX)XXXXXX-XXXX</td>
              </tr>
              <tr>
                <td class="tdLeft">Identificação:</td>
                <td class="tdRigth">VERA - ESPOSA</td>
              </tr>
              <tr>
                <td class="tdLeft">Contato de Emergência:</td>
                <td class="tdRigth">(XX)XXXXXX-XXXX</td>
              </tr>
              <tr>
                <td class="tdLeft">Identificação:</td>
                <td class="tdRigth">EVELYN - FILHA</td>
              </tr>
              <tr>
                <td class="tdLeft">E-mail:</td>
                <td class="tdRigth">20181044@ielusc.br</td>
              </tr>
            </table>
          </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'AccordionAddressContact',
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
