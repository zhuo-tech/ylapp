import { RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'

 const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    meta: {
      title: 'yuanlin'
    },
    redirect:"index",
    component: Layout,
    children: [
      {
        path: '/index',
        name: 'index',
        meta: {
          title: 'fators'
        },
        component: () => import('@/views/index/index.vue')
      },
      {
        path: '/fators',
        name: 'fators',
        meta: {
          title: 'fators'
        },
        component: () => import('@/views/fators/index.vue')
      },
      {
        path: '/items',
        name: 'items',
        meta: {
          title: 'items'
        },
        component: () => import('@/views/items/index.vue')
      },

      {
        path: '/cases',
        name: 'cases',
        meta: {
          title: 'cases'
        },
        component: () => import('@/views/cases/index.vue')
      },

      {
        path: '/downloads',
        name: 'downloads',
        meta: {
          title: 'downloads'
        },
        component: () => import('@/views/downloads/index.vue')
      },

      {
        path: '/help',
        name: 'help',
        meta: {
          title: 'help'
        },
        component: () => import('@/views/help/index.vue')
      },

      {
        path: '/target',
        name: 'target',
        meta: {
          title: 'target'
        },
        component: () => import('@/views/target/index.vue')
      },
    ]
  }
]


export default routes;