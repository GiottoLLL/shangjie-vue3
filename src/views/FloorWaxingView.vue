<!--
 * @Description: 详情页-办公楼
 * @Version: 0.1
 * @Autor: GiottoLLL7
 * @Date: 2024-05-30 20:25:21
 * @LastEditors: GiottoLLL7
 * @LastEditTime: 2025-02-19 20:32:39
-->
<script setup lang="ts">
import { defineComponent, onMounted, ref, computed } from 'vue'

const getImageUrl = (name:string) => {
  return new URL(`../assets/img/floor-waxing/${name}`, import.meta.url).href
}

const linkElement = () => {
  const link = 'https://api.whatsapp.com/send?phone=53007098'
  window.open(link)
}
</script>
<template>
  <main class="p-4">
    <section class="my-8">
      <img alt="Close-up image of a person cleaning a railing" class="w-full" height="600" :src="getImageUrl('img1.jpg')" width="1920"/>
    </section>
    <section class="bg-white p-6 shadow-md mb-6 relative">
      <img alt="Image of a modern office space with glass walls" class="w-full h-full absolute top-0 bottom-0 left-0 right-0 opacity-15 rounded" height="600" :src="getImageUrl('img2.jpg')" width="1920"/>
      <h1 class="text-2xl font-bold mb-4">
        地板打蠟|精心保養
      </h1>
      <p class="mb-4">
        <span class="text-xl text-blue-400">保護地板：</span>打蠟能夠在地板表面形成一層保護膜，防止磨損、劃痕和水漬滲透，延長地板的使用壽命。
      </p>
      <p class="mb-4">
        <span class="text-xl text-blue-400">提升光澤：</span>經過打蠟的地板會顯得更加光亮，提升室內的美觀度和高級感。
      </p>
      <p class="mb-4">
        <span class="text-xl text-blue-400">易於清潔：</span>打蠟後，地板表面更加光滑，灰塵和污垢不易附着，日常清潔變得更加簡單高效。
      </p>
      <p class="mb-4">
        <span class="text-xl text-blue-400">防滑效果：</span>一些特殊的蠟產品具有防滑功能，能有效減少滑倒的風險，增加家庭和商業環境的安全性。
      </p>
    </section>
    <!-- <section class="mb-8 container mx-auto text-center px-4 pt-1 pb-4 relative">
      <img alt="Image of a modern office space with glass walls" class="w-full h-full absolute top-0 bottom-0 left-0 right-0 opacity-15 rounded" height="600" :src="getImageUrl('img2.jpg')" width="1920"/>
      <h2 class="text-2xl font-bold my-4">
      為什麼選擇我們<br/>"清潔專家"尚潔服務有限公司
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
          :src="getImageUrl('img3.jpg')"
          width="200" />
        <img alt="Office cleaning image 2" class="w-full h-auto rounded-lg shadow-md" height="200"
          :src="getImageUrl('img4.jpg')"
          width="200" />
        <img alt="Office cleaning image 3" class="w-full h-auto rounded-lg shadow-md" height="200"
        :src="getImageUrl('img5.jpg')"
        width="200" />
        <img alt="Office cleaning image 4" class="w-full h-auto rounded-lg shadow-md" height="200"
        :src="getImageUrl('img8.jpg')"
        width="200" />
      </div>
      <div class="grid grid-cols-1 gap-4 mb-4">
        <img alt="Office cleaning image 5" class="w-full h-auto rounded-lg shadow-md" height="200"
        :src="getImageUrl('img9.jpg')"
        width="200" />
      </div>
    </section>
    <section class="bg-white p-6 shadow-md mb-6">
      <h1 class="text-2xl font-bold mb-4">
        地板打蠟的流程
      </h1>
      <h2 class="text-xl font-bold mb-4">
        1. 地板清潔
      </h2>
      <p class="mb-4">
        <span class="text-xl text-blue-400">吸塵和掃地：</span>首先徹底清掃地板，去除灰塵和垃圾。
      </p>
      <p class="mb-4">
        <span class="text-xl text-blue-400">清洗地板：</span>使用中性清潔劑和溼布擦拭地板表面，確保沒有殘留的污漬和油脂。
      </p>
      <p class="mb-4">
        <span class="text-xl text-blue-400">乾燥地板：</span>清洗完畢後，確保地板完全乾燥，以免蠟層不均勻。
      </p>
      <h2 class="text-xl font-bold mb-4">
        2. 打蠟準備
      </h2>
      <p class="mb-4">
        <span class="text-xl text-blue-400">選擇蠟品：</span>根據地板材質選擇合適的地板蠟（如實木、複合、瓷磚等）。
      </p>
      <p class="mb-4">
        <span class="text-xl text-blue-400">調製蠟液：</span>按照蠟品說明書的比例調製蠟液，確保均勻混合。
      </p>
      <h2 class="text-xl font-bold mb-4">
        3. 打蠟操作
      </h2>
      <p class="mb-4">
        <span class="text-xl text-blue-400">塗蠟：</span>使用專業打蠟工具（如打蠟拖或專用打蠟機）均勻塗抹蠟液，避免蠟液堆積。
      </p>
      <p class="mb-4">
        <span class="text-xl text-blue-400">晾乾：</span>待蠟層乾燥，通常需要30分鐘至1小時，具體時間視蠟品而定。
      </p>
      <p class="mb-4">
        <span class="text-xl text-blue-400">打磨：</span>根據需求，乾燥後使用打磨機輕輕打磨蠟層，使其更加光滑。
      </p>
      <p class="mb-4">
        <span class="text-xl text-blue-400">多次塗蠟：</span>塗兩到三層蠟，每層蠟都需完全乾燥後再塗下一層，以確保最佳效果。
      </p>
      <h2 class="text-xl font-bold mb-4">
        4. 最終清潔和維護
      </h2>
      <p class="mb-4">
        <span class="text-xl text-blue-400">擦拭和檢查：</span>打蠟完成後，輕輕擦拭表面並檢查有無漏塗或氣泡。
      </p>
      <p class="mb-4">
        <span class="text-xl text-blue-400">定期維護：</span>打蠟後的地板應避免使用過於硬質的清潔工具，以免破壞蠟層。我們將為您定期打蠟保養。
      </p>
    </section>
    <section class="bg-gray-200 p-6 shadow-md mb-20">
      <h2 class="text-xl font-bold mb-4">
        最專業的地板打蠟方案
      </h2>
      <p class="mb-4">
        我們的專業團隊將會根據您的地板具體情況來為您提供最合適的服務，保證更加長期的使用和整潔。
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