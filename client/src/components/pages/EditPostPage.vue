<template>
  <div>
      <h1>
      Edit Page
      </h1>
  <hr>
    <input type="text" v-model="post.title">
    <input type="text" v-model="post.description">
    <button @click="editPost">Edit Post</button>

  </div>

</template>

<script>
import ps from '@/services/PostsService'
export default {
    data() {
        return {
            post:{
                title: '',
                description: ''
            }
        }
    },
    methods: {
        async getPost(){
            var response = await ps.getPost({
                id: this.$route.params.id
            });
            this.post.title = response.data.title;
            this.post.description = response.data.description;
        },
        async editPost(){
            await ps.updatePost({
                id: this.$route.params.id,
                title: this.post.title,
                description: this.post.description
            })
            this.$router.push({name:'posts'});
        }
    },
    mounted() {
        this.getPost();
    },
}
</script>

<style>

</style>
