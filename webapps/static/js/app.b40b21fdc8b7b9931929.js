webpackJsonp([1],{

/***/ 1000:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('transition', {
    attrs: {
      "name": "fade",
      "mode": "out-in"
    }
  }, [_c('router-view')], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 1001:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('el-row', {
    staticClass: "container"
  }, [_c('el-col', {
    staticClass: "header",
    attrs: {
      "span": 24
    }
  }, [_c('el-col', {
    staticClass: "logo",
    class: _vm.collapsed ? 'logo-collapse-width' : 'logo-width',
    attrs: {
      "span": 10
    }
  }, [_c('img', {
    attrs: {
      "src": this.sysLogo,
      "alt": ""
    }
  }), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.collapsed ? _vm.sysLogoTxt : _vm.sysName))])]), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 6
    }
  }, [_c('div', {
    staticClass: "tools",
    on: {
      "click": function($event) {
        $event.preventDefault();
        return _vm.collapse($event)
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-align-justify"
  })])]), _vm._v(" "), _c('el-col', {
    staticClass: "userinfo",
    attrs: {
      "span": 8
    }
  }, [_c('el-dropdown', {
    attrs: {
      "trigger": "hover"
    }
  }, [_c('div', {
    staticClass: "el-dropdown-link userinfo-inner"
  }, [_c('el-badge', {
    staticClass: "item",
    attrs: {
      "is-dot": ""
    }
  }, [_c('img', {
    attrs: {
      "src": this.sysUserAvatar
    }
  })]), _vm._v(" "), _c('div', [_c('span', {
    staticClass: "_name"
  }, [_vm._v(_vm._s(_vm.sysUserName))]), _vm._v(" "), _c('span', {
    staticClass: "_bsn"
  }, [_vm._v(_vm._s(_vm.businessDate))])])], 1), _vm._v(" "), _c('el-dropdown-menu', {
    attrs: {
      "slot": "dropdown"
    },
    slot: "dropdown"
  }, [_c('el-dropdown-item', {
    nativeOn: {
      "click": function($event) {
        _vm.$router.push('/daily-event')
      }
    }
  }, [_vm._v("\n\t\t\t\t\t\tNotifications\n\t\t\t\t\t\t")]), _vm._v(" "), _c('el-dropdown-item', [_vm._v("Settings")]), _vm._v(" "), _c('el-dropdown-item', {
    attrs: {
      "divided": ""
    },
    nativeOn: {
      "click": function($event) {
        return _vm.logout($event)
      }
    }
  }, [_vm._v("Sign Out")])], 1)], 1)], 1)], 1), _vm._v(" "), _c('el-col', {
    staticClass: "main",
    attrs: {
      "span": 24
    }
  }, [_c('aside', {
    class: _vm.collapsed ? 'menu-collapsed' : 'menu-expanded'
  }, [_c('el-menu', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.collapsed),
      expression: "!collapsed"
    }],
    staticClass: "el-menu-vertical-demo",
    attrs: {
      "default-active": _vm.$route.path,
      "unique-opened": "",
      "router": ""
    },
    on: {
      "open": _vm.handleopen,
      "close": _vm.handleclose,
      "select": _vm.handleselect
    }
  }, [_vm._l((_vm.$router.options.routes), function(item, index) {
    return (!item.hidden && item.meta == _vm.sysMeta) ? [(!item.leaf) ? _c('el-submenu', {
      attrs: {
        "index": index + ''
      }
    }, [_c('template', {
      slot: "title"
    }, [_c('i', {
      class: item.iconCls
    }), _vm._v(_vm._s(item.name))]), _vm._v(" "), _vm._l((item.children), function(child) {
      return (!child.hidden) ? _c('el-menu-item', {
        key: child.path,
        attrs: {
          "index": child.path
        }
      }, [_vm._v(_vm._s(child.name))]) : _vm._e()
    })], 2) : _vm._e(), _vm._v(" "), (item.leaf && item.children.length > 0) ? _c('el-menu-item', {
      attrs: {
        "index": item.children[0].path
      }
    }, [_c('i', {
      class: item.iconCls
    }), _vm._v(_vm._s(item.children[0].name))]) : _vm._e()] : _vm._e()
  })], 2), _vm._v(" "), _c('ul', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.collapsed),
      expression: "collapsed"
    }],
    ref: "menuCollapsed",
    staticClass: "el-menu el-menu-vertical-demo collapsed"
  }, _vm._l((_vm.$router.options.routes), function(item, index) {
    return (!item.hidden && item.meta == _vm.sysMeta) ? _c('li', {
      staticClass: "el-submenu item"
    }, [(!item.leaf) ? [_c('div', {
      staticClass: "el-submenu__title",
      staticStyle: {
        "padding-left": "20px"
      },
      on: {
        "mouseover": function($event) {
          _vm.showMenu(index, true)
        },
        "mouseout": function($event) {
          _vm.showMenu(index, false)
        }
      }
    }, [_c('i', {
      class: item.iconCls
    })]), _vm._v(" "), _c('ul', {
      staticClass: "el-menu submenu",
      class: 'submenu-hook-' + index,
      on: {
        "mouseover": function($event) {
          _vm.showMenu(index, true)
        },
        "mouseout": function($event) {
          _vm.showMenu(index, false)
        }
      }
    }, _vm._l((item.children), function(child) {
      return (!child.hidden) ? _c('li', {
        key: child.path,
        staticClass: "el-menu-item",
        class: _vm.$route.path == child.path ? 'is-active' : '',
        staticStyle: {
          "padding-left": "40px"
        },
        on: {
          "click": function($event) {
            _vm.$router.push(child.path)
          }
        }
      }, [_vm._v(_vm._s(child.name))]) : _vm._e()
    }))] : [_c('li', {
      staticClass: "el-submenu"
    }, [_c('div', {
      staticClass: "el-submenu__title",
      class: _vm.$route.path == item.children[0].path ? 'is-active' : '',
      staticStyle: {
        "padding-left": "20px",
        "height": "56px",
        "line-height": "56px",
        "padding": "0 20px"
      },
      on: {
        "click": function($event) {
          _vm.$router.push(item.children[0].path)
        }
      }
    }, [_c('i', {
      class: item.iconCls
    })])])]], 2) : _vm._e()
  }))], 1), _vm._v(" "), _c('section', {
    staticClass: "content-container"
  }, [_c('div', {
    staticClass: "grid-content bg-purple-light"
  }, [_c('el-col', {
    staticClass: "breadcrumb-container",
    attrs: {
      "span": 24
    }
  }, [_c('strong', {
    staticClass: "title"
  }, [_vm._v(_vm._s(_vm.$route.name))]), _vm._v(" "), _c('el-breadcrumb', {
    staticClass: "breadcrumb-inner",
    attrs: {
      "separator": "/"
    }
  }, _vm._l((_vm.$route.matched), function(item) {
    return _c('el-breadcrumb-item', {
      key: item.path
    }, [_vm._v("\n\t\t\t\t\t\t\t" + _vm._s(item.name) + "\n\t\t\t\t\t\t")])
  }))], 1), _vm._v(" "), _c('el-col', {
    staticClass: "content-wrapper",
    attrs: {
      "span": 24
    }
  }, [_c('transition', {
    attrs: {
      "name": "fade",
      "mode": "out-in"
    }
  }, [_c('router-view')], 1)], 1)], 1)])])], 1)
},staticRenderFns: []}

/***/ }),

/***/ 1002:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', {
    staticClass: "page-container"
  }, [_vm._v("404 page not found")])
},staticRenderFns: []}

/***/ }),

/***/ 1003:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_c('el-col', {
    staticClass: "toolbar",
    staticStyle: {
      "padding-bottom": "0px"
    },
    attrs: {
      "span": 24
    }
  }, [_c('el-form', {
    attrs: {
      "inline": true,
      "model": _vm.filters,
      "size": "small"
    }
  }, [_c('el-form-item', [_c('el-input', {
    staticStyle: {
      "width": "300px"
    },
    attrs: {
      "placeholder": "Please input Customer Number!"
    },
    model: {
      value: (_vm.filters.name),
      callback: function($$v) {
        _vm.$set(_vm.filters, "name", $$v)
      },
      expression: "filters.name"
    }
  })], 1), _vm._v(" "), _c('el-form-item', [_c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.getCustomerNumber
    }
  }, [_vm._v("Search")])], 1)], 1)], 1), _vm._v(" "), [_c('el-col', {
    attrs: {
      "span": 24
    }
  }, [_c('el-table', {
    directives: [{
      name: "loading",
      rawName: "v-loading",
      value: (_vm.loading),
      expression: "loading"
    }],
    attrs: {
      "data": _vm.customerPositions,
      "size": "small",
      "header-cell-style": _vm.tableHeaderColor
    }
  }, [_c('el-table-column', {
    attrs: {
      "type": "expand"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(props) {
        return [_c('el-table', {
          staticStyle: {
            "width": "100%"
          },
          attrs: {
            "size": "small",
            "data": props.row.accounts,
            "show-header": false
          },
          on: {
            "row-click": _vm.rowSelect
          }
        }, [_c('el-table-column', {
          attrs: {
            "prop": "customerAccount",
            "type": "number",
            "label": "Customer Number"
          }
        }), _vm._v(" "), _c('el-table-column', {
          attrs: {
            "prop": "",
            "label": "Customer Name"
          }
        }), _vm._v(" "), _c('el-table-column', {
          attrs: {
            "prop": "positions.prod.bond",
            "label": "Equity",
            "sortable": ""
          }
        }), _vm._v(" "), _c('el-table-column', {
          attrs: {
            "prop": "positions.prod.share",
            "label": "Fixed Income",
            "sortable": ""
          }
        }), _vm._v(" "), _c('el-table-column', {
          attrs: {
            "prop": "positions.prod.deposit",
            "label": "FX",
            "sortable": ""
          }
        }), _vm._v(" "), _c('el-table-column', {
          attrs: {
            "prop": "positions.prod.fund",
            "label": "Structure Product",
            "sortable": ""
          }
        }), _vm._v(" "), _c('el-table-column', {
          attrs: {
            "prop": "positions.prod.total",
            "label": "Total Asset Value (USD)",
            "align": "right",
            "sortable": ""
          }
        })], 1)]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "customerNumber",
      "type": "number",
      "label": "Customer Number"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "customerName",
      "label": "Customer Name"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "positions.prod.bond",
      "label": "Equity",
      "sortable": ""
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "positions.prod.share",
      "label": "Fixed Income",
      "sortable": ""
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "positions.prod.deposit",
      "label": "FX",
      "sortable": ""
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "positions.prod.fund",
      "label": "Structure Product",
      "sortable": ""
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "positions.prod.total",
      "label": "Total Asset Value (USD)",
      "align": "right",
      "sortable": ""
    }
  })], 1)], 1)]], 2)
},staticRenderFns: []}

/***/ }),

/***/ 1004:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_c('el-row', {
    staticStyle: {
      "padding-top": "35px"
    }
  }, [_c('el-col', {
    attrs: {
      "span": 24
    }
  }, [_c('el-select', {
    staticStyle: {
      "width": "250px"
    },
    attrs: {
      "placeholder": "Please select value!",
      "size": "small"
    },
    model: {
      value: (_vm.selectValue),
      callback: function($$v) {
        _vm.selectValue = $$v
      },
      expression: "selectValue"
    }
  }, _vm._l((_vm.options), function(item) {
    return _c('el-option', {
      key: item.value,
      attrs: {
        "label": item.label,
        "value": item.value
      }
    })
  })), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary",
      "size": "small"
    },
    on: {
      "click": _vm.addItem
    }
  }, [_vm._v("Add")])], 1)], 1), _vm._v(" "), _c('el-row', {
    staticStyle: {
      "padding-top": "30px"
    },
    attrs: {
      "gutter": 6
    }
  }, _vm._l((_vm.cards), function(card, index) {
    return _c('el-col', {
      directives: [{
        name: "loading",
        rawName: "v-loading",
        value: (card.loading),
        expression: "card.loading"
      }],
      attrs: {
        "span": 8
      }
    }, [_c('el-card', {
      staticClass: "box-card"
    }, [_c('div', {
      staticClass: "clearfix",
      attrs: {
        "slot": "header"
      },
      slot: "header"
    }, [_c('b', [_vm._v(_vm._s(card.name))]), _vm._v(" "), _c('el-button', {
      staticStyle: {
        "float": "right",
        "padding": "3px 0"
      },
      attrs: {
        "index": index,
        "type": "text"
      },
      on: {
        "click": function($event) {
          _vm.delCard(index)
        }
      }
    }, [_vm._v("del")])], 1), _vm._v(" "), _c('el-form', {
      ref: "form",
      refInFor: true,
      attrs: {
        "model": card.form,
        "rules": _vm.cardRules,
        "size": "small",
        "label-width": "110px"
      }
    }, [_c('el-form-item', {
      attrs: {
        "prop": "issueCode",
        "label": "Underlying:"
      }
    }, [_c('el-select', {
      attrs: {
        "placeholder": "Please select value!"
      },
      model: {
        value: (card.form.issueCode),
        callback: function($$v) {
          _vm.$set(card.form, "issueCode", $$v)
        },
        expression: "card.form.issueCode"
      }
    }, _vm._l((card.form.issueCodeoptions), function(item) {
      return _c('el-option', {
        key: item.value,
        attrs: {
          "label": item.label,
          "value": item.value
        }
      })
    }))], 1), _vm._v(" "), _c('el-form-item', {
      attrs: {
        "prop": "iusseDate",
        "label": "Iusse Date:"
      }
    }, [_c('el-date-picker', {
      attrs: {
        "type": "date",
        "value-format": "yyyy-MM-dd",
        "placeholder": "Please pick a date!"
      },
      model: {
        value: (card.form.iusseDate),
        callback: function($$v) {
          _vm.$set(card.form, "iusseDate", $$v)
        },
        expression: "card.form.iusseDate"
      }
    })], 1), _vm._v(" "), _c('el-form-item', {
      attrs: {
        "prop": "maturityDate",
        "label": "Maturity Date:"
      }
    }, [_c('el-date-picker', {
      attrs: {
        "type": "date",
        "value-format": "yyyy-MM-dd",
        "placeholder": "Please pick a date!"
      },
      model: {
        value: (card.form.maturityDate),
        callback: function($$v) {
          _vm.$set(card.form, "maturityDate", $$v)
        },
        expression: "card.form.maturityDate"
      }
    })], 1), _vm._v(" "), _c('el-form-item', [_c('el-button', {
      attrs: {
        "type": "primary",
        "index": index
      },
      on: {
        "click": function($event) {
          _vm.onSubmit(index)
        }
      }
    }, [_vm._v("Submit")]), _vm._v(" "), _c('el-button', {
      on: {
        "click": function($event) {
          _vm.onReset(index)
        }
      }
    }, [_vm._v("Reset")])], 1)], 1)], 1)], 1)
  })), _vm._v(" "), _c('el-row', {
    staticStyle: {
      "padding-top": "20px"
    },
    attrs: {
      "gutter": 10
    }
  }, _vm._l((_vm.tables), function(table) {
    return _c('el-col', {
      attrs: {
        "span": 8
      }
    }, [_c('el-card', [_c('ul', {
      staticClass: "con-bank-ul"
    }, _vm._l((table.list), function(item, index) {
      return _c('li', [_c('span', [_vm._v(_vm._s(item.name))]), _vm._v(" "), _c('span', {
        directives: [{
          name: "loading",
          rawName: "v-loading",
          value: (item.loading),
          expression: "item.loading"
        }],
        class: item.class
      }, [_vm._v(_vm._s(item.value))])])
    }))])], 1)
  }))], 1)
},staticRenderFns: []}

/***/ }),

/***/ 1005:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_vm._v("\n\tmain ......\n")])
},staticRenderFns: []}

/***/ }),

