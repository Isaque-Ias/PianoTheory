<template>
  <section>
    <h1>Acordes</h1>
    <p>Acordes são grupos de notas tocadas ao mesmo tempo e que convem uma emoção.</p>
    <ChordSection :order="0"/>
    <ChordSection :order="1"/>
    <ChordSection :order="2"/>
    <ChordSection :order="3"/>
    <ChordSection :order="4"/>
    <ChordSection :order="5"/>
  </section>
</template>

<script setup>
import ChordSection from '@/components/ChordSection.vue'
</script>

<style scoped>
#play {
  display: block;
  margin:auto;
  background: none;
  border: none;
}
#play:hover {
  cursor: pointer;
}
#play img {
  transform: scaleX(1.5);
}
h1 {
  color: var(--gold);
  font-family: "Fjalla", sans-serif;
  font-size: 4em;
  margin: .5em;
  text-align: center;
}
h2 {
  color: var(--gold);
  font-family: "Fjalla", sans-serif;
  font-size: 3em;
  margin: .5em;
  text-align: center;
}
h3 {
  color: var(--gold);
  font-family: "Fjalla", sans-serif;
  font-size: 2em;
  margin: .5em;
  text-align: center;
}
p {
  color: var(--gold);
  font-family: "Roboto", sans-serif;
  font-weight: 900;
  font-size: 1em;
  margin: 2em .5em;
  text-align: center;
}
</style>