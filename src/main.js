import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Takumi Shimizu Prof',
		img_src: "image/prof-icon.jpg"
	}
});

export default app;