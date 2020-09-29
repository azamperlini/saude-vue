<template>
  <div class="container">
    <Header />
    <div class="container-content  bg-content">
      <h1>
        Você tem acesso a informativos e campanhas de prevenção a saúde printing and typesetting
        industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s,
        when an unknown printer galley printing and typesetting industry.
      </h1>
      <Carroussel />
      <section class="features">
        <h1>Conheça o Saúde em Foco</h1>
        <hr>
        <h2><b>
          Ajudamos você a se informar e cuidar bem da sua saúde.</b> Acesso fácil e rápido
          a seu histórico de saúde.
        </h2>
        <div class="cards">
          <div class="card  cardlightGreen">
            <img alt="Icone Informativos" src="@/assets/cardsfeatures/iconinformativos.png">
            <h3>INFORMATIVOS</h3>
            <p>
              Você tem acesso a informativos e campanhas de prevenção a saúde printing and
              typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever
              since the 1500s,when an unknown printer took a galley.stry’s standard dummy text ever
              since the.
            </p>
          </div>
          <div class="card">
            <img alt="Icone Informativos" src="@/assets/cardsfeatures/iconagendamentos.png">
            <h3>AGENDAMENTOS</h3>
            <p>
              Você tem acesso a informativos e campanhas de prevenção a saúde printing and
              typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever
              since the 1500s,when an unknown printer took a galley.stry’s standard dummy text ever
              since the.
            </p>
          </div>
          <div class="card">
            <img alt="Icone Informativos" src="@/assets/cardsfeatures/iconprontuarios.png">
            <h3>PRONTUÁRIOS</h3>
            <p>
              Você tem acesso a informativos e campanhas de prevenção a saúde printing and
              typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever
              since the 1500s,when an unknown printer took a galley.stry’s standard dummy text ever
              since the.
            </p>
          </div>
          <div class="card cardlightGreen">
            <img alt="Icone Informativos" src="@/assets/cardsfeatures/iconemergencia.png">
            <h3>EMERGÊNCIA</h3>
            <p>
              Você tem acesso a informativos e campanhas de prevenção a saúde printing and
              typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever
              since the 1500s,when an unknown printer took a galley.stry’s standard dummy text ever
              since the.
            </p>
          </div>
        </div>
      </section>
    </div>
    <Footer />
  </div>
</template>

<script>

import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import Carroussel from '../components/Carroussel.vue';

export default {
  name: 'Home',
  components: {
    Header,
    Footer,
    Carroussel,
  },
};
</script>

<style scoped>
h1 {
  font-weight: normal;
  color: var(--txtblack70-color);
  text-align: center;
  margin: 60px;
}

.features {
  padding: var(--padrao-padding);
}
.features h1 {
  margin: 0;
}

hr {
  width: 98%;
}

h2 {
  font-size: 1.6em;
  font-weight: normal;
  text-align: center;
  margin: 0;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 40px;
}
.card {
  background-color: #e3e3e2;
  width: 38.5%;
  margin: 10px;
  padding: var(--padrao-padding);
  text-align: center;
  box-shadow: -3px 3px 8px rgba(0, 0, 0, 0.5);
}

.cardlightGreen {
  background-color:  #e9f5cc;
}
.card img {
  border: 3px solid #083f54;
  border-radius: 50%;
}

h3 {
  color: var(--txtAzul-color)
}

</style>
