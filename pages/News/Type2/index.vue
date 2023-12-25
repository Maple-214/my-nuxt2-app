<template>
  <div>
    <Type2 :sourceData="newsList" />
  </div>
</template>
<script>
  import Type2 from '~/components/News/Type2.vue';

  import jaType2 from '~/mock/news/ja-type2.json';
  import zhType2 from '~/mock/news/zh-type2.json';
  import enType2 from '~/mock/news/en-type2.json';
  export default {
    async asyncData({ app, params }) {},
    name: 'pagesNewsType2Home',
    components: {
      Type2,
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
            this.newsList = jaType2;
            break;
          case 'en':
            this.newsList = enType2;
            break;
          default:
            this.newsList = zhType2;
            break;
        }
      }
    },
    mounted() {},
    methods: {},
  };
</script>
<style lang="" scoped></style>
