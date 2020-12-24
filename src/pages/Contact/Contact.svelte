<script lang="ts">
    import { onMount } from "svelte";
    import { icon } from "@fortawesome/fontawesome-svg-core";
    import { faInstagram } from "@fortawesome/free-brands-svg-icons";
    import { faEnvelope } from "@fortawesome//free-solid-svg-icons";

    const ICONS_RENDER = [
        {
            id: "email-icon",
            icon: faEnvelope,
            text: "plancteorganiza@gmail.com",
            href: "mailto:plancteorganiza@gmail.com",
        },
        {
            id: "insta-icon",
            icon: faInstagram,
            text: "@plancteorganiza",
            href: "https://www.instagram.com/plancteorganiza/",
        },
    ];

    onMount(() => {
        ICONS_RENDER.forEach((r) =>
            document.querySelector("#" + r.id).appendChild(icon(r.icon).node[0])
        );
    });
</script>

<div class="flex flex-col w-min">
    {#each ICONS_RENDER as render}
        <a
            href={render.href}
            target="_blank"
            class="flex items-center w-min md:text-xl mb-6 hover:text-alternate-700">
            <span id={render.id} class="mr-4 md:mr-8" />
            <p>{render.text}</p>
        </a>
    {/each}
</div>
