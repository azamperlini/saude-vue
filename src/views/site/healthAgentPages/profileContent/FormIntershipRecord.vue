<template>
    <form class="form-content">
        <div class="inputsBox">
            <div class="inputBoxCol3">
                <label>Agente de Saúde:</label><br>
                <input
                    class="inputPadrao"
                    type="text"
                    required="" oninvalid="setCustomValidity('Campo Obrigatório')"
                    oninput="setCustomValidity('')"
                >
            </div>
            <div class="inputBoxCol3">
                <label>Especificidade de Estágio:</label><br>
                <select>
                    <option>SOCORRISTA</option>
                    <option>AGENTE DE SAÚDE</option>
                    <option>PESQUISADOR</option>
                </select>
            </div>
            <div class="inputBoxCol3">
                <label>Coordenação:</label><br>
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
                <label>Período:</label><br>
                <input
                    class="inputPadrao"
                    type="text"
                    required="" oninvalid="setCustomValidity('Campo Obrigatório')"
                    oninput="setCustomValidity('')"
                >
            </div>
            <div class="inputBoxCol3">
                <label>Data de Início de Estágio:</label><br>
                <input
                    class="inputPadrao"
                    type="text"
                >
            </div>
            <div class="inputBoxCol3">
                <label>Data de Término de Estágio:</label><br>
                <input
                    class="inputPadrao"
                    type="text"
                    required="" oninvalid="setCustomValidity('Campo Obrigatório')"
                    oninput="setCustomValidity('')"
                >
            </div>
        </div>
        <div class="boxBtn">
            <button class="btn buttonSalve">Salvar</button>
        </div>
    </form>
</template>

<script>

export default {
  name: 'FormIdentification',
};
</script>

<style scoped>

</style>
