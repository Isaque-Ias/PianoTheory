<template>
  <section class="wrapper">
    <div>
      <slot />
    </div>
  </section>
</template>

<style scoped>
.wrapper {
  max-width: 100vw;
  padding: 4rem 2rem;
  background-image: linear-gradient(to top, var(--light-blue-0), var(--light-blue-50)), radial-gradient(circle at 1500px 1000px, var(--gold-blue), var(--background-blue) 100%);
}
.wrapper div {
  max-width: 1000px;
  margin: auto;
}
</style>