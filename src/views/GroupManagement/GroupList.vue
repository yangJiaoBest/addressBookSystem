<template>
  <a-button class="editable-add-btn" type="primary" shape="round" style="margin-bottom: 16px">
    <template #icon>
      <PlusCircleOutlined />
    </template>
    <router-link to="/addressBook/addGroup">添加</router-link>
  </a-button>
  <a-button class="editable-add-btn" type="primary" shape="round" style="margin-bottom: 16px">
    <template #icon>
      <PlusCircleOutlined />
    </template>
    <router-link to="/addressBook/addGroup">删除</router-link>
  </a-button>
  <a-button class="editable-add-btn" type="primary" shape="round" style="margin-bottom: 16px">
    <template #icon>
      <PlusCircleOutlined />
    </template>
    <router-link to="/addressBook/addGroup">移动</router-link>
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
                name: 'editGroup',
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
    title: '名称',
    dataIndex: 'name',
    width: '15%'
  },
  {
    title: '数量',
    dataIndex: 'count',
    width: '10%'
  },
  {
    title: '创建人',
    dataIndex: 'createUser',
    width: '10%'
  },
  {
    title: '创建时间',
    dataIndex: 'createDate',
    width: '20%'
  },
  {
    title: '修改时间',
    dataIndex: 'updateDate',
    width: '20%'
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
    name: `Edrward ${i + 1}`,
    count: 32 + i,
    createUser: 'Edrward',
    createDate: '2023-10-12',
    updateDate: '2023-11-11'
  })
}
const dataSource = ref(data)

// 删除
const onDelete = (key) => {
  dataSource.value = dataSource.value.filter((item) => item.key !== key)
}
</script>
