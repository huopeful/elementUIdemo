<template>
    <transition name="el-alert-fade">
        <div
            class="el-alert"
            :class="[typeClass, center ? 'is-center' : '', 'is-' + effect]"
            v-show="visible"
            role="alert"
            @click="emitDemo()"
        >
            <i class="el-alert__icon" :class="[ iconClass, isBigIcon ]" v-if="showIcon"></i>
            <div class="el-alert__content">
                <span class="el-alert__title" :class="[ isBoldTitle ]" v-if="title || $slots.title">
                    <slot name="title">{{ title }}</slot>
                </span>
                <p class="el-alert__description" v-if="$slots.default && !description">
                    <slot></slot>
                </p>
                <p
                    class="el-alert__description"
                    v-if="description && !$slots.default"
                >{{ description }}</p>
                <i
                    class="el-alert__closebtn"
                    :class="{ 'is-customed': closeText !== '', 'el-icon-close': closeText === '' }"
                    v-show="closable"
                    @click="close()"
                >{{closeText}}</i>
            </div>
            <!-- <slot></slot> -->
        </div>
    </transition>
</template>
<style scoped>
.el-alert {
    width: 100%;
    padding: 8px 16px;
    margin: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border-radius: 4px;
    position: relative;
    background-color: #FFF;
    overflow: hidden;
    opacity: 1;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-transition: opacity .2s;
    transition: opacity .2s
}

.el-alert.is-light .el-alert__closebtn {
    color: #C0C4CC
}

.el-alert.is-dark .el-alert__closebtn,
.el-alert.is-dark .el-alert__description {
    color: #FFF
}

.el-alert.is-center {
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center
}

.el-alert--success.is-light {
    background-color: #f0f9eb;
    color: #67C23A
}

.el-alert--success.is-light .el-alert__description {
    color: #67C23A
}

.el-alert--success.is-dark {
    background-color: #67C23A;
    color: #FFF
}

.el-alert--info.is-light {
    background-color: #f4f4f5;
    color: #909399
}

.el-alert--info.is-dark {
    background-color: #909399;
    color: #FFF
}

.el-alert--info .el-alert__description {
    color: #909399
}

.el-alert--warning.is-light {
    background-color: #fdf6ec;
    color: #E6A23C
}

.el-alert--warning.is-light .el-alert__description {
    color: #E6A23C
}

.el-alert--warning.is-dark {
    background-color: #E6A23C;
    color: #FFF
}

.el-alert--error.is-light {
    background-color: #fef0f0;
    color: #F56C6C
}

.el-alert--error.is-light .el-alert__description {
    color: #F56C6C
}

.el-alert--error.is-dark {
    background-color: #F56C6C;
    color: #FFF
}

.el-alert__content {
    display: table-cell;
    padding: 0 8px
}

.el-alert__icon {
    font-size: 16px;
    width: 16px
}

.el-alert__icon.is-big {
    font-size: 28px;
    width: 28px
}

.el-alert__title {
    font-size: 13px;
    line-height: 18px
}

.el-alert__title.is-bold {
    font-weight: 700
}

.el-alert .el-alert__description {
    font-size: 12px;
    margin: 5px 0 0
}

.el-alert__closebtn {
    font-size: 12px;
    opacity: 1;
    position: absolute;
    top: 12px;
    right: 15px;
    cursor: pointer
}

.el-alert__closebtn.is-customed {
    font-style: normal;
    font-size: 13px;
    top: 9px;
    color: red
}

.el-alert-fade-enter,
.el-alert-fade-leave-active {
    opacity: 0
}
</style>


<script type="text/babel">
const TYPE_CLASSES_MAP = {
    'success': 'el-icon-success',
    'warning': 'el-icon-warning',
    'error': 'el-icon-error'
};
export default {
    name: 'ElAlert',

    props: {
        title: {
            type: String,   // 字符串类型
            default: '' // 默认值
        },
        description: {
            type: String,
            default: ''
        },
        type: {
            type: String,
            default: 'info'
        },
        closable: {
            type: Boolean,
            default: true
        },
        closeText: {
            type: String,
            default: ''
        },
        showIcon: Boolean,
        center: Boolean,
        effect: {   // 控制主题
            type: String,
            default: 'light',
            validator: function(value) {
                return ['light', 'dark'].indexOf(value) !== -1;
            }
        },
        aaa:{
            type: String,
            default: 'wtf',
        }
    },

    data() {
        return {
            visible: true
        };
    },
    created() {
        console.log(this.$slots.default);
        
    },

    methods: {
        close() {
            this.visible = false;
            console.log(this.aaa);
            
            this.$emit('close');
        },
        emitDemo(){
            this.$emit('demoLog');
        }
    },

    computed: {
        typeClass() {
            return `el-alert--${ this.type }`;
        },

        iconClass() {
            return TYPE_CLASSES_MAP[this.type] || 'el-icon-info';
        },

        isBigIcon() {
            return this.description || this.$slots.default ? 'is-big' : '';
        },

        isBoldTitle() {
            return this.description || this.$slots.default ? 'is-bold' : '';
        }
    }
};
</script>
