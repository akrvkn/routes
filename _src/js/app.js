import { intersection, difference, reverse, concat } from "lodash";
import * as L from "leaflet";

function parseUrlQuery(q) {
  let res = "";
  if (location.search) {
    let pair = location.search.substr(1).split("&");
    for (let i = 0; i < pair.length; i++) {
      let param = pair[i].split("=");
      if (param[0] === q) res = decodeURIComponent(param[1]);
    }
  }
  return res;
}

const itinerary = (tree, start, end) => {
  const iter = (n, search, p, acc) => {
    const [city, children] = n;
    if (city === search) {
      return [...p, city];
    }
    if (!children) {
      return acc;
    }
    return children.reduce(
      (cAcc, nn) => iter(nn, search, [...p, city], cAcc),
      acc
    );
  };
  const arr1 = iter(tree, start, [], []);
  const arr2 = iter(tree, end, [], []);
  const interArr = intersection(arr1, arr2);
  const interStation = interArr[interArr.length - 1];
  const arr1DifRev = reverse(difference(arr1, arr2));
  const arr2Dif = difference(arr2, arr1);
  return concat(arr1DifRev, [interStation], arr2Dif);
};

const points = [
  { name: "Москва (СРВ)", latitude: 55.850701, longitude: 37.465197 },
  { name: "Лесное", latitude: 56.074284, longitude: 37.662723 },
  { name: "Дубна", latitude: 56.744002, longitude: 37.173203 },
  { name: "Тверь", latitude: 56.862808, longitude: 35.913654 },
  { name: "Кимры", latitude: 56.871781, longitude: 37.363423 },
  { name: "Калязин", latitude: 57.240412, longitude: 37.855078 },
  { name: "Углич", latitude: 57.52234, longitude: 38.30391 },
  { name: "Мышкин", latitude: 57.784019, longitude: 38.45456 },
  { name: "Коприно", latitude: 58.065349, longitude: 38.324569 },
  { name: "Череповец", latitude: 59.129209, longitude: 37.907906 },
  { name: "Кузино", latitude: 59.763509, longitude: 38.281075 },
  { name: "Горицы", latitude: 59.869734, longitude: 38.260342 },
  { name: "Вытегра", latitude: 61.010869, longitude: 36.434714 },
  { name: "Онежское озеро", latitude: 61.627103, longitude: 35.472113 },
  { name: "Вознесенье", latitude: 61.013554, longitude: 35.484963 },
  { name: "Повенец", latitude: 62.848879, longitude: 34.829407 },
  { name: "Соловецкие острова", latitude: 65.1, longitude: 35.683333 },
  { name: "Кижи", latitude: 62.066667, longitude: 35.238056 },
  { name: "Петрозаводск", latitude: 61.788863, longitude: 34.359724 },
  { name: "Мандроги", latitude: 60.897704, longitude: 33.817788 },
  { name: "Лодейное поле", latitude: 60.734267, longitude: 33.555964 },
  { name: "Старая Ладога", latitude: 59.995076, longitude: 32.294347 },
  { name: "Великий Новгород", latitude: 58.536742, longitude: 31.271227 },
  { name: "Валаам", latitude: 61.366667, longitude: 30.933333 },
  { name: "Коневец", latitude: 60.86016, longitude: 30.61012 },
  { name: "Ладожское озеро", latitude: 60.529839, longitude: 31.802681 },
  { name: "Шлиссельбург", latitude: 59.955504, longitude: 31.048894 },
  { name: "Санкт-Петербург", latitude: 59.90802, longitude: 30.409998 },
  { name: "Рыбинск", latitude: 58.043047, longitude: 38.85719 },
  { name: "Тутаев", latitude: 57.874612, longitude: 39.540117 },
  { name: "Ярославль", latitude: 57.633568, longitude: 39.879512 },
  { name: "Кострома", latitude: 57.771284, longitude: 40.950603 },
  { name: "Плёс", latitude: 57.453764, longitude: 41.507726 },
  { name: "Кинешма", latitude: 57.450688, longitude: 42.171442 },
  { name: "Юрьевец", latitude: 57.357648, longitude: 43.15438 },
  { name: "Чкаловск", latitude: 56.776495, longitude: 43.292538 },
  { name: "Городец", latitude: 56.646093, longitude: 43.441371 },
  { name: "Н.Новгород", latitude: 56.331513, longitude: 43.98719 },
  { name: "Макарьево", latitude: 56.087142, longitude: 45.060079 },
  { name: "Козьмодемьянск", latitude: 56.346401, longitude: 46.538972 },
  { name: "Павлово", latitude: 55.967934, longitude: 43.058115 },
  { name: "Муром", latitude: 55.581164, longitude: 42.067693 },
  { name: "Касимов", latitude: 54.934541, longitude: 41.383931 },
  { name: "Рязань", latitude: 54.629148, longitude: 39.734928 },
  { name: "Коломна", latitude: 55.108083, longitude: 38.756228 },
  { name: "Константиново", latitude: 55.487887, longitude: 37.982154 },
  { name: "Москва (ЮРВ)", latitude: 55.688632, longitude: 37.676137 },
  { name: "Козьмодемьянск", latitude: 56.332705, longitude: 46.547541 },
  { name: "Чебоксары", latitude: 56.157355, longitude: 47.260902 },
  { name: "Казань", latitude: 55.788826, longitude: 49.076793 },
  { name: "Ульяновск", latitude: 54.310837, longitude: 48.434609 },
  { name: "Тольятти", latitude: 53.521911, longitude: 49.435092 },
  { name: "Самара", latitude: 53.215947, longitude: 50.115319 },
  { name: "Усовка", latitude: 51.791925, longitude: 46.49031 },
  { name: "Саратов", latitude: 51.534272, longitude: 46.01014 },
  { name: "Волгоград", latitude: 48.711923, longitude: 44.491084 },
  { name: "Ахтуба", latitude: 48.215219, longitude: 46.102148 },
  { name: "Астрахань", latitude: 46.333818, longitude: 48.021857 },
  { name: "Ростов-на-Дону", latitude: 47.261008, longitude: 39.628 },
  { name: "Камское Устье", latitude: 55.214493, longitude: 49.382481 },
  { name: "Чистополь", latitude: 55.391549, longitude: 50.632176 },
  { name: "Нижнекамск", latitude: 55.6572, longitude: 51.702794 },
  { name: "Елабуга", latitude: 55.734021, longitude: 52.025246 },
  { name: "Набережные Челны", latitude: 55.758758, longitude: 52.348239 },
  { name: "Сарапул", latitude: 56.461621, longitude: 53.803678 },
  { name: "Чайковский", latitude: 56.800858, longitude: 54.088191 },
  { name: "Болгары", latitude: 57.729848, longitude: 55.387889 },
  { name: "Пермь", latitude: 58.001985, longitude: 56.257287 },
  { name: "Уфа", latitude: 54.809866, longitude: 56.093911 }
];

