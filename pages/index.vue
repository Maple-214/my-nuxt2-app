<!-- pages/index.vue -->

<template>
  <div id="wrapper" class="hide-title-section btn-hover-2">
    <div id="primary" class="content-area">
      <main id="main" class="site-main">
        <section id="home-1" class="section">
          <div class="container">
            <div class="row">
              <Banner />
              <ClearFix />
              <SectionTitle />
              <ClearFix />
              <SectionMain
                :serviceList="serviceList"
                :serviceSectionList="serviceSectionList"
              />
              <ClearFix />
              <NewSection />
              <ClearFix />
            </div>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>

<script>
  import Banner from '~/components/Banner/Banner.vue';
  import ClearFix from '~/components/ClearFix/ClearFix.vue';
  import SectionTitle from '~/components/SectionTitle/SectionTitle.vue';
  import SectionMain from '~/components/SectionMain/SectionMain.vue';
  import NewSection from '~/components/NewSection/NewSection.vue';

  import Bg_1 from '~/assets/images/home/01.jpg';

  export default {
    head() {
      return {
        title: this.$t('SITE_ROOT_TITLE'),
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: this.$t('SITE_ROOT_TITLE'),
          },
        ],
      };
    },
    name: 'PageIndex',
    components: {
      Banner,
      ClearFix,
      SectionTitle,
      SectionMain,
      NewSection,
    },
    data() {
      return {};
    },

    mounted() {
      this.$nextTick(() => {
        this.handleResize(); // 执行一次以确保初始渲染时的样式
        this.initStickySection();
        window.addEventListener('resize', this.handleResize);
      });
    },
    beforeDestroy() {
      // 在组件销毁前执行的代码，以防止内存泄漏
      window.removeEventListener('resize', this.handleResize);
    },
    methods: {
      initStickySection() {
        if ($('.feature-sections-wrapper').length > 0) {
          var adminbar_offset = 0;
          if ($('#wpadminbar').length > 0) {
            adminbar_offset = 32;
          }
          if ($('.navbar-default.with-topbar-sticky').length > 0) {
            var sticky_offset = $(
              '.navbar-default.with-topbar-sticky',
            ).outerHeight();
            if ($('.navbar-default').hasClass('fixed-menu')) {
              sticky_offset = 0;
            }
            $('.feature-sections-tabs').css(
              'top',
              sticky_offset + adminbar_offset,
            );
          } else {
            var sticky_offset = $(
              '.navbar.navbar-default .menubar',
            ).outerHeight();
            if ($('.navbar-default').hasClass('fixed-menu')) {
              sticky_offset = 0;
            }
            $('.feature-sections-tabs').css(
              'top',
              sticky_offset + adminbar_offset,
            );
          }
          $('.feature-sections-wrapper').each(function () {
            $('li.nav-label', this).appendTo($('.sticky-tabs', this));
          });
          var feature_container = $('.feature-sections-wrapper');
          var feature_nav = $('.feature-sections-tabs');
          var offset = feature_container.offset().top;
          $(window).scroll(function (event) {
            var scroll = $(window).scrollTop();
            var total = feature_container.height() + offset - 200;
            if (scroll > total) {
              feature_nav.addClass('sticky-hide');
            }
            if (scroll < total) {
              feature_nav.removeClass('sticky-hide');
            }
          });
        }
      },
      handleResize() {
        // 处理 resize 事件的逻辑
        this.$fullWidthRowHandler();
        this.initStickySection();
      },
    },
    computed: {
      serviceList() {
        return [
          {
            id: 1,
            icon: 'icon-gongchengfenxi',
            title: this.$t('home.serviceList.item1.title'),
          },
          {
            id: 2,
            icon: 'icon-shouye',
            title: this.$t('home.serviceList.item2.title'),
          },
          {
            id: 3,
            icon: 'icon-inshealtyhosp',
            title: this.$t('home.serviceList.item3.title'),
          },
          {
            id: 4,
            icon: 'icon-lvhang',
            title: this.$t('home.serviceList.item4.title'),
          },
        ];
      },
      serviceSectionList() {
        return [
          {
            id: 1,
            title: this.$t('home.serviceSectionList.item1.title'),
            desc: this.$t('home.serviceSectionList.item1.desc'),
            tips: [
              this.$t('home.serviceSectionList.item1.tips1'),
              this.$t('home.serviceSectionList.item1.tips2'),
              this.$t('home.serviceSectionList.item1.tips3'),
              this.$t('home.serviceSectionList.item1.tips4'),
            ],
            // img: Bg_1,
            img: 'https://img.freepik.com/premium-photo/property-management-real-estate-business-housing_777271-2538.jpg?size=626&ext=jpg&uid=R116380372&ga=GA1.2.1174743762.1702278788&semt=sph',
            position: 'left',
            path: '/business/type1',
          },
          {
            id: 2,
            title: this.$t('home.serviceSectionList.item2.title'),
            desc: this.$t('home.serviceSectionList.item2.desc'),
            tips: [
              this.$t('home.serviceSectionList.item2.tips1'),
              this.$t('home.serviceSectionList.item2.tips2'),
            ],
            // img: Bg_1,
            img: 'https://img.freepik.com/premium-photo/real-estate-agent-success-job-tranfer-finished-building-project-home-buyer_36650-137.jpg?size=626&ext=jpg&uid=R116380372&ga=GA1.2.1174743762.1702278788&semt=sph',
            position: 'right',
            path: '/business/type2',
          },
          {
            id: 3,
            title: this.$t('home.serviceSectionList.item3.title'),
            desc: this.$t('home.serviceSectionList.item3.desc'),
            tips: [
              this.$t('home.serviceSectionList.item3.tips1'),
              this.$t('home.serviceSectionList.item3.tips2'),
              this.$t('home.serviceSectionList.item3.tips3'),
            ],
            // img: 'https://t4.ftcdn.net/jpg/00/68/82/11/240_F_68821109_I26KMVHzv1zm1fpCQBrRepaHOZABZILh.jpg',
            img: 'https://img.freepik.com/free-photo/doctors-hands-holding-medical-care-objects_53876-138344.jpg?size=626&ext=jpg&uid=R116380372&ga=GA1.2.1174743762.1702278788&semt=sph',
            position: 'left',
            path: '/business/type3',
          },
          {
            id: 4,
            title: this.$t('home.serviceSectionList.item4.title'),
            desc: this.$t('home.serviceSectionList.item4.desc'),
            tips: [
              this.$t('home.serviceSectionList.item4.tips1'),
              this.$t('home.serviceSectionList.item4.tips2'),
              this.$t('home.serviceSectionList.item4.tips3'),
            ],
            img: 'https://img.freepik.com/premium-photo/tourism-vacation-concept_670147-8749.jpg?size=626&ext=jpg&uid=R116380372&ga=GA1.2.1174743762.1702278788&semt=sph',
            position: 'right',
            path: '/business/type4',
          },
        ];
      },
    },
  };
</script>
<style lang="stylus" scoped></style>
