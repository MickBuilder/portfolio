<script lang="ts">
  import { page } from "$app/stores";

  let navs: { link: string, name: string }[] = [
    { link: "/", name: "A Propos" },
    { link: "/resume", name: "Parcours", },
    { link: "/skills", name: "Compétences", },
    { link: "/portfolio", name: "Projets", },
    { link: "/contact", name: "Contact", },
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
