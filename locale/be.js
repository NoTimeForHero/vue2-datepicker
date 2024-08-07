(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined'
    ? (module.exports = factory(require('vue2-datepicker')))
    : typeof define === 'function' && define.amd
    ? define(['vue2-datepicker'], factory)
    : ((global = global || self),
      ((global.DatePicker = global.DatePicker || {}),
      (global.DatePicker.lang = global.DatePicker.lang || {}),
      (global.DatePicker.lang.be = factory(global.DatePicker))));
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

  var be = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, '__esModule', {
      value: true,
    });
    exports['default'] = void 0;
    var locale = {
      months: [
        'студзень',
        'люты',
        'сакавік',
        'красавік',
        'травень',
        'чэрвень',
        'ліпень',
        'жнівень',
        'верасень',
        'кастрычнік',
        'лістапад',
        'снежань',
      ],
      monthsShort: [
        'студ',
        'лют',
        'сак',
        'крас',
        'трав',
        'чэрв',
        'ліп',
        'жнів',
        'вер',
        'каст',
        'ліст',
        'снеж',
      ],
      weekdays: ['нядзеля', 'панядзелак', 'аўторак', 'серада', 'чацвер', 'пятніца', 'субота'],
      weekdaysShort: ['нд', 'пн', 'ат', 'ср', 'чц', 'пт', 'сб'],
      weekdaysMin: ['нд', 'пн', 'ат', 'ср', 'чц', 'пт', 'сб'],
      firstDayOfWeek: 1,
      firstWeekContainsDate: 7,
    };
    var _default = locale;
    exports['default'] = _default;
    module.exports = exports.default;
  });

  var be$1 = unwrapExports(be);

  var lang = {
    formatLocale: be$1,
    yearFormat: 'YYYY',
    monthFormat: 'MMM',
    monthBeforeYear: true,
  };
  DatePicker.locale('be', lang);

  return lang;
});
