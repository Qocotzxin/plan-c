<script lang="ts">
    import type { Route } from "../../model/Route";
    export let routes: Route[];
    export let isScrollingUp: boolean;
    export let scrollY: number;
    $: top = isScrollingUp ? "top-0" : scrollY >= 16 * 4 ? "-top-44" : "top-0";
    let current = window.location.pathname;
</script>

<header
    class="w-screen flex flex-col items-center bg-primary mb-16 fixed transition-top duration-1000 ease-in-out {top}">
    <div class="flex items-center justify-center h-12 md:h-44">
        <img
            src="assets/images/logo.png"
            type="image/png"
            alt="Logo de Plan C"
            class="w-24 md:w-56 pointer-events-none select-none" />
    </div>
    <div
        class="flex flex-col items-center w-full bg-primary md:flex-row md:justify-between md:h-8 text-white md:px-56">
        {#each routes as route}
            {#if route.name}
                <div
                    class={current === route.path ? 'border-b-2 border-complementary transition-all duration-500' : 'border-b-2 border-primary duration-500'}>
                    <a
                        class="placeholder-white::placeholder md:mr-8 md:text-xl hover:text-complementary focus:text-complementary {current === route.path ? 'text-complementary' : ''}"
                        href={route.path}
                        on:click={() => (current = route.path)}>{route.name}</a>
                </div>
            {/if}
        {/each}
    </div>
</header>
