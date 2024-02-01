import React from 'react';
import { computed, makeObservable } from 'mobx'
import poster from './assets/poster.jpeg'
import { DataForm } from '../../../src/components/build/LeftSidebar/form.tsx'
import {AbstractTemplate} from "../AbstractTemplate.tsx";
import { TitleStyle1 } from '../Cmode/titles/style1'
import { TitleStyle2 } from '../Cmode/titles/style2'
import { TitleStyle3 } from '../Cmode/titles/style3'
import { TitleStyle4 } from '../Cmode/titles/style4'
import { TitleStyle5 } from '../Cmode/titles/style5'
import { TitleStyle6 } from '../Cmode/titles/style6'
import { TitleStyle7 } from '../Cmode/titles/style7'


const View = React.lazy(() => import('./view'))
const ConfigForm = React.lazy(() => import('./configForm'))

export const titles = [
    {
        name: 'style1',
        component: TitleStyle1,
    },
    {
        name: 'style2',
        component: TitleStyle2,
    },
    {
        name: 'style3',
        component: TitleStyle3,
    },
    {
        name: 'style4',
        component: TitleStyle4,
    },
    {
        name: 'style5',
        component: TitleStyle5,
    },
    {
        name: 'style6',
        component: TitleStyle6,
    },
    {
        name: 'style7',
        component: TitleStyle7,
    },
]

const DEFAULT_CONFIG = {
    modules: [
        {
            key: 'introduce' as const,
            name: '简介',
            visible: true,
        },
        {
            key: 'workingHistory' as const,
            name: '工作经历',
            visible: true,
        },
        {
            key: 'ownerProjects' as const,
            name: '个人项目',
            visible: true,
        },
        {
            key: 'aboutMe' as const,
            name: '关于我',
            visible: true,
        },
    ],
    githubVisible: true,
    primaryColor: '#00D3C7',
    titleStyle: titles[3].name,
}

