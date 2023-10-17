<template>
  <div class="info-section">
    <div v-if="orientation === 'left'" class="image">
      <img :src="imageSrc" alt="Section Image" />
    </div>
    <div class="text">{{ description }}</div>
    <div v-if="orientation === 'right'" class="image">
      <img :src="imageSrc" alt="Section Image" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imageSrc: String,
    description: String,
    orientation: {
      type: String,
      default: 'left'
    }
  }
};
</script>

<style>
.info-section {
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
}
.info-section .image img {
  width: 40%;
  height: auto;
}
.info-section .text {
  flex: 1;
  padding: 20px;
}
</style>
