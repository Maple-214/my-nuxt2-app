<template>
  <div id="">
    <SecondaryBanner :meta="meta" />
    <div id="primary" class="content-area">
      <main id="main" class="site-main" role="main">
        <section id="single-page" class="section medical-1" style="">
          <div class="container">
            <div class="row single-page-content">
              <div class="vc_row wpb_row vc_row-fluid">
                <div class="wpb_column vc_column_container vc_col-sm-12">
                  <div class="vc_column-inner">
                    <div class="wpb_wrapper">
                      <div class="wpb_text_column wpb_content_element">
                        <div class="wpb_wrapper">
                          <h4 style="text-align: left">
                            {{ $t('business.type3.main.title1') }}
                          </h4>
                          <h4 style="text-align: left">
                            {{ $t('business.type3.main.title2') }}
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-vc-full-width="true"
                data-vc-full-width-init="true"
                class="vc_row wpb_row vc_row-fluid vc_custom_1652338265654 vc_row-has-padding-top"
              >
                <div class="wpb_column vc_column_container vc_col-sm-12">
                  <div class="vc_column-inner vc_custom_1515686761275">
                    <div class="wpb_wrapper">
                      <div class="vc_row wpb_row vc_inner vc_row-fluid">
                        <div
                          class="wpb_column vc_column_container vc_col-sm-12"
                        >
                          <div class="vc_column-inner">
                            <div class="wpb_wrapper">
                              <header
                                class="kd-section-title vc_col-lg-6 vc_col-sm-8 text-center solid-line sep-border-width-2 kd-animated fadeIn vc_custom_1652340325427 kd-animate"
                                data-animation-delay="200"
                              >
                                <h2 class="separator_on">
                                  {{ $t('business.service_overview') }}
                                </h2>
                                <div class="kd-separator below_title">
                                  <div class="kd-separator-line"></div>
                                </div>
                                <h6 class="subtitle">
                                  {{ $t('business.type3.subtitle') }}
                                </h6>
                              </header>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="vc_row wpb_row vc_inner vc_row-fluid vc_custom_1586285995816"
                      >
                        <!--  -->
                        <div
                          v-for="item in serviceList"
                          :key="item.id"
                          class="wpb_column vc_column_container auto-height vc_col-sm-3"
                        >
                          <div class="vc_column-inner vc_custom_1586286016899">
                            <div class="wpb_wrapper">
                              <div class="kd-photobox">
                                <div class="photobox-img">
                                  <img
                                    decoding="async"
                                    width="500"
                                    height="334"
                                    src="https://tokyo-happiness.net/wp-content/uploads/2022/04/shutterstock_1895123119-1.jpg"
                                    class="attachment-full"
                                    alt=""
                                    title="African,American,Businessman,Gesturing,During,Discussion,With,Smiling,Multicultural,Business"
                                    srcset="
                                      https://tokyo-happiness.net/wp-content/uploads/2022/04/shutterstock_1895123119-1.jpg         500w,
                                      https://tokyo-happiness.net/wp-content/uploads/2022/04/shutterstock_1895123119-1-300x200.jpg 300w
                                    "
                                    sizes="(max-width: 500px) 100vw, 500px"
                                  />
                                </div>
                                <div
                                  ref="phbContent"
                                  class="phb-content text-left"
                                >
                                  <h5>{{ item.title }}</h5>
                                  <p>{{ item.description }}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <!--  -->
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="vc_row-full-width vc_clearfix"></div>
              <div
                data-vc-full-width="true"
                data-vc-full-width-init="true"
                class="vc_row wpb_row vc_row-fluid vc_custom_1650282001374 vc_row-has-padding-top vc_row-has-padding-bottom"
              >
                <div class="wpb_column vc_column_container vc_col-sm-12">
                  <div class="vc_column-inner vc_custom_1516009024901">
                    <div class="wpb_wrapper">
                      <header
                        class="kd-section-title vc_col-lg-6 vc_col-sm-8 text-center solid-line sep-border-width-2 kd-animated fadeIn vc_custom_1650270743883 kd-animate"
                        data-animation-delay="200"
                      >
                        <h2 class="separator_on">
                          {{ $t('business.service_overview') }}
                        </h2>
                        <div class="kd-separator below_title">
                          <div class="kd-separator-line"></div>
                        </div>
                      </header>
                      <div
                        class="vc_row wpb_row vc_inner vc_row-fluid vc_custom_1650279885708 vc_row-has-padding-top vc_row-has-padding-bottom"
                      >
                        <div
                          v-for="item in strengthsList"
                          :key="item.id"
                          class="wpb_column auto-height vc_column_container vc_col-sm-4"
                        >
                          <div class="vc_column-inner vc_custom_1516009006170">
                            <div class="wpb_wrapper">
                              <div
                                class="key-icon-box icon-default icon-top cont-center ib-hover-1 kd-animated fadeInUp kd-animate"
                                style="background-color: transparent"
                              >
                                <div ref="strengthsItems" class="ib-wrapper">
                                  <i
                                    class="iconfont"
                                    :class="item.icon"
                                    style=""
                                  ></i>
                                  <h5 class="service-heading">
                                    {{ item.tex }}
                                  </h5>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="vc_row-full-width vc_clearfix"></div>
              <div
                data-vc-full-width="true"
                data-vc-full-width-init="true"
                data-vc-stretch-content="true"
                class="vc_row wpb_row vc_row-fluid vc_custom_1539594909573 vc_row-has-fill vc_row-no-padding"
              >
                <div
                  class="wpb_column vc_column_container vc_col-sm-6 vc_col-lg-6 vc_col-md-12"
                >
                  <div class="vc_column-inner vc_custom_1522315111993">
                    <div class="wpb_wrapper">
                      <div
                        class="vc_row wpb_row vc_inner vc_row-fluid vc_custom_1650505823182 vc_row-has-fill vc_row-has-padding-top vc_row-has-padding-bottom"
                      >
                        <div
                          class="wpb_column vc_column_container vc_col-sm-12"
                        >
                          <div class="vc_column-inner vc_custom_1511789291663">
                            <div class="wpb_wrapper">
                              <div class="vc_empty_space" style="height: 200px">
                                <span class="vc_empty_space_inner"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="wpb_column vc_column_container vc_col-sm-6 vc_col-lg-6 vc_col-md-12"
                >
                  <div class="vc_column-inner">
                    <div class="wpb_wrapper">
                      <div
                        class="vc_row wpb_row vc_inner vc_row-fluid vc_custom_1539595123771 vc_row-has-padding-top"
                      >
                        <div
                          class="wpb_column vc_column_container vc_col-sm-1 vc_hidden-xs"
                        >
                          <div class="vc_column-inner hide-on-mobile">
                            <div class="wpb_wrapper"></div>
                          </div>
                        </div>
                        <div
                          class="wpb_column vc_column_container vc_col-sm-10"
                        >
                          <div class="vc_column-inner vc_custom_1522315135741">
                            <div class="wpb_wrapper">
                              <header
                                class="kd-section-title col-lg-12 text-left solid-line sep-border-width-2 kd-animated fadeIn kd-animate"
                                data-animation-delay="200"
                              >
                                <h2 class="separator_on">
                                  {{ $t('business.type3.btmSection.title') }}
                                </h2>
                                <div class="kd-separator below_title">
                                  <div class="kd-separator-line"></div>
                                </div>
                              </header>
                              <div class="wpb_text_column wpb_content_element">
                                <div class="wpb_wrapper">
                                  <p>
                                    {{ $t('business.type3.btmSection.tex1') }}
                                  </p>
                                  <p>
                                    {{ $t('business.type3.btmSection.tex2') }}
                                  </p>
                                </div>
                              </div>
                              <div class="vc_empty_space" style="height: 20px">
                                <span class="vc_empty_space_inner"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="wpb_column vc_column_container vc_col-sm-1">
                          <div class="vc_column-inner hide-on-mobile">
                            <div class="wpb_wrapper"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="vc_row-full-width vc_clearfix"></div>
            </div>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>
