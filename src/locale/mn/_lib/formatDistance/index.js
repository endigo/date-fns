var formatDistanceLocale = {
  lessThanXSeconds: {
    one: '1 хоромоос бага',
    other: '{{count}}-с бага хором',
  },

  xSeconds: {
    one: '1 хором',
    other: '{{count}} хором',
  },

  halfAMinute: 'хагас минут',

  lessThanXMinutes: {
    one: '1 минутаас бага',
    other: '{{count}}-с бага минут',
  },

  xMinutes: {
    one: '1 минут',
    other: '{{count}} минут',
  },

  aboutXHours: {
    one: '1 цаг орчим',
    other: '{{count}} цаг орчим',
  },

  xHours: {
    one: '1 цаг',
    other: '{{count}} цаг',
  },

  xDays: {
    one: '1 өдөр',
    other: '{{count}} өдөр',
  },

  aboutXWeeks: {
    one: '1 долоо хоног орчим',
    other: 'ойролцоогоор {{count}} долоо хоног',
  },

  xWeeks: {
    one: '1 долоо хоног',
    other: '{{count}} долоо хоног',
  },

  aboutXMonths: {
    one: '1 сар орчим',
    other: '{{count}} сар орчим',
  },

  xMonths: {
    one: '1 сар',
    other: '{{count}} сар',
  },

  aboutXYears: {
    one: '1 жил орчим',
    other: '{{count}} жил орчим',
  },

  xYears: {
    one: '1 жил',
    other: '{{count}} жил',
  },

  overXYears: {
    one: '1 жилээс их',
    other: '{{count}} жилээс их',
  },

  almostXYears: {
    one: 'бараг 1 жил',
    other: 'бараг {{count}} бараг',
  },
}

export default function formatDistance(token, count, options) {
  options = options || {}

  var result
  if (typeof formatDistanceLocale[token] === 'string') {
    result = formatDistanceLocale[token]
  } else if (count === 1) {
    result = formatDistanceLocale[token].one
  } else {
    result = formatDistanceLocale[token].other.replace('{{count}}', count)
  }

  if (options.addSuffix) {
    if (options.comparison > 0) {
      return result
    } else {
      return result + ' өмнө'
    }
  }

  return result
}
