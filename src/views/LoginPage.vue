<template>
  <div class="loginPage">
    <header>
      <h1>多成员 - 共享通讯录系统</h1>
    </header>

    <a-form :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
      <a-form-item label="用户名" v-bind="validateInfos.username">
        <a-input v-model:value="modelRef.username" />
      </a-form-item>
      <a-form-item label="密码" v-bind="validateInfos.password">
        <a-input-password v-model:value="modelRef.password" />
      </a-form-item>

      <a-form-item :wrapper-col="{ offset: 6, span: 18 }">
        <a-button type="primary" html-type="submit" @click="onSubmit">登录</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup>
import { reactive, toRaw } from 'vue'
import { Form } from 'ant-design-vue'

const useForm = Form.useForm

const modelRef = reactive({
  username: '',
  password: ''
})

const rulesRef = reactive({
  username: [
    {
      required: true,
      message: '请输入用户名!'
    }
  ],
  password: [
    {
      required: true,
      message: '请输入密码!'
    }
  ]
})

const { validate, validateInfos } = useForm(modelRef, rulesRef, {
  onValidate: (...args) => console.log(...args)
})

const onSubmit = () => {
  validate()
    .then(() => {
      console.log(toRaw(modelRef))
      localStorage.setItem('token', 'userCode')
      window.location.href = '/index'
    })
    .catch((err) => {
      console.log('error', err)
    })
}
</script>

<style>
.loginPage {
  min-width: 600px;
  margin: 0 auto;
}
.loginPage header {
  width: 100%;
  text-align: center;
  margin-bottom: 50px;
}
.ant-form-item-control-input-content {
  display: flex;
  justify-content: center;
}
</style>