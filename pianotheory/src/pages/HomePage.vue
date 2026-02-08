<template>
  <section class="hero">
    <h1>Piano Theory</h1>
    <pre>Aprenda teoria musical através de
  explicações simples usando pianos
    como base teórica</pre>
  </section>

  <section class="chords" id="happy-chords">
    <h2>Aprenda acordes</h2>
    <h2 id="happy-chord-text">Felizes</h2>
  </section>
  <section class="chords" id="sad-chords">
    <h2>E acordes</h2>
    <h2 id="sad-chord-text">Tristes</h2>
  </section>

  <section id="intro-notes">
    <h2>Diferentes Notas</h2>
    <ol>
      <li><RouterLink to="/notes">Dó</RouterLink></li>
      <li><RouterLink to="/notes">Ré</RouterLink></li>
      <li><RouterLink to="/notes">Mi</RouterLink></li>
    </ol>
  </section>

  <section id="explore">
    <h2>E muito mais</h2>

    <RouterLink to="/notes">Explorar</RouterLink>
  </section>
</template>

<style scoped>
.hero {
  max-width: 1200px;
  margin: auto;
  padding-top: 5em;
}
.chords {
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2em;
  font-size: 2em;
  background-repeat: no-repeat;
  background-size: 25%, 100%;
  max-width: 100vw;
  font-family: "Fjalla", sans-serif;
  padding: 3em 4em;
}
#happy-chords {
  background-image: url(@/assets/images/person-happy.png), radial-gradient(circle at top right, var(--gold) 25%, var(--background-blue) 200%);
  background-position: 50vw 0, 0;
  background-size: 40vw, 100%;
  color: var(--background-blue);
}
#sad-chords {
  color: var(--gold);
  background-position: 0vw 0, 0;
  background-size: 40vw, 100%;
  background-image: url(@/assets/images/person-sad.png), radial-gradient(circle at bottom left, var(--background-blue) 25%, var(--gold) 200%);
}
#happy-chord-text {
  font-family: "Mountains", sans-serif;
}
#sad-chord-text {
  font-family: "Limelight", sans-serif;
}
#intro-notes {
  background-image: url(@/assets/images/piano-keys.avif);
  background-size: cover;
}
#intro-notes h2 {
  color: var(--gold);
  font-family: "Fjalla", sans-serif;
  font-size: 4em;
  padding: .5em 0 2em;
  text-align: center;
}
#intro-notes ol {
  display: flex;
  justify-content: center;
  gap: 4vw;
  padding: 5em;
}
#intro-notes a {
  color: var(--gold);
  text-decoration: none;
}
#intro-notes li {
  list-style-type: none;
  padding: 1em;
  background-image: linear-gradient(to bottom, var(--background-blue), var(--light-blue));
  border: 10px solid var(--gold);
  border-radius: 100%;
  width: 1em;
  height: 1em;
  line-height: 1em;
  text-align: center;
  font-size: 3em;
  font-family: "Fjalla", sans-serif;
}
#explore h2 {
  color: var(--gold);
  font-family: "Fjalla", sans-serif;
  font-size: 4em;
  margin: .5em;
  text-align: center;
}
#explore a {
  background-color: var(--gold);
  color: var(--background-blue);
  font-family: "Fjalla", sans-serif;
  padding: .5em;
  font-size: 3em;
  border-radius: 20px;
  text-decoration: none;
  display: block;
  width: 200px;
  margin: 0 auto 1em;
  text-align: center;
}
h1 {
  font-size: 10vw;
  color: white;
  font-family: "Monsieur", sans-serif;
  font-weight: 100;
}
pre {
  margin: 2em 0 6em;
  font-size: 1.5em;
  color: white;
  font-family: "Roboto", sans-serif;
}
</style>