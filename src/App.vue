<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

</script>

<style>

html, body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #e9f5cc;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

:root {
  --shadowgrid-box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.3);
  --shadow-box-shadow: -4px 4px 8px rgba(0, 0, 0, 0.3);
  --verde-backgruond-color: #92cd01;
  --verdeclaro-background-color: #e9f5cc;
  --black70-background-color: #6f6f6e;
  --black40-background-color: #b1b1b0;
  --black20-background-color: #d9d9d9;
  --azul-background-color: #083f54;
  --padrao-padding: 60px;
  --txtAzul-color: #083f54;
  --txtblack70-color: #6f6f6e;
  --txtblack40-color: #b1b1b0;
  --txtblack20-color: #d9d9d9;
  --padraobordacinza-border-right: 1px solid #6f6f6e;
  --padraobordacinza-border-bottom: 1px solid #6f6f6e;
  --padraobordaazul-border-right: 2px solid #92cd01;
  --padraobordaazul-border-bottom: 2px solid #92cd01;
  --padraoborda-border-radius: 0 0 15px 0;
}

.container {
  display: grid;
  grid-template-rows: auto;
}

.content {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0% auto;
  padding: var(--padrao-padding);
  max-width: 1366px;
}

.container-content {
  margin: 0 auto;
  max-width: 1366px;
}

.bg-content {
  background-color: white;
}

input:focus{
  box-shadow: 0 0 0 0;
  outline: 0;
}

</style>
