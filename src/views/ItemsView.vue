<template>
  <div>
    <section>
      <div class="user-container">
        <div>
          <i class="fa-solid fa-user"></i>
        </div>
        <div class="user-discription">
          <router-link :to="`/user/${itemInfo.user}`">
            {{itemInfo.user}}
          </router-link>
          <div class="time">
            {{itemInfo.time_ago}}
          </div>
        </div>
      </div>
      <h2>{{itemInfo.title}}</h2>
    </section>
    <section>
      <div v-html="itemInfo.content"></div>
      
    </section>
  </div>
</template>

<script>
export default {
  computed :{
    itemInfo () {
      return this.$store.state.item
    }
  },
  created () {
    const id =this.$route.params.id;
    this.$store.dispatch('FETCH_ITEM',id)
  },
}
</script>

<style scoped>
  .user-container {
    display: flex;
    align-items: center;
    padding: 0.5rem;
  }
  .fa-user {
    font-size: 2.5rem;
  }
  .user-discription {
    padding-left:8px ;
  }
  .time {
    font-size: 0.7rem;
  }
</style>