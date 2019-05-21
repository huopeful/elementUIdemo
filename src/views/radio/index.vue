<template>
    <div>
        <div>
            <radioDemo v-model="radio" label="1">备选项1</radioDemo>
            <radioDemo v-model="radio" label="2">备选项2</radioDemo>
        </div>
        <div>
            <radioGroupDemo v-model="radio3">
                <radioDemo label="上海"></radioDemo>
                <radioDemo label="北京"></radioDemo>
                <radioDemo label="广州"></radioDemo>
                <radioDemo label="深圳"></radioDemo>
            </radioGroupDemo>
        </div>
        <div>
            <radioGroupDemo v-model="radio3">
                <radioButtonDemo label="上海"></radioButtonDemo>
                <radioButtonDemo label="北京"></radioButtonDemo>
                <radioButtonDemo label="广州"></radioButtonDemo>
                <radioButtonDemo label="深圳"></radioButtonDemo>
            </radioGroupDemo>
        </div>
    </div>
</template>
<script>
import radioDemo from './components/radio'
import radioGroupDemo from './components/radio-group'
import radioButtonDemo from './components/radio-button'
export default {
    data() {
        return {
            radio:'1',
            radio3: '上海',
        }
    },
    components:{
        radioDemo,
        radioGroupDemo,
        radioButtonDemo
    }
}
</script>

