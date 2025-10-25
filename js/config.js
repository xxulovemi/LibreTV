// 全局常量配置
const PROXY_URL = '/proxy/';    // 适用于 Cloudflare, Netlify (带重写), Vercel (带重写)
// const HOPLAYER_URL = 'https://hoplayer.com/index.html';
const SEARCH_HISTORY_KEY = 'videoSearchHistory';
const MAX_HISTORY_ITEMS = 5;

// 密码保护配置
// 注意：PASSWORD 环境变量是必需的，所有部署都必须设置密码以确保安全
const PASSWORD_CONFIG = {
    localStorageKey: 'passwordVerified',  // 存储验证状态的键名
    verificationTTL: 90 * 24 * 60 * 60 * 1000  // 验证有效期（90天，约3个月）
};

// 网站信息配置
const SITE_CONFIG = {
    name: 'LibreTV',
    url: 'https://libretv.is-an.org',
    description: '免费在线视频搜索与观看平台',
    logo: 'image/logo.png',
    version: '1.0.3'
};

// API站点配置
const API_SITES = {
    dyttzy: {
        api: 'http://caiji.dyttzyapi.com/api.php/provide/vod',
        name: '🎬电影天堂',
        detail: 'http://caiji.dyttzyapi.com'
    },
    ruyi: {
        api: 'https://dl.hafrey.dpdns.org/?url=https://cj.rycjapi.com/api.php/provide/vod',
        name: '🎬如意资源',
        detail: 'https://www.ryzyw.com'
    },
    bfzy: {
        api: 'https://bfzyapi.com/api.php/provide/vod',
        name: '🎬暴风资源',
        detail: 'https://bfzy.tv'
    },
    tyyszy: {
        api: 'https://tyyszy.com/api.php/provide/vod',
        name: '🎬天涯影视',
        detail: 'https://tyyszy.com'
    },
    xiaomaomi: {
        api: 'https://zy.xmm.hk/api.php/provide/vod',
        name: '🎬小猫咪资源'
    },
    ffzy: {
        api: 'https://cj.ffzyapi.com/api.php/provide/vod',
        name: '🎬非凡影视',
        detail: 'https://cj.ffzyapi.com'
    },
    heimuer: {
        api: 'https://json.heimuer.xyz/api.php/provide/vod',
        name: '🎬黑木耳',
        detail: 'https://heimuer.tv'
    },
    zy360: {
        api: 'https://360zy.com/api.php/provide/vod',
        name: '🎬360资源',
        detail: 'https://360zy.com'
    },
    iqiyi: {
        api: 'https://iqiyizyapi.com/api.php/provide/vod',
        name: '🎬爱奇艺',
        detail: 'https://iqiyizyapi.com'
    },
    wolong: {
        api: 'https://wolongzyw.com/api.php/provide/vod',
        name: '🎬卧龙资源',
        detail: 'https://wolongzyw.com'
    },
    hwba: {
        api: 'https://cjhwba.com/api.php/provide/vod',
        name: '🎬华为吧资源'
    },
    jisu: {
        api: 'https://jszyapi.com/api.php/provide/vod',
        name: '🎬极速资源',
        detail: 'https://jszyapi.com'
    },
    dbzy: {
        api: 'https://caiji.dbzy5.com/api.php/provide/vod',
        name: '🎬豆瓣资源',
        detail: 'dbzy.tv'
    },
    mozhua: {
        api: 'https://dl.hafrey.dpdns.org/?url=https://mozhuazy.com/api.php/provide/vod',
        name: '🎬魔爪资源',
        detail: 'https://mozhuazy.com'
    },
    mdzy: {
        api: 'https://www.mdzyapi.com/api.php/provide/vod',
        name: '🎬魔都资源',
        detail: 'https://www.moduzy.net'
    },
    zuid: {
        api: 'https://api.zuidapi.com/api.php/provide/vod',
        name: '🎬最大资源',
        detail: 'zuida.xyz'
    },
    yinghua: {
        api: 'https://m3u8.apiyhzy.com/api.php/provide/vod',
        name: '🎬樱花资源'
    },
    baidu: {
        api: 'https://api.apibdzy.com/api.php/provide/vod',
        name: '🎬百度云资源'
    },
    wujin: {
        api: 'https://api.wujinapi.me/api.php/provide/vod',
        name: '🎬无尽资源',
        detail: 'https://wujinzy.com'
    },
    wwzy: {
        api: 'https://wwzy.tv/api.php/provide/vod',
        name: '🎬旺旺短剧',
        detail: 'https://wwzy.tv'
    },
    ikun: {
        api: 'https://ikunzyapi.com/api.php/provide/vod',
        name: '🎬iKun资源',
        detail: 'https://ikunzy.com'
    },
    lzi: {
        api: 'https://cj.lziapi.com/api.php/provide/vod',
        name: '🎬量子影视',
        detail: 'https://lzizy.net'
    },
    myzy: {
        api: 'https://api.maoyanapi.top/api.php/provide/vod',
        name: '🎬猫眼资源',
        detail: 'https://www.maoyanzy.com'
    },
    testSource: {
        api: 'https://www.example.com/api.php/provide/vod',
        name: '🎬空内容测试源',
        adult: true
    },
    "ckzy.me": {
        api: 'https://ckzy.me/api.php/provide/vod',
        name: '🎬CK资源',
        detail: 'https://ckzy.me'
    },
    maotaizy: {
        api: 'https://caiji.maotaizy.cc/api.php/provide/vod',
        name: '🎬茅台资源',
        detail: 'https://mtzy.me'
    },
    "1080y": {
        api: 'https://api.yzzy-api.com/inc/apijson.php',
        name: '🎬优质资源',
        detail: 'https://1080zyk4.com'
    },
    lzcaiji: {
        api: 'https://cj.lzcaiji.com/api.php/provide/vod',
        name: '🎬量子资源',
        detail: 'https://cj.lzcaiji.com'
    },
    collectwolongzy: {
        api: 'https://collect.wolongzyw.com/api.php/provide/vod',
        name: '🎬卧龙资源1',
        detail: 'https://collect.wolongzyw.com'
    },
    ffzy1: {
        api: 'https://api.ffzyapi.com/api.php/provide/vod',
        name: '🎬非凡资源',
        detail: 'https://cj.ffzyapi.com'
    },
    zuidazy: {
        api: 'https://zuidazy.me/api.php/provide/vod',
        name: '🎬最大点播',
        detail: 'https://zuidazy.co'
    },
    wujincom: {
        api: 'https://api.wujinapi.com/api.php/provide/vod',
        name: '🎬无尽资源1',
        detail: 'https://wujinzy.com'
    },
    xinlangapi: {
        api: 'https://api.xinlangapi.com/xinlangapi.php/provide/vod',
        name: '🎬新浪资源',
        detail: 'https://xinlangapi.com'
    },
    apiwwzy: {
        api: 'https://api.wwzy.tv/api.php/provide/vod',
        name: '🎬旺旺资源',
        detail: 'https://api.wwzy.tv'
    },
    hhzyapi: {
        api: 'https://hhzyapi.com/api.php/provide/vod',
        name: '🎬豪华资源',
        detail: 'https://www.haohuazy.com'
    },
    subocaiji: {
        api: 'https://subocaiji.com/api.php/provide/vod',
        name: '🎬速播资源',
        detail: 'www.subozy.com'
    },
    jinyingzy: {
        api: 'https://jinyingzy.com/api.php/provide/vod',
        name: '🎬金鹰点播',
        detail: 'https://jinyingzy.com'
    },
    p2100: {
        api: 'https://p2100.net/api.php/provide/vod',
        name: '🎬飘零资源',
        detail: 'https://p2100.net'
    },
    uku: {
        api: 'https://dl.hafrey.dpdns.org/?url=https://api.ukuapi.com/api.php/provide/vod',
        name: '🎬U酷资源',
        detail: 'https://api.ukuapi.com'
    },
    ukuapi88: {
        api: 'https://dl.hafrey.dpdns.org/?url=https://api.ukuapi88.com/api.php/provide/vod',
        name: '🎬U酷88',
        detail: 'https://api.ukuapi88.com'
    },
    guangsuapi: {
        api: 'https://api.guangsuapi.com/api.php/provide/vod',
        name: '🎬光速资源',
        detail: 'https://api.guangsuapi.com'
    },
    hongniuzy: {
        api: 'https://www.hongniuzy2.com/api.php/provide/vod',
        name: '🎬红牛资源',
        detail: 'https://www.hongniuzy.com'
    },
    modu: {
        api: 'https://caiji.moduapi.cc/api.php/provide/vod',
        name: '🎬魔都动漫',
        detail: 'https://caiji.moduapi.cc'
    },
    '/91md.me': {
        api: 'https://91md.me/api.php/provide/vod',
        name: '🔞91麻豆',
        detail: 'https://91md.me',
        adult: true
    },
    lbapiby: {
        api: 'http://lbapiby.com/api.php/provide/vod',
        name: '🔞AIvin',
        detail: 'http://lbapiby.com',
        adult: true
    },
    bwzy2: {
        api: 'https://api.bwzyz.com/api.php/provide/vod',
        name: '🔞百万资源',
        detail: 'https://api.bwzym3u8.com',
        adult: true
    },
    souavzy: {
        api: 'https://api.souavzy.vip/api.php/provide/vod',
        name: '🔞souavZY',
        detail: 'https://api.souavzy.vip',
        adult: true
    },
    '155zy': {
        api: 'https://155api.com/api.php/provide/vod',
        name: '🔞155资源',
        detail: 'https://155zy2.com',
        adult: true
    },
    apiyutu: {
        api: 'https://apiyutu.com/api.php/provide/vod',
        name: '🔞玉兔资源',
        detail: 'https://apiyutu.com',
        adult: true
    },
    afhapi9: {
        api: 'http://fhapi9.com/api.php/provide/vod',
        name: '🔞番号资源',
        detail: 'http://fhapi9.com',
        adult: true
    },
    jingpinx: {
        api: 'https://www.jingpinx.com/api.php/provide/vod',
        name: '🔞精品资源',
        detail: 'https://www.jingpinx.com',
        adult: true
    },
    apilsbzy1: {
        api: 'https://apilsbzy1.com/api.php/provide/vod',
        name: '🔞老色逼',
        detail: 'https://apilsbzy1.com',
        adult: true
    },
    thzy: {
        api: 'https://thzy1.me/api.php/provide/vod',
        name: '🔞桃花资源',
        detail: 'https://thzy8.me',
        adult: true
    },
    yyzy: {
        api: 'https://www.yyzywcj.com/api.php/provide/vod',
        name: '🔞优优资源',
        detail: 'https://www.yyzywcj.com',
        adult: true
    },
    xjzy: {
        api: 'https://api.xiaojizy.live/provide/vod',
        name: '🔞小鸡资源',
        detail: 'https://xiaojizy.live',
        adult: true
    },
    hsckzy: {
        api: 'https://hsckzy.xyz/api.php/provide/vod',
        name: '🔞黄色仓库',
        detail: 'hsckzy.xyz',
        adult: true
    },
    dnzzy: {
        api: 'https://apidanaizi.com/api.php/provide/vod',
        name: '🔞大奶子',
        detail: 'https://apidanaizi.com',
        adult: true
    },
    jkunaklmzy: {
        api: 'https://jkunzyapi.com/api.php/provide/vod',
        name: '🔞jkun资源',
        detail: 'https://jkunzyapi.com',
        adult: true
    },
    xbzy: {
        api: 'https://xingba111.com/api.php/provide/vod',
        name: '🔞杏吧资源',
        detail: 'https://xingba111.com',
        adult: true
    },
    lbapi9: {
        api: 'https://lbapi9.com/api.php/provide/vod',
        name: '🔞乐播资源',
        detail: 'https://lbapi9.com',
        adult: true
    },
    Naixxzy: {
        api: 'https://Naixxzy.com/api.php/provide/vod',
        name: '🔞奶香资源',
        detail: 'https://Naixxzy.com',
        adult: true
    },
    slapibf: {
        api: 'https://beiyong.slapibf.com/api.php/provide/vod',
        name: '🔞森林资源',
        detail: 'https://slapibf.com',
        adult: true
    },
    'apilj.com': {
        api: 'https://apilj.com/api.php/provide/vod',
        name: '🔞辣椒资源',
        detail: 'https://apilj.com',
        adult: true
    },
    xzybb21: {
        api: 'https://xzybb2.com/api.php/provide/vod',
        name: '🔞幸资源',
        detail: 'https://xzytv.com',
        adult: true
    },
    zuiseapi: {
        api: 'https://api.zuiseapi.com/api.php/provide/vod',
        name: '🔞最色资源',
        detail: 'https://zuisezy.com',
        adult: true
    },
    douapi: {
        api: 'https://api.douapi.cc/api.php/provide/vod',
        name: '🔞豆豆资源',
        detail: 'https://doudouzy.com',
        adult: true
    },
    xzybb2: {
        api: 'https://api.ddapi.cc/api.php/provide/vod',
        name: '🔞滴滴资源',
        detail: 'https://didizy.com',
        adult: true
    },
    testSource: {
        api: 'https://www.example.com/api.php/provide/vod',
        name: '空内容测试源',
        adult: true
    },
};

