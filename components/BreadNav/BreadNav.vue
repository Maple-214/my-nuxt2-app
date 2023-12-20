<template>
  <div class="breadcrumbs" typeof="BreadcrumbList" vocab="https://schema.org/">
    <!-- home栏 -->
    <span property="itemListElement" typeof="ListItem">
      <nuxt-link title="home" to="/" class="home home-custom iconfont icon-home"
        >
        <span property="name">{{ home }}</span>
      </nuxt-link>
    </span>
    <!-- 有父级 -->
    <!-- 图标 -->
    <span
      v-if="meta.parentPath && meta.parentTitle"
      class="iconfont icon-youjiantou"
    ></span>
    <!-- title -->
    <span
      v-if="meta.parentPath && meta.parentTitle"
      property="itemListElement"
      typeof="ListItem"
    >
      <nuxt-link :title="meta.parentTitle" :to="meta.parentPath" class="home"
        ><span property="name">{{ meta.parentTitle }}</span>
      </nuxt-link>
    </span>
    <!-- 没有父级 -->
    <!-- 图标 -->
    <span
      v-if="!(meta.parentPath && meta.parentTitle)"
      class="iconfont icon-youjiantou"
    ></span>
    <!-- title -->
    <span
      v-if="!(meta.parentPath && meta.parentTitle)"
      property="itemListElement"
      typeof="ListItem"
      ><span property="name" class="post post-page current-item">{{
        meta.title
      }}</span></span
    >
  </div>
</template>
<script lang="ts">
  import { Meta } from '../SecondaryBanner/types';
  export default {
    name: '',
    components: {},
    mixins: [],
    props: {
      meta: {
        type: Object as () => Meta,
        required: true,
      },
    },
    data():any {
      return {
        // @ts-ignore
        home: this.$t('SITE_HOME_TITLE')
      };
    },
    computed: {},
    watch: {},
    mounted() {},
    methods: {},
  };
</script>
<style lang="stylus" scoped>
  .home-custom
    &::before
      position: relative;
      top: -1px;
      left: 0px;
</style>