/***/ 1046:
/***/ (function(module, exports) {

module.exports = [{"customerNumber":5,"customerName":"cust5","type":"I","age":24,"homeCountry":"HK","createDate":null,"positions":{"prod":{"fund":"1166669.20","deposit":"25747.96","share":"1166669.20","bond":"1166669.20"},"ccy":{"HKD":"680904.00","SGD":"170586.00","GBP":"506798.00","USD":"336692.00"}},"accounts":[{"id":5,"customerNumber":5,"accountNumber":1,"accountName":"acct 1","createDate":null,"positions":{"prod":{"fund":"85747.20","deposit":"1071.84","share":"85747.20","bond":"85747.20"},"ccy":{"HKD":"680904.00"}},"bonds":null,"deposits":null,"funds":null,"shares":null},{"id":105,"customerNumber":5,"accountNumber":2,"accountName":"acct 2","createDate":null,"positions":{"prod":{"fund":"635099.40","deposit":"10584.99","share":"635099.40","bond":"635099.40"},"ccy":{"GBP":"506798.00"}},"bonds":null,"deposits":null,"funds":null,"shares":null},{"id":205,"customerNumber":5,"accountNumber":3,"accountName":"acct 3","createDate":null,"positions":{"prod":{"fund":"328000.00","deposit":"8200.00","share":"328000.00","bond":"328000.00"},"ccy":{"USD":"336692.00"}},"bonds":null,"deposits":null,"funds":null,"shares":null},{"id":305,"customerNumber":5,"accountNumber":4,"accountName":"acct 4","createDate":null,"positions":{"prod":{"fund":"117822.60","deposit":"5891.13","share":"117822.60","bond":"117822.60"},"ccy":{"SGD":"170586.00"}},"bonds":null,"deposits":null,"funds":null,"shares":null}]},{"customerNumber":10,"customerName":"cust10","type":"E","age":29,"homeCountry":"HK","createDate":null,"positions":{"prod":{"fund":"1307941.20","deposit":"28878.16","share":"1307941.20","bond":"1307941.20"},"ccy":{"HKD":"762340.00","SGD":"192010.00","GBP":"568230.00","USD":"378120.00"}},"accounts":[{"id":10,"customerNumber":10,"accountNumber":1,"accountName":"acct 1","createDate":null,"positions":{"prod":{"fund":"95955.20","deposit":"1199.44","share":"95955.20","bond":"95955.20"},"ccy":{"HKD":"762340.00"}},"bonds":null,"deposits":null,"funds":null,"shares":null},{"id":110,"customerNumber":10,"accountNumber":2,"accountName":"acct 2","createDate":null,"positions":{"prod":{"fund":"711617.40","deposit":"11860.29","share":"711617.40","bond":"711617.40"},"ccy":{"GBP":"568230.00"}},"bonds":null,"deposits":null,"funds":null,"shares":null},{"id":210,"customerNumber":10,"accountNumber":3,"accountName":"acct 3","createDate":null,"positions":{"prod":{"fund":"368000.00","deposit":"9200.00","share":"368000.00","bond":"368000.00"},"ccy":{"USD":"378120.00"}},"bonds":null,"deposits":null,"funds":null,"shares":null},{"id":310,"customerNumber":10,"accountNumber":4,"accountName":"acct 4","createDate":null,"positions":{"prod":{"fund":"132368.60","deposit":"6618.43","share":"132368.60","bond":"132368.60"},"ccy":{"SGD":"192010.00"}},"bonds":null,"deposits":null,"funds":null,"shares":null}]},{"customerNumber":9,"customerName":"cust9","type":"I","age":28,"homeCountry":"HK","createDate":null,"positions":{"prod":{"fund":"1452780.20","deposit":"30130.24","share":"1452780.20","bond":"1452780.20"},"ccy":{"HKD":"598584.00","SGD":"960450.00","GBP":"398476.00","USD":"202368.00"}},"accounts":[{"id":9,"customerNumber":9,"accountNumber":1,"accountName":"acct 1","createDate":null,"positions":{"prod":{"fund":"75028.80","deposit":"1250.48","share":"75028.80","bond":"75028.80"},"ccy":{"HKD":"598584.00"}},"bonds":null,"deposits":null,"funds":null,"shares":null},{"id":109,"customerNumber":9,"accountNumber":2,"accountName":"acct 2","createDate":null,"positions":{"prod":{"fund":"494816.40","deposit":"12370.41","share":"494816.40","bond":"494816.40"},"ccy":{"GBP":"398476.00"}},"bonds":null,"deposits":null,"funds":null,"shares":null},{"id":209,"customerNumber":9,"accountNumber":3,"accountName":"acct 3","createDate":null,"positions":{"prod":{"fund":"192000.00","deposit":"9600.00","share":"192000.00","bond":"192000.00"},"ccy":{"USD":"202368.00"}},"bonds":null,"deposits":null,"funds":null,"shares":null},{"id":309,"customerNumber":9,"accountNumber":4,"accountName":"acct 4","createDate":null,"positions":{"prod":{"fund":"690935.00","deposit":"6909.35","share":"690935.00","bond":"690935.00"},"ccy":{"SGD":"960450.00"}},"bonds":null,"deposits":null,"funds":null,"shares":null}]},{"customerNumber":2,"customerName":"cust2","type":"E","age":21,"homeCountry":"HK","createDate":null,"positions":{"prod":{"fund":"2393867.60","deposit":"29504.20","share":"2393867.60","bond":"2393867.60"},"ccy":{"HKD":"201792.00","SGD":"567672.00","GBP":"959880.00","USD":"761776.00"}},"accounts":[{"id":2,"customerNumber":2,"accountNumber":1,"accountName":"acct 1","createDate":null,"positions":{"prod":{"fund":"24499.20","deposit":"1224.96","share":"24499.20","bond":"24499.20"},"ccy":{"HKD":"201792.00"}},"bonds":null,"deposits":null,"funds":null,"shares":null},{"id":102,"customerNumber":2,"accountNumber":2,"accountName":"acct 2","createDate":null,"positions":{"prod":{"fund":"1211535.00","deposit":"12115.35","share":"1211535.00","bond":"1211535.00"},"ccy":{"GBP":"959880.00"}},"bonds":null,"deposits":null,"funds":null,"shares":null},{"id":202,"customerNumber":2,"accountNumber":3,"accountName":"acct 3","createDate":null,"positions":{"prod":{"fund":"752000.00","deposit":"9400.00","share":"752000.00","bond":"752000.00"},"ccy":{"USD":"761776.00"}},"bonds":null,"deposits":null,"funds":null,"shares":null},{"id":302,"customerNumber":2,"accountNumber":4,"accountName":"acct 4","createDate":null,"positions":{"prod":{"fund":"405833.40","deposit":"6763.89","share":"405833.40","bond":"405833.40"},"ccy":{"SGD":"567672.00"}},"bonds":null,"deposits":null,"funds":null,"shares":null}]},{"customerNumber":3,"customerName":"cust3","type":"I","age":22,"homeCountry":"HK","createDate":null,"positions":{"prod":{"fund":"1696899.00","deposit":"28252.12","share":"1696899.00","bond":"1696899.00"},"ccy":{"HKD":"377568.00","SGD":"721256.00","GBP":"191464.00","USD":"909360.00"}},"accounts":[{"id":3,"customerNumber":3,"accountNumber":1,"accountName":"acct 1","createDate":null,"positions":{"prod":{"fund":"46956.80","deposit":"1173.92","share":"46956.80","bond":"46956.80"},"ccy":{"HKD":"377568.00"}},"bonds":null,"deposits":null,"funds":null,"shares":null},{"id":103,"customerNumber":3,"accountNumber":2,"accountName":"acct 2","createDate":null,"positions":{"prod":{"fund":"232104.60","deposit":"11605.23","share":"232104.60","bond":"232104.60"},"ccy":{"GBP":"191464.00"}},"bonds":null,"deposits":null,"funds":null,"shares":null},{"id":203,"customerNumber":3,"accountNumber":3,"accountName":"acct 3","createDate":null,"positions":{"prod":{"fund":"900000.00","deposit":"9000.00","share":"900000.00","bond":"900000.00"},"ccy":{"USD":"909360.00"}},"bonds":null,"deposits":null,"funds":null,"shares":null},{"id":303,"customerNumber":3,"accountNumber":4,"accountName":"acct 4","createDate":null,"positions":{"prod":{"fund":"517837.60","deposit":"6472.97","share":"517837.60","bond":"517837.60"},"ccy":{"SGD":"721256.00"}},"bonds":null,"deposits":null,"funds":null,"shares":null}]},{"customerNumber":1,"customerName":"cust1","type":"I","age":20,"homeCountry":"HK","createDate":null,"positions":{"prod":{"fund":"2007830.00","deposit":"30756.28","share":"2007830.00","bond":"2007830.00"},"ccy":{"HKD":"1010200.00","SGD":"397894.00","GBP":"802098.00","USD":"597996.00"}},"accounts":[{"id":1,"customerNumber":1,"accountNumber":1,"accountName":"acct 1","createDate":null,"positions":{"prod":{"fund":"127600.00","deposit":"1276.00","share":"127600.00","bond":"127600.00"},"ccy":{"HKD":"1010200.00"}},"bonds":null,"deposits":null,"funds":null,"shares":null},{"id":101,"customerNumber":1,"accountNumber":2,"accountName":"acct 2","createDate":null,"positions":{"prod":{"fund":"1010037.60","deposit":"12625.47","share":"1010037.60","bond":"1010037.60"},"ccy":{"GBP":"802098.00"}},"bonds":null,"deposits":null,"funds":null,"shares":null},{"id":201,"customerNumber":1,"accountNumber":3,"accountName":"acct 3","createDate":null,"positions":{"prod":{"fund":"588000.00","deposit":"9800.00","share":"588000.00","bond":"588000.00"},"ccy":{"USD":"597996.00"}},"bonds":null,"deposits":null,"funds":null,"shares":null},{"id":301,"customerNumber":1,"accountNumber":4,"accountName":"acct 4","createDate":null,"positions":{"prod":{"fund":"282192.40","deposit":"7054.81","share":"282192.40","bond":"282192.40"},"ccy":{"SGD":"397894.00"}},"bonds":null,"deposits":null,"funds":null,"shares":null}]},{"customerNumber":6,"customerName":"cust6","type":"E","age":25,"homeCountry":"HK","createDate":null,"positions":{"prod":{"fund":"1600078.00","deposit":"24495.88","share":"1600078.00","bond":"1600078.00"},"ccy":{"HKD":"808480.00","SGD":"316162.00","GBP":"640374.00","USD":"476268.00"}},"accounts":[{"id":6,"customerNumber":6,"accountNumber":1,"accountName":"acct 1","createDate":null,"positions":{"prod":{"fund":"102080.00","deposit":"1020.80","share":"102080.00","bond":"102080.00"},"ccy":{"HKD":"808480.00"}},"bonds":null,"deposits":null,"funds":null,"shares":null},{"id":106,"customerNumber":6,"accountNumber":2,"accountName":"acct 2","createDate":null,"positions":{"prod":{"fund":"805989.60","deposit":"10074.87","share":"805989.60","bond":"805989.60"},"ccy":{"GBP":"640374.00"}},"bonds":null,"deposits":null,"funds":null,"shares":null},{"id":206,"customerNumber":6,"accountNumber":3,"accountName":"acct 3","createDate":null,"positions":{"prod":{"fund":"468000.00","deposit":"7800.00","share":"468000.00","bond":"468000.00"},"ccy":{"USD":"476268.00"}},"bonds":null,"deposits":null,"funds":null,"shares":null},{"id":306,"customerNumber":6,"accountNumber":4,"accountName":"acct 4","createDate":null,"positions":{"prod":{"fund":"224008.40","deposit":"5600.21","share":"224008.40","bond":"224008.40"},"ccy":{"SGD":"316162.00"}},"bonds":null,"deposits":null,"funds":null,"shares":null}]},{"customerNumber":7,"customerName":"cust7","type":"I","age":26,"homeCountry":"HK","createDate":null,"positions":{"prod":{"fund":"1886427.60","deposit":"23243.80","share":"1886427.60","bond":"1886427.60"},"ccy":{"HKD":"160056.00","SGD":"445884.00","GBP":"758100.00","USD":"599992.00"}},"accounts":[{"id":7,"customerNumber":7,"accountNumber":1,"accountName":"acct 1","createDate":null,"positions":{"prod":{"fund":"19395.20","deposit":"969.76","share":"19395.20","bond":"19395.20"},"ccy":{"HKD":"160056.00"}},"bonds":null,"deposits":null,"funds":null,"shares":null},{"id":107,"customerNumber":7,"accountNumber":2,"accountName":"acct 2","createDate":null,"positions":{"prod":{"fund":"956475.00","deposit":"9564.75","share":"956475.00","bond":"956475.00"},"ccy":{"GBP":"758100.00"}},"bonds":null,"deposits":null,"funds":null,"shares":null},{"id":207,"customerNumber":7,"accountNumber":3,"accountName":"acct 3","createDate":null,"positions":{"prod":{"fund":"592000.00","deposit":"7400.00","share":"592000.00","bond":"592000.00"},"ccy":{"USD":"599992.00"}},"bonds":null,"deposits":null,"funds":null,"shares":null},{"id":307,"customerNumber":7,"accountNumber":4,"accountName":"acct 4","createDate":null,"positions":{"prod":{"fund":"318557.40","deposit":"5309.29","share":"318557.40","bond":"318557.40"},"ccy":{"SGD":"445884.00"}},"bonds":null,"deposits":null,"funds":null,"shares":null}]},{"customerNumber":4,"customerName":"cust4","type":"E","age":23,"homeCountry":"HK","createDate":null,"positions":{"prod":{"fund":"1301382.20","deposit":"27000.04","share":"1301382.20","bond":"1301382.20"},"ccy":{"HKD":"537152.00","SGD":"859010.00","GBP":"357048.00","USD":"180944.00"}},"accounts":[{"id":4,"customerNumber":4,"accountNumber":1,"accountName":"acct 1","createDate":null,"positions":{"prod":{"fund":"67372.80","deposit":"1122.88","share":"67372.80","bond":"67372.80"},"ccy":{"HKD":"537152.00"}},"bonds":null,"deposits":null,"funds":null,"shares":null},{"id":104,"customerNumber":4,"accountNumber":2,"accountName":"acct 2","createDate":null,"positions":{"prod":{"fund":"443804.40","deposit":"11095.11","share":"443804.40","bond":"443804.40"},"ccy":{"GBP":"357048.00"}},"bonds":null,"deposits":null,"funds":null,"shares":null},{"id":204,"customerNumber":4,"accountNumber":3,"accountName":"acct 3","createDate":null,"positions":{"prod":{"fund":"172000.00","deposit":"8600.00","share":"172000.00","bond":"172000.00"},"ccy":{"USD":"180944.00"}},"bonds":null,"deposits":null,"funds":null,"shares":null},{"id":304,"customerNumber":4,"accountNumber":4,"accountName":"acct 4","createDate":null,"positions":{"prod":{"fund":"618205.00","deposit":"6182.05","share":"618205.00","bond":"618205.00"},"ccy":{"SGD":"859010.00"}},"bonds":null,"deposits":null,"funds":null,"shares":null}]},{"customerNumber":8,"customerName":"cust8","type":"E","age":27,"homeCountry":"HK","createDate":null,"positions":{"prod":{"fund":"1793863.00","deposit":"27173.62","share":"1793863.00","bond":"1793863.00"},"ccy":{"HKD":"295776.00","SGD":"802692.00","GBP":"149668.00","USD":"1010800.00"}},"accounts":[{"id":8,"customerNumber":8,"accountNumber":1,"accountName":"acct 1","createDate":null,"positions":{"prod":{"fund":"36748.80","deposit":"918.72","share":"36748.80","bond":"36748.80"},"ccy":{"HKD":"295776.00"}},"bonds":null,"deposits":null,"funds":null,"shares":null},{"id":108,"customerNumber":8,"accountNumber":2,"accountName":"acct 2","createDate":null,"positions":{"prod":{"fund":"181092.60","deposit":"9054.63","share":"181092.60","bond":"181092.60"},"ccy":{"GBP":"149668.00"}},"bonds":null,"deposits":null,"funds":null,"shares":null},{"id":208,"customerNumber":8,"accountNumber":3,"accountName":"acct 3","createDate":null,"positions":{"prod":{"fund":"1000000.00","deposit":"10000.00","share":"1000000.00","bond":"1000000.00"},"ccy":{"USD":"1010800.00"}},"bonds":null,"deposits":null,"funds":null,"shares":null},{"id":308,"customerNumber":8,"accountNumber":4,"accountName":"acct 4","createDate":null,"positions":{"prod":{"fund":"576021.60","deposit":"7200.27","share":"576021.60","bond":"576021.60"},"ccy":{"SGD":"802692.00"}},"bonds":null,"deposits":null,"funds":null,"shares":null}]}]

/***/ }),

/***/ 1047:
/***/ (function(module, exports) {

module.exports = {"issue 20":{"shareIssueCode":"issue 20","shareIssueName":"Share Issue 20(SGD)","shareCountry":"SG","issueCode":"Issuer  20","sharePrice":20,"shareCurrency":"SGD","houseView":"BULL","creditRating":"AAA","solicite":"Y"},"issue 10":{"shareIssueCode":"issue 10","shareIssueName":"Share Issue 10(GBP)","shareCountry":"EU","issueCode":"Issuer  10","sharePrice":20,"shareCurrency":"GBP","houseView":"BULL","creditRating":"AAA","solicite":"Y"},"issue 11":{"shareIssueCode":"issue 11","shareIssueName":"Share Issue 11(USD)","shareCountry":"US","issueCode":"Issuer  11","sharePrice":100,"shareCurrency":"USD","houseView":"BULL","creditRating":"AAA","solicite":"Y"},"issue 9":{"shareIssueCode":"issue 9","shareIssueName":"Share Issue 9(HKD)","shareCountry":"HK","issueCode":"Issuer  9","sharePrice":40,"shareCurrency":"HKD","houseView":"BULL","creditRating":"AAA","solicite":"Y"},"issue 7":{"shareIssueCode":"issue 7","shareIssueName":"Share Issue 7(USD)","shareCountry":"US","issueCode":"Issuer  7","sharePrice":80,"shareCurrency":"USD","houseView":"BULL","creditRating":"AAA","solicite":"Y"},"issue 8":{"shareIssueCode":"issue 8","shareIssueName":"Share Issue 8(SGD)","shareCountry":"SG","issueCode":"Issuer  8","sharePrice":60,"shareCurrency":"SGD","houseView":"BULL","creditRating":"AAA","solicite":"Y"},"issue 16":{"shareIssueCode":"issue 16","shareIssueName":"Share Issue 16(SGD)","shareCountry":"SG","issueCode":"Issuer  16","sharePrice":100,"shareCurrency":"SGD","houseView":"BULL","creditRating":"AAA","solicite":"Y"},"issue 17":{"shareIssueCode":"issue 17","shareIssueName":"Share Issue 17(HKD)","shareCountry":"HK","issueCode":"Issuer  17","sharePrice":80,"shareCurrency":"HKD","houseView":"BULL","creditRating":"AAA","solicite":"Y"},"issue 18":{"shareIssueCode":"issue 18","shareIssueName":"Share Issue 18(GBP)","shareCountry":"EU","issueCode":"Issuer  18","sharePrice":60,"shareCurrency":"GBP","houseView":"BULL","creditRating":"AAA","solicite":"Y"},"issue 19":{"shareIssueCode":"issue 19","shareIssueName":"Share Issue 19(USD)","shareCountry":"US","issueCode":"Issuer  19","sharePrice":40,"shareCurrency":"USD","houseView":"BULL","creditRating":"AAA","solicite":"Y"},"issue 12":{"shareIssueCode":"issue 12","shareIssueName":"Share Issue 12(SGD)","shareCountry":"SG","issueCode":"Issuer  12","sharePrice":80,"shareCurrency":"SGD","houseView":"BULL","creditRating":"AAA","solicite":"Y"},"issue 13":{"shareIssueCode":"issue 13","shareIssueName":"Share Issue 13(HKD)","shareCountry":"HK","issueCode":"Issuer  13","sharePrice":60,"shareCurrency":"HKD","houseView":"BULL","creditRating":"AAA","solicite":"Y"},"issue 14":{"shareIssueCode":"issue 14","shareIssueName":"Share Issue 14(GBP)","shareCountry":"EU","issueCode":"Issuer  14","sharePrice":40,"shareCurrency":"GBP","houseView":"BULL","creditRating":"AAA","solicite":"Y"},"issue 15":{"shareIssueCode":"issue 15","shareIssueName":"Share Issue 15(USD)","shareCountry":"US","issueCode":"Issuer  15","sharePrice":20,"shareCurrency":"USD","houseView":"BULL","creditRating":"AAA","solicite":"Y"},"issue 5":{"shareIssueCode":"issue 5","shareIssueName":"Share Issue 5(HKD)","shareCountry":"HK","issueCode":"Issuer  5","sharePrice":20,"shareCurrency":"HKD","houseView":"BULL","creditRating":"AAA","solicite":"Y"},"issue 6":{"shareIssueCode":"issue 6","shareIssueName":"Share Issue 6(GBP)","shareCountry":"EU","issueCode":"Issuer  6","sharePrice":100,"shareCurrency":"GBP","houseView":"BULL","creditRating":"AAA","solicite":"Y"},"issue 3":{"shareIssueCode":"issue 3","shareIssueName":"Share Issue 3(USD)","shareCountry":"US","issueCode":"Issuer  3","sharePrice":60,"shareCurrency":"USD","houseView":"BULL","creditRating":"AAA","solicite":"Y"},"issue 4":{"shareIssueCode":"issue 4","shareIssueName":"Share Issue 4(SGD)","shareCountry":"SG","issueCode":"Issuer  4","sharePrice":40,"shareCurrency":"SGD","houseView":"BULL","creditRating":"AAA","solicite":"Y"},"issue 1":{"shareIssueCode":"issue 1","shareIssueName":"Share Issue 1(HKD)","shareCountry":"HK","issueCode":"Issuer  1","sharePrice":100,"shareCurrency":"HKD","houseView":"BULL","creditRating":"AAA","solicite":"Y"},"issue 2":{"shareIssueCode":"issue 2","shareIssueName":"Share Issue 2(GBP)","shareCountry":"EU","issueCode":"Issuer  2","sharePrice":80,"shareCurrency":"GBP","houseView":"BULL","creditRating":"AAA","solicite":"Y"}}

/***/ }),

/***/ 1048:
/***/ (function(module, exports) {

module.exports = {"name":"GPB","position":"488739015.70","clients":100,"entries":[{"name":"HK","position":"196311936.10","clients":40,"entries":[{"name":"PRIVATE BANK HK","position":"196311936.10","clients":40,"entries":[{"name":"RM ONE","position":"50098396.30","clients":10,"entries":[]},{"name":"RM TWO","position":"48849578.20","clients":10,"entries":[]},{"name":"RM THREE","position":"47265565.30","clients":10,"entries":[]},{"name":"RM FOUR","position":"50098396.30","clients":10,"entries":[]}]}]},{"name":"SG","position":"146213539.80","clients":30,"entries":[{"name":"PRIVATE BANK SG","position":"146213539.80","clients":30,"entries":[{"name":"RM FIVE","position":"48849578.20","clients":10,"entries":[]},{"name":"RM SIX","position":"47265565.30","clients":10,"entries":[]},{"name":"RM SEVEN","position":"50098396.30","clients":10,"entries":[]}]}]},{"name":"CN","position":"146213539.80","clients":30,"entries":[{"name":"PRIVATE BANK CN","position":"146213539.80","clients":30,"entries":[{"name":"RM EIGHT","position":"48849578.20","clients":10,"entries":[]},{"name":"RM NINE","position":"47265565.30","clients":10,"entries":[]},{"name":"RM TEN","position":"50098396.30","clients":10,"entries":[]}]}]}]}

/***/ }),

