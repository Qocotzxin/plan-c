import type { Route } from "./model/Route";
import Organize from "./pages/Organize/Organize.svelte";
import Works from "./pages/Works/Works.svelte";
import Contact from "./pages/Contact/Contact.svelte";
import NotFound from "./pages/NotFound/NotFound.svelte";
import Home from "./pages/Home/Home.svelte";

export const routes: Route[] = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/organizate",
        name: "Organizate",
        component: Organize,
    },
    {
        path: "/trabajos",
        name: "Trabajos",
        component: Works,
    },
    {
        path: "/contacto",
        name: "Contacto",
        component: Contact,
    },
    {
        path: "/*",
        component: NotFound,
    },
];