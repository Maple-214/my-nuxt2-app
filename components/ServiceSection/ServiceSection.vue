<template>
  <section
    v-if="item.position === 'left'"
    :id="'serviceSection' + item.id"
    class="featured-left"
  >
    <div class="container">
      <div
        class="side-content-wrapper kd-animated fadeInRight kd-animate"
        data-animation-delay="200"
      >
        <i class="section-icon" style=""></i>
        <h2 class="side-content-title">{{ item.title }}</h2>
        <slot name="cc1"></slot>
        <slot name="cc2"></slot>
        <h6 class="side-content-subtitle">
          {{ item.desc }}
        </h6>
        <div class="side-content-text">
          <slot name="cc3"></slot>
          <ul>
            <li
              class="iconfont"
              :class="item.hiddenIcon ? 'clear-padding-left' : 'icon-duigou'"
              v-if="item.tips"
              v-for="tip in item.tips"
            >
              {{ tip }}
            </li>
            <a target="_blank" v-if="item.emailLink" :href="item.emailLink"
              >履歴書テンプレートのダウンロードはこちら</a
            >
          </ul>
          <p></p>
        </div>
        <div v-if="!item.hiddenBtn" class="side-content-link sc-primary-btn">
          <nuxt-link
            :to="item.path"
            target="_self"
            title="Learn more"
            class="tt_button tt_primary_button btn_primary_color button-action-link"
          >
            Learn more
          </nuxt-link>
        </div>
      </div>
      <div
        class="side-featured-wrapper fss-rectangle kd-animated fadeInLeft kd-animate"
        data-animation-delay="200"
      >
        <div class="featured-image">
          <img
            decoding="async"
            :src="item.img"
            class="attachment-full"
            alt=""
            title="img_service02"
            :srcset="`${item.img} 590w, ${item.img} 300w`"
            sizes="(max-width: 590px) 100vw, 590px"
          />
        </div>
      </div>
    </div>
  </section>
  <section v-else :id="'serviceSection' + item.id" class="featured-right">
    <div class="container">
      <div
        class="side-content-wrapper kd-animated fadeInLeft kd-animate"
        data-animation-delay="200"
      >
        <i class="section-icon" style=""></i>
        <h2 class="side-content-title">{{ item.title }}</h2>
        <slot name="cc1"></slot>
        <slot name="cc2"></slot>
        <h6 class="side-content-subtitle">
          {{ item.desc }}
        </h6>
        <div class="side-content-text">
          <slot name="cc3"></slot>
          <ul>
            <li
              class="iconfont"
              :class="item.hiddenIcon ? 'clear-padding-left' : 'icon-duigou'"
              v-if="item.tips"
              v-for="tip in item.tips"
            >
              {{ tip }}
            </li>
            <a target="_blank" v-if="item.emailLink" :href="item.emailLink"
              >履歴書テンプレートのダウンロードはこちら</a
            >
          </ul>
          <p></p>
        </div>
        <div v-if="!item.hiddenBtn" class="side-content-link sc-primary-btn">
          <nuxt-link
            :to="item.path"
            target="_self"
            title="Learn more"
            class="tt_button tt_primary_button btn_primary_color button-action-link"
          >
            Learn more
          </nuxt-link>
        </div>
        <div v-if="item.recruit" class="side-content-link sc-primary-btn">
          <nuxt-link
            to="/about/type2"
            target="_self"
            :title="item.recruit_tex"
            class="tt_button tt_primary_button btn_primary_color button-action-link"
          >
            {{ item.recruit_tex }}
          </nuxt-link>
        </div>
      </div>
      <div
        class="side-featured-wrapper fss-rectangle kd-animated fadeInRight kd-animate"
        data-animation-delay="200"
      >
        <div class="featured-image">
          <img
            decoding="async"
            :src="item.img"
            class="attachment-full"
            alt=""
            title="img_service02"
            :srcset="`${item.img} 590w, ${item.img} 300w`"
            sizes="(max-width: 590px) 100vw, 590px"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
  import { Item } from './types';

  export default {
    name: '',
    components: {},
    mixins: [],
    props: {
      item: {
        type: Object as () => Item,
        required: true,
      },
    },
    data() {
      return {};
    },
    computed: {},
    watch: {},
    mounted() {},
    methods: {},
  };
</script>
<style lang="stylus" scoped>
  .clear-padding-left
    padding-left:0
</style>
