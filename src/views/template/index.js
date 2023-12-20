import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { templates } from '../../templates/index.tsx';
import styles from './index.module.scss';
import { TemplateCard } from "../../components/build/RightSidebar/templateCard/TemplateCard.tsx";
export const IndexPage = () => {
    return (_jsx("div", { children: _jsxs("main", { children: [_jsx("div", { className: "text-3xl mb-4 font-bold text-center text-gray-800 ", children: "\u7B80\u5386\u6A21\u677F" }), _jsx("div", { className: styles.templates, children: _jsx("div", { className: "relative px-4 py-12 sm:px-6 lg:py-16 lg:px-8", children: _jsx("div", { className: "relative mx-auto max-w-7xl", children: _jsx("div", { className: "grid max-w-lg gap-5 mx-auto lg:grid-cols-3 lg:max-w-none", children: templates.map((it, i) => {
                                    return (_jsx("div", { className: styles.template, children: _jsx(TemplateCard, { value: it, onUse: () => toEditor({ params: { key: it.key } }) }) }, i));
                                }) }) }) }) })] }) }));
};
export function toEditor(options) {
    //console.log(options.params)
    if (options.replace === true || options.params.key === "developer-concise-2") {
        window.location.replace(`/resumeTemplatesUrlC?${JSON.stringify(options.params)}`);
    }
    else {
        window.open(`/resumeTemplatesUrlD?${JSON.stringify(options.params)}`, '_blank');
    }
    //window.open(`/resumeTemplatesUrlC?${JSON.stringify(options.params)}`, '_blank')
}
