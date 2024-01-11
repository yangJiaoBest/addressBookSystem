<template>
  <a-button class="editable-add-btn" type="primary" shape="round" style="margin-bottom: 16px">
    <template #icon>
      <PlusCircleOutlined />
    </template>
    <router-link to="/addressBook/addRole">添加</router-link>
  </a-button>
  <a-table
    bordered
    :data-source="dataSource"
    :columns="columns"
    @change="handleTableChange"
  >
    <template #bodyCell="{ column, record }">
      <template v-if="column.dataIndex === 'operation'">
        <a-space>
          <a-button type="primary" shape="round">
            <template #icon>
              <EditOutlined />
            </template>
            <router-link
              :to="{
                name: 'editRole',
                params: { id: record.key }
              }"
            >
              编辑
            </router-link>
          </a-button>
          <a-popconfirm
            v-if="dataSource.length"
            title="Sure to delete?"
            @confirm="onDelete(record.key)"
          >
            <a-button type="primary" danger shape="round">
              <template #icon>
                <DeleteOutlined />
              </template>
              删除
            </a-button>
          </a-popconfirm>
        </a-space>
      </template>
    </template>
  </a-table>
</template>
<script setup>
import { PlusCircleOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons-vue'

import { ref } from 'vue'
const columns = [
  {
    title: 'ID',
    dataIndex: 'ID',
    width: '10%'
  },
  {
    title: '用户名',
    dataIndex: 'useName',
    width: '15%'
  },
  {
    title: '密码',
    dataIndex: ' password',
    width: '15%'
  },
  {
    title: '分组查看',
    dataIndex: 'seeGroup',
    width: '10%'
  },
  {
    title: '分组修改',
    dataIndex: 'editGroup',
    width: '10%'
  },
  {
    title: '数据查看',
    dataIndex: 'seeData',
    width: '10%'
  },
  {
    title: '数据修改',
    dataIndex: 'editData',
    width: '10%'
  },

  {
    title: '操作',
    dataIndex: 'operation',
    align: 'center',
    width: '10%'
  }
]

const data = []
for (let i = 0; i < 100; i++) {
  data.push({
    key: `${i + 1}`,
    ID: `${i + 1}`,
    roleName: `Edrward ${i + 1}`,
    seeGroup: '是',
    editGroup: ' 否',
    seeData: '是',
    editData: '是'
  })
}
const dataSource = ref(data)

// 删除
const onDelete = (key) => {
  dataSource.value = dataSource.value.filter((item) => item.key !== key)
}
</script>
