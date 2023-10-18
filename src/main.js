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
    technologyTitle:"technologyDescription",
    clientTitle:"clientDescription",
    businessDescription: "Our core business focuses on renewable energy solutions that cater to a global audience. With an emphasis on sustainability, we deploy cutting-edge technology to harness the power of the sun, wind, and water, turning them into efficient energy sources. Our team, comprising of industry veterans, collaborates with partners worldwide to implement eco-friendly energy projects. Through years of experience, we have refined our solutions to not only be environmentally responsible but also cost-effective. As a result, our clients benefit from reliable energy solutions that pave the way for a greener future.",
    companyDescription: "Established in 2000, our company has grown from a small startup into a leading force in the renewable energy sector. Headquartered in New York, with branches across Europe and Asia, we pride ourselves on being truly global. Our commitment to innovation has been recognized with numerous awards, and our projects are known for their excellence and impact. The ethos of our company is built around making the planet a better place for future generations. With over two decades in the industry, our passion and dedication remain unwavering, driving us to create a world powered by clean energy.",
    technologyDescription:"Power plants are indispensable facilities for modern industry and daily life. Technologically, power plants mainly generate electricity based on thermodynamic cycles or renewable energy technologies. Traditional thermal power plants use coal, natural gas, or oil as fuel, producing steam through boilers, which in turn spins steam turbines, thereby driving generators to produce electrical energy. In nuclear power plants, the heat from nuclear reactions is used to produce steam. For renewable energy power plants, such as hydroelectric, wind, and solar power plants, they generate electricity by harnessing natural resources like flowing water, wind, or sunlight. With technological advancements, the efficiency and reliability of power plants are continuously improving, while their environmental impact is progressively reduced.",
    clientDescription:"The clientele of power plants is broad and diverse. First, there are industrial customers who require a large amount of electricity to support their production activities, such as machine operations and maintaining production lines. Following them are commercial and service sector customers, like office buildings, shopping malls, and hotels, which need electricity to sustain daily operations, such as lighting, elevators, and air conditioning. Residential customers rely on the electricity provided by power plants to support household activities, like lighting, heating, and cooking. Moreover, with the rise of electric vehicles, charging stations have also become significant clients of power plants. In summary, power plants serve every facet of society, fulfilling diverse electricity needs.",
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
    technologyTitle:"核心科技",
    clientTitle:"合作客户",
    businessDescription: "我们的核心业务专注于为全球客户提供可再生能源解决方案。强调可持续性的前提下，我们采用尖端技术来利用太阳、风和水的能量，将其转化为高效的能源来源。我们的团队由行业资深人士组成，与全球合作伙伴合作，实施环保的能源项目。经过多年的经验积累，我们已经完善了我们的解决方案，使其不仅对环境负责，而且成本效益明显。因此，我们的客户可以从中受益，为更绿色的未来铺设道路。",
    companyDescription: "我们公司成立于2000年，从一个小型创业公司发展成为可再生能源领域的领军力量。总部位于纽约，拥有遍布欧洲和亚洲的分支机构，我们以真正的全球化为傲。我们对创新的承诺已获得众多奖项的认可，而我们的项目以其卓越性和影响力而闻名。我们公司的精神是为了让未来的几代人在这个星球上过上更好的生活。在这个行业中有超过二十年的历史，我们的激情和奉献从未改变，驱使我们创造一个由清洁能源驱动的世界。",
    technologyDescription:"电厂是现代工业和日常生活不可或缺的重要设施。技术上，电厂主要基于热机循环或可再生能源技术来发电。传统的火力发电厂利用煤、天然气或石油作为燃料，通过锅炉产生蒸汽，推动蒸汽轮机旋转，从而驱动发电机产生电能。而在核电厂中，使用核反应产生的热能来产生蒸汽。对于可再生能源发电厂，如水电、风电和太阳能电厂，它们通过利用自然资源如水流、风或太阳光来产生电力。随着技术的进步，电厂的效率和可靠性也在不断提高，同时环境影响也在逐步降低。",
    clientDescription:"电厂的客户群体广泛且多样。首先是工业客户，他们需要大量的电能来支持生产活动，如机器操作和生产线维持。随后是商业和服务业客户，如办公楼、商场和酒店，这些地方需要电能来维持日常运营，如照明、电梯和空调等设备的运行。居民客户则依赖电厂提供的电能来支持家庭生活，如照明、加热和烹饪等。此外，随着电动车的普及，充电站也成为了电厂的重要客户。总的来说，电厂服务于社会的各个层面，满足了人们多样化的电力需求。",
  }
};

const i18n = createI18n({
  locale: 'zh-CN',
  messages
});

createApp(App).use(i18n).mount('#app');
