<!--
 * @Description: 详情页-办公楼
 * @Version: 0.1
 * @Autor: GiottoLLL7
 * @Date: 2024-05-30 20:25:21
 * @LastEditors: GiottoLLL7
 * @LastEditTime: 2024-06-13 23:52:59
-->
<script setup lang="ts">
import { defineComponent, onMounted, ref, computed } from 'vue'

const getImageUrl = (name:string) => {
  return new URL(`../assets/img/${name}`, import.meta.url).href
}
</script>
<template>
  <main class="">
    <section class="my-8">
      <img alt="Close-up image of a person cleaning a railing" class="w-full" height="600" :src="getImageUrl('img4.jpg')" width="1920"/>
    </section>
    <section class="mb-8 container mx-auto text-center px-4 pt-1 pb-4 relative">
      <img alt="Image of a modern office space with glass walls"
        class="w-full h-full absolute top-0 bottom-0 left-0 right-0 opacity-15 rounded" height="600"
        :src="getImageUrl('img2.jpg')" width="1920" />
      <h2 class="text-2xl font-bold my-4">
        “清潔專家”尚潔服務有限公司
      </h2>
      <p class="text-gray-700 leading-relaxed text-justify">
        全香港<span class="text-blue-400 text-xl">最頂尖</span>的清潔團隊，<span class="text-blue-400 text-xl">領域深耕多年的專業技術大師</span>親自解決各類清潔問題。
        <br />
        <br />
        作為一間專業的清潔公司，我們的專業團隊具備<span class="text-blue-400 text-xl">豐富經驗</span>，能夠針對不同的環境提供最合適的清潔方案。
        <br />
        <br />
        我們的清潔服務涵蓋<span class="text-blue-400 text-xl">各種場景</span>，不論是住宅、商業場所還是公共設施，都是我們的拿手領域。
        <br />
        <br />
        我們<span class="text-blue-400 text-xl">注重細節</span>，確保每一個角落都能徹底清潔。不論是何種程度的污漬，在我們清潔過後都能回到光潔如新的狀態。
        <br />
        <br />
        我們使用高效的清潔設備和環保的清潔劑，確保在提供<span class="text-blue-400 text-xl">高效清潔</span>的同時，對環境不造成任何負擔。
      </p>
    </section>
    <section class="mt-4 mb-20 container mx-auto text-center px-4 pt-1 pb-4 relative">
      <h2 class="text-2xl font-bold my-4">
        清潔服務範圍
      </h2>
      <p class="text-gray-700 leading-relaxed text-justify">
        尚潔服務有限公司提供廣泛而全面的外判清潔服務，為客人提供包括但不限於以下服務：
        <br />
        <br />
        家庭清潔服務：我們是值得您信賴的外判清潔公司。我們採用<span
          class="text-blue-400 text-xl">最先進的除甲醛技術、最細緻完善的服務</span>，使我們成為滿足您對家庭清潔需求的最佳選擇。請立即聯繫我們，獲得優質的清潔/除甲醛服務體驗。
        <br />
        <br />
        商業清潔服務：我們為各種商業機構提供<span
          class="text-blue-400 text-xl">定制的外判清潔解決方案</span>，包括辦公室、餐廳、零售店鋪、商場及酒店等。無論客人的業務規模如何，我們的外判清潔服務都能滿足您的需求。
        <br />
        <br />
        深層清潔服務：我們的專業清潔人員使用先進的深層清潔技術，進行深層消毒清潔，徹底去除污垢和細菌。深層清潔服務對於<span
          class="text-blue-400 text-xl">保持環境衛生和減少致敏原</span>非常重要。
      </p>
    </section>
  </main>
</template>
<style scoped></style>