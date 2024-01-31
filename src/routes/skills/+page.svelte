<script lang="ts">
  import type { PageData } from "./$types";
  export let data: PageData;
</script>

<article class="active" data-page="resume">
  <header>
    <h2 class="h2 article-title">Compétences</h2>
  </header>
  
  <!-- Section for Technical skills -->
  <section class="service">
    <h3 class="h3 service-title">Techniques</h3>

    <ul class="service-list">
      {#each data.skills.technical as { icon, title, text }}
        <li class="service-item">
          <div class="service-icon-box">
            <img src={icon} alt={`${title} icon`} width="40" />
          </div>

          <div class="service-content-box">
            <h4 class="h4 service-item-title">{title}</h4>

            <p class="service-item-text">{@html text}</p>
          </div>
        </li>
      {/each}
    </ul>
  </section>

  <!-- Section for General skills -->
  <section class="service">
    <h3 class="h3 service-title">Générales</h3>

    <ul class="service-list">
      {#each data.skills.soft as { icon, title, text }}
        <li class="service-item">
          <div class="service-icon-box">
            <img src={icon} alt={`${title} icon`} width="40" />
          </div>

          <div class="service-content-box">
            <h4 class="h4 service-item-title">{title}</h4>

            <p class="service-item-text">{@html text}</p>
          </div>
        </li>
      {/each}
    </ul>
  </section>
</article>

