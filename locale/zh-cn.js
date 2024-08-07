(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined'
    ? (module.exports = factory(require('vue2-datepicker')))
    : typeof define === 'function' && define.amd
    ? define(['vue2-datepicker'], factory)
    : ((global = global || self),
      ((global.DatePicker = global.DatePicker || {}),
      (global.DatePicker.lang = global.DatePicker.lang || {}),
      (global.DatePicker.lang.zhCN = factory(global.DatePicker))));
})(this, function (DatePicker) {
  'use strict';

  DatePicker =
    DatePicker && Object.prototype.hasOwnProperty.call(DatePicker, 'default')
      ? DatePicker['default']
      : DatePicker;

  function unwrapExports(x) {
    return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default')
      ? x['default']
      : x;
  }

  function createCommonjsModule(fn, module) {
    return (module = { exports: {} }), fn(module, module.exports), module.exports;
  }

  var zhCn = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, '__esModule', {
      value: true,
    });
    exports['default'] = void 0;
    var locale = {
      months: [
        '一月',
        '二月',
        '三月',
        '四月',
        '五月',
        '六月',
        '七月',
        '八月',
        '九月',
        '十月',
        '十一月',
        '十二月',
      ],
      monthsShort: [
        '1月',
        '2月',
        '3月',
        '4月',
        '5月',
        '6月',
        '7月',
        '8月',
        '9月',
        '10月',
        '11月',
        '12月',
      ],
      weekdays: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
      weekdaysShort: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
      weekdaysMin: ['日', '一', '二', '三', '四', '五', '六'],
      firstDayOfWeek: 1,
      firstWeekContainsDate: 4,
      meridiemParse: /上午|下午/,
      meridiem: function meridiem(hour) {
        if (hour < 12) {
          return '上午';
        }

        return '下午';
      },
      isPM: function isPM(input) {
        return input === '下午';
      },
    };
    var _default = locale;
    exports['default'] = _default;
    module.exports = exports.default;
  });

  var zhCN = unwrapExports(zhCn);

  var lang = {
    formatLocale: zhCN,
    yearFormat: 'YYYY年',
    monthFormat: 'MMM',
    monthBeforeYear: false,
  };
  DatePicker.locale('zh-cn', lang);

  return lang;
});
