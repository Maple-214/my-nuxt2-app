<template>
  <div>
    <Type4 :sourceData="newsList" />
  </div>
</template>
<script>
  import Type4 from '~/components/News/Type4.vue';

  import jaType4 from '~/mock/news/ja-type4.json';
  import zhType4 from '~/mock/news/zh-type4.json';
  import enType4 from '~/mock/news/en-type4.json';
  export default {
    async asyncData({ app, params }) {},
    name: 'pagesNewsType1Home',
    components: {
      Type4,
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
            this.newsList = jaType4;
            break;
          case 'en':
            this.newsList = enType4;
            break;
          default:
            this.newsList = zhType4;
            break;
        }
      }
    },
    mounted() {},
    methods: {},
  };
</script>
<style lang="" scoped></style>
