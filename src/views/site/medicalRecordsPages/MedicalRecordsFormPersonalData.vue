<template>
  <div>
    <Header />
    <main class="content">
      <div class="navMR">
        <div class="breadcrumb">
          <img  alt="Ícone Coração" src="../../../assets/heart_blue.png">
          rotas
        </div>
        <ul>
          <router-link to="/agenda"><li>Agendamento</li></router-link>
          <router-link to="/medical-records/edit" class="routerFixed"><li>Editar</li></router-link>
          <router-link to="/view-records"><li>Visualizar</li></router-link>
        </ul>
      </div>
      <section class="content-forms">
        <div class="content-numberMR">
          <h2 class="numberMR">Prontuário nº: 2020</h2>
        </div>
          <article class="content-article">
            <div class="title-article">
              <router-link to="/medical-records/edit">
                <button class="btn-tab fixed">DADOS PESSOAIS</button>
              </router-link>
              <router-link to="/medical-records/edit/address">
                <button class="btn-tab">ENDEREÇO</button>
              </router-link>
              <router-link to="/medical-records/edit/contact">
                <button class="btn-tab">CONTATOS</button>
              </router-link>
              <router-link to="/medical-records/edit/blood">
                <button class="btn-tab">INFORMAÇÕES SANGUINEAS</button>
              </router-link>
              <router-link to="/medical-records/edit/allergy">
                <button class="btn-tab">ALERGIAS</button>
              </router-link>
              <router-link to="/medical-records/edit/medicineContinuours">
                <button class="btn-tab">MEDICAMENTOS DE USO CONTÍNUO</button>
              </router-link>
            </div>
            <div class="form-body">
              <form class="form-content">
                <div class="inputsBox">
                  <div class="inputBoxCol3">
                    <label>CPF:</label><br>
                    <input
                      class="inputPadrao"
                      type="text"
                      required="" oninvalid="setCustomValidity('Campo Obrigatório')"
                      oninput="setCustomValidity('')"
                    >
                  </div>
                  <div class="inputBoxCol3">
                    <label>Matrícula:</label><br>
                    <input
                      class="inputPadrao"
                      type="text"
                      required="" oninvalid="setCustomValidity('Campo Obrigatório')"
                      oninput="setCustomValidity('')"
                    >
                  </div>
                  <div class="inputBoxCol3">
                    <label>Data de Nascimento:</label><br>
                    <input
                      class="inputPadrao"
                      type="text"
                      required="" oninvalid="setCustomValidity('Campo Obrigatório')"
                      oninput="setCustomValidity('')"
                    >
                  </div>
                </div>
                <div class="inputsBox">
                  <div class="inputBoxCol2">
                    <label>Nome:</label><br>
                    <input
                      class="inputPadrao"
                      type="text"
                      required="" oninvalid="setCustomValidity('Campo Obrigatório')"
                      oninput="setCustomValidity('')"
                    >
                  </div>
                  <div class="inputBoxCol3">
                    <label>Sexo:</label><br>
                    <select>
                      <option>MASCULINO</option>
                      <option>FEMININO</option>
                    </select>
                  </div>
                </div>
                <div class="inputsBox">
                  <div class="inputBoxCol3">
                    <label>Nacionalidade:</label><br>
                    <select>
                      <option>BRASILEIRO</option>
                      <option>ESTRANGEIRO</option>
                      <option>NATURALIZADO</option>
                    </select>
                  </div>
                  <div class="inputBoxCol3">
                    <label>Municipio de Nascimento:</label><br>
                    <input
                      class="inputPadrao"
                      type="text"
                      required="" oninvalid="setCustomValidity('Campo Obrigatório')"
                      oninput="setCustomValidity('')"
                    >
                  </div>
                  <div class="inputBoxCol3">
                    <label>Estado Civil:</label><br>
                    <select>
                      <option>SOLTEIRO</option>
                      <option>CASADO</option>
                      <option>UNIÃO ESTÁVEL</option>
                    </select>
                  </div>
                </div>
                <div class="inputsBox">
                  <div class="inputBoxCol2">
                    <label>Nome Social:</label><br>
                    <input
                      class="inputPadrao"
                      type="text"
                    >
                  </div>
                  <div class="inputBoxCol3">
                    <label>Identidade de Gênero:</label><br>
                    <input
                      class="inputPadrao"
                      type="text"
                    >
                  </div>
                </div>
                <div class="inputsBox">
                  <div class="inputBoxCol2">
                    <label>Nome da Mãe:</label><br>
                    <input
                      class="inputPadrao"
                      type="text"
                    >
                  </div>
                  <div class="inputBoxCol3">
                    <input
                      class="inputCheck"
                      type="checkBox"
                    >
                    <label>Desconhecida</label>
                  </div>
                </div>
                <div class="inputsBox">
                  <div class="inputBoxCol2">
                    <label>Nome do Pai:</label><br>
                    <input
                      class="inputPadrao"
                      type="text"
                    >
                  </div>
                  <div class="inputBoxCol3">
                    <input
                      class="inputCheck"
                      type="checkBox"
                    >
                    <label>Desconhecida</label>
                  </div>
                </div>
                <div class="boxBtn">
                  <button class="btn buttonSalve">Salvar</button>
                  <button class="btn buttonEdit">Editar</button>
                </div>
              </form>
            </div>
          </article>
      </section>
    </main>
    <Footer />
  </div>
</template>

<script>

import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Medical-records',
  components: {
    Header,
    Footer,
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
  padding: 5px;
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

.fixed {
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