/***/ 1049:
/***/ (function(module, exports) {

module.exports = [{"customerNumber":1,"customerName":"cust1","type":"I","period":20,"region":"HK","bookingEntity":"HK"},{"customerNumber":2,"customerName":"cust2","type":"E","period":21,"region":"HK","bookingEntity":"HK"},{"customerNumber":5,"customerName":"cust5","type":"I","period":24,"region":"HK","bookingEntity":"HK"},{"customerNumber":85,"customerName":"cust85","type":"I","period":55,"region":"CN","bookingEntity":"CN"},{"customerNumber":9,"customerName":"cust9","type":"I","period":28,"region":"HK","bookingEntity":"HK"},{"customerNumber":68,"customerName":"cust68","type":"E","period":38,"region":"SG","bookingEntity":"SG"},{"customerNumber":84,"customerName":"cust84","type":"E","period":54,"region":"CN","bookingEntity":"CN"},{"customerNumber":4,"customerName":"cust4","type":"E","period":23,"region":"HK","bookingEntity":"HK"},{"customerNumber":99,"customerName":"cust99","type":"I","period":69,"region":"CN","bookingEntity":"CN"},{"customerNumber":29,"customerName":"cust29","type":"I","period":48,"region":"HK","bookingEntity":"HK"},{"customerNumber":76,"customerName":"cust76","type":"E","period":46,"region":"SG","bookingEntity":"CN"},{"customerNumber":82,"customerName":"cust82","type":"E","period":52,"region":"CN","bookingEntity":"CN"},{"customerNumber":77,"customerName":"cust77","type":"I","period":47,"region":"SG","bookingEntity":"CN"},{"customerNumber":79,"customerName":"cust79","type":"I","period":49,"region":"SG","bookingEntity":"CN"},{"customerNumber":75,"customerName":"cust75","type":"I","period":45,"region":"SG","bookingEntity":"CN"},{"customerNumber":74,"customerName":"cust74","type":"E","period":44,"region":"SG","bookingEntity":"CN"},{"customerNumber":71,"customerName":"cust71","type":"I","period":41,"region":"SG","bookingEntity":"CN"},{"customerNumber":65,"customerName":"cust65","type":"I","period":35,"region":"SG","bookingEntity":"SG"},{"customerNumber":62,"customerName":"cust62","type":"E","period":32,"region":"SG","bookingEntity":"SG"},{"customerNumber":42,"customerName":"cust42","type":"E","period":61,"region":"SG","bookingEntity":"SG"},{"customerNumber":59,"customerName":"cust59","type":"I","period":29,"region":"SG","bookingEntity":"SG"},{"customerNumber":55,"customerName":"cust55","type":"I","period":25,"region":"SG","bookingEntity":"SG"},{"customerNumber":51,"customerName":"cust51","type":"I","period":21,"region":"SG","bookingEntity":"SG"},{"customerNumber":49,"customerName":"cust49","type":"I","period":68,"region":"SG","bookingEntity":"SG"},{"customerNumber":41,"customerName":"cust41","type":"I","period":60,"region":"SG","bookingEntity":"SG"},{"customerNumber":43,"customerName":"cust43","type":"I","period":62,"region":"SG","bookingEntity":"SG"},{"customerNumber":40,"customerName":"cust40","type":"E","period":59,"region":"HK","bookingEntity":"HK"},{"customerNumber":100,"customerName":"cust100","type":"E","period":70,"region":"CN","bookingEntity":"CN"},{"customerNumber":15,"customerName":"cust15","type":"I","period":34,"region":"HK","bookingEntity":"HK"},{"customerNumber":12,"customerName":"cust12","type":"E","period":31,"region":"HK","bookingEntity":"HK"},{"customerNumber":16,"customerName":"cust16","type":"E","period":35,"region":"HK","bookingEntity":"HK"},{"customerNumber":17,"customerName":"cust17","type":"I","period":36,"region":"HK","bookingEntity":"HK"},{"customerNumber":19,"customerName":"cust19","type":"I","period":38,"region":"HK","bookingEntity":"HK"},{"customerNumber":21,"customerName":"cust21","type":"I","period":40,"region":"HK","bookingEntity":"HK"},{"customerNumber":25,"customerName":"cust25","type":"I","period":44,"region":"HK","bookingEntity":"HK"},{"customerNumber":31,"customerName":"cust31","type":"I","period":50,"region":"HK","bookingEntity":"HK"},{"customerNumber":38,"customerName":"cust38","type":"E","period":57,"region":"HK","bookingEntity":"HK"},{"customerNumber":36,"customerName":"cust36","type":"E","period":55,"region":"HK","bookingEntity":"HK"},{"customerNumber":37,"customerName":"cust37","type":"I","period":56,"region":"HK","bookingEntity":"HK"},{"customerNumber":66,"customerName":"cust66","type":"E","period":36,"region":"SG","bookingEntity":"SG"},{"customerNumber":78,"customerName":"cust78","type":"E","period":48,"region":"SG","bookingEntity":"CN"},{"customerNumber":81,"customerName":"cust81","type":"I","period":51,"region":"CN","bookingEntity":"CN"},{"customerNumber":86,"customerName":"cust86","type":"E","period":56,"region":"CN","bookingEntity":"CN"},{"customerNumber":89,"customerName":"cust89","type":"I","period":59,"region":"CN","bookingEntity":"CN"},{"customerNumber":91,"customerName":"cust91","type":"I","period":61,"region":"CN","bookingEntity":"CN"},{"customerNumber":92,"customerName":"cust92","type":"E","period":62,"region":"CN","bookingEntity":"CN"},{"customerNumber":90,"customerName":"cust90","type":"E","period":60,"region":"CN","bookingEntity":"CN"},{"customerNumber":93,"customerName":"cust93","type":"I","period":63,"region":"CN","bookingEntity":"CN"},{"customerNumber":98,"customerName":"cust98","type":"E","period":68,"region":"CN","bookingEntity":"CN"},{"customerNumber":96,"customerName":"cust96","type":"E","period":66,"region":"CN","bookingEntity":"CN"},{"customerNumber":61,"customerName":"cust61","type":"I","period":31,"region":"SG","bookingEntity":"SG"},{"customerNumber":60,"customerName":"cust60","type":"E","period":30,"region":"SG","bookingEntity":"SG"},{"customerNumber":33,"customerName":"cust33","type":"I","period":52,"region":"HK","bookingEntity":"HK"},{"customerNumber":34,"customerName":"cust34","type":"E","period":53,"region":"HK","bookingEntity":"HK"},{"customerNumber":26,"customerName":"cust26","type":"E","period":45,"region":"HK","bookingEntity":"HK"},{"customerNumber":22,"customerName":"cust22","type":"E","period":41,"region":"HK","bookingEntity":"HK"},{"customerNumber":23,"customerName":"cust23","type":"I","period":42,"region":"HK","bookingEntity":"HK"},{"customerNumber":20,"customerName":"cust20","type":"E","period":39,"region":"HK","bookingEntity":"HK"},{"customerNumber":18,"customerName":"cust18","type":"E","period":37,"region":"HK","bookingEntity":"HK"},{"customerNumber":14,"customerName":"cust14","type":"E","period":33,"region":"HK","bookingEntity":"HK"},{"customerNumber":11,"customerName":"cust11","type":"I","period":30,"region":"HK","bookingEntity":"HK"},{"customerNumber":10,"customerName":"cust10","type":"E","period":29,"region":"HK","bookingEntity":"HK"},{"customerNumber":97,"customerName":"cust97","type":"I","period":67,"region":"CN","bookingEntity":"CN"},{"customerNumber":8,"customerName":"cust8","type":"E","period":27,"region":"HK","bookingEntity":"HK"},{"customerNumber":45,"customerName":"cust45","type":"I","period":64,"region":"SG","bookingEntity":"SG"},{"customerNumber":47,"customerName":"cust47","type":"I","period":66,"region":"SG","bookingEntity":"SG"},{"customerNumber":50,"customerName":"cust50","type":"E","period":69,"region":"SG","bookingEntity":"SG"},{"customerNumber":52,"customerName":"cust52","type":"E","period":22,"region":"SG","bookingEntity":"SG"},{"customerNumber":56,"customerName":"cust56","type":"E","period":26,"region":"SG","bookingEntity":"SG"},{"customerNumber":58,"customerName":"cust58","type":"E","period":28,"region":"SG","bookingEntity":"SG"},{"customerNumber":63,"customerName":"cust63","type":"I","period":33,"region":"SG","bookingEntity":"SG"},{"customerNumber":67,"customerName":"cust67","type":"I","period":37,"region":"SG","bookingEntity":"SG"},{"customerNumber":6,"customerName":"cust6","type":"E","period":25,"region":"HK","bookingEntity":"HK"},{"customerNumber":69,"customerName":"cust69","type":"I","period":39,"region":"SG","bookingEntity":"SG"},{"customerNumber":72,"customerName":"cust72","type":"E","period":42,"region":"SG","bookingEntity":"CN"},{"customerNumber":73,"customerName":"cust73","type":"I","period":43,"region":"SG","bookingEntity":"CN"},{"customerNumber":27,"customerName":"cust27","type":"I","period":46,"region":"HK","bookingEntity":"HK"},{"customerNumber":80,"customerName":"cust80","type":"E","period":50,"region":"SG","bookingEntity":"CN"},{"customerNumber":30,"customerName":"cust30","type":"E","period":49,"region":"HK","bookingEntity":"HK"},{"customerNumber":32,"customerName":"cust32","type":"E","period":51,"region":"HK","bookingEntity":"HK"},{"customerNumber":3,"customerName":"cust3","type":"I","period":22,"region":"HK","bookingEntity":"HK"},{"customerNumber":70,"customerName":"cust70","type":"E","period":40,"region":"SG","bookingEntity":"SG"},{"customerNumber":64,"customerName":"cust64","type":"E","period":34,"region":"SG","bookingEntity":"SG"},{"customerNumber":57,"customerName":"cust57","type":"I","period":27,"region":"SG","bookingEntity":"SG"},{"customerNumber":54,"customerName":"cust54","type":"E","period":24,"region":"SG","bookingEntity":"SG"},{"customerNumber":53,"customerName":"cust53","type":"I","period":23,"region":"SG","bookingEntity":"SG"},{"customerNumber":48,"customerName":"cust48","type":"E","period":67,"region":"SG","bookingEntity":"SG"},{"customerNumber":46,"customerName":"cust46","type":"E","period":65,"region":"SG","bookingEntity":"SG"},{"customerNumber":39,"customerName":"cust39","type":"I","period":58,"region":"HK","bookingEntity":"HK"},{"customerNumber":44,"customerName":"cust44","type":"E","period":63,"region":"SG","bookingEntity":"SG"},{"customerNumber":94,"customerName":"cust94","type":"E","period":64,"region":"CN","bookingEntity":"CN"},{"customerNumber":13,"customerName":"cust13","type":"I","period":32,"region":"HK","bookingEntity":"HK"},{"customerNumber":24,"customerName":"cust24","type":"E","period":43,"region":"HK","bookingEntity":"HK"},{"customerNumber":28,"customerName":"cust28","type":"E","period":47,"region":"HK","bookingEntity":"HK"},{"customerNumber":35,"customerName":"cust35","type":"I","period":54,"region":"HK","bookingEntity":"HK"},{"customerNumber":88,"customerName":"cust88","type":"E","period":58,"region":"CN","bookingEntity":"CN"},{"customerNumber":83,"customerName":"cust83","type":"I","period":53,"region":"CN","bookingEntity":"CN"},{"customerNumber":7,"customerName":"cust7","type":"I","period":26,"region":"HK","bookingEntity":"HK"},{"customerNumber":87,"customerName":"cust87","type":"I","period":57,"region":"CN","bookingEntity":"CN"},{"customerNumber":95,"customerName":"cust95","type":"I","period":65,"region":"CN","bookingEntity":"CN"}]

/***/ }),

/***/ 350:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iSFNCQ194NUZfTUFTVEVSQlJBTkRfeDVGX0xPR09feDVGX1dXX3g1Rl9DTVlLIg0KCSB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDE3NyAzOCINCgkgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTc3IDM4OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDojRkZGRkZGO30NCgkuc3Qxe2ZpbGw6I0RCMDAxMTt9DQoJLnN0MntkaXNwbGF5Om5vbmU7fQ0KCS5zdDN7ZGlzcGxheTppbmxpbmU7fQ0KCS5zdDR7ZGlzcGxheTpub25lO2ZpbGw6I0ZFRjM4Mjt9DQo8L3N0eWxlPg0KPGc+DQoJPHBhdGggZD0iTTk0LjMsMjAuMWgtNi43djYuNmgtMy40VjExLjJoMy40djYuM2g2Ljd2LTYuM2gzLjR2MTUuNWgtMy40VjIwLjF6Ii8+DQoJPHBhdGggZD0iTTEwNS44LDI3Yy0zLjMsMC02LjEtMS4zLTYuMi01aDMuNGMwLDEuNywxLDIuNiwyLjksMi42YzEuNCwwLDIuOS0wLjcsMi45LTIuMmMwLTEuMi0xLjEtMS42LTIuOC0yLjFsLTEuMS0wLjMNCgkJYy0yLjQtMC43LTQuOS0xLjctNC45LTQuNGMwLTMuNSwzLjItNC42LDYuMi00LjZjMywwLDUuNiwxLjEsNS42LDQuNWgtMy40Yy0wLjEtMS40LTAuOS0yLjItMi41LTIuMmMtMS4yLDAtMi41LDAuNy0yLjUsMg0KCQljMCwxLjEsMSwxLjUsMy4yLDIuMmwxLjMsMC40YzIuNywwLjgsNC4zLDEuOCw0LjMsNC4zQzExMi4yLDI1LjcsMTA4LjgsMjcsMTA1LjgsMjd6Ii8+DQoJPHBhdGggZD0iTTExNC4xLDExLjJoNS40YzEuNywwLDIuNCwwLDMsMC4yYzEuOSwwLjQsMy4zLDEuNywzLjMsMy43YzAsMi0xLjMsMy0zLjEsMy41YzIuMSwwLjQsMy42LDEuNSwzLjYsMy44DQoJCWMwLDMuNS0zLjUsNC4zLTYuMiw0LjNoLTYuMVYxMS4yeiBNMTE5LjUsMTcuN2MxLjUsMCwzLTAuMywzLTIuMWMwLTEuNi0xLjQtMi0yLjgtMmgtMi40djQuMUgxMTkuNXogTTExOS45LDI0LjQNCgkJYzEuNiwwLDMuMS0wLjQsMy4xLTIuM2MwLTEuOC0xLjMtMi4zLTIuOS0yLjNoLTIuN3Y0LjVIMTE5Ljl6Ii8+DQoJPHBhdGggZD0iTTEzNS4yLDI3Yy01LDAtNy4zLTMuMi03LjMtNy45YzAtNC43LDIuNS04LjIsNy40LTguMmMzLjEsMCw2LjEsMS40LDYuMiw0LjloLTMuNWMtMC4yLTEuNS0xLjItMi40LTIuNy0yLjQNCgkJYy0zLDAtMy45LDMuMy0zLjksNS43YzAsMi41LDAuOSw1LjMsMy44LDUuM2MxLjUsMCwyLjYtMC44LDIuOS0yLjRoMy41QzE0MS4yLDI1LjcsMTM4LjQsMjcsMTM1LjIsMjd6Ii8+DQoJPGc+DQoJCTxyZWN0IHg9IjIyLjUiIHk9IjAuNSIgY2xhc3M9InN0MCIgd2lkdGg9IjM3IiBoZWlnaHQ9IjM3Ii8+DQoJCTxwb2x5Z29uIGNsYXNzPSJzdDEiIHBvaW50cz0iNTkuNiwzNy41IDc4LjEsMTkgNTkuNiwwLjUgNTkuNiwwLjUgCQkiLz4NCgkJPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIyMi41LDM3LjUgNCwxOSAyMi41LDAuNSAyMi41LDAuNSAJCSIvPg0KCQk8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjU5LjYsMC41IDQxLDE5IDIyLjUsMC41IDIyLjUsMC41IAkJIi8+DQoJCTxwb2x5Z29uIGNsYXNzPSJzdDEiIHBvaW50cz0iMjIuNSwzNy41IDQxLDE5IDU5LjYsMzcuNSA1OS42LDM3LjUgCQkiLz4NCgk8L2c+DQo8L2c+DQo8ZyBjbGFzcz0ic3QyIj4NCgk8cGF0aCBjbGFzcz0ic3QzIiBkPSJNODguNiwxMy44bDAuMSwwLjFsMS4yLTEuN2wtMC4xLTAuMUM4OSwxMSw4Nyw5LjgsODUuNiw5LjJsLTAuMSwwbC0xLDEuNWwwLjIsMC4xDQoJCUM4Ni4xLDExLjMsODcuNSwxMi4zLDg4LjYsMTMuOHoiLz4NCgk8cGF0aCBjbGFzcz0ic3QzIiBkPSJNODguMSwxOC4zbDAuMSwwLjFsMS4xLTEuN2wtMC4xLTAuMWMtMC45LTEuMS0yLjktMi40LTQuNC0yLjlsLTAuMSwwbC0xLDEuNmwwLjIsMC4xDQoJCUM4NS4yLDE1LjgsODYuOSwxNi45LDg4LjEsMTguM3oiLz4NCgk8cG9seWdvbiBjbGFzcz0ic3QzIiBwb2ludHM9IjkzLjQsMTEuNiAxMDIuNywxMS42IDEwMi43LDkuNyA5MS40LDkuNyA5MS40LDI3LjUgMTAzLjYsMjcuNSAxMDMuNiwyNS42IDkzLjQsMjUuNiAJIi8+DQoJPHBhdGggY2xhc3M9InN0MyIgZD0iTTg4LjUsMTkuNmMtMS4xLDMtMi4yLDUuMi00LjUsNy41bC0wLjEsMC4xbDEuNSwxLjRsMC4xLTAuMWMyLjUtMi4zLDMuOC01LjYsNC42LThsMC4xLTAuMmwtMS43LTAuOA0KCQlMODguNSwxOS42eiIvPg0KCTxwb2x5Z29uIGNsYXNzPSJzdDMiIHBvaW50cz0iMTE5LjcsMjEuNiAxMTkuNywxOC42IDEyNywxOC42IDEyNywxNi43IDExOS43LDE2LjcgMTE5LjcsMTMuOSAxMjcuMywxMy45IDEyNy4zLDEyIDExOS43LDEyIA0KCQkxMTkuNyw4LjggMTE3LjcsOC44IDExNy43LDEyIDExMCwxMiAxMTAsMTMuOSAxMTcuNywxMy45IDExNy43LDE2LjcgMTEwLjMsMTYuNyAxMTAuMywxOC42IDExNy43LDE4LjYgMTE3LjcsMjEuNiAxMDkuMSwyMS42IA0KCQkxMDkuMSwyMy41IDExNy43LDIzLjUgMTE3LjcsMjkuMiAxMTkuNywyOS4yIDExOS43LDIzLjUgMTI4LjQsMjMuNSAxMjguNCwyMS42IAkiLz4NCgk8ZyBjbGFzcz0ic3QzIj4NCgkJPHJlY3QgeD0iMjIuNSIgeT0iMC41IiBjbGFzcz0ic3QwIiB3aWR0aD0iMzciIGhlaWdodD0iMzciLz4NCgkJPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSI1OS42LDAuNSA1OS42LDM3LjUgNzguMSwxOSAJCSIvPg0KCQk8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjIyLjUsMC41IDQxLDE5IDU5LjYsMC41IAkJIi8+DQoJCTxwb2x5Z29uIGNsYXNzPSJzdDEiIHBvaW50cz0iMjIuNSwwLjUgNCwxOSAyMi41LDM3LjUgCQkiLz4NCgkJPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIyMi41LDM3LjUgNTkuNiwzNy41IDQxLDE5IAkJIi8+DQoJPC9nPg0KPC9nPg0KPGcgY2xhc3M9InN0MiI+DQoJPGcgY2xhc3M9InN0MyI+DQoJPC9nPg0KCTxnIGNsYXNzPSJzdDMiPg0KCTwvZz4NCgk8ZyBjbGFzcz0ic3QzIj4NCgk8L2c+DQoJPGcgY2xhc3M9InN0MyI+DQoJPC9nPg0KPC9nPg0KPGcgY2xhc3M9InN0MiI+DQoJPGcgY2xhc3M9InN0MyI+DQoJCTxnPg0KCQkJPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSI3OC4yLDE5IDU5LjYsMC41IDU5LjYsMzcuNiAJCQkiLz4NCgkJCTxwb2x5Z29uIGNsYXNzPSJzdDEiIHBvaW50cz0iNDEuMSwxOSA1OS42LDAuNSAyMi41LDAuNSAJCQkiLz4NCgkJCTxwb2x5Z29uIGNsYXNzPSJzdDEiIHBvaW50cz0iNCwxOSAyMi41LDM3LjYgMjIuNSwwLjUgCQkJIi8+DQoJCQk8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjQxLjEsMTkgMjIuNSwzNy42IDU5LjYsMzcuNiAJCQkiLz4NCgkJPC9nPg0KCTwvZz4NCgk8cGF0aCBjbGFzcz0ic3QzIiBkPSJNODQuNCwxNS4ybDEtMS4xYzEsMC43LDIuNCwxLjksMy4xLDMuM2wtMS4xLDEuMUM4Ni44LDE3LjQsODUuNywxNiw4NC40LDE1LjJ6IE04NC40LDI4LjQNCgkJYzIuMi0yLjUsMy4yLTUuNywzLjctOC4ybDEuMywwLjZjLTAuNSwzLTIsNi4xLTMuOSw4LjVMODQuNCwyOC40eiBNODUuOSwxMC4xTDg3LDkuMmMxLjIsMC43LDIuMSwxLjYsMi44LDIuOEw4OC43LDEzDQoJCUM4OCwxMS41LDg2LjksMTAuNyw4NS45LDEwLjF6IE05MC4yLDkuOGgxNXYxLjRoLTYuNmMwLjgsMC42LDEuMywxLjEsMS44LDJsLTAuNiwwLjRoNVYxNWgtNC42djIuNGgzLjh2MS40aC0zLjh2Mi4zaDMuOHYxLjRoLTMuOA0KCQl2Mi42aDQuN3YxLjRIOTMuOGwwLTguN2MtMC4zLDAuNS0wLjgsMS0xLjIsMS41Yy0wLjItMC4xLTAuNi0wLjQtMC45LTAuOGMwLDAuOCwwLDYuNSwwLDkuNWgxNGwwLDEuNGMtNS4yLDAtMTAuMywwLTE1LjUsMA0KCQlMOTAuMiw5Ljh6IE05MS43LDE4LjJjMC45LTEsMi43LTQuNCwzLjEtN2gtMy4xVjE4LjJ6IE05Ny45LDExLjJoLTNjMC40LDAuMiwwLjcsMC4zLDEuMiwwLjVjLTAuMSwwLjctMC4zLDEuMy0wLjUsMS45SDk5DQoJCWMtMC4zLTAuNy0xLTEuMy0xLjctMS45TDk3LjksMTEuMnogTTk1LjIsMTcuNGgzLjVWMTVoLTMuNVYxNy40eiBNOTUuMiwyMS4xaDMuNXYtMi4zaC0zLjVWMjEuMXogTTk1LjIsMjIuNXYyLjZoMy41di0yLjZIOTUuMnoiDQoJCS8+DQoJPHBhdGggY2xhc3M9InN0MyIgZD0iTTExNywyOGMtMC4yLTAuNS0wLjctMC45LTEuMS0xLjNsLTAuNi0wLjVsLTIsMGwwLTRsMTMuOCwwbDAsMy45aC0yLjNjLTAuMywwLjctMC43LDEuMy0xLjIsMS45bDYuOCwwdjEuNA0KCQlIMTEwVjI4TDExNywyOHogTTEyOS42LDIxLjJoLTE4Ljl2LTEuM2wxOC45LDBWMjEuMnogTTEyNy40LDE3LjZsMC03aDEuNWwwLDguM2gtMTcuNXYtOC4ybDEuNSwwdjYuOWw2LjYsMFY5LjJoMS41djguNEgxMjcuNHoNCgkJIE0xMTguNywxNi4zaC0ybDAsMS4xaC0xLjRsMC0xLjFoLTEuOWwwLTFoMS45bDAtMS4zbC0xLjksMHYtMWgxLjlsMC0xLjJsLTEuOSwwbDAtMWgxLjlWOS41aDEuNHYxLjNsMiwwbDAsMC45aC0yVjEzbDIsMHYxaC0yDQoJCXYxLjNoMkwxMTguNywxNi4zeiBNMTE0LjgsMjVsMTAuOCwwdi0xLjZsLTEwLjgsMEwxMTQuOCwyNXogTTEyMS43LDI4YzAuNy0wLjUsMS4yLTEuMiwxLjUtMS45aC02YzAuNiwwLjYsMS4xLDEuMiwxLjQsMS45DQoJCUwxMjEuNywyOHogTTEyNC45LDE3LjRoLTEuM3YtMS4ybC0yLDB2LTFoMnYtMS4zaC0yVjEzaDJsMC0xLjNoLTJsMC0wLjlsMS45LDBsMC0xLjNoMS4zdjEuM2wyLDB2MC45bC0yLDBsMCwxLjNsMiwwbDAsMC45aC0ydjEuMg0KCQloMi4xdjFoLTJMMTI0LjksMTcuNHoiLz4NCjwvZz4NCjxyZWN0IHk9IjE5LjQiIGNsYXNzPSJzdDQiIHdpZHRoPSI0IiBoZWlnaHQ9IjQiLz4NCjwvc3ZnPg0K"

