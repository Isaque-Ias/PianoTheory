<template>
  <section>
    <h1>Notas</h1>
    <p>Notas são os sons que o instrumento pode fazer. No Piano, as notas são as teclas.</p>
    <DefaultSection>
      <div id="section">
        <button @click="prev" id="previous"><img src="@/assets/images/arrow.png"></button>

          <div id="scale">
            <LargeKeyboard
              :highlightedKeys="highlighted[index]"
            />
          </div>
          
          <div id="content">
            <h2>{{ items[index].name }}</h2>
            <h3>{{ items[index].label }}</h3>
            <p>{{ items[index].desc }}</p>
          </div>
        <button @click="next" id="next"><img src="@/assets/images/arrow.png"></button>
      </div>
    </DefaultSection>
  </section>
</template>

<script setup>
import DefaultSection from '@/components/DefaultSection.vue'
import LargeKeyboard from '@/components/LargeKeyboard.vue'
import { ref } from 'vue'

const highlighted = ref([
  {
    C2: "var(--gold)",
    D2: "var(--gold)",
    E2: "var(--gold)",
    F2: "var(--gold)",
    G2: "var(--gold)",
    A2: "var(--gold)",
    B2: "var(--gold)",
  }, {
    C2: "var(--gold)",
    D2: "var(--gold)",
    E2: "var(--gold)",
    F2: "var(--gold)",
    G2: "var(--gold)",
    A: "var(--gold)",
    B: "var(--gold)",
  }, {
    C2: "var(--gold)",
    D2: "var(--gold)",
    E2: "var(--gold)",
    F2: "var(--gold)",
    G2S: "var(--gold)",
    A: "var(--gold)",
    B: "var(--gold)",
  }, {
    C2: "var(--gold)",
    D2: "var(--gold)",
    E2: "var(--gold)",
    F2S: "var(--gold)",
    G2S: "var(--gold)",
    A: "var(--gold)",
    B: "var(--gold)",
  }, {
    C2: "var(--gold)",
    D2: "var(--gold)",
    E2: "var(--gold)",
    G2: "var(--gold)",
    A: "var(--gold)",
  }
])

const index = ref(0)

const items = [
  {
    name: 'Escala Maior (Dó Maior)',
    desc: 'A escala maior é a base da música ocidental. Possui sonoridade estável, aberta e resolvida. É amplamente usada para transmitir alegria, clareza e sensação de conclusão.'
  },

  {
    name: 'Escala Menor Natural (Lá menor)',
    desc: 'A escala menor natural tem caráter introspectivo e melancólico. É muito usada para transmitir emoção, reflexão e tensão suave, sem a dramaticidade da menor harmônica.'
  },

  {
    name: 'Escala Menor Harmônica',
    desc: 'Caracteriza-se pela sétima maior, que cria forte tensão e resolução. Muito usada em música clássica, flamenco e trilhas dramáticas.'
  },

  {
    name: 'Escala Menor Melódica',
    desc: 'Na forma ascendente, suaviza a sonoridade da menor harmônica elevando a sexta e a sétima. É amplamente utilizada no jazz e na música erudita.'
  },

  {
    name: 'Escala Pentatônica Maior',
    desc: 'Escala de cinco notas com sonoridade simples e agradável. Extremamente versátil, é usada em pop, rock, música folk e improvisação.'
  }
]

function next() {
  index.value = (index.value + 1) % items.length
}

function prev() {
  index.value =
    (index.value - 1 + items.length) % items.length
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
  margin: 2em;
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
  margin: 2em;
  transform: scaleX(1.5);
}
#scales {
  display: flex;
}
#section {
  display: flex;
  align-items: center;
}
#content {
  width: 100%;
  margin: 2em;
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