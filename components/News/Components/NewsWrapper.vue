<template>
  <div class="news_section_result" id="newssearchresult">
    <div class="newsarea">
      <ul>
        <li
          @click="toNewsDetail(list.id)"
          v-for="list in currentPageData"
          :key="list.id"
        >
          <div class="news_info">
            <time :datetime="list.time">{{ list.time }}</time>
            <div class="news_tag_list">
              <i v-for="(tag,index) in list.tags" :key="index" class="news_tag_release">{{ tag }}</i>
            </div>
          </div>
          <figure class="news_img">
            <img :src="HOST + list.img" :alt="list.tex" />
          </figure>
          <p class="news_txt">
            <a class="cur">{{ list.title }}</a>
          </p>
        </li>
      </ul>
    </div>
    <Pagination
      :itemsPerPage="itemsPerPage"
      :totalItems="sourceData.length"
      @page-change="handlePageChange"
    />
  </div>
</template>
<script>
  import Pagination from '~/components/Pagination/index.vue';
  import { HOST } from '~/config/index';

  export default {
    name: '',
    components: {
      Pagination,
      
    },
    mixins: [],
    props: {
      sourceData: {
        type: Array,
        default: () => [],
      },
      type: {
        type: String,
        required: true,
      },
    },
    data() {
      return {
        HOST,
        currentPage:1,
        itemsPerPage:5
      };
    },
    computed: {
      currentPageData() {
        const start = (this.currentPage - 1) * this.itemsPerPage;
        const end = start + this.itemsPerPage;
        return this.sourceData.slice(start, end);
      },
    },
    watch: {},
    mounted() {},
    methods: {
      toNewsDetail(id) {
        this.$router.push(`/news/${this.type}/${id}`);
      },
      handlePageChange(page) {
        // 在这里获取子组件传递过来的 currentPage
        this.currentPage = page
      },
    },
  };
</script>
<style lang="stylus" scoped>
  #newsrelease_top
    .newsarea
      ul
        background: white
        margin: 0 calc((20 / 750) * 100vw)
        padding: calc((50 / 750) * 100vw) calc((20 / 750) * 100vw) 0
        li
          cursor: pointer;
          border-bottom: 1px dashed #e6e6e6;
          margin: 0 0 calc((30 / 750) * 100vw);
          // padding: 0 0 calc((30 / 750) * 100vw);
          // padding:calc((30 / 750) * 100vw);
          &:hover
            box-shadow: 0 0 5px rgba(0,0,0,0.2);
          &::after
            content: "";
            display: block;
            clear: both;
          .news_info
            margin-bottom: calc((30 / 750) * 100vw);
            clear: both;
            time
              display: block;
              color: #323232;
              font-size: calc((22 / 750) * 100vw);
            i
              letter-spacing: 0;
              color: #282828;
              font-size: calc((20 / 750) * 100vw);
              border: 1px solid #ec9e9e;
              border-radius: 50px;
              margin-top: calc((15 / 750) * 100vw);
              padding: calc((10 / 750) * 100vw) calc((20 / 750) * 100vw);
              background: white;
              min-width: calc((127 / 750) * 100vw);
              text-align: center;
              margin-right: calc((10 / 750) * 100vw);
          .news_img
            float: left;
            width: 30%;
            margin-right: calc((40 / 750) * 100vw);
            img
              width: 100%;
              vertical-align: bottom;
          .news_txt
            float: left;
            width: 63%;
            padding: 0;
            letter-spacing: 0;
            font-size: calc((24 / 750) * 100vw);

            a.cur
              padding-bottom: 0.2em;
              background: linear-gradient(#141a21, #141a21) 0 100%/0 1px no-repeat;
              transition: background 0.3s;
              position: relative;
              color: black;
              vertical-align: middle;
              display: inline;
              text-decoration: none;
            a
              color: #323232;

    .news_tag_list
      display: flex;
      flex-wrap: wrap;

    .news_tag_release
      color: #cc0000 !important;

  @media screen and (min-width: 750.1px)
    #newsrelease_top
      .newsarea
        ul
          max-width: calc(1160 * 1px)
          width: calc(100 * 1%)
          margin-left: auto
          margin-right: auto
          padding: 2.5em 1.875em 0
          padding: 3.125em 3.125em 1.25em
          li
            margin: 0 0 1.875em;
            padding: 1.875em;
            .news_info
              float: right;
              width: 75%;
              display: flex;
              align-items: center;
              margin-bottom: 0.625em;
              time
                margin-bottom: 0;
                font-size: 12px;
                margin-right: 2em;
              i
                margin-right: 0.625em;
                min-width: 5.5em;
                padding: 0.16em 0.8em;
                font-size: 12px;
                margin-top: 0;
                text-align: center;
            .news_img
              min-width: 127px;
              width: 22%;
              margin-right: 1.25em;
            .news_txt
              font-size: 14px;
              padding-top: 1.08em;
              line-height: 1.8em;
              float: right;
              width: 75%;


    .news_tag_list
      gap: 0.625em 0.312em;
</style>
