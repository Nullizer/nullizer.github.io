System.register([],function(e){"use strict";return{execute:function(){function t(e){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function n(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}e("f",function(e,a,i){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");var o=String(a),u=i||{},s=u.locale||h,c=s.options&&s.options.firstWeekContainsDate,d=null==c?1:n(c),l=null==u.firstWeekContainsDate?d:n(u.firstWeekContainsDate);if(!(l>=1&&l<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var f=s.options&&s.options.weekStartsOn,g=null==f?0:n(f),m=null==u.weekStartsOn?g:n(u.weekStartsOn);if(!(m>=0&&m<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!s.localize)throw new RangeError("locale must contain localize property");if(!s.formatLong)throw new RangeError("locale must contain formatLong property");var w=t(e);if(!function(e){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var n=t(e);return!isNaN(n)}(w))throw new RangeError("Invalid time value");var y=function(e){var t=new Date(e.getTime()),n=t.getTimezoneOffset();t.setSeconds(0,0);var a=t.getTime()%r;return n*r+a}(w),b=function(e,r){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");var a=n(r);return function(e,r){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");var a=t(e).getTime(),i=n(r);return new Date(a+i)}(e,-a)}(w,y),v={firstWeekContainsDate:l,weekStartsOn:m,locale:s,_originalDate:w};return o.match(J).map(function(e){var t=e[0];if("p"===t||"P"===t){var n=Q[t];return n(e,s.formatLong,v)}return e}).join("").match(R).map(function(e){if("''"===e)return"'";var t=e[0];if("'"===t)return e.match(I)[1].replace(_,"'");var n,r=z[t];if(r)return u.useAdditionalWeekYearTokens||(n=e,-1===B.indexOf(n))||A(e),!u.useAdditionalDayOfYearTokens&&function(e){return-1!==G.indexOf(e)}(e)&&A(e),r(b,e,s.localize,v);if(t.match(V))throw new RangeError("Format string contains an unescaped latin alphabet character `"+t+"`");return e}).join("")});var r=6e4;var a={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function i(e){return function(t){var n=t||{},r=n.width?String(n.width):e.defaultWidth;return e.formats[r]||e.formats[e.defaultWidth]}}var o={date:i({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:i({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:i({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},u={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function s(e){return function(t,n){var r,a=n||{};if("formatting"===(a.context?String(a.context):"standalone")&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,o=a.width?String(a.width):i;r=e.formattingValues[o]||e.formattingValues[i]}else{var u=e.defaultWidth,s=a.width?String(a.width):e.defaultWidth;r=e.values[s]||e.values[u]}return r[e.argumentCallback?e.argumentCallback(t):t]}}function c(e){return function(t,n){var r=String(t),a=n||{},i=a.width,o=i&&e.matchPatterns[i]||e.matchPatterns[e.defaultMatchWidth],u=r.match(o);if(!u)return null;var s,c=u[0],d=i&&e.parsePatterns[i]||e.parsePatterns[e.defaultParseWidth];return s="[object Array]"===Object.prototype.toString.call(d)?d.findIndex(function(e){return e.test(r)}):function(e,t){for(var n in e)if(e.hasOwnProperty(n)&&t(e[n]))return n}(d,function(e){return e.test(r)}),s=e.valueCallback?e.valueCallback(s):s,{value:s=a.valueCallback?a.valueCallback(s):s,rest:r.slice(c.length)}}}var d,h={formatDistance:function(e,t,n){var r;return n=n||{},r="string"==typeof a[e]?a[e]:1===t?a[e].one:a[e].other.replace("{{count}}",t),n.addSuffix?n.comparison>0?"in "+r:r+" ago":r},formatLong:o,formatRelative:function(e,t,n,r){return u[e]},localize:{ordinalNumber:function(e,t){var n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:s({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:s({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:s({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:s({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:s({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(d={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e,t){var n=String(e),r=t||{},a=n.match(d.matchPattern);if(!a)return null;var i=a[0],o=n.match(d.parsePattern);if(!o)return null;var u=d.valueCallback?d.valueCallback(o[0]):o[0];return{value:u=r.valueCallback?r.valueCallback(u):u,rest:n.slice(i.length)}}),era:c({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:c({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:c({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:c({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:c({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function l(e,t){for(var n=e<0?"-":"",r=Math.abs(e).toString();r.length<t;)r="0"+r;return n+r}var f=function(e,t){var n=e.getUTCFullYear(),r=n>0?n:1-n;return l("yy"===t?r%100:r,t.length)},g=function(e,t){var n=e.getUTCMonth();return"M"===t?String(n+1):l(n+1,2)},m=function(e,t){return l(e.getUTCDate(),t.length)},w=function(e,t){return l(e.getUTCHours()%12||12,t.length)},y=function(e,t){return l(e.getUTCHours(),t.length)},b=function(e,t){return l(e.getUTCMinutes(),t.length)},v=function(e,t){return l(e.getUTCSeconds(),t.length)},p=function(e,t){var n=t.length,r=e.getUTCMilliseconds();return l(Math.floor(r*Math.pow(10,n-3)),t.length)},T=864e5;function M(e){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var n=t(e),r=n.getUTCDay(),a=(r<1?7:0)+r-1;return n.setUTCDate(n.getUTCDate()-a),n.setUTCHours(0,0,0,0),n}function C(e){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var n=t(e),r=n.getUTCFullYear(),a=new Date(0);a.setUTCFullYear(r+1,0,4),a.setUTCHours(0,0,0,0);var i=M(a),o=new Date(0);o.setUTCFullYear(r,0,4),o.setUTCHours(0,0,0,0);var u=M(o);return n.getTime()>=i.getTime()?r+1:n.getTime()>=u.getTime()?r:r-1}var x=6048e5;function D(e){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var n=t(e),r=M(n).getTime()-function(e){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var t=C(e),n=new Date(0);return n.setUTCFullYear(t,0,4),n.setUTCHours(0,0,0,0),M(n)}(n).getTime();return Math.round(r/x)+1}function P(e,r){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var a=r||{},i=a.locale,o=i&&i.options&&i.options.weekStartsOn,u=null==o?0:n(o),s=null==a.weekStartsOn?u:n(a.weekStartsOn);if(!(s>=0&&s<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var c=t(e),d=c.getUTCDay(),h=(d<s?7:0)+d-s;return c.setUTCDate(c.getUTCDate()-h),c.setUTCHours(0,0,0,0),c}function U(e,r){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var a=t(e,r),i=a.getUTCFullYear(),o=r||{},u=o.locale,s=u&&u.options&&u.options.firstWeekContainsDate,c=null==s?1:n(s),d=null==o.firstWeekContainsDate?c:n(o.firstWeekContainsDate);if(!(d>=1&&d<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var h=new Date(0);h.setUTCFullYear(i+1,0,d),h.setUTCHours(0,0,0,0);var l=P(h,r),f=new Date(0);f.setUTCFullYear(i,0,d),f.setUTCHours(0,0,0,0);var g=P(f,r);return a.getTime()>=l.getTime()?i+1:a.getTime()>=g.getTime()?i:i-1}var S=6048e5;function E(e,r){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var a=t(e),i=P(a,r).getTime()-function(e,t){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var r=t||{},a=r.locale,i=a&&a.options&&a.options.firstWeekContainsDate,o=null==i?1:n(i),u=null==r.firstWeekContainsDate?o:n(r.firstWeekContainsDate),s=U(e,t),c=new Date(0);return c.setUTCFullYear(s,0,u),c.setUTCHours(0,0,0,0),P(c,t)}(a,r).getTime();return Math.round(i/S)+1}var k="midnight",q="noon",W="morning",Y="afternoon",O="evening",N="night",z={G:function(e,t,n){var r=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if("yo"===t){var r=e.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return f(e,t)},Y:function(e,t,n,r){var a=U(e,r),i=a>0?a:1-a;return"YY"===t?l(i%100,2):"Yo"===t?n.ordinalNumber(i,{unit:"year"}):l(i,t.length)},R:function(e,t){return l(C(e),t.length)},u:function(e,t){return l(e.getUTCFullYear(),t.length)},Q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return l(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return l(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){var r=e.getUTCMonth();switch(t){case"M":case"MM":return g(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){var r=e.getUTCMonth();switch(t){case"L":return String(r+1);case"LL":return l(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,n,r){var a=E(e,r);return"wo"===t?n.ordinalNumber(a,{unit:"week"}):l(a,t.length)},I:function(e,t,n){var r=D(e);return"Io"===t?n.ordinalNumber(r,{unit:"week"}):l(r,t.length)},d:function(e,t,n){return"do"===t?n.ordinalNumber(e.getUTCDate(),{unit:"date"}):m(e,t)},D:function(e,n,r){var a=function(e){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var n=t(e),r=n.getTime();n.setUTCMonth(0,1),n.setUTCHours(0,0,0,0);var a=r-n.getTime();return Math.floor(a/T)+1}(e);return"Do"===n?r.ordinalNumber(a,{unit:"dayOfYear"}):l(a,n.length)},E:function(e,t,n){var r=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){var a=e.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(i);case"ee":return l(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});case"eeee":default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){var a=e.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(i);case"cc":return l(i,t.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});case"cccc":default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(e,t,n){var r=e.getUTCDay(),a=0===r?7:r;switch(t){case"i":return String(a);case"ii":return l(a,t.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){var r=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(e,t,n){var r,a=e.getUTCHours();switch(r=12===a?q:0===a?k:a/12>=1?"pm":"am",t){case"b":case"bb":case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(e,t,n){var r,a=e.getUTCHours();switch(r=a>=17?O:a>=12?Y:a>=4?W:N,t){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(e,t,n){if("ho"===t){var r=e.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return w(e,t)},H:function(e,t,n){return"Ho"===t?n.ordinalNumber(e.getUTCHours(),{unit:"hour"}):y(e,t)},K:function(e,t,n){var r=e.getUTCHours()%12;return"Ko"===t?n.ordinalNumber(r,{unit:"hour"}):l(r,t.length)},k:function(e,t,n){var r=e.getUTCHours();return 0===r&&(r=24),"ko"===t?n.ordinalNumber(r,{unit:"hour"}):l(r,t.length)},m:function(e,t,n){return"mo"===t?n.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):b(e,t)},s:function(e,t,n){return"so"===t?n.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):v(e,t)},S:function(e,t){return p(e,t)},X:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();if(0===a)return"Z";switch(t){case"X":return H(a);case"XXXX":case"XX":return X(a);case"XXXXX":case"XXX":default:return X(a,":")}},x:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"x":return H(a);case"xxxx":case"xx":return X(a);case"xxxxx":case"xxx":default:return X(a,":")}},O:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+j(a,":");case"OOOO":default:return"GMT"+X(a,":")}},z:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+j(a,":");case"zzzz":default:return"GMT"+X(a,":")}},t:function(e,t,n,r){var a=r._originalDate||e;return l(Math.floor(a.getTime()/1e3),t.length)},T:function(e,t,n,r){return l((r._originalDate||e).getTime(),t.length)}};function j(e,t){var n=e>0?"-":"+",r=Math.abs(e),a=Math.floor(r/60),i=r%60;if(0===i)return n+String(a);var o=t||"";return n+String(a)+o+l(i,2)}function H(e,t){return e%60==0?(e>0?"-":"+")+l(Math.abs(e)/60,2):X(e,t)}function X(e,t){var n=t||"",r=e>0?"-":"+",a=Math.abs(e);return r+l(Math.floor(a/60),2)+n+l(a%60,2)}function F(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}}function L(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}}var Q={p:L,P:function(e,t){var n,r=e.match(/(P+)(p+)?/),a=r[1],i=r[2];if(!i)return F(e,t);switch(a){case"P":n=t.dateTime({width:"short"});break;case"PP":n=t.dateTime({width:"medium"});break;case"PPP":n=t.dateTime({width:"long"});break;case"PPPP":default:n=t.dateTime({width:"full"})}return n.replace("{{date}}",F(a,t)).replace("{{time}}",L(i,t))}},G=["D","DD"],B=["YY","YYYY"];function A(e){if("YYYY"===e)throw new RangeError("Use `yyyy` instead of `YYYY` for formatting years; see: https://git.io/fxCyr");if("YY"===e)throw new RangeError("Use `yy` instead of `YY` for formatting years; see: https://git.io/fxCyr");if("D"===e)throw new RangeError("Use `d` instead of `D` for formatting days of the month; see: https://git.io/fxCyr");if("DD"===e)throw new RangeError("Use `dd` instead of `DD` for formatting days of the month; see: https://git.io/fxCyr")}var R=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,J=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,I=/^'(.*?)'?$/,_=/''/g,V=/[a-zA-Z]/}}});