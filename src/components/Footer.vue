<template>
  <footer>
    <div class="footerlinks">
      <div class="content">
        <div class="partner">
          <p class="partnertxt"><b>Associação Luterana Bom Jesus Ielusc</b></p>
          <p class="partnertxt">Rua Princesa Isabel, 125 - Joinville - Santa Catarina</p>
          <a href="https://faculdade.ielusc.br/" target="blank">faculdade.ielusc.br</a><br><br>
          <p class="partnertxt">Siga o Ielusc nas redes sociais:</p>
          <div class="partnerlinks">
            <a href="https://www.facebook.com/faculdadeielusc/" target="blank"><img alt="Link Facebook" src="../assets/network_face.png"></a>
            <a href="https://twitter.com/bomjesusielusc" target="blank"><img alt="Link Twiteer" src="../assets/network_twi.png"></a>
            <a href="https://www.instagram.com/faculdadeielusc/" target="blank"><img alt="Link Intagram" src="../assets/network_insta.png"></a>
          </div>
        </div>
        <div class="privacy">
          <img alt="Imagem Política de Privacidade" src="../assets/heart_privacy.png">
          <router-link to="/privacy"><button>Política de Privacidade</button></router-link>
        </div>
      </div>
    </div>
    <h4>Copyright 2020 - <b><a href="#" target="blank">AZTECH</a></b>
        - Todos os direitos reservados.
    </h4>
    <p>As informações e sugestões contidas neste site não substituem o aconselhamento
      e o acompanhamento de médicos e outros especialistas.
    </p>
  </footer>
</template>

<script>
export default {
  name: 'Footer',

};
</script>

<style scoped>

footer {
  background-color: var(--verde-backgruond-color);
  margin: 0;
  padding: 0 0 5px 0;
  color: var(--txtAzul-color);
}

footer h4 {
  margin-bottom: 0;
  text-align: center;
}

footer p {
  margin-top: 0;
  text-align: center;
}

footer a {
  color: var(--txtAzul-color);
}

footer a:hover {
  color:black;
}

.footerlinks {
  background-color: white;
  box-shadow: var(--shadowgrid-box-shadow);
}

.footerlinks .content {
  display: flex;
  flex-wrap: wrap;
  justify-content:space-between;
  align-items:center;
  padding: var(--padrao-padding);
}

.partnertxt, .partner a {
  font-size: 1.2em;
  text-align: left;
  color: black;
  margin: 0;
  text-decoration: none;
}

.partnerlinks{
 padding-top: 10px;
}

.partnerlinks a{
 margin: 0 15px 0 0;
}

.privacy {
  margin: 0;
  padding: 0;
  width: 170px;
}

.privacy img {
  margin: 20px 25px;
}

.privacy button {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 10px;
  background-color: var(--txtblack20-color);
  cursor: pointer;
}

.privacy button:hover {
  background-color: var(--txtblack40-color);
}

</style>
