<template>
  <header class="entry-header single-page-header with-topbar">
    <div class="row single-page-heading blog-title-left">
      <div class="container">
        <h1 class="section-heading">{{ meta.title }}</h1>
        <BreadNav :meta="meta" />
      </div>
    </div>
  </header>
</template>
<script lang="ts">
  import BreadNav from '~/components/BreadNav/BreadNav.vue';
  import { Meta } from './types';

  export default {
    name: '',
    components: {
      BreadNav,
    },
    mixins: [],
    props: {
      meta: {
        type: Object as () => Meta,
        required: true,
      },
    },
    data() {
      return {};
    },
    computed: {},
    watch: {},
    mounted() {},
    methods: {},
  };
</script>
<style lang="stylus" scoped></style>
