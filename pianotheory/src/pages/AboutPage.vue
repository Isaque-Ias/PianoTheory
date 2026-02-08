<template>
  <h1>Sobre</h1>
  <DefaultSection>
    <div id="main">
      <div id="left">
        <img src="@/assets/images/gabriel-1.jpeg">
        <img src="@/assets/images/gabriel-2.jpeg">
      </div>
      <p>Oi eu me chamo Gabriel e gosto de piano, computador, treino, e algumas outras coisas ai que eu ja esqueci pq tenho alzheimer. Eu também tenho alzheimer e me esqueço das coisas. Eu também tenho alzheimer e me esqueço das coisas. Eu também tenho alzheimer e me esqueço das coisas. Eu também tenho alzheimer e me esqueço das coisas. Eu também tenho alzheimer e me esqueço das coisas. Eu também tenho alzheimer e me esqueço das coisas. Eu também tenho alzheimer e me esqueço das coisas. Eu também tenho alzheimer e me esqueço das coisas. Eu também tenho alzheimer e me esqueço das coisas.</p>
      <div id="right">
        <img src="@/assets/images/gabriel-3.jpeg">
        <img src="@/assets/images/gabriel-4.jpeg">
      </div>
    </div>
  </DefaultSection>
</template>

<script setup>
import DefaultSection from '@/components/DefaultSection.vue'
</script>

<style scoped>
#main {
  display: flex;
  flex: 1;
}
img {
  width: 300px;
  margin: 2em 0;
  border-radius: 25px;
}
p {
  margin: 1em;
  color: var(--gold);
  font-family: "Roboto", sans-serif;
  font-size: 2em;
}
h1 {
  color: var(--gold);
  font-family: "Fjalla", sans-serif;
  font-size: 4em;
  margin: .5em;
  text-align: center;
}
</style>