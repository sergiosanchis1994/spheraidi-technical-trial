<template>
  <div id="login">
        <form>
            <div class="form-group row">
                <label for="inputUsername" class="col-sm-2 col-form-label">Username</label>
                <div class="col-sm-10">
                <input type="text" class="form-control" v-model="input.username">
                </div>
            </div>
            <div class="form-group row">
                <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                <div class="col-sm-10">
                <input type="password" class="form-control" v-model="input.password">
                </div>
            </div>
            <button type="submit" class="btn btn-primary" @click.prevent="login" v-on:keyup.enter="login">Login</button>
            <button type="submit" class="btn btn-primary" @click.prevent="register" v-on:keyup.enter="register">Register</button>
        </form>
    </div>
</template>
<script>
export default {
        name: 'Login',
        data() {
            return {
                input: {
                    username: "",
                    password: ""
                }
            }
        },
        methods: {
            login() {
                if(this.input.username != "" && this.input.password != "") {
                    if(this.input.username == "test" && this.input.password == "test") {
                        this.$emit("authenticated", true);
                        this.$router.replace({ name: "chat" });
                    } else {
                        console.log("The username and / or password is incorrect");
                    }
                } else {
                    console.log("A username and password must be present");
                }
                this.input.username = "";
                this.input.password = "";
            }
        }
    }
</script>
<style scoped>
    #login {
        width: 500px;
        border: 1px solid #CCCCCC;
        background-color: #FFFFFF;
        color: #007bff;
        margin: auto;
        margin-top: 200px;
        padding: 20px;
    }
</style>

