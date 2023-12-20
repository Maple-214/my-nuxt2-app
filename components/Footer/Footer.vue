<template>
  <footer id="footer" class="classic underline-effect">
    <div class="upper-footer">
      <div class="container">
        <div class="footer-bar">
          <div class="footer-socials-bar">
            <ul class="redux-social-media-list clearfix">
              <li style="list-style: none">
                <a
                  rel="noreferrer noopener"
                  target="_blank"
                  href="https://www.facebook.com/tokyohappiness"
                  >
                  <!-- <i class="fab fa-facebook-square" title=""></i> -->
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="footer-widget-area">
          <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 first-widget-area">
            <div id="nav_menu-4" class="footer_widget widget widget_nav_menu">
              <h5 class="widget-title"><span>About</span></h5>
              <div
                class="menu-%e4%bc%9a%e7%a4%be%e6%83%85%e5%a0%b1%ef%bc%88%e6%97%a5%ef%bc%89-container"
              >
                <ul
                  id="menu-%e4%bc%9a%e7%a4%be%e6%83%85%e5%a0%b1%ef%bc%88%e6%97%a5%ef%bc%89"
                  class="menu"
                >
                  <li
                    v-for="s in AboutList"
                    :key="s.id"
                    id="menu-item-7605"
                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-7605"
                  >
                    <nuxt-link :to="s.path">{{ s.title }}</nuxt-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 second-widget-area">
            <div id="nav_menu-3" class="footer_widget widget widget_nav_menu">
              <h5 class="widget-title"><span>Service</span></h5>
              <div
                class="menu-%e3%82%b5%e3%83%bc%e3%83%93%e3%82%b9%e4%b8%80%e8%a6%a7%ef%bc%88%e6%97%a5%ef%bc%89-container"
              >
                <ul
                  id="menu-%e3%82%b5%e3%83%bc%e3%83%93%e3%82%b9%e4%b8%80%e8%a6%a7%ef%bc%88%e6%97%a5%ef%bc%89"
                  class="menu"
                >
                  <li
                    v-for="s in ServiceList"
                    :key="s.id"
                    id="menu-item-7605"
                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-7605"
                  >
                    <nuxt-link :to="s.path">{{ s.title }}</nuxt-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 third-widget-area">
            <div id="nav_menu-5" class="footer_widget widget widget_nav_menu">
              <h5 class="widget-title"><span>Contact</span></h5>
              <div
                class="menu-%e3%81%8a%e5%95%8f%e3%81%84%e5%90%88%e3%82%8f%e3%81%9b%ef%bc%88%e6%97%a5%ef%bc%89-container"
              >
                <ul
                  id="menu-%e3%81%8a%e5%95%8f%e3%81%84%e5%90%88%e3%82%8f%e3%81%9b%ef%bc%88%e6%97%a5%ef%bc%89"
                  class="menu"
                >
                  <li
                    v-for="s in ContactList"
                    :key="s.id"
                    id="menu-item-7605"
                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-7605"
                  >
                    <nuxt-link :to="s.path">{{ s.title }}</nuxt-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 forth-widget-area">
            <div id="text-3" class="footer_widget widget widget_text">
              <h5 class="widget-title"><span>東京ハピネス</span></h5>
              <div class="textwidget">
                <p>
                  TEL：03-6206-8815<br />
                  FAX：03-6206-8815<br />
                  Mail：info@sea-itsoft.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="lower-footer">
      <div class="container">
        <span> Copyright © SEA Inc.  2021 All Rights Reserved.</span>
      </div>
    </div>
  </footer>
</template>
<script>
  export default {
    name: '',
    components: {},
    mixins: [],
    props: {},
    data() {
      return {
        ServiceList: [
          {
            id: 1,
            title: '投資用の不動産',
            path: '/business/type1',
          },
          {
            id: 2,
            title: '住まいの不動産',
            path: '/business/type2',
          },
          {
            id: 3,
            title: '医療仲介',
            path: '/business/type3',
          },
          {
            id: 4,
            title: '旅行',
            path: '/business/type4',
          },
        ],
        ContactList: [
          {
            id: 1,
            title: 'お問い合わせ',
            path: '/inquiry/type1',
          },
          {
            id: 2,
            title: '不動産管理・仲介のお問合せ',
            path: '/inquiry/type2',
          },
          {
            id: 3,
            title: '業者用お問い合わせ',
            path: '/inquiry/type3',
          },
        ],
        AboutList: [
          {
            id: 1,
            title: '会社概要',
            path: '/about/type1',
          },
          {
            id: 1,
            title: '採用情報',
            path: '/about/type2',
          },
        ],
      };
    },
    computed: {},
    watch: {},
    mounted() {},
    methods: {},
  };
</script>
<style lang="" scoped></style>
