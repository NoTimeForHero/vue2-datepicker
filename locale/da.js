(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined'
    ? (module.exports = factory(require('vue2-datepicker')))
    : typeof define === 'function' && define.amd
    ? define(['vue2-datepicker'], factory)
    : ((global = global || self),
      ((global.DatePicker = global.DatePicker || {}),
      (global.DatePicker.lang = global.DatePicker.lang || {}),
      (global.DatePicker.lang.da = factory(global.DatePicker))));
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

  var da = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, '__esModule', {
      value: true,
    });
    exports['default'] = void 0;
    var locale = {
      months: [
        'januar',
        'februar',
        'marts',
        'april',
        'maj',
        'juni',
        'juli',
        'august',
        'september',
        'oktober',
        'november',
        'december',
      ],
      monthsShort: [
        'jan',
        'feb',
        'mar',
        'apr',
        'maj',
        'jun',
        'jul',
        'aug',
        'sep',
        'okt',
        'nov',
        'dec',
      ],
      weekdays: ['søndag', 'mandag', 'tirsdag', 'onsdag', 'torsdag', 'fredag', 'lørdag'],
      weekdaysShort: ['søn', 'man', 'tir', 'ons', 'tor', 'fre', 'lør'],
      weekdaysMin: ['sø', 'ma', 'ti', 'on', 'to', 'fr', 'lø'],
      firstDayOfWeek: 1,
      firstWeekContainsDate: 4,
    };
    var _default = locale;
    exports['default'] = _default;
    module.exports = exports.default;
  });

  var da$1 = unwrapExports(da);

  var lang = {
    formatLocale: da$1,
    yearFormat: 'YYYY',
    monthFormat: 'MMM',
    monthBeforeYear: true,
  };
  DatePicker.locale('da', lang);

  return lang;
});
