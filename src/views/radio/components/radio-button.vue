<template>
  <label
    class="el-radio-button"
    :class="[
      size ? 'el-radio-button--' + size : '',
      { 'is-active': value === label },
      { 'is-disabled': isDisabled },
      { 'is-focus': focus }
    ]"
    role="radio"
    :aria-checked="value === label"
    :aria-disabled="isDisabled"
    :tabindex="tabIndex"
    @keydown.space.stop.prevent="value = isDisabled ? value : label"
  >
    <input
      class="el-radio-button__orig-radio"
      :value="label"
      type="radio"
      v-model="value"
      :name="name"
      @change="handleChange"
      :disabled="isDisabled"
      tabindex="-1"
      @focus="focus = true"
      @blur="focus = false"
    >
    <span
      class="el-radio-button__inner"
      :style="value === label ? activeStyle : null"
      @keydown.stop
    >
      <slot></slot>
      <template v-if="!$slots.default">{{label}}</template>
    </span>
  </label>
</template>
<style scoped>
@charset "UTF-8";

.el-radio-button,
.el-radio-button__inner {
    display: inline-block;
    position: relative;
    outline: 0
}

.el-radio-button__inner {
    line-height: 1;
    white-space: nowrap;
    vertical-align: middle;
    background: #FFF;
    border: 1px solid #DCDFE6;
    font-weight: 500;
    border-left: 0;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0;
    cursor: pointer;
    -webkit-transition: all .3s cubic-bezier(.645, .045, .355, 1);
    transition: all .3s cubic-bezier(.645, .045, .355, 1);
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 0
}

.el-radio-button__inner.is-round {
    padding: 12px 20px
}

.el-radio-button__inner:hover {
    color: #409EFF
}

.el-radio-button__inner [class*=el-icon-] {
    line-height: .9
}

.el-radio-button__inner [class*=el-icon-]+span {
    margin-left: 5px
}

.el-radio-button:first-child .el-radio-button__inner {
    border-left: 1px solid #DCDFE6;
    border-radius: 4px 0 0 4px;
    -webkit-box-shadow: none !important;
    box-shadow: none !important
}

.el-radio-button__orig-radio {
    opacity: 0;
    outline: 0;
    position: absolute;
    z-index: -1
}

.el-radio-button__orig-radio:checked+.el-radio-button__inner {
    color: #FFF;
    background-color: #409EFF;
    border-color: #409EFF;
    -webkit-box-shadow: -1px 0 0 0 #409EFF;
    box-shadow: -1px 0 0 0 #409EFF
}

.el-radio-button__orig-radio:disabled+.el-radio-button__inner {
    color: #C0C4CC;
    cursor: not-allowed;
    background-image: none;
    background-color: #FFF;
    border-color: #EBEEF5;
    -webkit-box-shadow: none;
    box-shadow: none
}

.el-radio-button__orig-radio:disabled:checked+.el-radio-button__inner {
    background-color: #F2F6FC
}

.el-radio-button:last-child .el-radio-button__inner {
    border-radius: 0 4px 4px 0
}

.el-radio-button:first-child:last-child .el-radio-button__inner {
    border-radius: 4px
}

.el-radio-button--medium .el-radio-button__inner {
    padding: 10px 20px;
    font-size: 14px;
    border-radius: 0
}

.el-radio-button--medium .el-radio-button__inner.is-round {
    padding: 10px 20px
}

.el-radio-button--small .el-radio-button__inner {
    padding: 9px 15px;
    font-size: 12px;
    border-radius: 0
}

.el-radio-button--small .el-radio-button__inner.is-round {
    padding: 9px 15px
}

.el-radio-button--mini .el-radio-button__inner {
    padding: 7px 15px;
    font-size: 12px;
    border-radius: 0
}

.el-radio-button--mini .el-radio-button__inner.is-round {
    padding: 7px 15px
}

.el-radio-button:focus:not(.is-focus):not(:active):not(.is-disabled) {
    -webkit-box-shadow: 0 0 2px 2px #409EFF;
    box-shadow: 0 0 2px 2px #409EFF
}
</style>

<script>
  import Emitter from 'element-ui/src/mixins/emitter';

  export default {
    name: 'ElRadioButton',

    mixins: [Emitter],

    inject: {
      elForm: {
        default: ''
      },
      elFormItem: {
        default: ''
      }
    },

    props: {
      label: {},
      disabled: Boolean,
      name: String
    },
    data() {
      return {
        focus: false
      };
    },
    computed: {
      value: {
        get() {
          return this._radioGroup.value;
        },
        set(value) {
          this._radioGroup.$emit('input', value);
        }
      },
      _radioGroup() {
        let parent = this.$parent;
        while (parent) {
          if (parent.$options.componentName !== 'ElRadioGroup') {
            parent = parent.$parent;
          } else {
            return parent;
          }
        }
        return false;
      },
      activeStyle() {
        return {
          backgroundColor: this._radioGroup.fill || '',
          borderColor: this._radioGroup.fill || '',
          boxShadow: this._radioGroup.fill ? `-1px 0 0 0 ${this._radioGroup.fill}` : '',
          color: this._radioGroup.textColor || ''
        };
      },
      _elFormItemSize() {
        return (this.elFormItem || {}).elFormItemSize;
      },
      size() {
        return this._radioGroup.radioGroupSize || this._elFormItemSize || (this.$ELEMENT || {}).size;
      },
      isDisabled() {
        return this.disabled || this._radioGroup.disabled || (this.elForm || {}).disabled;
      },
      tabIndex() {
        return (this.isDisabled || (this._radioGroup && this.value !== this.label)) ? -1 : 0;
      }
    },

    methods: {
      handleChange() {
        this.$nextTick(() => {
          this.dispatch('ElRadioGroup', 'handleChange', this.value);
        });
      }
    }
  };
</script>