/***/ }),

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mock__ = __webpack_require__(442);


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__mock__["a" /* default */]);

/***/ }),

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__views_Login_vue__ = __webpack_require__(977);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__views_Login_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__views_Login_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views_404_vue__ = __webpack_require__(975);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views_404_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__views_404_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_Home_vue__ = __webpack_require__(976);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_Home_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__views_Home_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__views_Main_vue__ = __webpack_require__(978);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__views_Main_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__views_Main_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__views_managerNav_Management_vue__ = __webpack_require__(982);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__views_managerNav_Management_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__views_managerNav_Management_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__views_managerNav_CustomerTrends_vue__ = __webpack_require__(981);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__views_managerNav_CustomerTrends_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__views_managerNav_CustomerTrends_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__views_managerNav_CustomerDistribution_vue__ = __webpack_require__(980);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__views_managerNav_CustomerDistribution_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__views_managerNav_CustomerDistribution_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__views_managerNav_customersChart_vue__ = __webpack_require__(983);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__views_managerNav_customersChart_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__views_managerNav_customersChart_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__views_userNav_DailyEvent_vue__ = __webpack_require__(988);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__views_userNav_DailyEvent_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__views_userNav_DailyEvent_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__views_userNav_CustomerPositionView_vue__ = __webpack_require__(987);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__views_userNav_CustomerPositionView_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__views_userNav_CustomerPositionView_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__views_userNav_CustomerPosition_vue__ = __webpack_require__(985);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__views_userNav_CustomerPosition_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__views_userNav_CustomerPosition_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__views_userNav_CustomerPositionInfo_vue__ = __webpack_require__(986);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__views_userNav_CustomerPositionInfo_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__views_userNav_CustomerPositionInfo_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__views_userNav_Transaction_vue__ = __webpack_require__(989);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__views_userNav_Transaction_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__views_userNav_Transaction_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__views_userNav_Connectivity_vue__ = __webpack_require__(984);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__views_userNav_Connectivity_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__views_userNav_Connectivity_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__views_adminNav_CreateUser_vue__ = __webpack_require__(979);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__views_adminNav_CreateUser_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__views_adminNav_CreateUser_vue__);





// manager template





// user(rm) template







// admin template


let routes = [{
    path: '/login',
    component: __WEBPACK_IMPORTED_MODULE_0__views_Login_vue___default.a,
    name: '',
    hidden: true
}, {
    path: '/404',
    component: __WEBPACK_IMPORTED_MODULE_1__views_404_vue___default.a,
    name: '',
    hidden: true
},
// =======================
// manager nav
// =======================
{
    path: '/',
    component: __WEBPACK_IMPORTED_MODULE_2__views_Home_vue___default.a,
    name: 'Management Overview',
    iconCls: 'fa fa-sitemap',
    leaf: true, //只有一个节点，
    meta: "manager",
    children: [{ path: '/', component: __WEBPACK_IMPORTED_MODULE_4__views_managerNav_Management_vue___default.a, name: 'Organization Structure' }]
}, {
    path: '/',
    component: __WEBPACK_IMPORTED_MODULE_2__views_Home_vue___default.a,
    name: 'Customer Overview',
    iconCls: 'el-icon-date',
    // leaf: true,//只有一个节点
    meta: "manager",
    children: [{ path: '/customer-distribution', component: __WEBPACK_IMPORTED_MODULE_6__views_managerNav_CustomerDistribution_vue___default.a, name: 'Customer Distribution' }, { path: '/customer-trends-report', component: __WEBPACK_IMPORTED_MODULE_5__views_managerNav_CustomerTrends_vue___default.a, name: 'Customer Trends Report' }]
}, {
    path: '/',
    component: __WEBPACK_IMPORTED_MODULE_2__views_Home_vue___default.a,
    name: '',
    iconCls: 'el-icon-news',
    leaf: true, //只有一个节点
    meta: "manager",
    children: [{ path: '/asset-overview', component: __WEBPACK_IMPORTED_MODULE_7__views_managerNav_customersChart_vue___default.a, name: 'Asset Overview' }]
},
// =======================
// rm nav
// =======================
{
    path: '/',
    component: __WEBPACK_IMPORTED_MODULE_2__views_Home_vue___default.a,
    name: 'Customer Position',
    iconCls: 'fa fa-object-group', //图标样式class
    // leaf: true,//只有一个节点
    meta: "rm",
    children: [{
        path: '/customer-position/',
        component: __WEBPACK_IMPORTED_MODULE_9__views_userNav_CustomerPositionView_vue___default.a,
        name: 'Customer Position',
        children: [{
            path: '/',
            component: __WEBPACK_IMPORTED_MODULE_10__views_userNav_CustomerPosition_vue___default.a,
            name: 'Customer Position'
        }, {
            path: '/customer-position/:id',
            component: __WEBPACK_IMPORTED_MODULE_11__views_userNav_CustomerPositionInfo_vue___default.a,
            name: 'Customer Position Info'
        }]
    }, { path: '/customer-position-info', component: __WEBPACK_IMPORTED_MODULE_11__views_userNav_CustomerPositionInfo_vue___default.a, name: 'Customer Position Info', hidden: true }]
}, {
    path: '/',
    component: __WEBPACK_IMPORTED_MODULE_2__views_Home_vue___default.a,
    name: 'Customer Trade',
    iconCls: 'fa fa-flag-checkered', //图标样式class
    // leaf: true,//只有一个节点
    meta: "rm",
    children: [{ path: '/share-transaction-input', component: __WEBPACK_IMPORTED_MODULE_12__views_userNav_Transaction_vue___default.a, name: 'Share Transaction Input' }, { path: '/connectivity', component: __WEBPACK_IMPORTED_MODULE_13__views_userNav_Connectivity_vue___default.a, name: 'Connectivity' }]
}, {
    path: '/',
    component: __WEBPACK_IMPORTED_MODULE_2__views_Home_vue___default.a,
    name: '',
    iconCls: 'fa fa-cubes', //图标样式class
    leaf: true, //只有一个节点
    meta: "rm",
    children: [{ path: '/daily-event', component: __WEBPACK_IMPORTED_MODULE_8__views_userNav_DailyEvent_vue___default.a, name: 'Daily Event' }]
},
// =======================
// admin nav
// =======================   
{
    path: '/',
    component: __WEBPACK_IMPORTED_MODULE_2__views_Home_vue___default.a,
    name: '',
    iconCls: 'fa fa-cubes', //图标样式class
    leaf: true, //只有一个节点
    meta: "admin",
    children: [{ path: '/create-user', component: __WEBPACK_IMPORTED_MODULE_14__views_adminNav_CreateUser_vue___default.a, name: 'Create User' }]
}, {
    path: '*',
    hidden: true,
    redirect: { path: '/404' }
}];

/* harmony default export */ __webpack_exports__["a"] = (routes);

/***/ }),

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions__ = __webpack_require__(443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__getters__ = __webpack_require__(444);





__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */]);

// 应用初始状态
const state = {
    count: 10

    // 定义所需的 mutations
};const mutations = {
    INCREMENT(state) {
        state.count++;
    },
    DECREMENT(state) {
        state.count--;
    }
};

// 创建 store 实例
/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */].Store({
    actions: __WEBPACK_IMPORTED_MODULE_2__actions__,
    getters: __WEBPACK_IMPORTED_MODULE_3__getters__,
    state,
    mutations
}));

/***/ }),

/***/ 376:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 377:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 378:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 379:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(960)

var Component = __webpack_require__(27)(
  /* script */
  __webpack_require__(424),
  /* template */
  __webpack_require__(1000),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 424:
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

/* harmony default export */ __webpack_exports__["default"] = ({
	name: 'app',
	components: {}
});

/***/ }),

/***/ 425:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_api__ = __webpack_require__(54);
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



/* harmony default export */ __webpack_exports__["default"] = ({
	data() {
		return {
			sysLogo: __webpack_require__(350),
			sysName: 'Private Banking',
			sysLogoTxt: 'HSBC',
			collapsed: false,
			sysUserName: '',
			sysMeta: '',
			sysUserAvatar: __webpack_require__(974),
			form: {
				name: '',
				region: '',
				date1: '',
				date2: '',
				delivery: false,
				type: [],
				resource: '',
				desc: ''
			}
		};
	},
	computed: {
		businessDate() {
			return this.nowDate("yyyy-MM-dd");
		}
	},
	created() {
		Date.prototype.format = function (format) {
			var o = {
				"M+": this.getMonth() + 1, //month
				"d+": this.getDate(), //day
				"h+": this.getHours(), //hour
				"m+": this.getMinutes(), //minute
				"s+": this.getSeconds(), //second
				"q+": Math.floor((this.getMonth() + 3) / 3), //quarter
				"S": this.getMilliseconds() //millisecond
			};
			if (/(y+)/.test(format)) format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
			for (var k in o) if (new RegExp("(" + k + ")").test(format)) format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
			return format;
		};
	},
	methods: {
		nowDate(opt) {
			return new Date().format(opt);
		},
		onSubmit() {
			console.log('submit!');
		},
		handleopen() {
			//console.log('handleopen');
		},
		handleclose() {
			//console.log('handleclose');
		},
		handleselect: function (a, b) {},
		//退出登录
		logout: function () {
			let _this = this;
			this.$confirm('Are you sure you want to quit??', 'Tips', {
				//type: 'warning'
			}).then(() => {
				sessionStorage.removeItem('user');
				_this.$router.push('/login');
			}).catch(() => {});
		},
		//折叠导航栏
		collapse: function () {
			this.collapsed = !this.collapsed;
		},
		showMenu(i, status) {
			this.$refs.menuCollapsed.getElementsByClassName('submenu-hook-' + i)[0].style.display = status ? 'block' : 'none';
		}
	},
	mounted() {
		let user = sessionStorage.getItem('user');
		if (user) {
			user = JSON.parse(user);
			this.sysUserName = user.name || '';
			this.sysMeta = user.role || 'user';
			// this.sysUserAvatar = user.avatar || '../assets/logo.jpeg';
		};
	}
});

/***/ }),

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_api__ = __webpack_require__(54);
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


//import NProgress from 'nprogress'
/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      sysLogo: __webpack_require__(350),
      sysName: 'Private Banking',
      logining: false,
      ruleForm2: {
        account: '',
        checkPass: '123456'
      },
      rules2: {
        account: [{ required: true, message: 'Please input account number.', trigger: 'blur' }],
        checkPass: [{ required: true, message: 'Please input a password.', trigger: 'blur' }]
      },
      checked: true
    };
  },
  methods: {
    handleReset2() {
      this.$refs.ruleForm2.resetFields();
    },
    handleSubmit2(ev) {
      var _this = this;
      this.$refs.ruleForm2.validate(valid => {
        if (valid) {
          //_this.$router.replace('/table');
          this.logining = true;
          //NProgress.start();
          var loginParams = { username: this.ruleForm2.account, password: this.ruleForm2.checkPass };
          __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_api__["d" /* requestLogin */])(loginParams).then(data => {
            this.logining = false;
            //NProgress.done();
            let { msg, code, user } = data;
            if (code !== 200) {
              this.$message({
                message: msg,
                type: 'error'
              });
            } else {
              sessionStorage.setItem('user', JSON.stringify(user));
              let _path = { path: '/' };
              if (user.role == 'admin') {
                _path = { path: '/create-user' };
              }
              if (user.role == 'manager') {
                _path = { path: '/' };
              }
              if (user.role == 'rm') {
                _path = { path: '/customer-position' };
              }

              this.$router.push(_path);
            }
          });
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    }
  }
});

/***/ }),

/***/ 427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ 428:
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

/* harmony default export */ __webpack_exports__["default"] = ({
	data() {
		return {
			form: {
				userId: 'HK-USER-2',
				userName: 'Jones KILAN',
				userRole: 'RM',
				rmCode: 'RMS001',
				teamCode: 'TM1'
			},
			tableData: [{
				userId: 'HK-USER-2',
				userName: 'Jones KILAN',
				userRole: 'RM',
				rmCode: 'RMS001',
				teamCode: 'TM1'
			}, {
				userId: 'HK-USER-3',
				userName: 'Joshua CHLOE',
				userRole: 'RM',
				rmCode: 'RMS002',
				teamCode: ''
			}, {
				userId: 'HK-USER-3',
				userName: 'Joshua CHLOE',
				userRole: 'RM',
				rmCode: 'RMS002',
				teamCode: ''
			}, {
				userId: 'HK-USER-3',
				userName: 'Joshua CHLOE',
				userRole: 'RM',
				rmCode: 'RMS002',
				teamCode: ''
			}]
		};
	},
	methods: {
		onSubmit() {}

	},
	mounted() {}
});

/***/ }),

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_echarts__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_echarts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_echarts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_api__ = __webpack_require__(54);
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




/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            loading: false,
            show2: true,
            chartPie: null,
            sizeForm: {
                regionAll: true,
                name: '',
                region: ['CN', 'HK', 'SG', 'UK'],
                bookingEntity: ['CN', 'HK', 'SG', 'UK'],
                ageValue: [0, 100],
                ageMark: ['', 10, 20, 30, 40, 50, 60, 70, 80, 90],
                delivery: false,
                type: ['I', 'E'], //Individual
                resource: '',
                desc: ''
            },
            allType: [],
            filterType: [],
            valTotal: 0,
            pieData: []
        };
    },

    watch: {},
    computed: {},
    filters: {},
    methods: {
        onSubmit() {

            let _seft = this;
        },
        regionAllbtn() {
            this.sizeForm.regionAll = !this.sizeForm.regionAll;
        },
        initPage() {

            let Vm = this;

            Vm.loading = true; // loading start

            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__api_api__["a" /* getDataUrl */])('/fos/cust/get', { type: 'all' }).then(data => {

                Vm.allType = Vm.filterType = data.data;
                Vm.filter(); // 过滤数据成为页面UI所需要的
            }).catch(data => {
                console.log(data);
                return false;
            });
        },
        filter() {
            let Vm = this;

            Vm.filterType = Vm.allType.filter(item => {

                let f_region = Vm.sizeForm.region.includes(item.region),
                    f_type = Vm.sizeForm.type.includes(item.type),
                    f_bookingEntity = Vm.sizeForm.bookingEntity.includes(item.bookingEntity),
                    f_age = item.age >= Vm.sizeForm.ageValue[0] && item.age <= Vm.sizeForm.ageValue[1];

                return f_region && f_type && f_bookingEntity && f_age;
            });

            Vm.changePieDataJSON();
        },
        changePieDataJSON() {
            let Vm = this;

            let CN = Vm.filterType.filter(item => item.region == 'CN');
            let HK = Vm.filterType.filter(item => item.region == 'HK');
            let SG = Vm.filterType.filter(item => item.region == 'SG');
            let UK = Vm.filterType.filter(item => item.region == 'UK');

            // charts data json
            let temp = [{ "value": 0, "name": "CN" }, { "value": 0, "name": "HK" }, { "value": 0, "name": "SG" }, { "value": 0, "name": "UK" }];

            console.log(CN);

            let total = 0;

            Vm.pieData = temp.filter(item => {

                if (item.name == 'CN' && CN) {
                    item.value = CN.length;
                    total += CN.length;
                }
                if (item.name == 'HK' && HK) {
                    item.value = HK.length;
                    total += HK.length;
                }
                if (item.name == 'SG' && SG) {
                    item.value = SG.length;
                    total += SG.length;
                }
                if (item.name == 'UK' && UK) {
                    item.value = UK.length;
                    total += UK.length;
                }

                return true;
            });

            Vm.valTotal = total;

            function filterRegion(val) {
                return Vm.filterType.filter(item => item.region == val);
            }

            Vm.drawPieChart();
            Vm.loading = false; // loading start
        },
        drawPieChart() {
            let Vm = this;
            let option = {
                title: {
                    text: 'Customer Distribution By Region',
                    subtext: 'Total GPB Customer : ' + Vm.valTotal,
                    x: 'center'
                },
                tooltip: {
                    trigger: 'item',
                    showContent: true,
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical', //horizontal
                    left: 'right',
                    data: ['CN', 'HK', 'SG', 'UK'],
                    formatter: function (name) {
                        let num = '';
                        Vm.pieData.forEach((item, value) => {
                            if (item.name == name) {
                                num = item.value;
                            }
                        });
                        return name + ": " + num;
                    }
                },
                series: [{
                    name: 'distribution of data',
                    type: 'pie',
                    roseType: 'radius',
                    radius: ['10%', '70%'],
                    center: ['50%', '60%'],
                    data: Vm.pieData,
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        },
                        normal: {
                            label: {
                                show: true,
                                formatter: '{b} : {c} ({d}%)'
                            },
                            labelLine: {
                                show: true
                            }
                        }
                    }

                }]
            };

            this.chartPie = __WEBPACK_IMPORTED_MODULE_0_echarts___default.a.init(document.getElementById('chartPie'));
            this.chartPie.setOption(option);
        },
        drawCharts() {
            this.drawPieChart();
        }
    },

    mounted() {
        this.initPage();
    },
    updated() {
        this.filter();
    }
});

