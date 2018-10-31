<template>
	<div id="manage">
        <h1>Manage Data</h1>
        <input v-model="newItem" type="text" placeholder="Search tag #">
        <button>Submit</button>
        <button id="addButton" @click="addNewItem" class="add">Add</button>
        <div class="searchResults">
            <ul>
                <li v-for="item in database">{{ item }}</li>
            </ul>
        </div>
	</div>

</template>

<script>
export default{
    name: 'test',
    data () {
        return {
            database: ['City Market', 'Simply Mac', 'Chipotle'],
            newItem: ''
        }
    },
    methods: {
        addNewItem() {
            this.database.push(this.newItem);
            this.newItem = '';
        }
    }
}
</script>

<style>
    #manage{
        margin-top: 100px;
        height: 100%;
    }

    .searchResults{
        width: 80%;
        background-color: #e8e8e8;
        margin: auto;
        margin: 25px auto;
        padding: 30px 25px;
        border-radius: 10px;
        font-family: monospace;
        font-size: 16px;
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
        width: 30%;
        text-align: left;
    }

    .row{
    padding: 10px 5px;
    }

    .add{

    }
</style>
