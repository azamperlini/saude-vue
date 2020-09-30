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
    margin-left: auto;
    margin-right: auto;
}

.title-article {
    cursor: pointer;
}

.form-body   {
    padding: 0;
    max-height: 10em;
    overflow: hidden;
    transition: 0.3s ease all;
}

.is-closed .form-body {
    max-height: 0;
}

.form-content {
    padding: 20px;
}

</style>
