<template>
    <form class="form-content">
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
                <label>Período:</label><br>
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
                <label>Perfil:</label><br>
                <select>
                    <option>PÚBLICO</option>
                    <option>SOCORRISTA</option>
                    <option>SUPERVISOR</option>
                    <option>PESQUISADOR</option>
                </select>
            </div>
        </div>
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
        <div class="inputsBox">
            <div class="inputBoxCol3">
                <label>Celular:</label><br>
                <input
                    class="inputPadrao"
                    type="text"
                    required="" oninvalid="setCustomValidity('Campo Obrigatório')"
                    oninput="setCustomValidity('')"
                >
            </div>
            <div class="inputBoxCol3">
                <input
                    class="inputCheck"
                    type="checkBox"
                >
                <label>WhatsApp</label>
            </div>
            <div class="inputBoxCol3">
                <label>E-mail:</label><br>
                <input
                    class="inputPadrao"
                    type="email"
                    required="" oninvalid="setCustomValidity('Campo Obrigatório')"
                    oninput="setCustomValidity('')"
                >
            </div>
            <button class="btn buttonSalve">Foto Perfil</button>
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
