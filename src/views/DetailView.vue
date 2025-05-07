<!--
 * @Description: 详情页-甲醛
 * @Version: 0.1
 * @Autor: GiottoLLL7
 * @Date: 2024-05-30 20:25:21
 * @LastEditors: GiottoLLL7
 * @LastEditTime: 2025-02-19 20:55:44
-->
<script setup lang="ts">
import { defineComponent, onMounted, ref, computed } from 'vue'

const getImageUrl = (name:string) => {
  return new URL(`../assets/img/CH2O/${name}`, import.meta.url).href
}
</script>

<template>
  <main>
    <div class="flex justify-center">
      <div class="px-4 py-2 lg:px-32 bg-gray-100 rounded-lg max-w-4xl">
        <img alt="Stone Cleaning Image" class="w-full mb-4 rounded-lg" height="400" :src="getImageUrl('img1.png')" width="600"/>
        <h1 class="text-2xl font-bold text-center mb-4">
          甲醛是什麼？
        </h1>
        <p class="text-gray-700 mb-4 text-justify">
          甲醛是最常見的室內<span class="text-red-400 text-xl">空氣污染毒物</span>，約有三千多種不同建築材料均含有甲醛。甲醛是天然存在的有機化合物以及有特殊刺激氣味的<span class="text-red-400 text-xl">無色氣體</span>，對人眼、鼻等有<span class="text-red-400 text-xl">刺激作用</span>，是世界衛生組織公認的<span class="text-red-400 text-xl">致癌物</span>之一。有數以千計的產品會使用含有甲醛的粘合劑或溶液作生產用途，適用於各種建築材料，包括油漆、膠合板、 牆紙、隔熱材料、木製產品、地板、裝修和裝飾材料，所有含有甲醛成份的產品均會不斷在空間中散發有毒甲醛，揮發時間長達 3-15 年。長期吸入高濃度甲醛，會對健康造成<span class="text-red-400 text-xl">永久性損害</span>。而世界衛生組織(WHO) 公佈甲醛為致癌和致畸形物質，長期居住在甲醛0.5ppm污染長達半年以上，易患血癌、鼻咽癌及呼吸系統的疾病 
        </p>
        <h1 class="text-2xl font-bold text-center mb-4">
          甲醛的來源
        </h1>
        <img alt="Floor Cleaning Image" class="w-full mb-4 rounded-lg" height="400" :src="getImageUrl('img2.png')" width="600"/>
        <p class="text-gray-700 mb-4 text-xl text-justify">
          最常見的甲醛來源，一般為木板，汽車，牆紙，地毯，窗簾，皮具，家具 等於日常生活中每天都能接觸到的物件｡
        </p>
        <h1 class="text-2xl font-bold text-center mb-4">
          甲醛對健康的危害
        </h1>
        <img alt="Floor Cleaning Image" class="w-full mb-4 rounded-lg" height="400" :src="getImageUrl('img3.png')" width="600"/>
        <ul class="list-disc list-inside mb-4">
          <li><span class="text-red-400 text-xl">刺激作用</span>：甲醛會對皮膚黏膜有刺激作用。甲醛在室內達到一定濃度時，人就有不適感，大於0.15mg/立方米的甲醛濃度可引起眼紅、眼癢、咽喉不適或疼痛、聲音嘶啞、噴嚏、胸悶、氣喘、皮炎等情況</li>
          <li><span class="text-red-400 text-xl">致癌</span>：美國國家癌症研究所公布頻繁接觸甲醛的工人患有血癌、淋巴癌、鼻咽癌、結腸癌、腦瘤、細胞核基因突變等的發生機率及死亡率比一般人高達37%。</li>
          <li><span class="text-red-400 text-xl">急性中毒反應</span>急性中毒反應：甲醛濃度過高會引起急性中毒，會出現咽喉燒灼痛、呼吸困難、肺水腫、過敏性皮炎、黃疸等情況。</li>
          <li><span class="text-red-400 text-xl">導致基因突變</span>導致基因突變：甲醛能引起細胞核的基因突變、染色體損傷、DNA 斷裂。</li>
        </ul>
        <h1 class="text-2xl font-bold text-center mb-4">
          甲醛濃度一覽
        </h1>
        <ul class="list-disc list-inside mb-4 text-xl">
          <li>0.03–0.05ppm：沒有臭味或感覺</li>
          <li>0.08ppm：世界衛生組織建議值</li>
          <li>0.3-0.5ppm：眼睛感到刺激</li>
          <li>0.5–0.8ppm：有刺激氣味、呼吸困難、氣喘</li>
          <li>5.0ppm：開始頭暈、喉嚨不舒服</li>
          <li>15.0ppm：開始咳嗽、流眼淚</li>
          <li>20.0ppm：刺激呼吸器官系統、心跳加速</li>
          <li>50.0ppm以上：造成肺水腫、致癌、引致死亡</li>
        </ul>
        <h1 class="text-2xl font-bold text-center mb-4">
          室內空氣質素指標
        </h1>
        <ul class="list-disc list-inside mb-4 text-xl">
          <li>香港環境保護署IAQCenter：0.081ppm(良好級)/0.024ppm(卓越級)</li>
          <li>世界衛生組織：0.08ppm</li>
          <li>歐盟環境標準：0.1ppm</li>
        </ul>
        <h1 class="text-2xl font-bold text-center mb-4">
          除甲醛方法比較
        </h1>
        <p class="text-gray-700 mb-4 text-xl">
          家居新裝修以及新家具甲醛釋出含量一般都會超標，而甲醛的揮發時間長達3-15 年，而市面上除產品林林總總，亦有坊間的說法，建議使用較專業及較安全的除甲醛產品。下列圖表為一些真正能夠有效去除甲醛的方法以作比較。
        </p>
        <img alt="Floor Cleaning Image" class="w-full mb-4 rounded-lg" height="400" :src="getImageUrl('img4.png')" width="600"/>
        <h1 class="text-2xl font-bold text-center mb-4">
          純植物除臭抑菌劑(除甲醛配方)
        </h1>
        <div class="flex mb-4">
          <div>
            <p class="text-orange-400 text-xl mb-4">
              通過日本泓前大學、香港STC等多項測試結果證明有效去除99%以上甲醛、能殺滅多種細菌及有害物質
            </p>
            <p class="text-gray-700 text-xl mb-4">
              包括H1N1、金黃色葡萄球菌、大腸桿菌、沙門氏菌、麈蟎等｡產品 100%純天然、不損害皮膚、入口無毒性、既綠色環保且安全｡
            </p>
          </div>
          <img alt="Floor Cleaning Image" class="w-6/12 ml-4 rounded-lg" height="400" :src="getImageUrl('img5.png')" width="600"/>
        </div>
        <img alt="Floor Cleaning Image" class="w-full mb-4 rounded-lg" height="400" :src="getImageUrl('img6.png')" width="600"/>
        <h1 class="text-2xl font-bold text-center mb-4">
          常用工具
        </h1>
        <div class="flex mb-4">
          <div>
            <h2 class="text-xl font-bold mb-2">專用高壓霧化噴槍</h2>
            <p class="text-gray-700 mb-1">
              <span class="text-blue-400">用途</span>：使藥水平均分佈在室內傢俬、儲物櫃連抽屜內及各裝飾每一吋地方。
            </p>
            <p class="text-gray-700">
              <span class="text-blue-400">使用方法</span>：將藥水倒於專用高壓噴槍之藥水瓶內，透過高壓噴塗法，將藥水平均分佈於室內傢俬 、儲物櫃等每一吋地方，能夠在短時間內減低 VOC濃度。
            </p>
          </div>
          <img alt="Floor Cleaning Image" class="w-6/12 ml-4 rounded-lg" height="400" :src="getImageUrl('img7.png')" width="600"/>
        </div>
        <div class="flex mb-4">
          <img alt="Floor Cleaning Image" class="w-6/12 mr-4 rounded-lg" height="400" :src="getImageUrl('img8.png')" width="600"/>
          <div>
            <h2 class="text-xl font-bold mb-2">專用高壓霧化噴槍</h2>
            <p class="text-gray-700 mb-1">
              <span class="text-blue-400">用途</span>：使藥水平均分佈在室內傢俬、儲物櫃連抽屜內及各裝飾每一吋地方。
            </p>
            <p class="text-gray-700">
              <span class="text-blue-400">使用方法</span>：將藥水倒於專用高壓噴槍之藥水瓶內，透過高壓噴塗法，將藥水平均分佈於室內傢俬 、儲物櫃等每一吋地方，能夠在短時間內減低 VOC濃度。
            </p>
          </div>
        </div>
        <div class="flex mb-4">
          <div>
            <h2 class="text-xl font-bold mb-2">甲醛/TVOC測量儀</h2>
            <p class="text-gray-700 mb-1">
              <span class="text-blue-400">用途</span>：檢測甲醛/TVOC濃度是否超出標準
            </p>
            <p class="text-gray-700">
              <span class="text-blue-400">使用方法</span>：專業的技術人員會關上單位的門窗，再用專業的TVOC儀器，量度室內的總VOC濃度。
            </p>
          </div>
          <img alt="Floor Cleaning Image" class="w-6/12 ml-4 rounded-lg" height="400" :src="getImageUrl('img9.png')" width="600"/>
        </div>
        <div class="flex mb-24">
          <img alt="Floor Cleaning Image" class="w-6/12 mr-4 rounded-lg" height="400" :src="getImageUrl('img10.png')" width="600"/>
          <div>
            <h2 class="text-xl font-bold mb-2">CARTEL 光等淨化機</h2>
            <p class="text-blue-400">
              主要功能
            </p>
            <ul class="list-disc list-inside mb-1">
              <li>分裂空氣中的有機污染物</li>
              <li>摧毀不健康氣體</li>
              <li>殺死細菌、黴菌和病毒</li>
              <li>消除空氣的粒子、灰塵和煙霧</li>
            </ul>
            <p class="text-gray-700 mb-2">
              <span class="text-blue-400">原理</span>：利用光等離子光管釋放出光等離子、深頻紫外線、負離子及活性氧,有效消除空氣中的臭味、細菌、病毒、霉菌、煙汽及其它飄浮雜質,從而改善室內的空氣質素。
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="px-4 py-2 lg:px-32">
      <h2 class="text-xl font-bold mb-4 text-center">
        常用工具
      </h2>
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <img alt="Image 1" class="w-full rounded-lg" height="200" src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-sSsOulEoQY3dXtF2RiaK66Ja/user-XZ7Av8ZH1bvGvI0GdH7WwbAs/img-zBsqvFiwXzpRFWxgFhZ2qsne.png?st=2024-06-01T04%3A39%3A48Z&se=2024-06-01T06%3A39%3A48Z&sp=r&sv=2023-11-03&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-05-31T11%3A21%3A36Z&ske=2024-06-01T11%3A21%3A36Z&sks=b&skv=2023-11-03&sig=Re2wcJAHp7oGFBYbaZH9g/riKoSYBJf02qi8EmgFkAI%3D" width="300"/>
        <img alt="Image 2" class="w-full rounded-lg" height="200" src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-sSsOulEoQY3dXtF2RiaK66Ja/user-XZ7Av8ZH1bvGvI0GdH7WwbAs/img-LeiSluzJA41mzCz0qwLEN4SP.png?st=2024-06-01T04%3A39%3A51Z&se=2024-06-01T06%3A39%3A51Z&sp=r&sv=2023-11-03&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-05-31T23%3A37%3A04Z&ske=2024-06-01T23%3A37%3A04Z&sks=b&skv=2023-11-03&sig=HD86s47cwHElGVFmzoilyUZorh5bRgzyoFFGZhc0hXI%3D" width="300"/>
        <img alt="Image 3" class="w-full rounded-lg" height="200" src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-sSsOulEoQY3dXtF2RiaK66Ja/user-XZ7Av8ZH1bvGvI0GdH7WwbAs/img-hE1fYEJlbEict9CppHR5DgfH.png?st=2024-06-01T04%3A39%3A46Z&se=2024-06-01T06%3A39%3A46Z&sp=r&sv=2023-11-03&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-05-31T19%3A38%3A37Z&ske=2024-06-01T19%3A38%3A37Z&sks=b&skv=2023-11-03&sig=UQW2%2BryInrGs2UzOh0bz1C8bPFtDjn%2B1dLwQ2cdsoHU%3D" width="300"/>
        <img alt="Image 4" class="w-full rounded-lg" height="200" src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-sSsOulEoQY3dXtF2RiaK66Ja/user-XZ7Av8ZH1bvGvI0GdH7WwbAs/img-U4OZsG0emu1TQdaJPPdEBDuM.png?st=2024-06-01T04%3A39%3A52Z&se=2024-06-01T06%3A39%3A52Z&sp=r&sv=2023-11-03&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-05-31T23%3A46%3A05Z&ske=2024-06-01T23%3A46%3A05Z&sks=b&skv=2023-11-03&sig=RUW4OHiy31d5W9RJKfQgoJaypbzxSePzyKY1r31TRV0%3D" width="300"/>
      </div>
    </div> -->
  </main>
</template>
<style scoped>
</style>