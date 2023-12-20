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
                  aria-label="コンタクトフォーム"
                >
                  <p>
                    <label>お問い合わせ区分</label><br />
                    <span class="wpcf7-form-control-wrap">
                      <span class="wpcf7-form-control wpcf7-checkbox">
                        <span
                          v-for="fruit in fruits"
                          :key="fruit.value"
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
                      ref="vs"
                      v-for="va in vInputList"
                      :key="va.id"
                      :v-model="formData[va.tag]"
                      :inputInfo="va"
                      @input="updateFormName"
                    />
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
                              value="1"
                              aria-invalid="false"
                            /><span class="wpcf7-list-item-label"
                              >プライバシーポリシーに同意する</span
                            ></label
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
                      value="送信する"
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
        title: this.$t('contact.type1_tile') + '|' + this.$t('SITE_ROOT_TITLE'),
        meta: [
          {
            hid: 'description',
            name: 'description',
            content:
              this.$t('contact.type1_tile') + '|' + this.$t('SITE_ROOT_TITLE'),
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
        fruits: [
          { label: '不動産について', value: '不動産について' },
          { label: '医療について', value: '医療について' },
          { label: '採用について', value: '採用について' },
          { label: 'その他', value: 'その他' },
        ],
        vInputList: [
          {
            id: 1,
            rules: 'isNull',
            label: '氏名※必須',
            placeholder: '山田太郎',
            type: 'text',
            tag: 'username',
          },
          {
            id: 2,
            rules: 'isNull',
            label: '電話番号※必須',
            placeholder: 'ハイフン無しでご入力ください',
            type: 'text',
            tag: 'phone',
          },
          {
            id: 3,
            rules: 'positive',
            label: 'メールアドレス※必須',
            placeholder: 'sample@example.com',
            type: 'email',
            tag: 'email',
          },
          {
            id: 4,
            rules: 'positive',
            label: 'メールアドレス確認※必須',
            placeholder: '確認のためもう一度入力してください',
            type: 'email',
            tag: 'email_confirm',
          },
          {
            id: 5,
            rules: 'positive',
            label: 'メッセージ本文',
            placeholder: '',
            type: 'textarea',
            tag: 'message',
          },
        ],
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
          title: this.$t('contact.type1_tile'),
          path: this.$route.path,
        };
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
