<template>
    <div id="display">
        <!-- <h1>Display Page</h1> -->
        <div class="row">
            <div class="column">
                <h2>Jane Doe</h2>
                <div id="animal">
                    <h3>Goat</h3>
                    <h4>Tag Number: 123456</h4>
                </div>
                <!-- <img src="https://via.placeholder.com/500x450"> -->
                <img src="../assets/Sample_Auction.jpg">
            </div>

            <div class="column">
                <div id="buyer">
                    <h2>Buyer</h2>
                    <img src="../assets/City Market Logo.png">
                    <h1>$10,000</h1>
                </div>
                <div id="addon">
                    <h2>Addon Buyers</h2>
                    <div class="column">
                        <ul>
                            <li>Simply Mac</li>
                            <li>Chick-fil-A</li>
                            <li>Qdoba</li>
                            <li>Lowe's</li>
                        </ul>
                    </div>
                    <div class="column">
                        <ul>
                            <li>$200</li>
                            <li>$300</li>
                            <li>$100</li>
                            <li>$50</li>
                        </ul>
                    </div>
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
	#display{
		font-size: 25px;
	}

    #buyer h1{
        font-size: 65px;
    }

    #addon ul{
        list-style: none;
    }

    .column {
        float: left;
        width: 50%;
    }

    /* Clear floats after the columns */
    .row:after {
        content: "";
        display: table;
        clear: both;
    }
</style>
