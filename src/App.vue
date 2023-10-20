<template>
  <div id="app">
    <Header @scrollTo="handleScrollTo" />
    <Banner />
  <InfoSection 
    ref="aboutUs"
    :imageSrc="businessPlantImage"  
    titleKey="aboutUsTitle"
    descriptionKey="aboutUsDescription" 
    orientation="left" />
  <InfoSection 
    ref="vision"
    :imageSrc="powerPlantImage" 
    titleKey="visionTitle"
    descriptionKey="visionDescription" 
    orientation="right" />
  <InfoSection 
    ref="mission"
    :imageSrc="businessPlantImage"  
    titleKey="missionTitle"
    descriptionKey="missionDescription" 
    orientation="left" />
  <InfoSection 
    ref="core"
    :imageSrc="powerPlantImage" 
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
      businessPlantImage: require('@/assets/273.jpeg')
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