/***/ }),

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_echarts__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_echarts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_echarts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_api__ = __webpack_require__(54);
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




/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            loading: false,
            myChart: null,
            show2: true,
            chartPie: null,
            sizeForm: {
                regionAll: true,
                name: '',
                region: [],
                booking: [],
                ageValue: [0, 100],
                ageMark: ['', 10, 20, 30, 40, 50, 60, 70, 80, 90],
                delivery: false,
                type: '', //Individual
                resource: '',
                desc: ''
            },
            allType: [],
            filterType: [],
            valTotal: 0,
            pieData: null,
            tableData: []
        };
    },

    computed: {},
    methods: {
        initPage() {

            let Vm = this;

            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__api_api__["a" /* getDataUrl */])('/fos/cust/get', { type: 'all' }).then(data => {

                Vm.allType = Vm.filterType = data.data;
                Vm.getAgeTotal();
            }).catch(data => {
                console.log(data);
                return false;
            });
        },
        getAgeTotal() {
            let Vm = this;

            let collect5 = Vm.filterType.filter(item => {
                return item.period > 20;
            });
            let collect4 = Vm.filterType.filter(item => {
                return item.period > 10 && item.period <= 20;
            });
            let collect3 = Vm.filterType.filter(item => {
                return item.period > 5 && item.period <= 10;
            });
            let collect2 = Vm.filterType.filter(item => {
                return item.period > 1 && item.period <= 5;
            });
            let collect1 = Vm.filterType.filter(item => {
                return item.period <= 1;
            });

            Vm.tableData.push({
                name: '>20 Years',
                value: collect5.length
            });
            Vm.tableData.push({
                name: '>10 Years && <20 Years',
                value: collect4.length
            });
            Vm.tableData.push({
                name: '>5 Years && <10 Years',
                value: collect3.length
            });
            Vm.tableData.push({
                name: '>1 Years && <5 Years',
                value: collect2.length
            });
            Vm.tableData.push({
                name: '<1 Years',
                value: collect1.length
            });

            Vm.drawPieChart();
        },
        drawPieChart() {

            let _seft = this;
            let _data = [];
            let _series = [];

            _seft.tableData.forEach((item, value) => {
                _data.push(item.name);
                let temp = {
                    name: item.name,
                    type: 'bar',
                    barWidth: '13%',
                    data: [item.value],
                    label: {
                        normal: {
                            show: true,
                            position: 'top'
                        }
                    }
                };
                _series.push(temp);
            });

            let option = {
                title: {
                    text: "Customer Trends Report",
                    // position: "center",
                    left: "center",
                    textStyle: {
                        fontSize: 14,
                        color: '#666'
                    }
                },
                grid: {
                    left: '1%',
                    right: '4%',
                    bottom: '20%',
                    containLabel: true
                },
                legend: {
                    data: _data,
                    bottom: '20'
                },
                xAxis: [{
                    data: ['0 ~ 100 Years'],
                    axisTick: {
                        alignWithLabel: true
                    }
                }],
                yAxis: [{
                    type: 'value'
                }],
                series: _series

            };

            this.myChart = __WEBPACK_IMPORTED_MODULE_0_echarts___default.a.init(document.getElementById('chartPie'));

            this.myChart.setOption(option);
        },
        drawCharts() {
            this.drawPieChart();
        }
    },

    mounted() {
        this.initPage();
    },
    updated() {
        // this.drawCharts()
    }
});

/***/ }),

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_orgchart__ = __webpack_require__(1006);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_orgchart___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue_orgchart__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_api__ = __webpack_require__(54);
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
    components: { VoBasic: __WEBPACK_IMPORTED_MODULE_0_vue_orgchart__["VoBasic"] },
    data() {
        return {
            chartData: null,
            tempData: null,
            chartLoading: true
        };
    },
    watch: {},
    computed: {},
    methods: {
        getChartData() {
            this.chartLoading = true;
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__api_api__["c" /* getManagerOSList */])({ type: 'arch' }).then(res => {
                this.tempData = res.data;
                this.mapJson(this.tempData);
            });
        },
        mapJson(json) {

            json = JSON.parse(JSON.stringify(json).replaceAll('entries', 'children'));

            objForEeach(json);

            function objForEeach(json) {
                curry(json);
                for (var key in json) {
                    if (Array.isArray(json[key]) && json[key].length !== 0) {
                        json[key].forEach(item => {
                            objForEeach(item);
                        });
                    }
                }
            }

            // 'AUM: $55bn<br\>Client#: 100,000',
            function curry(obj) {
                obj['content'] = 'AUM: ' + obj['clients'] + '<br\>Client#:' + obj['position'];
            }

            this.chartLoading = false;

            return this.chartData = this.tempData = json;
        }

    },
    created() {
        String.prototype.replaceAll = function (FindText, RepText) {
            let regExp = new RegExp(FindText, 'g');
            return this.replace(regExp, RepText);
        };
    },
    mounted() {
        this.getChartData();
    },
    updated() {}
});

/***/ }),

/***/ 432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_echarts__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_echarts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_echarts__);
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
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            show2: true,
            chartPie: null,
            sizeForm: {
                name: '',
                asset: [],
                region: [],
                booking: [],
                ageValue: [0, 100],
                ageMark: ['', 10, 20, 30, 40, 50, 60, 70, 80, 90],
                delivery: false,
                type: '', //Individual
                resource: '',
                desc: ''
            },
            valTotal: 0,
            pieData: []
        };
    },
    watch: {
        sizeForm: {
            deep: true,
            handler(curVal, oldVal) {
                var _region = curVal.region;
                if (_region.length == 0) {
                    _region = ['China', 'HongKong', 'Singapore', 'United Kingdom'];
                }

                let _pieData = [],
                    _total = 0;
                _region.forEach((item, index) => {
                    let max = 666,
                        min = 333,
                        _val = parseInt(Math.random() * (max - min + 1) + min, 10);
                    let tempObj = { value: _val, name: item };
                    _total += _val;
                    _pieData.push(tempObj);
                });
                this.valTotal = _total;
                this.pieData = _pieData;
            },
            immediate: true
        }
    },

    computed: {},
    methods: {
        onSubmit() {

            let _seft = this;
        },
        drawPieChart() {
            let _seft = this;

            this.chartPie = __WEBPACK_IMPORTED_MODULE_0_echarts___default.a.init(document.getElementById('chartPie'));
            this.chartPie.setOption({
                title: {
                    text: 'Customer Distribution By Asset',
                    subtext: 'Total GPB Customer : ' + _seft.valTotal,
                    x: 'center'
                },
                tooltip: {
                    trigger: 'item',
                    showContent: true,
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical', //horizontal
                    left: 'right',
                    data: ['China', 'HongKong', 'Singapore', 'United Kingdom'],
                    formatter: function (name) {
                        let num = '';
                        _seft.pieData.forEach((item, value) => {
                            if (item.name == name) {
                                num = item.value;
                            }
                        });
                        return name + ": " + num;
                    }
                },
                series: [{
                    name: 'distribution of data',
                    type: 'pie',
                    roseType: 'radius',
                    radius: ['10%', '70%'],
                    center: ['50%', '60%'],
                    data: _seft.pieData,
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        },
                        normal: {
                            label: {
                                show: true,
                                formatter: '{b} : {c} ({d}%)'
                            },
                            labelLine: {
                                show: true
                            }
                        }
                    }

                }]
            });
        },
        drawCharts() {
            this.drawPieChart();
        }
    },

    mounted() {
        this.drawCharts();
    },
    updated() {
        this.drawCharts();
    }
});

/***/ }),

/***/ 433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_api__ = __webpack_require__(54);
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



let issueCodeoptionsModel = [],
    submitTime = 800,
    penddingTime = 1500;

/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            loading: true,
            cards: [],
            cardRules: {
                issueCode: [{ required: true, message: 'Please select issue Code!', trigger: 'change' }],
                iusseDate: [{ required: true, message: 'Please pick a date!', trigger: 'change' }],
                maturityDate: [{ required: true, message: 'Please pick a date!', trigger: 'change' }]
            },
            tables: [],
            options: [{
                value: 'FCN',
                label: 'FCN'
            }, {
                value: 'BCN',
                label: 'BCN'
            }, {
                value: 'CDA',
                label: 'CDA'
            }, {
                value: 'ELN',
                label: 'ELN'
            }],
            selectValue: '',
            visible2: false
        };
    },
    methods: {
        onSubmit(index) {
            let Vm = this;

            Vm.$refs.form[index].validate(valid => {
                if (valid) {
                    Vm.cards[index].loading = true;
                    setTimeout(() => {
                        Vm.cards[index].loading = false;
                        Vm.returnitem(index);
                    }, submitTime);
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        onReset(index) {
            this.$refs.form[index].resetFields();
        },
        returnitem(index) {

            let Vm = this,
                item;

            item = {
                list: [{
                    name: "JP:",
                    value: "pendding",
                    loading: true,
                    class: ''
                }, {
                    name: "BNP:",
                    value: "pendding",
                    loading: true,
                    class: ''
                }, {
                    name: "CS:",
                    value: "pendding",
                    loading: true,
                    class: ''
                }]
            };

            Vm.tables[index] ? Vm.tables[index] = item : Vm.tables.push(item);

            setTimeout(() => {
                let values = [],
                    _min,
                    _index;

                Vm.tables[index].list.forEach((item, index) => {
                    item.value = Vm.genRandom(50, 60);
                    item.loading = false;
                    values.push(item.value);
                });
                values.forEach((item, i) => {
                    if (i == 0) {
                        _min = item;
                        _index = i;
                    }
                    if (item < _min) {
                        _min = item;
                        _index = i;
                    }
                });

                Vm.tables[index].list[_index].class = 'light';
            }, penddingTime);
        },
        genRandom(min, max) {
            return Math.floor(Math.random() * (max - min + 1) | 0) + min;
        },
        addItem() {
            let Vm = this,
                item;

            if (!Vm.selectValue) {
                Vm.$message({
                    message: 'Please select value!',
                    type: 'warning'
                });
                return false;
            }

            item = {
                name: Vm.selectValue,
                form: {
                    issueCode: '',
                    issueCodeoptions: issueCodeoptionsModel,
                    iusseDate: '',
                    maturityDate: ''
                },
                loading: false
            };

            if (Vm.cards.length == 3) {
                Vm.$message({
                    message: 'Only three can be added.',
                    type: 'warning'
                });
                return false;
            }

            Vm.cards.push(item);
            Vm.selectValue = '';
        },
        delCard(index) {
            this.cards.splice(index, 1);
            this.tables.splice(index, 1);
        }

    },
    mounted() {},
    created() {

        let Vm = this;

        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_api__["a" /* getDataUrl */])('/fos/share/issue/get', {}).then(data => {
            let _data = data.data;
            let newkey = Object.keys(_data).sort();
            newkey.forEach(item => {
                issueCodeoptionsModel.push({
                    value: item,
                    label: _data[item].shareIssueName
                });
            });
        }).catch(data => {
            console.log(data);
        });
    }
});

/***/ }),

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_api__ = __webpack_require__(54);
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
//
//



//import NProgress from 'nprogress'
/* harmony default export */ __webpack_exports__["default"] = ({
	data() {
		return {
			filters: {
				name: ''
			},
			loading: false,
			customerPositions: []
		};
	},
	methods: {
		// 修改table header的背景色
		tableHeaderColor({ row, column, rowIndex, columnIndex }) {
			if (rowIndex === 0) {
				return 'background-color: #F7F6Fd;color: #666;font-weight: 500;';
			}
		},
		rowSelect(row, event, column) {
			this.$router.push(`/customer-position/${row.customerAccount}`);
		},
		getCustomerNumber() {},
		initPage: function () {

			let Vm = this,
			    user;

			user = sessionStorage.getItem('user');

			if (!user) {
				Vm.$router.push('/');
				return false;
			};

			user = JSON.parse(user);

			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_api__["a" /* getDataUrl */])('/fos/cust/get', { type: user.role, rm: user.username }).then(data => {
				let cusPos = data.data;
				cusPos.forEach(item => {
					let prod = item.positions.prod;
					prod.total = Number(prod.fund) + Number(prod.deposit) + Number(prod.share) + Number(prod.bond);
					prod.total = prod.total.toFixed(2);
					item.accounts.forEach(ac_item => {
						let ac_prod = ac_item.positions.prod;
						ac_item.customerAccount = ac_item.customerNumber + '-' + ac_item.accountNumber;
						ac_prod.total = Number(ac_prod.fund) + Number(ac_prod.deposit) + Number(ac_prod.share) + Number(ac_prod.bond);
						ac_prod.total = ac_prod.total.toFixed(2);
					});
				});

				Vm.customerPositions = cusPos;
			}).catch(data => {
				console.log(data);
			});
		}
	},
	created() {
		this.initPage();
	},
	mounted() {
		//this.initPage();
	}
});

/***/ }),

/***/ 435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_echarts__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_echarts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_echarts__);
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



/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            chartPie1: null,
            chartPie2: null,
            tableData1: [{
                name: 'HSBC Holding',
                quantity: 80000,
                totalAmount: 5084000,
                marketPrice: 63.55,
                averageCost: 60.05,
                pl: 280000,
                lbdp: 6000
            }, {
                name: 'Tencent',
                quantity: 10000,
                totalAmount: 2706000,
                marketPrice: 270.6,
                averageCost: 180.05,
                pl: 901000,
                lbdp: 3000
            }],
            tableData2: [{
                name: 'HSBC Bond 5Y',
                quantity: 80000,
                totalAmount: 5084000,
                marketPrice: 63.55,
                averageCost: 60.05,
                pl: 280000,
                lbdp: 6000
            }],
            tableData3: [{
                name: 'HKD/USD',
                quantity: 80000,
                totalAmount: 5084000,
                marketPrice: 63.55,
                averageCost: 60.05,
                pl: '-165.5380002',
                lbdp: '-165.5380002'
            }],
            tableData4: [{
                name: '50000',
                quantity: 80000,
                totalAmount: 5084000,
                marketPrice: 63.55,
                averageCost: 60.05,
                pl: '-165.5380002',
                lbdp: '-165.5380002'
            }]
        };
    },
    methods: {

        getSummaries(param) {
            const { columns, data } = param;
            const sums = [];
            columns.forEach((column, index) => {
                if (index === 0) {
                    sums[index] = '总价';
                    return;
                }
                const values = data.map(item => Number(item[column.property]));
                if (!values.every(value => isNaN(value))) {
                    sums[index] = values.reduce((prev, curr) => {
                        const value = Number(curr);
                        if (!isNaN(value)) {
                            return prev + curr;
                        } else {
                            return prev;
                        }
                    }, 0);
                    sums[index] += ' 元';
                } else {
                    sums[index] = 'N/A';
                }
            });

            return sums;
        },
        // 修改table header的背景色
        tableHeaderColor({ row, column, rowIndex, columnIndex }) {
            if (rowIndex === 0) {
                return 'background-color: #F7F6Fd;color: #666;font-weight: bold;';
            }
        },
        drawPieChart() {
            let _seft = this;

            this.chartPie1 = __WEBPACK_IMPORTED_MODULE_0_echarts___default.a.init(document.getElementById('chartPie1'));
            this.chartPie1.setOption({
                title: {
                    text: 'Asset Allocation(USD)',
                    // subtext: 'Total GPB Customer : ' + _seft.valTotal,
                    x: 'center'
                },
                // tooltip: {
                //     trigger: 'item',
                //     showContent: true,
                //     formatter: "{a} <br/>{b} : {c} ({d}%)"
                // },
                legend: {
                    // orient: 'vertical',//horizontal
                    // left: 'bottom',
                    bottom: '20',
                    data: ['Equity', 'Fixed Income', 'FX', 'Structure Product']
                },
                series: [{
                    // name: 'distribution of data',
                    type: 'pie',
                    radius: '40%',
                    // roseType : 'radius',
                    // radius: ['10%', '70%'],
                    // center: ['50%', '50%'],
                    data: [{ name: 'Equity', value: 300 }, { name: 'Fixed Income', value: 400 }, { name: 'FX', value: 700 }, { name: 'Structure Product', value: 300 }],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        },
                        normal: {
                            label: {
                                show: true,
                                formatter: '{c} ({d}%)'
                            },
                            labelLine: {
                                show: true
                            }
                        }
                    }

                }]
            });

            this.chartPie2 = __WEBPACK_IMPORTED_MODULE_0_echarts___default.a.init(document.getElementById('chartPie2'));
            this.chartPie2.setOption({
                title: {
                    text: 'By Currency',
                    // subtext: 'Total GPB Customer : ' + _seft.valTotal,
                    x: 'center'
                },
                // tooltip: {
                //     trigger: 'item',
                //     showContent: true,
                //     formatter: "{a} <br/>{b} : {c} ({d}%)"
                // },
                legend: {
                    // orient: 'vertical',//horizontal
                    // left: 'bottom',
                    bottom: '20',
                    data: ['Equity', 'Fixed Income', 'FX', 'Structure Product']
                },
                series: [{
                    // name: 'distribution of data',
                    type: 'pie',
                    radius: '40%',
                    // roseType : 'radius',
                    // radius: ['10%', '70%'],
                    // center: ['50%', '50%'],
                    data: [{ name: 'Equity', value: 130 }, { name: 'Fixed Income', value: 250 }, { name: 'FX', value: 560 }, { name: 'Structure Product', value: 300 }],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        },
                        normal: {
                            label: {
                                show: true,
                                formatter: '{c} ({d}%)'
                            },
                            labelLine: {
                                show: true
                            }
                        }
                    }

                }]
            });
        },
        drawCharts() {
            this.drawPieChart();
        }

    },
    mounted() {
        this.drawCharts();
    },
    updated() {
        this.drawCharts();
    }
});

/***/ }),

/***/ 436:
/***/ (function(module, exports) {

//
//
//
//
//
//
//

/***/ }),

/***/ 437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_api__ = __webpack_require__(54);
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


/* harmony default export */ __webpack_exports__["default"] = ({
	data() {
		return {
			tableData: []
		};
	},
	methods: {
		formatter(row, column) {
			// console.log(row.createDate)
			// let time="2018-05-19T08:04:52.000+0000";
			let d = new Date(row.createDate);
			let times = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes();
			return times;
		},
		filterHandler(value, row, column) {}
	},
	mounted() {
		// fos/action/get?rm=rm1
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_api__["a" /* getDataUrl */])('/fos/action/get', { rm: 'rm1' }).then(data => {
			this.tableData = data.data;
		}).catch(data => {
			console.log(data);
		});
	},
	created() {},
	updated() {}
});

/***/ }),

/***/ 438:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_api__ = __webpack_require__(54);
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



