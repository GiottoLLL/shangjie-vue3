<!--
 * @Description: 尚潔首頁
 * @Version: 0.1
 * @Autor: GiottoLLL7
 * @Date: 2024-05-25 14:10:41
 * @LastEditors: GiottoLLL7
 * @LastEditTime: 2025-02-20 09:23:02
-->
<script setup lang="ts">
import { defineComponent, onMounted, ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import {Navigation, Pagination, A11y, Autoplay} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
const modules = [Navigation, Pagination, A11y, Autoplay]

const getImageUrl = (name: string) => {
  return new URL(`../assets/img/${name}`, import.meta.url).href
}

const callPhone = () => {
  const phone = 'tel:53007098'
  window.location.href = phone
}
const router = useRouter()
const goDetail = () => {
  router.push("/detail")
}

const goBusiness = () => {
  router.push("/business")
}

const goRestaurant = () => {
  router.push("/restaurant")
}

const goFloor = () => {
  router.push("/floorWaxing")
}

const linkElement = () => {
  const link = 'https://api.whatsapp.com/send?phone=53007098'
  window.open(link)
}

// 轮播图配置
const swiperOptions = {
  loop: true,
  autoplay: {
    delay: 500,
    disableOnInteraction: false
  },
  pagination: {
    el: '.swiper-pagination'
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
}

// 轮播图图片数组
const carouselImages = [
  'img_swiper_1.jpeg',
  'img_swiper_2.jpeg',
  'img_swiper_3.jpeg',
  'img_swiper_4.jpeg'
].map(getImageUrl)

const swiperInstance = ref<typeof Swiper | null>(null);

const onSwiper = (swiper: typeof Swiper) => {
  swiperInstance.value = swiper;
}

onMounted(() => {
})
</script>

<template>
  <main>
    <!-- 轮播图 -->
    <swiper
      :slides-per-view="1"
      :space-between="0"
      :modules="modules"
      :pagination="{ clickable: true }"
      :autoplay="{
      delay: 2000,
      disableOnInteraction: false,
      }"
      navigation
      :loop="true"
      class="mb-8">
        <swiper-slide v-for="(image, index) in carouselImages" :key="index">
          <img :src="image" alt="Carousel Image" class="w-full h-auto" />
        </swiper-slide>
    </swiper>
    <section class="mb-8 container mx-auto text-center px-4 pt-1 pb-4 relative">
      <img alt="Image of a modern office space with glass walls"
        class="w-full h-full absolute top-0 bottom-0 left-0 right-0 opacity-15 rounded" height="600"
        :src="getImageUrl('img2.jpg')" width="1920" />
      <h2 class="text-2xl font-bold my-4">
        為什麼選擇我們<br />“清潔專家”尚潔服務有限公司
      </h2>
      <p class="text-gray-700 leading-relaxed text-justify">
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
    <section class="my-8 container mx-auto text-center px-4 pt-1 pb-4 relative">
      <img alt="Image of a modern office space with glass walls"
        class="w-full h-full absolute top-0 bottom-0 left-0 right-0 opacity-15 rounded" height="600"
        :src="getImageUrl('img5.jpg')" width="1920" />
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
    <section class="my-8 container mx-auto text-center px-4 pt-1 pb-4 relative">
      <img alt="Image of a modern office space with glass walls"
        class="w-full h-full absolute top-0 bottom-0 left-0 right-0 opacity-15 rounded" height="600"
        :src="getImageUrl('img1.jpg')" width="1920" />
      <h2 class="text-2xl font-bold my-4">
        尖端科技
      </h2>
      <p class="text-gray-700 leading-relaxed text-justify">
        日本專利無光觸媒觸​技術(JP-ECO)：<span class="text-blue-400 text-xl">甲醛剋星</span>，目前最先進的空氣淨化技術，能有效降解和治理空氣及物體中所含甲醛、細菌、異味等污染。
        <br />
        <br />
        高壓水流清洗機：通過動力裝置產生高壓水沖洗物體表面，能將<span class="text-blue-400 text-xl">污垢完全剝離</span>。
      </p>
    </section>
    <!-- <section>
    <img alt="Image of a modern office space with glass walls" class="w-full my-8 " height="600" :src="getImageUrl('img6.jpg')" width="1920"/>
  </section> -->
    <section>
      <img alt="Large banner image of a person walking in a large, bright room" class="w-full my-8" height="600"
        :src="getImageUrl('img33.jpg')" width="1920" />
    </section>
    <!-- <section class="my-8">
    <img alt="Close-up image of a person cleaning a railing" class="w-full" height="600" :src="getImageUrl('img3.jpg')" width="1920"/>
  </section> -->
    <section class="my-8">
      <img alt="Close-up image of a person cleaning a railing" class="w-full" height="600"
        :src="getImageUrl('img23.jpg')" width="1920" />
    </section>
    <section class="my-8">
      <img alt="Close-up image of a person cleaning a railing" class="w-full" height="600"
        :src="getImageUrl('img2.jpg')" width="1920" />
    </section>
    <section class="my-8 container mx-auto flex justify-center px-4">
      <div class="bg-gray-100 p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center">
        <img alt="Image of hands holding each other" class="w-full md:w-1/3 rounded-lg" height="300"
          :src="getImageUrl('img4.jpg')" width="300" />
        <div class="ml-0 md:ml-8 mt-4 md:mt-0 text-center md:text-left">
          <h3 class="text-xl font-bold text-blue-800">
            寫字樓|商業清潔服務
          </h3>
          <p class="text-gray-700 my-4">
            為辦公室提供高質量、全面的保潔服務。
          </p>
          <button class="animate-pulse bg-indigo-500 text-white py-2 px-4 rounded" @click="goBusiness">
            了解更多
          </button>
        </div>
      </div>
    </section>
    <section class="my-8 container mx-auto flex justify-center px-4">
      <div class="bg-gray-100 p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center">
        <img alt="Image of hands holding each other" class="w-full md:w-1/3 rounded-lg" height="300"
          :src="getImageUrl('img7.jpg')" width="300" />
        <div class="ml-0 md:ml-8 mt-4 md:mt-0 text-center md:text-left">
          <h3 class="text-xl font-bold text-blue-800">
            餐廳|廚房清潔服務
          </h3>
          <p class="text-gray-700 my-4">
            提供廚房深度清潔服務，去除一切油污。
          </p>
          <button class="animate-pulse bg-indigo-500 text-white py-2 px-4 rounded" @click="goRestaurant">
            了解更多
          </button>
        </div>
      </div>
    </section>
    <section class="my-8 container mx-auto flex justify-center px-4">
      <div class="bg-gray-100 p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center">
        <img alt="Image of hands holding each other" class="w-full md:w-1/3 rounded-lg" height="300"
          :src="getImageUrl('img9.jpg')" width="300" />
        <div class="ml-0 md:ml-8 mt-4 md:mt-0 text-center md:text-left">
          <h3 class="text-xl font-bold text-blue-800">
            根除甲醛|深度清潔
          </h3>
          <p class="text-gray-700 my-4">
            不僅防治和處理甲醛，我們還將悉心清理您的家具。
          </p>
          <button class="animate-pulse bg-indigo-500 text-white py-2 px-4 rounded" @click="goDetail">
            了解更多
          </button>
        </div>
      </div>
    </section>
    <section class="my-8 container mx-auto flex justify-center px-4">
      <div class="bg-gray-100 p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center">
        <img alt="Image of hands holding each other" class="w-full md:w-1/3 rounded-lg" height="300"
          :src="getImageUrl('img16.jpg')" width="300" />
        <div class="ml-0 md:ml-8 mt-4 md:mt-0 text-center md:text-left">
          <h3 class="text-xl font-bold text-blue-800">
            地板打蠟|精心保養
          </h3>
          <p class="text-gray-700 my-4">
            清除地板頑固污漬，通過打蠟使材料本身與空氣隔絕，達到延長材料使用壽命和美觀光潔的目的。
          </p>
          <button class="animate-pulse bg-indigo-500 text-white py-2 px-4 rounded" @click="goFloor">
            了解更多
          </button>
        </div>
      </div>
    </section>
    <section class="my-8 container mx-auto flex justify-center px-4">
      <div class="bg-gray-100 p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center">
        <img alt="Image of hands holding each other" class="w-full md:w-1/3 rounded-lg" height="300"
          :src="getImageUrl('img7.jpg')" width="300" />
        <div class="ml-0 md:ml-8 mt-4 md:mt-0 text-center md:text-left">
          <h3 class="text-xl font-bold text-blue-800">
            無微不至的服務|煥然一新的效果
          </h3>
          <p class="text-gray-700 my-4">
            無論多麼髒亂的場景，在我們的清潔過後都會呈現嶄新的面貌。
          </p>
          <button class="animate-pulse bg-indigo-500 text-white py-2 px-4 rounded" @click="linkElement">
            了解更多
          </button>
        </div>
      </div>
    </section>
  </main>
  <footer class="bg-gray-200 py-4">
    <div class="container mx-auto text-center px-4">
      <p class="text-gray-700">
        地址: 新蒲崗景福街114號捷景工業大廈14字樓B室1428
      </p>
      <p class="text-gray-700">
        電話: 5399 8757
      </p>
      <p class="text-gray-700">
        Email: libolang0813@gmail.com
      </p>
    </div>
  </footer>
</template>
<style scoped>
body {
  font-family: 'Noto Sans TC', sans-serif;
}
.swiper {
  width: 100%;
}

.swiper-slide {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

<script lang="ts">
export default {
  name: 'ShangJieIndex'
}
</script>