const mapTree = [
  "Москва (СРВ)",
  [
    [
      "Лесное",
      [
        [
          "Дубна",
          [
            ["Тверь"],
            [
              "Калязин",
              [
                [
                  "Углич",
                  [
                    [
                      "Мышкин",
                      [
                        [
                          "Коприно",
                          [
                            [
                              "Череповец",
                              [
                                [
                                  "Кузино",
                                  [
                                    [
                                      "Горицы",
                                      [
                                        [
                                          "Вытегра",
                                          [
                                            [
                                              "Онежское озеро",
                                              [
                                                ["Кижи"],
                                                ["Петрозаводск"],
                                                [
                                                  "Повенец",
                                                  [
                                                    [
                                                      "Сосновец",
                                                      [["Соловецкие острова"]]
                                                    ]
                                                  ]
                                                ],
                                                [
                                                  "Вознесенье",
                                                  [
                                                    [
                                                      "Мандроги",
                                                      [
                                                        [
                                                          "Лодейное поле",
                                                          [
                                                            [
                                                              "Старая Ладога",
                                                              [
                                                                [
                                                                  "Великий Новгород"
                                                                ]
                                                              ]
                                                            ],
                                                            [
                                                              "Ладожское озеро",
                                                              [
                                                                ["Валаам"],
                                                                ["Коневец"],
                                                                [
                                                                  "Шлиссельбург",
                                                                  [
                                                                    [
                                                                      "Санкт-Петербург"
                                                                    ]
                                                                  ]
                                                                ]
                                                              ]
                                                            ]
                                                          ]
                                                        ]
                                                      ]
                                                    ]
                                                  ]
                                                ]
                                              ]
                                            ]
                                          ]
                                        ]
                                      ]
                                    ]
                                  ]
                                ]
                              ]
                            ],
                            [
                              "Рыбинск",
                              [
                                [
                                  "Тутаев",
                                  [
                                    [
                                      "Ярославль",
                                      [
                                        [
                                          "Кострома",
                                          [
                                            [
                                              "Плёс",
                                              [
                                                [
                                                  "Кинешма",
                                                  [
                                                    [
                                                      "Юрьевец",
                                                      [
                                                        [
                                                          "Чкаловск",
                                                          [
                                                            [
                                                              "Городец",
                                                              [
                                                                [
                                                                  "Н.Новгород",
                                                                  [
                                                                    [
                                                                      "Макарьево",
                                                                      [
                                                                        [
                                                                          "Козьмодемьянск",
                                                                          [
                                                                            [
                                                                              "Чебоксары",
                                                                              [
                                                                                [
                                                                                  "Казань",
                                                                                  [
                                                                                    [
                                                                                      "Камское Устье",
                                                                                      [
                                                                                        [
                                                                                          "Чистополь",
                                                                                          [
                                                                                            [
                                                                                              "Нижнекамск",
                                                                                              [
                                                                                                [
                                                                                                  "Елабуга",
                                                                                                  [
                                                                                                    [
                                                                                                      "Набережные Челны",
                                                                                                      [
                                                                                                        [
                                                                                                          "Сарапул",
                                                                                                          [
                                                                                                            [
                                                                                                              "Чайковский",
                                                                                                              [
                                                                                                                [
                                                                                                                  "Болгары",
                                                                                                                  [
                                                                                                                    [
                                                                                                                      "Пермь"
                                                                                                                    ]
                                                                                                                  ]
                                                                                                                ]
                                                                                                              ]
                                                                                                            ]
                                                                                                          ]
                                                                                                        ]
                                                                                                      ]
                                                                                                    ]
                                                                                                  ]
                                                                                                ]
                                                                                              ]
                                                                                            ]
                                                                                          ]
                                                                                        ]
                                                                                      ]
                                                                                    ],
                                                                                    [
                                                                                      "Ульяновск",
                                                                                      [
                                                                                        [
                                                                                          "Тольятти",
                                                                                          [
                                                                                            [
                                                                                              "Самара",
                                                                                              [
                                                                                                [
                                                                                                  "Усовка",
                                                                                                  [
                                                                                                    [
                                                                                                      "Саратов",
                                                                                                      [
                                                                                                        [
                                                                                                          "Волгоград",
                                                                                                          [
                                                                                                            [
                                                                                                              "Ахтуба",
                                                                                                              [
                                                                                                                [
                                                                                                                  "Астрахань"
                                                                                                                ]
                                                                                                              ]
                                                                                                            ],
                                                                                                            [
                                                                                                              "Ростов-на-Дону"
                                                                                                            ]
                                                                                                          ]
                                                                                                        ]
                                                                                                      ]
                                                                                                    ]
                                                                                                  ]
                                                                                                ]
                                                                                              ]
                                                                                            ]
                                                                                          ]
                                                                                        ]
                                                                                      ]
                                                                                    ]
                                                                                  ]
                                                                                ]
                                                                              ]
                                                                            ]
                                                                          ]
                                                                        ]
                                                                      ]
                                                                    ],
                                                                    [
                                                                      "Павлово",
                                                                      [
                                                                        [
                                                                          "Муром",
                                                                          [
                                                                            [
                                                                              "Касимов",
                                                                              [
                                                                                [
                                                                                  "Рязань",
                                                                                  [
                                                                                    [
                                                                                      "Коломна",
                                                                                      [
                                                                                        [
                                                                                          "Константиново",
                                                                                          [
                                                                                            [
                                                                                              "Москва (ЮРВ)"
                                                                                            ]
                                                                                          ]
                                                                                        ]
                                                                                      ]
                                                                                    ]
                                                                                  ]
                                                                                ]
                                                                              ]
                                                                            ]
                                                                          ]
                                                                        ]
                                                                      ]
                                                                    ]
                                                                  ]
                                                                ]
                                                              ]
                                                            ]
                                                          ]
                                                        ]
                                                      ]
                                                    ]
                                                  ]
                                                ]
                                              ]
                                            ]
                                          ]
                                        ]
                                      ]
                                    ]
                                  ]
                                ]
                              ]
                            ]
                          ]
                        ]
                      ]
                    ]
                  ]
                ]
              ]
            ]
          ]
        ]
      ]
    ]
  ]
];

