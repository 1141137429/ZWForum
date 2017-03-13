webpackJsonp([16],{

/***/ 119:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(197)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(137),
  /* template */
  __webpack_require__(180),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\wamp64\\www\\ZWForum\\resources\\assets\\js\\views\\categorys\\Add.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Add.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2b30e64e", Component.options)
  } else {
    hotAPI.reload("data-v-2b30e64e", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = {
    data: function data() {
        return {
            errorShow: false,
            successShow: false,
            formData: {
                order: 0,
                name: '',
                description: '',
                is_blocked: 'no',
                is_display: 'no'
            }
        };
    },

    methods: {
        validateBeforeSubmit: function validateBeforeSubmit() {
            var _this = this;

            this.$validator.validateAll().then(function (success) {
                if (!success) {
                    return;
                }

                axios.post(window.Domain + 'api/admin/cate', _this.formData).then(function (response) {
                    _this.errorShow = false;
                    _this.successShow = true;
                }).catch(function (error) {
                    this.errorShow = true;
                    this.successShow = false;
                });
            });
        }
    }
};

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "\n.form-control-feedback{\r\n    right: 15px;\n}\n.red-color{\r\n    color:red;\n}\r\n", ""]);

// exports


/***/ }),

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "content animated"
  }, [_c('error-alert', {
    attrs: {
      "errorShow": _vm.errorShow
    }
  }), _vm._v(" "), _c('success-alert', {
    attrs: {
      "successShow": _vm.successShow
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "box container-fluid"
  }, [_c('form', {
    staticClass: "form-horizontal",
    on: {
      "submit": function($event) {
        $event.preventDefault();
        _vm.validateBeforeSubmit($event)
      }
    }
  }, [_c('div', {
    staticClass: "box-header"
  }), _vm._v(" "), _c('div', {
    staticClass: "form-group",
    class: {
      'has-error': _vm.errors.has('name')
    }
  }, [_c('label', {
    staticClass: "col-sm-2 control-label",
    attrs: {
      "for": "name"
    }
  }, [_vm._v("分类名")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-9 col-md-6"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.formData.name),
      expression: "formData.name"
    }, {
      name: "validate",
      rawName: "v-validate:email.initial",
      value: ('required'),
      expression: "'required'",
      arg: "email",
      modifiers: {
        "initial": true
      }
    }],
    staticClass: "form-control",
    attrs: {
      "id": "name",
      "name": "name",
      "type": "text"
    },
    domProps: {
      "value": _vm.formData.name,
      "value": (_vm.formData.name)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.formData.name = $event.target.value
      }
    }
  }), _vm._v(" "), _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.errors.has('name')),
      expression: "errors.has('name')"
    }],
    staticClass: "glyphicon glyphicon-remove form-control-feedback",
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._v(" "), _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.errors.has('name')),
      expression: "errors.has('name')"
    }],
    staticClass: "red-color help-block"
  }, [_vm._v(_vm._s(_vm.errors.first('name')))])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-sm-2 control-label",
    attrs: {
      "for": ""
    }
  }, [_vm._v("描述")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-9 col-md-6"
  }, [_c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.formData.description),
      expression: "formData.description"
    }],
    staticClass: "form-control",
    staticStyle: {
      "overflow": "hidden",
      "word-wrap": "break-word",
      "resize": "horizontal",
      "height": "104px"
    },
    attrs: {
      "rows": "3",
      "name": "description",
      "cols": "50"
    },
    domProps: {
      "value": (_vm.formData.description)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.formData.description = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-sm-2 control-label",
    attrs: {
      "for": ""
    }
  }, [_vm._v("排序")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-9 col-md-6"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.formData.order),
      expression: "formData.order"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "number",
      "name": "order"
    },
    domProps: {
      "value": (_vm.formData.order)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.formData.order = $event.target.value
      },
      "blur": function($event) {
        _vm.$forceUpdate()
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-sm-2 control-label",
    attrs: {
      "for": "name"
    }
  }, [_vm._v("是否隐藏话题")]), _vm._v(" "), _c('div', {
    staticClass: "radio col-sm-9"
  }, [_c('label', [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.formData.is_blocked),
      expression: "formData.is_blocked"
    }],
    attrs: {
      "type": "radio",
      "name": "is_blocked",
      "value": "yes"
    },
    domProps: {
      "checked": _vm._q(_vm.formData.is_blocked, "yes")
    },
    on: {
      "__c": function($event) {
        _vm.formData.is_blocked = "yes"
      }
    }
  }), _vm._v("是\n                    ")]), _vm._v(" "), _c('label', [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.formData.is_blocked),
      expression: "formData.is_blocked"
    }],
    attrs: {
      "type": "radio",
      "name": "is_blocked",
      "value": "no"
    },
    domProps: {
      "checked": _vm._q(_vm.formData.is_blocked, "no")
    },
    on: {
      "__c": function($event) {
        _vm.formData.is_blocked = "no"
      }
    }
  }), _vm._v("否\n                    ")])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-sm-2 control-label",
    attrs: {
      "for": "name"
    }
  }, [_vm._v("是否禁用")]), _vm._v(" "), _c('div', {
    staticClass: "radio col-sm-9"
  }, [_c('label', [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.formData.is_display),
      expression: "formData.is_display"
    }],
    attrs: {
      "type": "radio",
      "name": "is_display",
      "value": "yes"
    },
    domProps: {
      "checked": _vm._q(_vm.formData.is_display, "yes")
    },
    on: {
      "__c": function($event) {
        _vm.formData.is_display = "yes"
      }
    }
  }), _vm._v("是\n                    ")]), _vm._v(" "), _c('label', [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.formData.is_display),
      expression: "formData.is_display"
    }],
    attrs: {
      "type": "radio",
      "name": "is_display",
      "value": "no"
    },
    domProps: {
      "checked": _vm._q(_vm.formData.is_display, "no")
    },
    on: {
      "__c": function($event) {
        _vm.formData.is_display = "no"
      }
    }
  }), _vm._v("否\n                    ")])])]), _vm._v(" "), _c('hr'), _vm._v(" "), _vm._m(0)])])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "form-group"
  }, [_c('div', {
    staticClass: "col-sm-offset-2 col-sm-9"
  }, [_c('button', {
    staticClass: "btn btn-primary",
    attrs: {
      "type": "submit"
    }
  }, [_vm._v("提交")])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2b30e64e", module.exports)
  }
}

/***/ }),

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(161);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("37a6d184", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-2b30e64e!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Add.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-2b30e64e!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Add.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});