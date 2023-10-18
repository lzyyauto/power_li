<template>
  <div id="app">
    <Header @scrollTo="handleScrollTo" />
    <Banner />
  <InfoSection 
    ref="business"
    :imageSrc="businessPlantImage"  
    titleKey="businessTitle"
    descriptionKey="businessDescription" 
    orientation="left" />
  <InfoSection 
    ref="company"
    :imageSrc="powerPlantImage" 
    titleKey="companyTitle"
    descriptionKey="companyDescription" 
    orientation="right" />
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
          if (section) {
            section.$el.scrollIntoView({ behavior: 'smooth' });
          }
        }
      },
  },

  components: {
    Header,
    Banner,
    InfoSection,
    Footer
  }
};
</script>
