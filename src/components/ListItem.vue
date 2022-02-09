<template>
  <div>
    <ul class="news-list">
      <li class="post" v-for="(p,idx) in listItems" :key="idx">
        <div class="points">
          {{p.points || 0}}
        </div>
        <div>
          <p class="news-title" > 
            <template v-if="p.domain">
              <a v-bind:href="p.url">{{p.title}}</a>
            </template>
            <template v-else>
              <router-link :to="`items/${p.id}`">{{p.title}}</router-link>
            </template>
          </p>
          <small class="link-text">{{p.time_ago}} by 
          <router-link v-if="p.user" class="link-text" :to="`/user/${p.user}`">
            {{p.user}}
          </router-link>
            <a v-else :href="p.url">
            {{p.domain}}
          </a>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  
  created () {
    const name = this.$route.path
    if(name ==='/news') {
      this.$store.dispatch('FETCH_NEWS')
    } else if (name ==='/ask') {
      this.$store.dispatch('FETCH_ASK')
    } else if (name === '/jobs') {
      this.$store.dispatch('FETCH_JOBS')
    }
  },
  computed: {
    listItems() {
      const name = this.$route.path
    if(name ==='/news') {
      return this.$store.state.news;
    } else if (name ==='/ask') {
      return this.$store.state.ask;
    } else if (name === '/jobs') {
      return this.$store.state.jobs;
    }
    }
  }, 
}
</script>

<style scoped>
.news-list {
  margin: 0;
  padding: 0;
}
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom:  1px solid #eee;
}
.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}
.news-title{
  margin: 0;
}
.link-text{
  color: #828282;
}
</style>