<template>
  <div id="app">
  <MaintenanceMode v-if="isMaintenanceMode" />
  <div v-else>
    <Header @scrollTo="handleScrollTo" />
    <Banner />
  <InfoSection 
    ref="aboutUs"
    :imageSrc="lastImage"  
    titleKey="aboutUsTitle"
    descriptionKey="aboutUsDescription" 
    orientation="left" />
  <InfoSection 
    ref="vision"
    :imageSrc="lastImage" 
    titleKey="visionTitle"
    descriptionKey="visionDescription" 
    orientation="right" />
  <InfoSection 
    ref="mission"
    :imageSrc="lastImage"  
    titleKey="missionTitle"
    descriptionKey="missionDescription" 
    orientation="left" />
  <InfoSection 
    ref="core"
    :imageSrc="lastImage" 
    titleKey="coreTitle"
    descriptionKey="coreDescription" 
    orientation="left" />
    <Footer />
    </div>
  </div>
</template>

<script>
import Header from '@/components/SiteHeader.vue';
import Banner from '@/components/SiteBanner.vue';
import InfoSection from '@/components/InfoSection.vue';
import Footer from '@/components/SiteFooter.vue';
import MaintenanceMode from '@/components/MaintenanceMode.vue'; // 引入维护模式组件

export default {
  mounted() {
    this.addAlternateLink();
  },
  data() {
    return {
      isMaintenanceMode: false, // 维护模式状态
      powerPlantImage: require('@/assets/Power_Plant.jpg'),
      businessPlantImage: require('@/assets/273.jpeg'),
      visionImage: require('@/assets/3f2af7e7bbf05f0e5c74cb1289b6c2c7.jpg'),
      aboutUsImage: require('@/assets/00e3ee5d8e03bf800b5211b01e229a40.jpg'),
      lastImage: require('@/assets/WechatIMG123.jpeg')
    };
  },

  methods: {
    handleScrollTo(sectionId) {
      if (sectionId === 'contactSection') {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
      } else {
        const section = this.$refs[sectionId];
        if (section && section.$refs.sectionRoot) {
          section.$refs.sectionRoot.scrollIntoView({ behavior: 'smooth' });
        }
      }
    },
      addAlternateLink() {
        const linkEn = document.createElement('link');
        linkEn.rel = 'alternate';
        linkEn.href = 'https://www.ccpplab.com/';
        linkEn.hreflang = 'en-US';
        
        document.head.appendChild(linkEn);
      }
  },

  components: {
    Header,
    Banner,
    InfoSection,
    Footer,
    MaintenanceMode // 注册维护模式组件
  }
};
</script>
