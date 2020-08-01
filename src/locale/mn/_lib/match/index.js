import buildMatchPatternFn from '../../../_lib/buildMatchPatternFn/index.js'
import buildMatchFn from '../../../_lib/buildMatchFn/index.js'

var matchOrdinalNumberPattern = /^(\d+)(-р)?/i
var parseOrdinalNumberPattern = /\d+/i

var matchEraPatterns = {
  narrow: /^(МЭӨ|МЭ)/i,
  abbreviated: /^(м\.?\s?э\.?\s?ө\.?|м\.?\s?э\.?)/i,
  wide: /^(Манай эрний өмнөх|Манай эрний)/i,
}
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i],
}

var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234]-р? улирал/i,
}
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i],
}

var matchMonthPatterns = {
  narrow: /^\d/i,
  abbreviated: /^(1 сар|2 сар|3 сар|4 сар|5 сар|6 сар|7 сар|8 сар|9 сар|10 сар|11 сар|12 сар)/i,
  wide: /^('нэгдүгээр сар'|'хоёрдугаар сар'|'гуравдугаар сар'|'дөрөвдүгээр сар'|'тавдугаар сар'|'зургаадугаар сар'|'долоодугаар сар'|'наймдугаар сар'|'есдүгээр сар'|'аравдугаар сар'|'арван нэгдүгээр сар'|'арван хоёрдугаар')/i,
}
var parseMonthPatterns = {
  narrow: [
    /^1/i,
    /^2/i,
    /^3/i,
    /^4/i,
    /^5/i,
    /^6/i,
    /^7/i,
    /^8/i,
    /^9/i,
    /^10/i,
    /^11/i,
    /^12/i,
  ],
  any: [
    /^1 сар/i,
    /^2 сар/i,
    /^3 сар/i,
    /^4 сар/i,
    /^5 сар/i,
    /^6 сар/i,
    /^7 сар/i,
    /^8 сар/i,
    /^9 сар/i,
    /^10 сар/i,
    /^11 сар/i,
    /^12 сар/i,
  ],
}

var matchDayPatterns = {
  narrow: /^[ндмлпб]/i,
  short: /^(ня|да|мя|лх|пү|ба|бя)/i,
  abbreviated: /^(ня|да|мя|лх|пү|ба|бя)/i,
  wide: /^(ням|даваа|мягмар|лхагва|пүрэв|баасан|бямба)/i,
}
var parseDayPatterns = {
  narrow: [/^н/i, /^д/i, /^м/i, /^л/i, /^п/i, /^б/i, /^б/i],
  any: [/^ня/i, /^да/i, /^мя/i, /^лх/i, /^пү/i, /^ба/i, /^бя/i],
}

var matchDayPeriodPatterns = {
  narrow: /^(өглөө|үдээс хойш|орой|шөнө)/i,
  any: /^(өглөө|үдээс хойш|орой|шөнө)/i,
}
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^шөнө дунд/i,
    noon: /^үд дүнд/i,
    morning: /өглөө/i,
    afternoon: /үдээс хойш/i,
    evening: /орой/i,
    night: /шөнө/i,
  },
}

var match = {
  ordinalNumber: buildMatchPatternFn({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function (value) {
      return parseInt(value, 10)
    },
  }),

  era: buildMatchFn({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any',
  }),

  quarter: buildMatchFn({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function (index) {
      return index + 1
    },
  }),

  month: buildMatchFn({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any',
  }),

  day: buildMatchFn({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any',
  }),

  dayPeriod: buildMatchFn({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any',
  }),
}

export default match
