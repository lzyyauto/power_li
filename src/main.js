import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import App from './App.vue';
import 'swiper/swiper-bundle.css';
 
const messages = {
  'en-US': {
    companyName: "SICHUAN DAZHOU GAS-FIRED POWER PLANT",
    address: "Address:No.7 Qiaoba Community, Binlang Street, High Technology District, Dazhou City, Sichuan Province, China",
    email: "Email:",
    phone: "Phone:",
    aboutUsTitle:"About us",
    visionTitle:"Company Vision",
    missionTitle:"Mission",
    coreTitle:"Core Objectives",
    contactTitle:"Contact Us",
    aboutUsDescription: "Sichuan Dazhou Gas-Fired Power Plant is located in the city of Dazhou in Sichuan province. Total capacity of the plant is 700MW. Sichuan Dazhou Gas-Fired Power Plant has 2 units each capacity is 350MW. Unit 1 was commissioned on January’2015 and Unit 2 was commissioned on June’2015.",
    visionDescription: "Leading in generating power and be a entity in growth development of state.",
    missionDescription:"Lead in the market of power generation.\nEnsure flawless operation of power plants.\nEnsure reliable power generation.\nEnsure efficiency in implementation of company goal.\nGrab the business opportunities in Power Generation Market.\nAdaptation of new technologies in power industry.\nAchieve trust and confidence of all stakeholders and their expectations.",
    coreDescription:"Corporate Ethics and Compliance\nCustomer Focus\nEnvironmentally and Financially Sustainable\nSustainable Power Growth\nBusiness Expansion",
    },
  'zh-CN': {
    companyName: "四川达州燃气发电厂",
    address: "地址:中国四川省达州市高新区槟榔街桥坝社区7号邮编635000",
    email: "邮箱:",
    phone: "电话号码:",
    aboutUsTitle:"关于我们",
    visionTitle:"公司愿景",
    missionTitle:"使命",
    coreTitle:"核心目标",
    contactTitle:"联系我们",
    aboutUsDescription: "四川达州燃气发电厂位于四川省达州市。该厂总装机容量为700兆瓦。四川达州燃气发电厂有2台机组，每台容量为350兆瓦。1号机组于2015年1月投产，2号机组于2015年6月投产。",
    visionDescription: "在发电领域中处于领先地位，并成为国家增长发展的实体。",
    missionDescription:"在发电市场中引领潮流。\n确保电厂运行无故障。\n确保可靠的发电能力。\n实现公司目标的高效率执行。\n把握发电市场上的商业机会。\n适应新技术在能源行业中的应用。\n获得所有利益相关者及其期望的信任和信心。",
    coreDescription:"公司道德与合规性\n客户至上\n环境和财务可持续性\n可持续能源增长\n业务扩张",
  }
};

const i18n = createI18n({
  locale: 'en-US',
  messages
});

createApp(App).use(i18n).mount('#app');