getData();

function getData() {
  const tourId = parseUrlQuery("tour") === "" ? "6099" : parseUrlQuery("tour");
  const toursURL =
    "https://api.mosturflot.ru/v3/rivercruises/tours/" +
    tourId +
    "?fields[tours]=route";

  fetch(toursURL)
    .then(response => {
      return response.json();
    })
    .then(data => {
      const route = data.data.attributes["route"].split(" - ");
      loadCitiesData(route);
    });
}

function loadCitiesData(route) {
  fetch("assets/js/points.json")
    .then(response => {
      return response.json();
    })
    .then(data => {
      findCitiesData(data, route);
    });
}

function findCitiesData(data, route) {
  let tmp = [];
  let unique = [];
  data.data.map(city => {
    route.map(station => {
      let ex = {};
      if (station.indexOf(city.attributes.name) > -1) {
        ex["name"] = station;
        ex["id"] = city.id;
        ex["description"] =
          city.attributes.description === null
            ? ""
            : city.attributes.description; //.replace(/(<([^>]+)>)/gi, "");
        if (unique.indexOf(station) === -1) {
          unique.push(station);
          tmp.push(ex);
        }
      }
    });
  });
  findMapPoints(route, tmp);
}

function findMapPoints(data, cities) {
  const tourPoints = [];
  const realPoints = [];
  const realRoutePoints = [];
  const citiesLatLng = [];
  data.map(function(point, index) {
    if (point) {
      points.map(function(pt, i) {
        if (point.indexOf(pt.name) > -1) {
          cities.forEach(city => {
            if (city.name.indexOf(pt.name) > -1) {
              city["latlng"] = [pt.latitude, pt.longitude];
              citiesLatLng.push(city);
            }
          });
          tourPoints[i] = [pt.latitude, pt.longitude];
          realPoints[i] = pt;
        }
      });
    }
    if (data.length === index + 1) {
      const realPointsClean = normalizeArr(realPoints);
      const clean = [];
      realPointsClean.forEach(a => {
        const arr2 = itinerary(mapTree, realPointsClean[0].name, a.name);
        const dif = _.difference(arr2, clean);
        clean.push(...dif);
      });
      clean.map(function(p, x) {
        if (p) {
          points.map(function(st) {
            if (p.indexOf(st.name) > -1 && st.name.indexOf("озеро") === -1) {
              realRoutePoints.push([st.latitude, st.longitude]);
            }
          });
        }
        if (clean.length === x + 1) {
          const line = normalizeArr(realRoutePoints);
          const latlng = normalizeArr(tourPoints);
          renderRouteMap(line, latlng, citiesLatLng);
        }
      });
    }
  });
}

