<template>
    <form class="form-content">
        <div class="inputsBox">
            <div class="inputBoxCol3">
                <label>Data de início:</label><br>
                <input
                    class="inputPadrao"
                    type="text"
                    required="" oninvalid="setCustomValidity('Campo Obrigatório')"
                    oninput="setCustomValidity('')"
                >
            </div>
            <div class="inputBoxCol3">
                <label>Data de término:</label><br>
                <input
                    class="inputPadrao"
                    type="text"
                    required="" oninvalid="setCustomValidity('Campo Obrigatório')"
                    oninput="setCustomValidity('')"
                >
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
        <div class="boxBtn">
            <button class="btn buttonSalve">Salvar</button>
        </div>
    </form>
</template>

<script>

export default {
  name: 'FormIntershipRecord',
};
</script>

<style scoped>

</style>
