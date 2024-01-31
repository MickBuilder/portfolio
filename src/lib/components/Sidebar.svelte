<script lang="ts">
  import ContactList from "./ContactList.svelte";
  import Socials from "./Socials.svelte";
  import { ChevronDown } from "svelte-ionicons";
  import me from "../assets/me.png";
  import type { Info } from "./types";

  let info: Info = {
    name: "Mikdaam BADAROU",
    position: "Apprenti Ingénieur Logiciel",
  };

  let showSocials = false;
</script>

<aside class="sidebar" class:active={showSocials}>
  <div class="sidebar-info">
    <figure class="avatar-box">
      <img src={me} alt={info.name} width={80} />
    </figure>
    
    <div class="info-content">
      <h1 class="name" title={info.name}>{info.name}</h1>
      <p class="title">{info.position}</p>
    </div>
    
    <button class="info_more-btn" on:click={() => (showSocials = !showSocials)}>
      <span>Contacts</span>
      <ChevronDown />
    </button>
  </div>
  <div class="sidebar-info_more">
    <div class="separator"></div>
    <ContactList />
  </div>
  <div class="separator"></div>
  <div class="sidebar-socials">
    <Socials />
  </div>
</aside>
