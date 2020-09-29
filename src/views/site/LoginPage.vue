<template>
  <div class="container">
    <div class="containerLogin">
      <div class="bar"></div>
      <div class="loginBrand">
        <router-link to="/">
          <img class="linkBrand" alt="Link Home" src="../../assets/login/brandLogin.png">
        </router-link>
        <h3>O Portal da Saúde Universitária.</h3>
        <div class="content-formLogin">
          <form class="formLogin">
            <img alt="Icone usuário" src="../../assets/login/iconLogin.png"><br>
            <div class="inputBox">
              <input
                type="text"
                required="" oninvalid="setCustomValidity('Campo Obrigatório')"
                oninput="setCustomValidity('')"              >
              <label>Username:</label>
            </div>
            <div class="inputBox">
              <input
                type="password"
                pattern=".{6,}"
                required="" oninvalid="setCustomValidity('Campo Obrigatório.')"
                oninput="setCustomValidity('')"
              >
              <label>Senha:</label>
            </div>
            <button>Entrar</button><br>
          </form>
          <p><a href="#">Esqueceu a senha</a>?</p>
          <p>Não tenho conta ainda. <a href="/register"> Criar conta</a>.</p>
          <div class="brandPartner">
            <img alt="Icone Parceiro" src="../../assets/login/brandPartner.png">
          </div>
        </div>
      </div>
      <div class="bar"></div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Login',
  components: {
  },
  computed: {

  },
};
</script>

<style scoped>

.container {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  width: 100vw;
  height: 100vh;
}

.containerLogin {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 60vh;
}

.bar {
  background-color: var(--verde-backgruond-color);
  width: 3%;
  height: 391px;
}

.loginBrand {
  background-color: white;
  width: 760px;
  height: 391px;
  margin: 0 auto;
  padding: 0 60px;
}

.linkBrand {
  margin-top: 80px;
}

h3 {
  font-size: 1.4em;
  font-weight: normal;
  color: var(--txtblack70-color);
}

.content-formLogin {
  position: relative;
  top: -440px;
  left: 400px;
  width: 38%;
  background-color: white;
  padding: 45px 45px 0 45px;
  border: 2px solid  #92cd01;
  border-radius: 30px;
  box-shadow: var(--shadow-box-shadow);
  text-align: center;
}

.content-formLogin p, a {
  margin: 25px 0;
  color: var(--txtblack70-color);
}

.content-formLogin a:hover {
  font-weight: bold;
  color: black;
}

.brandPartner {
  width: 110px;
  height: 93px;
  margin: 0 auto;
  padding: 0;
  background-color: var(--verde-backgruond-color);
  border-radius: 10px 10px 0 0;
}
.formLogin {
  height: auto;
}

.formLogin img {
  margin: 0 34%;
}

.inputBox{
    margin: 16px 0;
    position: relative;
}
.inputBox label{
    position: absolute;
    top: -2px;
    left: 0;
    font-size: 1em;
    color: black;
    pointer-events: none;
    transition: .5s;
}

.inputBox input:focus ~ label, .inputBox input:valid ~ label{
    top: -10px;
    left: 0;
    font-size: 0.8em;
}

.inputBox input {
  width: 100%;
  height: 30px;
  margin: 10px 0;
  border-top: none;
  border-left: none;
  border-right: var(--padraobordacinza-border-right);
  border-bottom: var(--padraobordacinza-border-bottom);
  border-radius: var(--padraoborda-border-radius);
  font-size: 1.1em;
}

.formLogin button {
  width: 200px;
  background-color: var(--verde-backgruond-color);
  border: none;
  border-radius: 10px;
  padding: 8px;
  font-size: 1.1em;
  color: black;
}

.formLogin button:hover {
  background-color: #78a115;
}

</style>
