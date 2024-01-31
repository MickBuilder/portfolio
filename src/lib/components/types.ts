import type { ComponentType, SvelteComponent } from "svelte";

export interface Info {
    name: string;
    position: string;
};

export interface Contact {
    icon: ComponentType;
    title: string;
    content: string;
};

export interface Social {
    icon: ComponentType;
    link: string;
};

export interface NavLink {
    name: string;
};