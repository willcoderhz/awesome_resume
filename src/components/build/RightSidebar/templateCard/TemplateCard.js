import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Tag } from 'antd';
export const TemplateCard = ({ value, onUse }) => {
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
    _jsxs("div", { className: "flex flex-col overflow-hidden rounded-lg shadow-lg", children: [_jsx("div", { className: "flex-shrink-0", children: _jsx("img", { className: "object-cover w-full h-148", src: value.poster, alt: "" }) }), _jsxs("div", { className: "flex flex-col justify-between flex-1 p-6 bg-white", children: [_jsx("div", { className: "flex-1", children: _jsxs("a", { href: "#", className: "block mt-2", children: [_jsx("p", { className: "text-xl font-semibold text-neutral-600", "xt-marked": "ok", children: value.name }), _jsx("p", { className: "mt-3 text-base text-gray-500", "xt-marked": "ok", children: value.tags?.map((tag, i) => {
                                        return _jsx(Tag, { children: tag }, i);
                                    }) })] }) }), _jsxs("div", { className: "flex items-center mt-6", children: [_jsx("div", { className: "flex-shrink-0", children: _jsx("button", { className: "px-5 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 lg:px-10 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500", "xt-marked": "ok", onClick: onUse, children: "\u4F7F\u7528\u8FD9\u6B3E\u6A21\u7248" }) }), _jsx("div", { className: "ml-3", children: _jsx("p", { className: "text-sm font-medium text-neutral-900", children: _jsx("a", { href: "#", className: "hover:underline", "xt-marked": "ok", onClick: onUse, children: " \u67E5\u770B\u5728\u7EBF\u7B80\u5386" }) }) })] })] })] }));
};
