<template>
<div>
  <p>name : {{userInfo.id}}</p>
  <p>karma : {{userInfo.karma}}</p>
  <p>created : {{userInfo.created}}</p>
  
</div>

</template>

<script>


export default {
  computed :{
    userInfo () {
      return this.$store.state.user
    }
  },
  created () {
    const userMame =this.$route.params.id;
    this.$store.dispatch('FETCH_USER',userMame)
  },
}
</script>

<style>

</style>