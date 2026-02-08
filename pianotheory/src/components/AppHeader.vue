<template>
  <header>
    <nav>
      <RouterLink to="/">
      <img id="logo" src="@/assets/logo.svg" />
      </RouterLink>

      <div>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/notes">Notas</RouterLink>
        <RouterLink to="/chords">Acordes</RouterLink>
        <RouterLink to="/scales">Escalas</RouterLink>
        <RouterLink to="/about">Sobre</RouterLink>
      </div>
    </nav>
  </header>
</template>

<style scoped>
  header {
    background: linear-gradient(to bottom, var(--background-blue-75), var(--background-blue-50));
    border-bottom: 1px solid white;
    padding: 2em 4em;
  }
  #logo {
    width: 150px;
  }
  nav {
    display: flex;
  }
  nav div {
    margin-left: auto;
    display: flex;
    align-items: center;
    gap: 2em;
  }
  nav div a {
    color: white;
    font-family: "Roboto", script;
    font-size: 1.5em;
    text-decoration: none;
    transition: border-bottom .5s ease;
  }
  nav div a:hover {
    border-bottom: 1px solid var(--gold);
  }
</style>