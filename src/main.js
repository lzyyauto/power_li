import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import App from './App.vue';
import 'swiper/swiper-bundle.css';
 
const messages = {
  'en-US': {
    home:'home',
    businessIntro:'Business',
    companyIntro:'Company',
    contact: 'Contact',
    portalName: 'xxxx Power Plant',
    companyInfo: 'Company Information...',
    qualification: 'Qualifications...',
    aboutUs: 'About Us...',
    contactUs: 'Contact Us...',
    companyName: "XX Company",
    address: "Address:1234 Elm Street, Some City, Some Country",
    email: "Email:",
    phone: "Phone:",
    businessTitle:"BusinessDescription",
    companyTitle:"CompanyDescription",
    businessDescription: "Our core business focuses on renewable energy solutions that cater to a global audience. With an emphasis on sustainability, we deploy cutting-edge technology to harness the power of the sun, wind, and water, turning them into efficient energy sources. Our team, comprising of industry veterans, collaborates with partners worldwide to implement eco-friendly energy projects. Through years of experience, we have refined our solutions to not only be environmentally responsible but also cost-effective. As a result, our clients benefit from reliable energy solutions that pave the way for a greener future.",
    companyDescription: "Established in 2000, our company has grown from a small startup into a leading force in the renewable energy sector. Headquartered in New York, with branches across Europe and Asia, we pride ourselves on being truly global. Our commitment to innovation has been recognized with numerous awards, and our projects are known for their excellence and impact. The ethos of our company is built around making the planet a better place for future generations. With over two decades in the industry, our passion and dedication remain unwavering, driving us to create a world powered by clean energy."
  },
  'zh-CN': {
    home:'主页',
    businessIntro:'业务',
    companyIntro:'公司信息',
    contact: '联系方式',
    portalName: 'xxxx电厂',
    companyInfo: '公司信息...',
    qualification: '相关资质...',
    aboutUs: '关于我们...',
    contactUs: '联系我们...',
    companyName: "XX厂名",
    address: "地址:北京市xxxxx",
    email: "邮箱:",
    phone: "电话号码:",
    businessTitle:"业务介绍",
    companyTitle:"公司介绍",
    businessDescription: "我们的核心业务专注于为全球客户提供可再生能源解决方案。强调可持续性的前提下，我们采用尖端技术来利用太阳、风和水的能量，将其转化为高效的能源来源。我们的团队由行业资深人士组成，与全球合作伙伴合作，实施环保的能源项目。经过多年的经验积累，我们已经完善了我们的解决方案，使其不仅对环境负责，而且成本效益明显。因此，我们的客户可以从中受益，为更绿色的未来铺设道路。",
    companyDescription: "我们公司成立于2000年，从一个小型创业公司发展成为可再生能源领域的领军力量。总部位于纽约，拥有遍布欧洲和亚洲的分支机构，我们以真正的全球化为傲。我们对创新的承诺已获得众多奖项的认可，而我们的项目以其卓越性和影响力而闻名。我们公司的精神是为了让未来的几代人在这个星球上过上更好的生活。在这个行业中有超过二十年的历史，我们的激情和奉献从未改变，驱使我们创造一个由清洁能源驱动的世界。"
  }
};

const i18n = createI18n({
  locale: 'zh-CN',
  messages
});

createApp(App).use(i18n).mount('#app');
