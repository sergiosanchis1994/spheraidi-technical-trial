<template>
    <div id='message' v-bind:class="[this.message.host ? 'message-container-sent': 'message-container-received']">
        <div class="message-container">
            <span> {{ this.message.text }} </span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MessageComponent',
    props: ['message'],
    mounted() {
        console.log('The message is: ' + this.message.text)
        let response = this.message.host ? 'yes' : 'no';
        console.log('Host?' + response)
    }
}
</script>

<style scoped>
    #message {
        display: flex;
        flex-direction: row;
        padding-top: 3px;
        padding-bottom: 3px;
    }

    .message-container {
        order: 0;
        flex: 0 1 auto;
        align-self: flex-start;
        border: 1px solid #007bff;
        border-radius: 5px;
        padding: 5px 10px;
    }

    .message-container-received {
        justify-content: flex-start;
        padding-right: 20%;
    }

    .message-container-sent {
        justify-content: flex-end;
        padding-left: 20%;
    }

</style>

