<template>
  <div class="section-title">
    <div class="title-line"></div>
    <div class="title-text">{{ $t(titleKey) }}</div>
  </div>
  <div class="info-section">
    <div v-if="orientation === 'left'" class="image">
      <img :src="imageSrc" alt="Section Image" />
    </div>
    <div class="text">{{ $t(descriptionKey) }}</div>
    <div v-if="orientation === 'right'" class="image">
      <img :src="imageSrc" alt="Section Image" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imageSrc: String,
    descriptionKey: String,  // 用于国际化的键
    orientation: {
      type: String,
      default: 'left'
    },
    titleKey: String
  }
};
</script>

<style>
.info-section {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px 0;
  max-width: 1200px; /* 调整最大宽度 */
  margin-left: auto;
  margin-right: auto;
}

.info-section .image {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.info-section .image img {
  max-width: 90%; /* 避免图片过大 */
  height: auto;
}

.info-section .text {
  flex: 1.5; /* 调整文字部分宽度，增加它的重要性 */
  padding: 20px;
  text-align: center; /* 让文字居中 */
}

.section-title {
  top: -50px;  /* 调整为所需的位置 */
  left: 50px;
  display: flex;
  align-items: center;
}

.title-line {
  width: 5px;
  height: 30px;
  background-color: deepskyblue; /* 深蓝色 */
  margin-right: 10px;
}

.title-text {
  font-weight: bold;
}
</style>