<template>
  <div>
    <SecondaryBanner :meta="meta" />
    <div id="single-page" class="container type2">
      <div
        id="companydetails"
        class="vc_row wpb_row vc_row-fluid vc_custom_1650501003908"
      >
        <div class="wpb_column vc_column_container vc_col-sm-12">
          <div class="vc_column-inner">
            <div class="wpb_wrapper">
              <div class="wpb_text_column wpb_content_element">
                <div class="wpb_wrapper">
                  <h3>
                    {{ observerCompanyDetails.title }}
                  </h3>
                  <table style="width: 100%">
                    <tbody>
                      <tr
                        v-for="(i, index) in observerCompanyDetails.data"
                        :key="index"
                      >
                        <th>{{ i.title }}</th>
                        <td v-if="!i.flag">
                          <p v-for="(p, index1) in i.desc" :key="index1">
                            {{ p }}
                          </p>
                          <ul>
                            <li
                              v-for="(l, index) in i.list"
                              class="iconfont icon-duigou"
                              :key="index"
                            >
                              {{ l }}
                              <a
                                v-if="
                                  l.includes(
                                    '履歴書テンプレートをご入力いただき、上記宛までお送りください。',
                                  ) ||
                                  l.includes(
                                    '请填写简历模板并发送至上述邮箱地址。',
                                  ) ||
                                  l.includes(
                                    'Fill out the resume template and send it to the email address above.',
                                  )
                                "
                                href="https://sea-itsoft.com/wp-content/uploads/2021/11/Sea-rireki.xlsx"
                                target="_blank"
                                rel="noopener"
                                class="textlink"
                                >{{ $t('about.type2.info.tex23') }}</a
                              >
                            </li>
                          </ul>
                        </td>
                        <td v-if="i.flag">
                          <div class="mbottom-20" v-for="content in i.data">
                            <h4>{{ content.title }}</h4>
                            <p v-for="p in content.desc">
                              {{ p }}
                            </p>
                            <ul>
                              <li
                                v-for="(list, index) in content.list"
                                class="iconfont icon-duigou"
                              >
                                {{ list }}
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
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

  export default {
    head() {
      return {
        title: this.$t('about.type2.title') + '|' + this.$t('SITE_ROOT_TITLE'),
        meta: [
          {
            hid: 'description',
            name: 'description',
            content:
              this.$t('about.type2.title') + '|' + this.$t('SITE_ROOT_TITLE'),
          },
        ],
      };
    },
    name: 'ComponentsAboutType2',
    components: {},
    mixins: [],
    props: {
      observerCompanyDetails: {
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
          title: this.$t('about.type2.title'),
          path: this.$route.path,
        };
      },
    },
    watch: {},
    mounted() {},
    methods: {},
  };
</script>
<style lang="stylus" scoped>
  .about
    .vc_custom_1545322058397
      padding-bottom:0 !important
    h3
      text-align: center
    p
      margin-bottom: 5px !important
    .type2
      padding:0 15px !important
  .vc_custom_1650501003908
    margin-top: 50px !important
  .mbottom-20
    margin-bottom: 20px
</style>
