<script>
    import Nested from "./Nested.svelte";

	export let name;
	export let img_src;
</script>

<main>
	<section id="main-visual">
		<div class="container">
			<img src={img_src} alt="prof-icon.jpg" class="container__icon">
			<h1 class="container__title">Hello {name}!</h1>
		</div>
	</section>
	<Nested/>
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
		padding:          30px 0;
		background-color: #ddfffe;
	}

	#main-visual .container{
		width: 1024px;
		margin: 0 auto;

	}

	#main-visual .container__icon{
		display:       inline-block;
		width:         200px;
		margin-right:  50px;
		border-radius: 100px;
	}

	#main-visual .container__title{
		display:        inline-block;
		color:          #ff3e00;
		font-size:      4em;
		font-weight:    100;
		vertical-align: top;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}

</style>