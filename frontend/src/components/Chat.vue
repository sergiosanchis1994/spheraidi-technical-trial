<template>
    <div class="main-container">
        <div class="show-msg-area">
            <ul>
                <li v-for="message in messages"> 
                    <span>{{message.text}} </span>
                </li>
            </ul>
        </div>
        <div class="write-msg-area">
            <form class="form-inline">
                <input type="text" class="col-md-10" id="messageArea" v-model="message"></input>
                <button @click.prevent="sendMessage" v-on:keyup.enter="sendMessage" type="submit" class="btn btn-primary col-md-2">Send</button>
            </form>
        </div>
    </div>
</template>
<script>
import SockJS from 'sockjs-client'
import Stomp from 'webstomp-client'

export default {
    data(){
        return {
            messages: [],
            message : '',
            connected: false
        }
    },
    methods: {
        sendMessage(){
            console.log(this.message);
            if (this.stompClient && this.stompClient.connected) {
                console.log("Sending...")
                console.log(JSON.stringify({'content': this.message}))
                this.stompClient.send('/app/from-client', JSON.stringify({'content': this.message}))
            }
            this.message = '';
        
        }
    },
    created() {
      this.socket = new SockJS('http://localhost:8088/websocket-endpoint')
      this.stompClient = Stomp.over(this.socket)
      this.stompClient.connect({}, (frame) => {
        this.connected = true
        console.log(frame)
        this.stompClient.subscribe('/topic/tick', (tick) => {
          console.log("El contenido es: " + JSON.parse(tick.body).content)
          this.messages.push({text: JSON.parse(tick.body).content})
        })
      }, (error) => {
        console.log(error)
        this.connected = false
      })
    },
    destroyed(){
      if (this.stompClient) {
        this.stompClient.disconnect()
      }
      this.connected = false
    }
}
</script>
<style scoped>
    .main-container {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: center;
        align-content: stretch;
        align-items: stretch;
    }
    .show-msg-area {
        order: 0;
        flex: 1 1 auto;
        align-self: auto;
        padding: 2%;
        color: #007bff;
    }
    .write-msg-area {
        order: 0;
        flex: 0 1 auto;
        align-self: auto;
        padding:2%;
    }
    ul {
        list-style-type: none;
    }
</style>

