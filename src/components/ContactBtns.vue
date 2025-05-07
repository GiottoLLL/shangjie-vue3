<!--
 * @Description: 悬浮按钮
 * @Version: 0.1
 * @Autor: GiottoLLL7
 * @Date: 2024-06-01 14:29:29
 * @LastEditors: GiottoLLL7
 * @LastEditTime: 2025-02-19 21:05:32
-->
<script setup lang="ts">
import { defineComponent, onMounted, ref, computed } from 'vue'

const callPhone = () => {
  const phone = 'tel:53007098'
  window.location.href = phone
}

const mailTo = () => {
  const mail = 'mailto:libolang0813@gmail.com'
  window.location.href = mail
}

const linkElement = () => {
  const link = 'https://api.whatsapp.com/send?phone=53007098'
  window.open(link)
}

</script>
<template>

<div class="floating-buttons">
  <button class="animate-bounce bg-gradient-to-t from-green-500 to-green-300 text-white rounded-full shadow-lg p-6 leading-5" @click="callPhone">
    <font-awesome-icon class="text-xl leading-5" :icon="['fast', 'phone']" />
  </button>
  <button class="bg-gradient-to-b text-white from-blue-500 to-blue-400 rounded-full shadow-lg p-6 leading-5" @click="mailTo">
    <font-awesome-icon class="text-xl leading-5" :icon="['fass', 'envelope']" />
  </button>
  <button class="bg-gradient-to-t from-green-500 to-green-300 text-white rounded-full shadow-lg p-5 leading-5" @click="linkElement">
    <font-awesome-icon class="text-3xl leading-5" style="color: #fff" :icon="['fab', 'whatsapp']" />
  </button>
</div>
</template>
<style scoped>
.floating-buttons {
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
@media (max-width: 768px) {
  .floating-buttons {
    flex-direction: row;
    right: 50%;
    transform: translateX(50%);
  }
}
</style>

<script lang="ts">
export default {
  name: 'ContactBtns'
}
</script>