let customerPositions;

/* harmony default export */ __webpack_exports__["default"] = ({
	data() {
		return {
			submiting: false,
			form: {
				transactionType: '',
				type2: '',
				customerNumber: '',
				customerNumberoptions: [],
				accountNumber: '',
				accountNumberoptions: [],
				shareIssueCode: '',
				shareIssueCodeoptions: [],
				shareQuantity: '',
				shareCurrency: '',
				sharePrice: '',
				tradeType: [],
				considerationAmount: 0,
				remark: '',
				tradeDate: '',
				valueDate: ''
			},
			tableData: [],
			issueInfo: {
				creditRating: '',
				houseView: '',
				issueCode: '',
				shareCountry: '',
				shareCurrency: '',
				shareIssueCode: '',
				shareIssueName: '',
				sharePrice: '',
				solicite: ''
			},
			issueCode: null,
			issueCodeStates: []
		};
	},
	watch: {
		'form.customerNumber'(val) {
			this.getSharePosition();
		},
		'form.accountNumber'(val) {
			this.getSharePosition();
		}
	},
	methods: {
		getcustomerNumber(cusNum) {
			let Vm = this,
			    customerList = [];

			customerPositions.forEach((item, index) => {
				if (item.customerNumber == cusNum) {
					customerList = item.accounts;
					return false;
				}
			});

			Vm.form.accountNumber = '';
			Vm.form.accountNumberoptions = [];

			customerList.forEach((item, index) => {
				Vm.form.accountNumberoptions.push({
					value: item.accountNumber,
					label: item.accountName
				});
			});
		},
		getSharePosition() {

			let customer = this.form.customerNumber,
			    account = this.form.accountNumber;

			if (!customer || !account) {
				return false;
			}

			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_api__["a" /* getDataUrl */])('/fos/share/position/get', { cust: customer, acct: account }).then(data => {
				this.tableData = data.data;
			}).catch(data => {
				console.log(data);
			});
		},
		onSubmit() {
			let Vm = this;
			Vm.submiting = true;
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_api__["b" /* requestTransaction */])('fos/share/deal/save', Vm.form).then(data => {
				Vm.submiting = false;
				Vm.$message({
					showClose: true,
					message: 'Submitted successfully.',
					type: 'success'
				});
			}).catch(data => {
				console.log(data);
			});
		},
		onReset() {},
		tableHeaderColor({ row, column, rowIndex, columnIndex }) {
			if (rowIndex === 0) {
				return 'background-color: #F7F6Fd;color: #666;font-weight: bold;';
			}
		},
		getIssueItem(event) {

			let el = event.target,
			    Vm = this;

			let val = Vm.issueCode[Vm.form.shareIssueCode];
			Vm.issueInfo = val ? val : {};
			Vm.form.shareCurrency = val ? val.shareCurrency : '';
		}

	},
	created() {

		let Vm = this,
		    user;

		user = sessionStorage.getItem('user');

		if (!user) {
			Vm.$router.push('/');
			return false;
		};

		user = JSON.parse(user);
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_api__["a" /* getDataUrl */])('/fos/share/issue/get', {}).then(data => {
			Vm.issueCode = data.data;
			var newkey = Object.keys(Vm.issueCode).sort();
			newkey.forEach(item => {
				Vm.form.shareIssueCodeoptions.push({
					value: item,
					label: Vm.issueCode[item].shareIssueName
				});
			});
		}).catch(data => {
			console.log(data);
		});

		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_api__["a" /* getDataUrl */])('/fos/cust/get', { type: user.role, rm: user.username }).then(data => {
			customerPositions = data.data;
			customerPositions.forEach((item, index) => {
				Vm.form.customerNumberoptions.push({
					value: item.customerNumber,
					label: item.customerName
				});
			});
		}).catch(data => {
			console.log(data);
		});
	},
	mounted() {}
});

/***/ }),

/***/ 439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_polyfill__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_polyfill___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_polyfill__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__App__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_element_ui_lib_locale_lang_en__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_element_ui_lib_locale_lang_en___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_element_ui_lib_locale_lang_en__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_element_ui_lib_locale__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_element_ui_lib_locale___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_element_ui_lib_locale__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_element_ui__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_element_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_element_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_element_ui_lib_transitions_collapse_transition__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_element_ui_lib_transitions_collapse_transition___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_element_ui_lib_transitions_collapse_transition__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__assets_theme_element_darkred_index_css__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__assets_theme_element_darkred_index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__assets_theme_element_darkred_index_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_vue_router__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__vuex_store__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_vuex__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__routes__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__mock__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_font_awesome_css_font_awesome_min_css__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_font_awesome_css_font_awesome_min_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_font_awesome_css_font_awesome_min_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_vue_orgchart_dist_style_min_css__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_vue_orgchart_dist_style_min_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_vue_orgchart_dist_style_min_css__);







//import 'element-ui/lib/theme-default/index.css'
// import './assets/theme/theme-green/index.css'




//import NProgress from 'nprogress'
//import 'nprogress/nprogress.css'


__WEBPACK_IMPORTED_MODULE_12__mock__["a" /* default */].bootstrap();



// 设置语言
__WEBPACK_IMPORTED_MODULE_4_element_ui_lib_locale___default.a.use(__WEBPACK_IMPORTED_MODULE_3_element_ui_lib_locale_lang_en___default.a);

__WEBPACK_IMPORTED_MODULE_1_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_5_element_ui___default.a);
__WEBPACK_IMPORTED_MODULE_1_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_8_vue_router__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_1_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_10_vuex__["a" /* default */]);

//NProgress.configure({ showSpinner: false });

const router = new __WEBPACK_IMPORTED_MODULE_8_vue_router__["a" /* default */]({
  routes: __WEBPACK_IMPORTED_MODULE_11__routes__["a" /* default */]
});

router.beforeEach((to, from, next) => {
  //NProgress.start();
  if (to.path == '/login') {
    sessionStorage.removeItem('user');
  }
  let user = JSON.parse(sessionStorage.getItem('user'));
  if (!user && to.path != '/login') {
    next({ path: '/login' });
  } else {
    next();
  }
});

__WEBPACK_IMPORTED_MODULE_1_vue__["default"].component(__WEBPACK_IMPORTED_MODULE_6_element_ui_lib_transitions_collapse_transition___default.a.name, __WEBPACK_IMPORTED_MODULE_6_element_ui_lib_transitions_collapse_transition___default.a);

//router.afterEach(transition => {
//NProgress.done();
//});

new __WEBPACK_IMPORTED_MODULE_1_vue__["default"]({
  //el: '#app',
  //template: '<App/>',
  router,
  store: __WEBPACK_IMPORTED_MODULE_9__vuex_store__["a" /* default */],
  //components: { App }
  render: h => h(__WEBPACK_IMPORTED_MODULE_2__App___default.a)
}).$mount('#app');

/***/ }),

/***/ 440:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Relationship; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return typeAll; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mockjs__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mockjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mockjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__team_json__ = __webpack_require__(1048);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__team_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__team_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__typeAll_json__ = __webpack_require__(1049);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__typeAll_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__typeAll_json__);





const Relationship = __WEBPACK_IMPORTED_MODULE_1__team_json___default.a; // 
const typeAll = __WEBPACK_IMPORTED_MODULE_2__typeAll_json___default.a; // 



/***/ }),

/***/ 441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LoginUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Users; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Customers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getShareIssue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getSharePosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return dailyJson; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return cusPosition; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mockjs__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mockjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mockjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__issue_json__ = __webpack_require__(1047);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__issue_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__issue_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__customer_position_json__ = __webpack_require__(1046);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__customer_position_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__customer_position_json__);





const LoginUsers = [{
  id: 1,
  username: 'manager',
  password: '123456',
  avatar: '',
  role: 'manager',
  name: 'katherine pierce'
}, {
  id: 2,
  username: 'rm1',
  password: '123456',
  avatar: '',
  role: 'rm',
  name: 'Daniel Gillies'
}, {
  id: 2,
  username: 'admin',
  password: '123456',
  avatar: '',
  role: 'admin',
  name: 'Daniel Gillies'
}];

const Users = [];

for (let i = 0; i < 60; i++) {
  Users.push(__WEBPACK_IMPORTED_MODULE_0_mockjs___default.a.mock({
    id: __WEBPACK_IMPORTED_MODULE_0_mockjs___default.a.Random.guid(),
    name: __WEBPACK_IMPORTED_MODULE_0_mockjs___default.a.Random.cname(),
    addr: __WEBPACK_IMPORTED_MODULE_0_mockjs___default.a.mock('@county(true)'),
    'age|18-60': 1,
    birth: __WEBPACK_IMPORTED_MODULE_0_mockjs___default.a.Random.date(),
    sex: __WEBPACK_IMPORTED_MODULE_0_mockjs___default.a.Random.integer(0, 1)
  }));
}

const Customers = [];

for (let i = 0; i < 60; i++) {
  Customers.push(__WEBPACK_IMPORTED_MODULE_0_mockjs___default.a.mock({
    id: __WEBPACK_IMPORTED_MODULE_0_mockjs___default.a.Random.guid(),
    customerNumber: __WEBPACK_IMPORTED_MODULE_0_mockjs___default.a.Random.natural(1000000000, 9000000000),
    customerName: __WEBPACK_IMPORTED_MODULE_0_mockjs___default.a.Random.name(),
    customerType: __WEBPACK_IMPORTED_MODULE_0_mockjs___default.a.Random.integer(0, 1),
    homeCountry: __WEBPACK_IMPORTED_MODULE_0_mockjs___default.a.mock('@county(true)'),
    bookingCenter: __WEBPACK_IMPORTED_MODULE_0_mockjs___default.a.mock('@county(true)'),
    rmCode: 'HKRM' + __WEBPACK_IMPORTED_MODULE_0_mockjs___default.a.Random.natural(1000, 9000),
    dateOfBirth: __WEBPACK_IMPORTED_MODULE_0_mockjs___default.a.Random.date()
  }));
}

const getShareIssue = __WEBPACK_IMPORTED_MODULE_1__issue_json___default.a;

const getSharePosition = [{ "id": 1, "customerNumber": 1, "accountNumber": 1, "shareIssueCode": "issue 1", "shareCurrency": "HKD", "averagePrice": 110.00, "holdingQuantity": 1800.00, "considerationAmount": 0.00, "position": "22968.00" }, { "id": 1, "customerNumber": 1, "accountNumber": 1, "shareIssueCode": "issue 12", "shareCurrency": "HKD", "averagePrice": 110.00, "holdingQuantity": 1800.00, "considerationAmount": 0.00, "position": "22968.00" }, { "id": 1, "customerNumber": 1, "accountNumber": 1, "shareIssueCode": "issue 13", "shareCurrency": "HKD", "averagePrice": 110.00, "holdingQuantity": 1800.00, "considerationAmount": 0.00, "position": "22968.00" }];

const dailyJson = [{ "id": 1, "type": "P", "rmCode": "rm1", "remarks": "TODO: action 1", "createDate": "2018-11-11T16:00:00.000+0000" }, { "id": 2, "type": "P", "rmCode": "rm1", "remarks": "TODO: action 2", "createDate": "2018-11-11T16:00:00.000+0000" }, { "id": 3, "type": "P", "rmCode": "rm1", "remarks": "TODO: action 3", "createDate": "2018-11-11T16:00:00.000+0000" }, { "id": 4, "type": "P", "rmCode": "rm1", "remarks": "TODO: action 3", "createDate": "2018-11-11T16:00:00.000+0000" }, { "id": 5, "type": "P", "rmCode": "rm1", "remarks": "TODO: action 3", "createDate": "2018-11-10T16:00:00.000+0000" }, { "id": 6, "type": "P", "rmCode": "rm1", "remarks": "TODO: action 3", "createDate": "2018-11-10T16:00:00.000+0000" }, { "id": 7, "type": "P", "rmCode": "rm1", "remarks": "TODO: action 3", "createDate": "2018-11-10T16:00:00.000+0000" }, { "id": 8, "type": "P", "rmCode": "rm1", "remarks": "TODO: action 3", "createDate": "2018-11-10T16:00:00.000+0000" }, { "id": 9, "type": "P", "rmCode": "rm1", "remarks": "TODO: action 3", "createDate": "2018-11-10T16:00:00.000+0000" }, { "id": 10, "type": "P", "rmCode": "rm1", "remarks": "TODO: action 3", "createDate": "2018-11-09T16:00:00.000+0000" }, { "id": 11, "type": "P", "rmCode": "rm1", "remarks": "TODO: action 3", "createDate": "2018-11-09T16:00:00.000+0000" }, { "id": 12, "type": "P", "rmCode": "rm1", "remarks": "TODO: action 3", "createDate": "2018-11-09T16:00:00.000+0000" }, { "id": 13, "type": "P", "rmCode": "rm1", "remarks": "TODO: action 3", "createDate": "2018-11-09T16:00:00.000+0000" }, { "id": 14, "type": "P", "rmCode": "rm1", "remarks": "TODO: action 3", "createDate": "2018-11-08T16:00:00.000+0000" }, { "id": 15, "type": "P", "rmCode": "rm1", "remarks": "TODO: action 3", "createDate": "2018-11-08T16:00:00.000+0000" }];

const cusPosition = __WEBPACK_IMPORTED_MODULE_2__customer_position_json___default.a;



/***/ }),

/***/ 442:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios_mock_adapter__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios_mock_adapter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios_mock_adapter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_user__ = __webpack_require__(441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_manager__ = __webpack_require__(440);






let _Users = __WEBPACK_IMPORTED_MODULE_2__data_user__["a" /* Users */];
let _Customers = __WEBPACK_IMPORTED_MODULE_2__data_user__["b" /* Customers */];

/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   * mock bootstrap
   */
  bootstrap() {
    let mock = new __WEBPACK_IMPORTED_MODULE_1_axios_mock_adapter___default.a(__WEBPACK_IMPORTED_MODULE_0_axios___default.a);

    // mock success request
    mock.onGet('/success').reply(200, {
      msg: 'success'
    });

    // mock error request
    mock.onGet('/error').reply(500, {
      msg: 'failure'
    });

    //登录
    mock.onPost('/sa/user/authenticate').reply(config => {
      let { username, password } = JSON.parse(config.data);
      return new Promise((resolve, reject) => {
        let user = null;
        setTimeout(() => {
          let hasUser = __WEBPACK_IMPORTED_MODULE_2__data_user__["c" /* LoginUsers */].some(u => {
            if (u.username === username && u.password === password) {
              user = JSON.parse(JSON.stringify(u));
              user.password = undefined;
              return true;
            }
          });

          if (hasUser) {
            resolve([200, { code: 200, msg: '请求成功', user }]);
          } else {
            resolve([200, { code: 500, msg: '账号或密码错误' }]);
          }
        }, 1000);
      });
    });

    //获取用户列表
    mock.onGet('/customer/list').reply(config => {
      let { name } = config.params;
      let mockUsers = __WEBPACK_IMPORTED_MODULE_2__data_user__["b" /* Customers */].filter(customer => {
        if (name && customer.name.indexOf(name) == -1) return false;
        return true;
      });
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            customers: mockUsers
          }]);
        }, 1000);
      });
    });

    //获取用户列表
    mock.onGet('/user/list').reply(config => {
      let { name } = config.params;
      let mockUsers = _Users.filter(user => {
        if (name && user.name.indexOf(name) == -1) return false;
        return true;
      });
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            users: mockUsers
          }]);
        }, 1000);
      });
    });

    //获取用户列表（分页）
    mock.onGet('/user/listpage').reply(config => {
      let { page, name } = config.params;
      let mockUsers = _Users.filter(user => {
        if (name && user.name.indexOf(name) == -1) return false;
        return true;
      });
      let total = mockUsers.length;
      mockUsers = mockUsers.filter((u, index) => index < 20 * page && index >= 20 * (page - 1));
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            total: total,
            users: mockUsers
          }]);
        }, 1000);
      });
    });

    //删除用户
    mock.onGet('/user/remove').reply(config => {
      let { id } = config.params;
      _Users = _Users.filter(u => u.id !== id);
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            code: 200,
            msg: '删除成功'
          }]);
        }, 500);
      });
    });

    //批量删除用户
    mock.onGet('/user/batchremove').reply(config => {
      let { ids } = config.params;
      ids = ids.split(',');
      _Users = _Users.filter(u => !ids.includes(u.id));
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            code: 200,
            msg: '删除成功'
          }]);
        }, 500);
      });
    });

    //编辑用户
    mock.onGet('/user/edit').reply(config => {
      let { id, name, addr, age, birth, sex } = config.params;
      _Users.some(u => {
        if (u.id === id) {
          u.name = name;
          u.addr = addr;
          u.age = age;
          u.birth = birth;
          u.sex = sex;
          return true;
        }
      });
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            code: 200,
            msg: '编辑成功'
          }]);
        }, 500);
      });
    });

    //新增用户
    mock.onGet('/user/add').reply(config => {
      let { name, addr, age, birth, sex } = config.params;
      _Users.push({
        name: name,
        addr: addr,
        age: age,
        birth: birth,
        sex: sex
      });
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            code: 200,
            msg: '新增成功'
          }]);
        }, 500);
      });
    });

    /**
     *  manager
     */
    //获取manager Organization Structure 上的图标数据
    mock.onGet('/fos/team/get').reply(config => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, __WEBPACK_IMPORTED_MODULE_3__data_manager__["a" /* Relationship */]]);
        }, 200);
      });
    });

    /**
     *  manager
     */
    //获取manager Organization Structure 上的图标数据
    mock.onGet('/fos/cust/get').reply(config => {

      let { type } = config.params;
      let returnData;

      if (type == 'all') {
        returnData = __WEBPACK_IMPORTED_MODULE_3__data_manager__["b" /* typeAll */];
      } else {
        returnData = __WEBPACK_IMPORTED_MODULE_2__data_user__["d" /* cusPosition */];
      }

      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, returnData]);
        }, 300);
      });
    });

    /**
         *  manager
         */
    //获取manager Organization Structure 上的图标数据
    mock.onGet('/fos/share/issue/get').reply(config => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, __WEBPACK_IMPORTED_MODULE_2__data_user__["e" /* getShareIssue */]]);
        }, 300);
      });
    });

    /**
         *  manager
         */
    //获取manager Organization Structure 上的图标数据
    mock.onGet('/fos/share/position/get').reply(config => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, __WEBPACK_IMPORTED_MODULE_2__data_user__["f" /* getSharePosition */]]);
        }, 300);
      });
    });

    /**
         *  manager
         */
    //获取manager Organization Structure 上的图标数据
    mock.onGet('/fos/action/get').reply(config => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, __WEBPACK_IMPORTED_MODULE_2__data_user__["g" /* dailyJson */]]);
        }, 300);
      });
    });
  }
});

/***/ }),

/***/ 443:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//test
const increment = ({ commit }) => {
    commit('INCREMENT');
};
/* harmony export (immutable) */ __webpack_exports__["increment"] = increment;

const decrement = ({ commit }) => {
    commit('DECREMENT');
};
/* harmony export (immutable) */ __webpack_exports__["decrement"] = decrement;


/***/ }),

/***/ 444:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//test
const getCount = state => {
    return state.count;
};
/* harmony export (immutable) */ __webpack_exports__["getCount"] = getCount;


/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);


let base = '';

const requestLogin = params => {
  return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post(`${base}/sa/user/authenticate`, params).then(res => res.data);
};
/* harmony export (immutable) */ __webpack_exports__["d"] = requestLogin;


const getUserList = params => {
  return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(`${base}/user/list`, { params: params });
};
/* unused harmony export getUserList */


const getCustomerList = params => {
  return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(`${base}/customer/list`, { params: params });
};
/* unused harmony export getCustomerList */


const getUserListPage = params => {
  return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(`${base}/user/listpage`, { params: params });
};
/* unused harmony export getUserListPage */


const removeUser = params => {
  return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(`${base}/user/remove`, { params: params });
};
/* unused harmony export removeUser */


const batchRemoveUser = params => {
  return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(`${base}/user/batchremove`, { params: params });
};
/* unused harmony export batchRemoveUser */


const editUser = params => {
  return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(`${base}/user/edit`, { params: params });
};
/* unused harmony export editUser */


