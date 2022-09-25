<script>
    const emojis = {
        apple: "🍎",
        banana: "🍌",
        carrot: "🥕",
        doughnut: "🍩",
        egg: "🥚"
    }

    // the name is updated whenever the prop value changes...
	export let name;

    // ...but the "emoji" variable is fixed upon initialisation of the component
    const emoji = emojis[name];
</script>

<p>
    <span>The emoji for {name } is { emoji }</span>
</p>

<style>

</style>