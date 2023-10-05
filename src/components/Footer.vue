<template>
  <footer id="dark-section" class="text-body-secondary py-5">
    <div class="container">
      <p class="float-end mb-1">
        <svg href="#" xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor"
          class="bi bi-arrow-up-circle-fill" viewBox="0 0 16 16" @click="scrollToTop">
          <path
            d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z" />
        </svg>
      </p>
      <p class="mb-1">
        Album example is &copy; Bootstrap, but please download and customize it for yourself!
      </p>
      <p class="mb-0">New to Bootstrap?
        <a href="/">Visit the homepage</a> or read our
        <a href="/docs/5.3/getting-started/introduction/">getting started guide</a>
      </p>
    </div>


  </footer>
</template>

<script>
export default {
  name: 'Footer',
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }
}
</script>

<style scoped>
footer div p svg {
  cursor: pointer;
}
</style>