const addUser = params => {
  return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(`${base}/user/add`, { params: params });
};
/* unused harmony export addUser */


const testUrl = (url, params) => {
  return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(url, { params: params });
};
/* unused harmony export testUrl */


const requestTransaction = (url, params) => {
  return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post(base + url, { params: params }).then(res => res.data);
};
/* harmony export (immutable) */ __webpack_exports__["b"] = requestTransaction;


const getDataUrl = (url, params) => {
  return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(base + url, { params: params });
};
/* harmony export (immutable) */ __webpack_exports__["a"] = getDataUrl;


// export const requestTransaction = (url, params) => { return axios.post(url, params).then(res => res.data); };
// export const getDataUrl = (url, params) => { return axios.get(url, { params: params }); };

// manager
const getManagerOSList = params => {
  return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(`${base}/fos/team/get`, { params: params });
};
/* harmony export (immutable) */ __webpack_exports__["c"] = getManagerOSList;


/***/ }),

/***/ 950:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 951:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 952:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 953:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 954:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 955:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 956:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 957:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 958:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 959:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 960:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 961:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 962:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 963:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 964:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 965:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 974:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCACAAIADASIAAhEBAxEB/8QAHAAAAQUBAQEAAAAAAAAAAAAABAEDBQYHAgAI/8QANhAAAgEDAwIEBAUCBgMAAAAAAQIDAAQRBRIhMUEGEyJRBzJhgRQVI3HBQlKRobHR4fAWM2L/xAAZAQADAQEBAAAAAAAAAAAAAAACAwQBAAX/xAAlEQACAgICAgIBBQAAAAAAAAAAAQIRAyESMQQTIkEUFTJxgZH/2gAMAwEAAhEDEQA/AN/r1ITivFq44WvUgalrjD1JXsgUm4DrXHC0hI965MigEkgD3NU/xH49sdHV0gKzSr1OfSP96CeSMFch2LDPK+MFZcS4HU0oYEdawa4+LGpXd0YoZPKHuABUlo3xL1K0uCt6i3MR7FgGH3pX5Mb2iv8ATcrjcWmbTXqzq3+K1iZVW7spYYyceYDux+9Xqy1C21G1S4tZVliYZBU02GSM+mSZfHy4v3qguvVzvA71x5y+9GJHa9TXnr70zJeIueRXHBDEe9NeYFJBNVbW/EsennJcDB6Zqs33xA3wkQDDe+aFzUewowlLo0o3kSttLjNDy61awzCF5AHYZArEz4l1GTU47kzs2w52k8VL3/iuK78tkXbMnUkcil+5DHglF7NTW/E0uFbj6V1JexopZ3AAGTzVE0zxAGl2nO5lH2qt+N/Gy2Nu0Fu+ZHJH/NA8/wBR2x2LxHJ70kSHjPx+8jvY2L7YxwzZ61mN3qJlY8mSRj3PFQ35lNdTHG55HPQckk1b9D+Ht/qMaXNzMbdWGVUgk0l43dz7PThnhCHDEqRBbEiw9wF8xhkY4pGuGBDIfT3BOat+r/D69ktkVJFd04DDjIqhahpl/o03lXMbDB4fHBooxTBlmceiSi1Bl7l4z8yHn/Crn4I8XnQb0bpXexlPrXPy/XFZiLjkEHHPbsaLguijhgcHOGArvXTtdme9TXCfR9Xx3kd/AklvIGjcZDKcjFcF2jk2gE1lXwv8VFLr8suZf0ZP/USeje1avNKEO7jIqmEuSPKzYvXKl0CahfJa2zyM+0gZ5NVO48RPLGyxtmQ9MHpR2v2smqxuY92VHAFU6zT8LdhpVwkZw4bqR3rbdgJKhPG9r5N15jTMSx6Z4qjyXGw46CiL/XJ9Uk864fJz0zxUZNOjjANTz2y3F8EPDUfKbIFOW2oGa43Nghef3NQzHcSM1NaDpMl3OGfKwqd7uemKGXGMW2FFynNJFjW//A6fksRLL1P9o7msw1XUH1PU3ck7M4UZ7dqsHiDVPRMYicOdifRR/wBJ+9Q/h7S21LXLS2UZMjjI+lZgjVzY3yX1hh/Zf/hv4VaQfmVzB6c4j3Dr9a1Vl8tAFGMU0v4fSNPjXG1EUKABVfvvFMyOzWxhm29YjgH7Gtu9sFRb66JqadwMY6VBatYWup2skU6KwYd+1JZeK7fU0ZdhimX5o26j606zxzD5wO9aElRiuv6S2jX7IpLRMeDQMcpyPrxV28d2hEG/GRnhqoUZyBzzTou0S5PjLRO6Zeta6grI208MMdjW/aLra6nocF0z5fbtfnuK+bHkYGKZeqsM1efDuuSx2skSvhG9Q56UuVwfIbXtg4/aNP8A/IbXT5ZY7iQYbJGW4/aqPr3icXEksdufSxPIFV3WnmDiR5Cd3IHtUP5xxkk5pq2rJePF0OFVCAAj7VwsO99qnk0EszCQDPFHWuTcLn3oGqexilfQTY6VLd3nkoAcfMT2HvVm1aeLR9KktoW9TcA9zxjNNWKppVrJLKcvJgqo71WNTv5b29UO2Ruz9qileXJX0j08UFhx8n2yE1OVmdIyclRz+9Xb4Zafs8QJPIuWEZIPbnGKoF25eZ39zWnfChHNld3cn9MgjQ/QDJ/1qyaqBDjlyyuzVbq2S7t2jfOCOoPNZhrvgkwTMbGa8jBO5sHcprRzqUSL6mAoKbxBYJKsckqlmOAvUn7UEdbsbwfVFP8ADHh+9Wc/imDrj0v3/Y0N4l1k6HeeRHjfj+roK0z0JAZVGOPaqBqOmJrV1dOQrNv6MM1tLtnW60UfVNcvNUs9k0tuy9towaqfQ59jVn1zw1LZPuSPyh1IDZBqsNxI6HrToVWiXJyv5BEZDROp/epXRZjFJtJwM8e2D/zUDFJskANStkQJ1TdgHlD/ABQZFoLDL5Kib1WVpbYE9RUGJGPepy8iaS1yOOnSoSSMqxGDmig00Lyp8mEi3QYbPNSmlW488SPyq1H2ls97KEVtvGST0Aqx3aQ2GmHZGqyBMAsctn3x2qbNPj8ftlni4eb5VpEdqd95jNO7YRTtiHvjqarkdx5zvKepyf8ALAo2/uE8ohR8ke1Se5PU1DRkou09ehosMEoheTkfJJHMoBwT3FaV8OL1ItDmgyN6SsSP371mczDIHsKlPDGrnTdSTe2IZfS/PT2NOmriSYpqOTZoXiDUbmJVMTkA5JIHQV7Q7SJfL1WK+hublPWqsf4qThs1vSkpwyYP7VEutlp87WVzbJLbAkqUO2RM46HuMDFTp6o9CpSeiabx9CU8q7iKvkghORUJbeI9mtyMq7YZ8MFbqDUJqE8NqfMs5ZXJJPlzR5x7DNQ19eztD+JlRI3XptNMSbFSycdUW/xRqME1uXDdvesrkmLXDOO5oy+vJZIQjyFnbrz0FArHxknFOhGuyLNk5vQ43OHH3o2zuBG67xlQc8dR9aCjXnGeK75hkBOQK1q9AQbi7LZNdK1oAjcHkEd6jGJbnPXvQ9lKSJ4ycqAGH0p5W3HGaFRpGylyZaLjydKsktrXlzhpJPc1DXlzcNESZAxbsaF1DW/xdwzRrtUnj6CgpLnKqjPkt1AqeGJ9y7PSyeRBLjDoaeR3YM7cDt/FNHAz370kreokdun0pkkkfvVCRBKWzl2ySaWFcsPpXDHBoyBVAVxkZ6ijehSi2zRfBHimGKD8vv2xjiNz3HtUvq9jpd2278Rkt056VmtvAJUJB5oa5ubu1PE747ZNI9fy0VxzOMdlnvrGCyVnacOq9BnNVPU9Q89fLXoDmgZru4mOZZGP3pk+rmmxhXZPkzOfR4lnbcTSZNKrFOMZBpQhb5Oc0wT2PW6tIwRQTk4qQ1C3eC1TzYmRv6S39QoO3WeBhtwGz3qb06xbUpxLfTNKVGAkmQopctOxsNqkN6dp0v5U1wVP6nIP/wAimHDLIqgc1Z4pTa4tmRPKPVQpIxRh0EagFkgjWFsE5KHkewFBz2G8etFIuVghIWIEkdSaGjUtIZGHA6U80fnyk9h3FKwAwvYUdgpWwabiMn3OKG3YX60RdHkIKHdcAVq6Bl2I2QadDnykBPAPNcEb1HuK8kLkMCRgc1royN/QWl68IxHk15ne4O9jn+KZiIjHqGQaRpAThTtFD/A1Ulb/AMPPGApwM46mhS3tT7uQoUH00sdpLMoKrwe5o0Ikregcc5o21jLBcjHNFWmlFctNz7CnzHsYOnRTmsbs5IKitkeRBI2enDf71Kq0FqF82OTcD86n5h9cf61Az3DAErxj5f29q6Sd2tROxO9DjH9w7UDjYyMki0QiGe5WW3trh9pzhuQtXKK7f8P5kKo0qpwg61XPA/jKNbhbO8VWIGEY8MB/NaxbxWheO5jjjPp9JAGMGhUNhPIqPmeBXEAIbCEcmuJCAvH+Jp+ZZLeERPGyHsGGKj3fc4jHSiW2FJcFT7OSTK5boK4c5YDsKOkgCxYTkgc4oLAVSD8x5o0xLVDkYAGHA2t39q6WL1/pSA++aaXBGGbjGa4D+W/HI7fSuCpWpPoOeJUj3FkLY4wKELea+xU56ACu4o5rluAQD1PvU5p+neUN2z1d2IrOuzZyi3UFSI+x0h5FaSQDg4C1NpbLEOgB7fSo651oW9w0dugkVeC3TJ+lNpq0UhO/erHuTxWU2KtIk3wUJUDAppITJERjvXCX8DhF81evXNELIyn9NQynqQc1lUFYP+A3tkjgUxtEtxsQfpp/nRl3cMlv3DtwBimbCLETt9q0wdstPV72OYMVMZDEjrX0D4cWG/0K2EEaxCJREyf2kf8Ac/esM04fps/d2z9q1DwVqZguFhZvRMAjfRh8p/iuT3s5rWj/2Q=="

/***/ }),

/***/ 975:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(962)

var Component = __webpack_require__(27)(
  /* script */
  null,
  /* template */
  __webpack_require__(1002),
  /* scopeId */
  "data-v-7554d824",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 976:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(961)

var Component = __webpack_require__(27)(
  /* script */
  __webpack_require__(425),
  /* template */
  __webpack_require__(1001),
  /* scopeId */
  "data-v-6bc793b9",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 977:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(952)

var Component = __webpack_require__(27)(
  /* script */
  __webpack_require__(426),
  /* template */
  __webpack_require__(992),
  /* scopeId */
  "data-v-2b0fc9ff",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 978:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(965)

var Component = __webpack_require__(27)(
  /* script */
  __webpack_require__(427),
  /* template */
  __webpack_require__(1005),
  /* scopeId */
  "data-v-ef7cb0da",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 979:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(956)

var Component = __webpack_require__(27)(
  /* script */
  __webpack_require__(428),
  /* template */
  __webpack_require__(996),
  /* scopeId */
  "data-v-539a8658",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 980:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(959)

var Component = __webpack_require__(27)(
  /* script */
  __webpack_require__(429),
  /* template */
  __webpack_require__(999),
  /* scopeId */
  "data-v-64ae67de",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 981:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(958)

var Component = __webpack_require__(27)(
  /* script */
  __webpack_require__(430),
  /* template */
  __webpack_require__(998),
  /* scopeId */
  "data-v-575f82c3",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 982:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(951)

var Component = __webpack_require__(27)(
  /* script */
  __webpack_require__(431),
  /* template */
  __webpack_require__(991),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 983:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(954)

var Component = __webpack_require__(27)(
  /* script */
  __webpack_require__(432),
  /* template */
  __webpack_require__(994),
  /* scopeId */
  "data-v-3456e690",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 984:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(964)

var Component = __webpack_require__(27)(
  /* script */
  __webpack_require__(433),
  /* template */
  __webpack_require__(1004),
  /* scopeId */
  "data-v-d34eaf30",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 985:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(963)

var Component = __webpack_require__(27)(
  /* script */
  __webpack_require__(434),
  /* template */
  __webpack_require__(1003),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 986:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(955)

var Component = __webpack_require__(27)(
  /* script */
  __webpack_require__(435),
  /* template */
  __webpack_require__(995),
  /* scopeId */
  "data-v-438c99b4",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 987:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(950)

var Component = __webpack_require__(27)(
  /* script */
  __webpack_require__(436),
  /* template */
  __webpack_require__(990),
  /* scopeId */
  "data-v-1ae5b59d",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 988:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(953)

var Component = __webpack_require__(27)(
  /* script */
  __webpack_require__(437),
  /* template */
  __webpack_require__(993),
  /* scopeId */
  "data-v-33e6b01c",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 989:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(957)

var Component = __webpack_require__(27)(
  /* script */
  __webpack_require__(438),
  /* template */
  __webpack_require__(997),
  /* scopeId */
  "data-v-566bcfbd",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 990:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "name": "fade",
      "mode": "out-in"
    }
  }, [_c('router-view')], 1)
},staticRenderFns: []}

/***/ }),

/***/ 991:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "chart-container"
  }, [_c('el-row', [_c('el-col', {
    directives: [{
      name: "loading",
      rawName: "v-loading",
      value: (_vm.chartLoading),
      expression: "chartLoading"
    }],
    attrs: {
      "span": 24
    }
  }, [_c('vo-basic', {
    attrs: {
      "data": _vm.chartData,
      "pan": true,
      "nodeContent": "content",
      "toggleCollapse": false
    }
  })], 1)], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 992:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_vm._m(0), _vm._v(" "), _c('el-form', {
    ref: "ruleForm2",
    staticClass: "demo-ruleForm login-container",
    attrs: {
      "model": _vm.ruleForm2,
      "rules": _vm.rules2,
      "label-position": "left",
      "label-width": "0px"
    }
  }, [_c('h3', {
    staticClass: "title"
  }, [_c('img', {
    attrs: {
      "src": this.sysLogo,
      "alt": ""
    }
  }), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.sysName))])]), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "prop": "account"
    }
  }, [_c('el-input', {
    attrs: {
      "type": "text",
      "auto-complete": "off",
      "placeholder": "manager||rm||admin"
    },
    nativeOn: {
      "keyup": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) { return null; }
        return _vm.handleSubmit2($event)
      }
    },
    model: {
      value: (_vm.ruleForm2.account),
      callback: function($$v) {
        _vm.$set(_vm.ruleForm2, "account", $$v)
      },
      expression: "ruleForm2.account"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "prop": "checkPass"
    }
  }, [_c('el-input', {
    attrs: {
      "type": "password",
      "auto-complete": "off",
      "placeholder": "Password"
    },
    nativeOn: {
      "keyup": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) { return null; }
        return _vm.handleSubmit2($event)
      }
    },
    model: {
      value: (_vm.ruleForm2.checkPass),
      callback: function($$v) {
        _vm.$set(_vm.ruleForm2, "checkPass", $$v)
      },
      expression: "ruleForm2.checkPass"
    }
  })], 1), _vm._v(" "), _c('el-checkbox', {
    staticClass: "remember",
    attrs: {
      "checked": ""
    },
    model: {
      value: (_vm.checked),
      callback: function($$v) {
        _vm.checked = $$v
      },
      expression: "checked"
    }
  }, [_vm._v("Remember password！")]), _vm._v(" "), _c('el-form-item', {
    staticStyle: {
      "width": "100%"
    }
  }, [_c('el-button', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "type": "primary",
      "loading": _vm.logining
    },
    nativeOn: {
      "click": function($event) {
        $event.preventDefault();
        return _vm.handleSubmit2($event)
      }
    }
  }, [_vm._v("Sign in")])], 1)], 1)], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "logo"
  }, [_c('img', {
    attrs: {
      "src": "",
      "alt": ""
    }
  })])
}]}

/***/ }),

