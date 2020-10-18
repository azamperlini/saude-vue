<template>
    <form class="form-content">
        <div class="inputsBox">
            <div class="inputBoxCol4">
                <label>Matrícula do Usuário:</label><br>
                <input
                    class="inputPadrao"
                    type="text"
                    required="" oninvalid="setCustomValidity('Campo Obrigatório')"
                    oninput="setCustomValidity('')"
                >
            </div>
            <div class="inputBoxCol4">
                <label>Data da Occorência:</label><br>
                <input
                    class="inputPadrao"
                    type="text"
                    required="" oninvalid="setCustomValidity('Campo Obrigatório')"
                    oninput="setCustomValidity('')"
                >
            </div>
            <div class="inputBoxCol4">
                <label>Início:</label><br>
                <input
                    class="inputPadrao"
                    type="text"
                    required="" oninvalid="setCustomValidity('Campo Obrigatório')"
                    oninput="setCustomValidity('')"
                >
            </div>
            <div class="inputBoxCol4">
                <label>Encerramento:</label><br>
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
                <label>Descrição da Occorência:</label><br>
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
  name: 'FormEditOccurrences',
};
</script>

<style scoped>

</style>
