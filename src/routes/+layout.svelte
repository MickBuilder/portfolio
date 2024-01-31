<script lang="ts">
  import "@fontsource/poppins";
  import "../app.css";
  import Sidebar from "$lib/components/Sidebar.svelte";
  import Navbar from "$lib/components/Navbar.svelte";
</script>

<main>
  <Sidebar />
  <!-- Main Content -->
  <div class="main-content">
    <Navbar />
    <slot />
  </div>
</main>
