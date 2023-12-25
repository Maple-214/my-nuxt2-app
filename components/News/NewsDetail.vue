<template>
  <div>
    <SecondaryBanner :meta="meta" />
    <div class="entry" v-if="newsDetailInfo.title">
      <h2 class="entry__copy">
        <span class="news_title">{{ newsDetailInfo.title }}</span>
        <span class="news_time">({{ newsDetailInfo.time }})</span>
      </h2>
      <div class="entry__body">
        <div class="news_img">
          <img :src="HOST + newsDetailInfo.img" alt="" />
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
  import { HOST } from '~/config/index';

  import jaType1 from '~/mock/news/ja-type1.json';
  import zhType1 from '~/mock/news/zh-type1.json';
  import enType1 from '~/mock/news/en-type1.json';

  import jaType2 from '~/mock/news/ja-type2.json';
  import zhType2 from '~/mock/news/zh-type2.json';
  import enType2 from '~/mock/news/en-type2.json';

  import jaType3 from '~/mock/news/ja-type3.json';
  import zhType3 from '~/mock/news/zh-type3.json';
  import enType3 from '~/mock/news/en-type3.json';

  import jaType4 from '~/mock/news/ja-type4.json';
  import zhType4 from '~/mock/news/zh-type4.json';
  import enType4 from '~/mock/news/en-type4.json';
  export default {
    head() {
      return {
        title: this.$t('news.detail.title') + '|' + this.$t('SITE_ROOT_TITLE'),
        meta: [
          {
            hid: 'description',
            name: 'description',
            content:
              this.$t('news.detail.title') + '|' + this.$t('SITE_ROOT_TITLE'),
          },
        ],
      };
    },
    name: '',
    components: {},
    mixins: [],
    props: {},
    data() {
      return {
        HOST,
        newsDetailInfo: {},
      };
    },
    computed: {
      meta() {
        return {
          title: this.$t('news.detail.title'),
          path: this.$route.path,
        };
      },
    },
    watch: {},
    mounted() {
      if (process.client) {
        const lang = window.localStorage.getItem('lang');
        const { id } = this.$route.params;
        const path = this.$route.path;
        let Type;
        if (path.includes('type1')) {
          Type = 'Type1';
        }
        if (path.includes('type2')) {
          Type = 'Type2';
        }
        if (path.includes('type3')) {
          Type = 'Type3';
        }
        if (path.includes('type4')) {
          Type = 'Type4';
        }

        let OriginDataObj;
        switch (lang) {
          case 'ja':
            if (Type === 'Type1') {
              OriginDataObj = jaType1;
            }
            if (Type === 'Type2') {
              OriginDataObj = jaType2;
            }
            if (Type === 'Type3') {
              OriginDataObj = jaType3;
            }
            if (Type === 'Type4') {
              OriginDataObj = jaType4;
            }
            break;
          case 'en':
            if (Type === 'Type1') {
              OriginDataObj = enType1;
            }
            if (Type === 'Type2') {
              OriginDataObj = enType2;
            }
            if (Type === 'Type3') {
              OriginDataObj = enType3;
            }
            if (Type === 'Type4') {
              OriginDataObj = enType4;
            }
            break;
          default:
            if (Type === 'Type1') {
              OriginDataObj = zhType1;
            }
            if (Type === 'Type2') {
              OriginDataObj = zhType2;
            }
            if (Type === 'Type3') {
              OriginDataObj = zhType3;
            }
            if (Type === 'Type4') {
              OriginDataObj = zhType4;
            }
            break;
        }
        this.newsDetailInfo = OriginDataObj?.filter((i) => i.id == id)[0];
      }
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
