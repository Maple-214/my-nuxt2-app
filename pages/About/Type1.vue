<template>
  <div id="wrapper" class="about">
    <Type1 :observerCompanyDetails="observerCompanyDetails" />
  </div>
</template>
<script>
  import Type1 from '~/components/About/Type1.vue';
  import enCompanyDetails from '~/mock/about/en-company-details.json';
  import jaCompanyDetails from '~/mock/about/ja-company-details.json';
  import zhCompanyDetails from '~/mock/about/zh-company-details.json';

  export default {
    name: 'PagesAboutType1',
    components: {
      Type1,
    },
    mixins: [],
    props: {},
    async asyncData({ app, params }) {},
    data() {
      return {
        lang: this.$i18n.locale,
      };
    },

    computed: {
      observerCompanyDetails() {
        let companyDetails = {};
        if (process.client) {
          const lang = window.localStorage.getItem('lang');
          switch (lang) {
            case 'ja':
              companyDetails = jaCompanyDetails;
              break;
            case 'en':
              companyDetails = enCompanyDetails;
              break;
            default:
              companyDetails = zhCompanyDetails;
              break;
          }
        }
        return companyDetails;
      },
    },
    watch: {
      lang(a, b) {
        console.log({ a, b });
      },
    },
    mounted() {},
    methods: {},
  };
</script>
<style lang="" scoped></style>
