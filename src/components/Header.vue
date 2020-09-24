<template>
  <header>
    <div class="content">
      <div class="nav">
        <router-link to="/">
          <img v-show="!home" alt="Quem Somos Logo" src="../assets/logo_quemSomos_home.png">
          <img v-show="home" alt="Quem Somos Logo" src="../assets/logo_quemSomos.png">
        </router-link>
        <ul>
          <router-link to="/informativos"><li>Informativos</li></router-link>
          <router-link to="/prontuarios"><li>Prontuários</li></router-link>
          <router-link to="/ag-saude"><li>AG. Saúde</li></router-link>
          <router-link to="/login"><li id="login">Login</li></router-link>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>

export default {
  name: 'Header',

};
</script>

<style scoped>

header {
  background-color: white;
  padding: 0;
  margin: 0;
}

header .content {
  padding-top: 0;
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

#login {
  border-right: 0;
  border-bottom: 4px solid #92cd01;
  border-radius: 0 0 15px 15px;
  color: black;
}

#login:hover {
  background-color: #78a115;
}

li {
  display: inline-block;
  margin: 0 0 0 40px;
  border-right: var(--padraobordacinza-border-right);
  border-bottom: var(--padraobordacinza-border-bottom);
  padding: 3px;
  width: 150px;
  border-radius: var(--padraoborda-border-radius);
  text-align: center;
  font-size: 1.1em;
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
