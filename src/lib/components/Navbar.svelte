<script lang="ts">
  import { page } from "$app/stores";
  import { base } from '$app/paths';

  let navs: { link: string, name: string }[] = [
    { link: `${base}/`, name: "A Propos" },
    { link: `${base}/resume`, name: "Parcours", },
    { link: `${base}/skills`, name: "Compétences", },
    { link: `${base}/portfolio`, name: "Projets", },
    { link: `${base}/contact`, name: "Contact", },
  ];
</script>

<nav class="navbar">
  <ul class="navbar-list">
    {#each navs as nav}
      <li class="navbar-item">
        <a href={nav.link} class="navbar-link" class:active={$page.url.pathname === nav.link}>{nav.name}</a>
      </li>
    {/each}
  </ul>
</nav>
