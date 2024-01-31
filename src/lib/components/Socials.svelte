<script lang="ts">
  import { Icon, LogoGithub, LogoLinkedin } from "svelte-ionicons";
  import type { Social } from "./types";

  let socials: Social[] = [
    {
      icon: LogoGithub,
      link: "https://github.com/Mikdaam",
    },
    {
      icon: LogoLinkedin,
      link: "https://www.linkedin.com/in/mikdaam-badarou-259841199/",
    },
  ];
</script>

<ul class="social-list">
  {#each socials as social}
    <li class="social-item">
      <a href={social.link} class="social-link">
        <Icon icon={social.icon} />
      </a>
    </li>
  {/each}
</ul>
