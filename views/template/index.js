"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IndexPage = void 0;
exports.toEditor = toEditor;
var _index = require("../../templates/index.tsx");
var _indexModule = _interopRequireDefault(require("./index.module.scss"));
var _TemplateCard = require("../../components/build/RightSidebar/templateCard/TemplateCard.tsx");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var IndexPage = exports.IndexPage = function IndexPage() {
  return <div>
            <main>
                <div className="text-3xl mb-4 font-bold text-center text-gray-800 ">简历模板</div>
                <div className={_indexModule["default"].templates}>
                    <div className="relative px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
                        <div className="relative mx-auto max-w-7xl">
                            <div className="grid max-w-lg gap-5 mx-auto lg:grid-cols-3 lg:max-w-none">

                               {_index.templates.map(function (it, i) {
                return <div className={_indexModule["default"].template} key={i}>
                                            <_TemplateCard.TemplateCard value={it} onUse={function () {
                    return toEditor({
                      params: {
                        key: it.key
                      }
                    });
                  }} />
                                        </div>;
              })}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>;
};
function toEditor(options) {
  //console.log(options.params)
  if (options.replace === true || options.params.key === "developer-concise-2") {
    window.location.replace("/resumeTemplatesUrlC?".concat(JSON.stringify(options.params)));
  } else {
    window.open("/resumeTemplatesUrlD?".concat(JSON.stringify(options.params)), '_blank');
  }
  //window.open(`/resumeTemplatesUrlC?${JSON.stringify(options.params)}`, '_blank')
}