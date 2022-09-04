<script>
	export let name;
	export let img_src;
</script>

<main>
	<section id="main-visual">
		<img src={img_src} alt="prof-icon.jpg" class="icon">
		<h1 class="title">Hello {name}!</h1>
	</section>
	<div class="test-area">
		<p class="test-area__message">これはテストサイトだぜ</p>
	</div>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>

<style>
	main {
		text-align: center;
		padding:    0;
		width:      100%;
		margin:     0 auto;
	}

	#main-visual {
		height:     200px;
		padding:    60px;
		text-align: left;
	}

	#main-visual .icon{
		display:       inline-block;
		width:         200px;
		margin-right:  50px;
		border-radius: 100px;
	}



	#main-visual .title{
		display:        inline-block;
		color:          #ff3e00;
		font-size:      4em;
		font-weight:    100;
		vertical-align: top;
	}

	.test-area {
		width:            1024px;
		margin:           0 auto;
		background-color: gray;
		border-radius:    8px;
		height:           50px;
	}
	.test-area__message {
	    font-size:   large;
	    font-weight: bold;
		color:       white;
	}
	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}

</style>