/***/ 993:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('el-row', [_c('el-col', {
    attrs: {
      "span": 20
    }
  }, [_c('p', {
    staticClass: "data-txt"
  }), _vm._v(" "), _c('el-table', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "data": _vm.tableData,
      "show-header": false,
      "size": "small"
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "createDate",
      "formatter": _vm.formatter,
      "label": "",
      "width": "180"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "remarks",
      "label": ""
    }
  })], 1)], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 994:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "chart-container"
  }, [_c('el-row', [_c('transition', {
    attrs: {
      "name": "el-zoom-in-top"
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.show2),
      expression: "show2"
    }],
    staticClass: "transition-box"
  }, [_c('el-col', {
    attrs: {
      "span": 20
    }
  }, [_c('el-form', {
    ref: "form",
    staticClass: "form-box",
    attrs: {
      "model": _vm.sizeForm,
      "label-width": "120px",
      "size": "mini"
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "Asset Calss:"
    }
  }, [_c('el-checkbox-group', {
    attrs: {
      "min": 0
    },
    model: {
      value: (_vm.sizeForm.asset),
      callback: function($$v) {
        _vm.$set(_vm.sizeForm, "asset", $$v)
      },
      expression: "sizeForm.asset"
    }
  }, [_c('el-checkbox-button', {
    attrs: {
      "label": "EQ",
      "name": "type"
    }
  }), _vm._v(" "), _c('el-checkbox-button', {
    attrs: {
      "label": "BD",
      "name": "type"
    }
  }), _vm._v(" "), _c('el-checkbox-button', {
    attrs: {
      "label": "SP",
      "name": "type"
    }
  })], 1)], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "Industry:"
    }
  }, [_c('el-checkbox-group', {
    attrs: {
      "min": 0
    },
    model: {
      value: (_vm.sizeForm.booking),
      callback: function($$v) {
        _vm.$set(_vm.sizeForm, "booking", $$v)
      },
      expression: "sizeForm.booking"
    }
  }, [_c('el-checkbox-button', {
    attrs: {
      "label": "Fim",
      "name": "type"
    }
  }), _vm._v(" "), _c('el-checkbox-button', {
    attrs: {
      "label": "Tech",
      "name": "type"
    }
  }), _vm._v(" "), _c('el-checkbox-button', {
    attrs: {
      "label": "Chemistng",
      "name": "type"
    }
  }), _vm._v(" "), _c('el-checkbox-button', {
    attrs: {
      "label": "HK",
      "name": "type"
    }
  }), _vm._v(" "), _c('el-checkbox-button', {
    attrs: {
      "label": "US",
      "name": "type"
    }
  }), _vm._v(" "), _c('el-checkbox-button', {
    attrs: {
      "label": "UK",
      "name": "type"
    }
  })], 1)], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "Region:"
    }
  }, [_c('el-checkbox-group', {
    attrs: {
      "min": 0
    },
    model: {
      value: (_vm.sizeForm.region),
      callback: function($$v) {
        _vm.$set(_vm.sizeForm, "region", $$v)
      },
      expression: "sizeForm.region"
    }
  }, [_c('el-checkbox-button', {
    attrs: {
      "label": "China",
      "name": "type"
    }
  }), _vm._v(" "), _c('el-checkbox-button', {
    attrs: {
      "label": "HongKong",
      "name": "type"
    }
  }), _vm._v(" "), _c('el-checkbox-button', {
    attrs: {
      "label": "Singapore",
      "name": "type"
    }
  }), _vm._v(" "), _c('el-checkbox-button', {
    attrs: {
      "label": "United Kingdom",
      "name": "type"
    }
  })], 1)], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "Age:"
    }
  }, [_c('el-slider', {
    attrs: {
      "range": "",
      "step": 10,
      "show-stops": ""
    },
    model: {
      value: (_vm.sizeForm.ageValue),
      callback: function($$v) {
        _vm.$set(_vm.sizeForm, "ageValue", $$v)
      },
      expression: "sizeForm.ageValue"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "slider-mark"
  }, [_c('ul', _vm._l((_vm.sizeForm.ageMark), function(item) {
    return _c('li', [_vm._v("\n                                " + _vm._s(item) + "\n                            ")])
  }))])], 1), _vm._v(" "), _c('el-form-item', {
    staticStyle: {
      "display": "none"
    },
    attrs: {
      "size": "large"
    }
  }, [_c('el-button', {
    attrs: {
      "type": "primary",
      "size": "small"
    },
    on: {
      "click": _vm.onSubmit
    }
  }, [_vm._v("Sent")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "size": "small"
    }
  }, [_vm._v("Reset")])], 1)], 1)], 1)], 1)]), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 20
    }
  }, [_c('div', {
    staticClass: "showbtn",
    on: {
      "click": function($event) {
        _vm.show2 = !_vm.show2
      }
    }
  }, [_c('i', {
    staticClass: "fa",
    class: !_vm.show2 ? 'fa-angle-double-down' : 'fa-angle-double-up'
  })])]), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 24
    }
  }, [_c('div', {
    staticStyle: {
      "width": "80%",
      "height": "400px"
    },
    attrs: {
      "id": "chartPie"
    }
  })])], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 995:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_c('el-row', [_c('el-col', {
    attrs: {
      "span": 24
    }
  }, [_c('div', {
    staticClass: "cp-head-info"
  }, [_c('ul', {
    staticStyle: {
      "width": "60%",
      "float": "left"
    }
  }, [_c('li', [_c('span', {
    staticClass: "span1"
  }, [_vm._v("Customer Number:")]), _vm._v(" "), _c('span', {
    staticClass: "span2"
  }, [_vm._v("8000-123456")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "span1"
  }, [_vm._v("Account Number:")]), _vm._v(" "), _c('span', {
    staticClass: "span2"
  }, [_vm._v("0001")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "span1"
  }, [_vm._v("Customer Name:")]), _vm._v(" "), _c('span', {
    staticClass: "span2"
  }, [_vm._v("Nikko KITMAN")])])]), _vm._v(" "), _c('div', {
    staticStyle: {
      "width": "30%",
      "float": "right"
    }
  }, [_c('el-button', {
    staticStyle: {
      "float": "right",
      "margin": "25px"
    },
    attrs: {
      "size": "small",
      "type": "primary"
    }
  }, [_vm._v("Save As PDF")])], 1)])]), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 24
    }
  }, [_c('div', {
    staticClass: "cp-table-txt"
  }, [_c('p', [_vm._v("Equity:")])]), _vm._v(" "), _c('el-table', {
    staticClass: "cp-table",
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "data": _vm.tableData1,
      "show-summary": "",
      "sum-text": "Total",
      "size": "small",
      "header-cell-style": _vm.tableHeaderColor
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "name",
      "label": "Product Name"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "quantity",
      "label": "Quantity"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "totalAmount",
      "label": "Total Amount(USD)"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "marketPrice",
      "label": "Market Price"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "averageCost",
      "label": "Average Cost"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "pl",
      "label": "P&L(USD)"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "lbdp",
      "width": "180",
      "label": "Last Biz Date P&L(USD)"
    }
  })], 1)], 1), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 24
    }
  }, [_c('div', {
    staticClass: "cp-table-txt"
  }, [_c('p', [_vm._v("Fixed Income:")])]), _vm._v(" "), _c('el-table', {
    staticClass: "cp-table",
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "data": _vm.tableData2,
      "show-summary": "",
      "sum-text": "Total",
      "size": "small",
      "header-cell-style": _vm.tableHeaderColor
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "name",
      "label": "Product Name"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "quantity",
      "label": "Quantity"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "totalAmount",
      "label": "Total Amount(USD)"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "marketPrice",
      "label": "Market Price"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "averageCost",
      "label": "Average Cost"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "pl",
      "label": "P&L(USD)"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "lbdp",
      "width": "180",
      "label": "Last Biz Date P&L(USD)"
    }
  })], 1)], 1), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 24
    }
  }, [_c('div', {
    staticClass: "cp-table-txt"
  }, [_c('p', [_vm._v("FX:")])]), _vm._v(" "), _c('el-table', {
    staticClass: "cp-table",
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "data": _vm.tableData3,
      "show-summary": "",
      "sum-text": "Total",
      "size": "small",
      "header-cell-style": _vm.tableHeaderColor
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "name",
      "label": "CCY Pair"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "quantity",
      "label": "Buy Amout"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "totalAmount",
      "label": "Sell Amount"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "marketPrice",
      "label": "Bid/Offer Rate"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "averageCost",
      "label": "Market Rate"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "pl",
      "label": "P&L(USD)"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "lbdp",
      "width": "180",
      "label": "Last Biz Date P&L(USD)"
    }
  })], 1)], 1), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 24
    }
  }, [_c('div', {
    staticClass: "cp-table-txt"
  }, [_c('p', [_vm._v("Portfolio Summary:")])]), _vm._v(" "), _c('el-table', {
    staticClass: "cp-table",
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "data": _vm.tableData4,
      "size": "small",
      "header-cell-style": _vm.tableHeaderColor
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "name",
      "label": "Equity"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "quantity",
      "label": "Fixed Income"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "totalAmount",
      "label": "FXt"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "marketPrice",
      "label": "Structure Product"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "averageCost",
      "label": "Total Value"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "pl",
      "label": "Total P&L"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "lbdp",
      "width": "180",
      "label": "Total P&L Last Biz Date"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('el-row', [_c('el-col', {
    attrs: {
      "span": 12
    }
  }, [_c('div', {
    staticStyle: {
      "width": "80%",
      "height": "400px"
    },
    attrs: {
      "id": "chartPie1"
    }
  })]), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 12
    }
  }, [_c('div', {
    staticStyle: {
      "width": "80%",
      "height": "400px"
    },
    attrs: {
      "id": "chartPie2"
    }
  })])], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 996:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_c('el-col', {
    attrs: {
      "span": 12
    }
  }, [_c('el-form', {
    ref: "form",
    attrs: {
      "model": _vm.form,
      "label-width": "150px",
      "size": "small"
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "User ID :"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.form.userId),
      callback: function($$v) {
        _vm.$set(_vm.form, "userId", $$v)
      },
      expression: "form.userId"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "User Name :"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.form.userName),
      callback: function($$v) {
        _vm.$set(_vm.form, "userName", $$v)
      },
      expression: "form.userName"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "User Role :"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.form.userRole),
      callback: function($$v) {
        _vm.$set(_vm.form, "userRole", $$v)
      },
      expression: "form.userRole"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "RM Code :"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.form.rmCode),
      callback: function($$v) {
        _vm.$set(_vm.form, "rmCode", $$v)
      },
      expression: "form.rmCode"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "Team Code :"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.form.teamCode),
      callback: function($$v) {
        _vm.$set(_vm.form, "teamCode", $$v)
      },
      expression: "form.teamCode"
    }
  })], 1), _vm._v(" "), _c('el-form-item', [_c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.onSubmit
    }
  }, [_vm._v("Create Now")]), _vm._v(" "), _c('el-button', [_vm._v("Reset")])], 1)], 1)], 1), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 18
    }
  }, [_c('p', {
    staticClass: "info-txt"
  }, [_vm._v("User List")]), _vm._v(" "), _c('el-table', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "data": _vm.tableData,
      "size": "small"
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "userId",
      "label": "User ID",
      "width": "180"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "userName",
      "label": "User Name",
      "width": "180"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "userRole",
      "label": "User Role"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "rmCode",
      "label": "RM Code"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "teamCode",
      "label": "Team Code"
    }
  })], 1)], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 997:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('el-row', [_c('el-col', {
    staticStyle: {
      "margin": "35px 0 25px"
    },
    attrs: {
      "span": 14
    }
  }, [_c('el-form', {
    ref: "form",
    attrs: {
      "model": _vm.form,
      "label-width": "100px",
      "size": "mini"
    }
  }, [_c('el-row', [_c('el-col', {
    attrs: {
      "span": 11
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "Buy/Sell:",
      "inline": ""
    }
  }, [_c('el-radio-group', {
    model: {
      value: (_vm.form.transactionType),
      callback: function($$v) {
        _vm.$set(_vm.form, "transactionType", $$v)
      },
      expression: "form.transactionType"
    }
  }, [_c('el-radio-button', {
    attrs: {
      "label": "B",
      "value": "B"
    }
  }, [_vm._v("Buy")]), _vm._v(" "), _c('el-radio-button', {
    attrs: {
      "label": "S",
      "value": "S"
    }
  }, [_vm._v("Sell")])], 1)], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "Customer:"
    }
  }, [_c('el-select', {
    attrs: {
      "placeholder": "Pls select Customer Number!"
    },
    on: {
      "change": _vm.getcustomerNumber
    },
    model: {
      value: (_vm.form.customerNumber),
      callback: function($$v) {
        _vm.$set(_vm.form, "customerNumber", $$v)
      },
      expression: "form.customerNumber"
    }
  }, _vm._l((_vm.form.customerNumberoptions), function(item, index) {
    return _c('el-option', {
      key: index,
      attrs: {
        "label": item.label,
        "value": item.value
      }
    })
  }))], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "Share Issue:"
    }
  }, [_c('el-select', {
    attrs: {
      "placeholder": "Pls select issue Code!"
    },
    on: {
      "change": _vm.getIssueItem
    },
    model: {
      value: (_vm.form.shareIssueCode),
      callback: function($$v) {
        _vm.$set(_vm.form, "shareIssueCode", $$v)
      },
      expression: "form.shareIssueCode"
    }
  }, _vm._l((_vm.form.shareIssueCodeoptions), function(item) {
    return _c('el-option', {
      key: item.value,
      attrs: {
        "label": item.label,
        "value": item.value
      }
    })
  }))], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "Norminal:"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.form.shareQuantity),
      callback: function($$v) {
        _vm.$set(_vm.form, "shareQuantity", $$v)
      },
      expression: "form.shareQuantity"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "Share Price:"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.form.sharePrice),
      callback: function($$v) {
        _vm.$set(_vm.form, "sharePrice", $$v)
      },
      expression: "form.sharePrice"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "TradeDate:"
    }
  }, [_c('el-date-picker', {
    attrs: {
      "type": "date",
      "value-format": "yyyy-MM-dd",
      "placeholder": "Please pick a date!"
    },
    model: {
      value: (_vm.form.tradeDate),
      callback: function($$v) {
        _vm.$set(_vm.form, "tradeDate", $$v)
      },
      expression: "form.tradeDate"
    }
  })], 1)], 1), _vm._v(" "), _c('el-col', {
    staticStyle: {
      "height": "20px"
    },
    attrs: {
      "span": 0
    }
  }), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 11
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "Trans Type:",
      "inline": ""
    }
  }, [_c('el-radio-group', {
    model: {
      value: (_vm.form.type2),
      callback: function($$v) {
        _vm.$set(_vm.form, "type2", $$v)
      },
      expression: "form.type2"
    }
  }, [_c('el-radio-button', {
    attrs: {
      "label": "eShare"
    }
  }), _vm._v(" "), _c('el-radio-button', {
    attrs: {
      "label": "Phone"
    }
  })], 1)], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "Account:"
    }
  }, [_c('el-select', {
    attrs: {
      "placeholder": "Pls select Account Number!"
    },
    model: {
      value: (_vm.form.accountNumber),
      callback: function($$v) {
        _vm.$set(_vm.form, "accountNumber", $$v)
      },
      expression: "form.accountNumber"
    }
  }, _vm._l((_vm.form.accountNumberoptions), function(item) {
    return _c('el-option', {
      key: item.value,
      attrs: {
        "label": item.label,
        "value": item.value
      }
    })
  }))], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "Currency:"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.form.shareCurrency),
      callback: function($$v) {
        _vm.$set(_vm.form, "shareCurrency", $$v)
      },
      expression: "form.shareCurrency"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "Trade Type:"
    }
  }, [_c('el-select', {
    attrs: {
      "placeholder": "Pls select Trade Type"
    },
    model: {
      value: (_vm.form.tradeType),
      callback: function($$v) {
        _vm.$set(_vm.form, "tradeType", $$v)
      },
      expression: "form.tradeType"
    }
  }, [_c('el-option', {
    attrs: {
      "label": "Limit",
      "value": "shanghai"
    }
  }), _vm._v(" "), _c('el-option', {
    attrs: {
      "label": "Limit",
      "value": "beijing"
    }
  })], 1)], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "Remark:"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.form.remark),
      callback: function($$v) {
        _vm.$set(_vm.form, "remark", $$v)
      },
      expression: "form.remark"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "ValueDate:"
    }
  }, [_c('el-date-picker', {
    attrs: {
      "type": "date",
      "value-format": "yyyy-MM-dd",
      "placeholder": "Please pick a date!"
    },
    model: {
      value: (_vm.form.valueDate),
      callback: function($$v) {
        _vm.$set(_vm.form, "valueDate", $$v)
      },
      expression: "form.valueDate"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('el-row', [_c('el-col', {
    staticClass: "el-form-item_submit",
    attrs: {
      "span": 24
    }
  }, [_c('el-button', {
    attrs: {
      "type": "primary",
      "size": "small",
      "loding": _vm.submiting
    },
    on: {
      "click": _vm.onSubmit
    }
  }, [_vm._v("Submit")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "size": "small"
    },
    on: {
      "click": _vm.onReset
    }
  }, [_vm._v("Reset")])], 1)], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "cp-table-txt"
  }, [_c('p', [_vm._v("Holding Details:")])]), _vm._v(" "), _c('el-table', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "data": _vm.tableData,
      "size": "small",
      "header-cell-style": _vm.tableHeaderColor
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "shareIssueCode",
      "label": "Issue Name"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "averagePrice",
      "label": "Avg Price"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "considerationAmount",
      "label": "Norminal"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "holdingQuantity",
      "label": "Total Value"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "shareCurrency",
      "label": "CCY"
    }
  })], 1)], 1), _vm._v(" "), _c('el-col', {
    staticStyle: {
      "padding": "40px 10px 0 40px"
    },
    attrs: {
      "span": 10
    }
  }, [_c('el-form', {
    ref: "form",
    attrs: {
      "model": _vm.issueInfo,
      "label-width": "150px",
      "size": "mina"
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "House View:"
    }
  }, [_c('div', [_vm._v(_vm._s(_vm.issueInfo.houseView))])]), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "Credit Rating:"
    }
  }, [_c('div', [_vm._v(_vm._s(_vm.issueInfo.creditRating))])]), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "Solicite:"
    }
  }, [_c('div', [_vm._v(_vm._s(_vm.issueInfo.solicite))])]), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "Issue Code:"
    }
  }, [_c('div', [_vm._v(_vm._s(_vm.issueInfo.issueCode))])]), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "Share Issue Name:"
    }
  }, [_c('div', [_vm._v(_vm._s(_vm.issueInfo.shareIssueName))])]), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "Share Price:"
    }
  }, [_c('div', [_vm._v(_vm._s(_vm.issueInfo.sharePrice))])])], 1)], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 998:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "chart-container"
  }, [_c('el-row', [_c('el-col', {
    attrs: {
      "span": 16
    }
  }, [_c('div', {
    staticStyle: {
      "width": "100%",
      "height": "500px"
    },
    attrs: {
      "id": "chartPie"
    }
  })]), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 8
    }
  }, [_c('el-table', {
    staticStyle: {
      "width": "100%",
      "margin-top": "30%"
    },
    attrs: {
      "size": "small",
      "data": _vm.tableData,
      "show-summary": true,
      "sum-text": "Total"
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "name",
      "width": "auto"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "value",
      "width": "60"
    }
  })], 1)], 1)], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 999:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "chart-container"
  }, [_c('el-row', {
    attrs: {
      "loading": _vm.loading
    }
  }, [_c('transition', {
    attrs: {
      "name": "el-zoom-in-top"
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.show2),
      expression: "show2"
    }],
    staticClass: "transition-box"
  }, [_c('el-col', {
    attrs: {
      "span": 20
    }
  }, [_c('el-form', {
    ref: "form",
    staticClass: "form-box",
    attrs: {
      "model": _vm.sizeForm,
      "label-width": "120px",
      "size": "mini"
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "Region:"
    }
  }, [_c('el-checkbox-group', {
    attrs: {
      "min": 0
    },
    model: {
      value: (_vm.sizeForm.region),
      callback: function($$v) {
        _vm.$set(_vm.sizeForm, "region", $$v)
      },
      expression: "sizeForm.region"
    }
  }, [_c('el-checkbox-button', {
    attrs: {
      "label": "CN",
      "name": "type"
    }
  }, [_vm._v("China")]), _vm._v(" "), _c('el-checkbox-button', {
    attrs: {
      "label": "HK",
      "name": "type"
    }
  }, [_vm._v("HongKong")]), _vm._v(" "), _c('el-checkbox-button', {
    attrs: {
      "label": "SG",
      "name": "type"
    }
  }, [_vm._v("Singapore")]), _vm._v(" "), _c('el-checkbox-button', {
    attrs: {
      "label": "UK",
      "name": "type"
    }
  }, [_vm._v("United Kingdom")])], 1)], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "Type:"
    }
  }, [_c('el-checkbox-group', {
    model: {
      value: (_vm.sizeForm.type),
      callback: function($$v) {
        _vm.$set(_vm.sizeForm, "type", $$v)
      },
      expression: "sizeForm.type"
    }
  }, [_c('el-checkbox', {
    attrs: {
      "label": "I",
      "border": ""
    }
  }, [_vm._v("Individual")]), _vm._v(" "), _c('el-checkbox', {
    attrs: {
      "label": "E",
      "border": ""
    }
  }, [_vm._v("Entity")])], 1)], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "Booking Entity:"
    }
  }, [_c('el-checkbox-group', {
    attrs: {
      "min": 0
    },
    model: {
      value: (_vm.sizeForm.bookingEntity),
      callback: function($$v) {
        _vm.$set(_vm.sizeForm, "bookingEntity", $$v)
      },
      expression: "sizeForm.bookingEntity"
    }
  }, [_c('el-checkbox-button', {
    attrs: {
      "label": "CN",
      "name": "type"
    }
  }), _vm._v(" "), _c('el-checkbox-button', {
    attrs: {
      "label": "HK",
      "name": "type"
    }
  }), _vm._v(" "), _c('el-checkbox-button', {
    attrs: {
      "label": "SG",
      "name": "type"
    }
  }), _vm._v(" "), _c('el-checkbox-button', {
    attrs: {
      "label": "UK",
      "name": "type"
    }
  })], 1)], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "Age:"
    }
  }, [_c('el-slider', {
    attrs: {
      "range": "",
      "step": 10,
      "show-stops": ""
    },
    model: {
      value: (_vm.sizeForm.ageValue),
      callback: function($$v) {
        _vm.$set(_vm.sizeForm, "ageValue", $$v)
      },
      expression: "sizeForm.ageValue"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "slider-mark"
  }, [_c('ul', _vm._l((_vm.sizeForm.ageMark), function(item) {
    return _c('li', [_vm._v("\n                                        " + _vm._s(item) + "\n                                    ")])
  }))])], 1), _vm._v(" "), _c('el-form-item', {
    staticStyle: {
      "display": "none"
    },
    attrs: {
      "size": "large"
    }
  }, [_c('el-button', {
    attrs: {
      "type": "primary",
      "size": "small"
    },
    on: {
      "click": _vm.onSubmit
    }
  }, [_vm._v("Sent")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "size": "small"
    }
  }, [_vm._v("Reset")])], 1)], 1)], 1)], 1)]), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 20
    }
  }, [_c('div', {
    staticClass: "showbtn",
    on: {
      "click": function($event) {
        _vm.show2 = !_vm.show2
      }
    }
  }, [_c('i', {
    staticClass: "fa",
    class: !_vm.show2 ? 'fa-angle-double-down' : 'fa-angle-double-up'
  })])]), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 24
    }
  }, [_c('div', {
    staticStyle: {
      "width": "80%",
      "height": "400px"
    },
    attrs: {
      "id": "chartPie"
    }
  })])], 1)], 1)
},staticRenderFns: []}

/***/ })

},[439]);
//# sourceMappingURL=app.b40b21fdc8b7b9931929.js.map