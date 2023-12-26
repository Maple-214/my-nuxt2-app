<template>
  <div id="wrapper" class="btn-hover-2 single-post">
    <SecondaryBanner :meta="meta" />
    <div id="primary" class="content-area">
      <main id="main" class="site-main" role="main">
        <section id="single-page" class="section contact-1" style="">
          <div class="container">
            <div class="row single-page-content">
              <div
                class="wpcf7 js"
                id="wpcf7-f7497-p7481-o1"
                lang="ja"
                dir="ltr"
              >
                <form
                  @submit.prevent="submitForm"
                  class="wpcf7-form init"
                  aria-label=""
                >
                  <p>
                    <label>{{
                      $t('inquiry.type1.form.checkbox.fruitsTitle')
                    }}</label
                    ><br />
                    <span class="wpcf7-form-control-wrap">
                      <span class="wpcf7-form-control wpcf7-checkbox">
                        <span
                          v-for="fruit in fruits"
                          :key="fruit.id"
                          class="wpcf7-list-item first"
                        >
                          <label>
                            <input
                              type="checkbox"
                              name=""
                              :value="fruit.value"
                              v-model="formData.selectedFruits"
                            />
                            <span class="wpcf7-list-item-label">{{
                              fruit.label
                            }}</span>
                          </label>
                        </span>
                      </span>
                    </span>
                  </p>
                  <p>
                    <VInput
                      v-for="(va, index) in vInputList"
                      :key="va.id"
                      :v-model="formData[va.tag]"
                      :inputInfo="va"
                      @input="updateFormName"
                    />
                  </p>
                  <!-- textarea特殊处理 -->
                  <p>
                    <label>
                      {{ vInputList[4].label }}
                      <br />
                      <span class="wpcf7-form-control-wrap">
                        <textarea
                          cols="40"
                          rows="10"
                          class="wpcf7-form-control wpcf7-textarea"
                          v-model="formData.message"
                          :placeholder="vInputList[4].placeholder"
                        ></textarea>
                      </span>
                    </label>
                  </p>

                  <p>
                    <span class="wpcf7-form-control-wrap"
                      ><span class="wpcf7-form-control wpcf7-acceptance"
                        ><span class="wpcf7-list-item"
                          ><label
                            ><input
                              type="checkbox"
                              v-model="privacypolicy"
                              name="privacypolicy"
                              aria-invalid="false"
                            /><span class="wpcf7-list-item-label">{{
                              $t('inquiry.submit.tex1')
                            }}</span></label
                          ></span
                        ></span
                      ></span
                    >
                  </p>
                  <p>
                    <input
                      :disabled="!privacypolicy"
                      class="wpcf7-form-control wpcf7-submit has-spinner"
                      type="submit"
                      :value="$t('inquiry.submit.tex2')"
                    /><span class="wpcf7-spinner"></span>
                  </p>
                  <div class="wpcf7-response-fail" v-show="isVerify.failStatus">
                    {{ isVerify.message }}
                  </div>
                  <div
                    class="wpcf7-response-success"
                    v-show="isVerify.successStatus"
                  >
                    {{ isVerify.message }}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>
<script>
  import SecondaryBanner from '../SecondaryBanner/SecondaryBanner.vue';
  import VInput from './Components/VInput.vue';
  export default {
    head() {
      return {
        title:
          this.$t('inquiry.type1.title') + '|' + this.$t('SITE_ROOT_TITLE'),
        meta: [
          {
            hid: 'description',
            name: 'description',
            content:
              this.$t('inquiry.type1.title') + '|' + this.$t('SITE_ROOT_TITLE'),
          },
        ],
      };
    },
    name: '',
    components: {
      SecondaryBanner,
      VInput,
    },
    mixins: [],
    props: {},
    data() {
      return {
        formData: {
          username: '',
          phone: '',
          email: '',
          email_confirm: '',
          message: '',
          selectedFruits: [],
        },

        privacypolicy: false,
        isVerify: {
          failStatus: false,
          successStatus: false,
          message: '',
        },
      };
    },
    computed: {
      meta() {
        return {
          title: this.$t('inquiry.type1.title'),
          path: this.$route.path,
        };
      },
      fruits() {
        return [
          {
            id: 1,
            label: this.$t('inquiry.type1.form.checkbox.fruits.item1.label'),
            value: this.$t('inquiry.type1.form.checkbox.fruits.item1.value'),
          },
          {
            id: 2,
            label: this.$t('inquiry.type1.form.checkbox.fruits.item2.label'),
            value: this.$t('inquiry.type1.form.checkbox.fruits.item2.value'),
          },
          {
            id: 3,
            label: this.$t('inquiry.type1.form.checkbox.fruits.item3.label'),
            value: this.$t('inquiry.type1.form.checkbox.fruits.item3.value'),
          },
          {
            id: 4,
            label: this.$t('inquiry.type1.form.checkbox.fruits.item4.label'),
            value: this.$t('inquiry.type1.form.checkbox.fruits.item4.value'),
          },
        ];
      },
      vInputList() {
        return [
          {
            id: 1,
            rules: 'isNull',
            label: this.$t('inquiry.type1.form.vInputList.item1.label'),
            placeholder: this.$t(
              'inquiry.type1.form.vInputList.item1.placeholder',
            ),
            type: 'text',
            tag: 'username',
          },
          {
            id: 2,
            rules: 'isNull',
            label: this.$t('inquiry.type1.form.vInputList.item2.label'),
            placeholder: this.$t(
              'inquiry.type1.form.vInputList.item2.placeholder',
            ),
            type: 'text',
            tag: 'phone',
          },
          {
            id: 3,
            rules: 'positive',
            label: this.$t('inquiry.type1.form.vInputList.item3.label'),
            placeholder: this.$t(
              'inquiry.type1.form.vInputList.item3.placeholder',
            ),
            type: 'email',
            tag: 'email',
          },
          {
            id: 4,
            rules: 'positive',
            label: this.$t('inquiry.type1.form.vInputList.item4.label'),
            placeholder: this.$t(
              'inquiry.type1.form.vInputList.item4.placeholder',
            ),
            type: 'email',
            tag: 'email_confirm',
          },
          {
            id: 5,
            rules: 'positive',
            label: this.$t('inquiry.type1.form.vInputList.item5.label'),
            placeholder: this.$t(
              'inquiry.type1.form.vInputList.item5.placeholder',
            ),
            type: 'textarea',
            tag: 'message',
          },
        ];
      },
    },
    watch: {
      privacypolicy() {},
    },
    mounted() {},
    methods: {
      submitForm() {
        const { username, phone, email, email_confirm } = this.formData;
        if (!username || !phone || !email || !email_confirm) {
          this.isVerify.failStatus = true;
          this.isVerify.message = '必須項目に入力してください。';
          return;
        }
        if (email !== email_confirm) {
          this.isVerify.failStatus = true;
          this.isVerify.message = 'メール アドレスが矛盾しています';
          return;
        }
        this.isVerify.failStatus = false;
        this.isVerify.successStatus = true;
        this.isVerify.message =
          'ありがとうございます。メッセージは送信されました。';

        console.log('Form Data:', this.formData);
      },
      updateFormName({ tag, newValue }) {
        // 更新 formData.name 的值
        this.$set(this.formData, tag, newValue);
      },
    },
  };
</script>
<style lang="stylus" scoped></style>
