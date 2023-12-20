"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var Header = function Header() {
  return <div>
        <div className="bg-accent-1 border-accent-2 border-b bg-slate-50">
            <div className="container mx-auto px-5">
                <div className="py-2 text-center text-sm ">
          <span className="mr-2 hidden rounded bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800 dark:bg-blue-200 dark:text-blue-800 md:inline">
            新
          </span>如果你也想快速成长，快来一起加入吧！
                    <a href="/course" className="underline transition-colors duration-200 hover:text-success">去看看</a>.
                </div>
            </div>
        </div>
        <header className="body-font text-gray-600">
            <div className="container mx-auto flex flex-col flex-wrap items-center p-5 md:flex-row">
                <a className="title-font mb-4 flex items-center font-medium text-gray-900 md:mb-0">
                    <img src="https://wickedblocks.dev/assets/images/logo.svg" alt="" className="ml-2 w-5 h-5" />
                    <span className="ml-3 text-xl">ttlili</span>
                </a>
                <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto">
                    <a href="/" className="mr-5 mt-4 rounded px-3 py-1 text-base hover:bg-sky-100 hover:text-gray-900 focus:outline-none md:mt-0 ">首页</a>
                    <div className="indicator">
                        <a href="/resume" className="mr-5 hover:text-gray-900">
                            <button className="mt-4 inline-flex items-center rounded border-0 bg-gray-100 px-3 py-1 text-base hover:bg-gray-200 focus:outline-none md:mt-0">编辑简历
                                <img src="https://wickedblocks.dev/assets/images/logo.svg" alt="" className="ml-2 w-5 h-5" />

                            </button>
                        </a>
                    </div>
                    <a href="/resumeTemplates" className="mr-5 mt-4 rounded px-3 py-1 text-base hover:bg-sky-100 hover:text-gray-900 focus:outline-none md:mt-0">简历模版</a>
                    <a href="/#" className="mr-5 mt-4 rounded px-3 py-1 text-base hover:bg-gray-200 hover:bg-sky-100 focus:outline-none md:mt-0">立即加入</a>
                </nav>


            </div>
        </header>
    </div>;
};
var _default = exports["default"] = Header;