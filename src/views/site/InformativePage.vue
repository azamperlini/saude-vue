<template>
  <div class="container">
    <Header />
    <div class="container-content  bg-content">
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Enim minima soluta,
        hic voluptatum amet voluptatibus ipsam veniam consequuntur sunt voluptates dolorem nesciunt,
        inventore laboriosam quod dolores a. Obcaecati, qui dolorum.

        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum assumenda quia
        incidunt nostrum debitis eveniet adipisci dolor, id aliquam voluptas autem. Totam,
        consequatur illo! Aspernatur ex recusandae vitae autem excepturi. <br>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, veniam cupiditate.
        Voluptate totam sint impedit quo voluptates eum! Ipsum in laboriosam necessitatibus,
         voluptas vero at et earum inventore quos ad?
      </p>
    </div>
    <Footer />
  </div>
</template>

<script>

import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Informative',
  components: {
    Header,
    Footer,
  },
};
</script>