<script>
  import SecondaryBanner from '../SecondaryBanner/SecondaryBanner.vue';

  export default {
    head() {
      return {
        title:
          this.$t('business.type3_tile') + '|' + this.$t('SITE_ROOT_TITLE'),
        meta: [
          {
            hid: 'description',
            name: 'description',
            content:
              this.$t('business.type3_tile') + '|' + this.$t('SITE_ROOT_TITLE'),
          },
        ],
      };
    },
    name: 'ComponentsAboutType3',
    components: {},
    mixins: [],
    props: {
      SecondaryBanner,
    },
    data() {
      return {};
    },
    computed: {
      meta() {
        return {
          title: this.$t('business.type3_tile'),
          path: this.$route.path,
        };
      },
      serviceList() {
        return [
          {
            id: 1,
            title: this.$t('business.type3.serviceList.item1.title'),
            description: this.$t(
              'business.type3.serviceList.item1.description',
            ),
          },
          {
            id: 2,
            title: this.$t('business.type3.serviceList.item2.title'),
            description: this.$t(
              'business.type3.serviceList.item2.description',
            ),
          },
          {
            id: 3,
            title: this.$t('business.type3.serviceList.item3.title'),
            description: this.$t(
              'business.type3.serviceList.item3.description',
            ),
          },
          {
            id: 4,
            title: this.$t('business.type3.serviceList.item4.title'),
            description: this.$t('business.type3.serviceList.item4.description'),
          },
        ];
      },
      strengthsList() {
        return [
          {
            id: 1,
            tex: this.$t('business.type3.strengthsList.item1.tex'),
            icon: 'icon-woshou',
          },
          {
            id: 2,
            tex: this.$t('business.type3.strengthsList.item2.tex'),
            icon: 'icon-mengxiangjihua',
          },
          {
            id: 3,
            tex: this.$t('business.type3.strengthsList.item3.tex'),
            icon: 'icon-earth',
          },
        ];
      },
    },
    watch: {},
    mounted() {
      this.$nextTick(() => {
        this.handleResize(); // 执行一次以确保初始渲染时的样式
        this.setEqualHeight(this.$refs.phbContent, this.$refs.strengthsItems);
        window.addEventListener('resize', this.handleResize);
      });
    },
    beforeDestroy() {
      // 在组件销毁前执行的代码，以防止内存泄漏
      window.removeEventListener('resize', this.handleResize);
    },
    methods: {
      handleResize() {
        // 处理 resize 事件的逻辑
        this.$fullWidthRowHandler();
        this.setEqualHeight(this.$refs.phbContent, this.$refs.strengthsItems);
      },
      setEqualHeight(...arg) {
        arg.forEach((elements) => {
          elements.forEach((el) => {
            el.style.height = 'auto';
          });
          const columnHeights = Array.from(elements).reduce((acc, el) => {
            const columnIndex = el
              .closest('.auto-height')
              .getAttribute('data-index');
            acc[columnIndex] = Math.max(el.offsetHeight, acc[columnIndex] || 0);
            return acc;
          }, {});
          elements.forEach((el) => {
            const columnIndex = el
              .closest('.auto-height')
              .getAttribute('data-index');
            el.style.height = `${columnHeights[columnIndex]}px`;
          });
        });
      },
    },
  };
