<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;
  const { projects } = data;
</script>

<article class="active" data-page="blog">
  <header>
    <h2 class="h2 article-title">Projets</h2>
  </header>

  <section class="blog-posts">
    <ul class="blog-posts-list">
      {#each projects as project (project.link)}
        <li class="blog-post-item">
          <a href={project.link}>
            <figure class="blog-banner-box">
              <img src={project.image} alt={project.title} loading="lazy" />
            </figure>

            <div class="blog-content">
              <div class="blog-meta">
                {#each project.categories as category (category)}
                  <p class="blog-category">{category}</p>
                  {#if category !== project.categories[project.categories.length - 1]}
                    <span class="dot"></span>
                  {/if}
                {/each}
              </div>

              <h3 class="h3 blog-item-title">{project.title}</h3>

              <p class="blog-text">{project.description}</p>
            </div>
          </a>
        </li>
      {/each}
    </ul>
  </section>
</article>