const DEFAULT_DATA= {
        "name":"前端架构师",
        "data":{
            "basicInfo":{
                "title":"前端架构师",
                "name":"张飞云",
                "avatar":"http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/vRCUXm-avatar.png?x-oss-process=image/crop,x_97,y_102,w_200,h_206",
                "location":"上海",
                "cellphone":"13611111234",
                "email":"hey@easycv.cn",
                "birth":"1990/03",
                "sex":"男",
            },
            "sections":[
                {
                    "id":"BMUstd",
                    "name":"个人简介",
                    "type":"custom",
                    "data":[
                        {
                            "title":"",
                            "description":"&lt;p&gt;十年前端开发经验，曾在Apple、Google 担任前端架构师 / 高级前端开发工程师，拥有丰富的Web开发经验，喜欢追寻新技术，同时致力于前端工程化，是《XXX最佳实战指南》该书作者。&lt;/p&gt;"
                        }
                    ],
                    "columns":"one",
                    "position":"main",
                    "onlyDesc":true,
                    "profile":true
                },
                {
                    "id":"Z_5S-c",
                    "name":"专业技能",
                    "type":"skills",
                    "data":[
                        {
                            "title":"掌握通用的构建工具",
                            "description":"&lt;ul&gt;&lt;li&gt;使用 Webpack 完成Web 应用打包以及对应的前端性能优化的经验。&lt;/li&gt;&lt;li&gt;掌握使用 Rollup 完成组件库打包以及发布的过程。&lt;/li&gt;&lt;/ul&gt;"
                        },
                        {
                            "title":"使用 Javascript（ES6）/ Typescript 进行前端开发，并且熟练掌握以下框架",
                            "description":"&lt;ul&gt;&lt;li&gt;使用 Vue3 以及周边工具：Vite、Vue-Router、Pinia 以及 Element-Plus 进行 Web 开发&lt;/li&gt;&lt;li&gt;使用 React 以及周边工具；Redux, React-Router, Mobx 进行 Web 开发&lt;/li&gt;&lt;/ul&gt;"
                        },
                        {
                            "title":"熟练使用 CSS3 以及周边工具 ",
                            "description":"&lt;ul&gt;&lt;li&gt;Tailwind.css 和 Bootstrap5 作为样式库&lt;/li&gt;&lt;li&gt;Sass 以及 PostCSS 作为预处理器&lt;/li&gt;&lt;/ul&gt;"
                        }
                    ],
                    "columns":"one",
                    "tagStyle":false
                },
                {
                    "id":"59dGrl",
                    "name":"工作经历",
                    "type":"empolyment",
                    "data":[
                        {
                            "title":"简单简历",
                            "subTitle":"前端架构师",
                            "city":"上海",
                            "description":"&lt;p&gt;负责开发公司&lt;strong&gt;通用脚手架&lt;/strong&gt;，提供项目的创建，持续迭代，云端构建，发布上线等功能&lt;/p&gt;&lt;ul&gt;&lt;li&gt;基于 lerna 作为包管理工具&lt;/li&gt;&lt;li&gt;服务器端基于 egg.js + mongoDB&lt;/li&gt;&lt;li&gt;集成 Gitee 以及 Github 的自动化流程&lt;/li&gt;&lt;li&gt;Github 地址：https://github.com/imooc-lego/imooc-cli&lt;/li&gt;&lt;/ul&gt;&lt;p&gt;&lt;br&gt;&lt;/p&gt;&lt;p&gt;负责团队&lt;strong&gt;前端公共基础的建设与规划&lt;/strong&gt;，简单简历使用低代码的方式供用户快速创建技术简历，并且快速分享以及下载。分为三个子项目: Editor，Template 以及 Store：&lt;/p&gt;&lt;ul&gt;&lt;li&gt;Editor 简历编辑器：基于 Web 的 SPA 项目，使用 Vue3 + Typescript 及一系列 Vue 相关生态环境工具搭建，可以实现一个低代码可视化生成简历的平台。&lt;/li&gt;&lt;li&gt;Template 简单简历模版：使用 Vue3 + Typescript + Tailwind.css 编写，使用 Rollup 打包，实现一个同时支持前后端渲染的简历模版组件库。&lt;/li&gt;&lt;li&gt;Store 全局数据：前端多个项目，后端以及模版库都需要特定的数据结构以及数据操作，故抽取一个公共的全局数据服务，使用 Typescript + Vuex 编写。&lt;/li&gt;&lt;/ul&gt;",
                            "startDate":"2022/06",
                            "endDate":"PRESENT"
                        },
                        {
                            "title":"简单简历",
                            "subTitle":"高级前端开发工程师",
                            "city":"上海",
                            "description":"&lt;p&gt;主导和开发项目&lt;strong&gt;基础组件库&lt;/strong&gt; - vikingship&lt;/p&gt;&lt;ul&gt;&lt;li&gt;基于 React 以及 Tailwind.css 实现的基础组件库&lt;/li&gt;&lt;li&gt;使用 React-testing-library 完成单元测试&lt;/li&gt;&lt;li&gt;基于 Github Actions 实现自动发布&lt;/li&gt;&lt;li&gt;npm地址：https://www.npmjs.com/package/vikingship&lt;/li&gt;&lt;li&gt;在线文档地址：https://vikingship.xyz/&lt;/li&gt;&lt;/ul&gt;&lt;p&gt;&lt;br&gt;&lt;/p&gt;&lt;p&gt;负责整个前端应用的&lt;strong&gt;性能优化&lt;/strong&gt;：&lt;/p&gt;&lt;ul&gt;&lt;li&gt;通过 webpack bundle analyzer 插件分析，将文件大小从 * K 优化至 * K。 详情请见：&lt;/li&gt;&lt;li&gt;通过浏览器缓存（Expires 和 Cache Control），服务器端压缩，（gzip 和 brotli），新版本 HTTP协议（HTTP/2），将 DOMContentLoaded 时间，从 * 秒 减少至 * 秒。 详情请见：&lt;/li&gt;&lt;li&gt;通过优化，为公司每年减少流量消耗多达 *%，节省资金 * 元。&lt;/li&gt;&lt;/ul&gt;",
                            "startDate":"2018/01",
                            "endDate":"2019/12"
                        },
                        {
                            "title":"2",
                            "subTitle":"3",
                            "startDate":"2023/06",
                            "endDate":"2024/06",
                            "city":"4",
                            "description":""
                        }
                    ],
                    "columns":"two"
                },
                {
                    "id":"P1P4IW",
                    "name":"个人项目",
                    "type":"custom",
                    "data":[
                        {
                            "title":"Vue3 EasyMDE",
                            "description":"&lt;p&gt;EasyMDE 在 vue3 中的实现，使用 Typescript 编写，Rollup 完成打包。&lt;/p&gt;&lt;ul&gt;&lt;li&gt;Github 地址：&lt;/li&gt;&lt;li&gt;Star 数：450&lt;/li&gt;&lt;/ul&gt;",
                            "startDate":"2023/07",
                            "endDate":"2024/05"
                        }
                    ],
                    "columns":"one",
                    "position":"main",
                    "tagStyle":true
                },
                {
                    "id":"ci71lX",
                    "name":"教育经历",
                    "type":"education",
                    "data":[
                        {
                            "title":"清华大学",
                            "subTitle":"硕士",
                            "city":"软件工程",
                            "description":"",
                            "startDate":"2010/09",
                            "endDate":"2012/07"
                        },
                        {
                            "title":"湖南大学",
                            "subTitle":"学士",
                            "city":"计算机科学与技术",
                            "description":"",
                            "startDate":"2006/09",
                            "endDate":"2010/07"
                        },
                        {
                            "title":"啊",
                            "subTitle":"333",
                            "startDate":"2023/07",
                            "endDate":"2024/06",
                            "city":"as",
                            "description":""
                        }
                    ],
                    "columns":"two",
                    "position":"main"
                },
                {
                    "id":"iNKJzA",
                    "name":"爱好",
                    "type":"custom",
                    "data":[
                        {
                            "title":"阅读"
                        },
                        {
                            "title":"攀岩"
                        },
                        {
                            "title":"吉他演奏"
                        }
                    ],
                    "columns":"two",
                    "position":"main",
                    "tagStyle":true
                }
            ],
            "links":[
                {
                    "name":"个人网站",
                    "src":"https://vikingz.me"
                },
                {
                    "name":"Github试试",
                    "src":"https://github.com"
                },
                {
                    "name":"LinkedIn的",
                    "src":""
                }
            ]
        },
        "config":{
            "lang":"ch",
            "templateName":"TemplateTimeline",
            "templateTheme":"violet",
            "isPublic":false,
            "customURL":"aAoOzO",
            "addToExamples":false,
            "printerMode":true,
            "templateId":"620cbaf84bb659f7ed1494a5"
        },
        "createdAt":"2023-10-19T05:29:56.923Z",
        "updatedAt":"2023-10-19T08:44:39.125Z",
        "__v":0,
        "coverImg":"https://imgs.easycv.cn/easycv/yWoXbq-screenshot.png"

}
export const DeveloperModel = {
    defaultData: DEFAULT_DATA,
    form: DataForm,
}

export type INormalSidevarData = typeof DEFAULT_DATA

export class ResumeModel_D extends  AbstractTemplate<INormalSidevarData, typeof DEFAULT_CONFIG> {


    key = 'developer-concise-D'
    name = '第二套简历模版'
    tags = ['大气', '产品经理']
    view = View
    configForm = ConfigForm
    dataForm = DeveloperModel.form
    poster = poster
    defaultData = DeveloperModel.defaultData
    defaultConfig = DEFAULT_CONFIG

    constructor() {
        super()
        makeObservable(this, {
            titleComponent: computed,
        })
    }

    get titleComponent() {
        return titles.find((it) => it.name === this.defaultConfig.titleStyle)!.component
    }


    moveModule = (index: number, targetIndex: number) => {
        if (targetIndex < 0) return
        let temp = this.config.modules[targetIndex]
        this.config.modules[targetIndex] = this.config.modules[index]
        this.config.modules[index] = temp
    }

}

