<script lang="ts">
	import DarkModeSwitcher from "./components/DarkModeSwitcher/DarkModeSwitcher.svelte";
	import Tailwindcss from "./Tailwindcss.svelte";
	import router from "page";
	import Home from "./pages/Home/Home.svelte";
	import Header from "./components/Header/Header.svelte";
	import { routes } from "./routes";

	function updateScrollDirection() {
		const scrollingUp = scrollY <= lastScrollY;
		lastScrollY = scrollY;
		return scrollingUp;
	}
	// set default component
	let current = Home;
	let scrollY: number;
	let lastScrollY: number;
	$: isScrollingUp =
		scrollY !== lastScrollY ? updateScrollDirection() : false;

	routes.forEach((r) => router(r.path, () => (current = r.component)));
	router.start();
</script>

<svelte:window bind:scrollY />

<Tailwindcss />
<DarkModeSwitcher />
<Header {routes} {isScrollingUp} {scrollY} />
<main class="p-4 mx-auto text-center max-w-xl mt-52" style="height: 250vh;">
	<svelte:component this={current} />
</main>
