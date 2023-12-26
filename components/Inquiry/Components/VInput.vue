<template>
  <ValidationObserver>
    <ValidationProvider rules="isNull" v-slot="{ errors }">
      <label v-if="inputInfo.type !== 'textarea'">
        {{ inputInfo.label }}<br />
        <span class="wpcf7-form-control-wrap">
          <input
            v-model="inputInfo.value"
            :placeholder="inputInfo.placeholder"
            :type="inputInfo.type"
            class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required wpcf7-not-valid"
            @input="
              $emit('input', { newValue: inputInfo.value, tag: inputInfo.tag })
            "
          />
          <!-- <span
            v-show="isInvalid(errors)"
            @click="hideErrorHandler"
            ref="validateSpan"
            class="wpcf7-not-valid-tip"
          >
            {{ errors[0] }}
          </span> -->
        </span>
      </label>
      
    </ValidationProvider>
  </ValidationObserver>
</template>

<script>
  import { extend } from 'vee-validate';
  extend('isNull', {
    validate: (value) => {
      if (value) return true;
      return 'This field must be a positive number';
    },
    validateOnBlur: true, // 在失去焦点时触发验证
  });

  export default {
    name: 'YourVInputComponent',
    props: {
      inputInfo: {
        type: Object,
        required: true,
      },
    },
    data() {
      return {
        hideError: false,
      };
    },
    computed: {
      isInvalid(errors) {
        return (errors) => errors && errors.length > 0;
      },
    },
    methods: {
      hideErrorHandler() {
        if (this.$refs.validateSpan) {
          this.$refs.validateSpan.style.display = 'none';
        }
      },
    },
  };
</script>

<style lang="stylus" scoped></style>
