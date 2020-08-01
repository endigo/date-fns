var formatRelativeLocale = {
  lastWeek: "'сүүлийн' eeee ' ' p",
  yesterday: "'өчигдөр' p",
  today: "'өнөөдөр' p",
  tomorrow: "'маргааш' p",
  nextWeek: "eeee ' ' p",
  other: 'P',
}

export default function formatRelative(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token]
}
