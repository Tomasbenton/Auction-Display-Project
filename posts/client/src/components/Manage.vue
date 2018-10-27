<template>
	<div id="manage">
        <h1>Manage Data</h1>
        <input type="text" placeholder="Search tag #">
        <button>Submit</button>
        <button class="add">Add</button>
        <div class="searchResults">
            <div class="row">
                <div class="col">
                    <strong>Company Name</strong>
                </div>
                <div class="col">
                    <strong>Tag Number</strong>
                </div>
                <div class="col">
                    <strong>Action</strong>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    City Market
                </div>
                <div class="col">
                    12345
                </div>
                <div class="col">
                    <a href="#">Edit</a> <a href="#">Delete</a>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    City Market
                </div>
                <div class="col">
                    12345
                </div>
                <div class="col">
                    <a href="#">Edit</a> <a href="#">Delete</a>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    City Market
                </div>
                <div class="col">
                    12345
                </div>
                <div class="col">
                    <a href="#">Edit</a> <a href="#">Delete</a>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    City Market
                </div>
                <div class="col">
                    12345
                </div>
                <div class="col">
                    <a href="#">Edit</a> <a href="#">Delete</a>
                </div>
            </div>
        </div>
	</div>

</template>

<script>
export default{

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
