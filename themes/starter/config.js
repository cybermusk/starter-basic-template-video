/**
 * 另一个落地页主题
 */
const CONFIG = {
  // 默认只展示Logo文字，如果设置了logo图片，会在文字左侧显示图标
  STARTER_LOGO: '', // 普通logo图片 示例：/images/starter/logo/logo.svg
  STARTER_LOGO_WHITE: '', // 透明底浅色logo 示例： /images/starter/logo/logo-white.svg

  // MENU ， 菜单部分不在此处配置，请在Notion数据库中添加MENU

  // 英雄区块导航
  STARTER_HERO_ENABLE: true, // 开启英雄区
  STARTER_HERO_TITLE_1: 'Sugar Daddy America', // 英雄区文字
  STARTER_HERO_TITLE_2: 'The best sugar daddy dating site for seeking secret arrangements in America. Join to meet local wealthy men and attractive women in your area! We have over 8 million menbers', // 英雄区文字
  // 英雄区两个按钮，如果TEXT留空则隐藏按钮
  STARTER_HERO_BUTTON_1_TEXT: 'SEE YOUR MATCHES', // 英雄区按钮
  STARTER_HERO_BUTTON_1_URL:
    '/signup', // 英雄区按钮
  STARTER_HERO_BUTTON_2_TEXT: 'LOG IN', // 英雄区按钮
  STARTER_HERO_BUTTON_2_URL: '/login', // 英雄区按钮
  STARTER_HERO_BUTTON_2_ICON: '', // 英雄区按钮2的前置图标，不需要则留空

  STARTER_HERO_PREVIEW_IMAGE: '', // 产品预览图 ，默认读取public目录下图片 images/starter/hero/hero-image.webp

  // 顶部右侧导航暗流
  STARTER_NAV_BUTTON_1_TEXT: 'Login',
  STARTER_NAV_BUTTON_1_URL: '/login',

  STARTER_NAV_BUTTON_2_TEXT: 'JOIN NOW',
  STARTER_NAV_BUTTON_2_URL: '/signup',

  // 特性区块
  STARTER_FEATURE_ENABLE: false, // 特性区块开关
  STARTER_FEATURE_TITLE: '特性', // 特性
  STARTER_FEATURE_TEXT_1: 'NotionNext的主要特性', // 特性
  STARTER_FEATURE_TEXT_2:
    'NotionNext的愿景是帮助您简单、无感知地稳定地搭建自己的网站，放大品牌的价值。 ', // 特性

  STARTER_FEATURE_1_TITLE_1: '免费且开源', // 特性1
  STARTER_FEATURE_1_TEXT_1: '项目源码在Github上完全开放共享，遵循MIT协议', // 特性1
  STARTER_FEATURE_1_BUTTON_TEXT: '了解更多', // 特性1
  STARTER_FEATURE_1_BUTTON_URL: 'https://github.com/tangly1024/NotionNext', // 特性1

  STARTER_FEATURE_2_TITLE_1: '多种主题定制', // 特性2
  STARTER_FEATURE_2_TEXT_1: '数十种主题,适用于不同场景，总有一款适合你', // 特性2
  STARTER_FEATURE_2_BUTTON_TEXT: '了解更多', // 特性2
  STARTER_FEATURE_2_BUTTON_URL:
    'https://docs.tangly1024.com/article/notion-next-themes', // 特性2

  STARTER_FEATURE_3_TITLE_1: '优秀的性能', // 特性3
  STARTER_FEATURE_3_TEXT_1: '基于NextJS开发，更快的响应速度，更好的SEO', // 特性3
  STARTER_FEATURE_3_BUTTON_TEXT: '了解更多', // 特性3
  STARTER_FEATURE_3_BUTTON_URL: 'https://docs.tangly1024.com/article/next-js', // 特性3

  STARTER_FEATURE_4_TITLE_1: '便捷的写作体验', // 特性4
  STARTER_FEATURE_4_TEXT_1: '只需在Notion笔记中编修，自动同步到网站', // 特性4
  STARTER_FEATURE_4_BUTTON_TEXT: '了解更多', // 特性4
  STARTER_FEATURE_4_BUTTON_URL: 'https://docs.tangly1024.com/about', // 特性4

  // 首页ABOUT区块
  STARTER_ABOUT_ENABLE: true, // ABOUT区块开关
  STARTER_ABOUT_TITLE: 'Seeking Sugar Daddy & Sugar Baby for Arrangement in America',
  STARTER_ABOUT_TEXT:
    'Welcome to SugarDaddyAmerica.com, the best sugar daddy dating site in America. Here, sugar babies can easily find successful and attractive sugar daddies to enjoy luxurious fun and experience the ideal lifestyle together. This website provides you with a safe environment to build deep connections with like-minded people and embark on sweet adventures.<br/> <br/>At the same time, sugar daddies can reach sugar babies who are eager for quality relationships and looking for a partner to share their lives. In this social network full of opportunities, you will find outstanding women who share your values, making every date full of surprises and joy. SugarDaddyAmerica.com looks forward to starting your own wonderful journey with you!',
  STARTER_ABOUT_BUTTON_TEXT: 'Join Now',
  STARTER_ABOUT_BUTTON_URL: '/signup',
  STARTER_ABOUT_IMAGE_1: '/images/starter/about/about-image-01.jpg', // /images/starter/about/about-image-01.jpg
  STARTER_ABOUT_IMAGE_2: '/images/starter/about/about-image-02.jpg', // /images/starter/about/about-image-02.jpg
  STARTER_ABOUT_TIPS_1: '8.3 MILLION+',
  STARTER_ABOUT_TIPS_2: 'VERIFIED MEMBERS',
  STARTER_ABOUT_TIPS_3: 'QUALITY CONNECTIONS',

  // 首页价格区块
  STARTER_PRICING_ENABLE: false, // 价格区块开关
  STARTER_PRICING_TITLE: '价格表',
  STARTER_PRICING_TEXT_1: '很棒的定价计划',
  STARTER_PRICING_TEXT_2:
    '我们制定了灵活的付费模式，您可以按需选择。（NotionNext免费开源，这里仅演示产品订阅付费功能，请勿下单购买！）',

  STARTER_PRICING_1_TITLE: '入门版',
  STARTER_PRICING_1_PRICE: '19.9',
  STARTER_PRICING_1_PRICE_CURRENCY: '$',
  STARTER_PRICING_1_PRICE_PERIOD: '每月',
  STARTER_PRICING_1_HEADER: '功能点',
  STARTER_PRICING_1_FEATURES: '所有的主题,免费更新,帮助手册', // 英文逗号隔开
  STARTER_PRICING_1_BUTTON_TEXT: '立即购买',
  STARTER_PRICING_1_BUTTON_URL:
    'https://tangly1024.lemonsqueezy.com/checkout/buy/c1a38a65-362e-44c5-8065-733fee39eb54',

  STARTER_PRICING_2_TAG: '推荐',
  STARTER_PRICING_2_TITLE: '基础版',
  STARTER_PRICING_2_PRICE: '39.9',
  STARTER_PRICING_2_PRICE_CURRENCY: '$',
  STARTER_PRICING_2_PRICE_PERIOD: '每月',
  STARTER_PRICING_2_HEADER: '功能点',
  STARTER_PRICING_2_FEATURES: '包含入门版,项目源码,内部社群,技术咨询,SEO优化', // 英文逗号隔开
  STARTER_PRICING_2_BUTTON_TEXT: '立即购买',
  STARTER_PRICING_2_BUTTON_URL:
    'https://tangly1024.lemonsqueezy.com/checkout/buy/590ad70a-c3b7-4caf-94ec-9ca27bde06d4',

  STARTER_PRICING_3_TITLE: '高级版',
  STARTER_PRICING_3_PRICE: '59.9',
  STARTER_PRICING_3_PRICE_CURRENCY: '$',
  STARTER_PRICING_3_PRICE_PERIOD: '每月',
  STARTER_PRICING_3_HEADER: '功能点',
  STARTER_PRICING_3_FEATURES: '包含基础版,功能定制开发', // 英文逗号隔开
  STARTER_PRICING_3_BUTTON_TEXT: '立即购买',
  STARTER_PRICING_3_BUTTON_URL:
    'https://tangly1024.lemonsqueezy.com/checkout/buy/df924d66-09dc-42a4-a632-a6b0c5cc4f28',

  // 首页用户测评区块
  STARTER_TESTIMONIALS_ENABLE: true, // 测评区块开关
  STARTER_TESTIMONIALS_TITLE: 'TESTIMONIALS',
  STARTER_TESTIMONIALS_TEXT_1: 'SUCCESS STORIES',
  STARTER_TESTIMONIALS_TEXT_2:
    'Over the past decade, tens of thousands of sugar daddies and sugar babies have met at Sugar Daddy America, and written many sweet stories',
  STARTER_TESTIMONIALS_STAR_ICON: '/images/starter/testimonials/icon-star.svg', // 评分图标

  // 这里不支持CONFIG和环境变量，需要一一修改此处代码。
  STARTER_TESTIMONIALS_ITEMS: [
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        'Found someone on here that will spoil me as the princess I am. They\'re amazing and I\'m glad I found them. They make me feel beautiful and amazing and I\'m so happy I found them. I wasn\'t looking for anything but now I have found something so magical.',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F22de3fcb-d90d-4271-bc01-f815f476122b%2F4FE0A0C0-E487-4C74-BF8E-6F01A27461B8-14186-000008094BC289A6.jpg?table=collection&id=a320a2cc-6ebe-4a8d-95cc-ea94e63bced9&width=200',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'Samantha',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: '22-year-old Sugar Baby',
      STARTER_TESTIMONIALS_ITEM_URL: '/signup'
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        'Thank you so much for providing the medium necessary for me to find someone I want to spend forever with! I knew this would happen and it finally did. Thank you, I\'ll appreciate you forever and refer others but I have to focus my energy on one woman now :) Take care!',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F0d33d169-f932-41ff-ac6b-88a923c08e02%2F%25E5%25A4%25B4%25E5%2583%258F.jfif?table=collection&id=7787658d-d5c0-4f34-8e32-60c523dfaba3&width=400',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'James',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: '40-year-old Sugar Daddy',
      STARTER_TESTIMONIALS_ITEM_URL: '/signup'
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        'I found my sugar daddy and no longer need this site. After so many pointless conversations, I finally struck gold. I am so thankful for this site for helping me find him ♥️♥️♥️ forever his and forever grateful.',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F6c096b44-beb9-48ee-8f92-1efdde47f3a3%2F338962f1-d352-49c7-9a1b-746e35a7005c%2Fhf.png?table=block&id=ce5a48a9-d77a-4843-a3d9-a78cd4f794ce&spaceId=6c096b44-beb9-48ee-8f92-1efdde47f3a3&width=100&userId=27074aef-7216-41ed-baef-d9b53addd870&cache=v2',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'Jessica',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: '28-year-old Sugar Baby',
      STARTER_TESTIMONIALS_ITEM_URL: '/signup'
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        'We met up and hit it off, and now I don\'t need to keep my account active anymore. We\'re happy together and traveling the world. Getting married soon in a few months.',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd52f6766-3e32-4c3d-8529-46e1f214360f%2Ffavicon.svg?table=collection&id=7d76aad5-a2c4-4d9a-887c-c7913fae4eed&width=400',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'Michael & Emma',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'Couple, 32 and 29 years old',
      STARTER_TESTIMONIALS_ITEM_URL: '/signup'
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        'He wants to take care of me, and I want to do the same for him. We are going steady, and it doesn\'t take much except trust and honesty about our true intentions.',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fafb21381-f51b-4fd0-9998-800dbeb64dbe%2Favatar.png?table=block&id=195935d2-0d8d-49fc-bd81-1db42ee50840&spaceId=6c096b44-beb9-48ee-8f92-1efdde47f3a3&width=100&userId=27074aef-7216-41ed-baef-d9b53addd870&cache=v2',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'Grace',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: '27-year-old Sugar Baby',
      STARTER_TESTIMONIALS_ITEM_URL: '/signup'
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        'Very handsome and loving man I will be enjoying long talks with. I\'m excited for this new opportunity that came my way. Love this app so much. Look at me now, I found my match on here!',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fe4f391d7-7d65-4c05-a82c-c6e2c40f06e4%2Fa2a7641a26b367608c6ef28ce9b7e983_(2).png?table=block&id=a386eb0e-4c07-4b18-9ece-bba4e79ce21c&spaceId=6c096b44-beb9-48ee-8f92-1efdde47f3a3&width=100&userId=27074aef-7216-41ed-baef-d9b53addd870&cache=v2',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'Sophia',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: '25-year-old Sugar Baby',
      STARTER_TESTIMONIALS_ITEM_URL: '/signup'
    }
  ],

  //   FAQ 常见问题模块
  STARTER_FAQ_ENABLE: true, // 常见问题模块开关
  STARTER_FAQ_TITLE: 'BENEFITS',
  STARTER_FAQ_TEXT_1: 'UNIQUE ADVANTAGES',
  STARTER_FAQ_TEXT_2: 'Make quality connections through unique mechanisms and features',

  STARTER_FAQ_1_QUESTION: 'Dating Attractive Women',
  STARTER_FAQ_1_ANSWER:
    'As a successful man, you\'ll find women who are not just attractive but exceptional in every way—captivating, intelligent, and fiercely ambitious. With a stunning 4 to 1 female-to-male ratio, your chances of meeting the ideal partner are practically guaranteed.',

  STARTER_FAQ_2_QUESTION: 'All Members Verified',
  STARTER_FAQ_2_ANSWER:
    'You can trust that all members are verified, ensuring a safe and genuine experience. Each profile is authenticated, allowing you to connect with real individuals who are serious about building meaningful relationships. With this level of assurance, you can focus on finding your perfect match with confidence.',

  STARTER_FAQ_3_QUESTION: 'Dating Successful Men',
  STARTER_FAQ_3_ANSWER:
    'As an attractive woman, you\'ll encounter successful men who are not only dynamic and charismatic but also value meaningful connections. With their ambition and engaging personalities, your chances of finding an extraordinary partner are significantly enhanced.',

  STARTER_FAQ_4_QUESTION: '24 / 7 LIVE SUPPORT TEAM',
  STARTER_FAQ_4_ANSWER:
    'Our 24/7 live support team is always here for you, ensuring that you have assistance whenever you need it. Whether you have questions or need guidance, our dedicated professionals are ready to help you navigate your journey, making your experience seamless and enjoyable.',

  // 团队成员区块
  STARTER_TEAM_ENABLE: true, // 团队成员区块开关
  STARTER_TEAM_TITLE: 'DATING',
  STARTER_TEAM_TEXT_1: 'ONLINE MEMBER',
  STARTER_TEAM_TEXT_2:
    'Millions of successful men and attractive women are waiting for you to chat',

  // 这里不支持CONFIG和环境变量，需要一一修改此处代码。
  STARTER_TEAM_ITEMS: [
    {
      STARTER_TEAM_ITEM_AVATAR:
        '/images/starter/team/team-01.png',
      STARTER_TEAM_ITEM_NAME: 'L********',
      STARTER_TEAM_ITEM_age: 'Age: 25',
      STARTER_TEAM_ITEM_gender: 'Sugar Baby',
      STARTER_TEAM_ITEM_location: 'New York City, New York',
      STARTER_TEAM_ITEM_state: 'Online Recently',
      STARTER_TEAM_ITEM_DESCRIPTION1: 'Sweet and sassyyy',
      STARTER_TEAM_ITEM_DESCRIPTION2: 'A go with the flow type of person - Be bold! Tell me about yourself...'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/starter/team/team-01.png',
      STARTER_TEAM_ITEM_NAME: 'Melissa Tatcher',
      STARTER_TEAM_ITEM_age: 'Age: 19',
      STARTER_TEAM_ITEM_gender: 'Sugar Daddy',
      STARTER_TEAM_ITEM_location: 'Los Angeles, California',
      STARTER_TEAM_ITEM_state: 'Online Recently',
      STARTER_TEAM_ITEM_DESCRIPTION1: 'looking for a loving partner',
      STARTER_TEAM_ITEM_DESCRIPTION2: 'danceing card playing .driving .gardeinng .going out.lots of making...'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/starter/team/team-02.png',
      STARTER_TEAM_ITEM_NAME: 'Stuard Ferrel',
      STARTER_TEAM_ITEM_age: 'Age: 19',
      STARTER_TEAM_ITEM_gender: 'Sugar Baby',
      STARTER_TEAM_ITEM_location: 'Chicago, Illinois',
      STARTER_TEAM_ITEM_state: 'Online Recently',
      STARTER_TEAM_ITEM_DESCRIPTION1: 'Physical Touch is a powerful thing',
      STARTER_TEAM_ITEM_DESCRIPTION2: 'typically can be found in the woods having a time, dirtbiking, bon-...'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/starter/team/team-03.png',
      STARTER_TEAM_ITEM_NAME: 'Eva Hudson',
      STARTER_TEAM_ITEM_age: 'Age: 19',
      STARTER_TEAM_ITEM_gender: 'Sugar Daddy',
      STARTER_TEAM_ITEM_location: 'Miami, Florida',
      STARTER_TEAM_ITEM_state: 'Online Recently',
      STARTER_TEAM_ITEM_DESCRIPTION1: 'very open minded, fetish friendly',
      STARTER_TEAM_ITEM_DESCRIPTION2: 'I love the outdoors, food, music, and photography. 2 costly fetishes...'
    }
  ],

  // 博客文章区块
  STARTER_BLOG_ENABLE: true, // 首页博文区块开关
  STARTER_BLOG_TITLE: '我们的博客',
  STARTER_BLOG_COUNT: 3, // 首页博文区块默认展示前3篇文章
  STARTER_BLOG_TEXT_1: '最近的新闻',
  STARTER_BLOG_TEXT_2:
    '这里会发布一些关于NotionNext的最新动态，包括新的动向、新的未来计划，以及新功能的特性',

  // 联系模块
  STARTER_CONTACT_ENABLE: false, // 联系模块开关
  STARTER_CONTACT_TITLE: '联系我们',
  STARTER_CONTACT_TEXT: '告诉我们您遇到的问题',
  STARTER_CONTACT_LOCATION_TITLE: '我们的位置',
  STARTER_CONTACT_LOCATION_TEXT: 'Toronto, Canada',
  STARTER_CONTACT_EMAIL_TITLE: '我们如何帮助您？',
  STARTER_CONTACT_EMAIL_TEXT: 'sugardaddymeet2007@gmail.com',

  // 嵌入外部表单
  STARTER_CONTACT_MSG_EXTERNAL_URL: '', // 基于NoteForm创建，将留言数据存在Notion中 https://noteforms.com/forms/yfctc7
  //   自定义留言表单，以下几个配置暂时废弃
  //   STARTER_CONTACT_MSG_TITLE: '向我们留言',
  //   STARTER_CONTACT_MSG_NAME: '姓名',
  //   STARTER_CONTACT_MSG_EMAIL: '邮箱地址',
  //   STARTER_CONTACT_MSG_PHONE: '联系电话',
  //   STARTER_CONTACT_MSG_TEXT: '消息内容',
  //   STARTER_CONTACT_MSG_SEND: '发送消息',
  //   STARTER_CONTACT_MSG_THANKS: '感谢您的留言',

  // 合作伙伴的图标
  STARTER_BRANDS_ENABLE: false, // 合作伙伴开关
  STARTER_BRANDS: [
    {
      IMAGE: '/images/starter/brands/graygrids.svg',
      IMAGE_WHITE: '/images/starter/brands/graygrids-white.svg',
      URL: 'https://graygrids.com/',
      TITLE: 'graygrids'
    },
    {
      IMAGE: '/images/starter/brands/lineicons.svg',
      IMAGE_WHITE: '/images/starter/brands/lineicons-white.svg',
      URL: 'https://lineicons.com/',
      TITLE: 'lineicons'
    },
    {
      IMAGE: '/images/starter/brands/uideck.svg',
      IMAGE_WHITE: '/images/starter/brands/uideck-white.svg',
      URL: 'https://uideck.com/',
      TITLE: 'uideck'
    },
    {
      IMAGE: '/images/starter/brands/ayroui.svg',
      IMAGE_WHITE: '/images/starter/brands/ayroui-white.svg',
      URL: 'https://ayroui.com/',
      TITLE: 'ayroui'
    },
    {
      IMAGE: '/images/starter/brands/tailgrids.svg',
      IMAGE_WHITE: '/images/starter/brands/tailgrids-white.svg',
      URL: '"https://tailgrids.com/',
      TITLE: 'tailgrids'
    }
  ],

  STARTER_FOOTER_SLOGAN: 'Disclaimer: You must be over 19 to join. SugarDaddyMeetSG is not an escort service. SugarDaddyMeetSG does not support escorts or prostitution. Profiles that may violate these terms and services will be banned.',

  // 页脚三列菜单组
  STARTER_FOOTER_LINK_GROUP: [
    {
      TITLE: 'OUR COMPANY',
      LINK_GROUP: [
        { TITLE: 'About Us', URL: '/company/about-us' },
        { TITLE: 'Contact Us', URL: '/support/feedbacks' },
        { TITLE: 'Help and FAQ', URL: '/support/faq' }
      ]
    },
    {
      TITLE: 'SAFETY',
      LINK_GROUP: [
        { TITLE: 'Notice of Collection', URL: '/safety/notice-of-collection'},
        { TITLE: 'Community Guidelines', URL: '/safety/community-guidelines' },
        { TITLE: 'Stop Sex & Human Trafficking', URL: '/safety/fighting-human-trafficking' },
        { TITLE: 'Right to Opt-Out', URL: '/safety/no-sell-or-share'}
      ]
    },
    
    {
      TITLE: 'LOCATIONS',
      LINK_GROUP: [
        { TITLE: 'Sugar Daddy Canada', URL: 'https://www.sugar-daddy-canada.com' }
        //{ TITLE: '快捷键提升效率', URL: 'https://docs.tangly1024.com/article/notion-short-key' },
        //{ TITLE: '中国大陆使用Notion', URL: 'https://docs.tangly1024.com/article/notion-faster' }
      ]
    }
  ],
    
  // STARTER_FOOTER_BLOG_LATEST_TITLE: '最新文章',

  STARTER_FOOTER_PRIVACY_POLICY_TEXT: 'Become an Affiliate',
  STARTER_FOOTER_PRIVACY_POLICY_URL: '/affiliate',

  STARTER_FOOTER_PRIVACY_LEGAL_NOTICE_TEXT: 'Privacy Policy',
  STARTER_FOOTER_PRIVACY_LEGAL_NOTICE_URL: '/safety/privacy-policy',
    
  STARTER_FOOTER_PRIVACY_TERMS_OF_SERVICE_TEXT: 'Service Agreement',
  STARTER_FOOTER_PRIVACY_TERMS_OF_SERVICE_URL: '/safety/service-agreement',

  // 404页面的提示语
  STARTER_404_TITLE: '404',
  STARTER_404_TEXT: 'Page Not Found',
  STARTER_404_BACK: 'Back to Home',

  STARTER_POST_REDIRECT_ENABLE: false, // 默認開啟重定向
  STARTER_POST_REDIRECT_URL: 'https://blog.tangly1024.com', // 重定向域名
  STARTER_NEWSLETTER: process.env.NEXT_PUBLIC_THEME_STARTER_NEWSLETTER || false // 是否开启邮件订阅 请先配置mailchimp功能 https://docs.tangly1024.com/article/notion-next-mailchimp
}
export default CONFIG
