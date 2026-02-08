<template>
    <DefaultSection v-if="even" class="section">
        <div class="content">
          <div class="keyboard">
              <PianoKeyboard
                  :highlightedKeys="highlighted[order]"
                  @keyDown="playNote"
              />
              <button @click="playSound" id="play"><img src="@/assets/images/arrow.png"></button>
          </div>

          <div class="chord">
              <Transition mode="out-in">
              <div id="content">
                  <h2>{{ items[index].name }}</h2>
                  <div class="parallel">
                  <h3>{{ items[index].label }}</h3>
                  <h3>{{ items[index].notes }}</h3>
                  <h3>{{ items[index].type }}</h3>
                  </div>
                  <p>{{ items[index].desc }}</p>
              </div>
              </Transition>
          </div>
        </div>
    </DefaultSection>

    <DefaultSection v-if="odd" class="section">
        <div class="content">
          <div class="chord">
              <div id="content">
                  <h2>{{ items[index].name }}</h2>
                  <div class="parallel">
                  <h3>{{ items[index].label }}</h3>
                  <h3>{{ items[index].notes }}</h3>
                  <h3>{{ items[index].type }}</h3>
                  </div>
                  <p>{{ items[index].desc }}</p>
              </div>
          </div>
          <div class="keyboard">
              <PianoKeyboard
                  :highlightedKeys="highlighted[order]"
                  @keyDown="playNote"
              />
              <button @click="playSound" id="play"><img src="@/assets/images/arrow.png"></button>
          </div>
        </div>
    </DefaultSection>
</template>

<script setup>
/* global defineProps */
import DefaultSection from '@/components/DefaultSection.vue'
import PianoKeyboard from '@/components/PianoKeyboard.vue'
import cNote from '@/assets/sounds/octaves/c.wav'
import dNote from '@/assets/sounds/octaves/d.wav'
import eNote from '@/assets/sounds/octaves/e.wav'
import fNote from '@/assets/sounds/octaves/f.wav'
import gNote from '@/assets/sounds/octaves/g.wav'
//import aNote from '@/assets/sounds/octaves/a.wav'
import bNote from '@/assets/sounds/octaves/b.wav'
//import csNote from '@/assets/sounds/octaves/c#.wav'
import dsNote from '@/assets/sounds/octaves/d#.wav'
import fsNote from '@/assets/sounds/octaves/f#.wav'
//import gsNote from '@/assets/sounds/octaves/g#.wav'
//import asNote from '@/assets/sounds/octaves/a#.wav'
import { ref } from 'vue'

const props = defineProps({
  order: {
    type: Number,
    required: true
  }
})

const even = ref(props.order % 2)
const odd = ref(props.order % 2 == 0)

const highlighted = ref([
  {
    C: "var(--gold)",
    E: "var(--gold)",
    G: "var(--gold)",
  }, {
    C: "var(--gold)",
    DS: "var(--gold)",
    G: "var(--gold)",
  }, {
    G: "var(--gold)",
    B: "var(--gold)",
    D: "var(--gold)",
    F: "var(--gold)",
  }, {
    C: "var(--gold)",
    E: "var(--gold)",
    G: "var(--gold)",
    B: "var(--gold)",
  }, {
    C: "var(--gold)",
    DS: "var(--gold)",
    FS: "var(--gold)",
  }, {
    C: "var(--gold)",
    F: "var(--gold)",
    G: "var(--gold)",
  },
])

const index = ref(props.order)

const items = [
  {
    name: 'Acorde C Maior',
    label: 'C',
    sound: [cNote, eNote, gNote],
    notes: "C-E-G",
    type: "Maior",
    desc: "Acorde estável e resolvido. É a base da tonalidade de Dó maior e transmite sensação de repouso, clareza e conclusão."
  },

  {
    name: 'Acorde C Menor',
    label: 'Cm',
    sound: [cNote, dsNote, gNote],
    notes: "C-D#-G",
    type: "Menor",
    desc: "Possui sonoridade mais introspectiva e emocional. Muito usado para expressar melancolia, tensão suave ou profundidade."
  },

  {
    name: 'Acorde Dominante 7',
    label: 'G7',
    sound: [gNote, bNote, dNote, fNote],
    notes: "G-B-D-F",
    type: "Dominante",
    desc: "Cria forte tensão que pede resolução. Normalmente resolve no acorde de C maior, sendo fundamental na harmonia tonal."
  },

  {
    name: 'Acorde Maior com Sétima Maior',
    label: 'Cmaj7',
    sound: [cNote, eNote, gNote, bNote],
    notes: "C-E-G-B",
    type: "Maior com 7",
    desc: "Sofisticado e suave. Muito usado em jazz e música moderna para criar um clima relaxado e elegante."
  },

  {
    name: 'Acorde Diminuto',
    label: 'C°',
    sound: [cNote, dsNote, fsNote],
    notes: "C-D#-F#",
    type: "Diminuto",
    desc: "Altamente instável e tenso. Usado como acorde de passagem ou para intensificar movimentos harmônicos."
  },

  {
    name: 'Acorde Csus4',
    label: 'Csus4',
    sound: [cNote, fNote, gNote],
    notes: "C-F-G",
    type: "Suspenso",
    desc: "Remove a terça e cria expectativa. Geralmente resolve para C maior ou C menor."
  }
]

function playSound() {
  playNote()
}

const playNote = () => {
  let sound = items[index.value].sound
  
  for (let i=0;i<sound.length;i++) {
    const audio = new Audio(sound[i])
    audio.play()
  }
}
</script>

<style scoped>
.section {
  margin: 5em 0;
}
#piano div {
  margin: 2em auto;
}
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
.section, .content {
  display: flex;
  align-items: center;
  gap: 10em;
}
.chord, .keyboard {
  align-items: center;
  justify-content:center;
  width: 50%;
}
.chord {
  display: flex;
}
.keyboard div {
  margin: 1em auto;
}
.parallel {
  display: flex;
  align-items: center;
  justify-content: center;
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