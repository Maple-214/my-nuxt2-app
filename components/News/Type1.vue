<template>
  <div id="newsrelease_top">
    <SecondaryBanner :meta="meta" />
    <NewsWrapper type="type1" :sourceData="sourceData" />
  </div>
</template>
<script>
  import SecondaryBanner from '../SecondaryBanner/SecondaryBanner.vue';
  import NewsWrapper from './Components/NewsWrapper.vue';
  export default {
    head() {
      return {
        title: this.$t('news.type1_tile') + '|' + this.$t('SITE_ROOT_TITLE'),
        meta: [
          {
            hid: 'description',
            name: 'description',
            content:
              this.$t('news.type1_tile') + '|' + this.$t('SITE_ROOT_TITLE'),
          },
        ],
      };
    },
    name: '',
    components: {
      SecondaryBanner,
      NewsWrapper,
    },
    mixins: [],
    props: {
      sourceData: {
        type: Array,
        default: () => [],
      },
    },
    data() {
      return {};
    },
    computed: {
      meta() {
        return {
          title: this.$t('news.type1_tile'),
          path: this.$route.path,
        };
      },
    },
    watch: {},
    mounted() {},
    methods: {},
  };
</script>
