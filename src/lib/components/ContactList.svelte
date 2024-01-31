<script lang="ts">
  import {
    Icon,
    LocateOutline,
    MailOutline,
    PhonePortraitOutline,
  } from "svelte-ionicons";
  import type { Contact } from "./types";

  let contacts: Contact[] = [
    {
      icon: MailOutline,
      title: "Courriel",
      content: "<a href='mailto:bmikdaam@gmail.com' class='contact-link'>bmikdaam@gmail.com</a>",
    },
    {
      icon: PhonePortraitOutline,
      title: "Téléphone",
      content: "<a href='tel:+33651478244' class='contact-link'>+33 6 51 47 82 44</a>",
    },
    {
      icon: LocateOutline,
      title: "Adresse",
      content: "<address>Paris, Ile-de-France, France</address>",
    },
  ];
</script>

<ul class="contacts-list">
  {#each contacts as contact}
    <li class="contact-item">
      <div class="icon-box">
        <Icon icon={contact.icon} />
      </div>
    
      <div class="contact-info">
        <p class="contact-title">{contact.title}</p>
    
        {@html contact.content}
      </div>
    </li>
  {/each}
</ul>
