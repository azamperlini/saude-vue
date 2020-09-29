<template>
  <div class="container">
    <Header />
    <div class="container-content  bg-content">
      <h1> Prontuários </h1>
      <p>lorem ipsum dolor sit amet, consectetur adip</p>
    </div>
    <Footer />
  </div>
</template>

<script>

import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {

  name: 'Medical-records',
  components: {
    Header,
    Footer,
  },
};
</script>
