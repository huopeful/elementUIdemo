<template>
    <div>
        <div>
            <checkboxDemo v-model="checked">备选项</checkboxDemo>
        </div>
        <div>
            <checkboxGroupDemo v-model="checkList">
                <checkboxDemo label="复选框 A"></checkboxDemo>
                <checkboxDemo label="复选框 B"></checkboxDemo>
                <checkboxDemo label="复选框 C"></checkboxDemo>
                <checkboxDemo label="禁用" disabled></checkboxDemo>
                <checkboxDemo label="选中且禁用" disabled></checkboxDemo>
            </checkboxGroupDemo>
        </div>
    </div>
</template>

<script>
import checkboxDemo from './components/checkbox.vue'
import checkboxButtonDemo from './components/checkbox-button.vue'
import checkboxGroupDemo from './components/checkbox-group.vue'
export default {
    data() {
        return {
            checked: true,
            checkList: ['选中且禁用','复选框 A','复选框 B']
        }
    },
    components:{
        checkboxDemo,
        checkboxButtonDemo,
        checkboxGroupDemo
    }
}
</script>
