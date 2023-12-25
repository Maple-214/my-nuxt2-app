<template>
  <div>
    <NewsDetail />
  </div>
</template>
<script>
  import NewsDetail from '~/components/News/NewsDetail.vue';

  export default {
    async asyncData({ app, params }) {},
    name: '',
    components: {
      NewsDetail,
    },
    mixins: [],
    props: {},
    data() {
      return {};
    },
    computed: {},
    watch: {},
    created() {
      
    },
    mounted() {},
    methods: {},
  };
</script>
<style lang="" scoped></style>
