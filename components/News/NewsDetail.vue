<template>
  <div>
    <SecondaryBanner :meta="meta" />
    <div class="entry">
      <h2 class="entry__copy">
        <span class="news_title">{{ newsDetailInfo.title }}</span>
        <span class="news_time">({{ newsDetailInfo.time }})</span>
      </h2>
      <div class="entry__body">
        <div class="news_img">
          <img :src="newsDetailInfo.img" alt="" />
        </div>
        <p class="news_content">
          {{ newsDetailInfo.tex }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
  import SecondaryBanner from '../SecondaryBanner/SecondaryBanner.vue';

  export default {
    head() {
      return {
        title: this.$t('news.detail_title') + '|' + this.$t('SITE_ROOT_TITLE'),
        meta: [
          {
            hid: 'description',
            name: 'description',
            content:
              this.$t('news.detail_title') + '|' + this.$t('SITE_ROOT_TITLE'),
          },
        ],
      };
    },
    name: '',
    components: {},
    mixins: [],
    props: {
      newsDetailInfo: {
        type: Object,
        required: true,
      },
    },
    data() {
      return {};
    },
    computed: {
      meta() {
        return {
          title: this.$t('news.detail_title'),
          path: this.$route.path,
        };
      },
    },
    watch: {},
    mounted() {
      console.log({ newsDetailInfo: this.newsDetailInfo });
    },
    methods: {},
  };
</script>
<style lang="stylus" scoped>
  .entry
    max-width: 1240px;
    margin: 0 auto;
    padding: 0 15px;
    .entry__copy
      margin: 0 0 40px;
      padding: 0 0 25px;
      border-bottom: 3px solid #eee;
      font-size: 30px;
    .entry__body
      line-height: 2;
      margin: 0 0 80px;
      .news_content
        margin-top: 20px
</style>
