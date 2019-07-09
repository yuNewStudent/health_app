import Vue from 'vue'
import Router from 'vue-router'

const App = () => import('@/views/Home')
const Login = () => import('@/views/Login')
// const Register = () => import('@/views/Regisiter')
// const ResetPassword = () => import('@/views/ResetPassword')
const Location = () => import('@/views/Home/Location')
const Write = () => import('@/views/Home/Write')
const My = () => import('@/views/Home/My')
const Setting = () => import('@/components/My/Setting')
const Customer = () => import('@/views/Home/Customer')
const CustomerDetail = () => import('@/components/Customer/CustomerDetail')
const ChoiceCompany = () => import('@/views/ChoiceCompany')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      component: App,
      redirect: '/location',
      children: [
        {
          path: '/location',
          name: 'Location',
          component: Location,
        },
        {
          path: '/my',
          name: 'My',
          component: My,
          children: [
            {
              path: '/my/setting',
              name: 'Setting',
              component: Setting
            }
          ]
        },
        {
          path: '/write',
          name: 'Write',
          component: Write
        },
        {
          path: '/customer',
          name: 'Customer',
          component: Customer,
          children: [
            {
              path: '/customer/detail',
              name: 'CustomerDetail',
              component: CustomerDetail
            }
          ]
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/choicecompany',
      name: 'ChoiceCompany',
      component: ChoiceCompany
    }
    // {
    //   path: '/register',
    //   name: 'Register',
    //   component: Register
    // },
    // {
    //   path: '/restpassword',
    //   name: 'ResetPassword',
    //   component: ResetPassword
    // }
  ]
})
