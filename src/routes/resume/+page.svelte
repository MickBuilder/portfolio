<script lang="ts">
  import { BookOutline } from "svelte-ionicons";
import type { PageData } from "./$types";

  export let data: PageData;
</script>

<article class="active" data-page="resume">
  <header>
    <h2 class="h2 article-title">Parcours</h2>
  </header>

  <section class="timeline">
    <div class="title-wrapper">
      <div class="icon-box">
        <BookOutline />
      </div>
      <h3 class="h3">Formations</h3>
    </div>

    <ol class="timeline-list">
      {#each data.resume.formations as { title, date, details }}
        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">{title}</h4>
          <span>{date}</span>
          <p class="timeline-text">{@html details}</p>
        </li>
      {/each}
    </ol>
  </section>

  <section class="timeline">
    <div class="title-wrapper">
      <div class="icon-box">
        <BookOutline />
      </div>
      <h3 class="h3">Expériences</h3>
    </div>

    <ol class="timeline-list">
      {#each data.resume.experiences as { title, date, details }}
        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">{title}</h4>
          <span>{date}</span>
          <p class="timeline-text">{@html details}</p>
        </li>
      {/each}
    </ol>
  </section>
</article>
