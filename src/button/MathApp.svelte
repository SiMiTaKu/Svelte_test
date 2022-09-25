<script>
    let numbers = [1, 2, 3, 4];

    function addNumbers() {
        numbers = [...numbers, numbers.length + 1];
    }

    function resetNumbers() {
        numbers = [1, 2, 3, 4];
    }

    $: sum = numbers.reduce((t, n) => t + n, 0);
    
</script>

<div>
    <p class="math-message">{numbers.join(" + ")} = {sum}</p>
    <button class="math-button" on:click={addNumbers}>Add a number</button>
    <button class="math-button" on:click={resetNumbers}>Reset numbers</button>
</div>

<style>
    .math-message {
        font-size: 20px;
        color:     #555555;
    }

    .math-button {
        width:            300px;
        height:           50px;
        padding:          5px;
        font-size:        30px;
        font-weight:      bold;
        color:            white;
        border-radius:    8px;
        background-color: rgb(31, 28, 129);
        border:           none;
        vertical-align:   top;
        transition:       1s;
    }

    .math-button:hover {
        opacity: 0.8;
    }

    .math-button:active {
        transition: 0.1s;
    }
</style>
