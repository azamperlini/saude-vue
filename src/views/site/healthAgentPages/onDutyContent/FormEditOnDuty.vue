<template>
    <form class="form-content">
        <div class="inputsBox">
            <div class="inputBoxCol4">
                <label>Agente de Saúde:</label><br>
                <input
                    class="inputPadrao"
                    type="text"
                    required="" oninvalid="setCustomValidity('Campo Obrigatório')"
                    oninput="setCustomValidity('')"
                >
            </div>
            <div class="inputBoxCol4">
                <label>Data:</label><br>
                <input
                    class="inputPadrao"
                    type="text"
                    required="" oninvalid="setCustomValidity('Campo Obrigatório')"
                    oninput="setCustomValidity('')"
                >
            </div>
            <div class="inputBoxCol4">
                <label>Horário de Entrada:</label><br>
                <input
                    class="inputPadrao"
                    type="text"
                    required="" oninvalid="setCustomValidity('Campo Obrigatório')"
                    oninput="setCustomValidity('')"
                >
            </div>
            <div class="inputBoxCol4">
                <label>Horário de Saída:</label><br>
                <input
                    class="inputPadrao"
                    type="text"
                    required="" oninvalid="setCustomValidity('Campo Obrigatório')"
                    oninput="setCustomValidity('')"
                >
            </div>
        </div>
        <div class="inputsBox">
            <div class="inputBoxCol1">
                <label>Descrição do Plantão:</label><br>
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
  name: 'FormEditOnDuty',
};
</script>

<style scoped>

</style>
