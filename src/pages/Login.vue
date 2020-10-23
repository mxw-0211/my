<template>
  <div>
    <el-link>login</el-link>
  </div>
</template>

<script>
import loginApi from '@/api/login'
import userApi from '@/api/user'
import { dynamicRouter } from '@/router'
export default {
  name: 'Login',
  created () {
    loginApi.login({
      username: '123456',
      password: '123456'
    }).then(res => {
      this.$store.dispatch('login/setToken', res.data)
      return userApi.getPermission()
    }).then(res => {
      const permissionRoutes = dynamicRouter.filter(item => {
        return res.data.includes(item.meta.code) || item.meta.code === 0
      })
      this.$store.dispatch('user/setPermissionRoutes', permissionRoutes)
      this.$router.addRoutes(permissionRoutes)
      this.$router.push('/')
    }).catch(err => {
      console.log(err)
    })
  },
  methods: {

  }
}
</script>

<style>
</style>