<script>
	import Pack        from "./Pack.svelte";
	import Answer      from "./Answer.svelte";
	import EmojiThings from "./EmojiThings.svelte";

	const pkg = {
		name:    "svelte",
		version: "3",
		speed:   "bazzling",
		website: "https://svelte.dev"
	}

	let string        = "I like <strong>cake</strong>."

	let fruitsList = [
		{ id: 1, name: 'apple' },
		{ id: 2, name: 'banana' },
		{ id: 3, name: 'carrot' },
		{ id: 4, name: 'doughnut' },
		{ id: 5, name: 'egg' },
	];

	function handleClick() {
		fruitsList = fruitsList.slice(1);
	}
</script>

<section id="text-area">
    <div class="container">
        <p class="container__message">これはテストサイトだぜ</p>
        <p class="container__message">This is a paragraph.</p>
		<p class="container__message">{@html string}</p>
    </div>
	<div class="container">
		<Answer answer={"44"}/>
		<Answer/>
	</div>
	<div class="container">
		<Pack name={"svelte"} version={"3"} speed={"bazzling"} website={"https://svelte.dev"}/>
		<Pack {...pkg}/>
	</div>
	<div class="container">
		<ul class="fruits-list">
			{#each fruitsList as fruit (fruit.id)}
			    <li class="fruits-list__item"><EmojiThings name={fruit.name}/></li>
			{/each}
		</ul>
		<button on:click={handleClick}>
			Remove first things
		</button>
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

	.fruits-list {
		margin: 0 auto;
		width:  250px;
	}

	.fruits-list__item {
		text-align: left;
	}
</style>