<template>
  <div id="app">
    <Header @scrollTo="handleScrollTo" />
    <Banner />
  <InfoSection 
    ref="aboutUs"
    :imageSrc="aboutUsImage"  
    titleKey="aboutUsTitle"
    descriptionKey="aboutUsDescription" 
    orientation="left" />
  <InfoSection 
    ref="vision"
    :imageSrc="visionImage" 
    titleKey="visionTitle"
    descriptionKey="visionDescription" 
    orientation="right" />
  <InfoSection 
    ref="mission"
    :imageSrc="aboutUsImage"  
    titleKey="missionTitle"
    descriptionKey="missionDescription" 
    orientation="left" />
  <InfoSection 
    ref="core"
    :imageSrc="visionImage" 
    titleKey="coreTitle"
    descriptionKey="coreDescription" 
    orientation="left" />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/SiteHeader.vue';
import Banner from '@/components/SiteBanner.vue';
import InfoSection from '@/components/InfoSection.vue';
import Footer from '@/components/SiteFooter.vue';

export default {
  data() {
    return {
      powerPlantImage: require('@/assets/Power_Plant.jpg'),
      businessPlantImage: require('@/assets/273.jpeg'),
      visionImage: require('@/assets/3f2af7e7bbf05f0e5c74cb1289b6c2c7.jpg'),
      aboutUsImage: require('@/assets/00e3ee5d8e03bf800b5211b01e229a40.jpg')
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
    }
  },

  components: {
    Header,
    Banner,
    InfoSection,
    Footer
  }
};
</script>
