<template>
    <form class="form-content">
        <div class="inputsBox">
            <div class="inputBoxCol3">
                <label>Peso kg:</label><br>
                <input
                    class="inputPadrao"
                    type="number"
                    required="" oninvalid="setCustomValidity('Campo Obrigatório')"
                    oninput="setCustomValidity('')"
                >
            </div>
            <div class="inputBoxCol3">
                <label>Altura (M):</label><br>
                <input
                    class="inputPadrao"
                    type="number"
                    required="" oninvalid="setCustomValidity('Campo Obrigatório')"
                    oninput="setCustomValidity('')"
                >
            </div>
            <div class="inputBoxCol3">
                <label>IMC:</label><br>
                <input
                    class="inputPadrao"
                    type="number"
                    required="" oninvalid="setCustomValidity('Campo Obrigatório')"
                    oninput="setCustomValidity('')"
                >
            </div>
        </div>
        <div class="inputsBox">
            <div class="inputBoxCol3">
                <label>Tipo Sanguineo:</label><br>
                <select>
                    <option>A NEGATIVO</option>
                    <option>A POSITIVO</option>
                    <option>B NEGATIVO</option>
                    <option>B POSITIVO</option>
                    <option>AB NEGATIVO</option>
                    <option>AB POSITIVO</option>
                    <option>O NEGATIVO</option>
                    <option>O POSITIVO</option>
                </select>
            </div>
            <div class="inputBoxCol3">
                <label>Condição de Doador:</label><br>
                <input
                    class="inputCheck inputCheck2"
                    type="checkBox"
                >
                <label class="labelCheck">SIM</label>
                <input
                    class="inputCheck inputCheck2"
                    type="checkBox"
                >
                <label class="labelCheck">NÃO</label>
            </div>
            <div class="inputBoxCol3">
                <label>Data da Última Doação:</label><br>
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
                <label>Quantidade de Doação Ano:</label><br>
                <input
                    class="inputPadrao"
                    type="number"
                    required="" oninvalid="setCustomValidity('Campo Obrigatório')"
                    oninput="setCustomValidity('')"
                >
            </div>
            <div class="inputBoxCol2">
                <label class="label2">Conhece os procedimentos para doação?</label>
                <input
                    class="inputCheck inputCheck2"
                    type="checkBox"
                >
                <label class="labelCheck">SIM</label>
                <input
                    class="inputCheck inputCheck2"
                    type="checkBox"
                >
                <label class="labelCheck">NÃO</label>
            </div>
        </div>
        <div class="inputsBox">
            <div class="inputBoxCol2">
                <label class="label2">Conhece os locais para doação?</label>
                <input
                    class="inputCheck inputCheck2"
                    type="checkBox"
                >
                <label class="labelCheck">SIM</label>
                <input
                    class="inputCheck inputCheck2"
                    type="checkBox"
                >
                <label class="labelCheck">NÃO</label>
            </div>
            <div class="inputBoxCol2">
                <label class="label2">Conhece as formas de doação?</label>
                <input
                    class="inputCheck inputCheck2"
                    type="checkBox"
                >
                <label class="labelCheck">SIM</label>
                <input
                    class="inputCheck inputCheck2"
                    type="checkBox"
                >
                <label class="labelCheck">NÃO</label>
            </div>
            <div class="inputBoxCol2">
                <label class="label2">Conhece os produtos do sangue?</label>
                <input
                    class="inputCheck inputCheck2"
                    type="checkBox"
                >
                <label class="labelCheck">SIM</label>
                <input
                    class="inputCheck inputCheck2"
                    type="checkBox"
                >
                <label class="labelCheck">NÃO</label>
            </div>
            <div class="inputBoxCol2">
                <label class="label2">Conhece os fatores que impedem doação?</label>
                <input
                    class="inputCheck inputCheck2"
                    type="checkBox"
                >
                <label class="labelCheck">SIM</label>
                <input
                    class="inputCheck inputCheck2"
                    type="checkBox"
                >
                <label class="labelCheck">NÃO</label>
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
  name: 'FormContact',
};
</script>

<style scoped>

</style>
