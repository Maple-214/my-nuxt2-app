<template>
  <div id="">
    <SecondaryBanner :meta="meta" />
    <div id="single-page" class="container">
      <SectionMain
        :serviceList="serviceList"
        :serviceSectionList="serviceSectionList"
      />
      <div
        id="companydetails"
        class="vc_row wpb_row vc_row-fluid vc_custom_1650501003908"
      >
        <div class="wpb_column vc_column_container vc_col-sm-12">
          <div class="vc_column-inner">
            <div class="wpb_wrapper">
              <div class="wpb_text_column wpb_content_element">
                <div class="wpb_wrapper">
                  <h3>{{ $t('about.type1.adress.title') }}</h3>
                  <table style="width: 100%">
                    <tbody>
                      <tr>
                        <th>{{ $t('about.type1.adress.tex1') }}</th>
                        <td>{{ observerCompanyDetails.companyName }}</td>
                      </tr>
                      <tr>
                        <th>{{ $t('about.type1.adress.tex3') }}</th>
                        <td>
                          {{ observerCompanyDetails.location }}
                          <p></p>
                          <figure>
                            <!-- <iframe
                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3249.0113876072032!2d139.63683267604188!3d35.4792620726532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60185c254e0e968d%3A0x4898316fe26cf573!2z44CSMjIxLTAwNDMg56We5aWI5bed55yM5qiq5rWc5biC56We5aWI5bed5Yy65paw55S677yV4oiS77yUIOODqeOCpOOCquODs-OCuuODnuODs-OCt-ODp-ODs-elnuWliOW3neaWsOeUuuesrO-8kiAwMTAy!5e0!3m2!1sja!2sjp!4v1703082783236!5m2!1sja!2sjp"
                              height="450"
                              style="border: 0; width: 100%"
                              allowfullscreen=""
                              loading="lazy"
                              referrerpolicy="no-referrer-when-downgrade"
                            ></iframe> -->
                            <img
                              class="map"
                              @click="searchGoogle"
                              style="height: 450px"
                              :src="HOST + '/images/about/map.jpg'"
                              alt=""
                            />
                          </figure>
                          <!-- <ul>
                            <li class="iconfont icon-duigou">
                              {{ $t('about.type1.adress.tex5') }}
                            </li>
                            <li class="iconfont icon-duigou">
                              {{ $t('about.type1.adress.tex6') }}
                            </li>
                          </ul> -->
                        </td>
                      </tr>
                      <tr>
                        <th>{{ $t('about.type1.adress.tex7') }}</th>
                        <td>{{ observerCompanyDetails.telephone }}</td>
                      </tr>
                      <tr>
                        <th>E-mail</th>
                        <td>{{ observerCompanyDetails.email }}</td>
                      </tr>
                      <tr>
                        <th>{{ $t('about.type1.adress.tex14') }}</th>
                        <td>5,000,000円</td>
                      </tr>
                      <tr>
                        <th>{{ $t('about.type1.adress.tex8') }}</th>
                        <td>
                          {{ observerCompanyDetails.representativeDirector }}
                        </td>
                      </tr>
                      <tr>
                        <th>{{ $t('about.type1.adress.tex10') }}</th>
                        <td>{{ observerCompanyDetails.setUp }}</td>
                      </tr>
                      <tr>
                        <th>{{ $t('about.type1.adress.tex11') }}</th>
                        <td>
                          <ul>
                            <li
                              v-for="(
                                item, index
                              ) in observerCompanyDetails.businessContent"
                              :key="index"
                              class="iconfont icon-duigou"
                            >
                              {{ item }}
                            </li>
                          </ul>
                        </td>
                      </tr>
                      <!-- <tr>
                        <th>{{ $t('about.type1.adress.tex12') }}</th>
                        <td>{{ $t('about.type1.adress.tex13') }}</td>
                      </tr> -->
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import SecondaryBanner from '../SecondaryBanner/SecondaryBanner.vue';
  import SectionMain from '~/components/SectionMain/SectionMain.vue';
  import { HOST } from '~/config/index';
  import Bg_1 from '~/assets/images/about/about_01.jpg';
  import Bg_2 from '~/assets/images/about/about_02.jpg';
  import Bg_3 from '~/assets/images/about/about_03.jpg';
  import Bg_4 from '~/assets/images/about/about_04.jpg';

  export default {
    head() {
      return {
        title: this.$t('about.type1.title') + '|' + this.$t('SITE_ROOT_TITLE'),
        meta: [
          {
            hid: 'description',
            name: 'description',
            content:
              this.$t('about.type1.title') + '|' + this.$t('SITE_ROOT_TITLE'),
          },
        ],
      };
    },
    name: 'ComponentsAboutType1',
    components: {},
    mixins: [],
    props: {
      observerCompanyDetails: {
        type: Object,
        required: true,
      },
    },
    data() {
      return {
        HOST,
      };
    },
    computed: {
      meta() {
        return {
          title: this.$t('about.type1.title'),
          path: this.$route.path,
        };
      },
      serviceList() {
        return [
          {
            id: 1,
            icon: 'icon-qiyeyuanjing',
            title: this.$t('about.type1.serviceList.item1.title'),
          },
          {
            id: 2,
            icon: 'icon-mengxiangjihua',
            title: this.$t('about.type1.serviceList.item2.title'),
          },
          {
            id: 3,
            icon: 'icon-Dataservices',
            title: this.$t('about.type1.serviceList.item3.title'),
          },
          {
            id: 4,
            icon: 'icon-renshiguanli-zhaopinguanli',
            title: this.$t('about.type1.serviceList.item4.title'),
          },
        ];
      },
      serviceSectionList() {
        return [
          {
            id: 1,
            title: this.$t('about.type1.serviceSectionList.item1.title'),
            desc: this.$t('about.type1.serviceSectionList.item1.desc'),
            tips: [
              this.$t('about.type1.serviceSectionList.item1.tips1'),
              this.$t('about.type1.serviceSectionList.item1.tips2'),
              this.$t('about.type1.serviceSectionList.item1.tips3'),
            ],
            img: Bg_1,
            position: 'left',
            hiddenIcon: true,
            hiddenBtn: true,
          },
          {
            id: 2,
            title: this.$t('about.type1.serviceSectionList.item2.title'),
            desc: this.$t('about.type1.serviceSectionList.item2.desc'),
            tips: [
              this.$t('about.type1.serviceSectionList.item2.tips1'),
              this.$t('about.type1.serviceSectionList.item2.tips2'),
              this.$t('about.type1.serviceSectionList.item2.tips3'),
            ],
            img: Bg_2,
            position: 'right',
            hiddenIcon: true,
            hiddenBtn: true,
          },
          {
            id: 3,
            title: this.$t('about.type1.serviceSectionList.item3.title'),
            desc: this.$t('about.type1.serviceSectionList.item3.desc'),
            tips: [
              this.$t('about.type1.serviceSectionList.item3.tips1'),
              this.$t('about.type1.serviceSectionList.item3.tips2'),
            ],
            img: Bg_4,
            position: 'left',
            hiddenIcon: true,
            hiddenBtn: true,
          },
          {
            id: 4,
            title: this.$t('about.type1.serviceSectionList.item4.title'),
            desc: this.$t('about.type1.serviceSectionList.item4.desc'),
            tips: [
              this.$t('about.type1.serviceSectionList.item4.tips1'),
              this.$t('about.type1.serviceSectionList.item4.tips2'),
              this.$t('about.type1.serviceSectionList.item4.tips3'),
              this.$t('about.type1.serviceSectionList.item4.tips4'),
              this.$t('about.type1.serviceSectionList.item4.tips5'),
              this.$t('about.type1.serviceSectionList.item4.tips6'),
            ],
            img: Bg_3,
            position: 'right',
            hiddenIcon: true,
            hiddenBtn: true,
            // emailLink: 'https://sea-itsoft.com/wp-content/uploads/2021/11/Sea-rireki.xlsx',
            recruit: true,
            recruit_tex: this.$t(
              'about.type1.serviceSectionList.item4.recruit_tex',
            ),
          },
        ];
      },
      supportList() {
        return [
          this.$t('about.type1.supportList.tex1'),
          this.$t('about.type1.supportList.tex2'),
          this.$t('about.type1.supportList.tex3'),
          this.$t('about.type1.supportList.tex4'),
        ];
      },
    },
    watch: {},
    mounted() {},
    methods: {
      searchGoogle() {
        const address = encodeURIComponent(
          this.observerCompanyDetails.location,
        );
        const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${address}`;

        // 打开新窗口并访问谷歌地图搜索页面
        window.open(googleMapsUrl, '_blank');
      },
    },
  };
</script>
<style lang="stylus" scoped>
  .about
    .vc_custom_1545322058397
      padding-bottom:0 !important
    .vc_custom_1650501003908
      margin-top: 50px !important
    h3
      text-align: center
    .map
      cursor: pointer
</style>
