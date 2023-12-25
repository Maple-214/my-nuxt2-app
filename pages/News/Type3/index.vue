<template>
  <div>
    <Type3 :sourceData="newsList" />
  </div>
</template>
<script>
  import Type3 from '~/components/News/Type3.vue';

  import jaType3 from '~/mock/news/ja-type3.json';
  import zhType3 from '~/mock/news/zh-type3.json';
  import enType3 from '~/mock/news/en-type3.json';
  export default {
    async asyncData({ app, params }) {
     
    },
    name: 'pagesNewsType3Home',
    components: {
      Type3,
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
            this.newsList = jaType3;
            break;
          case 'en':
            this.newsList = enType3;
            break;
          default:
            this.newsList = zhType3;
            break;
        }
      }
    },
    mounted() {},
    methods: {},
  };
</script>
<style lang="" scoped></style>
