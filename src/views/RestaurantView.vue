<!--
 * @Description: 详情页-餐廳
 * @Version: 0.1
 * @Autor: GiottoLLL7
 * @Date: 2024-05-30 20:25:21
 * @LastEditors: GiottoLLL7
 * @LastEditTime: 2024-12-17 22:45:01
-->
<script setup lang="ts">
import { defineComponent, onMounted, ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const getImageUrl = (name:string) => {
  return new URL(`../assets/img/${name}`, import.meta.url).href
}

const linkElement = () => {
  const link = 'https://api.whatsapp.com/send?phone=53007098'
  window.open(link)
}
</script>
<template>
  <main class="p-4">
    <section class="my-8">
      <img alt="Close-up image of a person cleaning a railing" class="w-full" height="600" :src="getImageUrl('img7.jpg')" width="1920"/>
    </section>
    <section class="bg-white p-6 shadow-md mb-6 relative">
      <img alt="Image of a modern office space with glass walls" class="w-full h-full absolute top-0 bottom-0 left-0 right-0 opacity-15 rounded" height="600" :src="getImageUrl('img2.jpg')" width="1920"/>
      <h1 class="text-2xl font-bold mb-4">
        餐廳|廚房清潔服務
      </h1>
      <p class="mb-4">
        餐廳的清潔是<span class="text-blue-400 text-xl">提高品牌聲望，吸引顧客光顧</span>的重要保障之一。
      </p>
      <p class="mb-4">
        為此我們提供全香港最專業的餐廳、廚房清潔方案，通過我們的清潔服務，讓您的品牌在香港餐飲業的競爭中立於<span class="text-blue-400 text-xl">不敗之地</span>。
      </p>
      <p class="mb-4">
        我們為您的餐廳提供的<span class="text-blue-400 text-xl">全方位</span>清潔方案有：日常店鋪清潔、定期深層清潔去油污、定期清理所有工具、定期清理所有設施、定期清理水槽等易增生細菌的地方。
      </p>
    </section>
    <!-- <section class="mb-8 container mx-auto text-center px-4 pt-1 pb-4 relative">
      <img alt="Image of a modern office space with glass walls" class="w-full h-full absolute top-0 bottom-0 left-0 right-0 opacity-15 rounded" height="600" :src="getImageUrl('img2.jpg')" width="1920"/>
      <h2 class="text-2xl font-bold my-4">
      為什麼選擇我們<br/>“清潔專家”尚潔服務有限公司
      </h2>
      <p class="text-gray-700 leading-relaxed text-justify">
      作為一間專業的清潔公司，我們的專業團隊具備<span class="text-blue-400 text-xl">豐富經驗</span>，能夠針對不同的環境提供最合適的清潔方案。
      <br/>
      <br/>
      我們的清潔服務涵蓋<span class="text-blue-400 text-xl">各種場景</span>，不論是住宅、商業場所還是公共設施，都是我們的拿手領域。
      <br/>
      <br/> 
      我們<span class="text-blue-400 text-xl">注重細節</span>，確保每一個角落都能徹底清潔。不論是何種程度的污漬，在我們清潔過後都能回到光潔如新的狀態。
      <br/>
      <br/>
      我們使用高效的清潔設備和環保的清潔劑，確保在提供<span class="text-blue-400 text-xl">高效清潔</span>的同時，對環境不造成任何負擔。
      </p>
    </section> -->
    <section class="mb-6">
      <div class="grid grid-cols-2 gap-4 mb-4">
        <img alt="Office cleaning image 1" class="w-full h-auto rounded-lg shadow-md" height="200"
          :src="getImageUrl('img6.jpg')"
          width="200" />
        <img alt="Office cleaning image 2" class="w-full h-auto rounded-lg shadow-md" height="200"
          :src="getImageUrl('img31.jpg')"
          width="200" />
        <img alt="Office cleaning image 3" class="w-full h-auto rounded-lg shadow-md" height="200"
        :src="getImageUrl('img29.jpg')"
        width="200" />
        <img alt="Office cleaning image 4" class="w-full h-auto rounded-lg shadow-md" height="200"
        :src="getImageUrl('img24.jpg')"
        width="200" />
      </div>
      <div class="grid grid-cols-1 gap-4 mb-4">
        <img alt="Office cleaning image 5" class="w-full h-auto rounded-lg shadow-md" height="200"
        :src="getImageUrl('img15.jpg')"
        width="200" />
      </div>
      <div class="grid grid-cols-2 gap-4">
        <img alt="Office cleaning image 6" class="w-full h-auto rounded-lg shadow-md" height="200"
        :src="getImageUrl('img36.jpg')"
        width="200" />
        <img alt="Office cleaning image 7" class="w-full h-auto rounded-lg shadow-md" height="200"
        :src="getImageUrl('img37.jpg')"
        width="200" />
        <img alt="Office cleaning image 8" class="w-full h-auto rounded-lg shadow-md" height="200"
        :src="getImageUrl('img38.jpg')"
        width="200" />
        <img alt="Office cleaning image 8" class="w-full h-auto rounded-lg shadow-md" height="200"
        :src="getImageUrl('img23.jpg')"
        width="200" />
      </div>
    </section>
    <section class="bg-white p-6 shadow-md mb-6">
      <h2 class="text-2xl font-bold mb-4">
        餐廳、廚房清潔的具體內容
      </h2>
      <p class="mb-2">
        根據您的需求，我們將提供全方位無死角的清潔服務。
      </p>
      <p class="mb-6">
        我們使用先進的科技儀器，環保無害的清潔劑，確保您的餐廳與廚房不留污漬、不積油污，我們使用的工具將會徹底處理您平時無法去除的頑固污漬，和無法觸及的衛生死角。我們的服務包括
      </p>
      <p class="mb-4">
        <span class="text-xl text-blue-400">日常店鋪清潔：</span>我們製訂日常清潔計劃，可以根據餐廳的營業時間提供多次上門清潔保養，確保客戶消費環境與您工作環境的徹底清潔。
      </p>
      <p class="mb-4">
        <span class="text-xl text-blue-400">定期深層清潔去油污：</span>我們將使用現今市面上最先進的儀器與清潔劑強效去除頑固油污，還您一個整潔如初的餐廳環境。
      </p>
      <p class="mb-4">
        <span class="text-xl text-blue-400">定期清理所有工具：</span>我們團隊經過專業的培訓，在保證您的工具完好無損的前提下進行全面的工具清潔。
      </p>
      <p class="mb-4">
        <span class="text-xl text-blue-400">定期清理所有設施：</span>我們團隊擁有全香港最全面的設施拆卸知識，能夠快速高效地拆裝您的設施，進行深度清潔。
      </p>
      <p class="mb-4">
        <span class="text-xl text-blue-400">定期清理水槽等細菌居地：</span>水管深處、水槽死角通常是細菌滋生、散發惡臭的源頭，我們將會使用專門的工具，進行細菌去除，從根源上徹底解決散發惡臭的問題。
      </p>
    </section>
    <section class="bg-gray-200 p-6 shadow-md mb-20">
      <h2 class="text-xl font-bold mb-4">
        客製餐廳衛生解決方案
      </h2>
      <p class="mb-4">
        我們的專業團隊將根據您的需求，為您提供專業的清潔服務，確保您的工作環境始終保持清潔和衛生。
      </p>
      <div class="flex">
        <button class="animate-pulse bg-blue-500 text-white px-4 py-2 rounded" @click="linkElement">
          聯繫我們
        </button>
      </div>
    </section>
  </main>
</template>
<style scoped></style>