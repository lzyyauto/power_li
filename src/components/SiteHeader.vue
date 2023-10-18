<template>
  <div class="header">
    <div class="logo">
      <img src="@/assets/logo.png" alt="Company Logo" />
    </div>
    <div class="nav-items">
      <router-link to="/">
        <div class="nav-item">{{ $t('home') }}</div>
      </router-link>
      <div @click="$emit('scrollTo', 'business')" class="nav-item">{{ $t('businessIntro') }}</div>
      <div @click="$emit('scrollTo', 'company')" class="nav-item">{{ $t('companyIntro') }}</div>
      <div @click="$emit('scrollTo', 'contactSection')" class="nav-item">{{ $t('contact') }}</div>
    </div>
    <div class="lang-switch" @click="toggleLang">
      {{ currentLang === 'zh-CN' ? '🇨🇳' : '🇺🇸' }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentLang: 'zh-CN'
    };
  },
  methods: {
    toggleLang() {
      this.currentLang = this.currentLang === 'zh-CN' ? 'en-US' : 'zh-CN';
      this.$i18n.locale = this.currentLang;
    }
  }
};
</script>

<style>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #001f3f; /*深蓝色*/
  color: #fff;
  position: relative;
  z-index: 1; 
}

.logo img {
  max-height: 40px;
  margin-right: 20px;
}

.nav-items {
  display: flex;
  position: relative;
  gap: 20px;
  z-index: 10; 
}

.lang-switch {
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.lang-switch:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.nav-item {
  cursor: pointer; /* Add this line */
  text-decoration: none;
  position: relative;
  color: #fff;
  transition: color 0.3s, background-color 0.3s;
  padding: 8px 12px;
  border-radius: 5px;
}

.nav-item:hover {
  color: #001f3f; /*深蓝色*/
  background-color: #fff;
}
</style>
