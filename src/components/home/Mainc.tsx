const Mainc = () => {
    return (
        <div>
            <div>

                <div className="bg-white dark:bg-gray-800 ">
                    <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
                        <div className="text-center">
                            <h2 className="font-title relative z-[2] mx-auto text-[clamp(2rem,6vw,4.5rem)] font-black leading-none">
                                <span className="motion-reduce:!opacity-100">
                                  精英都在用的专业简历
                                </span>
                            </h2>
                            <p className="font-title relative z-[2] py-4 font-light text-base-content/60 md:text-3xl">
                                1 分钟生成精美的个人简历
                            </p>
                        </div>

                        <p className="text-xl mt-4 max-w-md mx-auto text-gray-400">
                            专业美观不同风格的多种模版，特别为计算机领域的简历设计，让你轻松打动 HR 和面试官。
                        </p>
                        <div className="lg:mt-0 lg:flex-shrink-0">
                            <div className="flex justify-center w-full max-w-2xl gap-2 mx-auto mt-6">
                                <div className="mt-3 rounded-lg sm:mt-0">
                                    <button className="px-5 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 lg:px-10 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">开始创建</button>
                                </div>
                                <div className="mt-3 rounded-lg sm:mt-0 sm:ml-3">
                                    <button className="items-center block px-5 lg:px-10 py-3.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">推荐奖励计划</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>






                <div className=" mx-auto px-5 py-12 text-center lg:px-16">
                    <h2 className="font-title relative z-[2] mx-auto text-[clamp(2.5rem,6vw,4.5rem)] font-black leading-none">
                        <span className="font-light motion-reduce:!opacity-100" >
                          来自优秀服务的信任
                        </span>
                        {/*<span className="motion-reduce:!opacity-100" >*/}
                        {/*  尝试咨询*/}
                        {/*</span>*/}
                    </h2><br/><br/>
                    <div className="mx-auto text-center">
                        <div className="mx-auto grid h-8 grid-cols-5 gap-4 lg:grid-cols-5">
                            <div>
                                <img className="mx-auto h-5  lg:h-8" src="data:image/png;base64,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"/>
                            </div>
                            <div>
                                <img className="mx-auto h-5 lg:h-8" src="https://www.ttlili.com/_nuxt/xhs_logo.48b893b2.png"/>
                            </div>
                            <div>
                                <img className="mx-auto h-5 lg:h-8" src="https://www.ttlili.com/_nuxt/tencent_logo.8e311c68.png"/>
                            </div>
                            <div>
                                <img className="mx-auto h-5 lg:h-8" src="https://www.ttlili.com/_nuxt/bilibili_logo.4223f1e3.png"/>
                            </div>
                            <div>
                                <img className="mx-auto h-5 lg:h-8" src="https://www.ttlili.com/_nuxt/alibaba_logo.8f04cb36.png"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <section>


                <div className="relative px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
                    <div className="relative mx-auto max-w-7xl">
                        <div className="grid max-w-lg gap-5 mx-auto lg:grid-cols-3 lg:max-w-none">
                            <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                                <div className="flex-shrink-0">
                                    <img className="object-cover w-full h-148" src="https://imgs.easycv.cn/vue-marker/xffHQ2-fe.png" alt=""/>
                                </div>
                                <div className="flex flex-col justify-between flex-1 p-6 bg-white">
                                    <div className="flex-1">
                                        <a href="#" className="block mt-2">
                                            <p className="text-xl font-semibold text-neutral-600" xt-marked="ok">标准</p>
                                            <p className="mt-3 text-base text-gray-500" xt-marked="ok">标准 简洁 专业的单栏模版</p>
                                        </a>
                                    </div>
                                    <div className="flex items-center mt-6">
                                        <div className="flex-shrink-0">
                                            <button className="px-5 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 lg:px-10 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" xt-marked="ok">使用这款模版</button>
                                        </div>
                                        <div className="ml-3">
                                            <p className="text-sm font-medium text-neutral-900">
                                                <a href="https://twitter.com/Mike_Andreuzza" className="hover:underline" xt-marked="ok"> 查看在线简历</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                                <div className="flex-shrink-0">
                                    <img className="object-cover w-full h-148" src="https://imgs.easycv.cn/easycv/RynT_y-hacker.png" alt=""/>
                                </div>
                                <div className="flex flex-col justify-between flex-1 p-6 bg-white">
                                    <div className="flex-1">
                                        <a href="#" className="block mt-2">
                                            <p className="text-xl font-semibold text-neutral-600" xt-marked="ok">黑客与画家</p>
                                            <p className="mt-3 text-base text-gray-500" xt-marked="ok">大胆，独特，魅力四射的设计</p>
                                        </a>
                                    </div>
                                    <div className="flex items-center mt-6">
                                        <div className="flex-shrink-0">
                                            <button className="px-5 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 lg:px-10 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" xt-marked="ok">使用这款模版</button>
                                        </div>
                                        <div className="ml-3">
                                            <p className="text-sm font-medium text-neutral-900">
                                                <a href="https://twitter.com/Mike_Andreuzza" className="hover:underline" xt-marked="ok"> 查看在线简历</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                                <div className="flex-shrink-0">
                                    <img className="object-cover w-full h-148" src="https://imgs.easycv.cn/easycv/vRK_AU-intro%20(1).png" alt=""/>
                                </div>
                                <div className="flex flex-col justify-between flex-1 p-6 bg-white">
                                    <div className="flex-1">
                                        <a href="#" className="block mt-2">
                                            <p className="text-xl font-semibold text-neutral-600" xt-marked="ok">隆重介绍</p>
                                            <p className="mt-3 text-base text-gray-500" xt-marked="ok">特殊设计的个人简介模块 专业大方的配色</p>
                                        </a>
                                    </div>
                                    <div className="flex items-center mt-6">
                                        <div className="flex-shrink-0">
                                            <button className="px-5 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 lg:px-10 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" xt-marked="ok">使用这款模版</button>
                                        </div>
                                        <div className="ml-3">
                                            <p className="text-sm font-medium text-neutral-900">
                                                <a href="https://twitter.com/Mike_Andreuzza" className="hover:underline" xt-marked="ok"> 查看在线简历</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


                <div className="relative px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                    <div className="text-center">
                        <h2 className="font-title relative z-[2] mx-auto text-[clamp(2rem,6vw,4.5rem)] font-black leading-none">
                <span className="motion-reduce:!opacity-100">
                  他们  这样的学习方式
                </span>
                        </h2> <p className="font-title relative z-[2] py-4 font-light text-base-content/60 md:text-3xl">
                        辅导学员完成就业，快速提升技术水平。
                    </p>
                    </div>

                    <div className="relative mx-auto max-w-7xl">
                        <div className="mx-auto grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
                            <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                                <div className="flex flex-1 flex-col justify-between bg-white p-6">
                                    <div className="flex-1">
                                        <a href="#" className="mt-2 block">
                                            <p className="text-xl font-semibold text-neutral-600">1V1陪跑服务计划</p>
                                            <p className="mt-3 text-base text-gray-500 ">我目前大三，感谢我的私教规划和帮助，最近这段时间成长特别快，没想到自己可以短期会这么多技术，现在已经找到实习工作，这里非常感谢私教的帮助.</p>
                                        </a>
                                    </div>
                                    <div className="mt-6 flex items-center">
                                        <div className="shrink-0">
                                            <a href="">
                                                <img className="h-10 w-10 rounded-full"
                                                     src="~/assets/images/testimonial-1.png" alt=""/>
                                            </a>
                                        </div>
                                        <div className="ml-3">
                                            <p className="text-sm font-medium text-neutral-600">
                                                <a href="#" className="hover:underline"> 王同学</a>
                                            </p>
                                            <div className="flex space-x-1 text-sm text-gray-500">
                                                <time dateTime="2023-06-13"> 23年6月13日</time>
                                                <span aria-hidden="true"> · </span>
                                                <span> 留言 </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                                <div className="flex flex-1 flex-col justify-between bg-white p-6">
                                    <div className="flex-1">
                                        <a href="" className="mt-2 block">
                                            <p className="text-xl font-semibold text-neutral-600">1V1陪跑服务计划</p>
                                            <p className="mt-3 text-base text-gray-500">我目前大四，之前几乎只会语法，也没有实习经验，自己没有实战项目，找工作非常迷茫，通过教练的规划，自己现在比身边的人，技术水平强上很多，非常感谢私教的指导和帮助.</p>
                                        </a>
                                    </div>
                                    <div className="mt-6 flex items-center">
                                        <div className="shrink-0">
                                            <a href="#">
                                                <img className="h-10 w-10 rounded-full"
                                                     src="~/assets/images/testimonial-2.png" alt=""/>
                                            </a>
                                        </div>
                                        <div className="ml-3">
                                            <p className="text-sm font-medium text-neutral-600">
                                                <a href="#" className="hover:underline"> 崔同学 </a>
                                            </p>
                                            <div className="flex space-x-1 text-sm text-gray-500">
                                                <time dateTime="2023-06-13"> 23年6月13日</time>
                                                <span aria-hidden="true"> · </span>
                                                <span> 留言 </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                                <div className="flex flex-1 flex-col justify-between bg-white p-6">
                                    <div className="flex-1">
                                        <a href="#" className="mt-2 block">
                                            <p className="text-xl font-semibold text-neutral-600">简历优化</p>
                                            <p className="mt-3 text-base text-gray-500">以前简历面试机会很少，比较迷茫不知道什么原因，通过私教指导优化最近简历曝光很好，有很多面试机会，老师的面试建议和面试思路的讲解，对我面试帮助很大，感谢我的私教.</p>
                                        </a>
                                    </div>
                                    <div className="mt-6 flex items-center">
                                        <div className="shrink-0">
                                            <a href="#">
                                                <img className="h-10 w-10 rounded-full"
                                                     src="~/assets/images/testimonial-3.png" alt=""/>
                                            </a>
                                        </div>
                                        <div className="ml-3">
                                            <p className="text-sm font-medium text-neutral-600">
                                                <a href="#" className="hover:underline"> 李同学 </a>
                                            </p>
                                            <div className="flex space-x-1 text-sm text-gray-500">
                                                <time dateTime="2023-06-13"> 23年6月13日</time>
                                                <span aria-hidden="true"> · </span>
                                                <span> 留言 </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="body-font text-gray-600">
                <div className="container mx-auto px-5 py-24">
                    <div className="text-center">
                        <h2 className="font-title relative z-[2] mx-auto text-[clamp(2rem,6vw,4.5rem)] font-black leading-none">
            <span className="motion-reduce:!opacity-100" >
              专业的技术面试指南
            </span>

                        </h2> <p className="font-title relative z-[2] py-4 font-light text-base-content/60 md:text-3xl">
                        从各个维度提供翔实的帮助文章，助力你打造技术全面提升。
                    </p>
                    </div>
                    <div className="-m-4 flex flex-wrap">
                        <div className="p-4 md:w-1/3">
                            <div className="flex h-full flex-col rounded-lg bg-gray-100 p-8">
                                <div className="mb-3 flex items-center">
                                    <div className="mr-3 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-500 text-white">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="h-5 w-5" viewBox="0 0 24 24">
                                            <circle cx="6" cy="6" r="3" />
                                            <circle cx="6" cy="18" r="3" />
                                            <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" />
                                        </svg>
                                    </div>
                                    <h2 className="title-font text-lg font-medium text-gray-900">
                                        java 面试八股文
                                    </h2>
                                </div>
                                <div className="grow">
                                    <p className="text-base leading-relaxed">
                                        面试必知必会系统知识覆盖全面。
                                    </p>
                                    <a className="mt-3 inline-flex items-center text-blue-500">
                                        了解更多
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="ml-2 h-4 w-4" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3">
                            <div className="flex h-full flex-col rounded-lg bg-gray-100 p-8">
                                <div className="mb-3 flex items-center">
                                    <div className="mr-3 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-500 text-white">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="h-5 w-5" viewBox="0 0 24 24">
                                            <circle cx="6" cy="6" r="3" />
                                            <circle cx="6" cy="18" r="3" />
                                            <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" />
                                        </svg>
                                    </div>
                                    <h2 className="title-font text-lg font-medium text-gray-900">
                                        简历优化攻略
                                    </h2>
                                </div>
                                <div className="grow">
                                    <p className="text-base leading-relaxed">
                                        帮助全方面的做简历优化。
                                    </p>
                                    <a className="mt-3 inline-flex items-center text-blue-500">
                                        了解更多
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="ml-2 h-4 w-4" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3">
                            <div className="flex h-full flex-col rounded-lg bg-gray-100 p-8">
                                <div className="mb-3 flex items-center">
                                    <div className="mr-3 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-500 text-white">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="h-5 w-5" viewBox="0 0 24 24">
                                            <circle cx="6" cy="6" r="3" />
                                            <circle cx="6" cy="18" r="3" />
                                            <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" />
                                        </svg>
                                    </div>
                                    <h2 className="title-font text-lg font-medium text-gray-900">
                                        技术资料全解析
                                    </h2>
                                </div>
                                <div className="grow">
                                    <p className="text-base leading-relaxed">
                                        工作中常用的开源架构全面解析。
                                    </p>
                                    <a className="mt-3 inline-flex items-center text-blue-500">
                                        了解更多
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="ml-2 h-4 w-4" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div>

    );
}
export default Mainc;
