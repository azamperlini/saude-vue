<template>
  <main>
    <div class="content">
      <div class="titulo">
        <h1> Você tem acesso a informativos e campanhas de prevenção a saúde printing <br>
        and typesetting industry. Lorem Ipsum has been the industry’s standard <br>
        dummy text ever since the 1500s, when an unknown printer took a galley.</h1>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'Main',

};
</script>

<style scoped>

main {
  margin: 0;
  padding: 0;
  box-shadow: var(--shadowgrid-box-shadow);
}

.content {
  background-color: white;
  box-shadow: var(--shadowgrid-box-shadow);
}

.titulo h1{
  font-weight: normal;
  color: var(--txtblack70-color);
  text-align: justify;
  margin: 0;
}

</style>
