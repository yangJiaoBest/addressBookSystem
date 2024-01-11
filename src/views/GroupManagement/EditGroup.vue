<template>
  <div class="addGroup">
    <a-form :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
      <a-form-item label="名称" v-bind="validateInfos.name">
        <a-input v-model:value="modelRef.name" />
      </a-form-item>
      <a-form-item label="数量" v-bind="validateInfos.count">
        <a-input v-model:value="modelRef.count" />
      </a-form-item>
      <a-form-item label="创建人" v-bind="validateInfos.createUser">
        <a-input v-model:value="modelRef.createUser" />
      </a-form-item>
      <a-form-item label="创建时间" v-bind="validateInfos.createDate">
        <span class="date">{{ modelRef.createDate }}</span>
      </a-form-item>
      <a-form-item label="修改时间" v-bind="validateInfos.updateDate">
        <span class="date">{{ modelRef.updateDate }}</span>
      </a-form-item>

      <a-form-item class="btnGroup" :wrapper-col="{ offset: 6, span: 18 }">
        <a-row :gutter="24">
          <a-col :span="12">
            <a-button type="primary" html-type="submit" @click="onSubmit">保存</a-button>
          </a-col>
          <a-col :span="12">
            <a-button @click="resetFields">重置</a-button>
          </a-col>
        </a-row>
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup>
import { reactive, toRaw } from 'vue'
import { Form, message } from 'ant-design-vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const listId = route.params.id
console.log(listId)
const useForm = Form.useForm

// todo根据 id 获取当前列表数据

const modelRef = reactive({
  name: '',
  count: '',
  createUser: 'eee',
  createDate: '--',
  updateDate: '--'
})

const rulesRef = reactive({
  name: [
    {
      required: true,
      message: '请输入名称!'
    }
  ],
  count: [
    {
      required: true,
      message: '请输入数量!'
    }
  ],
  createUser: [
    {
      required: true,
      message: '请输入创建人!'
    }
  ]
})

const { validate, validateInfos, resetFields } = useForm(modelRef, rulesRef, {
  onValidate: (...args) => console.log(...args)
})

const key = 'updatable'

const onSubmit = () => {
  validate()
    .then(() => {
      console.log(toRaw(modelRef))
      message.loading({ content: '正在保存...', key })
      setTimeout(() => {
        message.success({ content: '保存成功!', key, duration: 2 })
        window.location.href = '/addressBook/groupManagement'
      }, 1000)
    })
    .catch((err) => {
      console.log('error', err)
    })
}
</script>
