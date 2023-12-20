<template>
  <div class="home page-template-default page loading-effect wpb-js-composer vc_responsive">
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>
<script>
  import Header from '~/components/Header/Header.vue';
  import Footer from '~/components/Footer/Footer.vue'
  export default {
    name: '',
    components: {
      Header,
      Footer
    },
    mixins: [],
    props: {},
    data() {
      return {};
    },
    computed: {},
    watch: {},
    mounted() {},
    methods: {},
  };
</script>
<style lang="" scoped></style>
