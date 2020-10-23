<template>
  <div class="notFound">
    <img :src="imgPath">
  </div>
</template>

<script>
import imgPath from '@/assets/404.png'
export default {
  name: 'NotFound',
  data() {
    return {
      imgPath
    }
  },
  created() {
  }
}
</script>

<style lang="scss">
.notFound {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: auto;
    height: auto;
  }
}
</style>