"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TemplateCard = void 0;
var _antd = require("antd");
var TemplateCard = exports.TemplateCard = function TemplateCard(_ref) {
  var _value$tags;
  var value = _ref.value,
    onUse = _ref.onUse;
  return (
    // <div className={styles.container}>
    //     <div className={styles.content}>
    //         <div className={styles.poster}>
    //             <img className={styles.img} src={value.poster} alt="" />
    //         </div>
    //         <div className={styles.mask}>
    //             <div className={styles.name}>{value.name}</div>
    //             <div className={styles.tags}>
    //                 {value.tags?.map((tag, i) => {
    //                     return <Tag key={i}>{tag}</Tag>
    //                 })}
    //             </div>
    //             <Button className="bg-blue-500 items-center justify-center" type="primary" onClick={onUse}>
    //                 使用该模板
    //             </Button>
    //         </div>
    //     </div>
    // </div>

    <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                        <div className="flex-shrink-0">
                            <img className="object-cover w-full h-148" src={value.poster} alt="" />
                        </div>
                        <div className="flex flex-col justify-between flex-1 p-6 bg-white">
                            <div className="flex-1">
                                <a href="#" className="block mt-2">
                                    <p className="text-xl font-semibold text-neutral-600" xt-marked="ok">{value.name}</p>
                                    <p className="mt-3 text-base text-gray-500" xt-marked="ok">
                                        {(_value$tags = value.tags) === null || _value$tags === void 0 ? void 0 : _value$tags.map(function (tag, i) {
                return <_antd.Tag key={i}>{tag}</_antd.Tag>;
              })}
                                    </p>
                                </a>
                            </div>
                            <div className="flex items-center mt-6">
                                <div className="flex-shrink-0">
                                    <button className="px-5 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 lg:px-10 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" xt-marked="ok" onClick={onUse}>使用这款模版</button>
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm font-medium text-neutral-900">
                                        <a href="#" className="hover:underline" xt-marked="ok" onClick={onUse}> 查看在线简历</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
  );
};