<template>
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
    <button class="btn buttonSalve">Foto Perfil</button>
    <div class="boxBtn">
      <button class="btn buttonSalve">Salvar</button>
      <button class="btn buttonEdit">Editar</button>
    </div>
  </form>
</template>

<script>

export default {
  name: 'FormPersonalData',
};
</script>

<style scoped>

</style>
