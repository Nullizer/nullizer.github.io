function toDate(e){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function toInteger(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function addMilliseconds(e,t){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");var r=toDate(e).getTime(),n=toInteger(t);return new Date(r+n)}var MILLISECONDS_IN_MINUTE=6e4;function getTimezoneOffsetInMilliseconds(e){var t=new Date(e.getTime()),r=t.getTimezoneOffset();t.setSeconds(0,0);var n=t.getTime()%MILLISECONDS_IN_MINUTE;return r*MILLISECONDS_IN_MINUTE+n}function isValid(e){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var t=toDate(e);return!isNaN(t)}var formatDistanceLocale={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function formatDistance(e,t,r){var n;return r=r||{},n="string"==typeof formatDistanceLocale[e]?formatDistanceLocale[e]:1===t?formatDistanceLocale[e].one:formatDistanceLocale[e].other.replace("{{count}}",t),r.addSuffix?r.comparison>0?"in "+n:n+" ago":n}function buildFormatLongFn(e){return function(t){var r=t||{},n=r.width?String(r.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}var dateFormats={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},timeFormats={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},dateTimeFormats={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},formatLong={date:buildFormatLongFn({formats:dateFormats,defaultWidth:"full"}),time:buildFormatLongFn({formats:timeFormats,defaultWidth:"full"}),dateTime:buildFormatLongFn({formats:dateTimeFormats,defaultWidth:"full"})},formatRelativeLocale={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function formatRelative(e,t,r,n){return formatRelativeLocale[e]}function buildLocalizeFn(e){return function(t,r){var n,a=r||{};if("formatting"===(a.context?String(a.context):"standalone")&&e.formattingValues){var o=e.defaultFormattingWidth||e.defaultWidth,i=a.width?String(a.width):o;n=e.formattingValues[i]||e.formattingValues[o]}else{var u=e.defaultWidth,s=a.width?String(a.width):e.defaultWidth;n=e.values[s]||e.values[u]}return n[e.argumentCallback?e.argumentCallback(t):t]}}var eraValues={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},quarterValues={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},monthValues={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},dayValues={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},dayPeriodValues={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},formattingDayPeriodValues={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}};function ordinalNumber(e,t){var r=Number(e),n=r%100;if(n>20||n<10)switch(n%10){case 1:return r+"st";case 2:return r+"nd";case 3:return r+"rd"}return r+"th"}var localize={ordinalNumber:ordinalNumber,era:buildLocalizeFn({values:eraValues,defaultWidth:"wide"}),quarter:buildLocalizeFn({values:quarterValues,defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:buildLocalizeFn({values:monthValues,defaultWidth:"wide"}),day:buildLocalizeFn({values:dayValues,defaultWidth:"wide"}),dayPeriod:buildLocalizeFn({values:dayPeriodValues,defaultWidth:"wide",formattingValues:formattingDayPeriodValues,defaultFormattingWidth:"wide"})};function buildMatchPatternFn(e){return function(t,r){var n=String(t),a=r||{},o=n.match(e.matchPattern);if(!o)return null;var i=o[0],u=n.match(e.parsePattern);if(!u)return null;var s=e.valueCallback?e.valueCallback(u[0]):u[0];return{value:s=a.valueCallback?a.valueCallback(s):s,rest:n.slice(i.length)}}}function buildMatchFn(e){return function(t,r){var n=String(t),a=r||{},o=a.width,i=o&&e.matchPatterns[o]||e.matchPatterns[e.defaultMatchWidth],u=n.match(i);if(!u)return null;var s,d=u[0],c=o&&e.parsePatterns[o]||e.parsePatterns[e.defaultParseWidth];return s="[object Array]"===Object.prototype.toString.call(c)?c.findIndex(function(e){return e.test(n)}):findKey(c,function(e){return e.test(n)}),s=e.valueCallback?e.valueCallback(s):s,{value:s=a.valueCallback?a.valueCallback(s):s,rest:n.slice(d.length)}}}function findKey(e,t){for(var r in e)if(e.hasOwnProperty(r)&&t(e[r]))return r}var matchOrdinalNumberPattern=/^(\d+)(th|st|nd|rd)?/i,parseOrdinalNumberPattern=/\d+/i,matchEraPatterns={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},parseEraPatterns={any:[/^b/i,/^(a|c)/i]},matchQuarterPatterns={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},parseQuarterPatterns={any:[/1/i,/2/i,/3/i,/4/i]},matchMonthPatterns={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},parseMonthPatterns={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},matchDayPatterns={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},parseDayPatterns={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},matchDayPeriodPatterns={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},parseDayPeriodPatterns={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},match={ordinalNumber:buildMatchPatternFn({matchPattern:matchOrdinalNumberPattern,parsePattern:parseOrdinalNumberPattern,valueCallback:function(e){return parseInt(e,10)}}),era:buildMatchFn({matchPatterns:matchEraPatterns,defaultMatchWidth:"wide",parsePatterns:parseEraPatterns,defaultParseWidth:"any"}),quarter:buildMatchFn({matchPatterns:matchQuarterPatterns,defaultMatchWidth:"wide",parsePatterns:parseQuarterPatterns,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:buildMatchFn({matchPatterns:matchMonthPatterns,defaultMatchWidth:"wide",parsePatterns:parseMonthPatterns,defaultParseWidth:"any"}),day:buildMatchFn({matchPatterns:matchDayPatterns,defaultMatchWidth:"wide",parsePatterns:parseDayPatterns,defaultParseWidth:"any"}),dayPeriod:buildMatchFn({matchPatterns:matchDayPeriodPatterns,defaultMatchWidth:"any",parsePatterns:parseDayPeriodPatterns,defaultParseWidth:"any"})},locale={formatDistance:formatDistance,formatLong:formatLong,formatRelative:formatRelative,localize:localize,match:match,options:{weekStartsOn:0,firstWeekContainsDate:1}};function subMilliseconds(e,t){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");return addMilliseconds(e,-toInteger(t))}function addLeadingZeros(e,t){for(var r=e<0?"-":"",n=Math.abs(e).toString();n.length<t;)n="0"+n;return r+n}var formatters={y:function(e,t){var r=e.getUTCFullYear(),n=r>0?r:1-r;return addLeadingZeros("yy"===t?n%100:n,t.length)},M:function(e,t){var r=e.getUTCMonth();return"M"===t?String(r+1):addLeadingZeros(r+1,2)},d:function(e,t){return addLeadingZeros(e.getUTCDate(),t.length)},a:function(e,t){var r=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":case"aaa":return r.toUpperCase();case"aaaaa":return r[0];case"aaaa":default:return"am"===r?"a.m.":"p.m."}},h:function(e,t){return addLeadingZeros(e.getUTCHours()%12||12,t.length)},H:function(e,t){return addLeadingZeros(e.getUTCHours(),t.length)},m:function(e,t){return addLeadingZeros(e.getUTCMinutes(),t.length)},s:function(e,t){return addLeadingZeros(e.getUTCSeconds(),t.length)},S:function(e,t){var r=t.length,n=e.getUTCMilliseconds();return addLeadingZeros(Math.floor(n*Math.pow(10,r-3)),t.length)}},MILLISECONDS_IN_DAY=864e5;function getUTCDayOfYear(e){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var t=toDate(e),r=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var n=r-t.getTime();return Math.floor(n/MILLISECONDS_IN_DAY)+1}function startOfUTCISOWeek(e){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var t=toDate(e),r=t.getUTCDay(),n=(r<1?7:0)+r-1;return t.setUTCDate(t.getUTCDate()-n),t.setUTCHours(0,0,0,0),t}function getUTCISOWeekYear(e){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var t=toDate(e),r=t.getUTCFullYear(),n=new Date(0);n.setUTCFullYear(r+1,0,4),n.setUTCHours(0,0,0,0);var a=startOfUTCISOWeek(n),o=new Date(0);o.setUTCFullYear(r,0,4),o.setUTCHours(0,0,0,0);var i=startOfUTCISOWeek(o);return t.getTime()>=a.getTime()?r+1:t.getTime()>=i.getTime()?r:r-1}function startOfUTCISOWeekYear(e){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var t=getUTCISOWeekYear(e),r=new Date(0);return r.setUTCFullYear(t,0,4),r.setUTCHours(0,0,0,0),startOfUTCISOWeek(r)}var MILLISECONDS_IN_WEEK=6048e5;function getUTCISOWeek(e){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var t=toDate(e),r=startOfUTCISOWeek(t).getTime()-startOfUTCISOWeekYear(t).getTime();return Math.round(r/MILLISECONDS_IN_WEEK)+1}function startOfUTCWeek(e,t){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var r=t||{},n=r.locale,a=n&&n.options&&n.options.weekStartsOn,o=null==a?0:toInteger(a),i=null==r.weekStartsOn?o:toInteger(r.weekStartsOn);if(!(i>=0&&i<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var u=toDate(e),s=u.getUTCDay(),d=(s<i?7:0)+s-i;return u.setUTCDate(u.getUTCDate()-d),u.setUTCHours(0,0,0,0),u}function getUTCWeekYear(e,t){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var r=toDate(e,t),n=r.getUTCFullYear(),a=t||{},o=a.locale,i=o&&o.options&&o.options.firstWeekContainsDate,u=null==i?1:toInteger(i),s=null==a.firstWeekContainsDate?u:toInteger(a.firstWeekContainsDate);if(!(s>=1&&s<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var d=new Date(0);d.setUTCFullYear(n+1,0,s),d.setUTCHours(0,0,0,0);var c=startOfUTCWeek(d,t),l=new Date(0);l.setUTCFullYear(n,0,s),l.setUTCHours(0,0,0,0);var m=startOfUTCWeek(l,t);return r.getTime()>=c.getTime()?n+1:r.getTime()>=m.getTime()?n:n-1}function startOfUTCWeekYear(e,t){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var r=t||{},n=r.locale,a=n&&n.options&&n.options.firstWeekContainsDate,o=null==a?1:toInteger(a),i=null==r.firstWeekContainsDate?o:toInteger(r.firstWeekContainsDate),u=getUTCWeekYear(e,t),s=new Date(0);return s.setUTCFullYear(u,0,i),s.setUTCHours(0,0,0,0),startOfUTCWeek(s,t)}var MILLISECONDS_IN_WEEK$1=6048e5;function getUTCWeek(e,t){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var r=toDate(e),n=startOfUTCWeek(r,t).getTime()-startOfUTCWeekYear(r,t).getTime();return Math.round(n/MILLISECONDS_IN_WEEK$1)+1}var dayPeriodEnum={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},formatters$1={G:function(e,t,r){var n=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return r.era(n,{width:"abbreviated"});case"GGGGG":return r.era(n,{width:"narrow"});case"GGGG":default:return r.era(n,{width:"wide"})}},y:function(e,t,r){if("yo"===t){var n=e.getUTCFullYear(),a=n>0?n:1-n;return r.ordinalNumber(a,{unit:"year"})}return formatters.y(e,t)},Y:function(e,t,r,n){var a=getUTCWeekYear(e,n),o=a>0?a:1-a;return"YY"===t?addLeadingZeros(o%100,2):"Yo"===t?r.ordinalNumber(o,{unit:"year"}):addLeadingZeros(o,t.length)},R:function(e,t){return addLeadingZeros(getUTCISOWeekYear(e),t.length)},u:function(e,t){return addLeadingZeros(e.getUTCFullYear(),t.length)},Q:function(e,t,r){var n=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(n);case"QQ":return addLeadingZeros(n,2);case"Qo":return r.ordinalNumber(n,{unit:"quarter"});case"QQQ":return r.quarter(n,{width:"abbreviated",context:"formatting"});case"QQQQQ":return r.quarter(n,{width:"narrow",context:"formatting"});case"QQQQ":default:return r.quarter(n,{width:"wide",context:"formatting"})}},q:function(e,t,r){var n=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(n);case"qq":return addLeadingZeros(n,2);case"qo":return r.ordinalNumber(n,{unit:"quarter"});case"qqq":return r.quarter(n,{width:"abbreviated",context:"standalone"});case"qqqqq":return r.quarter(n,{width:"narrow",context:"standalone"});case"qqqq":default:return r.quarter(n,{width:"wide",context:"standalone"})}},M:function(e,t,r){var n=e.getUTCMonth();switch(t){case"M":case"MM":return formatters.M(e,t);case"Mo":return r.ordinalNumber(n+1,{unit:"month"});case"MMM":return r.month(n,{width:"abbreviated",context:"formatting"});case"MMMMM":return r.month(n,{width:"narrow",context:"formatting"});case"MMMM":default:return r.month(n,{width:"wide",context:"formatting"})}},L:function(e,t,r){var n=e.getUTCMonth();switch(t){case"L":return String(n+1);case"LL":return addLeadingZeros(n+1,2);case"Lo":return r.ordinalNumber(n+1,{unit:"month"});case"LLL":return r.month(n,{width:"abbreviated",context:"standalone"});case"LLLLL":return r.month(n,{width:"narrow",context:"standalone"});case"LLLL":default:return r.month(n,{width:"wide",context:"standalone"})}},w:function(e,t,r,n){var a=getUTCWeek(e,n);return"wo"===t?r.ordinalNumber(a,{unit:"week"}):addLeadingZeros(a,t.length)},I:function(e,t,r){var n=getUTCISOWeek(e);return"Io"===t?r.ordinalNumber(n,{unit:"week"}):addLeadingZeros(n,t.length)},d:function(e,t,r){return"do"===t?r.ordinalNumber(e.getUTCDate(),{unit:"date"}):formatters.d(e,t)},D:function(e,t,r){var n=getUTCDayOfYear(e);return"Do"===t?r.ordinalNumber(n,{unit:"dayOfYear"}):addLeadingZeros(n,t.length)},E:function(e,t,r){var n=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return r.day(n,{width:"abbreviated",context:"formatting"});case"EEEEE":return r.day(n,{width:"narrow",context:"formatting"});case"EEEEEE":return r.day(n,{width:"short",context:"formatting"});case"EEEE":default:return r.day(n,{width:"wide",context:"formatting"})}},e:function(e,t,r,n){var a=e.getUTCDay(),o=(a-n.weekStartsOn+8)%7||7;switch(t){case"e":return String(o);case"ee":return addLeadingZeros(o,2);case"eo":return r.ordinalNumber(o,{unit:"day"});case"eee":return r.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return r.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return r.day(a,{width:"short",context:"formatting"});case"eeee":default:return r.day(a,{width:"wide",context:"formatting"})}},c:function(e,t,r,n){var a=e.getUTCDay(),o=(a-n.weekStartsOn+8)%7||7;switch(t){case"c":return String(o);case"cc":return addLeadingZeros(o,t.length);case"co":return r.ordinalNumber(o,{unit:"day"});case"ccc":return r.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return r.day(a,{width:"narrow",context:"standalone"});case"cccccc":return r.day(a,{width:"short",context:"standalone"});case"cccc":default:return r.day(a,{width:"wide",context:"standalone"})}},i:function(e,t,r){var n=e.getUTCDay(),a=0===n?7:n;switch(t){case"i":return String(a);case"ii":return addLeadingZeros(a,t.length);case"io":return r.ordinalNumber(a,{unit:"day"});case"iii":return r.day(n,{width:"abbreviated",context:"formatting"});case"iiiii":return r.day(n,{width:"narrow",context:"formatting"});case"iiiiii":return r.day(n,{width:"short",context:"formatting"});case"iiii":default:return r.day(n,{width:"wide",context:"formatting"})}},a:function(e,t,r){var n=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":case"aaa":return r.dayPeriod(n,{width:"abbreviated",context:"formatting"});case"aaaaa":return r.dayPeriod(n,{width:"narrow",context:"formatting"});case"aaaa":default:return r.dayPeriod(n,{width:"wide",context:"formatting"})}},b:function(e,t,r){var n,a=e.getUTCHours();switch(n=12===a?dayPeriodEnum.noon:0===a?dayPeriodEnum.midnight:a/12>=1?"pm":"am",t){case"b":case"bb":case"bbb":return r.dayPeriod(n,{width:"abbreviated",context:"formatting"});case"bbbbb":return r.dayPeriod(n,{width:"narrow",context:"formatting"});case"bbbb":default:return r.dayPeriod(n,{width:"wide",context:"formatting"})}},B:function(e,t,r){var n,a=e.getUTCHours();switch(n=a>=17?dayPeriodEnum.evening:a>=12?dayPeriodEnum.afternoon:a>=4?dayPeriodEnum.morning:dayPeriodEnum.night,t){case"B":case"BB":case"BBB":return r.dayPeriod(n,{width:"abbreviated",context:"formatting"});case"BBBBB":return r.dayPeriod(n,{width:"narrow",context:"formatting"});case"BBBB":default:return r.dayPeriod(n,{width:"wide",context:"formatting"})}},h:function(e,t,r){if("ho"===t){var n=e.getUTCHours()%12;return 0===n&&(n=12),r.ordinalNumber(n,{unit:"hour"})}return formatters.h(e,t)},H:function(e,t,r){return"Ho"===t?r.ordinalNumber(e.getUTCHours(),{unit:"hour"}):formatters.H(e,t)},K:function(e,t,r){var n=e.getUTCHours()%12;return"Ko"===t?r.ordinalNumber(n,{unit:"hour"}):addLeadingZeros(n,t.length)},k:function(e,t,r){var n=e.getUTCHours();return 0===n&&(n=24),"ko"===t?r.ordinalNumber(n,{unit:"hour"}):addLeadingZeros(n,t.length)},m:function(e,t,r){return"mo"===t?r.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):formatters.m(e,t)},s:function(e,t,r){return"so"===t?r.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):formatters.s(e,t)},S:function(e,t){return formatters.S(e,t)},X:function(e,t,r,n){var a=(n._originalDate||e).getTimezoneOffset();if(0===a)return"Z";switch(t){case"X":return formatTimezoneWithOptionalMinutes(a);case"XXXX":case"XX":return formatTimezone(a);case"XXXXX":case"XXX":default:return formatTimezone(a,":")}},x:function(e,t,r,n){var a=(n._originalDate||e).getTimezoneOffset();switch(t){case"x":return formatTimezoneWithOptionalMinutes(a);case"xxxx":case"xx":return formatTimezone(a);case"xxxxx":case"xxx":default:return formatTimezone(a,":")}},O:function(e,t,r,n){var a=(n._originalDate||e).getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+formatTimezoneShort(a,":");case"OOOO":default:return"GMT"+formatTimezone(a,":")}},z:function(e,t,r,n){var a=(n._originalDate||e).getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+formatTimezoneShort(a,":");case"zzzz":default:return"GMT"+formatTimezone(a,":")}},t:function(e,t,r,n){var a=n._originalDate||e;return addLeadingZeros(Math.floor(a.getTime()/1e3),t.length)},T:function(e,t,r,n){return addLeadingZeros((n._originalDate||e).getTime(),t.length)}};function formatTimezoneShort(e,t){var r=e>0?"-":"+",n=Math.abs(e),a=Math.floor(n/60),o=n%60;if(0===o)return r+String(a);var i=t||"";return r+String(a)+i+addLeadingZeros(o,2)}function formatTimezoneWithOptionalMinutes(e,t){return e%60==0?(e>0?"-":"+")+addLeadingZeros(Math.abs(e)/60,2):formatTimezone(e,t)}function formatTimezone(e,t){var r=t||"",n=e>0?"-":"+",a=Math.abs(e);return n+addLeadingZeros(Math.floor(a/60),2)+r+addLeadingZeros(a%60,2)}function dateLongFormatter(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}}function timeLongFormatter(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}}function dateTimeLongFormatter(e,t){var r,n=e.match(/(P+)(p+)?/),a=n[1],o=n[2];if(!o)return dateLongFormatter(e,t);switch(a){case"P":r=t.dateTime({width:"short"});break;case"PP":r=t.dateTime({width:"medium"});break;case"PPP":r=t.dateTime({width:"long"});break;case"PPPP":default:r=t.dateTime({width:"full"})}return r.replace("{{date}}",dateLongFormatter(a,t)).replace("{{time}}",timeLongFormatter(o,t))}var longFormatters={p:timeLongFormatter,P:dateTimeLongFormatter},protectedDayOfYearTokens=["D","DD"],protectedWeekYearTokens=["YY","YYYY"];function isProtectedDayOfYearToken(e){return-1!==protectedDayOfYearTokens.indexOf(e)}function isProtectedWeekYearToken(e){return-1!==protectedWeekYearTokens.indexOf(e)}function throwProtectedError(e){if("YYYY"===e)throw new RangeError("Use `yyyy` instead of `YYYY` for formatting years; see: https://git.io/fxCyr");if("YY"===e)throw new RangeError("Use `yy` instead of `YY` for formatting years; see: https://git.io/fxCyr");if("D"===e)throw new RangeError("Use `d` instead of `D` for formatting days of the month; see: https://git.io/fxCyr");if("DD"===e)throw new RangeError("Use `dd` instead of `DD` for formatting days of the month; see: https://git.io/fxCyr")}var formattingTokensRegExp=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,longFormattingTokensRegExp=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,escapedStringRegExp=/^'(.*?)'?$/,doubleQuoteRegExp=/''/g,unescapedLatinCharacterRegExp=/[a-zA-Z]/;function format(e,t,r){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");var n=String(t),a=r||{},o=a.locale||locale,i=o.options&&o.options.firstWeekContainsDate,u=null==i?1:toInteger(i),s=null==a.firstWeekContainsDate?u:toInteger(a.firstWeekContainsDate);if(!(s>=1&&s<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var d=o.options&&o.options.weekStartsOn,c=null==d?0:toInteger(d),l=null==a.weekStartsOn?c:toInteger(a.weekStartsOn);if(!(l>=0&&l<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!o.localize)throw new RangeError("locale must contain localize property");if(!o.formatLong)throw new RangeError("locale must contain formatLong property");var m=toDate(e);if(!isValid(m))throw new RangeError("Invalid time value");var h=subMilliseconds(m,getTimezoneOffsetInMilliseconds(m)),g={firstWeekContainsDate:s,weekStartsOn:l,locale:o,_originalDate:m};return n.match(longFormattingTokensRegExp).map(function(e){var t=e[0];return"p"===t||"P"===t?(0,longFormatters[t])(e,o.formatLong,g):e}).join("").match(formattingTokensRegExp).map(function(e){if("''"===e)return"'";var t=e[0];if("'"===t)return cleanEscapedString(e);var r=formatters$1[t];if(r)return!a.useAdditionalWeekYearTokens&&isProtectedWeekYearToken(e)&&throwProtectedError(e),!a.useAdditionalDayOfYearTokens&&isProtectedDayOfYearToken(e)&&throwProtectedError(e),r(h,e,o.localize,g);if(t.match(unescapedLatinCharacterRegExp))throw new RangeError("Format string contains an unescaped latin alphabet character `"+t+"`");return e}).join("")}function cleanEscapedString(e){return e.match(escapedStringRegExp)[1].replace(doubleQuoteRegExp,"'")}export{format as f};