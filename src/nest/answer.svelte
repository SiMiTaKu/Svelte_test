<script>
    export let answer = "mystery";
</script>

<div class="sentence">
    The answer is <span class="sentence__answer">{answer}</span>.
</div>

<style>
    .sentence {
        font-size: 15px;
    }

    .sentence__answer {
        font-size:   17px;
        font-weight: bold;
        color:       #d97474;
    }
</style>