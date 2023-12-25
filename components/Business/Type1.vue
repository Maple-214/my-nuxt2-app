<template>
  <div id="">
    <SecondaryBanner :meta="meta" />
    <div id="single-page" class="container">
      <div class="wpb_column vc_column_container vc_col-sm-12">
        <div class="vc_column-inner">
          <div class="wpb_wrapper">
            <div class="vc_row wpb_row vc_inner vc_row-fluid">
              <div class="wpb_column vc_column_container vc_col-sm-12">
                <div class="vc_column-inner">
                  <div class="wpb_wrapper">
                    <div class="wpb_text_column wpb_content_element">
                      <div class="wpb_wrapper">
                        <h4>
                          {{ $t('business.type1.main.title1') }}
                        </h4>
                        <h4>
                          {{ $t('business.type1.main.title2') }}
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SectionMain :serviceList="[]" :serviceSectionList="serviceSectionList">
        <!-- <template #c2>
          <h6 class="subtitle">一棟収益物件中心の不動産投資サポート</h6>
        </template> -->
        <template #c3>
          <h3>{{ $t('business.service_overview') }}</h3>
        </template>
      </SectionMain>
    </div>
  </div>
</template>
<script>
  import SecondaryBanner from '../SecondaryBanner/SecondaryBanner.vue';
  import ServiceSection from '~/components/ServiceSection/ServiceSection.vue';
  import SectionMain from '~/components/SectionMain/SectionMain.vue';

  import Bg_1 from '~/assets/images/business/business_01.jpg';
  import Bg_2 from '~/assets/images/business/business_02.jpg';
  import Bg_3 from '~/assets/images/business/business_06.jpg';
  import Bg_4 from '~/assets/images/business/business_03.jpg';

  export default {
    head() {
      return {
        title:
          this.$t('business.type1.title') + '|' + this.$t('SITE_ROOT_TITLE'),
        meta: [
          {
            hid: 'description',
            name: 'description',
            content:
              this.$t('business.type1.title') +
              '|' +
              this.$t('SITE_ROOT_TITLE'),
          },
        ],
      };
    },
    name: 'ComponentsAboutType1',
    components: {},
    mixins: [],
    props: {
      SecondaryBanner,
      ServiceSection,
      SectionMain,
    },
    data() {
      return {};
    },
    computed: {
      meta() {
        return {
          title: this.$t('business.type1.title'),
          path: this.$route.path,
        };
      },
      serviceSectionList() {
        return [
          {
            id: 1,
            title: this.$t('business.type1.serviceSectionList.item1.title'),
            desc: this.$t('business.type1.serviceSectionList.item1.desc'),
            tips: [
              this.$t('business.type1.serviceSectionList.item1.tips1'),
              this.$t('business.type1.serviceSectionList.item1.tips2'),
              this.$t('business.type1.serviceSectionList.item1.tips3'),
              this.$t('business.type1.serviceSectionList.item1.tips4'),
              this.$t('business.type1.serviceSectionList.item1.tips5'),
              this.$t('business.type1.serviceSectionList.item1.tips6'),
            ],
            img: Bg_1,
            position: 'left',
            // hiddenIcon: true,
            hiddenBtn: true,
          },
          {
            id: 2,
            title: this.$t('business.type1.serviceSectionList.item2.title'),
            desc: this.$t('business.type1.serviceSectionList.item2.desc'),
            tips: [
              this.$t('business.type1.serviceSectionList.item2.tips1'),
              this.$t('business.type1.serviceSectionList.item2.tips2'),
              this.$t('business.type1.serviceSectionList.item2.tips3'),
              this.$t('business.type1.serviceSectionList.item2.tips4'),
            ],
            img: Bg_2,
            position: 'right',
            // hiddenIcon: true,
            hiddenBtn: true,
          },
          {
            id: 3,
            title: this.$t('business.type1.serviceSectionList.item3.title'),
            desc: this.$t('business.type1.serviceSectionList.item3.desc'),
            tips: [
              this.$t('business.type1.serviceSectionList.item3.tips1'),
              this.$t('business.type1.serviceSectionList.item3.tips2'),
              this.$t('business.type1.serviceSectionList.item3.tips3'),
              this.$t('business.type1.serviceSectionList.item3.tips4'),
              this.$t('business.type1.serviceSectionList.item3.tips5'),
              this.$t('business.type1.serviceSectionList.item3.tips6'),
            ],
            img: Bg_4,
            position: 'left',
            // hiddenIcon: true,
            hiddenBtn: true,
          },
          {
            id: 4,
            title: this.$t('business.type1.serviceSectionList.item4.title'),
            desc: this.$t('business.type1.serviceSectionList.item4.desc'),
            tips: [
              this.$t('business.type1.serviceSectionList.item4.tips1'),
              this.$t('business.type1.serviceSectionList.item4.tips2'),
              this.$t('business.type1.serviceSectionList.item4.tips3'),
              this.$t('business.type1.serviceSectionList.item4.tips4'),
              this.$t('business.type1.serviceSectionList.item4.tips5'),
              this.$t('business.type1.serviceSectionList.item4.tips6'),
            ],
            img: Bg_3,
            position: 'right',
            // hiddenIcon: true,
            hiddenBtn: true,
            // emailLink: 'https://sea-itsoft.com/wp-content/uploads/2021/11/Sea-rireki.xlsx',
            recruit: false,
          },
        ];
      },
    },
    watch: {},
    mounted() {},
    methods: {},
  };
</script>
<style lang="stylus" scoped></style>
