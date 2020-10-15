<template>
    <form class="form-content">
        <div class="inputsBox">
            <div class="inputBoxCol3">
                <label>CEP:</label><br>
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
                <label>Tipo Logradouro:</label><br>
                <select>
                    <option>AVENIDA</option>
                    <option>ESTRADA</option>
                    <option>RODOVIA</option>
                    <option>RUA</option>
                    </select>
            </div>
            <div class="inputBoxCol2">
                <label>Logradouro:</label><br>
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
                <label>Número:</label><br>
                <input
                    class="inputPadrao"
                    type="number"
                    required="" oninvalid="setCustomValidity('Campo Obrigatório')"
                    oninput="setCustomValidity('')"
                >
            </div>
            <div class="inputBoxCol3">
                <input
                    class="inputCheck"
                    type="checkBox"
                >
                <label>Sem Número</label>
            </div>
            <div class="inputBoxCol3">
                <label>Complemento:</label><br>
                <input
                    class="inputPadrao"
                    type="text"
                >
            </div>
        </div>
        <div class="inputsBox">
            <div class="inputBoxCol3">
                <label>Estado:</label><br>
                <input
                    class="inputPadrao"
                    type="text"
                >
            </div>
            <div class="inputBoxCol3">
                <label>Município:</label><br>
                <input
                    class="inputPadrao"
                    type="text"
                >
            </div>
            <div class="inputBoxCol3">
                <label>Bairro:</label><br>
                <input
                    class="inputPadrao"
                    type="text"
                >
            </div>
        </div>
        <div class="boxBtn">
            <button class="btn buttonSalve">Salvar</button>
            <button class="btn buttonEdit">Editar</button>
        </div>
    </form>
</template>

<script>

export default {
  name: 'FormHourReport',
};
</script>

<style scoped>

</style>
