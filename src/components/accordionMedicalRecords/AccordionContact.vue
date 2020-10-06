<template>
  <article>
    <div class="content-article" :class="accordionClasses">
        <div class="title-article" @click="toggleAccordion">
        <h2>Contatos</h2>
        </div>
        <div class="form-body">
          <form class="form-content">
            <div class="inputsBox">
              <div class="inputBoxCol3">
                <label>Telefone Residencial:</label><br>
                <input
                  class="inputPadrao"
                  type="text"
                  required="" oninvalid="setCustomValidity('Campo Obrigatório')"
                  oninput="setCustomValidity('')"
                >
              </div>
              <div class="inputBoxCol3">
                <label>Celular:</label><br>
                <input
                  class="inputPadrao"
                  type="text"
                  required="" oninvalid="setCustomValidity('Campo Obrigatório')"
                  oninput="setCustomValidity('')"
                >
              </div>
              <div class="inputBoxCol3">
                 <input
                  class="inputCheck"
                  type="checkBox"
                >
                <label>WhatsApp</label>
              </div>
            </div>
            <div class="inputsBox">
              <div class="inputBoxCol3">
                <label>Telefone Emergencial:</label><br>
                <input
                  class="inputPadrao"
                  type="text"
                  required="" oninvalid="setCustomValidity('Campo Obrigatório')"
                  oninput="setCustomValidity('')"
                >
              </div>
              <div class="inputBoxCol3">
                <label>Nome Contato:</label><br>
                <input
                  class="inputPadrao"
                  type="text"
                  required="" oninvalid="setCustomValidity('Campo Obrigatório')"
                  oninput="setCustomValidity('')"
                >
              </div>
              <div class="inputBoxCol3">
                <label>Identificação:</label><br>
                <input
                  class="inputPadrao"
                  type="text"
                  required="" oninvalid="setCustomValidity('Campo Obrigatório')"
                  oninput="setCustomValidity('')"
                >
              </div>
            </div>
            <div class="inputsBox">
              <div class="inputBoxCol3">
                <label>Telefone Emergencial:</label><br>
                <input
                  class="inputPadrao"
                  type="text"
                  required="" oninvalid="setCustomValidity('Campo Obrigatório')"
                  oninput="setCustomValidity('')"
                >
              </div>
              <div class="inputBoxCol3">
                <label>Nome Contato:</label><br>
                <input
                  class="inputPadrao"
                  type="text"
                  required="" oninvalid="setCustomValidity('Campo Obrigatório')"
                  oninput="setCustomValidity('')"
                >
              </div>
              <div class="inputBoxCol3">
                <label>Identificação:</label><br>
                <input
                  class="inputPadrao"
                  type="text"
                  required="" oninvalid="setCustomValidity('Campo Obrigatório')"
                  oninput="setCustomValidity('')"
                >
              </div>
            </div>
            <div class="inputsBox">
              <div class="inputBoxCol3">
                <label>E-mail:</label><br>
                <input
                  class="inputPadrao"
                  type="email"
                  required="" oninvalid="setCustomValidity('Campo Obrigatório')"
                  oninput="setCustomValidity('')"
                >
              </div>
            </div>
            <button class="buttonSalve">Salvar</button>
            <button class="buttonEdit">Editar</button>
          </form>
        </div>
    </div>
  </article>
</template>

<script>

export default {
  name: 'FormContact',
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
        'is-closed': !this.isOpen,
        'is-primary': this.isOpen,
        'is-dark': !this.isOpen,
      };
    },
  },
};

</script>

<style scoped>

.content-article {
  width: 100%;
}

.title-article {
  cursor: pointer;
  background-color: var(--black20-background-color);
  border-radius: 30px 30px 0 0;
  text-align: center;
}

.title-article h2 {
  padding: 10px;
  font-size: 1.2em;
  font-weight: normal;
}

.form-body   {
  margin: 0;
  margin-top: -16px;
  padding: 0;
  overflow: hidden;
  transition: 0.3s ease all;
  border-bottom: 1px solid#d9d9d9;
  border-left: 1px solid#d9d9d9;
  border-right: 1px solid#d9d9d9;
}

.is-primary .form-body {
  position: relative;
}

.is-closed .form-body {
  position: relative;
  top: -17px;
  max-height: 0;
  border: none;
}

.form-content {
  padding: 60px;
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

.inputBoxCol3 {
  width: 29%;
  margin: 2%;
}

.inputBoxCol2 {
  width: 63%;
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

button {
  width: 200px;
  float: right;
  margin: 30px 10px 60px 10px;
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