// 定义合并方法
function extendAPISites(newSites) {
    Object.assign(API_SITES, newSites);
}

// 暴露到全局
window.API_SITES = API_SITES;
window.extendAPISites = extendAPISites;


// 添加聚合搜索的配置选项
const AGGREGATED_SEARCH_CONFIG = {
    enabled: true,             // 是否启用聚合搜索
    timeout: 8000,            // 单个源超时时间（毫秒）
    maxResults: 10000,          // 最大结果数量
    parallelRequests: true,   // 是否并行请求所有源
    showSourceBadges: true    // 是否显示来源徽章
};

// 抽象API请求配置
const API_CONFIG = {
    search: {
        // 只拼接参数部分，不再包含 /api.php/provide/vod/
        path: '?ac=videolist&wd=',
        pagePath: '?ac=videolist&wd={query}&pg={page}',
        maxPages: 50, // 最大获取页数
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'Accept': 'application/json'
        }
    },
    detail: {
        // 只拼接参数部分
        path: '?ac=videolist&ids=',
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'Accept': 'application/json'
        }
    }
};

// 优化后的正则表达式模式
const M3U8_PATTERN = /\$https?:\/\/[^"'\s]+?\.m3u8/g;

// 添加自定义播放器URL
const CUSTOM_PLAYER_URL = 'player.html'; // 使用相对路径引用本地player.html

// 增加视频播放相关配置
const PLAYER_CONFIG = {
    autoplay: true,
    allowFullscreen: true,
    width: '100%',
    height: '600',
    timeout: 15000,  // 播放器加载超时时间
    filterAds: true,  // 是否启用广告过滤
    autoPlayNext: true,  // 默认启用自动连播功能
    adFilteringEnabled: true, // 默认开启分片广告过滤
    adFilteringStorage: 'adFilteringEnabled' // 存储广告过滤设置的键名
};

// 增加错误信息本地化
const ERROR_MESSAGES = {
    NETWORK_ERROR: '网络连接错误，请检查网络设置',
    TIMEOUT_ERROR: '请求超时，服务器响应时间过长',
    API_ERROR: 'API接口返回错误，请尝试更换数据源',
    PLAYER_ERROR: '播放器加载失败，请尝试其他视频源',
    UNKNOWN_ERROR: '发生未知错误，请刷新页面重试'
};

// 添加进一步安全设置
const SECURITY_CONFIG = {
    enableXSSProtection: true,  // 是否启用XSS保护
    sanitizeUrls: true,         // 是否清理URL
    maxQueryLength: 100,        // 最大搜索长度
    // allowedApiDomains 不再需要，因为所有请求都通过内部代理
};

// 添加多个自定义API源的配置
const CUSTOM_API_CONFIG = {
    separator: ',',           // 分隔符
    maxSources: 5,            // 最大允许的自定义源数量
    testTimeout: 5000,        // 测试超时时间(毫秒)
    namePrefix: 'Custom-',    // 自定义源名称前缀
    validateUrl: true,        // 验证URL格式
    cacheResults: true,       // 缓存测试结果
    cacheExpiry: 5184000000,  // 缓存过期时间(2个月)
    adultPropName: 'isAdult' // 用于标记成人内容的属性名
};

// 隐藏内置黄色采集站API的变量
const HIDE_BUILTIN_ADULT_APIS = false;
