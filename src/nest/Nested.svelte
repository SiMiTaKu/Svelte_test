<script>
    import Answer from "./Answer.svelte";
	import Pack   from "./Pack.svelte";

	const pkg = {
		name:    "svelte",
		version: "3",
		speed:   "bazzling",
		website: "https://svelte.dev"
	}

	let string        = "I like <strong>cake</strong>."
</script>

<section id="text-area">
    <div class="container">
        <p class="container__message">これはテストサイトだぜ</p>
        <p class="container__message">This is a paragraph.</p>
		<p class="container__message">{@html string}</p>
    </div>
	<div class="container">
		<Answer answer={44}/>
        <Answer/>
	</div>
	<div class="container">
		<Pack {...pkg}/>
	</div>
</section>

<style>
    #text-area {
        background-color: #cfcfcf;
    }
    
    .container {
		width:            984px;
		margin:           0 auto;
        padding:          20px;
		background-color: white;
		border-radius:    8px;
	}

	.container:not(:last-child) {
		margin-bottom: 20px;
	}

	.container__message {
        font-size:   large;
        font-weight: bold;
		color:       rgb(30, 30, 30);
	}
</style>