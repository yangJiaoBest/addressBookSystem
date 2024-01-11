<template>
  <div class="addGroup">
    <a-form :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
      <a-form-item label="角色名称" v-bind="validateInfos.roleName">
        <a-input v-model:value="modelRef.roleName" />
      </a-form-item>
      <a-form-item class="" label="分组查看" v-bind="validateInfos.seeGroup">
        <a-checkbox v-model:checked="modelRef.seeGroup" name="seeGroup">{{
          modelRef.seeGroup ? '是' : '否'
        }}</a-checkbox>
      </a-form-item>
      <a-form-item label="分组修改" v-bind="validateInfos.editGroup">
        <a-checkbox v-model:checked="modelRef.editGroup" name="editGroup">{{
          modelRef.editGroup ? '是' : '否'
        }}</a-checkbox>
      </a-form-item>
      <a-form-item label="数据查看" v-bind="validateInfos.seeData">
        <a-checkbox v-model:checked="modelRef.seeData" name="seeData">{{
          modelRef.seeData ? '是' : '否'
        }}</a-checkbox>
      </a-form-item>
      <a-form-item label="数据修改" v-bind="validateInfos.editData">
        <a-checkbox v-model:checked="modelRef.editData" name="editData">{{
          modelRef.editData ? '是' : '否'
        }}</a-checkbox>
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

// 根据 id 获取当前列表数据
const modelRef = reactive({
  roleName: '',
  seeGroup: true,
  editGroup: false,
  seeData: false,
  editData: false
})

const rulesRef = reactive({
  roleName: [
    {
      required: true,
      message: '请输入角色名称!'
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
        window.location.href = '/addressBook/roleManagement'
      }, 1000)
    })
    .catch((err) => {
      console.log('error', err)
    })
}
</script>