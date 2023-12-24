<template>
  <nav
    ref="header"
    class="navbar navbar-default navbar-fixed-top btn-hover-2 with-topbar nav-transparent-secondary-logo"
  >
    <div class="topbar tb-default-design">
      <div class="container">
        <div class="topbar-left-content">
          <div class="topbar-contact">
            <span v-for="i in topNav" :key="i.id" class="topbar-phone">
              <a :href="i.schema">
                <i class="iconfont primary-color" :class="i.icon"></i>
                <span>{{ i.title }}</span>
              </a>
            </span>
          </div>
        </div>
        <div class="topbar-right-content">
          <div class="topbar-menu">
            <ul class="navbar-topbar">
              <li
                v-for="btn in btnList"
                :key="btn.id"
                id="menu-item-7840"
                class="menu-item menu-item-type-custom menu-item-object-custom menu-item-7840"
              >
                <nuxt-link
                  :to="btn.path"
                  :style="{ backgroundColor: btn.color }"
                  >{{ btn.title }}</nuxt-link
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="menubar main-nav-right">
      <div class="container">
        <div id="logo">
          <a class="logo" href="/">
            <img
              class="fixed-logo"
              :src="logoImg"
              width="250"
              alt=""
            />
            <img
              class="nav-logo"
              :src="logoImg"
              width="250"
              alt=""
            />
          </a>
        </div>
        <div class="navbar-header page-scroll">
          <button
            type="button"
            class="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#main-menu"
          >
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <div class="mobile-cart"></div>
        </div>
        <div
          id="main-menu"
          class="collapse navbar-collapse underline-effect"
          aria-expanded="false"
        >
          <ul id="menu-wrap" class="nav navbar-nav">
            <li
              v-for="(item, index) in menuList"
              :key="item.id"
              class="pll-parent-menu-item menu-item menu-item-type-custom menu-item-object-custom menu-item-7457 dropdown"
              :class="item.children ? 'menu-item-has-children' : ''"
            >
              <a
                :class="item.children ? 'iconfont icon-xiajiantou' : ''"
                :title="item.title"
                v-if="item.langMenu"
              >
                <img
                  v-if="item.icon"
                  :src="item.icon"
                  :alt="item.title"
                  width="16"
                  height="11"
                  style="width: 16px; height: 11px"
                />
                <span style="margin-left: 0.3em">{{ item.title }}</span>
              </a>
              <!-- 非语言菜单 -->
              <nuxt-link
                exact
                :class="item.children ? 'iconfont icon-xiajiantou' : ''"
                :title="item.title"
                :to="item"
                v-if="!item.langMenu"
              >
                <img
                  v-if="item.icon"
                  :src="item.icon"
                  :alt="item.title"
                  width="16"
                  height="11"
                  style="width: 16px; height: 11px"
                />
                <span style="margin-left: 0.3em">{{ item.title }}</span>
              </nuxt-link>
              <!-- 二级菜单列 -->
              <ul v-if="item.children" role="menu" class="dropdown-menu">
                <li
                  v-if="item.langMenu"
                  v-for="itemChild in item.children"
                  :key="itemChild.id"
                  id="menu-item-7457-zh"
                  :data-lang="itemChild.lang"
                  class="lang-item lang-item-57 lang-item-zh lang-item-first menu-item menu-item-type-custom menu-item-object-custom"
                >
                  <a href="" @click.prevent="setLanguage(itemChild.lang)">
                    <img
                      v-if="itemChild.icon"
                      :src="itemChild.icon"
                      :alt="itemChild.title"
                      width="16"
                      height="11"
                      style="width: 16px; height: 11px"
                    />
                    <span style="margin-left: 0.3em">{{
                      itemChild.title
                    }}</span>
                  </a>
                </li>
                <!-- 下面的元素是非语言导航的二级菜单 -->
                <li
                  v-if="!item.langMenu"
                  v-for="itemChild in item.children"
                  :key="itemChild.id"
                  id="menu-item-7457-zh"
                  :data-lang="itemChild.lang"
                  class="lang-item lang-item-57 lang-item-zh lang-item-first menu-item menu-item-type-custom menu-item-object-custom"
                >
                  <nuxt-link exact :to="itemChild.path">
                    <img
                      v-if="itemChild.icon"
                      :src="itemChild.icon"
                      :alt="itemChild.title"
                      width="16"
                      height="11"
                      style="width: 16px; height: 11px"
                    />
                    <span style="margin-left: 0.3em">{{
                      itemChild.title
                    }}</span>
                  </nuxt-link>
                </li>
              </ul>
              <span
                v-if="item.children"
                class="mobile-dropdown"
                :class="isMobile ? 'iconfont icon-xiajiantou' : ''"
                @click="toggleMobileVisibility(index)"
              ></span>
            </li>
          </ul>
        </div>
        <div class="main-nav-extra-content">
          <div class="search-cart-wrapper"></div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
  import logoImg from '~/assets/images/logo.png';
  import zhIcon from '~/assets/images/icons/zh_icon.png';
  import jaIcon from '~/assets/images/icons/ja_icon.png';
  import enIcon from '~/assets/images/icons/en_icon.png';
  import topNav from '~/mock/header/top-nav.json'


  export default {
    name: 'Header',
    components: {},
    mixins: [],
    props: {},
    data() {
      return {
        didScroll: false,
        changeHeaderOn: 50,
        topNav,
        isMobile: false,
        logoImg,
        langMenu: {},
        // infoList: [
        //   {
        //     id: 1,
        //     title: '03-6206-8815',
        //     icon: 'icon-phone-fill',
        //     schema: 'tel:03-6206-8815',
        //   },
        //   {
        //     id: 2,
        //     title: 'info@seabiz.co.jp',
        //     icon: 'icon-youjian',
        //     schema: 'mailto:info@seabiz.co.jp',
        //   },
        //   {
        //     id: 3,
        //     title: '10:00-18:00',
        //     icon: 'icon-shizhong',
        //     schema: '',
        //   },
        // ],
      };
    },
    computed: {
      menuList() {
        let langMenu = { id: '1', langMenu: true, path: '/' };
        if (process.client) {
          const currentLang = localStorage.getItem('lang');
          switch (currentLang) {
            case 'zh':
              langMenu.title = this.$t('header.langMenu.lang_zh');
              langMenu.icon = zhIcon;
              langMenu.children = [
                {
                  title: this.$t('header.langMenu.lang_ja'),
                  icon: jaIcon,
                  lang: '',
                },
                {
                  id: '1-2',
                  title: this.$t('header.langMenu.lang_en'),
                  icon: enIcon,
                  lang: 'en',
                },
              ];
              break;
            case 'en':
              langMenu.title = this.$t('header.langMenu.lang_en');
              langMenu.icon = enIcon;
              langMenu.children = [
                {
                  id: '1-1',
                  title: this.$t('header.langMenu.lang_ja'),
                  icon: jaIcon,
                  lang: '',
                },
                {
                  id: '1-2',
                  title: this.$t('header.langMenu.lang_zh'),
                  icon: zhIcon,
                  lang: 'zh',
                },
              ];
              break;
            default:
              langMenu.title = this.$t('header.langMenu.lang_ja');
              langMenu.icon = jaIcon;
              langMenu.children = [
                {
                  id: '1-1',
                  title: this.$t('header.langMenu.lang_zh'),
                  icon: zhIcon,
                  lang: 'zh',
                },
                {
                  id: '1-2',
                  title: this.$t('header.langMenu.lang_en'),
                  icon: enIcon,
                  lang: 'en',
                },
              ];
              break;
          }
        }
        const menuList = [
          {
            id: '2',
            title: this.$t('header.nav_menu.item2.title'),
            path: '/',
          },
          {
            id: '3',
            title: this.$t('header.nav_menu.item3.title'),
            path: '/business',
            children: [
              {
                id: '3-1',
                title: this.$t('header.nav_menu.item3.children.li1'),
                path: '/business/type1',
              },
              {
                id: '3-2',
                title: this.$t('header.nav_menu.item3.children.li2'),
                path: '/business/type2',
              },
              {
                id: '3-3',
                title: this.$t('header.nav_menu.item3.children.li3'),
                path: '/business/type3',
              },
              {
                id: '3-4',
                title: this.$t('header.nav_menu.item3.children.li4'),
                path: '/business/type4',
              },
              {
                id: '3-5',
                title: this.$t('header.nav_menu.item3.children.li5'),
                path: '/business/type5',
              },
            ],
          },
          {
            id: '4',
            title: this.$t('header.nav_menu.item4.title'),
            path: '/about',
            children: [
              {
                id: '4-1',
                title: this.$t('header.nav_menu.item4.children.li1'),
                path: '/about/type1',
              },

              {
                id: '4-2',
                title: this.$t('header.nav_menu.item4.children.li2'),
                path: '/about/type2',
              },
            ],
          },
          {
            id: '5',
            title: this.$t('header.nav_menu.item5.title'),
            path: '/news',
            children: [
              {
                id: '5-1',
                title: this.$t('header.nav_menu.item5.children.li1'),
                path: '/news/type1',
              },
              {
                id: '5-2',
                title: this.$t('header.nav_menu.item5.children.li2'),
                path: '/news/type2',
              },
              {
                id: '5-3',
                title: this.$t('header.nav_menu.item5.children.li3'),
                path: '/news/type3',
              },
              {
                id: '5-4',
                title: this.$t('header.nav_menu.item5.children.li4'),
                path: '/news/type4',
              },
            ],
          },
          {
            id: '6',
            title: this.$t('header.nav_menu.item6.title'),
            path: '/inquiry',
            children: [
              {
                id: '6-1',
                title: this.$t('header.nav_menu.item6.children.li1'),
                path: '/inquiry/type1',
              },
              {
                id: '6-2',
                title: this.$t('header.nav_menu.item6.children.li2'),
                path: '/inquiry/type2',
              },
              {
                id: '6-3',
                title: this.$t('header.nav_menu.item6.children.li3'),
                path: '/inquiry/type3',
              },
            ],
          },
          this.langMenu || langMenu,
        ];
        return menuList;
      },
      btnList() {
        return [
          {
            id: 1,
            title: this.$t('header.btnList.list1.title'),
            path: '/business',
            color: '#92ddbd',
          },
          {
            id: 2,
            title: this.$t('header.btnList.list2.title'),
            path: '/about',
            color: '#69a3dc',
          },
          {
            id: 3,
            title: this.$t('header.btnList.list3.title'),
            path: '/inquiry',
            color: '#e2af5e',
          },
          {
            id: 4,
            // title:'物件情報',
            title: this.$t('header.btnList.list4.title'),
            path: '/news',
            color: '#f29a76',
          },
        ];
      },
    },
    watch: {},
    mounted() {
      console.log({topNav});
      this.checkScreenWidth();
      // 在组件挂载时添加窗口宽度变化的监听器
      window.addEventListener('resize', this.handleResize);
      // 初始化时检查屏幕宽度
      if (!this.$refs.header.classList.contains('fixed-menu')) {
        this.init();
      }
      if (process.client) {
        const savedLang = localStorage.getItem('lang');
        if (savedLang) {
          this.$i18n.setLocale(savedLang);
        }
        this.initMenuList();
      }
      this.$nextTick(() => {
        this.initMenuToggle();
      });
    },
    beforeDestroy() {
      // 在组件销毁前移除监听器，防止内存泄漏
      window.removeEventListener('resize', this.handleResize);
    },
    methods: {
      initMenuToggle() {
        let $toggleButton = $('.navbar-toggle');
        let $content = $('#main-menu');
        let $li = $('.pll-parent-menu-item a');
        // 遍历每个$li元素，为其添加点击事件
        $li.each(function () {
          $(this).on('click', function (e) {
            e.stopPropagation(); // 防止点击事件传播到文档 body
            $content.slideUp(300);
            $toggleButton.attr('aria-expanded', false);
          });
        });
        // 点击按钮时切换内容的显示和 aria-expanded 属性的值
        $toggleButton.on('click', function (e) {
          e.stopPropagation(); // 防止点击事件传播到文档 body
          $content.slideToggle(300, function () {
            $toggleButton.attr('aria-expanded', $content.is(':visible'));
          });
        });

        // 监听文档 body 上的点击事件
        $(document).on('click', function (e) {
          // 检查点击的元素是否不属于菜单或切换按钮
          if (
            !$content.is(e.target) &&
            !$toggleButton.is(e.target) &&
            $content.has(e.target).length === 0
          ) {
            // 如果不属于菜单或切换按钮，隐藏菜单
            $content.slideUp(300);
            $toggleButton.attr('aria-expanded', false);
          }
        });
      },
      toggleMobileVisibility(index) {
        // 在这里实现点击事件的逻辑
        // 使用类似于 jQuery 的操作来切换 mobile-visible 类

        // home 不存在children
        let _index = index === 0 ? index : index - 1;
        const element = this.$el.querySelectorAll('.menu-item-has-children')[
          _index
        ];
        element.classList.toggle('mobile-visible');
      },
      init() {
        this.initMenuList();
        window.addEventListener('scroll', () => {
          if (!this.didScroll) {
            this.didScroll = true;
            setTimeout(this.scrollPage, 100);
          }
        });

        window.addEventListener('load', () => {
          if (!this.didScroll) {
            this.didScroll = true;
            setTimeout(this.scrollPage, 100);
          }
        });
      },
      scrollPage() {
        // 添加额外的检查，确保 this.$refs.header 存在且不为 null
        const header = this.$refs.header;
        if (!header) return;

        const sy = window.pageYOffset || document.documentElement.scrollTop;

        if (sy >= this.changeHeaderOn) {
          header.classList.add('navbar-shrink');
          // 使用 Vue 的方式来操作 DOM
          const searchContainer = this.$el.querySelector(
            '.topbar-search-container',
          );
          if (searchContainer) {
            searchContainer.classList.remove('active');
          }

          const toggleSearch = this.$el.querySelector(
            '.topbar-search .toggle-search',
          );
          if (toggleSearch) {
            toggleSearch.classList.remove('fa-times');
          }
        } else {
          const overlay = this.$el.querySelector(
            '.panel-screen-overlay.active',
          );
          if (!overlay) {
            header.classList.remove('navbar-shrink');
          }
        }
        this.didScroll = false;
      },
      setLanguage(lang) {
        // this.$router.push('/' + lang);
        this.$i18n.locale = lang;
        if (process.client) {
          localStorage.setItem('lang', lang);
          $('html').attr('lang', lang);
          this.initMenuList();
        }
        window.location.reload()
      },
      initMenuList() {
        let langMenu = { id: '1', langMenu: true, path: '/' };
        if (process.client) {
          const currentLang = localStorage.getItem('lang');
          switch (currentLang) {
            case 'zh':
              langMenu.title = '中文 (中国)';
              langMenu.icon = zhIcon;
              langMenu.children = [
                {
                  title: '日本語',
                  icon: jaIcon,
                  lang: 'ja',
                },
                {
                  id: '1-2',
                  title: 'English',
                  icon: enIcon,
                  lang: 'en',
                },
              ];
              break;
            case 'en':
              langMenu.title = 'English';
              langMenu.icon = enIcon;
              langMenu.children = [
                {
                  id: '1-1',
                  title: '日本語',
                  icon: jaIcon,
                  lang: 'ja',
                },
                {
                  id: '1-2',
                  title: '中文 (中国)',
                  icon: zhIcon,
                  lang: 'zh',
                },
              ];
              break;
            default:
              langMenu.title = '日本語';
              langMenu.icon = jaIcon;
              langMenu.children = [
                {
                  id: '1-1',
                  title: '中文 (中国)',
                  icon: zhIcon,
                  lang: 'zh',
                },
                {
                  id: '1-2',
                  title: 'English',
                  icon: enIcon,
                  lang: 'en',
                },
              ];
              break;
          }
        }
        this.langMenu = langMenu;
      },
      handleResize() {
        this.checkScreenWidth();
      },
      checkScreenWidth() {
        // 根据屏幕宽度判断是否显示导航头
        this.isMobile = window.innerWidth <= 959;
      },
    },
  };
</script>

<style lang="stylus" scoped></style>
