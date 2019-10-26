<template>
  <div>
    <div class="add">
      <input type="text" v-model="post.title"/>
      <input type="text" v-model="post.description" />
      <button @click="addPost">Add Post</button>
    </div>
    <div v-if="posts.length">
      <table>
        <tr>
          <th>Заголовок</th>
          <th>Описание</th>
          <th>Действие</th>
        </tr>
        <tr v-for="(post, index) in posts" :key="index">
          <td>{{ post.title }}</td>
          <td>{{ post.description }}</td>
          <td>
            <router-link :to="{name:'EditPost', params: {id:post._id}}">Edit Post</router-link>
            <button @click="removePost(post._id)">Delete</button>
          </td>
        </tr>
      </table>
    </div>
    <p v-else>Постов нет!</p>
  </div>
</template>

<script>
import ps from "@/services/PostsService";

export default {
  data() {
    return {
      posts: [],
      post:{
        title:'',
        description:''
      }
    };
  },
  methods: {
    async getPosts() {
      var response = await ps.fetchPosts();
      this.posts = response.data.posts;
    },
    async addPost(){
      await ps.addNewPost({
        title: this.post.title,
        description: this.post.description
      });
      this.getPosts();
    },
    async removePost(value){
      await ps.deletePost(value);
      this.getPosts();
    }
    
  },
  mounted() {
    this.getPosts();
  }
};
</script>

<style>
</style>