<template>
    <div class="row main-container">
        <contacts class="col-md-2 chat-component"/>
        <chat class="col-md-10 chat-component" />
    </div>
</template>

<script>
import ContactsComponent from './Contacts'
import ChatRoomComponent from './ChatRoom'

export default {
    components: {
        contacts: ContactsComponent,
        chat: ChatRoomComponent
    }
}
</script>

<style scoped>
    .main-container {
        flex: 1;
        margin: 0;
    }

    .chat-component {
        border: 5px solid #007bff;
        background-color: #e3f2fd;
    }
</style>