function normalizeArr(arr) {
  const arrN = [];
  arr.forEach(el => {
    if (el) {
      arrN.push(el);
    }
  });
  return arrN;
}

function renderRouteMap(line, locations, cities) {
  const map = L.map("map").setView([55.850701, 37.465197], 8);
  L.polyline(line, { color: "#00ffff" }).addTo(map);
  L.tileLayer(
    "https://vec{s}.maps.yandex.net/tiles?l=map&v=20.10.06-1&z={z}&x={x}&y={y}&scale=2&lang=ru_RU",
    {
      subdomains: ["01", "02", "03", "04"],
      attribution: '<a href="https://yandex.ru" target="_blank">Яндекс</a>',
      reuseTiles: true,
      updateWhenIdle: false
    }
  ).addTo(map);
  map.options.crs = L.CRS.EPSG3395;
  L.Icon.Default.imagePath = "assets/lib/images/";

  let mapPoints = [];
  // locations.forEach(el => {
  //   mapPoints.push([el[0], el[1]]);
  //   L.marker([el[0], el[1]]).addTo(map);
  //   map.fitBounds(mapPoints);
  // });

  cities.forEach(el => {
    mapPoints.push(el.latlng);
    let html =
      "<b>" +
      el.name +
      "</b><br>" +
      '<img alt="Стоянка" src="./assets/img/mtf/st/' +
      el.id +
      '.jpg" style="width: 250px;">' +
      '<div style="height: 200px; overflow-y: scroll;">' +
      el.description +
      "</div>";

    L.marker(el.latlng)
      .bindPopup(html)
      .addTo(map);
    map.fitBounds(mapPoints);
  });
}
