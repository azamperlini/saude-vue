<template>
  <article>
    <div class="content-article" :class="accordionClasses">
        <div class="title-article" @click="toggleAccordion">
        <h2>Dados Pessoais</h2>
        </div>
        <div class="form-body">
          <div class="form-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <strong>Pellentesque risus mi</strong>
          </div>
        </div>
    </div>
  </article>
</template>

<script>

export default {
  name: 'AccordionPersonalData',
  data() {
    return {
      isOpen: true,
    };
  },
  methods: {
    toggleAccordion() {
      this.isOpen = !this.isOpen;
    },
  },
  computed: {
    accordionClasses() {
      return {
        'is-closed': !this.isOpen,
        'is-primary': this.isOpen,
        'is-dark': !this.isOpen,
      };
    },
  },
};

</script>

<style scoped>

.content-article {
  width: 100%;
}

.title-article {
  cursor: pointer;
  background-color: var(--black20-background-color);
  border-radius: 30px 30px 0 0;
  text-align: center;
}

.title-article h2 {
  padding: 10px;
  font-size: 1.2em;
  font-weight: normal;
}

.form-body   {
  margin: 0;
  margin-top: -16px;
  padding: 0;
  overflow: hidden;
  transition: 0.3s ease all;
  border-bottom: 1px solid#d9d9d9;
  border-left: 1px solid#d9d9d9;
  border-right: 1px solid#d9d9d9;
}

.is-primary .form-body {
  position: relative;
}

.is-closed .form-body {
  position: relative;
  top: -17px;
  max-height: 0;
}

.form-content {
  padding: 30px;
}

</style>
