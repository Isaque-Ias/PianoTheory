<template>
  <footer>
    <a href="https://github.com/Isaque-Ias/PianoTheory" target="_blank"><img src="@/assets/git-logo.png"></a>
    <p>© 2026 - Piano Theory - Desenvolvido por Gabriel Isaias</p>
    <a href="https://vuejs.org/" target="_blank"><img src="@/assets/vue-logo.png"></a>
    
  </footer>
</template>

<style scoped>
  footer {
    background: linear-gradient(to bottom, var(--background-blue-75), var(--background-blue-50));
    border-top: 1px solid white;
    padding: 5em;
    display: flex;
  }
  p {
    color: var(--gold);
    font-family: "Roboto", script;
    font-size: 1.5em;
    margin: auto;
  }
  img {
    width: 100px;
    height: 100px;
  }
</style>