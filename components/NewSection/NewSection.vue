<template>
  <div>
    <div class="vc_row wpb_row vc_inner vc_row-fluid">
      <div class="wpb_column vc_column_container vc_col-sm-12">
        <div class="vc_column-inner">
          <div class="wpb_wrapper">
            <header
              class="kd-section-title vc_col-lg-6 vc_col-sm-8 text-center kd-animated fadeIn vc_custom_1649751022108 kd-animate"
              data-animation-delay="200"
            >
              <h2 class="separator_off">新着情報</h2>
              <h6 class="subtitle">News</h6>
            </header>
          </div>
        </div>
      </div>
    </div>
    <div class="full section-padding" id="index-news">
      <div class="container">
        <ul
          class="vc_grid-filter vc_clearfix vc_grid-filter-default vc_grid-filter-size-md vc_grid-filter-center vc_grid-filter-color-grey"
        >
          <li
            class="vc_active vc_grid-filter-item"
            v-for="(nav, index) in navItems"
            :key="index"
            @click="selectTab(index)"
            :class="{ active: activeTab === index }"
          >
            <span>{{ nav.title }}</span>
          </li>
        </ul>
        <div
          class="vc_grid-filter-select vc_grid-filter-center vc_grid-filter-color-grey"
          data-vc-grid-filter-select="category"
        >
          <div class="vc_grid-styled-select">
            <select data-filter="category">
              <option
                v-for="o in navItems"
                :key="o.title"
                class="vc_active"
                value="*"
              >
                {{
                  o.title
                }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </option></select
            >
          </div>
        </div>
        <section
          v-for="(content, index) in contentItems"
          :key="index"
          v-if="activeTab === index"
        >
          <h2>{{ content.title }}</h2>
          <p>{{ content.description }}</p>
        </section>

        <div
          class="row"
          :key="item.id"
          v-if="activeTab === index"
          v-for="(item, index) in contentItems"
        >
          <div
            v-if="item.content"
            v-for="content in item.content"
            class="large-3 medium-3 columns iblog-item"
            @click="toNewsDetail(content.id)"
          >
            <div class="mod modBlogPost" data-connectors="1">
              <a>
                <img :alt="content.title" :src="content.img" />
              </a>
              <div class="content shadow">
                <p class="date">
                  <i class="iconfont icon-datebox"></i> &nbsp;2019-03-12
                </p>
                <h4 class="iblog-title">
                  <a :title="content.title">
                    {{ content.title }}
                  </a>
                </h4>
                <p class="desc">
                  {{ content.desc }}
                </p>
                <div class="tags">
                  <nuxt-link to="/news"
                    >阅读更多 &nbsp;<i class="fa fa-angle-double-right"></i
                  ></nuxt-link>
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
  export default {
    name: '',
    components: {},
    mixins: [],
    props: {},
    data() {
      return {
        activeTab: 0, // 默认显示第一个导航项
        navItems: [
          { title: '不動産情報' },
          { title: '医療情報' },
          { title: '旅行情報' },
          { title: '企業情報' },
        ],
        contentItems: [
          {
            id: 1,
            activeTab: 0,
            content: [
              {
                id: 1,
                title: '做好网站设计这些规范准则要知晓',
                desc: '一个网站的建设最关键都就是页面的设计了，它是一件非常复杂还有繁琐的工作，因为在设计的过程中考虑的因素有很多，根据客户的需求不同修改的方向...',
                date: '2023-12-03',
                img: 'https://tokyo-happiness.net/wp-content/uploads/unnamed-1-899x1024.jpg',
              },
              {
                id: 2,
                title: '做好网站设计这些规范准则要知晓',
                desc: '一个网站的建设最关键都就是页面的设计了，它是一件非常复杂还有繁琐的工作，因为在设计的过程中考虑的因素有很多，根据客户的需求不同修改的方向...',
                date: '2023-12-03',
                img: 'https://tokyo-happiness.net/wp-content/uploads/unnamed-1-899x1024.jpg',
              },
              {
                id: 3,
                title: '做好网站设计这些规范准则要知晓',
                desc: '一个网站的建设最关键都就是页面的设计了，它是一件非常复杂还有繁琐的工作，因为在设计的过程中考虑的因素有很多，根据客户的需求不同修改的方向...',
                date: '2023-12-03',
                img: 'https://tokyo-happiness.net/wp-content/uploads/unnamed-1-899x1024.jpg',
              },
              {
                id: 4,
                title: '做好网站设计这些规范准则要知晓',
                desc: '一个网站的建设最关键都就是页面的设计了，它是一件非常复杂还有繁琐的工作，因为在设计的过程中考虑的因素有很多，根据客户的需求不同修改的方向...',
                date: '2023-12-03',
                img: 'https://tokyo-happiness.net/wp-content/uploads/unnamed-1-899x1024.jpg',
              },
            ],
          },
          {
            id: 2,
            activeTab: 1,
            content: [
              {
                id: 1,
                title: '做好网站设计这些规范准则要知晓',
                desc: '一个网站的建设最关键都就是页面的设计了，它是一件非常复杂还有繁琐的工作，因为在设计的过程中考虑的因素有很多，根据客户的需求不同修改的方向...',
                date: '2023-12-03',
                img: 'https://tokyo-happiness.net/wp-content/uploads/unnamed-1-899x1024.jpg',
              },
              {
                id: 2,
                title: '做好网站设计这些规范准则要知晓',
                desc: '一个网站的建设最关键都就是页面的设计了，它是一件非常复杂还有繁琐的工作，因为在设计的过程中考虑的因素有很多，根据客户的需求不同修改的方向...',
                date: '2023-12-03',
                img: 'https://tokyo-happiness.net/wp-content/uploads/unnamed-1-899x1024.jpg',
              },
              {
                id: 3,
                title: '做好网站设计这些规范准则要知晓',
                desc: '一个网站的建设最关键都就是页面的设计了，它是一件非常复杂还有繁琐的工作，因为在设计的过程中考虑的因素有很多，根据客户的需求不同修改的方向...',
                date: '2023-12-03',
                img: 'https://tokyo-happiness.net/wp-content/uploads/unnamed-1-899x1024.jpg',
              },
            ],
          },
          {
            id: 3,
            activeTab: 2,
            content: [
              {
                id: 1,
                title: '做好网站设计这些规范准则要知晓',
                desc: '一个网站的建设最关键都就是页面的设计了，它是一件非常复杂还有繁琐的工作，因为在设计的过程中考虑的因素有很多，根据客户的需求不同修改的方向...',
                date: '2023-12-03',
                img: 'https://tokyo-happiness.net/wp-content/uploads/unnamed-1-899x1024.jpg',
              },
              {
                id: 2,
                title: '做好网站设计这些规范准则要知晓',
                desc: '一个网站的建设最关键都就是页面的设计了，它是一件非常复杂还有繁琐的工作，因为在设计的过程中考虑的因素有很多，根据客户的需求不同修改的方向...',
                date: '2023-12-03',
                img: 'https://tokyo-happiness.net/wp-content/uploads/unnamed-1-899x1024.jpg',
              },
              {
                id: 3,
                title: '做好网站设计这些规范准则要知晓',
                desc: '一个网站的建设最关键都就是页面的设计了，它是一件非常复杂还有繁琐的工作，因为在设计的过程中考虑的因素有很多，根据客户的需求不同修改的方向...',
                date: '2023-12-03',
                img: 'https://tokyo-happiness.net/wp-content/uploads/unnamed-1-899x1024.jpg',
              },
              {
                id: 4,
                title: '做好网站设计这些规范准则要知晓',
                desc: '一个网站的建设最关键都就是页面的设计了，它是一件非常复杂还有繁琐的工作，因为在设计的过程中考虑的因素有很多，根据客户的需求不同修改的方向...',
                date: '2023-12-03',
                img: 'https://tokyo-happiness.net/wp-content/uploads/unnamed-1-899x1024.jpg',
              },
            ],
          },
          {
            id: 4,
            activeTab: 3,
            content: [
              {
                id: 1,
                title: '做好网站设计这些规范准则要知晓',
                desc: '一个网站的建设最关键都就是页面的设计了，它是一件非常复杂还有繁琐的工作，因为在设计的过程中考虑的因素有很多，根据客户的需求不同修改的方向...',
                date: '2023-12-03',
                img: 'https://tokyo-happiness.net/wp-content/uploads/unnamed-1-899x1024.jpg',
              },
              {
                id: 2,
                title: '做好网站设计这些规范准则要知晓',
                desc: '一个网站的建设最关键都就是页面的设计了，它是一件非常复杂还有繁琐的工作，因为在设计的过程中考虑的因素有很多，根据客户的需求不同修改的方向...',
                date: '2023-12-03',
                img: 'https://tokyo-happiness.net/wp-content/uploads/unnamed-1-899x1024.jpg',
              },
              {
                id: 3,
                title: '做好网站设计这些规范准则要知晓',
                desc: '一个网站的建设最关键都就是页面的设计了，它是一件非常复杂还有繁琐的工作，因为在设计的过程中考虑的因素有很多，根据客户的需求不同修改的方向...',
                date: '2023-12-03',
                img: 'https://tokyo-happiness.net/wp-content/uploads/unnamed-1-899x1024.jpg',
              },
            ],
          },
        ],
      };
    },
    computed: {},
    watch: {},
    mounted() {},
    methods: {
      selectTab(tab) {
        this.activeTab = tab;
      },
      toNewsDetail(id) {
        this.$router.push(`/news/type1/${id}`);
      },
    },
  };
</script>
<style lang="stylus" scoped>
    // .vc_grid-filter.vc_grid-filter-color-grey>.vc_grid-filter-item.vc_active
    //   background-color: #0092FF;
    // .vc_grid-filter.vc_grid-filter-color-grey>.vc_grid-filter-item.vc_active>span
    //   color: #fff
    .vc_grid-filter.vc_grid-filter-color-grey>.vc_grid-filter-item:hover
      background-color: #fff
    .content-area .vc_grid-filter>.vc_grid-filter-item span:hover:after
      width: 100%
    #index-news .modBlogPost .content {
        padding: 20px 20px 15px;
    }
    #index-news .modBlogPost .shadow
      box-shadow: 0 0 5px rgba(0,0,0,.2);

    #index-news .iblog-title {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    #index-news .tags a
      font-style: normal;
      width: 100%;
      text-align: center;

    #index-news .desc
      color: #666;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      text-overflow: ellipsis;

    #index-news .modBlogPost .date {
        letter-spacing: normal;
        color: #666;
        font-size: 13px;
    }
    #index-widget-1 .container, #index-service .container, #index-news .container, #footer .container {
        padding-left: 2px;
        padding-right: 2px;
    }
    @media(min-width:768px) {
    	.container {max-width:750px}
    	.col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11{float:left}
    	.col-sm-1{width:8.333333333333332%}
    	.col-sm-2{width:16.666666666666664%}
    	.col-sm-3{width:25%}
    	.col-sm-4{width:33.33333333333333%}
    	.col-sm-5{width:41.66666666666667%}
    	.col-sm-6{width:50%}
    	.col-sm-7{width:58.333333333333336%}
    	.col-sm-8{width:66.66666666666666%}
    	.col-sm-9{width:75%}
    	.col-sm-10{width:83.33333333333334%}
    	.col-sm-11{width:91.66666666666666%}
    	.col-sm-12{width:100%}
    	.col-sm-push-1{left:8.333333333333332%}
    	.col-sm-push-2{left:16.666666666666664%}
    	.col-sm-push-3{left:25%}
    	.col-sm-push-4{left:33.33333333333333%}
    	.col-sm-push-5{left:41.66666666666667%}
    	.col-sm-push-6{left:50%}
    	.col-sm-push-7{left:58.333333333333336%}
    	.col-sm-push-8{left:66.66666666666666%}
    	.col-sm-push-9{left:75%}
    	.col-sm-push-10{left:83.33333333333334%}
    	.col-sm-push-11{left:91.66666666666666%}
    	.col-sm-pull-1{right:8.333333333333332%}
    	.col-sm-pull-2{right:16.666666666666664%}
    	.col-sm-pull-3{right:25%}
    	.col-sm-pull-4{right:33.33333333333333%}
    	.col-sm-pull-5{right:41.66666666666667%}
    	.col-sm-pull-6{right:50%}
    	.col-sm-pull-7{right:58.333333333333336%}
    	.col-sm-pull-8{right:66.66666666666666%}
    	.col-sm-pull-9{right:75%}
    	.col-sm-pull-10{right:83.33333333333334%}
    	.col-sm-pull-11{right:91.66666666666666%}
    	.col-sm-offset-1{margin-left:8.333333333333332%}
    	.col-sm-offset-2{margin-left:16.666666666666664%}
    	.col-sm-offset-3{margin-left:25%}
    	.col-sm-offset-4{margin-left:33.33333333333333%}
    	.col-sm-offset-5{margin-left:41.66666666666667%}
    	.col-sm-offset-6{margin-left:50%}
    	.col-sm-offset-7{margin-left:58.333333333333336%}
    	.col-sm-offset-8{margin-left:66.66666666666666%}
    	.col-sm-offset-9{margin-left:75%}
    	.col-sm-offset-10{margin-left:83.33333333333334%}
    	.col-sm-offset-11{margin-left:91.66666666666666%}
    }
    @media(min-width:992px) {
    	.container {max-width:970px}
    	.col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11{float:left}
    	.col-md-1{width:8.333333333333332%}
    	.col-md-2{width:16.666666666666664%}
    	.col-md-3{width:25%}
    	.col-md-4{width:33.33333333333333%}
    	.col-md-5{width:41.66666666666667%}
    	.col-md-6{width:50%}
    	.col-md-7{width:58.333333333333336%}
    	.col-md-8{width:66.66666666666666%}
    	.col-md-9{width:75%}
    	.col-md-10{width:83.33333333333334%}
    	.col-md-11{width:91.66666666666666%}
    	.col-md-12{width:100%}
    	.col-md-push-0{left:auto}
    	.col-md-push-1{left:8.333333333333332%}
    	.col-md-push-2{left:16.666666666666664%}
    	.col-md-push-3{left:25%}
    	.col-md-push-4{left:33.33333333333333%}
    	.col-md-push-5{left:41.66666666666667%}
    	.col-md-push-6{left:50%}
    	.col-md-push-7{left:58.333333333333336%}
    	.col-md-push-8{left:66.66666666666666%}
    	.col-md-push-9{left:75%}
    	.col-md-push-10{left:83.33333333333334%}
    	.col-md-push-11{left:91.66666666666666%}
    	.col-md-pull-0{right:auto}
    	.col-md-pull-1{right:8.333333333333332%}
    	.col-md-pull-2{right:16.666666666666664%}
    	.col-md-pull-3{right:25%}
    	.col-md-pull-4{right:33.33333333333333%}
    	.col-md-pull-5{right:41.66666666666667%}
    	.col-md-pull-6{right:50%}
    	.col-md-pull-7{right:58.333333333333336%}
    	.col-md-pull-8{right:66.66666666666666%}
    	.col-md-pull-9{right:75%}
    	.col-md-pull-10{right:83.33333333333334%}
    	.col-md-pull-11{right:91.66666666666666%}
    	.col-md-offset-0{margin-left:0}
    	.col-md-offset-1{margin-left:8.333333333333332%}
    	.col-md-offset-2{margin-left:16.666666666666664%}
    	.col-md-offset-3{margin-left:25%}
    	.col-md-offset-4{margin-left:33.33333333333333%}
    	.col-md-offset-5{margin-left:41.66666666666667%}
    	.col-md-offset-6{margin-left:50%}
    	.col-md-offset-7{margin-left:58.333333333333336%}
    	.col-md-offset-8{margin-left:66.66666666666666%}
    	.col-md-offset-9{margin-left:75%}
    	.col-md-offset-10{margin-left:83.33333333333334%}
    	.col-md-offset-11{margin-left:91.66666666666666%}
    }
    @media(min-width:1200px) {
    	.container {max-width:1170px}
    	.col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11{float:left}
    	.col-lg-1{width:8.333333333333332%}
    	.col-lg-2{width:16.666666666666664%}
    	.col-lg-3{width:25%}
    	.col-lg-4{width:33.33333333333333%}
    	.col-lg-5{width:41.66666666666667%}
    	.col-lg-6{width:50%}
    	.col-lg-7{width:58.333333333333336%}
    	.col-lg-8{width:66.66666666666666%}
    	.col-lg-9{width:75%}
    	.col-lg-10{width:83.33333333333334%}
    	.col-lg-11{width:91.66666666666666%}
    	.col-lg-12{width:100%}
    	.col-lg-push-0{left:auto}
    	.col-lg-push-1{left:8.333333333333332%}
    	.col-lg-push-2{left:16.666666666666664%}
    	.col-lg-push-3{left:25%}
    	.col-lg-push-4{left:33.33333333333333%}
    	.col-lg-push-5{left:41.66666666666667%}
    	.col-lg-push-6{left:50%}
    	.col-lg-push-7{left:58.333333333333336%}
    	.col-lg-push-8{left:66.66666666666666%}
    	.col-lg-push-9{left:75%}
    	.col-lg-push-10{left:83.33333333333334%}
    	.col-lg-push-11{left:91.66666666666666%}
    	.col-lg-pull-0{right:auto}
    	.col-lg-pull-1{right:8.333333333333332%}
    	.col-lg-pull-2{right:16.666666666666664%}
    	.col-lg-pull-3{right:25%}
    	.col-lg-pull-4{right:33.33333333333333%}
    	.col-lg-pull-5{right:41.66666666666667%}
    	.col-lg-pull-6{right:50%}
    	.col-lg-pull-7{right:58.333333333333336%}
    	.col-lg-pull-8{right:66.66666666666666%}
    	.col-lg-pull-9{right:75%}
    	.col-lg-pull-10{right:83.33333333333334%}
    	.col-lg-pull-11{right:91.66666666666666%}
    	.col-lg-offset-0{margin-left:0}
    	.col-lg-offset-1{margin-left:8.333333333333332%}
    	.col-lg-offset-2{margin-left:16.666666666666664%}
    	.col-lg-offset-3{margin-left:25%}
    	.col-lg-offset-4{margin-left:33.33333333333333%}
    	.col-lg-offset-5{margin-left:41.66666666666667%}
    	.col-lg-offset-6{margin-left:50%}
    	.col-lg-offset-7{margin-left:58.333333333333336%}
    	.col-lg-offset-8{margin-left:66.66666666666666%}
    	.col-lg-offset-9{margin-left:75%}
    	.col-lg-offset-10{margin-left:83.33333333333334%}
    	.col-lg-offset-11{margin-left:91.66666666666666%}
    }
    .row, .contain-to-grid .top-bar {
        max-width: 100%;
    }
    .row {
      width: 100%;
      margin-left: auto;
      margin-right: auto;
      margin-top: 0;
      margin-bottom: 0;
      max-width: 80rem;
    }
    .row:before, .row:after {
      content: " ";
      display: table;
    }
    .row:after {
      clear: both;
    }
    .row.collapse > .column,
    .row.collapse > .columns {
      padding-left: 0;
      padding-right: 0;
    }
    .row.collapse .row {
      margin-left: 0;
      margin-right: 0;
    }
    .row .row {
      width: auto;
      margin-left: -1.07143rem;
      margin-right: -1.07143rem;
      margin-top: 0;
      margin-bottom: 0;
      max-width: none;
    }
    .row .row:before, .row .row:after {
      content: " ";
      display: table;
    }
    .row .row:after {
      clear: both;
    }
    .row .row.collapse {
      width: auto;
      margin: 0;
      max-width: none;
    }
    .row .row.collapse:before, .row .row.collapse:after {
      content: " ";
      display: table;
    }
    .row .row.collapse:after {
      clear: both;
    }
    @media only screen and (min-width: 50em) {
      .medium-push-0 {
        position: relative;
        left: 0%;
        right: auto;
      }

      .medium-pull-0 {
        position: relative;
        right: 0%;
        left: auto;
      }

      .medium-push-1 {
        position: relative;
        left: 8.33333%;
        right: auto;
      }

      .medium-pull-1 {
        position: relative;
        right: 8.33333%;
        left: auto;
      }

      .medium-push-2 {
        position: relative;
        left: 16.66667%;
        right: auto;
      }

      .medium-pull-2 {
        position: relative;
        right: 16.66667%;
        left: auto;
      }

      .medium-push-3 {
        position: relative;
        left: 25%;
        right: auto;
      }

      .medium-pull-3 {
        position: relative;
        right: 25%;
        left: auto;
      }

      .medium-push-4 {
        position: relative;
        left: 33.33333%;
        right: auto;
      }

      .medium-pull-4 {
        position: relative;
        right: 33.33333%;
        left: auto;
      }

      .medium-push-5 {
        position: relative;
        left: 41.66667%;
        right: auto;
      }

      .medium-pull-5 {
        position: relative;
        right: 41.66667%;
        left: auto;
      }

      .medium-push-6 {
        position: relative;
        left: 50%;
        right: auto;
      }

      .medium-pull-6 {
        position: relative;
        right: 50%;
        left: auto;
      }

      .medium-push-7 {
        position: relative;
        left: 58.33333%;
        right: auto;
      }

      .medium-pull-7 {
        position: relative;
        right: 58.33333%;
        left: auto;
      }

      .medium-push-8 {
        position: relative;
        left: 66.66667%;
        right: auto;
      }

      .medium-pull-8 {
        position: relative;
        right: 66.66667%;
        left: auto;
      }

      .medium-push-9 {
        position: relative;
        left: 75%;
        right: auto;
      }

      .medium-pull-9 {
        position: relative;
        right: 75%;
        left: auto;
      }

      .medium-push-10 {
        position: relative;
        left: 83.33333%;
        right: auto;
      }

      .medium-pull-10 {
        position: relative;
        right: 83.33333%;
        left: auto;
      }

      .medium-push-11 {
        position: relative;
        left: 91.66667%;
        right: auto;
      }

      .medium-pull-11 {
        position: relative;
        right: 91.66667%;
        left: auto;
      }

      .column,
      .columns {
        position: relative;
        padding-left: 1.07143rem;
        padding-right: 1.07143rem;
        float: left;
      }

      .medium-1 {
        width: 8.33333%;
      }

      .medium-2 {
        width: 16.66667%;
      }

      .medium-3 {
        // width: 25%;
        width: 50%;
      }

      .medium-4 {
        width: 33.33333%;
      }

      .medium-5 {
        width: 41.66667%;
      }

      .medium-6 {
        width: 50%;
      }

      .medium-7 {
        width: 58.33333%;
      }

      .medium-8 {
        width: 66.66667%;
      }

      .medium-9 {
        width: 75%;
      }

      .medium-10 {
        width: 83.33333%;
      }

      .medium-11 {
        width: 91.66667%;
      }

      .medium-12 {
        width: 100%;
      }

      .medium-offset-0 {
        margin-left: 0% !important;
      }

      .medium-offset-1 {
        margin-left: 8.33333% !important;
      }

      .medium-offset-2 {
        margin-left: 16.66667% !important;
      }

      .medium-offset-3 {
        margin-left: 25% !important;
      }

      .medium-offset-4 {
        margin-left: 33.33333% !important;
      }

      .medium-offset-5 {
        margin-left: 41.66667% !important;
      }

      .medium-offset-6 {
        margin-left: 50% !important;
      }

      .medium-offset-7 {
        margin-left: 58.33333% !important;
      }

      .medium-offset-8 {
        margin-left: 66.66667% !important;
      }

      .medium-offset-9 {
        margin-left: 75% !important;
      }

      .medium-offset-10 {
        margin-left: 83.33333% !important;
      }

      .medium-offset-11 {
        margin-left: 91.66667% !important;
      }

      .medium-reset-order {
        margin-left: 0;
        margin-right: 0;
        left: auto;
        right: auto;
        float: left;
      }

      .column.medium-centered,
      .columns.medium-centered {
        margin-left: auto;
        margin-right: auto;
        float: none;
      }

      .column.medium-uncentered,
      .columns.medium-uncentered {
        margin-left: 0;
        margin-right: 0;
        float: left;
      }

      .column.medium-centered:last-child,
      .columns.medium-centered:last-child {
        float: none;
      }

      .column.medium-uncentered:last-child,
      .columns.medium-uncentered:last-child {
        float: left;
      }

      .column.medium-uncentered.opposite,
      .columns.medium-uncentered.opposite {
        float: right;
      }

      .row.medium-collapse > .column,
      .row.medium-collapse > .columns {
        padding-left: 0;
        padding-right: 0;
      }
      .row.medium-collapse .row {
        margin-left: 0;
        margin-right: 0;
      }
      .row.medium-uncollapse > .column,
      .row.medium-uncollapse > .columns {
        padding-left: 1.07143rem;
        padding-right: 1.07143rem;
        float: left;
      }

      .push-0 {
        position: relative;
        left: 0%;
        right: auto;
      }

      .pull-0 {
        position: relative;
        right: 0%;
        left: auto;
      }

      .push-1 {
        position: relative;
        left: 8.33333%;
        right: auto;
      }

      .pull-1 {
        position: relative;
        right: 8.33333%;
        left: auto;
      }

      .push-2 {
        position: relative;
        left: 16.66667%;
        right: auto;
      }

      .pull-2 {
        position: relative;
        right: 16.66667%;
        left: auto;
      }

      .push-3 {
        position: relative;
        left: 25%;
        right: auto;
      }

      .pull-3 {
        position: relative;
        right: 25%;
        left: auto;
      }

      .push-4 {
        position: relative;
        left: 33.33333%;
        right: auto;
      }

      .pull-4 {
        position: relative;
        right: 33.33333%;
        left: auto;
      }

      .push-5 {
        position: relative;
        left: 41.66667%;
        right: auto;
      }

      .pull-5 {
        position: relative;
        right: 41.66667%;
        left: auto;
      }

      .push-6 {
        position: relative;
        left: 50%;
        right: auto;
      }

      .pull-6 {
        position: relative;
        right: 50%;
        left: auto;
      }

      .push-7 {
        position: relative;
        left: 58.33333%;
        right: auto;
      }

      .pull-7 {
        position: relative;
        right: 58.33333%;
        left: auto;
      }

      .push-8 {
        position: relative;
        left: 66.66667%;
        right: auto;
      }

      .pull-8 {
        position: relative;
        right: 66.66667%;
        left: auto;
      }

      .push-9 {
        position: relative;
        left: 75%;
        right: auto;
      }

      .pull-9 {
        position: relative;
        right: 75%;
        left: auto;
      }

      .push-10 {
        position: relative;
        left: 83.33333%;
        right: auto;
      }

      .pull-10 {
        position: relative;
        right: 83.33333%;
        left: auto;
      }

      .push-11 {
        position: relative;
        left: 91.66667%;
        right: auto;
      }

      .pull-11 {
        position: relative;
        right: 91.66667%;
        left: auto;
      }
    }
    @media only screen and (min-width: 64.063em) {
      .large-push-0 {
        position: relative;
        left: 0%;
        right: auto;
      }

      .large-pull-0 {
        position: relative;
        right: 0%;
        left: auto;
      }

      .large-push-1 {
        position: relative;
        left: 8.33333%;
        right: auto;
      }

      .large-pull-1 {
        position: relative;
        right: 8.33333%;
        left: auto;
      }

      .large-push-2 {
        position: relative;
        left: 16.66667%;
        right: auto;
      }

      .large-pull-2 {
        position: relative;
        right: 16.66667%;
        left: auto;
      }

      .large-push-3 {
        position: relative;
        left: 25%;
        right: auto;
      }

      .large-pull-3 {
        position: relative;
        right: 25%;
        left: auto;
      }

      .large-push-4 {
        position: relative;
        left: 33.33333%;
        right: auto;
      }

      .large-pull-4 {
        position: relative;
        right: 33.33333%;
        left: auto;
      }

      .large-push-5 {
        position: relative;
        left: 41.66667%;
        right: auto;
      }

      .large-pull-5 {
        position: relative;
        right: 41.66667%;
        left: auto;
      }

      .large-push-6 {
        position: relative;
        left: 50%;
        right: auto;
      }

      .large-pull-6 {
        position: relative;
        right: 50%;
        left: auto;
      }

      .large-push-7 {
        position: relative;
        left: 58.33333%;
        right: auto;
      }

      .large-pull-7 {
        position: relative;
        right: 58.33333%;
        left: auto;
      }

      .large-push-8 {
        position: relative;
        left: 66.66667%;
        right: auto;
      }

      .large-pull-8 {
        position: relative;
        right: 66.66667%;
        left: auto;
      }

      .large-push-9 {
        position: relative;
        left: 75%;
        right: auto;
      }

      .large-pull-9 {
        position: relative;
        right: 75%;
        left: auto;
      }

      .large-push-10 {
        position: relative;
        left: 83.33333%;
        right: auto;
      }

      .large-pull-10 {
        position: relative;
        right: 83.33333%;
        left: auto;
      }

      .large-push-11 {
        position: relative;
        left: 91.66667%;
        right: auto;
      }

      .large-pull-11 {
        position: relative;
        right: 91.66667%;
        left: auto;
      }

      .column,
      .columns {
        position: relative;
        padding-left: 1.07143rem;
        padding-right: 1.07143rem;
        float: left;
      }

      .large-1 {
        width: 8.33333%;
      }

      .large-2 {
        width: 16.66667%;
      }

      .large-3 {
        width: 25%;
      }

      .large-4 {
        width: 33.33333%;
      }

      .large-5 {
        width: 41.66667%;
      }

      .large-6 {
        width: 50%;
      }

      .large-7 {
        width: 58.33333%;
      }

      .large-8 {
        width: 66.66667%;
      }

      .large-9 {
        width: 75%;
      }

      .large-10 {
        width: 83.33333%;
      }

      .large-11 {
        width: 91.66667%;
      }

      .large-12 {
        width: 100%;
      }

      .large-offset-0 {
        margin-left: 0% !important;
      }

      .large-offset-1 {
        margin-left: 8.33333% !important;
      }

      .large-offset-2 {
        margin-left: 16.66667% !important;
      }

      .large-offset-3 {
        margin-left: 25% !important;
      }

      .large-offset-4 {
        margin-left: 33.33333% !important;
      }

      .large-offset-5 {
        margin-left: 41.66667% !important;
      }

      .large-offset-6 {
        margin-left: 50% !important;
      }

      .large-offset-7 {
        margin-left: 58.33333% !important;
      }

      .large-offset-8 {
        margin-left: 66.66667% !important;
      }

      .large-offset-9 {
        margin-left: 75% !important;
      }

      .large-offset-10 {
        margin-left: 83.33333% !important;
      }

      .large-offset-11 {
        margin-left: 91.66667% !important;
      }

      .large-reset-order {
        margin-left: 0;
        margin-right: 0;
        left: auto;
        right: auto;
        float: left;
      }

      .column.large-centered,
      .columns.large-centered {
        margin-left: auto;
        margin-right: auto;
        float: none;
      }

      .column.large-uncentered,
      .columns.large-uncentered {
        margin-left: 0;
        margin-right: 0;
        float: left;
      }

      .column.large-centered:last-child,
      .columns.large-centered:last-child {
        float: none;
      }

      .column.large-uncentered:last-child,
      .columns.large-uncentered:last-child {
        float: left;
      }

      .column.large-uncentered.opposite,
      .columns.large-uncentered.opposite {
        float: right;
      }

      .row.large-collapse > .column,
      .row.large-collapse > .columns {
        padding-left: 0;
        padding-right: 0;
      }
      .row.large-collapse .row {
        margin-left: 0;
        margin-right: 0;
      }
      .row.large-uncollapse > .column,
      .row.large-uncollapse > .columns {
        padding-left: 1.07143rem;
        padding-right: 1.07143rem;
        float: left;
      }

      .push-0 {
        position: relative;
        left: 0%;
        right: auto;
      }

      .pull-0 {
        position: relative;
        right: 0%;
        left: auto;
      }

      .push-1 {
        position: relative;
        left: 8.33333%;
        right: auto;
      }

      .pull-1 {
        position: relative;
        right: 8.33333%;
        left: auto;
      }

      .push-2 {
        position: relative;
        left: 16.66667%;
        right: auto;
      }

      .pull-2 {
        position: relative;
        right: 16.66667%;
        left: auto;
      }

      .push-3 {
        position: relative;
        left: 25%;
        right: auto;
      }

      .pull-3 {
        position: relative;
        right: 25%;
        left: auto;
      }

      .push-4 {
        position: relative;
        left: 33.33333%;
        right: auto;
      }

      .pull-4 {
        position: relative;
        right: 33.33333%;
        left: auto;
      }

      .push-5 {
        position: relative;
        left: 41.66667%;
        right: auto;
      }

      .pull-5 {
        position: relative;
        right: 41.66667%;
        left: auto;
      }

      .push-6 {
        position: relative;
        left: 50%;
        right: auto;
      }

      .pull-6 {
        position: relative;
        right: 50%;
        left: auto;
      }

      .push-7 {
        position: relative;
        left: 58.33333%;
        right: auto;
      }

      .pull-7 {
        position: relative;
        right: 58.33333%;
        left: auto;
      }

      .push-8 {
        position: relative;
        left: 66.66667%;
        right: auto;
      }

      .pull-8 {
        position: relative;
        right: 66.66667%;
        left: auto;
      }

      .push-9 {
        position: relative;
        left: 75%;
        right: auto;
      }

      .pull-9 {
        position: relative;
        right: 75%;
        left: auto;
      }

      .push-10 {
        position: relative;
        left: 83.33333%;
        right: auto;
      }

      .pull-10 {
        position: relative;
        right: 83.33333%;
        left: auto;
      }

      .push-11 {
        position: relative;
        left: 91.66667%;
        right: auto;
      }

      .pull-11 {
        position: relative;
        right: 91.66667%;
        left: auto;
      }
    }
    .modBlogPost {
      margin-bottom: 40px;
      background: #fff;
    }
    .modBlogPost img {
      width: 100%;
    }
    .modBlogPost a:hover img {
      -moz-transition-duration: 0.5s;
      -o-transition-duration: 0.5s;
      -webkit-transition-duration: 0.5s;
      transition-duration: 0.5s;
      opacity: 0.5;
    }
    #index-news .modBlogPost .content {
        padding: 20px 20px 15px;
    }
    #index-news .modBlogPost .date {
        letter-spacing: normal;
        color: #666;
        font-size: 13px;
        margin-bottom: 5px;
    }
    #index-news .iblog-title {
        overflow-x: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .modBlogPost h4 a {
      color: #333;
    }
    .modBlogPost h4 a:hover {
      color: #01A0E8;
    }
    .modBlogPost .tags {
      padding: 5px 0;
    }

    @media (max-width : 990px) { /* 960 */
  #innerpage-wrap {
  	padding: 30px 0 0;
  }
  .sidebar .widget:last-child {
  	margin-bottom: 30px;
  }
  .sidebar {
  	padding-top: 30px;
  	clear: both;
  }
  .side-search .title {
  	display: none;
  }
  .searchform #s {
  	width: 94%;
  }
  .searchform #searchsubmit {
  	width: 6%;
  }
  .blog-article .read-more-link {
  	display: none;
  }
  .product-show .ps-desc {
  	margin: 12px 0 15px;
  }
  }
  @media (max-width : 768px) { /* 向下考虑iphone6的667px和736px */
  .portfolio-item .item-title {
  	position: relative;
  	z-index: 999;
  }
  .our-work .gallery-item .item-title {
  	position: relative;
  	z-index: 999;
  }
  .searchform #s {
  	width: 92%;
  }
  .searchform #searchsubmit {
  	width: 8%;
  }
  .product-show .ps-title, .blog-post-wrap .bp-title {
  	line-height: 1.6;
  	font-size: 18px;
  	margin: 0;
  	padding: 0;
  	font-weight: bold;
  }
  }
  @media (max-width : 740px) { /* 双行，568px,600px,640px */
  .bcid-cat {
  	text-align: center;
  	margin-bottom: 15px;
  }
  .location {
  	text-align: center;
  	line-height: 1.4;
  }
  .side-news {
  	display: none;
  }
  .searchform #s {
  	width: 90%;
  }
  .searchform #searchsubmit {
  	width: 10%;
  }
  .breadcrumb-section {
  	padding: 82px 0 40px;
  }
  .breadcrumb-section .bc-cat {
  	text-align: center;
  }
  .breadcrumb-section h1:after {
  	margin: 15px auto 0;
  }
  .bc-location {
  	margin-top: 25px;
  	text-align: center;
  }
  .breadcrumbs:after {
  	display: none;
  }
  }
  @media (max-width : 480px) {
  .searchform #s {
  	width: 85%;
  }
  .searchform #searchsubmit {
  	width: 15%;
  }
  .blog-article figure {
  	margin-right: 0;
  	width: 100%;
  	margin-bottom: 25px;
  }
  .blog-article .entry-header {
  	clear: both;
  }
  h2.post-title {
  	font-size: 17px;
  	margin-bottom: 14px;
  }
  .blog-article .post-meta {
  	margin: 0 0px 15px 0;
  	width: 100%;
  	border-right: none;
  }
  .blog-article .post-meta ul li:before {
  	padding-right: 10px;
  }
  .blog-article .post-meta ul li {
  	float: left;
  	padding: 0;
  	margin: 0 12px 0 0px;
  }
  .blog-article .entry-content {
  	clear: both;
  }
  .blog-article .post-summary p {
  	margin-bottom: 0;
  }
  .proshow-tab .nav-tabs > li {
  	width: 100%;
  }
  .proshow-tab .nav-tabs > li > a {
  	border-radius: 0;
  }
  .proshow-tab .nav-tabs > li > a, .proshow-tab .nav-tabs > li.active > a, .proshow-tab .nav-tabs > li.active > a:hover, .proshow-tab .nav-tabs > li.active > a:focus {
  	border: 1px #ddd solid;
  	margin-right: 0;
  }
  }
  @media (max-width : 420px) {/* 单行，240px,320px,375px,384px,414px */
  .blog-article .post-meta ul li.author {
  	display: none;
  }
  .prolist-wrap .model {
  	overflow-x: hidden;
  	text-overflow: ellipsis;
  	white-space: nowrap;
  	line-height: 1.4;
  }
  .breadcrumb-section h1 {
  	font-size: 30px;
  }
  }
  @media (max-width : 360px) {
  .searchform #s {
  	width: 80%;
  }
  .searchform #searchsubmit {
  	width: 20%;
  }
  .prolist-wrap .portfolio-item {
  	width: 100%;
  }
  }
  @media (max-width:1440px) and (min-width:1200px) {
  .searchform #s {
  	width: 82%;
  }
  .searchform #searchsubmit {
  	width: 18%;
  }
  }
  @media (max-width:1200px) and (min-width:1040px) {
  .searchform #s {
  	width: 78%;
  }
  .searchform #searchsubmit {
  	width: 22%;
  }
  }

  /* responsive */
  @media (min-width:1410px) {
  .container {
  	max-width: 1170px;
  	width: 1170px;
  }
  }
  @media (min-width:1570px) {
  .container {
  	max-width: 1170px;
  	width: 1170px;
  }
  /*#index-service .modIconText{padding-bottom:10px;}*/
  }
  @media (min-width:1890px) {
  .container {
  	max-width: 1370px;
  	width: 1370px;
  }
  #navigation .menu1 {
  	padding: 0 2.2rem;
  }
  #navigation .active .menu1 {
  	padding: 0 2.9rem;
  }
  #index-service .modIconText {
  	padding-bottom: 10px;
  }
  #index-service .modIconText .icon-text-simple h3 {
  	font-size: 1.4rem;
  }
  #index-service .modIconText .icon-text-simple p {
  	font-size: 1.2rem;
  	line-height: 1.6;
  }
  #index-news .desc {
  	font-size: 13px;
  }
  .f-about, .f-about p {
  	line-height: 1.85;
  }
  }
   @media (max-width : 1024px) {
  body {
  	word-break: break-all;
  	word-wrap: break-word
  }
  .container {
  	max-width: 98%;
  	width: 98%;
  }
  .columns {
  	padding-left: 15px;
  	padding-right: 15px;
  }
  .top-bar .title-area {
  	width: 100%;
  }
  .top-bar .title-area .name {
  	float: left;
    width:auto;
  }
  .top-bar .title-area .name h1 a {
  	padding: 0;
  }
  .top-bar .title-area .name h1 a img {
  	width: auto!important;
  }
  .top-bar .toggle-topbar, .top-bar-section {
  	display: none!important;
  }
  #navigation .title-area {
  	position: relative;
  }
  #navigation .mmenu-btn, #navigation .mmenu-btn a {
  	line-height: 1.1;
  	height: auto;
  }
  .mmenu-btn {
  	display: block;
  	cursor: pointer;
  	line-height: 1;
  	position: absolute;
  	top: 24px;
  	right: 0px;
  	border: 1px #ddd solid;
  	border-radius: 5px;
  	padding: 7px 8px;
  	background: rgba(255,255,255,0.9);
  }
  .mmenu-btn i {
  	font-size: 18px;
  }
  #mmenu {
  	border-left: 1px #E5E5E5 solid;
  }
  #mmenu .mmDiv {
  	padding-top: 20px;
  }
  #mmenu .mm-title {
  	padding: 12px 0 11px;
  }
  #mmenu .mm-search-form {
  	margin: 0;
  }
  #mmenu .mm-search {
  	position: static;
  	padding-left: 0;
  	margin-top: 10px;
  	padding-right: 0;
  	margin-bottom: -17px;
  }
  #mmenu .mm-search .side-mm-keyword {
  	max-height: 32px;
  	height: 32px;
  	padding: 0 16px;
  }
  #mmenu .noblock {
  	display: inline !important;
  	padding: 10px;
  }
  #mmenu .MMhead {
  	line-height: 2.8;
  	border-bottom: 1px #E5E5E5 solid;
  	margin: 0 -20px;
  	padding-left: 10px;
  }
  #mmenu .MMhead a {
  	background: none;
  }
  #mmenu .mm-header .mm-title {
  	top: -10px;
  	font-size: 14px;
  }
  #mmenu a {
  	color: #333;
  	font-size: 14px;
  }
  #mmenu a:hover, #mmenu a:active {
  	color: #AF7F48
  }
  #mmenu .mm-listview > li > a, #mmenu .mm-listview > li > span {
  	padding: 10px 10px 10px 20px;
  }
  #index-service {
  	padding: 30px 0 20px;
  }
  #index-service .iserv-img {
  	width: 100%;
  	margin-bottom: 25px;
  	text-align: center;
  }
  #index-service .iserv-img img {
  	margin: 0 auto;
  }
  #index-service .iserv-text {
  	width: 100%;
  }
  }
  @media (max-width : 990px) { /* 960 */
  .container {
  	max-width: 99%;
  	width: 99%;
  }
  .foot-about {
  	width: 50%;
  }
  .foot-contact {
  	width: 50%;
  }
  .foot-nav, .foot-qrcode {
  	display: none;
  }
  }
  @media (max-width : 768px) { /* 向下考虑iphone6的667px和736px */
  .modDefaultSlider .sequence {
  	height: 65vh;
  }
  #index-widget-1 h3 {
  	font-size: 1.3em;
  }
  .iw4-item {
  	width: 50%;
  	float: left;
  }
  #index-parallax {
  	display: none;
  }
  .iblog-item {
  	// width: 50%;
  }
  #index-b-widget {
  	padding: 30px 0 25px;
  }
  #footer-bottom b {
  	display: none;
  }
  }
  @media (max-width : 740px) { /* 双行，568px,600px,640px */
  .modDefaultSlider .sequence {
  	height: 60vh;
  }
  #index-service .modIconText .icon-text-simple h3 {
  	font-size: 1.2em;
  }
  #index-portfolio .project-item {
  	width: 50%;
  }
  #footer {
  	padding: 30px 0 20px;
  }
  .foot-about {
  	width: 100%;
  }
  .foot-contact {
  	display: none;
  }
  .modSectionHeader.big h2 {
  	font-size: 2rem;
  }
  }
  @media (max-width : 480px) {
  .modDefaultSlider .sequence {
  	height: 55vh;
  }
  .iw4-item {
  	width: 100%;
  }
  #index-b-widget {
  	padding: 20px 0 15px;
  }
  }
  @media (max-width : 420px) {/* 单行，240px,320px,375px,384px,414px */
  .modDefaultSlider .sequence {
  	height: 20vh;
  }
  .modDefaultSlider .sequence .sequence-prev, .modDefaultSlider .sequence .sequence-next {
  	top: 25%;
  }
  // #index-news, #index-client {
  // 	display: none;
  // }
  #index-b-widget {
  	background: #f4f4f4;
  }
  }
  @media (max-width : 360px) {
  .modDefaultSlider .sequence {
  	height: 40vh;
  }
  #index-portfolio .project-item {
  	width: 100%;
  }
  }
</style>
