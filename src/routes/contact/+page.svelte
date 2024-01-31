<script lang="ts">
  import { PaperPlane } from "svelte-ionicons";
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<article class="active" data-page="contact">
  <header>
    <h2 class="h2 article-title">Contact</h2>
  </header>

  <section class="mapbox" data-mapbox>
    <figure>
      <iframe
        title="map"
        src="https://www.google.com/maps/embed/v1/place?q=Paris,+France&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
        width="400"
        height="300"
        loading="lazy"
      ></iframe>
    </figure>
  </section>
  
  <section class="contact-form">
    <h3 class="h3 form-title">Formulaire de contact</h3>

    <form action="#" class="form" data-form>
      <div class="input-wrapper">
        <input
          type="text"
          name="fullname"
          class="form-input"
          placeholder="Full name"
          required
          data-form-input
        />

        <input
          type="email"
          name="email"
          class="form-input"
          placeholder="Email address"
          required
          data-form-input
        />
      </div>

      <textarea
        name="message"
        class="form-input"
        placeholder="Your Message"
        required
        data-form-input
      ></textarea>

      <button class="form-btn" type="submit" disabled data-form-btn>
        <PaperPlane />
        <span>Send Message</span>
      </button>
    </form>
  </section>
</article>
