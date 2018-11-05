<template>
	<div id="manage">
        <h1>Manage Data</h1>
        <input type="text" placeholder="Search tag #">
        <button>Submit</button>
        <router-link v-bind:to="{ name: 'NewPost' }">
          <button class="add">Add</button>
        </router-link>
        <div>
        <table>
          <tr>
            <td><strong>Company Name</strong></td>
            <td><strong>Tag Number</strong></td>
            <td><strong>Exhibitor</strong></td>
            <td><strong>Action</strong></td>
          </tr>
          <tr v-for="post in posts" :key="post">
            <td>{{ post.clubName }}</td>
            <td>{{ post.tagNum }}</td>
            <td>{{ post.firstName }}</td>
						<td>
              <router-link v-bind:to="{ name: 'EditPost', params: { id: post._id } }">Edit</router-link> |
              <a href="#" @click="deletePost(post._id)">Delete</a>
            </td>
          </tr>
				</table>

        </div>
	</div>

</template>

<script>
import PostsService from '@/services/PostsService'
export default {
  name: 'posts',
  data () {
    return {
      posts: []
    }
  },
  mounted () {
    this.getPosts()
  },
  methods: {
    async getPosts () {
      const response = await PostsService.fetchPosts()
      this.posts = response.data.posts
    },
    async deletePost (id) {
      await PostsService.deletePost(id)
      this.getPosts()
      this.$router.push({ name: 'Manage' })
    }
  }
}
</script>
<style>
    #manage{
        margin-top: 100px;
        height: 100%;
    }

		table{
				width: 80%;
				background-color: #e8e8e8;
				margin: auto;
				margin: 10px auto;
				padding: 10px 10px;
				border-radius: 10px;
		}

		td{
      width: 25%;
		}

    button, input{
        display: inline-block;
        height: 40px;
    }

    input{
        width: 200px;
    }
    .col{
        display: inline-block;
        width: 20%;
        text-align: left;
    }

    .row{
    padding: 10px 5px;
    }

    .add{

    }
		a {
      color: #4d7ef7;
      text-decoration: none;
		}
    a.add_post_link {
      background: #4d7ef7;
      color: #fff;
      padding: 10px 80px;
      text-transform: uppercase;
      font-size: 12px;
      font-weight: bold;
		}
</style>
