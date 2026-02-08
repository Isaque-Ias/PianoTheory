<script setup>
/* global defineProps, defineEmits */
/**
 * Props:
 * highlightedKeys: {
 *   C: "red",
 *   DS: "#00ffcc",
 *   A: "orange"
 * }
 */
const props = defineProps({
  highlightedKeys: {
    type: Object,
    default: () => ({})
  }
})

const emit = defineEmits(["keyDown"])

const whiteKeys = ["C", "D", "E", "F", "G", "A", "B", "C2", "D2", "E2", "F2", "G2", "A2", "B2"]

const blackKeys = [
  { note: "CS", left: 15 },
  { note: "DS", left: 40 },
  { note: "FS", left: 90 },
  { note: "GS", left: 115 },
  { note: "AS", left: 140 },
  { note: "C2S", left: 190 },
  { note: "D2S", left: 215 },
  { note: "F2S", left: 265 },
  { note: "G2S", left: 290 },
  { note: "A2S", left: 315 },
]

const keyStyle = (note) => {
  return props.highlightedKeys[note]
    ? { backgroundColor: props.highlightedKeys[note] }
    : {}
}

const pressKey = (note) => {
  emit("keyDown", note)
}
</script>
<template>
  <div class="piano">
    <!-- White keys -->
    <div class="white-keys">
      <div
        v-for="note in whiteKeys"
        :key="note"
        class="white-key"
        :style="keyStyle(note)"
        @mousedown="pressKey(note)"
      >
        <span></span>
      </div>
    </div>

    <!-- Black keys -->
    <div class="black-keys">
      <div
        v-for="key in blackKeys"
        :key="key.note"
        class="black-key"
        :style="[keyStyle(key.note), { left: key.left + 'px' }]"
        @mousedown="pressKey(key.note)"
      >
        <span></span>
      </div>
    </div>
  </div>
</template>

<style scoped>
    .piano {
        position: relative;
        width: 350px;
        height: 200px;
        user-select: none;
        font-family: "Fjalla", snas-serif;
    }

    .white-keys {
        display: flex;
    }

    .white-key {
        width: 48px;
        height: 190px;
        border: 1px solid var(--background-blue);
        background: white;
        border-radius: 0 0 10px 10px;
        position: relative;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        padding-bottom: 10px;
        font-weight: bold;
    }

    .white-key:active {
        filter: brightness(90%);
    }

    .black-keys {
        position: absolute;
        top: 0;
        left: 0;
    }

    .black-key {
        position: absolute;
        width: 20px;
        height: 120px;
        background: black;
        border-radius: 0 0 10px 10px;
        cursor: pointer;
        z-index: 2;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        padding-bottom: 6px;
        color: white;
        font-size: 12px;
    }

    .black-key:active {
        filter: brightness(120%);
    }
</style>