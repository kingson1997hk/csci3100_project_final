import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/login'
import Sign_up from '@/components/sign_up'
import Forget_pw from '@/components/forget_pw'
import Pw_notice from '@/components/pw_notice'
import Report_User from '@/components/reportuser'
import Report_notice from '@/components/report_notice'
import Account_Setting from '@/components/accountsetting'
import View_information from '@/components/viewinfo'
import Change_information from '@/components/changeinfo'
import Change_password from '@/components/changepw'
import Change_Info_notice from '@/components/changeinfo_notice'
import Change_PW_notice from '@/components/changepw_notice'
import Initiate_New_gathering from '@/components/initiate'
import Initiate_notice from '@/components/initiate_notice'
import View_involoved from '@/components/view_involoved'
import Join_gathering from '@/components/join_gathering'
import Confirm_join from '@/components/confirm_join'
import See_members from '@/components/see_members'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/sign_up',
      name: 'sign_up',
      component: Sign_up
    },
    {
      path: '/forget_pw',
      name: 'forget_pw',
      component: Forget_pw
    },
    {
      path: '/pw_notice',
      name: 'pw_notice',
      component: Pw_notice
    },
    {
      path: '/reportuser',
      name: 'reportuser',
      component: Report_User
    },
    {
      path: '/report_notice',
      name: 'report_notice',
      component: Report_notice
    },
    {
      path: '/accountsetting',
      name: 'accountsetting',
      component: Account_Setting
    },
    {
      path: '/viewinfo',
      name: 'viewinfo',
      component: View_information
    },
    {
      path: '/changeinfo',
      name: 'changeinfo',
      component: Change_information
    },
    {
      path: '/changepw',
      name: 'changepw',
      component: Change_password
    },
    {
      path: '/changeinfo_notice',
      name: 'changeinfo_notice',
      component: Change_Info_notice
    },
    {
      path: '/changepw_notice',
      name: 'changepw_notice',
      component: Change_PW_notice
    },
    {
      path: '/initiate',
      name: 'initiate',
      component: Initiate_New_gathering
    },
    {
      path: '/initiate_notice',
      name: 'initiate_notice',
      component: Initiate_notice
    },
    {
      path: '/view_involoved',
      name: 'view_involoved',
      component: View_involoved
    },
    {
      path: '/join_gathering',
      name: 'Join_gathering',
      component: Join_gathering
    },
    {
      path: '/confirm_join',
      name: 'Confirm_join',
      component: Confirm_join,
      props: true
    },
    {
      path: '/see_members',
      name: 'See_members',
      component: See_members,
      props: true
    }
  ]
})