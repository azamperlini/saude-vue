<template>
  <header>
    <div class="content">
      <div class="nav">
        <router-link to="/">
          <img v-show="changeImage" alt="Quem Somos Logo" src="../assets/brand_whoAreYou_home.png">
          <img v-show="!changeImage" alt="Quem Somos Logo" src="../assets/brand_whoAreYou.png">
        </router-link>
        <ul>
          <router-link to="/informative"><li>Informativos</li></router-link>
          <router-link to="/medical-records"><li>Prontuários</li></router-link>
          <router-link to="/health-agent"><li>AG. Saúde</li></router-link>
          <router-link to="/register"><li id="register">Cadastrar</li></router-link>
          <router-link to="/login"><li id="login">Login</li></router-link>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>

export default {
  name: 'Header',
  data() {
    return {
      home: false,
    };
  },
  computed: {
    changeImage() {
      // router.$
      const urlBase = window.location.pathname;
      console.log(urlBase);
      if (urlBase === '/') {
        console.log(urlBase);
        return true;
      }
      return false;
    },
  },
};
</script>

<style scoped>
header {
  background-color: white;
  padding: 0;
  margin: 0;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.4);
}

header .content {
  padding-top: 0;
  padding-bottom: 30px;
}

header .content .nav {
  display: flex;
  flex-wrap: wrap;
  justify-content:space-between;
  align-items:center;
  width: 100%;
}

ul {
  list-style-type: none;
  margin: 60px 0 0 0;
  padding: 0;
}

#register {
  border-right: 0;
  border-bottom: 4px solid #92cd01;
  border-radius: 0 0 15px 15px;
}

#login {
  background-color: var(--verde-backgruond-color);
  border-radius: 10px;
  color: black;
  border: none;
}

#register:hover, #login:hover {
  background-color: #78a115;
}

li {
  display: inline-block;
  margin: 0 0 0 30px;
  border-right: var(--padraobordacinza-border-right);
  border-bottom: var(--padraobordacinza-border-bottom);
  padding: 3px;
  width: 130px;
  border-radius: var(--padraoborda-border-radius);
  text-align: center;
  font-size: 0.9em;
  color: var(--txtblack70-color);
}

li:hover {
  background-color: var(--black20-background-color);
  color: black;
  font-weight: bold;
}

.router-link-exact-active li {
  font-weight: bold;
  color: white;
  background-color: var(--azul-background-color);
  border-right: var(--padraobordaazul-border-right);
  border-bottom: var(--padraobordaazul-border-bottom);
}

</style>
