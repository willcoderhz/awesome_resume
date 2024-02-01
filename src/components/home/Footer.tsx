
const Footer = () => {
    return (

     <div>
         <footer className="body-font bg-slate-50 text-gray-600">
             <div className="container mx-auto flex flex-col flex-wrap px-5 py-24 md:flex-row md:flex-nowrap md:items-center lg:items-start">
                 <div className="mx-auto w-64 shrink-0 text-center md:mx-0 md:text-left">
                     <a className="title-font flex items-center justify-center font-medium text-gray-900 md:justify-start">
                         <img src="https://wickedblocks.dev/assets/images/logo.svg" alt="" className="ml-2 w-5 h-5"/>

                         <span className="ml-3 text-xl">ttlili</span>
                     </a>
                     <p className="mt-2 text-base text-gray-500">
                         在努力这件事上，不逼自己一把永远不知道自己有多优秀
                     </p>
                 </div>
                 <div className="-mb-10 mt-10 flex grow flex-wrap text-center md:mt-0 md:pl-20 md:text-left">
                     <div className="w-full px-4 md:w-1/2 lg:w-1/4">
                         <h2 className="title-font mb-3 text-lg font-medium tracking-widest text-gray-900">
                             服务类别
                         </h2>
                         <nav className="mb-10 list-none">
                             <li>
                                 <a className="text-base hover:text-gray-800">1V1 陪跑训练营</a>
                             </li>
                             <li>
                                 <a className="text-base hover:text-gray-800">面试简历优化</a>
                             </li>
                             <li>
                                 <a className="text-base hover:text-gray-800">学习规划</a>
                             </li>
                             <li>
                                 <a className="text-base hover:text-gray-800">面试攻略</a>
                             </li>
                         </nav>
                     </div>
                     <div className="w-full px-4 md:w-1/2 lg:w-1/4">
                         <h2 className="title-font mb-3 text-lg font-medium tracking-widest text-gray-900">
                             资源
                         </h2>
                         <nav className="mb-10 list-none">
                             <li>
                                 <a className="text-base hover:text-gray-800">名师交流</a>
                             </li>
                             <li>
                                 <a className="text-base hover:text-gray-800">最快成长</a>
                             </li>
                             <li>
                                 <a className="text-base hover:text-gray-800">私教顾问</a>
                             </li>
                             <li>
                                 <a className="text-base hover:text-gray-800">破圈成长</a>
                             </li>
                         </nav>
                     </div>
                     <div className="w-full px-4 md:w-1/2 lg:w-1/4">
                         <h2 className="title-font mb-3 text-lg font-medium tracking-widest text-gray-900">
                             快速连接
                         </h2>
                         <nav className="mb-10 list-none">
                             <li>
                                 <a className="text-base hover:text-gray-800">拓展学习</a>
                             </li>
                             <li>
                                 <a className="text-base hover:text-gray-800">摆脱迷茫</a>
                             </li>
                             <li>
                                 <a className="text-base hover:text-gray-800">优质服务</a>
                             </li>
                             <li>
                                 <a className="text-base hover:text-gray-800">专项题库</a>
                             </li>
                         </nav>
                     </div>
                     <div className="w-full px-4 md:w-1/2 lg:w-1/4">
                         <h2 className="title-font mb-3 text-lg font-medium tracking-widest text-gray-900">
                             其它
                         </h2>
                         <nav className="mb-10 list-none">
                             <li>
                                 <a className="text-gray-600 hover:text-gray-800">保护隐私</a>
                             </li>
                             <li>
                                 <a className="text-gray-600 hover:text-gray-800">常见问题</a>
                             </li>
                             <li>
                                 <a className="text-gray-600 hover:text-gray-800">联系我们</a>
                             </li>
                             <li>
                                 <a className="text-gray-600 hover:text-gray-800">帮助</a>
                             </li>
                         </nav>
                     </div>
                 </div>
             </div>
             <div className="bg-gray-100">
                 <div className="container mx-auto flex flex-col flex-wrap px-5 py-4 sm:flex-row">
                     <p className="text-center text-sm text-gray-500 sm:text-left">
                         © 2023 ttlili.com 版本所有 ICP证
                         <a href="https://beian.miit.gov.cn/" rel="noopener noreferrer" className="ml-1 text-gray-600" target="_blank">冀ICP备2023027139号-1</a>
                     </p>
                 </div>
             </div>
         </footer>
     </div>
    );
}
export default Footer;
