<template>
  <a-layout style="min-height: 100vh">
    <a-layout-sider
      :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0, top: 0, bottom: 0 }"
      v-model:collapsed="collapsed"
      :trigger="null"
      collapsible
    >
      <div class="logo" />
      <a-menu v-model:selectedKeys="selectedKeys" theme="light" mode="inline">
        <a-menu-item key="1">
          <HomeOutlined />
          <span>
            <router-link to="/index">首页</router-link>
          </span>
        </a-menu-item>
        <a-menu-item key="2">
          <GroupOutlined />
          <span>
            <router-link to="/addressBook/groupManagement">分组管理</router-link>
          </span>
        </a-menu-item>
        <a-menu-item key="3">
          <UsergroupAddOutlined />
          <span>
            <router-link to="/addressBook/roleManagement">角色管理</router-link>
          </span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout :style="{ marginLeft: collapsed ? '80px' : '200px' }">
      <a-layout-header style="background: #fff; padding: 0">
        <menu-unfold-outlined
          v-if="collapsed"
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />
        <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
      </a-layout-header>
      <a-layout-content
        :style="{
          margin: '24px 16px 0',
          overflow: 'initial',
          padding: '24px',
          background: '#fff',
          minHeight: '280px'
        }"
      >
        <RouterView />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script setup>
import { RouterView } from 'vue-router'
import { ref } from 'vue'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UsergroupAddOutlined,
  GroupOutlined,
  HomeOutlined
} from '@ant-design/icons-vue'

const selectedKeys = ref(['1'])
const collapsed = ref(false)
</script>
<style>
.ant-layout-header .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

.ant-layout-header .trigger:hover {
  color: #1890ff;
}

.ant-layout-header .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.3);
  margin: 16px;
}

.site-layout .site-layout-background {
  background: #fff;
}
.ant-layout .ant-layout-sider {
  background: #fff;
}
</style>