<template>
  <div id="app">
    <Header @scrollTo="handleScrollTo" />
    <Banner />
  <InfoSection 
    ref="technology"
    :imageSrc="businessPlantImage"  
    titleKey="technologyTitle"
    descriptionKey="technologyDescription" 
    orientation="left" />
  <InfoSection 
    ref="business"
    :imageSrc="powerPlantImage" 
    titleKey="businessTitle"
    descriptionKey="businessDescription" 
    orientation="right" />
  <InfoSection 
    ref="cilent"
    :imageSrc="businessPlantImage"  
    titleKey="clientTitle"
    descriptionKey="clientDescription" 
    orientation="left" />
  <InfoSection 
    ref="company"
    :imageSrc="powerPlantImage" 
    titleKey="companyTitle"
    descriptionKey="companyDescription" 
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
