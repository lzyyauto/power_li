<template>
  <div id="app">
    <Header />
    <Banner />
    <InfoSection imageSrc="companyInfoImage" description="$t('companyInfo')" />
    <InfoSection imageSrc="contactUsImage" description="$t('qualification')" orientation="right" />
    <InfoSection imageSrc="aboutUsImage" description="$t('aboutUs')" />
    <InfoSection imageSrc="contactUsImage" description="$t('contactUs')" orientation="right" />
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
      companyInfoImage: require('@/assets/banner.jpg'),
      aboutUsImage: require('@/assets/273.jpeg'),
      contactUsImage: require('@/assets/Power_Plant.jpg')
    };
  },

  components: {
    Header,
    Banner,
    InfoSection,
    Footer
  }
};
</script>
