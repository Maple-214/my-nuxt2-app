<template>
  <div class="pagebox">
    <div class="news_pager">
      <ul class="news_pager_num">
        <li @click="toFirstPage" class="news_pager_str">
          <p><span>«</span></p>
        </li>
        <li
          v-for="pageNumber in displayedPages"
          :key="pageNumber"
          @click="goToPage(pageNumber)"
          class="num"
          :class="{ news_pager_current: currentPage === pageNumber }"
        >
          <p>
            <span>{{ pageNumber }}</span>
          </p>
        </li>
        <li @click="toLastPage" class="news_pager_end">
          <p><span>»</span></p>
        </li>
      </ul>
      <ul class="paging" style="">
        <li v-if="!(currentPage === 1)" @click="prevPage">
          <span
            class="news_pager_arrow news_pager_arrow_prev jtbnews_arrow jtbnews_arrow_prev newsprev"
          ></span>
        </li>
        <li v-if="!(currentPage === totalPages)" @click="nextPage">
          <span
            class="news_pager_arrow news_pager_arrow_next jtbnews_arrow jtbnews_arrow_next newsnext"
          ></span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ComponentsPagination',
    props: {
      itemsPerPage: {
        type: String | Number,
        default: 10,
      },
      totalItems: {
        type: String | Number,
        default: 10,
      },
    },
    data() {
      return {
        currentPage: 1,
        // itemsPerPage: 10, // 每页显示的新闻条目数量
        // totalItems: 100, // 新闻总条目数量
      };
    },
    mounted() {},
    computed: {
      totalPages() {
        return Math.ceil(this.totalItems / this.itemsPerPage);
      },
      displayedPages() {
        const maxDisplayed = 5;
        const middle = Math.floor(maxDisplayed / 2);

        if (this.currentPage <= middle) {
          return Array.from(
            { length: Math.min(maxDisplayed, this.totalPages) },
            (_, i) => i + 1,
          );
        } else if (this.currentPage >= this.totalPages - middle) {
          return Array.from(
            { length: Math.min(maxDisplayed, this.totalPages) },
            (_, i) => this.totalPages - maxDisplayed + i + 1,
          );
        } else {
          return Array.from(
            { length: maxDisplayed },
            (_, i) => this.currentPage - middle + i,
          );
        }
      },
    },
    methods: {
      toFirstPage() {
        this.currentPage = 1;
        this.onPageChange(this.currentPage);
      },
      toLastPage() {
        this.currentPage = this.totalPages;
        this.onPageChange(this.currentPage);
      },
      nextPage() {
        if (this.currentPage < this.totalPages) {
          this.currentPage += 1;
        }
        this.onPageChange(this.currentPage);
      },
      prevPage() {
        if (this.currentPage > 1) {
          this.currentPage -= 1;
        }
        this.onPageChange(this.currentPage);
      },
      goToPage(pageNumber) {
        this.currentPage = pageNumber;
        this.onPageChange(this.currentPage);
      },
      onPageChange(page) {
        this.$emit('page-change', page);
      },
    },
  };
</script>

<style lang="stylus" scoped>
  .pagebox
    .jtbnews_arrow
      position: relative;
      width: calc((80 / 750) * 100vw);
      height: calc((80 / 750) * 100vw);
      margin: 0 calc((30 / 750) * 100vw);
      box-shadow: 0px 8px 20px -10px black;
    .jtbnews_arrow_next,
    .news_pager_arrow_prev
      background: white;
      &::before
        border-top: 2px solid black;
        border-right: 2px solid black;
        transform: rotate(45deg);
        position: absolute;
        content: "";
        width: calc((12 / 750) * 100vw);
        height: calc((12 / 750) * 100vw);
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        right: calc((5 / 750) * 100vw);
    .news_pager_arrow_prev
      &::before
        transform: rotate(-135deg);
        left: calc((5 / 750) * 100vw);
        right: 0
    .news_pager
      margin-left: auto
      margin-right: auto
      justify-content: center
      align-items: center
      text-align: center
      gap: 0 calc((95 / 750) * 100vw)
      padding: calc((70 / 750) * 100vw) 0 calc((120 / 750) * 100vw)
      .news_pager_num
        gap: 0 calc((75 / 750) * 100vw);
        justify-content: center;
        align-items: center;
        display: flex;
        .news_pager_disnon
          display: none;
        span
          color: #bfbfbf;
          font-size: calc((28 / 750) * 100vw);
        .news_pager_current
          span
            color: #323232;
            text-decoration: underline;
        .news_pager_str,
        .news_pager_end
          span
            font-size: 1.6em;
      .paging
        margin: 0 auto;
        display: inline-block;
        text-align: center;
        margin-top: calc((20 / 750) * 100vw);
        display: flex;
        justify-content: center;
        align-items: center;
        li
          span
            display: flex;
            justify-content: center;
            border-radius: 0;
            font-size: 0;
            line-height: 0;
            display: block;
            cursor: pointer;
            color: transparent;
            border: 0;
            border-radius: 50%;
            outline: none;
            appearance: none;
            overflow: hidden;
            text-indent: 100%;
            white-space: nowrap;

  @media screen and (min-width: 750.1px)
    .pagebox
      .news_pager_arrow
        width: 38px;
        height: 38px;
        margin: 0 14px;
        transition: .2s;
        &::before
          width: 6px;
          height: 6px
      .news_pager_arrow_next
        &::before
          right: 2px;
      .news_pager_arrow_prev
        &::before
            left: 2px;

      .news_pager
        gap: 0 2.188em
        padding: 3.125em 0 5.625em
        .news_pager_num
          gap: 0 2.063em;
          span
            font-size: 14px;
            cursor: pointer;
          .news_pager_current
            span
              color: #323232;
              text-decoration: underline;
          .news_pager_str,
          .news_pager_end
            span
              font-size: 1.6em;
</style>
