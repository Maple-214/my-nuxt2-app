<template>
  <div>
    <Type1 :sourceData="newsList" />
  </div>
</template>
<script>
  import Type1 from '~/components/News/Type1.vue';

  import jaType1 from '~/mock/news/ja-type1.json';
  import zhType1 from '~/mock/news/zh-type1.json';
  import enType1 from '~/mock/news/en-type1.json';

  export default {
    async asyncData({ app, params }) {},
    name: 'pagesNewsType1Home',
    components: {
      Type1,
    },
    mixins: [],
    props: {},
    data() {
      return {
        newsList: [],
      };
    },
    computed: {},
    watch: {},
    created() {
      if (process.client) {
        const lang = window.localStorage.getItem('lang');
        switch (lang) {
          case 'ja':
            this.newsList = jaType1;
            break;
          case 'en':
            this.newsList = enType1;
            break;
          default:
            this.newsList = zhType1;
            break;
        }
      }
    },
    mounted() {},
    methods: {},
  };
</script>
<style lang="" scoped></style>
