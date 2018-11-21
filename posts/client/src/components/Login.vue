<template>
    <div>
        <h4>Login</h4>
        <form>
            <label for="email" >E-Mail Address</label>
            <div>
                <input id="email" type="email" v-model="email" required autofocus>
            </div>
            <div>
                <label for="password" >Password</label>
                <div>
                    <input id="password" type="password" v-model="password" required>
                </div>
            </div>
            <div>
                <button type="submit" @click="handleSubmit">
                    Login
                </button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      if (this.password.length > 0) {
        this.$http
          .post("http://localhost:8081/login", {
            email: this.email,
            password: this.password
          })
          .then(response => {
                        let is_admin = response.data.user.is_admin
                        localStorage.setItem('user',JSON.stringify(response.data.user))
                        localStorage.setItem('jwt',response.data.token)

                        if (localStorage.getItem('jwt') != null){
                            this.$emit('loggedIn')
                            if(this.$route.params.nextUrl != null){
                                this.$router.push(this.$route.params.nextUrl)
                            }
                            else {
                                if(is_admin== 1){
                                    this.$router.push('admin')
                                }
                                else {
                                    this.$router.push('dashboard')
                                }
                            }
                        }
                    })
          .catch(function(error) {
            console.error(error.response);
          });
      }
    }
  }
};
</script>

<style>
#admin {
  width: 320px;
  margin: auto;
  text-align: center;
  border-radius: 10px;
  background-color: #cfd8dc;
  font-size: 14px;
  margin-top: 100px;
  font-family: monospace;
}
form {
  text-align: left;
  margin: auto;
  width: 100%;
  padding: 15px 25px;
  box-sizing: border-box;
}
input {
  margin-bottom: 7px;
  font-family: monospace;
}
button {
  font-family: monospace;
  height: 50px;
  width: 100%;
}
</style>
