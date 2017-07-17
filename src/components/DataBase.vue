<template>



    <div id="add-event">
        <h3>Add A New Event</h3>
        <form v-if="!submitted">
            <label>Event Title:</label>
            <input type="text" v-model.lazy="event.title" required />
            <label>Event Content:</label>
            <textarea v-model.lazy.trim="event.content"></textarea>
            <div id="checkboxes">
              <!-- <p>
  <input type="checkbox" id="test5" />
  <label for="test5">Red</label>
</p> -->
                <p>Event Categories:</p>
                <label for="birthday">Birthday</label>
                <input id="birthday" type="checkbox" value="birthday" v-model="event.categories" />
                <label for="anniversary" >Anniversary</label>
                <input id="anniversary" type="checkbox" value="anniversary" v-model="event.categories" />
                <label for="holiday">Holiday</label>
                <input id="holiday" type="checkbox" value="holiday" v-model="event.categories" />
                <label for="graduation">Graduation</label>
                <input id="graduation"type="checkbox" value="graduation" v-model="event.categories" />
                <label for="other">Other</label>
                <input id="other" type="checkbox" value="other" v-model="event.categories" />
            </div>
            <label>Author:</label>
            <select v-model="event.author">
                <option v-for="author in authors">{{ author }}</option>
            </select>
            <hr />
            <button v-on:click.prevent="post">Add Event</button>
        </form>
        <div v-if="submitted">
            <h3>Thanks for adding your event go home or reload to</h3>
        </div>
        <div id="preview">
        <h3>Preview Submission</h3>
        <p>Event title: {{ event.title }}</p>
        <p>Event content:</p>
        <p style="white-space: pre">{{ event.content }}</p>
        <p>Event Type:</p>
        <ul>
            <li v-for="category in event.categories">{{ category }}</li>
        </ul>
        <p>Author: {{ event.author }}</p>
    </div>

    </div>
      </div>
</template>

<script>
// Imports

export default {
  name:'data-base',
    data () {
        return {
            event: {
                title: '',
                content: '',
                categories: [],
                author: ''
            },
            authors: ['Daisy', 'Logan ', 'Jessica', 'James', 'Dylan', 'Angie', 'Sarah', 'Mom', 'Dad'],
            submitted: false
        }
    },
    methods: {
        post: function(){
            this.$http.post('https://the-good-stuff-db.firebaseio.com/posts.json', this.blog).then(function(data){
                console.log(data);
                this.submitted = true;
            });
        }
    }
}
</script>

<style scoped>

#add-event {
  background-color: #F2EFEA;
    box-sizing: border-box;
    color: #656565;
    border: 1px solid #656565;
}
#add-event{
    margin: 20px auto;
    max-width: 600px;
    padding: 20px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea, select{
    display: block;
    width: 100%;
    padding: 8px;
}
textarea{
    height:200px;
}
#preview{
    padding: 10px 20px;
    border: 1px solid #20BF55;
    margin: 30px 0;
}
h3{
    margin-top: 10px;
    color: #20BF55;

}
#checkboxes input{
    display: inline-block;
    margin-right: 10px;
}
#checkboxes label{
    display: inline-block;
    margin-top: 0;
}
hr{
    display: none;
}
button{
    display: block;
    margin: 20px 0;
    background: #20BF55;
    color: #656565;
    border: 0;
    padding: 14px;
    border-radius: 4px;
    font-size: 18px;
    cursor: pointer;
}
</style>
