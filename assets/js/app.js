(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,function(t,e,n){t.exports=n(3)},function(t,e,n){"use strict";n.r(e);var i=n(1),a=n(0);function u(t){return function(t){if(Array.isArray(t))return d(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||o(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],i=!0,a=!1,u=void 0;try{for(var l,o=t[Symbol.iterator]();!(i=(l=o.next()).done)&&(n.push(l.value),!e||n.length!==e);i=!0);}catch(t){a=!0,u=t}finally{try{i||null==o.return||o.return()}finally{if(a)throw u}}return n}(t,e)||o(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,e){if(t){if("string"==typeof t)return d(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(t,e):void 0}}function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function r(t){var e="";if(location.search)for(var n=location.search.substr(1).split("&"),i=0;i<n.length;i++){var a=n[i].split("=");a[0]===t&&(e=decodeURIComponent(a[1]))}return e}var m,c=[{name:"Москва (СРВ)",latitude:55.850701,longitude:37.465197},{name:"Лесное",latitude:56.074284,longitude:37.662723},{name:"Дубна",latitude:56.744002,longitude:37.173203},{name:"Тверь",latitude:56.862808,longitude:35.913654},{name:"Кимры",latitude:56.871781,longitude:37.363423},{name:"Калязин",latitude:57.240412,longitude:37.855078},{name:"Углич",latitude:57.52234,longitude:38.30391},{name:"Мышкин",latitude:57.784019,longitude:38.45456},{name:"Коприно",latitude:58.065349,longitude:38.324569},{name:"Череповец",latitude:59.129209,longitude:37.907906},{name:"Кузино",latitude:59.763509,longitude:38.281075},{name:"Горицы",latitude:59.869734,longitude:38.260342},{name:"Вытегра",latitude:61.010869,longitude:36.434714},{name:"Онежское озеро",latitude:61.627103,longitude:35.472113},{name:"Вознесенье",latitude:61.013554,longitude:35.484963},{name:"Повенец",latitude:62.848879,longitude:34.829407},{name:"Соловецкие острова",latitude:65.1,longitude:35.683333},{name:"Кижи",latitude:62.066667,longitude:35.238056},{name:"Петрозаводск",latitude:61.788863,longitude:34.359724},{name:"Мандроги",latitude:60.897704,longitude:33.817788},{name:"Лодейное поле",latitude:60.734267,longitude:33.555964},{name:"Старая Ладога",latitude:59.995076,longitude:32.294347},{name:"Великий Новгород",latitude:58.536742,longitude:31.271227},{name:"Валаам",latitude:61.366667,longitude:30.933333},{name:"Коневец",latitude:60.86016,longitude:30.61012},{name:"Ладожское озеро",latitude:60.529839,longitude:31.802681},{name:"Шлиссельбург",latitude:59.955504,longitude:31.048894},{name:"Санкт-Петербург",latitude:59.90802,longitude:30.409998},{name:"Рыбинск",latitude:58.043047,longitude:38.85719},{name:"Тутаев",latitude:57.874612,longitude:39.540117},{name:"Ярославль",latitude:57.633568,longitude:39.879512},{name:"Кострома",latitude:57.771284,longitude:40.950603},{name:"Плёс",latitude:57.453764,longitude:41.507726},{name:"Кинешма",latitude:57.450688,longitude:42.171442},{name:"Юрьевец",latitude:57.357648,longitude:43.15438},{name:"Чкаловск",latitude:56.776495,longitude:43.292538},{name:"Городец",latitude:56.646093,longitude:43.441371},{name:"Н.Новгород",latitude:56.331513,longitude:43.98719},{name:"Макарьево",latitude:56.087142,longitude:45.060079},{name:"Козьмодемьянск",latitude:56.346401,longitude:46.538972},{name:"Павлово",latitude:55.967934,longitude:43.058115},{name:"Муром",latitude:55.581164,longitude:42.067693},{name:"Касимов",latitude:54.934541,longitude:41.383931},{name:"Рязань",latitude:54.629148,longitude:39.734928},{name:"Коломна",latitude:55.108083,longitude:38.756228},{name:"Константиново",latitude:55.487887,longitude:37.982154},{name:"Москва (ЮРВ)",latitude:55.688632,longitude:37.676137},{name:"Козьмодемьянск",latitude:56.332705,longitude:46.547541},{name:"Чебоксары",latitude:56.157355,longitude:47.260902},{name:"Казань",latitude:55.788826,longitude:49.076793},{name:"Ульяновск",latitude:54.310837,longitude:48.434609},{name:"Тольятти",latitude:53.521911,longitude:49.435092},{name:"Самара",latitude:53.215947,longitude:50.115319},{name:"Усовка",latitude:51.791925,longitude:46.49031},{name:"Саратов",latitude:51.534272,longitude:46.01014},{name:"Волгоград",latitude:48.711923,longitude:44.491084},{name:"Ахтуба",latitude:48.215219,longitude:46.102148},{name:"Астрахань",latitude:46.333818,longitude:48.021857},{name:"Ростов-на-Дону",latitude:47.261008,longitude:39.628},{name:"Камское Устье",latitude:55.214493,longitude:49.382481},{name:"Чистополь",latitude:55.391549,longitude:50.632176},{name:"Нижнекамск",latitude:55.6572,longitude:51.702794},{name:"Елабуга",latitude:55.734021,longitude:52.025246},{name:"Набережные Челны",latitude:55.758758,longitude:52.348239},{name:"Сарапул",latitude:56.461621,longitude:53.803678},{name:"Чайковский",latitude:56.800858,longitude:54.088191},{name:"Болгары",latitude:57.729848,longitude:55.387889},{name:"Пермь",latitude:58.001985,longitude:56.257287},{name:"Уфа",latitude:54.809866,longitude:56.093911}],g=["Москва (СРВ)",[["Лесное",[["Дубна",[["Тверь"],["Калязин",[["Углич",[["Мышкин",[["Коприно",[["Череповец",[["Кузино",[["Горицы",[["Вытегра",[["Онежское озеро",[["Кижи"],["Петрозаводск"],["Повенец",[["Сосновец",[["Соловецкие острова"]]]]],["Вознесенье",[["Мандроги",[["Лодейное поле",[["Старая Ладога",[["Великий Новгород"]]],["Ладожское озеро",[["Валаам"],["Коневец"],["Шлиссельбург",[["Санкт-Петербург"]]]]]]]]]]]]]]]]]]]]],["Рыбинск",[["Тутаев",[["Ярославль",[["Кострома",[["Плёс",[["Кинешма",[["Юрьевец",[["Чкаловск",[["Городец",[["Н.Новгород",[["Макарьево",[["Козьмодемьянск",[["Чебоксары",[["Казань",[["Камское Устье",[["Чистополь",[["Нижнекамск",[["Елабуга",[["Набережные Челны",[["Сарапул",[["Чайковский",[["Болгары",[["Пермь"]]]]]]]]]]]]]]]]],["Ульяновск",[["Тольятти",[["Самара",[["Усовка",[["Саратов",[["Волгоград",[["Ахтуба",[["Астрахань"]]],["Ростов-на-Дону"]]]]]]]]]]]]]]]]]]]]],["Павлово",[["Муром",[["Касимов",[["Рязань",[["Коломна",[["Константиново",[["Москва (ЮРВ)"]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]];function s(t){var e=[];return t.forEach((function(t){t&&e.push(t)})),e}m=""===r("tour")?"6099":r("tour"),fetch("https://api.mosturflot.ru/v3/rivercruises/tours/"+m+"?fields[tours]=route").then((function(t){return t.json()})).then((function(t){!function(t){fetch("assets/js/points.json").then((function(t){return t.json()})).then((function(e){!function(t,e){var n=[],o=[];t.data.map((function(t){e.map((function(e){var i={};e.indexOf(t.attributes.name)>-1&&(i.name=e,i.id=t.id,i.description=null===t.attributes.description?"":t.attributes.description,-1===o.indexOf(e)&&(o.push(e),n.push(i)))}))})),function(t,e){var n=[],o=[],d=[],r=[];t.map((function(m,f){if(m&&c.map((function(t,i){m.indexOf(t.name)>-1&&(e.forEach((function(e){e.name.indexOf(t.name)>-1&&(e.latlng=[t.latitude,t.longitude],r.push(e))})),n[i]=[t.latitude,t.longitude],o[i]=t)})),t.length===f+1){var p=s(o),h=[];p.forEach((function(t){var e=function(t,e,n){var a=function t(e,n,i,a){var o=l(e,2),d=o[0],r=o[1];return d===n?[].concat(u(i),[d]):r?r.reduce((function(e,a){return t(a,n,[].concat(u(i),[d]),e)}),a):a},o=a(t,e,[],[]),d=a(t,n,[],[]),r=Object(i.intersection)(o,d),m=r[r.length-1],c=Object(i.reverse)(Object(i.difference)(o,d)),g=Object(i.difference)(d,o);return Object(i.concat)(c,[m],g)}(g,p[0].name,t.name),n=_.difference(e,h);h.push.apply(h,u(n))})),h.map((function(t,e){if(t&&c.map((function(e){t.indexOf(e.name)>-1&&-1===e.name.indexOf("озеро")&&d.push([e.latitude,e.longitude])})),h.length===e+1){var i=s(d);s(n),function(t,e,n){var i=a.map("map").setView([55.850701,37.465197],8);a.polyline(t,{color:"#00ffff"}).addTo(i),a.tileLayer("https://vec{s}.maps.yandex.net/tiles?l=map&v=20.10.06-1&z={z}&x={x}&y={y}&scale=2&lang=ru_RU",{subdomains:["01","02","03","04"],attribution:'<a href="https://yandex.ru" target="_blank">Яндекс</a>',reuseTiles:!0,updateWhenIdle:!1}).addTo(i),i.options.crs=a.CRS.EPSG3395,a.Icon.Default.imagePath="assets/lib/images/";var u=[];n.forEach((function(t){u.push(t.latlng);var e="<b>"+t.name+'</b><br><img alt="Стоянка" src="./assets/img/mtf/st/'+t.id+'.jpg" style="width: 250px;"><div style="height: 200px; overflow-y: scroll;">'+t.description+"</div>";a.marker(t.latlng).bindPopup(e).addTo(i),i.fitBounds(u)}))}(i,0,r)}}))}}))}(e,n)}(e,t)}))}(t.data.attributes.route.split(" - "))}))}],[[2,1,2]]]);