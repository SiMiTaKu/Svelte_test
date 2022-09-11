<script>
    let count = 0;

    function incrementCount(){
        count += 1;
    }

    function decrementCount(){
        count -= 1;
    }
</script>

<p class="count-number">Now : {count}</p>
<button class="count-button" on:click = {incrementCount}>Increment</button>
<button class="count-button" on:click = {decrementCount}>Decrement</button>


<style>
    .count-number{
        display:     inline-block;
        width:       200px;
        margin:      0;
        padding:     5px 10px;
        font-size:   30px;
        font-weight: bold;
        color:       #555555;
        border:      solid 2px #555555;
        border-radius: 8px;

    }

    .count-button {
        display:          inline-block;
        width:            200px;
        height:           50px;
        padding:          5px;
        font-size:        30px;
        font-weight:      bold;
        color:            white;
        border-radius:    8px;
        background-color: #1c8181;
        border:           none;
        vertical-align:   top;
        transition:       1s;
    }

    .count-button:hover {
        opacity: 0.8;
    }

    .count-button:active {
        transition: 0.1s;
    }
</style>