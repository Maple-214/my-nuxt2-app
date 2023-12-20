<template>
  <div id="wrapper" class="btn-hover-2">
    <section class="page-404">
      <div class="container">
        <div class="row">
          <img :src="bg_404" alt="" srcset="" />
          <h2 class="section-heading">{{ $t('error.msg1') }}</h2>

          <p class="section-subheading">{{ $t('error.msg2') }}</p>
          <nuxt-link to="/" class="tt_button tt_primary_button"
            >{{ $t('error.msg3') }}</nuxt-link
          >
        </div>
      </div>
    </section>
  </div>
</template>
<script>
  import bg_404 from '~/assets/images/404/404.jpg';
  export default {
    name: '',
    components: {},
    mixins: [],
    props: {},
    data() {
      return {
        bg_404,
      };
    },
    computed: {},
    watch: {},
    mounted() {},
    methods: {},
  };
</script>
<style lang="stylus" scoped>
  .page-404
    text-align: center
</style>