</script>
<style lang="stylus" scoped>
  .phb-content
    transition: height 0.3s;
  .vc_custom_1652338265654
    padding-top: 50px !important

  .vc_custom_1650282001374
    padding-top: 50px !important
    padding-bottom: 50px !important

  .vc_custom_1539594909573
    background-color: #f5f5f5 !important

  .vc_custom_1515686761275
    padding-right: 0px !important
    padding-left: 0px !important

  .vc_custom_1586285995816
    margin-bottom: 30px !important

  .vc_custom_1652340325427
    margin-bottom: 60px !important

  .vc_custom_1586286000110
    padding-right: 0px !important
    padding-left: 0px !important

  .vc_custom_1586286012881
    padding-right: 0px !important
    padding-left: 0px !important

  .vc_custom_1586286016899
    padding-right: 0px !important
    padding-left: 0px !important

  .vc_custom_1586286254328
    padding-right: 0px !important
    padding-left: 0px !important

  .vc_custom_1586286000110
    padding-right: 0px !important
    padding-left: 0px !important

  .vc_custom_1516009024901
    padding-right: 0px !important
    padding-left: 0px !important

  .vc_custom_1650270743883
    margin-bottom: 0px !important
    padding-top: 30px !important

  .vc_custom_1650279885708
    padding-top: 0px !important
    padding-bottom: 0px !important

  .vc_custom_1516009006170
    padding-right: 0px !important
    padding-left: 0px !important

  .vc_custom_1516009012538
    padding-right: 0px !important
    padding-left: 0px !important

  .vc_custom_1516009018730
    padding-right: 0px !important
    padding-left: 0px !important

  .vc_custom_1522315111993
    padding-top: 0px !important

  .vc_custom_1650505823182
    padding-top: 200px !important
    padding-bottom: 200px !important
    background-image: url(https://img.freepik.com/free-photo/doctor-with-stethoscope-hands-hospital-background_1423-1.jpg?size=626&ext=jpg&uid=R116380372&ga=GA1.2.1174743762.1702278788&semt=sph) !important
    background-position: center !important
    background-repeat: no-repeat !important
    background-size: cover !important

  .vc_custom_1511789291663
    padding-top: 0px !important
    padding-bottom: 0px !important

  .vc_custom_1539595123771
    padding-top: 150px !important

  .vc_custom_1522315135741
    padding-bottom: 50px !important
</style>
