<template>
  <div class="header">
    <div class="portal-name">{{ $t('portalName') }}</div>
    <div class="lang-switch" @click="toggleLang">
      {{ currentLang === 'cn' ? '🇺🇸' : '🇨🇳' }}
    </div>
    <div class="contact">{{ $t('contact') }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentLang: 'cn'
    };
  },
  methods: {
    toggleLang() {
      this.currentLang = this.currentLang === 'cn' ? 'en' : 'cn';
      this.$i18n.locale = this.currentLang;
    }
  }
};
</script>

<style>
.header {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: #333;
  color: #fff;
}
</style>
