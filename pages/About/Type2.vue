<template>
  <div id="wrapper" class="about">
    <Type2 :observerCompanyDetails="observerCompanyDetails" />
  </div>
</template>
<script>
  import Type2 from '~/components/About/Type2.vue';
  import jaRecruitment from '~/mock/about/ja-recruitment.json'
  import enRecruitment from '~/mock/about/en-recruitment.json'
  import zhRecruitment from '~/mock/about/zh-recruitment.json'

  export default {
    name: 'PagesAboutType2',
    components: {
      Type2,
    },
    mixins: [],
    props: {},
    async asyncData({ app, params }) {
      try {
      } catch (error) {}
    },

    data() {
      return {
      };
    },
    computed: {
      observerCompanyDetails() {
        let companyDetails = {};
        if (process.client) {
          const lang = window.localStorage.getItem('lang');
          switch (lang) {
            case 'ja':
              companyDetails = jaRecruitment;
              break;
            case 'en':
              companyDetails = enRecruitment;
              break;
            default:
              companyDetails = zhRecruitment;
              break;
          }
        }
        return companyDetails;
      },
    },
    watch: {},
    mounted() {},
    methods: {},
  };
</script>
<style lang="" scoped></style>
