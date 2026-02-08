<template>
  <section>
    <h1>Notas</h1>
    <p>Notas são os sons que o instrumento pode fazer. No Piano, as notas são as teclas.</p>
    <DefaultSection v-if="pressed">
      <div id="section">
        <button @click="prev" id="previous"><img src="@/assets/images/arrow.png"></button>
        
        <div id="content">
          <h2>{{ items[index].name }}</h2>
          <h3>{{ items[index].label }}</h3>
          <p>{{ items[index].desc }}</p>
          <button @click="playSound" id="play"><img src="@/assets/images/arrow.png"></button>
        </div>
        
        <button @click="next" id="next"><img src="@/assets/images/arrow.png"></button>
      </div>
    </DefaultSection>

    <div id="piano">
      <PianoKeyboard
        :highlightedKeys="highlighted"
        @keyDown="playNote"
      />
    </div>
  </section>
</template>

<script setup>
import DefaultSection from '@/components/DefaultSection.vue'
import PianoKeyboard from '@/components/PianoKeyboard.vue'
import cNote from '@/assets/sounds/octaves/c.wav'
import dNote from '@/assets/sounds/octaves/d.wav'
import eNote from '@/assets/sounds/octaves/e.wav'
import fNote from '@/assets/sounds/octaves/f.wav'
import gNote from '@/assets/sounds/octaves/g.wav'
import aNote from '@/assets/sounds/octaves/a.wav'
import bNote from '@/assets/sounds/octaves/b.wav'

import csNote from '@/assets/sounds/octaves/c#.wav'
import dsNote from '@/assets/sounds/octaves/d#.wav'
import fsNote from '@/assets/sounds/octaves/f#.wav'
import gsNote from '@/assets/sounds/octaves/g#.wav'
import asNote from '@/assets/sounds/octaves/a#.wav'
import { ref } from 'vue'

const highlighted = ref({
  C: "var(--gold)",
})

const index = ref(0)
let pressed = ref(false);

const items = [
  {
    name: 'Dó',
    label: 'C',
    sound: cNote,
    desc: "Nota fundamental da tonalidade de Dó maior. Representa estabilidade e repouso, sendo comum como ponto de início e final de uma música."
  },

  {
    name: 'Ré',
    label: 'D',
    sound: dNote,
    desc: "Nota de movimento. Cria sensação de avanço e expectativa quando usada em melodias."
  },

  {
    name: 'Mi',
    label: 'E',
    sound: eNote,
    desc: "Nota que define o caráter maior da escala. Transmite brilho e sensação de clareza."
  },

  {
    name: 'Fá',
    label: 'F',
    sound: fNote,
    desc: "Nota de leve tensão. Costuma preparar transições e resoluções harmônicas."
  },

  {
    name: 'Sol',
    label: 'G',
    sound: gNote,
    desc: "Nota dominante. Cria forte expectativa de retorno ao Dó."
  },

  {
    name: 'Lá',
    label: 'A',
    sound: aNote,
    desc: "Nota expressiva e emocional. É a tônica da escala menor relativa (Lá menor)."
  },

  {
    name: 'Si',
    label: 'B',
    sound: bNote,
    desc: "Nota sensível. Gera grande tensão e pede resolução no Dó."
  },

  {
    name: 'Dó Sustenido',
    label: 'C#',
    sound: csNote,
    desc: "Nota cromática que adiciona tensão e cor. Muito usada em modulações e passagens."
  },

  {
    name: 'Ré Sustenido',
    label: 'D#',
    sound: dsNote,
    desc: "Nota cromática expressiva. Frequentemente usada como passagem entre Ré e Mi."
  },

  {
    name: 'Fá Sustenido',
    label: 'F#',
    sound: fsNote,
    desc: "Nota que traz brilho e caráter moderno. Comum em modulações e acordes secundários."
  },

  {
    name: 'Sol Sustenido',
    label: 'G#',
    sound: gsNote,
    desc: "Nota intensa e expressiva. Funciona como dominante na tonalidade de Dó sustenido menor."
  },

  {
    name: 'Lá Sustenido',
    label: 'A#',
    sound: asNote,
    desc: "Nota cromática que cria tensão e riqueza harmônica. Também conhecida como Si bemol."
  }
]

const keyIndex = {
  "A": 5,
  "B": 6,
  "C": 0,
  "D": 1,
  "E": 2,
  "F": 3,
  "G": 4,
  "CS": 7,
  "DS": 8,
  "FS": 9,
  "GS": 10,
  "AS": 11,
}
const indexKey = {
  "5": "A",
  "6": "B",
  "0": "C",
  "1": "D",
  "2": "E",
  "3": "F",
  "4": "G",
  "7": "CS",
  "8": "DS",
  "9": "FS",
  "10": "GS",
  "11": "AS",
}

function next() {
  index.value = (index.value + 1) % items.length
  highlighted.value = {}
  highlighted.value[String(indexKey[index.value])] = "var(--gold)"
}

function prev() {
  index.value =
    (index.value - 1 + items.length) % items.length
  highlighted.value = {}
  highlighted.value[String(indexKey[index.value])] = "var(--gold)"
}

/*function handleKey(note) {
  currentNote.value = note
  playSound(note)
}*/

function playSound() {
  const audio = new Audio(items[index.value].sound)
  audio.play()
}

const playNote = (note) => {
  highlighted.value = {}
  highlighted.value[note] = "var(--gold)"
  pressed.value = true;

  const audio = new Audio(items[keyIndex[note]].sound)
  audio.play()

  index.value = keyIndex[note]
}

</script>

<style scoped>
#piano div {
  margin: 2em auto;
}
#previous, #next {
  border: none;
  padding: 0;
  background: none;
}
#previous:hover, #next:hover {
  cursor: pointer;
}
#previous img {
  transform: scaleX(-1);
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
#section {
  display: flex;
  align-items: center;
}
#content {
  width: 100%;
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