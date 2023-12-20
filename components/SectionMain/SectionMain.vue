<template>
  <div
    class="vc_row wpb_row vc_row-fluid vc_custom_1545322058397 vc_row-has-padding-bottom"
  >
    <div class="wpb_column vc_column_container vc_col-sm-12">
      <div class="vc_column-inner">
        <div class="wpb_wrapper">
          <div ref="featureSectionsWrapper" class="feature-sections-wrapper">
            <section
              v-if="serviceList.length > 0"
              class="feature-sections-tabs"
            >
              <nav class="kd-feature-tabs">
                <ul class="nav nav-tabs sticky-tabs container">
                  <li
                    v-for="(item, index) in serviceList"
                    :key="item.id"
                    class="nav-label"
                    ref="oli"
                  >
                    <nuxt-link
                      class="feature-tabs-scroll"
                      to=""
                      exact
                      @click.native.prevent="scrollToSection(item.id)"
                    >
                      <i
                        class="iconfont fss-nav-icon"
                        :class="item.icon"
                        style="font-size: 36px"
                      ></i>
                      {{ item.title }}
                    </nuxt-link>
                  </li>
                </ul>
              </nav>
            </section>
            <ServiceSection
              v-for="(item, index) in serviceSectionList"
              :key="item.id"
              :item="item"
            >
              <template #cc2>
                <slot name="c2"></slot>
              </template>
              <template #cc3>
                <slot name="c3"></slot>
              </template>
            </ServiceSection>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import ServiceSection from '~/components/ServiceSection/ServiceSection.vue';
  export default {
    name: '',
    components: {
      ServiceSection,
    },
    mixins: [],
    props: {
      serviceList: {
        type: Array,
        required: true,
      },
      serviceSectionList: {
        type: Array,
        required: true,
      },
    },
    data() {
      return {
        pageWidth: null,
      };
    },
    computed: {},
    watch: {},
    mounted() {
      this.initPageWidth();
      window.addEventListener('scroll', this.scrollActive);
      window.addEventListener('resize', this.scrollActive);
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.scrollActive);
      window.removeEventListener('resize', this.scrollActive);
    },
    methods: {
      scrollActive() {
        // 获取当前滚动位置
        this.initPageWidth();
        const scrollPosition = window.scrollY;
        if (this.$refs.oli) {
          this.$refs.oli.forEach((link, index) => {
            // 对应下面的section
            const targetId = '#serviceSection' + (index + 1);
            const targetElement = $(targetId);
            // 判断当前导航元素是否在可视范围内
            if (this.pageWidth > 1024) {
              if (
                targetElement &&
                scrollPosition >= targetElement.offset().top - 190 &&
                scrollPosition <
                  targetElement.offset().top + targetElement.outerHeight(true)
              ) {
                // 移除其他导航元素的 active 样式
                this.$refs.oli.forEach((otherLink, otherIndex) => {
                  if (otherIndex !== index) {
                    otherLink.classList.remove('active');
                  }
                });

                // 为当前导航元素添加 active 样式
                link.classList.add('active');
              }
            } else {
              this.$refs.oli.forEach((otherLink, otherIndex) => {
                otherLink.classList.remove('active');
              });
            }
          });
        }

        // 遍历导航元素，判断哪个元素应该激活
      },
      initPageWidth() {
        if (process.client) {
          // 在客户端运行时才获取窗口宽度
          this.pageWidth = window.innerWidth;
        }
      },
      scrollToSection(sectionId) {
        const targetId = 'serviceSection' + sectionId;
        const targetElement = $(`#${targetId}`);
        if (targetElement) {
          $('html, body')
            .stop()
            .animate(
              {
                scrollTop: targetElement.offset().top - 176,
              },
              1000,
              'swing',
            );
        }
      },
    },
  };
</script>
<style lang="stylus" scoped>
  .vc_custom_1545322058397
    padding-bottom: 100px !important;
</style>
