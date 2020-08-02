import buildLocalizeFn from '../../../_lib/buildLocalizeFn/index.js'

var eraValues = {
  narrow: ['МЭӨ', 'МЭ'],
  abbreviated: ['МЭӨ', 'МЭ'],
  wide: ['Манай эрний өмнөх', 'Манай эрний']
}

var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1-р улирал', '2-р улирал', '3-р улирал', '4-р улирал']
}

// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
var monthValues = {
  narrow: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
  abbreviated: [
    '1 сар',
    '2 сар',
    '3 сар',
    '4 сар',
    '5 сар',
    '6 сар',
    '7 сар',
    '8 сар',
    '9 сар',
    '10 сар',
    '11 сар',
    '12 сар'
  ],
  wide: [
    'Нэгдүгээр сар',
    'Хоёрдугаар сар',
    'Гуравдугаар сар',
    'Дөрөвдүгээр сар',
    'Тавдугаар сар',
    'Зургаадугаар сар',
    'Долдугаар сар',
    'Наймдугаар сар',
    'Есдүгээр сар',
    'Аравдугаар сар',
    'Арван нэгдүгээр сар',
    'Арван хоёрдугаар'
  ]
}

var dayValues = {
  narrow: ['Н', 'Д', 'М', 'Л', 'П', 'Б', 'Б'],
  short: ['Ня', 'Да', 'Мя', 'Лх', 'Пү', 'Ба', 'Бя'],
  abbreviated: ['Ням', 'Дав', 'Мяг', 'Лха', 'Пүр', 'Баа', 'Бям'],
  wide: ['Ням', 'Даваа', 'Мягмар', 'Лхагва', 'Пүрэв', 'Баасан', 'Бямба']
}

var dayPeriodValues = {
  narrow: {
    am: '',
    pm: '',
    midnight: 'шөнө дунд',
    noon: 'үд дүнд',
    morning: 'өглөө',
    afternoon: 'үдээс хойш',
    evening: 'орой',
    night: 'шөнө'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'шөнө дунд',
    noon: 'үд дүнд',
    morning: 'өглөө',
    afternoon: 'үдээс хойш',
    evening: 'орой',
    night: 'шөнө'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'шөнө дунд',
    noon: 'үд дунд',
    morning: 'өглөө',
    afternoon: 'үдээс хойш',
    evening: 'орой',
    night: 'шөнө'
  }
}
var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'шөнө дунд',
    noon: 'үд дүнд',
    morning: 'өглөө',
    afternoon: 'үдээс хойш',
    evening: 'орой',
    night: 'шөнө'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'шөнө дунд',
    noon: 'үд дүнд',
    morning: 'өглөө',
    afternoon: 'үдээс хойш',
    evening: 'орой',
    night: 'шөнө'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'шөнө дунд',
    noon: 'үд дүнд',
    morning: 'өглөө',
    afternoon: 'үдээс хойш',
    evening: 'орой',
    night: 'шөнө'
  }
}

function ordinalNumber(dirtyNumber, dirtyOptions) {
  var number = Number(dirtyNumber)

  // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`:
  //
  var options = dirtyOptions || {}
  var unit = String(options.unit)
  //
  // where `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'

  switch (unit) {
    case 'year':
      return number + ' он'
    case 'week':
      return number + ' долоо хоног'
    default:
      return number
  }
}

var localize = {
  ordinalNumber: ordinalNumber,

  era: buildLocalizeFn({
    values: eraValues,
    defaultWidth: 'abbreviated'
  }),

  quarter: buildLocalizeFn({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function(quarter) {
      return Number(quarter) - 1
    }
  }),

  month: buildLocalizeFn({
    values: monthValues,
    defaultWidth: 'abbreviated'
  }),

  day: buildLocalizeFn({
    values: dayValues,
    defaultWidth: 'abbreviated'
  }),

  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
}

export default localize
