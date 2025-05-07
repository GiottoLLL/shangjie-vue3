<!--
 * @Description: 详情页-办公楼
 * @Version: 0.1
 * @Autor: GiottoLLL7
 * @Date: 2024-05-30 20:25:21
 * @LastEditors: GiottoLLL7
 * @LastEditTime: 2025-02-20 09:23:11
-->
<script setup lang="ts">
import { defineComponent, onMounted, ref, computed } from 'vue'

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
      <img alt="Close-up image of a person cleaning a railing" class="w-full" height="600" :src="getImageUrl('img11.jpg')" width="1920"/>
    </section>
    <section class="bg-white p-6 shadow-md mb-6 relative">
      <img alt="Image of a modern office space with glass walls" class="w-full h-full absolute top-0 bottom-0 left-0 right-0 opacity-15 rounded" height="600" :src="getImageUrl('img2.jpg')" width="1920"/>
      <h1 class="text-2xl font-bold mb-4">
        寫字樓|商業清潔服務
      </h1>
      <p class="mb-4">
        寫字樓環境的清潔與衛生管理在企業運營中扮演著至關重要的角色。良好的辦公室環境清潔不僅能<span class="text-blue-400 text-xl">提升員工的工作效率</span>，還能營造一個健康、舒適的工作環境。尚潔清潔團隊將為您提供合理、專業化的清潔，消除寫字樓環境內的污漬、病毒、過敏源，讓您的員工保持健康提高效率。
      </p>
      <p class="mb-4">
        我們的寫字樓環境清潔服務包括<span class="text-blue-400 text-xl">日常清潔、深度清潔、地毯清洗、窗戶清潔、廁所清潔、設備清洗</span>等。我們的專業團隊使用先進的清潔設備和環保清潔劑，確保每一個角落都能得到徹底清潔。
      </p>
      <p class="mb-4">
        無論是小型辦公室還是大型企業，我們都能根據客戶的需求提供不同周期且<span class="text-blue-400 text-xl">定制化</span>的清潔方案,歡迎咨詢我們。
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
          :src="getImageUrl('img17.jpg')"
          width="200" />
        <img alt="Office cleaning image 2" class="w-full h-auto rounded-lg shadow-md" height="200"
          :src="getImageUrl('img18.jpg')"
          width="200" />
        <img alt="Office cleaning image 3" class="w-full h-auto rounded-lg shadow-md" height="200"
        :src="getImageUrl('img19.jpg')"
        width="200" />
        <img alt="Office cleaning image 4" class="w-full h-auto rounded-lg shadow-md" height="200"
        :src="getImageUrl('img21.jpg')"
        width="200" />
      </div>
      <div class="grid grid-cols-1 gap-4 mb-4">
        <img alt="Office cleaning image 5" class="w-full h-auto rounded-lg shadow-md" height="200"
        :src="getImageUrl('img20.jpg')"
        width="200" />
      </div>
      <div class="grid grid-cols-2 gap-4">
        <img alt="Office cleaning image 6" class="w-full h-auto rounded-lg shadow-md" height="200"
        :src="getImageUrl('img22.jpg')"
        width="200" />
        <img alt="Office cleaning image 7" class="w-full h-auto rounded-lg shadow-md" height="200"
        :src="getImageUrl('img23.jpg')"
        width="200" />
        <img alt="Office cleaning image 8" class="w-full h-auto rounded-lg shadow-md" height="200"
        :src="getImageUrl('img24.jpg')"
        width="200" />
        <img alt="Office cleaning image 8" class="w-full h-auto rounded-lg shadow-md" height="200"
        :src="getImageUrl('img25.jpg')"
        width="200" />
      </div>
    </section>
    <section class="bg-white p-6 shadow-md mb-6">
      <h2 class="text-2xl font-bold mb-4">
        寫字樓清潔的具體內容
      </h2>
      <p class="mb-2">
        根據您的需求，我們將提供不同週期的清潔服務，包括月度深度清潔、日常清潔等等。
      </p>
      <p class="mb-6">
        我們使用先進的科技儀器，環保無害的清潔劑，確保您的辦公環境在保持整潔的前提下不會造成二次污染。我們將根據您的時間安排來調整清潔計劃，不會影響您的日常工作安排，我們的清潔服務包括：
      </p>
      <p class="mb-4">
        <span class="text-xl text-blue-400">日常清潔維護：</span>我們製訂日常清潔計劃，可以根據貴公司的日程安排提供每週一次或多次上門清潔保養，確保辦公室保持整潔靚麗。
      </p>
      <p class="mb-4">
        <span class="text-xl text-blue-400">地板清潔與保養：</span>根據貴公司不同類型的地板我們將提供不同的清潔方法和使用不同的儀器，木質地板將會進行打蠟拋光和防腐保養，瓷磚地板會徹底清除塵埃，地毯則會提供深度清洗清潔。我們致力於提高貴公司地板的壽命。
      </p>
      <p class="mb-4">
        <span class="text-xl text-blue-400">辦公桌椅、儲物櫃清潔：</span>我們將會徹底擦拭貴公司的辦公桌椅、儲物櫃等辦公用具，在不破壞您的重要材料的前提下清潔每一處死角，保證衛生。
      </p>
      <p class="mb-4">
        <span class="text-xl text-blue-400">玻璃清潔：</span>我們使用高效無污染的清潔工具與清潔劑，徹底擦亮貴公司的玻璃。
      </p>
      <p class="mb-4">
        <span class="text-xl text-blue-400">電子器材清潔維護：</span>我們會清除貴公司打印機、電腦、鍵盤、鼠標等電子器材積累灰塵和污漬，它們通常會隱藏著不易發現的縫隙，我們將在不影響設備使用的前提下徹底進行清潔。
      </p>
      <p class="mb-4">
        <span class="text-xl text-blue-400">洗手間清潔：</span>洗手間往往是清潔的重點，我們將會對貴公司的洗手間進行深度清洗與消毒，並且提供洗手間除臭劑，處理洗手間積水，確保洗手間的乾淨衛生。
      </p>
    </section>
    <section class="bg-gray-200 p-6 shadow-md mb-20">
      <h2 class="text-xl font-bold mb-4">
        客製寫字樓衛生解決方案
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