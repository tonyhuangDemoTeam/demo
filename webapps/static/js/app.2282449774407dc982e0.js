webpackJsonp([1],{

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);


let base = '';

const requestLogin = params => {
  return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post(`${base}/login`, params).then(res => res.data);
};
/* harmony export (immutable) */ __webpack_exports__["a"] = requestLogin;


const getUserList = params => {
  return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(`${base}/user/list`, { params: params });
};
/* harmony export (immutable) */ __webpack_exports__["c"] = getUserList;


const getCustomerList = params => {
  return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(`${base}/customer/list`, { params: params });
};
/* harmony export (immutable) */ __webpack_exports__["b"] = getCustomerList;


const getUserListPage = params => {
  return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(`${base}/user/listpage`, { params: params });
};
/* harmony export (immutable) */ __webpack_exports__["d"] = getUserListPage;


const removeUser = params => {
  return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(`${base}/user/remove`, { params: params });
};
/* harmony export (immutable) */ __webpack_exports__["e"] = removeUser;


const batchRemoveUser = params => {
  return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(`${base}/user/batchremove`, { params: params });
};
/* harmony export (immutable) */ __webpack_exports__["h"] = batchRemoveUser;


const editUser = params => {
  return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(`${base}/user/edit`, { params: params });
};
/* harmony export (immutable) */ __webpack_exports__["f"] = editUser;


const addUser = params => {
  return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(`${base}/user/add`, { params: params });
};
/* harmony export (immutable) */ __webpack_exports__["g"] = addUser;


/***/ }),

/***/ 1468:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 1469:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 1470:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 1471:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 1472:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 1473:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 1474:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 1475:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 1476:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 1477:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 1478:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 1479:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 1480:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 1481:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 1482:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 1483:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 1484:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 1485:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 1486:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 1487:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 1488:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 1489:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 1490:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 1502:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCACAAIADASIAAhEBAxEB/8QAHAAAAQUBAQEAAAAAAAAAAAAABAEDBQYHAgAI/8QANhAAAgEDAwIEBAUCBgMAAAAAAQIDAAQRBRIhMUEGEyJRBzJhgRQVI3HBQlKRobHR4fAWM2L/xAAZAQADAQEBAAAAAAAAAAAAAAACAwQBAAX/xAAlEQACAgICAgIBBQAAAAAAAAAAAQIRAyESMQQTIkEUFTJxgZH/2gAMAwEAAhEDEQA/AN/r1ITivFq44WvUgalrjD1JXsgUm4DrXHC0hI965MigEkgD3NU/xH49sdHV0gKzSr1OfSP96CeSMFch2LDPK+MFZcS4HU0oYEdawa4+LGpXd0YoZPKHuABUlo3xL1K0uCt6i3MR7FgGH3pX5Mb2iv8ATcrjcWmbTXqzq3+K1iZVW7spYYyceYDux+9Xqy1C21G1S4tZVliYZBU02GSM+mSZfHy4v3qguvVzvA71x5y+9GJHa9TXnr70zJeIueRXHBDEe9NeYFJBNVbW/EsennJcDB6Zqs33xA3wkQDDe+aFzUewowlLo0o3kSttLjNDy61awzCF5AHYZArEz4l1GTU47kzs2w52k8VL3/iuK78tkXbMnUkcil+5DHglF7NTW/E0uFbj6V1JexopZ3AAGTzVE0zxAGl2nO5lH2qt+N/Gy2Nu0Fu+ZHJH/NA8/wBR2x2LxHJ70kSHjPx+8jvY2L7YxwzZ61mN3qJlY8mSRj3PFQ35lNdTHG55HPQckk1b9D+Ht/qMaXNzMbdWGVUgk0l43dz7PThnhCHDEqRBbEiw9wF8xhkY4pGuGBDIfT3BOat+r/D69ktkVJFd04DDjIqhahpl/o03lXMbDB4fHBooxTBlmceiSi1Bl7l4z8yHn/Crn4I8XnQb0bpXexlPrXPy/XFZiLjkEHHPbsaLguijhgcHOGArvXTtdme9TXCfR9Xx3kd/AklvIGjcZDKcjFcF2jk2gE1lXwv8VFLr8suZf0ZP/USeje1avNKEO7jIqmEuSPKzYvXKl0CahfJa2zyM+0gZ5NVO48RPLGyxtmQ9MHpR2v2smqxuY92VHAFU6zT8LdhpVwkZw4bqR3rbdgJKhPG9r5N15jTMSx6Z4qjyXGw46CiL/XJ9Uk864fJz0zxUZNOjjANTz2y3F8EPDUfKbIFOW2oGa43Nghef3NQzHcSM1NaDpMl3OGfKwqd7uemKGXGMW2FFynNJFjW//A6fksRLL1P9o7msw1XUH1PU3ck7M4UZ7dqsHiDVPRMYicOdifRR/wBJ+9Q/h7S21LXLS2UZMjjI+lZgjVzY3yX1hh/Zf/hv4VaQfmVzB6c4j3Dr9a1Vl8tAFGMU0v4fSNPjXG1EUKABVfvvFMyOzWxhm29YjgH7Gtu9sFRb66JqadwMY6VBatYWup2skU6KwYd+1JZeK7fU0ZdhimX5o26j606zxzD5wO9aElRiuv6S2jX7IpLRMeDQMcpyPrxV28d2hEG/GRnhqoUZyBzzTou0S5PjLRO6Zeta6grI208MMdjW/aLra6nocF0z5fbtfnuK+bHkYGKZeqsM1efDuuSx2skSvhG9Q56UuVwfIbXtg4/aNP8A/IbXT5ZY7iQYbJGW4/aqPr3icXEksdufSxPIFV3WnmDiR5Cd3IHtUP5xxkk5pq2rJePF0OFVCAAj7VwsO99qnk0EszCQDPFHWuTcLn3oGqexilfQTY6VLd3nkoAcfMT2HvVm1aeLR9KktoW9TcA9zxjNNWKppVrJLKcvJgqo71WNTv5b29UO2Ruz9qileXJX0j08UFhx8n2yE1OVmdIyclRz+9Xb4Zafs8QJPIuWEZIPbnGKoF25eZ39zWnfChHNld3cn9MgjQ/QDJ/1qyaqBDjlyyuzVbq2S7t2jfOCOoPNZhrvgkwTMbGa8jBO5sHcprRzqUSL6mAoKbxBYJKsckqlmOAvUn7UEdbsbwfVFP8ADHh+9Wc/imDrj0v3/Y0N4l1k6HeeRHjfj+roK0z0JAZVGOPaqBqOmJrV1dOQrNv6MM1tLtnW60UfVNcvNUs9k0tuy9towaqfQ59jVn1zw1LZPuSPyh1IDZBqsNxI6HrToVWiXJyv5BEZDROp/epXRZjFJtJwM8e2D/zUDFJskANStkQJ1TdgHlD/ABQZFoLDL5Kib1WVpbYE9RUGJGPepy8iaS1yOOnSoSSMqxGDmig00Lyp8mEi3QYbPNSmlW488SPyq1H2ls97KEVtvGST0Aqx3aQ2GmHZGqyBMAsctn3x2qbNPj8ftlni4eb5VpEdqd95jNO7YRTtiHvjqarkdx5zvKepyf8ALAo2/uE8ohR8ke1Se5PU1DRkou09ehosMEoheTkfJJHMoBwT3FaV8OL1ItDmgyN6SsSP371mczDIHsKlPDGrnTdSTe2IZfS/PT2NOmriSYpqOTZoXiDUbmJVMTkA5JIHQV7Q7SJfL1WK+hublPWqsf4qThs1vSkpwyYP7VEutlp87WVzbJLbAkqUO2RM46HuMDFTp6o9CpSeiabx9CU8q7iKvkghORUJbeI9mtyMq7YZ8MFbqDUJqE8NqfMs5ZXJJPlzR5x7DNQ19eztD+JlRI3XptNMSbFSycdUW/xRqME1uXDdvesrkmLXDOO5oy+vJZIQjyFnbrz0FArHxknFOhGuyLNk5vQ43OHH3o2zuBG67xlQc8dR9aCjXnGeK75hkBOQK1q9AQbi7LZNdK1oAjcHkEd6jGJbnPXvQ9lKSJ4ycqAGH0p5W3HGaFRpGylyZaLjydKsktrXlzhpJPc1DXlzcNESZAxbsaF1DW/xdwzRrtUnj6CgpLnKqjPkt1AqeGJ9y7PSyeRBLjDoaeR3YM7cDt/FNHAz370kreokdun0pkkkfvVCRBKWzl2ySaWFcsPpXDHBoyBVAVxkZ6ijehSi2zRfBHimGKD8vv2xjiNz3HtUvq9jpd2278Rkt056VmtvAJUJB5oa5ubu1PE747ZNI9fy0VxzOMdlnvrGCyVnacOq9BnNVPU9Q89fLXoDmgZru4mOZZGP3pk+rmmxhXZPkzOfR4lnbcTSZNKrFOMZBpQhb5Oc0wT2PW6tIwRQTk4qQ1C3eC1TzYmRv6S39QoO3WeBhtwGz3qb06xbUpxLfTNKVGAkmQopctOxsNqkN6dp0v5U1wVP6nIP/wAimHDLIqgc1Z4pTa4tmRPKPVQpIxRh0EagFkgjWFsE5KHkewFBz2G8etFIuVghIWIEkdSaGjUtIZGHA6U80fnyk9h3FKwAwvYUdgpWwabiMn3OKG3YX60RdHkIKHdcAVq6Bl2I2QadDnykBPAPNcEb1HuK8kLkMCRgc1royN/QWl68IxHk15ne4O9jn+KZiIjHqGQaRpAThTtFD/A1Ulb/AMPPGApwM46mhS3tT7uQoUH00sdpLMoKrwe5o0Ikregcc5o21jLBcjHNFWmlFctNz7CnzHsYOnRTmsbs5IKitkeRBI2enDf71Kq0FqF82OTcD86n5h9cf61Az3DAErxj5f29q6Sd2tROxO9DjH9w7UDjYyMki0QiGe5WW3trh9pzhuQtXKK7f8P5kKo0qpwg61XPA/jKNbhbO8VWIGEY8MB/NaxbxWheO5jjjPp9JAGMGhUNhPIqPmeBXEAIbCEcmuJCAvH+Jp+ZZLeERPGyHsGGKj3fc4jHSiW2FJcFT7OSTK5boK4c5YDsKOkgCxYTkgc4oLAVSD8x5o0xLVDkYAGHA2t39q6WL1/pSA++aaXBGGbjGa4D+W/HI7fSuCpWpPoOeJUj3FkLY4wKELea+xU56ACu4o5rluAQD1PvU5p+neUN2z1d2IrOuzZyi3UFSI+x0h5FaSQDg4C1NpbLEOgB7fSo651oW9w0dugkVeC3TJ+lNpq0UhO/erHuTxWU2KtIk3wUJUDAppITJERjvXCX8DhF81evXNELIyn9NQynqQc1lUFYP+A3tkjgUxtEtxsQfpp/nRl3cMlv3DtwBimbCLETt9q0wdstPV72OYMVMZDEjrX0D4cWG/0K2EEaxCJREyf2kf8Ac/esM04fps/d2z9q1DwVqZguFhZvRMAjfRh8p/iuT3s5rWj/2Q=="

/***/ }),

/***/ 1503:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(1477)

var Component = __webpack_require__(15)(
  /* script */
  __webpack_require__(599),
  /* template */
  __webpack_require__(1536),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 1504:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(1486)

var Component = __webpack_require__(15)(
  /* script */
  null,
  /* template */
  __webpack_require__(1545),
  /* scopeId */
  "data-v-7554d824",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 1505:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(1484)

var Component = __webpack_require__(15)(
  /* script */
  __webpack_require__(600),
  /* template */
  __webpack_require__(1543),
  /* scopeId */
  "data-v-6bc793b9",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 1506:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(1473)

var Component = __webpack_require__(15)(
  /* script */
  __webpack_require__(601),
  /* template */
  __webpack_require__(1532),
  /* scopeId */
  "data-v-2b0fc9ff",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 1507:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(1490)

var Component = __webpack_require__(15)(
  /* script */
  __webpack_require__(602),
  /* template */
  __webpack_require__(1552),
  /* scopeId */
  "data-v-ef7cb0da",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 1508:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(1479)

var Component = __webpack_require__(15)(
  /* script */
  __webpack_require__(603),
  /* template */
  __webpack_require__(1538),
  /* scopeId */
  "data-v-539a8658",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 1509:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(1481)

var Component = __webpack_require__(15)(
  /* script */
  __webpack_require__(604),
  /* template */
  __webpack_require__(1540),
  /* scopeId */
  "data-v-575f82c3",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 1510:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(1471)

var Component = __webpack_require__(15)(
  /* script */
  __webpack_require__(605),
  /* template */
  __webpack_require__(1530),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 1511:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(15)(
  /* script */
  null,
  /* template */
  null,
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 1512:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(1470)

var Component = __webpack_require__(15)(
  /* script */
  __webpack_require__(606),
  /* template */
  __webpack_require__(1529),
  /* scopeId */
  "data-v-1703bf5f",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 1513:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(1488)

var Component = __webpack_require__(15)(
  /* script */
  __webpack_require__(607),
  /* template */
  __webpack_require__(1548),
  /* scopeId */
  "data-v-82864814",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 1514:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(1475)

var Component = __webpack_require__(15)(
  /* script */
  __webpack_require__(608),
  /* template */
  __webpack_require__(1534),
  /* scopeId */
  "data-v-3456e690",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 1515:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(1472)

var Component = __webpack_require__(15)(
  /* script */
  __webpack_require__(609),
  /* template */
  __webpack_require__(1531),
  /* scopeId */
  "data-v-24ff4f4a",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 1516:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(1469)

var Component = __webpack_require__(15)(
  /* script */
  __webpack_require__(610),
  /* template */
  __webpack_require__(1528),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 1517:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(15)(
  /* script */
  __webpack_require__(611),
  /* template */
  __webpack_require__(1547),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 1518:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(1485)

var Component = __webpack_require__(15)(
  /* script */
  __webpack_require__(612),
  /* template */
  __webpack_require__(1544),
  /* scopeId */
  "data-v-70541407",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 1519:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(1478)

var Component = __webpack_require__(15)(
  /* script */
  __webpack_require__(613),
  /* template */
  __webpack_require__(1537),
  /* scopeId */
  "data-v-4e7c0802",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 1520:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(1489)

var Component = __webpack_require__(15)(
  /* script */
  __webpack_require__(614),
  /* template */
  __webpack_require__(1550),
  /* scopeId */
  "data-v-a3fc7202",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 1521:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(15)(
  /* script */
  null,
  /* template */
  __webpack_require__(1549),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 1522:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(1482)

var Component = __webpack_require__(15)(
  /* script */
  __webpack_require__(615),
  /* template */
  __webpack_require__(1541),
  /* scopeId */
  "data-v-645a60dc",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 1523:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(15)(
  /* script */
  null,
  /* template */
  __webpack_require__(1551),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 1524:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(1487)

var Component = __webpack_require__(15)(
  /* script */
  __webpack_require__(616),
  /* template */
  __webpack_require__(1546),
  /* scopeId */
  "data-v-784d5d50",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 1525:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(1476)

var Component = __webpack_require__(15)(
  /* script */
  __webpack_require__(617),
  /* template */
  __webpack_require__(1535),
  /* scopeId */
  "data-v-438c99b4",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 1526:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(1474)

var Component = __webpack_require__(15)(
  /* script */
  __webpack_require__(618),
  /* template */
  __webpack_require__(1533),
  /* scopeId */
  "data-v-33e6b01c",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 1527:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(1480)

var Component = __webpack_require__(15)(
  /* script */
  __webpack_require__(619),
  /* template */
  __webpack_require__(1539),
  /* scopeId */
  "data-v-566bcfbd",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 1528:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "highchart"
    }
  }, [_c('div', {
    staticClass: "box"
  }, [_c('h3', [_vm._v("股票图")]), _vm._v(" "), _c('div', {
    staticClass: "container",
    attrs: {
      "id": "container"
    }
  }), _vm._v(" "), _c('button', {
    attrs: {
      "disabled": !_vm.stockChart
    },
    on: {
      "click": _vm.updateStcockChart
    }
  }, [_vm._v("更新数据范围")])]), _vm._v(" "), _c('div', {
    staticClass: "box"
  }, [_c('h3', [_vm._v("\n      更多图表类型：\n      "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.type),
      expression: "type"
    }],
    on: {
      "change": [function($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
          return o.selected
        }).map(function(o) {
          var val = "_value" in o ? o._value : o.value;
          return val
        });
        _vm.type = $event.target.multiple ? $$selectedVal : $$selectedVal[0]
      }, function($event) {
        _vm.moreChart()
      }]
    }
  }, _vm._l((_vm.moreSamples), function(s) {
    return _c('option', {
      domProps: {
        "value": s.code
      }
    }, [_vm._v(_vm._s(s.name))])
  }))]), _vm._v(" "), _c('div', {
    staticClass: "container",
    attrs: {
      "id": "highcharts-more"
    }
  })]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "box"
  }, [_c('h3', [_vm._v("使用封装的组件生产")]), _vm._v(" "), _c('highcharts-component', {
    ref: "simpleChart",
    attrs: {
      "options": _vm.options,
      "styles": _vm.styles
    }
  }), _vm._v(" "), _c('button', {
    on: {
      "click": _vm.updateChart
    }
  }, [_vm._v("更新图表")])], 1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "box"
  }, [_c('h3', [_vm._v("地图")]), _vm._v(" "), _c('div', {
    staticClass: "container",
    attrs: {
      "id": "highmaps"
    }
  })])
}]}

/***/ }),

/***/ 1529:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_vm._m(0), _vm._v(" "), _c('div', {
    attrs: {
      "id": "chart"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "el-button el-button--info",
    attrs: {
      "title": "Start Demo"
    },
    on: {
      "click": function($event) {
        $event.preventDefault();
        return _vm.startDemo($event)
      }
    }
  }, [_vm._v("Start Demo")]), _vm._v(" "), _c('div', {
    staticClass: "el-button el-button--primary",
    attrs: {
      "title": "Stop Demo"
    },
    on: {
      "click": function($event) {
        $event.preventDefault();
        return _vm.stopDemo($event)
      }
    }
  }, [_vm._v("Stop Demo")])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "message"
    }
  }, [_c('span', {
    staticClass: "el-button el-button",
    attrs: {
      "id": "demoMessage"
    }
  }, [_vm._v("Starting Demo..")])])
}]}

/***/ }),

/***/ 1530:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "chart-container"
  }, [_c('el-row', [_c('el-col', {
    attrs: {
      "span": 24
    }
  }, [_c('vo-basic', {
    attrs: {
      "data": _vm.chartData,
      "nodeContent": "title",
      "toggleCollapse": false
    }
  })], 1)], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 1531:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "chart-container"
  }, [_c('el-row', [_c('el-col', {
    attrs: {
      "span": 12
    }
  }, [_c('div', {
    staticStyle: {
      "width": "100%",
      "height": "400px"
    },
    attrs: {
      "id": "chartColumn"
    }
  })]), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 12
    }
  }, [_c('div', {
    staticStyle: {
      "width": "100%",
      "height": "400px"
    },
    attrs: {
      "id": "chartBar"
    }
  })]), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 12
    }
  }, [_c('div', {
    staticStyle: {
      "width": "100%",
      "height": "400px"
    },
    attrs: {
      "id": "chartLine"
    }
  })]), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 12
    }
  }, [_c('div', {
    staticStyle: {
      "width": "100%",
      "height": "400px"
    },
    attrs: {
      "id": "chartPie"
    }
  })]), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 24
    }
  }, [_c('a', {
    staticStyle: {
      "float": "right"
    },
    attrs: {
      "href": "http://echarts.baidu.com/examples.html",
      "target": "_blank"
    }
  }, [_vm._v("more>>")])])], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 1532:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_vm._m(0), _vm._v(" "), _c('el-form', {
    ref: "ruleForm2",
    staticClass: "demo-ruleForm login-container",
    attrs: {
      "model": _vm.ruleForm2,
      "rules": _vm.rules2,
      "label-position": "left",
      "label-width": "0px"
    }
  }, [_c('h3', {
    staticClass: "title"
  }, [_vm._v("Sign in to HSBC")]), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "prop": "account"
    }
  }, [_c('el-input', {
    attrs: {
      "type": "text",
      "auto-complete": "off",
      "placeholder": "manager||rm||admin"
    },
    nativeOn: {
      "keyup": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) { return null; }
        return _vm.handleSubmit2($event)
      }
    },
    model: {
      value: (_vm.ruleForm2.account),
      callback: function($$v) {
        _vm.$set(_vm.ruleForm2, "account", $$v)
      },
      expression: "ruleForm2.account"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "prop": "checkPass"
    }
  }, [_c('el-input', {
    attrs: {
      "type": "password",
      "auto-complete": "off",
      "placeholder": "Password"
    },
    nativeOn: {
      "keyup": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) { return null; }
        return _vm.handleSubmit2($event)
      }
    },
    model: {
      value: (_vm.ruleForm2.checkPass),
      callback: function($$v) {
        _vm.$set(_vm.ruleForm2, "checkPass", $$v)
      },
      expression: "ruleForm2.checkPass"
    }
  })], 1), _vm._v(" "), _c('el-checkbox', {
    staticClass: "remember",
    attrs: {
      "checked": ""
    },
    model: {
      value: (_vm.checked),
      callback: function($$v) {
        _vm.checked = $$v
      },
      expression: "checked"
    }
  }, [_vm._v("Remember password！")]), _vm._v(" "), _c('el-form-item', {
    staticStyle: {
      "width": "100%"
    }
  }, [_c('el-button', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "type": "primary",
      "loading": _vm.logining
    },
    nativeOn: {
      "click": function($event) {
        $event.preventDefault();
        return _vm.handleSubmit2($event)
      }
    }
  }, [_vm._v("Sign in")])], 1)], 1)], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "logo"
  }, [_c('img', {
    attrs: {
      "src": "",
      "alt": ""
    }
  })])
}]}

/***/ }),

/***/ 1533:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_c('el-col', {
    attrs: {
      "span": 20
    }
  }, [_c('p', {
    staticClass: "data-txt"
  }, [_vm._v("Today")]), _vm._v(" "), _c('el-table', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "data": _vm.tableData,
      "show-header": false,
      "size": "small"
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "date",
      "label": "",
      "width": "180"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "info",
      "label": ""
    }
  })], 1), _vm._v(" "), _c('p', {
    staticClass: "data-txt"
  }, [_vm._v("Yesterday")]), _vm._v(" "), _c('el-table', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "show-header": false,
      "size": "small",
      "data": _vm.tableData
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "date",
      "label": "",
      "width": "180"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "info",
      "label": ""
    }
  })], 1), _vm._v(" "), _c('p', {
    staticClass: "data-txt"
  }, [_vm._v("more then")]), _vm._v(" "), _c('el-table', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "show-header": false,
      "size": "small",
      "data": _vm.tableData
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "date",
      "label": "",
      "width": "180"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "info",
      "label": ""
    }
  })], 1)], 1), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 20
    }
  })], 1)
},staticRenderFns: []}

/***/ }),

/***/ 1534:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "chart-container"
  }, [_c('el-row', [_c('transition', {
    attrs: {
      "name": "el-zoom-in-top"
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.show2),
      expression: "show2"
    }],
    staticClass: "transition-box"
  }, [_c('el-col', {
    attrs: {
      "span": 20
    }
  }, [_c('el-form', {
    ref: "form",
    staticClass: "form-box",
    attrs: {
      "model": _vm.sizeForm,
      "label-width": "120px",
      "size": "mini"
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "Asset Calss:"
    }
  }, [_c('el-checkbox-group', {
    attrs: {
      "min": 0
    },
    model: {
      value: (_vm.sizeForm.asset),
      callback: function($$v) {
        _vm.$set(_vm.sizeForm, "asset", $$v)
      },
      expression: "sizeForm.asset"
    }
  }, [_c('el-checkbox-button', {
    attrs: {
      "label": "EQ",
      "name": "type"
    }
  }), _vm._v(" "), _c('el-checkbox-button', {
    attrs: {
      "label": "BD",
      "name": "type"
    }
  }), _vm._v(" "), _c('el-checkbox-button', {
    attrs: {
      "label": "SP",
      "name": "type"
    }
  })], 1)], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "Industry:"
    }
  }, [_c('el-checkbox-group', {
    attrs: {
      "min": 0
    },
    model: {
      value: (_vm.sizeForm.booking),
      callback: function($$v) {
        _vm.$set(_vm.sizeForm, "booking", $$v)
      },
      expression: "sizeForm.booking"
    }
  }, [_c('el-checkbox-button', {
    attrs: {
      "label": "Fim",
      "name": "type"
    }
  }), _vm._v(" "), _c('el-checkbox-button', {
    attrs: {
      "label": "Tech",
      "name": "type"
    }
  }), _vm._v(" "), _c('el-checkbox-button', {
    attrs: {
      "label": "Chemistng",
      "name": "type"
    }
  }), _vm._v(" "), _c('el-checkbox-button', {
    attrs: {
      "label": "HK",
      "name": "type"
    }
  }), _vm._v(" "), _c('el-checkbox-button', {
    attrs: {
      "label": "US",
      "name": "type"
    }
  }), _vm._v(" "), _c('el-checkbox-button', {
    attrs: {
      "label": "UK",
      "name": "type"
    }
  })], 1)], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "Region:"
    }
  }, [_c('el-checkbox-group', {
    attrs: {
      "min": 0
    },
    model: {
      value: (_vm.sizeForm.region),
      callback: function($$v) {
        _vm.$set(_vm.sizeForm, "region", $$v)
      },
      expression: "sizeForm.region"
    }
  }, [_c('el-checkbox-button', {
    attrs: {
      "label": "China",
      "name": "type"
    }
  }), _vm._v(" "), _c('el-checkbox-button', {
    attrs: {
      "label": "HongKong",
      "name": "type"
    }
  }), _vm._v(" "), _c('el-checkbox-button', {
    attrs: {
      "label": "Singapore",
      "name": "type"
    }
  }), _vm._v(" "), _c('el-checkbox-button', {
    attrs: {
      "label": "United Kingdom",
      "name": "type"
    }
  })], 1)], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "Age:"
    }
  }, [_c('el-slider', {
    attrs: {
      "range": "",
      "step": 10,
      "show-stops": ""
    },
    model: {
      value: (_vm.sizeForm.ageValue),
      callback: function($$v) {
        _vm.$set(_vm.sizeForm, "ageValue", $$v)
      },
      expression: "sizeForm.ageValue"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "slider-mark"
  }, [_c('ul', _vm._l((_vm.sizeForm.ageMark), function(item) {
    return _c('li', [_vm._v("\n                                " + _vm._s(item) + "\n                            ")])
  }))])], 1), _vm._v(" "), _c('el-form-item', {
    staticStyle: {
      "display": "none"
    },
    attrs: {
      "size": "large"
    }
  }, [_c('el-button', {
    attrs: {
      "type": "primary",
      "size": "small"
    },
    on: {
      "click": _vm.onSubmit
    }
  }, [_vm._v("Sent")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "size": "small"
    }
  }, [_vm._v("Reset")])], 1)], 1)], 1)], 1)]), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 20
    }
  }, [_c('div', {
    staticClass: "showbtn",
    on: {
      "click": function($event) {
        _vm.show2 = !_vm.show2
      }
    }
  }, [_c('i', {
    staticClass: "fa",
    class: !_vm.show2 ? 'fa-angle-double-down' : 'fa-angle-double-up'
  })])]), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 24
    }
  }, [_c('div', {
    staticStyle: {
      "width": "80%",
      "height": "400px"
    },
    attrs: {
      "id": "chartPie"
    }
  })])], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 1535:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_c('el-row', [_c('el-col', {
    attrs: {
      "span": 24
    }
  }, [_c('div', {
    staticClass: "cp-head-info"
  }, [_c('ul', {
    staticStyle: {
      "width": "60%",
      "float": "left"
    }
  }, [_c('li', [_c('span', {
    staticClass: "span1"
  }, [_vm._v("Customer Number:")]), _vm._v(" "), _c('span', {
    staticClass: "span2"
  }, [_vm._v("8000-123456")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "span1"
  }, [_vm._v("Account Number:")]), _vm._v(" "), _c('span', {
    staticClass: "span2"
  }, [_vm._v("0001")])]), _vm._v(" "), _c('li', [_c('span', {
    staticClass: "span1"
  }, [_vm._v("Customer Name:")]), _vm._v(" "), _c('span', {
    staticClass: "span2"
  }, [_vm._v("Nikko KITMAN")])])]), _vm._v(" "), _c('div', {
    staticStyle: {
      "width": "30%",
      "float": "right"
    }
  }, [_c('el-button', {
    staticStyle: {
      "float": "right",
      "margin": "25px"
    },
    attrs: {
      "size": "small",
      "type": "primary"
    }
  }, [_vm._v("Save As PDF")])], 1)])]), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 24
    }
  }, [_c('div', {
    staticClass: "cp-table-txt"
  }, [_c('p', [_vm._v("Equity:")])]), _vm._v(" "), _c('el-table', {
    staticClass: "cp-table",
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "data": _vm.tableData1,
      "show-summary": "",
      "sum-text": "Total",
      "size": "small",
      "header-cell-style": _vm.tableHeaderColor
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "name",
      "label": "Product Name"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "quantity",
      "label": "Quantity"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "totalAmount",
      "label": "Total Amount(USD)"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "marketPrice",
      "label": "Market Price"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "averageCost",
      "label": "Average Cost"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "pl",
      "label": "P&L(USD)"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "lbdp",
      "width": "180",
      "label": "Last Biz Date P&L(USD)"
    }
  })], 1)], 1), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 24
    }
  }, [_c('div', {
    staticClass: "cp-table-txt"
  }, [_c('p', [_vm._v("Fixed Income:")])]), _vm._v(" "), _c('el-table', {
    staticClass: "cp-table",
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "data": _vm.tableData2,
      "show-summary": "",
      "sum-text": "Total",
      "size": "small",
      "header-cell-style": _vm.tableHeaderColor
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "name",
      "label": "Product Name"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "quantity",
      "label": "Quantity"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "totalAmount",
      "label": "Total Amount(USD)"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "marketPrice",
      "label": "Market Price"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "averageCost",
      "label": "Average Cost"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "pl",
      "label": "P&L(USD)"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "lbdp",
      "width": "180",
      "label": "Last Biz Date P&L(USD)"
    }
  })], 1)], 1), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 24
    }
  }, [_c('div', {
    staticClass: "cp-table-txt"
  }, [_c('p', [_vm._v("FX:")])]), _vm._v(" "), _c('el-table', {
    staticClass: "cp-table",
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "data": _vm.tableData3,
      "show-summary": "",
      "sum-text": "Total",
      "size": "small",
      "header-cell-style": _vm.tableHeaderColor
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "name",
      "label": "CCY Pair"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "quantity",
      "label": "Buy Amout"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "totalAmount",
      "label": "Sell Amount"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "marketPrice",
      "label": "Bid/Offer Rate"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "averageCost",
      "label": "Market Rate"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "pl",
      "label": "P&L(USD)"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "lbdp",
      "width": "180",
      "label": "Last Biz Date P&L(USD)"
    }
  })], 1)], 1), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 24
    }
  }, [_c('div', {
    staticClass: "cp-table-txt"
  }, [_c('p', [_vm._v("Portfolio Summary:")])]), _vm._v(" "), _c('el-table', {
    staticClass: "cp-table",
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "data": _vm.tableData4,
      "size": "small",
      "header-cell-style": _vm.tableHeaderColor
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "name",
      "label": "Equity"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "quantity",
      "label": "Fixed Income"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "totalAmount",
      "label": "FXt"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "marketPrice",
      "label": "Structure Product"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "averageCost",
      "label": "Total Value"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "pl",
      "label": "Total P&L"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "lbdp",
      "width": "180",
      "label": "Total P&L Last Biz Date"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('el-row', [_c('el-col', {
    attrs: {
      "span": 12
    }
  }, [_c('div', {
    staticStyle: {
      "width": "80%",
      "height": "400px"
    },
    attrs: {
      "id": "chartPie1"
    }
  })]), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 12
    }
  }, [_c('div', {
    staticStyle: {
      "width": "80%",
      "height": "400px"
    },
    attrs: {
      "id": "chartPie2"
    }
  })])], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 1536:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "highcharts-container"
  })
},staticRenderFns: []}

/***/ }),

/***/ 1537:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_c('el-col', {
    staticClass: "toolbar",
    staticStyle: {
      "padding-bottom": "0px"
    },
    attrs: {
      "span": 24
    }
  }, [_c('el-form', {
    attrs: {
      "inline": true,
      "model": _vm.filters
    }
  }, [_c('el-form-item', [_c('el-input', {
    attrs: {
      "placeholder": "姓名"
    },
    model: {
      value: (_vm.filters.name),
      callback: function($$v) {
        _vm.$set(_vm.filters, "name", $$v)
      },
      expression: "filters.name"
    }
  })], 1), _vm._v(" "), _c('el-form-item', [_c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.getUser
    }
  }, [_vm._v("查询")])], 1)], 1)], 1), _vm._v(" "), [_c('el-table', {
    directives: [{
      name: "loading",
      rawName: "v-loading",
      value: (_vm.loading),
      expression: "loading"
    }],
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "data": _vm.users,
      "highlight-current-row": ""
    }
  }, [_c('el-table-column', {
    attrs: {
      "type": "index",
      "width": "60"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "name",
      "label": "姓名",
      "width": "120",
      "sortable": ""
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "sex",
      "label": "性别",
      "width": "100",
      "formatter": _vm.formatSex,
      "sortable": ""
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "age",
      "label": "年龄",
      "width": "100",
      "sortable": ""
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "birth",
      "label": "生日",
      "width": "120",
      "sortable": ""
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "addr",
      "label": "地址",
      "min-width": "180",
      "sortable": ""
    }
  })], 1)]], 2)
},staticRenderFns: []}

/***/ }),

/***/ 1538:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_c('el-col', {
    attrs: {
      "span": 12
    }
  }, [_c('el-form', {
    ref: "form",
    attrs: {
      "model": _vm.form,
      "label-width": "150px",
      "size": "small"
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "User ID :"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.form.userId),
      callback: function($$v) {
        _vm.$set(_vm.form, "userId", $$v)
      },
      expression: "form.userId"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "User Name :"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.form.userName),
      callback: function($$v) {
        _vm.$set(_vm.form, "userName", $$v)
      },
      expression: "form.userName"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "User Role :"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.form.userRole),
      callback: function($$v) {
        _vm.$set(_vm.form, "userRole", $$v)
      },
      expression: "form.userRole"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "RM Code :"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.form.rmCode),
      callback: function($$v) {
        _vm.$set(_vm.form, "rmCode", $$v)
      },
      expression: "form.rmCode"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "Team Code :"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.form.teamCode),
      callback: function($$v) {
        _vm.$set(_vm.form, "teamCode", $$v)
      },
      expression: "form.teamCode"
    }
  })], 1), _vm._v(" "), _c('el-form-item', [_c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.onSubmit
    }
  }, [_vm._v("Create Now")]), _vm._v(" "), _c('el-button', [_vm._v("Reset")])], 1)], 1)], 1), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 18
    }
  }, [_c('p', {
    staticClass: "info-txt"
  }, [_vm._v("User List")]), _vm._v(" "), _c('el-table', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "data": _vm.tableData,
      "size": "small"
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "userId",
      "label": "User ID",
      "width": "180"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "userName",
      "label": "User Name",
      "width": "180"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "userRole",
      "label": "User Role"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "rmCode",
      "label": "RM Code"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "teamCode",
      "label": "Team Code"
    }
  })], 1)], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 1539:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_c('el-col', {
    staticStyle: {
      "margin": "35px 0 25px"
    },
    attrs: {
      "span": 14
    }
  }, [_c('el-form', {
    ref: "form",
    attrs: {
      "model": _vm.form,
      "label-width": "150px",
      "size": "mini"
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "Buy or Sell"
    }
  }, [_c('el-radio-group', {
    model: {
      value: (_vm.form.buySell),
      callback: function($$v) {
        _vm.$set(_vm.form, "buySell", $$v)
      },
      expression: "form.buySell"
    }
  }, [_c('el-radio', {
    attrs: {
      "border": "",
      "label": "Buy"
    }
  }), _vm._v(" "), _c('el-radio', {
    attrs: {
      "border": "",
      "label": "Sell"
    }
  })], 1)], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "eShare or Phone"
    }
  }, [_c('el-radio-group', {
    model: {
      value: (_vm.form.eSharePhone),
      callback: function($$v) {
        _vm.$set(_vm.form, "eSharePhone", $$v)
      },
      expression: "form.eSharePhone"
    }
  }, [_c('el-radio', {
    attrs: {
      "border": "",
      "label": "eShare"
    }
  }), _vm._v(" "), _c('el-radio', {
    attrs: {
      "border": "",
      "label": "Phone"
    }
  })], 1)], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "Customer"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.form.name),
      callback: function($$v) {
        _vm.$set(_vm.form, "name", $$v)
      },
      expression: "form.name"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "Share Issue"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.form.shareIssue),
      callback: function($$v) {
        _vm.$set(_vm.form, "shareIssue", $$v)
      },
      expression: "form.shareIssue"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "Norminal"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.form.norminal),
      callback: function($$v) {
        _vm.$set(_vm.form, "norminal", $$v)
      },
      expression: "form.norminal"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "Share Currency"
    }
  }, [_c('el-select', {
    attrs: {
      "placeholder": "pls select u SC"
    },
    model: {
      value: (_vm.form.shareCurrency),
      callback: function($$v) {
        _vm.$set(_vm.form, "shareCurrency", $$v)
      },
      expression: "form.shareCurrency"
    }
  }, [_c('el-option', {
    attrs: {
      "label": "HKD",
      "value": "shanghai"
    }
  }), _vm._v(" "), _c('el-option', {
    attrs: {
      "label": "RMB",
      "value": "beijing"
    }
  })], 1)], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "Share Price"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.form.sharePrice),
      callback: function($$v) {
        _vm.$set(_vm.form, "sharePrice", $$v)
      },
      expression: "form.sharePrice"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "Trade Type"
    }
  }, [_c('el-select', {
    attrs: {
      "placeholder": "pls select u SC"
    },
    model: {
      value: (_vm.form.tradeType),
      callback: function($$v) {
        _vm.$set(_vm.form, "tradeType", $$v)
      },
      expression: "form.tradeType"
    }
  }, [_c('el-option', {
    attrs: {
      "label": "Limit",
      "value": "shanghai"
    }
  }), _vm._v(" "), _c('el-option', {
    attrs: {
      "label": "Limit",
      "value": "beijing"
    }
  })], 1)], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "Remark"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.form.remark),
      callback: function($$v) {
        _vm.$set(_vm.form, "remark", $$v)
      },
      expression: "form.remark"
    }
  })], 1), _vm._v(" "), _c('el-form-item', [_c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.onSubmit
    }
  }, [_vm._v("Submit")]), _vm._v(" "), _c('el-button', {
    on: {
      "click": _vm.onReset
    }
  }, [_vm._v("Reset")])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "cp-table-txt"
  }, [_c('p', [_vm._v("Holding Details:")])]), _vm._v(" "), _c('el-table', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "data": _vm.tableData,
      "size": "small",
      "header-cell-style": _vm.tableHeaderColor
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "issueName",
      "label": "Issue Name"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "avgPrice",
      "label": "Avg Price"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "norminal",
      "label": "Norminal"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "totalValue",
      "label": "Total Value"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "CCY",
      "label": "CCY"
    }
  })], 1)], 1), _vm._v(" "), _c('el-col', {
    staticStyle: {
      "padding": "35px"
    },
    attrs: {
      "span": 10
    }
  }, [_c('el-form', {
    ref: "form",
    attrs: {
      "label-width": "100px"
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "House View:"
    }
  }, [_c('div', [_vm._v("BULL")])])], 1), _vm._v(" "), _c('el-form', {
    ref: "form",
    attrs: {
      "label-width": "100px"
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "Credit Rating:"
    }
  }, [_c('div', [_vm._v("AA+")])])], 1), _vm._v(" "), _c('el-form', {
    ref: "form",
    attrs: {
      "label-width": "100px"
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "Solicite:"
    }
  }, [_c('div', [_vm._v("N")])])], 1)], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 1540:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "chart-container"
  }, [_c('el-row', [_c('el-col', {
    attrs: {
      "span": 16
    }
  }, [_c('div', {
    staticStyle: {
      "width": "100%",
      "height": "500px"
    },
    attrs: {
      "id": "chartPie"
    }
  })]), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 8
    }
  }, [_c('el-table', {
    staticStyle: {
      "width": "100%",
      "margin-top": "30%"
    },
    attrs: {
      "size": "small",
      "data": _vm.tableData,
      "show-summary": true,
      "sum-text": "Total"
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "date",
      "width": "auto"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "name",
      "width": "60"
    }
  })], 1)], 1)], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 1541:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_c('el-row'), _vm._v(" "), _c('el-row', [_c('el-button', {
    attrs: {
      "icon": "el-icon-search",
      "circle": ""
    }
  }), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary",
      "icon": "el-icon-edit",
      "circle": ""
    }
  }), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "success",
      "icon": "el-icon-check",
      "circle": ""
    }
  }), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "info",
      "icon": "el-icon-message",
      "circle": ""
    }
  }), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "warning",
      "icon": "el-icon-star-off",
      "circle": ""
    }
  }), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "danger",
      "icon": "el-icon-delete",
      "circle": ""
    }
  })], 1), _vm._v(" "), _c('el-row', [_c('el-switch', {
    attrs: {
      "active-text": "按月付费",
      "inactive-text": "按年付费"
    },
    model: {
      value: (_vm.value3),
      callback: function($$v) {
        _vm.value3 = $$v
      },
      expression: "value3"
    }
  }), _vm._v(" "), _c('el-switch', {
    staticStyle: {
      "display": "block"
    },
    attrs: {
      "active-color": "#13ce66",
      "inactive-color": "#ff4949",
      "active-text": "按月付费",
      "inactive-text": "按年付费"
    },
    model: {
      value: (_vm.value4),
      callback: function($$v) {
        _vm.value4 = $$v
      },
      expression: "value4"
    }
  })], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 1542:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('transition', {
    attrs: {
      "name": "fade",
      "mode": "out-in"
    }
  }, [_c('router-view')], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 1543:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('el-row', {
    staticClass: "container"
  }, [_c('el-col', {
    staticClass: "header",
    attrs: {
      "span": 24
    }
  }, [_c('el-col', {
    staticClass: "logo",
    class: _vm.collapsed ? 'logo-collapse-width' : 'logo-width',
    attrs: {
      "span": 10
    }
  }, [_c('img', {
    attrs: {
      "src": this.sysLogo,
      "alt": ""
    }
  }), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.collapsed ? _vm.sysLogoTxt : _vm.sysName))])]), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 6
    }
  }, [_c('div', {
    staticClass: "tools",
    on: {
      "click": function($event) {
        $event.preventDefault();
        return _vm.collapse($event)
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-align-justify"
  })])]), _vm._v(" "), _c('el-col', {
    staticClass: "userinfo",
    attrs: {
      "span": 8
    }
  }, [_c('el-dropdown', {
    attrs: {
      "trigger": "hover"
    }
  }, [_c('div', {
    staticClass: "el-dropdown-link userinfo-inner"
  }, [_c('el-badge', {
    staticClass: "item",
    attrs: {
      "is-dot": ""
    }
  }, [_c('img', {
    attrs: {
      "src": this.sysUserAvatar
    }
  })]), _vm._v(" "), _c('div', [_c('span', {
    staticClass: "_name"
  }, [_vm._v(_vm._s(_vm.sysUserName))]), _vm._v(" "), _c('span', {
    staticClass: "_bsn"
  }, [_vm._v(_vm._s(_vm.businessDate))])])], 1), _vm._v(" "), _c('el-dropdown-menu', {
    attrs: {
      "slot": "dropdown"
    },
    slot: "dropdown"
  }, [_c('el-dropdown-item', [_vm._v("\n\t\t\t\t\t\tNotifications\n\t\t\t\t\t\t"), _c('el-badge', {
    staticClass: "mark",
    attrs: {
      "value": 12
    }
  })], 1), _vm._v(" "), _c('el-dropdown-item', [_vm._v("Settings")]), _vm._v(" "), _c('el-dropdown-item', {
    attrs: {
      "divided": ""
    },
    nativeOn: {
      "click": function($event) {
        return _vm.logout($event)
      }
    }
  }, [_vm._v("Sign Out")])], 1)], 1)], 1)], 1), _vm._v(" "), _c('el-col', {
    staticClass: "main",
    attrs: {
      "span": 24
    }
  }, [_c('aside', {
    class: _vm.collapsed ? 'menu-collapsed' : 'menu-expanded'
  }, [_c('el-menu', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.collapsed),
      expression: "!collapsed"
    }],
    staticClass: "el-menu-vertical-demo",
    attrs: {
      "default-active": _vm.$route.path,
      "unique-opened": "",
      "router": ""
    },
    on: {
      "open": _vm.handleopen,
      "close": _vm.handleclose,
      "select": _vm.handleselect
    }
  }, [_vm._l((_vm.$router.options.routes), function(item, index) {
    return (!item.hidden && item.meta == _vm.sysMeta) ? [(!item.leaf) ? _c('el-submenu', {
      attrs: {
        "index": index + ''
      }
    }, [_c('template', {
      slot: "title"
    }, [_c('i', {
      class: item.iconCls
    }), _vm._v(_vm._s(item.name))]), _vm._v(" "), _vm._l((item.children), function(child) {
      return (!child.hidden) ? _c('el-menu-item', {
        key: child.path,
        attrs: {
          "index": child.path
        }
      }, [_vm._v(_vm._s(child.name))]) : _vm._e()
    })], 2) : _vm._e(), _vm._v(" "), (item.leaf && item.children.length > 0) ? _c('el-menu-item', {
      attrs: {
        "index": item.children[0].path
      }
    }, [_c('i', {
      class: item.iconCls
    }), _vm._v(_vm._s(item.children[0].name))]) : _vm._e()] : _vm._e()
  })], 2), _vm._v(" "), _c('ul', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.collapsed),
      expression: "collapsed"
    }],
    ref: "menuCollapsed",
    staticClass: "el-menu el-menu-vertical-demo collapsed"
  }, _vm._l((_vm.$router.options.routes), function(item, index) {
    return (!item.hidden && item.meta == _vm.sysMeta) ? _c('li', {
      staticClass: "el-submenu item"
    }, [(!item.leaf) ? [_c('div', {
      staticClass: "el-submenu__title",
      staticStyle: {
        "padding-left": "20px"
      },
      on: {
        "mouseover": function($event) {
          _vm.showMenu(index, true)
        },
        "mouseout": function($event) {
          _vm.showMenu(index, false)
        }
      }
    }, [_c('i', {
      class: item.iconCls
    })]), _vm._v(" "), _c('ul', {
      staticClass: "el-menu submenu",
      class: 'submenu-hook-' + index,
      on: {
        "mouseover": function($event) {
          _vm.showMenu(index, true)
        },
        "mouseout": function($event) {
          _vm.showMenu(index, false)
        }
      }
    }, _vm._l((item.children), function(child) {
      return (!child.hidden) ? _c('li', {
        key: child.path,
        staticClass: "el-menu-item",
        class: _vm.$route.path == child.path ? 'is-active' : '',
        staticStyle: {
          "padding-left": "40px"
        },
        on: {
          "click": function($event) {
            _vm.$router.push(child.path)
          }
        }
      }, [_vm._v(_vm._s(child.name))]) : _vm._e()
    }))] : [_c('li', {
      staticClass: "el-submenu"
    }, [_c('div', {
      staticClass: "el-submenu__title",
      class: _vm.$route.path == item.children[0].path ? 'is-active' : '',
      staticStyle: {
        "padding-left": "20px",
        "height": "56px",
        "line-height": "56px",
        "padding": "0 20px"
      },
      on: {
        "click": function($event) {
          _vm.$router.push(item.children[0].path)
        }
      }
    }, [_c('i', {
      class: item.iconCls
    })])])]], 2) : _vm._e()
  }))], 1), _vm._v(" "), _c('section', {
    staticClass: "content-container"
  }, [_c('div', {
    staticClass: "grid-content bg-purple-light"
  }, [_c('el-col', {
    staticClass: "breadcrumb-container",
    attrs: {
      "span": 24
    }
  }, [_c('strong', {
    staticClass: "title"
  }, [_vm._v(_vm._s(_vm.$route.name))]), _vm._v(" "), _c('el-breadcrumb', {
    staticClass: "breadcrumb-inner",
    attrs: {
      "separator": "/"
    }
  }, _vm._l((_vm.$route.matched), function(item) {
    return _c('el-breadcrumb-item', {
      key: item.path
    }, [_vm._v("\n\t\t\t\t\t\t\t" + _vm._s(item.name) + "\n\t\t\t\t\t\t")])
  }))], 1), _vm._v(" "), _c('el-col', {
    staticClass: "content-wrapper",
    attrs: {
      "span": 24
    }
  }, [_c('transition', {
    attrs: {
      "name": "fade",
      "mode": "out-in"
    }
  }, [_c('router-view')], 1)], 1)], 1)])])], 1)
},staticRenderFns: []}

/***/ }),

/***/ 1544:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_c('el-col', {
    staticClass: "toolbar",
    staticStyle: {
      "padding-bottom": "0px"
    },
    attrs: {
      "span": 24
    }
  }, [_c('el-form', {
    attrs: {
      "inline": true,
      "model": _vm.filters
    }
  }, [_c('el-form-item', [_c('el-input', {
    attrs: {
      "placeholder": "姓名"
    },
    model: {
      value: (_vm.filters.name),
      callback: function($$v) {
        _vm.$set(_vm.filters, "name", $$v)
      },
      expression: "filters.name"
    }
  })], 1), _vm._v(" "), _c('el-form-item', [_c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.getUsers
    }
  }, [_vm._v("查询")])], 1), _vm._v(" "), _c('el-form-item', [_c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.handleAdd
    }
  }, [_vm._v("新增")])], 1)], 1)], 1), _vm._v(" "), _c('el-table', {
    directives: [{
      name: "loading",
      rawName: "v-loading",
      value: (_vm.listLoading),
      expression: "listLoading"
    }],
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "data": _vm.users,
      "highlight-current-row": ""
    },
    on: {
      "selection-change": _vm.selsChange
    }
  }, [_c('el-table-column', {
    attrs: {
      "type": "selection",
      "width": "55"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "type": "index",
      "width": "60"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "name",
      "label": "姓名",
      "width": "120",
      "sortable": ""
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "sex",
      "label": "性别",
      "width": "100",
      "formatter": _vm.formatSex,
      "sortable": ""
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "age",
      "label": "年龄",
      "width": "100",
      "sortable": ""
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "birth",
      "label": "生日",
      "width": "120",
      "sortable": ""
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "addr",
      "label": "地址",
      "min-width": "180",
      "sortable": ""
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "操作",
      "width": "150"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('el-button', {
          attrs: {
            "size": "small"
          },
          on: {
            "click": function($event) {
              _vm.handleEdit(scope.$index, scope.row)
            }
          }
        }, [_vm._v("编辑")]), _vm._v(" "), _c('el-button', {
          attrs: {
            "type": "danger",
            "size": "small"
          },
          on: {
            "click": function($event) {
              _vm.handleDel(scope.$index, scope.row)
            }
          }
        }, [_vm._v("删除")])]
      }
    }])
  })], 1), _vm._v(" "), _c('el-col', {
    staticClass: "toolbar",
    attrs: {
      "span": 24
    }
  }, [_c('el-button', {
    attrs: {
      "type": "danger",
      "disabled": this.sels.length === 0
    },
    on: {
      "click": _vm.batchRemove
    }
  }, [_vm._v("批量删除")]), _vm._v(" "), _c('el-pagination', {
    staticStyle: {
      "float": "right"
    },
    attrs: {
      "layout": "prev, pager, next",
      "page-size": 20,
      "total": _vm.total
    },
    on: {
      "current-change": _vm.handleCurrentChange
    }
  })], 1), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "编辑",
      "close-on-click-modal": false
    },
    model: {
      value: (_vm.editFormVisible),
      callback: function($$v) {
        _vm.editFormVisible = $$v
      },
      expression: "editFormVisible"
    }
  }, [_c('el-form', {
    ref: "editForm",
    attrs: {
      "model": _vm.editForm,
      "label-width": "80px",
      "rules": _vm.editFormRules
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "姓名",
      "prop": "name"
    }
  }, [_c('el-input', {
    attrs: {
      "auto-complete": "off"
    },
    model: {
      value: (_vm.editForm.name),
      callback: function($$v) {
        _vm.$set(_vm.editForm, "name", $$v)
      },
      expression: "editForm.name"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "性别"
    }
  }, [_c('el-radio-group', {
    model: {
      value: (_vm.editForm.sex),
      callback: function($$v) {
        _vm.$set(_vm.editForm, "sex", $$v)
      },
      expression: "editForm.sex"
    }
  }, [_c('el-radio', {
    staticClass: "radio",
    attrs: {
      "label": 1
    }
  }, [_vm._v("男")]), _vm._v(" "), _c('el-radio', {
    staticClass: "radio",
    attrs: {
      "label": 0
    }
  }, [_vm._v("女")])], 1)], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "年龄"
    }
  }, [_c('el-input-number', {
    attrs: {
      "min": 0,
      "max": 200
    },
    model: {
      value: (_vm.editForm.age),
      callback: function($$v) {
        _vm.$set(_vm.editForm, "age", $$v)
      },
      expression: "editForm.age"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "生日"
    }
  }, [_c('el-date-picker', {
    attrs: {
      "type": "date",
      "placeholder": "选择日期"
    },
    model: {
      value: (_vm.editForm.birth),
      callback: function($$v) {
        _vm.$set(_vm.editForm, "birth", $$v)
      },
      expression: "editForm.birth"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "地址"
    }
  }, [_c('el-input', {
    attrs: {
      "type": "textarea"
    },
    model: {
      value: (_vm.editForm.addr),
      callback: function($$v) {
        _vm.$set(_vm.editForm, "addr", $$v)
      },
      expression: "editForm.addr"
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "dialog-footer",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('el-button', {
    nativeOn: {
      "click": function($event) {
        _vm.editFormVisible = false
      }
    }
  }, [_vm._v("取消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary",
      "loading": _vm.editLoading
    },
    nativeOn: {
      "click": function($event) {
        return _vm.editSubmit($event)
      }
    }
  }, [_vm._v("提交")])], 1)], 1), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "新增",
      "close-on-click-modal": false
    },
    model: {
      value: (_vm.addFormVisible),
      callback: function($$v) {
        _vm.addFormVisible = $$v
      },
      expression: "addFormVisible"
    }
  }, [_c('el-form', {
    ref: "addForm",
    attrs: {
      "model": _vm.addForm,
      "label-width": "80px",
      "rules": _vm.addFormRules
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "姓名",
      "prop": "name"
    }
  }, [_c('el-input', {
    attrs: {
      "auto-complete": "off"
    },
    model: {
      value: (_vm.addForm.name),
      callback: function($$v) {
        _vm.$set(_vm.addForm, "name", $$v)
      },
      expression: "addForm.name"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "性别"
    }
  }, [_c('el-radio-group', {
    model: {
      value: (_vm.addForm.sex),
      callback: function($$v) {
        _vm.$set(_vm.addForm, "sex", $$v)
      },
      expression: "addForm.sex"
    }
  }, [_c('el-radio', {
    staticClass: "radio",
    attrs: {
      "label": 1
    }
  }, [_vm._v("男")]), _vm._v(" "), _c('el-radio', {
    staticClass: "radio",
    attrs: {
      "label": 0
    }
  }, [_vm._v("女")])], 1)], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "年龄"
    }
  }, [_c('el-input-number', {
    attrs: {
      "min": 0,
      "max": 200
    },
    model: {
      value: (_vm.addForm.age),
      callback: function($$v) {
        _vm.$set(_vm.addForm, "age", $$v)
      },
      expression: "addForm.age"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "生日"
    }
  }, [_c('el-date-picker', {
    attrs: {
      "type": "date",
      "placeholder": "选择日期"
    },
    model: {
      value: (_vm.addForm.birth),
      callback: function($$v) {
        _vm.$set(_vm.addForm, "birth", $$v)
      },
      expression: "addForm.birth"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "地址"
    }
  }, [_c('el-input', {
    attrs: {
      "type": "textarea"
    },
    model: {
      value: (_vm.addForm.addr),
      callback: function($$v) {
        _vm.$set(_vm.addForm, "addr", $$v)
      },
      expression: "addForm.addr"
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "dialog-footer",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('el-button', {
    nativeOn: {
      "click": function($event) {
        _vm.addFormVisible = false
      }
    }
  }, [_vm._v("取消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary",
      "loading": _vm.addLoading
    },
    nativeOn: {
      "click": function($event) {
        return _vm.addSubmit($event)
      }
    }
  }, [_vm._v("提交")])], 1)], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 1545:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', {
    staticClass: "page-container"
  }, [_vm._v("404 page not found")])
},staticRenderFns: []}

/***/ }),

/***/ 1546:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_c('el-col', {
    staticClass: "toolbar",
    staticStyle: {
      "padding-bottom": "0px"
    },
    attrs: {
      "span": 24
    }
  }, [_c('el-form', {
    attrs: {
      "inline": true,
      "model": _vm.filters,
      "size": "small"
    }
  }, [_c('el-form-item', [_c('el-input', {
    staticStyle: {
      "width": "300px"
    },
    attrs: {
      "placeholder": "..."
    },
    model: {
      value: (_vm.filters.name),
      callback: function($$v) {
        _vm.$set(_vm.filters, "name", $$v)
      },
      expression: "filters.name"
    }
  })], 1), _vm._v(" "), _c('el-form-item', [_c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.getUser
    }
  }, [_vm._v("Search")])], 1)], 1)], 1), _vm._v(" "), [_c('el-col', {
    attrs: {
      "span": 24
    }
  }, [_c('el-table', {
    directives: [{
      name: "loading",
      rawName: "v-loading",
      value: (_vm.loading),
      expression: "loading"
    }],
    attrs: {
      "data": _vm.users,
      "show-summary": true,
      "sum-text": "Total",
      "size": "medium",
      "header-cell-style": _vm.tableHeaderColor
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "number",
      "type": "number",
      "label": "Customer Number"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "name",
      "label": "Customer Name"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "equity",
      "label": "Equity",
      "sortable": ""
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "fixedIncome",
      "label": "Fixed Income",
      "sortable": ""
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "fx",
      "label": "FX",
      "sortable": ""
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "structureProduct",
      "label": "Structure Product",
      "sortable": ""
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "value",
      "label": "Total Asset Value (USD)",
      "align": "right",
      "sortable": ""
    }
  })], 1)], 1)]], 2)
},staticRenderFns: []}

/***/ }),

/***/ 1547:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('el-form', {
    ref: "form",
    staticStyle: {
      "margin": "20px",
      "width": "60%",
      "min-width": "600px"
    },
    attrs: {
      "model": _vm.form,
      "label-width": "80px"
    },
    on: {
      "submit": function($event) {
        $event.preventDefault();
        return _vm.onSubmit($event)
      }
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "活动名称"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.form.name),
      callback: function($$v) {
        _vm.$set(_vm.form, "name", $$v)
      },
      expression: "form.name"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "活动区域"
    }
  }, [_c('el-select', {
    attrs: {
      "placeholder": "请选择活动区域"
    },
    model: {
      value: (_vm.form.region),
      callback: function($$v) {
        _vm.$set(_vm.form, "region", $$v)
      },
      expression: "form.region"
    }
  }, [_c('el-option', {
    attrs: {
      "label": "区域一",
      "value": "shanghai"
    }
  }), _vm._v(" "), _c('el-option', {
    attrs: {
      "label": "区域二",
      "value": "beijing"
    }
  })], 1)], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "活动时间"
    }
  }, [_c('el-col', {
    attrs: {
      "span": 11
    }
  }, [_c('el-date-picker', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "type": "date",
      "placeholder": "选择日期"
    },
    model: {
      value: (_vm.form.date1),
      callback: function($$v) {
        _vm.$set(_vm.form, "date1", $$v)
      },
      expression: "form.date1"
    }
  })], 1), _vm._v(" "), _c('el-col', {
    staticClass: "line",
    attrs: {
      "span": 2
    }
  }, [_vm._v("-")]), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 11
    }
  }, [_c('el-time-picker', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "type": "fixed-time",
      "placeholder": "选择时间"
    },
    model: {
      value: (_vm.form.date2),
      callback: function($$v) {
        _vm.$set(_vm.form, "date2", $$v)
      },
      expression: "form.date2"
    }
  })], 1)], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "即时配送"
    }
  }, [_c('el-switch', {
    attrs: {
      "on-text": "",
      "off-text": ""
    },
    model: {
      value: (_vm.form.delivery),
      callback: function($$v) {
        _vm.$set(_vm.form, "delivery", $$v)
      },
      expression: "form.delivery"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "活动性质"
    }
  }, [_c('el-checkbox-group', {
    model: {
      value: (_vm.form.type),
      callback: function($$v) {
        _vm.$set(_vm.form, "type", $$v)
      },
      expression: "form.type"
    }
  }, [_c('el-checkbox', {
    attrs: {
      "label": "美食/餐厅线上活动",
      "name": "type"
    }
  }), _vm._v(" "), _c('el-checkbox', {
    attrs: {
      "label": "地推活动",
      "name": "type"
    }
  }), _vm._v(" "), _c('el-checkbox', {
    attrs: {
      "label": "线下主题活动",
      "name": "type"
    }
  }), _vm._v(" "), _c('el-checkbox', {
    attrs: {
      "label": "单纯品牌曝光",
      "name": "type"
    }
  })], 1)], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "特殊资源"
    }
  }, [_c('el-radio-group', {
    model: {
      value: (_vm.form.resource),
      callback: function($$v) {
        _vm.$set(_vm.form, "resource", $$v)
      },
      expression: "form.resource"
    }
  }, [_c('el-radio', {
    attrs: {
      "label": "线上品牌商赞助"
    }
  }), _vm._v(" "), _c('el-radio', {
    attrs: {
      "label": "线下场地免费"
    }
  })], 1)], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "活动形式"
    }
  }, [_c('el-input', {
    attrs: {
      "type": "textarea"
    },
    model: {
      value: (_vm.form.desc),
      callback: function($$v) {
        _vm.$set(_vm.form, "desc", $$v)
      },
      expression: "form.desc"
    }
  })], 1), _vm._v(" "), _c('el-form-item', [_c('el-button', {
    attrs: {
      "type": "primary"
    }
  }, [_vm._v("立即创建")]), _vm._v(" "), _c('el-button', {
    nativeOn: {
      "click": function($event) {
        $event.preventDefault();
      }
    }
  }, [_vm._v("取消")])], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 1548:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "chart-container"
  }, [_c('el-row', [_c('transition', {
    attrs: {
      "name": "el-zoom-in-top"
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.show2),
      expression: "show2"
    }],
    staticClass: "transition-box"
  }, [_c('el-col', {
    attrs: {
      "span": 20
    }
  }, [_c('el-form', {
    ref: "form",
    staticClass: "form-box",
    attrs: {
      "model": _vm.sizeForm,
      "label-width": "120px",
      "size": "mini"
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "Region:"
    }
  }, [_c('el-checkbox-group', {
    attrs: {
      "min": 0
    },
    model: {
      value: (_vm.sizeForm.region),
      callback: function($$v) {
        _vm.$set(_vm.sizeForm, "region", $$v)
      },
      expression: "sizeForm.region"
    }
  }, [_c('el-checkbox-button', {
    attrs: {
      "label": "All",
      "name": "type"
    }
  }), _vm._v(" "), _c('el-checkbox-button', {
    attrs: {
      "label": "China",
      "name": "type"
    }
  }), _vm._v(" "), _c('el-checkbox-button', {
    attrs: {
      "label": "HongKong",
      "name": "type"
    }
  }), _vm._v(" "), _c('el-checkbox-button', {
    attrs: {
      "label": "Singapore",
      "name": "type"
    }
  }), _vm._v(" "), _c('el-checkbox-button', {
    attrs: {
      "label": "United Kingdom",
      "name": "type"
    }
  })], 1)], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "Type:"
    }
  }, [_c('el-radio-group', {
    attrs: {
      "size": "mini"
    },
    model: {
      value: (_vm.sizeForm.type),
      callback: function($$v) {
        _vm.$set(_vm.sizeForm, "type", $$v)
      },
      expression: "sizeForm.type"
    }
  }, [_c('el-radio', {
    attrs: {
      "border": "",
      "label": "All"
    }
  }), _vm._v(" "), _c('el-radio', {
    attrs: {
      "border": "",
      "label": "Individual"
    }
  }), _vm._v(" "), _c('el-radio', {
    attrs: {
      "border": "",
      "label": "Entity"
    }
  })], 1)], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "Booking Entity:"
    }
  }, [_c('el-checkbox-group', {
    attrs: {
      "min": 0
    },
    model: {
      value: (_vm.sizeForm.booking),
      callback: function($$v) {
        _vm.$set(_vm.sizeForm, "booking", $$v)
      },
      expression: "sizeForm.booking"
    }
  }, [_c('el-checkbox-button', {
    attrs: {
      "label": "All",
      "name": "type"
    }
  }), _vm._v(" "), _c('el-checkbox-button', {
    attrs: {
      "label": "CN",
      "name": "type"
    }
  }), _vm._v(" "), _c('el-checkbox-button', {
    attrs: {
      "label": "HK",
      "name": "type"
    }
  }), _vm._v(" "), _c('el-checkbox-button', {
    attrs: {
      "label": "SG",
      "name": "type"
    }
  }), _vm._v(" "), _c('el-checkbox-button', {
    attrs: {
      "label": "UK",
      "name": "type"
    }
  })], 1)], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "Age:"
    }
  }, [_c('el-slider', {
    attrs: {
      "range": "",
      "step": 10,
      "show-stops": ""
    },
    model: {
      value: (_vm.sizeForm.ageValue),
      callback: function($$v) {
        _vm.$set(_vm.sizeForm, "ageValue", $$v)
      },
      expression: "sizeForm.ageValue"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "slider-mark"
  }, [_c('ul', _vm._l((_vm.sizeForm.ageMark), function(item) {
    return _c('li', [_vm._v("\n                                " + _vm._s(item) + "\n                            ")])
  }))])], 1), _vm._v(" "), _c('el-form-item', {
    staticStyle: {
      "display": "none"
    },
    attrs: {
      "size": "large"
    }
  }, [_c('el-button', {
    attrs: {
      "type": "primary",
      "size": "small"
    },
    on: {
      "click": _vm.onSubmit
    }
  }, [_vm._v("Sent")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "size": "small"
    }
  }, [_vm._v("Reset")])], 1)], 1)], 1)], 1)]), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 20
    }
  }, [_c('div', {
    staticClass: "showbtn",
    on: {
      "click": function($event) {
        _vm.show2 = !_vm.show2
      }
    }
  }, [_c('i', {
    staticClass: "fa",
    class: !_vm.show2 ? 'fa-angle-double-down' : 'fa-angle-double-up'
  })])]), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 24
    }
  }, [_c('div', {
    staticStyle: {
      "width": "80%",
      "height": "400px"
    },
    attrs: {
      "id": "chartPie"
    }
  })])], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 1549:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_vm._v("page5...\n")])
},staticRenderFns: []}

/***/ }),

/***/ 1550:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_c('el-col', {
    staticClass: "toolbar",
    staticStyle: {
      "padding-bottom": "0px"
    },
    attrs: {
      "span": 24
    }
  }, [_c('el-form', {
    attrs: {
      "inline": true,
      "model": _vm.filters
    }
  }, [_c('el-form-item', [_c('el-input', {
    attrs: {
      "placeholder": "姓名"
    },
    model: {
      value: (_vm.filters.name),
      callback: function($$v) {
        _vm.$set(_vm.filters, "name", $$v)
      },
      expression: "filters.name"
    }
  })], 1), _vm._v(" "), _c('el-form-item', [_c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.getUser
    }
  }, [_vm._v("查询")])], 1)], 1)], 1), _vm._v(" "), [_c('el-table', {
    directives: [{
      name: "loading",
      rawName: "v-loading",
      value: (_vm.loading),
      expression: "loading"
    }],
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "data": _vm.customers,
      "highlight-current-row": ""
    }
  }, [_c('el-table-column', {
    attrs: {
      "type": "index",
      "width": "60"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "customerNumber",
      "label": "编号",
      "width": "120",
      "sortable": ""
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "customerName",
      "label": "姓名",
      "width": "100",
      "sortable": ""
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "customerType",
      "label": "类型",
      "width": "100",
      "formatter": _vm.formatSex,
      "sortable": ""
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "homeCountry",
      "label": "地址",
      "width": "120",
      "sortable": ""
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "bookingCenter",
      "label": "公司",
      "min-width": "120",
      "sortable": ""
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "rmCode",
      "label": "rm编码",
      "min-width": "100",
      "sortable": ""
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "dateOfBirth",
      "label": "生日",
      "min-width": "100",
      "sortable": ""
    }
  })], 1)]], 2)
},staticRenderFns: []}

/***/ }),

/***/ 1551:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_vm._v("todolist...\n")])
},staticRenderFns: []}

/***/ }),

/***/ 1552:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_vm._v("\n\tmain ......\n")])
},staticRenderFns: []}

/***/ }),

/***/ 545:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mock__ = __webpack_require__(623);


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__mock__["a" /* default */]);

/***/ }),

/***/ 546:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__views_Login_vue__ = __webpack_require__(1506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__views_Login_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__views_Login_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views_404_vue__ = __webpack_require__(1504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views_404_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__views_404_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_Home_vue__ = __webpack_require__(1505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_Home_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__views_Home_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__views_Main_vue__ = __webpack_require__(1507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__views_Main_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__views_Main_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__views_nav1_Table_vue__ = __webpack_require__(1518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__views_nav1_Table_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__views_nav1_Table_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__views_nav1_Form_vue__ = __webpack_require__(1517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__views_nav1_Form_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__views_nav1_Form_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__views_nav1_user_vue__ = __webpack_require__(1519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__views_nav1_user_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__views_nav1_user_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__views_nav2_Page4_vue__ = __webpack_require__(1520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__views_nav2_Page4_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__views_nav2_Page4_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__views_nav2_elementSo_vue__ = __webpack_require__(1522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__views_nav2_elementSo_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__views_nav2_elementSo_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__views_nav2_Page5_vue__ = __webpack_require__(1521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__views_nav2_Page5_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__views_nav2_Page5_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__views_managerNav_Management_vue__ = __webpack_require__(1510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__views_managerNav_Management_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__views_managerNav_Management_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__views_managerNav_CustomerTrends_vue__ = __webpack_require__(1509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__views_managerNav_CustomerTrends_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__views_managerNav_CustomerTrends_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__views_managerNav_c3_vue__ = __webpack_require__(1512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__views_managerNav_c3_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__views_managerNav_c3_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__views_managerNav_echarts_vue__ = __webpack_require__(1515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__views_managerNav_echarts_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__views_managerNav_echarts_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__views_managerNav_highcharts_vue__ = __webpack_require__(1516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__views_managerNav_highcharts_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__views_managerNav_highcharts_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__views_managerNav_customers_vue__ = __webpack_require__(1513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__views_managerNav_customers_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15__views_managerNav_customers_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__views_managerNav_customersChart_vue__ = __webpack_require__(1514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__views_managerNav_customersChart_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16__views_managerNav_customersChart_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__views_managerNav_Trade_vue__ = __webpack_require__(1511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__views_managerNav_Trade_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17__views_managerNav_Trade_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__views_userNav_DailyEvent_vue__ = __webpack_require__(1526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__views_userNav_DailyEvent_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18__views_userNav_DailyEvent_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__views_userNav_CustomerPosition_vue__ = __webpack_require__(1524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__views_userNav_CustomerPosition_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19__views_userNav_CustomerPosition_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__views_userNav_CustomerPositionInfo_vue__ = __webpack_require__(1525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__views_userNav_CustomerPositionInfo_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20__views_userNav_CustomerPositionInfo_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__views_userNav_Transaction_vue__ = __webpack_require__(1527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__views_userNav_Transaction_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21__views_userNav_Transaction_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__views_userNav_Connectivity_vue__ = __webpack_require__(1523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__views_userNav_Connectivity_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22__views_userNav_Connectivity_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__views_adminNav_CreateUser_vue__ = __webpack_require__(1508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__views_adminNav_CreateUser_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23__views_adminNav_CreateUser_vue__);











// manager template









// user(rm) template






// admin template


let routes = [{
    path: '/login',
    component: __WEBPACK_IMPORTED_MODULE_0__views_Login_vue___default.a,
    name: '',
    hidden: true
}, {
    path: '/404',
    component: __WEBPACK_IMPORTED_MODULE_1__views_404_vue___default.a,
    name: '',
    hidden: true
},
// =======================
// manager nav
// =======================
{
    path: '/',
    component: __WEBPACK_IMPORTED_MODULE_2__views_Home_vue___default.a,
    name: 'Management Overview',
    iconCls: 'fa fa-sitemap',
    leaf: true, //只有一个节点，
    meta: "manager",
    children: [{ path: '/', component: __WEBPACK_IMPORTED_MODULE_10__views_managerNav_Management_vue___default.a, name: 'Organization Structure' }]
}, {
    path: '/',
    component: __WEBPACK_IMPORTED_MODULE_2__views_Home_vue___default.a,
    name: 'Customer Overview',
    iconCls: 'el-icon-date',
    // leaf: true,//只有一个节点
    meta: "manager",
    children: [{ path: '/customer-distribution', component: __WEBPACK_IMPORTED_MODULE_15__views_managerNav_customers_vue___default.a, name: 'Customer Distribution' }, { path: '/customer-trends-report', component: __WEBPACK_IMPORTED_MODULE_11__views_managerNav_CustomerTrends_vue___default.a, name: 'Customer Trends Report' }]
}, {
    path: '/',
    component: __WEBPACK_IMPORTED_MODULE_2__views_Home_vue___default.a,
    name: '',
    iconCls: 'el-icon-news',
    leaf: true, //只有一个节点
    meta: "manager",
    children: [{ path: '/asset-overview', component: __WEBPACK_IMPORTED_MODULE_16__views_managerNav_customersChart_vue___default.a, name: 'Asset Overview' }]
},
// =======================
// rm nav
// =======================
{
    path: '/',
    component: __WEBPACK_IMPORTED_MODULE_2__views_Home_vue___default.a,
    name: 'Customer Position',
    iconCls: 'fa fa-object-group', //图标样式class
    // leaf: true,//只有一个节点
    meta: "rm",
    children: [{ path: '/customer-position', component: __WEBPACK_IMPORTED_MODULE_19__views_userNav_CustomerPosition_vue___default.a, name: 'Customer Position' }, { path: '/customer-position-info', component: __WEBPACK_IMPORTED_MODULE_20__views_userNav_CustomerPositionInfo_vue___default.a, name: 'Customer Position Info' }]
}, {
    path: '/',
    component: __WEBPACK_IMPORTED_MODULE_2__views_Home_vue___default.a,
    name: 'Customer Trade',
    iconCls: 'fa fa-flag-checkered', //图标样式class
    // leaf: true,//只有一个节点
    meta: "rm",
    children: [{ path: '/share-transaction-input', component: __WEBPACK_IMPORTED_MODULE_21__views_userNav_Transaction_vue___default.a, name: 'Share Transaction Input' }, { path: '/connectivity', component: __WEBPACK_IMPORTED_MODULE_22__views_userNav_Connectivity_vue___default.a, name: 'Connectivity' }]
}, {
    path: '/',
    component: __WEBPACK_IMPORTED_MODULE_2__views_Home_vue___default.a,
    name: '',
    iconCls: 'fa fa-cubes', //图标样式class
    leaf: true, //只有一个节点
    meta: "rm",
    children: [{ path: '/daily-event', component: __WEBPACK_IMPORTED_MODULE_18__views_userNav_DailyEvent_vue___default.a, name: 'Daily Event' }]
},
// =======================
// admin nav
// =======================   
{
    path: '/',
    component: __WEBPACK_IMPORTED_MODULE_2__views_Home_vue___default.a,
    name: '',
    iconCls: 'fa fa-cubes', //图标样式class
    leaf: true, //只有一个节点
    meta: "admin",
    children: [{ path: '/create-user', component: __WEBPACK_IMPORTED_MODULE_23__views_adminNav_CreateUser_vue___default.a, name: 'Create User' }]
}, {
    path: '*',
    hidden: true,
    redirect: { path: '/404' }
}];

/* harmony default export */ __webpack_exports__["a"] = (routes);

/***/ }),

/***/ 547:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions__ = __webpack_require__(624);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__getters__ = __webpack_require__(625);





__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */]);

// 应用初始状态
const state = {
    count: 10

    // 定义所需的 mutations
};const mutations = {
    INCREMENT(state) {
        state.count++;
    },
    DECREMENT(state) {
        state.count--;
    }
};

// 创建 store 实例
/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */].Store({
    actions: __WEBPACK_IMPORTED_MODULE_2__actions__,
    getters: __WEBPACK_IMPORTED_MODULE_3__getters__,
    state,
    mutations
}));

/***/ }),

/***/ 550:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 551:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 552:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 553:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(1483)

var Component = __webpack_require__(15)(
  /* script */
  __webpack_require__(598),
  /* template */
  __webpack_require__(1542),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 598:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
	name: 'app',
	components: {}
});

/***/ }),

/***/ 599:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_highcharts_highstock__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_highcharts_highstock___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_highcharts_highstock__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_highcharts_highcharts_more__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_highcharts_highcharts_more___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_highcharts_highcharts_more__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_highcharts_modules_drilldown__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_highcharts_modules_drilldown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_highcharts_modules_drilldown__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_highcharts_highcharts_3d__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_highcharts_highcharts_3d___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_highcharts_highcharts_3d__);
//
//
//
//





__WEBPACK_IMPORTED_MODULE_1_highcharts_highcharts_more___default()(__WEBPACK_IMPORTED_MODULE_0_highcharts_highstock___default.a);
__WEBPACK_IMPORTED_MODULE_2_highcharts_modules_drilldown___default()(__WEBPACK_IMPORTED_MODULE_0_highcharts_highstock___default.a);
__WEBPACK_IMPORTED_MODULE_3_highcharts_highcharts_3d___default()(__WEBPACK_IMPORTED_MODULE_0_highcharts_highstock___default.a);

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['options', 'styles'],
  name: 'highcharts',
  data() {
    return {
      chart: null
    };
  },
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      console.log(this.$el);
      this.$el.style.width = (this.styles.width || 800) + 'px';
      this.$el.style.height = (this.styles.height || 400) + 'px';
      this.chart = new __WEBPACK_IMPORTED_MODULE_0_highcharts_highstock___default.a.Chart(this.$el, this.options);
    }
  }
});

/***/ }),

/***/ 600:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
	data() {
		return {
			sysLogo: 'https://www.hsbc.com.hk/content/dam/hsbc/hk/images/hongkong-hsbc-logo-en.svg',
			sysName: 'Private Banking',
			sysLogoTxt: 'HSBC',
			collapsed: false,
			sysUserName: '',
			sysMeta: '',
			sysUserAvatar: __webpack_require__(1502),
			form: {
				name: '',
				region: '',
				date1: '',
				date2: '',
				delivery: false,
				type: [],
				resource: '',
				desc: ''
			}
		};
	},
	computed: {

		businessDate() {

			// console.log(this.nowDate("yyyy-MM-dd hh:mm:ss"))

			return this.nowDate("yyyy-MM-dd");
			// return this.nowDate("yyyy-MM-dd hh:mm:ss")
		}

	},
	created() {
		Date.prototype.format = function (format) {
			var o = {
				"M+": this.getMonth() + 1, //month
				"d+": this.getDate(), //day
				"h+": this.getHours(), //hour
				"m+": this.getMinutes(), //minute
				"s+": this.getSeconds(), //second
				"q+": Math.floor((this.getMonth() + 3) / 3), //quarter
				"S": this.getMilliseconds() //millisecond
			};
			if (/(y+)/.test(format)) format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
			for (var k in o) if (new RegExp("(" + k + ")").test(format)) format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
			return format;
		};
	},
	methods: {
		nowDate(opt) {
			return new Date().format(opt);
		},
		onSubmit() {
			console.log('submit!');
		},
		handleopen() {
			//console.log('handleopen');
		},
		handleclose() {
			//console.log('handleclose');
		},
		handleselect: function (a, b) {},
		//退出登录
		logout: function () {
			var _this = this;
			this.$confirm('Are you sure you want to quit??', 'Tips', {
				//type: 'warning'
			}).then(() => {
				sessionStorage.removeItem('user');
				_this.$router.push('/login');
			}).catch(() => {});
		},
		//折叠导航栏
		collapse: function () {
			this.collapsed = !this.collapsed;
		},
		showMenu(i, status) {
			this.$refs.menuCollapsed.getElementsByClassName('submenu-hook-' + i)[0].style.display = status ? 'block' : 'none';
		}
	},
	mounted() {
		var user = sessionStorage.getItem('user');
		if (user) {
			user = JSON.parse(user);
			this.sysUserName = user.name || '';
			this.sysMeta = user.meta || 'user';

			// this.sysUserAvatar = user.avatar || '../assets/logo.jpeg';
		}
	}
});

/***/ }),

/***/ 601:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_api__ = __webpack_require__(128);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


//import NProgress from 'nprogress'
/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      logining: false,
      ruleForm2: {
        account: '',
        checkPass: '123456'
      },
      rules2: {
        account: [{ required: true, message: 'Please input account number.', trigger: 'blur' }],
        checkPass: [{ required: true, message: 'Please input a password.', trigger: 'blur' }]
      },
      checked: true
    };
  },
  methods: {
    handleReset2() {
      this.$refs.ruleForm2.resetFields();
    },
    handleSubmit2(ev) {
      var _this = this;
      this.$refs.ruleForm2.validate(valid => {
        if (valid) {
          //_this.$router.replace('/table');
          this.logining = true;
          //NProgress.start();
          var loginParams = { username: this.ruleForm2.account, password: this.ruleForm2.checkPass };
          __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_api__["a" /* requestLogin */])(loginParams).then(data => {
            this.logining = false;
            //NProgress.done();
            let { msg, code, user } = data;
            if (code !== 200) {
              this.$message({
                message: msg,
                type: 'error'
              });
            } else {
              sessionStorage.setItem('user', JSON.stringify(user));
              let _path = { path: '/' };
              if (user.meta == 'admin') {
                _path = { path: '/create-user' };
              }
              if (user.meta == 'manager') {
                _path = { path: '/' };
              }
              if (user.meta == 'rm') {
                _path = { path: '/customer-position' };
              }

              this.$router.push(_path);
            }
          });
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    }
  }
});

/***/ }),

/***/ 602:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ 603:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
	data() {
		return {
			form: {
				userId: 'HK-USER-2',
				userName: 'Jones KILAN',
				userRole: 'RM',
				rmCode: 'RMS001',
				teamCode: 'TM1'
			},
			tableData: [{
				userId: 'HK-USER-2',
				userName: 'Jones KILAN',
				userRole: 'RM',
				rmCode: 'RMS001',
				teamCode: 'TM1'
			}, {
				userId: 'HK-USER-3',
				userName: 'Joshua CHLOE',
				userRole: 'RM',
				rmCode: 'RMS002',
				teamCode: ''
			}, {
				userId: 'HK-USER-3',
				userName: 'Joshua CHLOE',
				userRole: 'RM',
				rmCode: 'RMS002',
				teamCode: ''
			}, {
				userId: 'HK-USER-3',
				userName: 'Joshua CHLOE',
				userRole: 'RM',
				rmCode: 'RMS002',
				teamCode: ''
			}]
		};
	},
	methods: {
		onSubmit() {}

	},
	mounted() {}
});

/***/ }),

/***/ 604:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_echarts__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_echarts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_echarts__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            myChart: null,
            show2: true,
            chartPie: null,
            sizeForm: {
                regionAll: true,
                name: '',
                region: [],
                booking: [],
                ageValue: [0, 100],
                ageMark: ['', 10, 20, 30, 40, 50, 60, 70, 80, 90],
                delivery: false,
                type: '', //Individual
                resource: '',
                desc: ''
            },
            valTotal: 0,
            pieData: null,
            tableData: [{
                date: '> 20 Years',
                name: '5000'
            }, {
                date: '>10 Years && <20 Years',
                name: '4567'
            }, {
                date: '>5 Years && <10 Years',
                name: '1300'
            }, {
                date: '>1 Years && <5 Years',
                name: '1980'
            }, {
                date: '<1 Years',
                name: '3000'
            }]
        };
    },

    computed: {},
    methods: {
        onSubmit() {

            let _seft = this;
        },
        regionAllbtn() {
            this.sizeForm.regionAll = !this.sizeForm.regionAll;
        },
        drawPieChart() {
            let _seft = this;

            let _data = ['>20 Years', '>10 Years && <20 Years', '>5 Years && <10 Years', '>1 Years && <5 Years', '<1 Years'];

            let option = {

                title: {
                    text: "Customer Trends Report",
                    // position: "center",
                    left: "center",
                    textStyle: {
                        fontSize: 14,
                        color: '#666'
                    }
                },
                grid: {
                    left: '1%',
                    right: '4%',
                    bottom: '20%',
                    containLabel: true
                },
                legend: {
                    data: _data,
                    bottom: '20'
                },
                xAxis: [{
                    // type : 'category',
                    data: ['0 ~ 100 Years'],
                    axisTick: {
                        alignWithLabel: true
                    }
                    // nameRotate: 30,
                }],
                yAxis: [{
                    type: 'value'
                }],
                series: [{
                    name: _data[0],
                    type: 'bar',
                    barWidth: '13%',
                    data: [5000],
                    label: {
                        normal: {
                            show: true,
                            position: 'top'
                        }
                    }
                }, {
                    name: _data[1],
                    type: 'bar',
                    barWidth: '13%',
                    data: [3600],
                    label: {
                        normal: {
                            show: true,
                            position: 'top'
                        }
                    }

                }, {
                    name: _data[2],
                    type: 'bar',
                    barWidth: '13%',
                    data: [1980],
                    label: {
                        normal: {
                            show: true,
                            position: 'top'
                        }
                    }
                }, {
                    name: _data[3],
                    type: 'bar',
                    barWidth: '13%',
                    data: [7720],
                    label: {
                        normal: {
                            show: true,
                            position: 'top'
                        }
                    }
                }, {
                    name: _data[4],
                    type: 'bar',
                    barWidth: '13%',
                    data: [4500],
                    label: {
                        normal: {
                            show: true,
                            position: 'top'
                        }
                    }
                }]

            };

            this.myChart = __WEBPACK_IMPORTED_MODULE_0_echarts___default.a.init(document.getElementById('chartPie'));

            this.myChart.setOption(option);
        },
        drawCharts() {
            this.drawPieChart();
        }
    },

    mounted() {
        this.drawCharts();
    },
    updated() {
        this.drawCharts();
    }
});

/***/ }),

/***/ 605:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_orgchart__ = __webpack_require__(1553);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_orgchart___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue_orgchart__);
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    components: { VoBasic: __WEBPACK_IMPORTED_MODULE_0_vue_orgchart__["VoBasic"] },
    data() {
        return {
            myChart: null,
            show2: true,
            chartPie: null,
            sizeForm: {
                regionAll: true,
                name: '',
                region: [],
                booking: [],
                ageValue: [0, 100],
                ageMark: ['', 10, 20, 30, 40, 50, 60, 70, 80, 90],
                delivery: false,
                type: '', //Individual
                resource: '',
                desc: ''
            },
            chartData: null,
            valTotal: 0,
            pieData: null
        };
    },
    watch: {},
    computed: {},
    methods: {
        onSubmit() {
            let _seft = this;
        },
        drawPieChart() {
            let _seft = this;
        },
        drawCharts() {
            this.drawPieChart();
        }
    },
    created() {
        this.chartData = {
            'name': 'GPB',
            'title': 'AUM: $55bn<br\>Client#: 100,000',
            'className': 'manager',
            'children': [{
                'name': 'HK',
                'title': 'AUM: $45bn<br\>Client#: 70,000',
                'className': 'product-dept',
                'children': [{
                    'name': 'HK Team1',
                    'title': 'AUM: $45bn<br\>Client#: 70,000',
                    'className': 'rd-dept',
                    'children': [{
                        'name': 'HK RM1',
                        'title': 'AUM: $45bn<br\>Client#: 70,000',
                        'className': 'frontend1'
                    }, {
                        'name': 'HK RM2',
                        'title': 'AUM: $45bn<br\>Client#: 70,000',
                        'className': 'frontend1'
                    }]
                }, {
                    'name': 'HK Team2',
                    'title': 'AUM: $45bn<br\>Client#: 70,000',
                    'className': 'rd-dept'
                }]
            }, {
                'name': 'SG',
                'title': 'AUM: $45bn<br\>Client#: 70,000',
                'className': 'middle-level',
                'children': [{
                    'name': 'SG Team1',
                    'title': 'AUM: $45bn<br\>Client#: 70,000',
                    'className': 'rd-dept'
                }]
            }]
        };
    },
    mounted() {
        this.drawCharts();
    },
    updated() {
        this.drawCharts();
    }
});

/***/ }),

/***/ 606:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_c3_c3_min_css__ = __webpack_require__(1468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_c3_c3_min_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_c3_c3_min_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_c3__ = __webpack_require__(630);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_c3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_c3__);
//
//
//
//
//
//
//
//
//
//

// import vuec3js from '../components/vuec3js';





/* harmony default export */ __webpack_exports__["default"] = ({
		name: '',
		data() {
				return {
						timer: '',
						defaultMessage: '',
						currentIndex: 0,
						duration: 1500,
						demos: []
				};
		},
		mounted() {

				let _seft = this;

				let chart = __WEBPACK_IMPORTED_MODULE_1_c3___default.a.generate({
						data: {
								columns: [['data1', 30, 200, 100, 400, 150, 250, 50, 100, 250]],
								selection: {
										enabled: true
								}
						}
				});

				// _seft.defaultMessage = document.getElementById('message').innerHTML;

				_seft.demos = [function () {
						chart.load({
								columns: [['data2', 100, 30, 200, 320, 50, 150, 230, 80, 150]]
						});
						_seft.setMessage('Load data2');
				}, function () {
						chart.load({
								columns: [['data3', 70, 90, 170, 220, 100, 110, 130, 40, 50]]
						});
						_seft.setMessage('Load data3');
				}, function () {
						chart.select(['data1'], [2]);
						_seft.setMessage('Select point for index 2 of data1');
				}, function () {
						chart.select(['data1'], [4, 6]);
						_seft.setMessage('Select point for index 4,6 of data1');
				}, function () {
						chart.unselect();
						_seft.setMessage('Unselect points');
				}, function () {
						chart.focus('data2');
						_seft.setMessage('Focus on data2');
				}, function () {
						chart.focus('data3');
						_seft.setMessage('Focus on data3');
				}, function () {
						chart.revert();
						_seft.setMessage('Defocus');
				}, function () {
						chart.load({
								columns: [['data1', 300, 230, 400, 520, 230, 250, 330, 280, 250]]
						});
						_seft.setMessage('Update data1');
				}, function () {
						chart.load({
								columns: [['data2', 30, 50, 90, 120, 40, 50, 80, 70, 50]]
						});
						_seft.setMessage('Update data2');
				}, function () {
						chart.regions([{ start: 1, end: 3 }]);
						_seft.setMessage('Add region from 1 to 3');
				}, function () {
						chart.regions.add([{ start: 6 }]);
						_seft.setMessage('Add region from 6 to end');
				}, function () {
						chart.regions([]);
						_seft.setMessage('Clear regions');
				}, function () {
						chart.xgrids([{ value: 1, text: 'Label 1' }, { value: 4, text: 'Label 4' }]);
						_seft.setMessage('Add x grid lines for 1, 4');
				}, function () {
						chart.ygrids.add([{ value: 450, text: 'Label 450' }]);
						_seft.setMessage('Add y grid lines for 450');
				}, function () {
						chart.xgrids.remove({ value: 1 });
						chart.xgrids.remove({ value: 4 });
						_seft.setMessage('Remove grid lines for 1, 4');
				}, function () {
						chart.ygrids.remove({ value: 450 });
						_seft.setMessage('Remove grid line for 450');
				}, function () {
						chart.transform('bar');
						_seft.setMessage('Show as bar chart');
				}, function () {
						chart.groups([['data2', 'data3']]);
						_seft.setMessage('Grouping data2 and data3');
				}, function () {
						chart.groups([['data1', 'data2', 'data3']]);
						_seft.setMessage('Grouping data1, data2 and data3');
				}, function () {
						chart.groups([['data2', 'data3']]);
						chart.transform('line', 'data1');
						_seft.setMessage('Show data1 as line');
				}, function () {
						chart.unload({
								ids: 'data3'
						});
						_seft.setMessage('Unload data3');
				}, function () {
						chart.unload({
								ids: 'data2'
						});
						_seft.setMessage('Unload data2');
				}, function () {
						chart.flow({
								columns: [['data1', 390, 400, 200, 500]],
								duration: 1000
						});
						_seft.setMessage('Flow 4 data');
				}, function () {
						// wait for end of transition for flow
				}, function () {
						chart.flow({
								columns: [['data1', 190, 230]]
						});
						_seft.setMessage('Flow 2 data');
				}, function () {
						// wait for end of transition for flow
				}, function () {
						chart.transform('line', ['data1', 'data2', 'data3']);
						chart.groups([['data1'], ['data2'], ['data3']]);
						chart.load({
								columns: [['data1', 30, 200, 100, 400, 150, 250, 50, 100, 250]]
						});
						_seft.setMessage('Starting Demo..');
				}];
		},
		methods: {
				setMessage: function (message) {
						document.getElementById('demoMessage').innerHTML = message;
				},
				startDemo: function () {
						let _seft = this;
						// _seft.setMessage('Starting Demo..');
						_seft.timer = setInterval(function () {
								if (_seft.currentIndex == _seft.demos.length) _seft.currentIndex = 0;
								_seft.demos[_seft.currentIndex++]();
						}, _seft.duration);
				},
				stopDemo: function () {
						clearInterval(this.timer);
						// document.getElementById('message').innerHTML = this.defaultMessage;
				}
		}

});

/***/ }),

/***/ 607:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_echarts__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_echarts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_echarts__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            show2: true,
            chartPie: null,
            sizeForm: {
                regionAll: true,
                name: '',
                region: [],
                booking: [],
                ageValue: [0, 100],
                ageMark: ['', 10, 20, 30, 40, 50, 60, 70, 80, 90],
                delivery: false,
                type: '', //Individual
                resource: '',
                desc: ''
            },
            valTotal: 0,
            pieData: []
        };
    },
    watch: {
        sizeForm: {
            deep: true,
            handler(curVal, oldVal) {
                var _region = curVal.region;
                if (_region.length == 0) {
                    _region = ['China', 'HongKong', 'Singapore', 'United Kingdom'];
                }

                let _pieData = [],
                    _total = 0;
                _region.forEach((item, index) => {
                    let max = 666,
                        min = 333,
                        _val = parseInt(Math.random() * (max - min + 1) + min, 10);
                    let tempObj = { value: _val, name: item };
                    _total += _val;
                    _pieData.push(tempObj);
                });
                this.valTotal = _total;
                this.pieData = _pieData;
            },
            immediate: true
        }
    },

    computed: {},
    methods: {
        onSubmit() {

            let _seft = this;
        },
        regionAllbtn() {
            this.sizeForm.regionAll = !this.sizeForm.regionAll;
        },
        drawPieChart() {
            let _seft = this;

            this.chartPie = __WEBPACK_IMPORTED_MODULE_0_echarts___default.a.init(document.getElementById('chartPie'));
            this.chartPie.setOption({
                title: {
                    text: 'Customer Distribution By Region',
                    subtext: 'Total GPB Customer : ' + _seft.valTotal,
                    x: 'center'
                },
                tooltip: {
                    trigger: 'item',
                    showContent: true,
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical', //horizontal
                    left: 'right',
                    data: ['China', 'HongKong', 'Singapore', 'United Kingdom'],
                    formatter: function (name) {
                        let num = '';
                        _seft.pieData.forEach((item, value) => {
                            if (item.name == name) {
                                num = item.value;
                            }
                        });
                        return name + ": " + num;
                    }
                },
                series: [{
                    name: 'distribution of data',
                    type: 'pie',
                    roseType: 'radius',
                    radius: ['10%', '70%'],
                    center: ['50%', '60%'],
                    data: _seft.pieData,
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        },
                        normal: {
                            label: {
                                show: true,
                                formatter: '{b} : {c} ({d}%)'
                            },
                            labelLine: {
                                show: true
                            }
                        }
                    }

                }]
            });
        },
        drawCharts() {
            this.drawPieChart();
        }
    },

    mounted() {
        this.drawCharts();
    },
    updated() {
        this.drawCharts();
    }
});

/***/ }),

/***/ 608:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_echarts__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_echarts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_echarts__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            show2: true,
            chartPie: null,
            sizeForm: {
                name: '',
                asset: [],
                region: [],
                booking: [],
                ageValue: [0, 100],
                ageMark: ['', 10, 20, 30, 40, 50, 60, 70, 80, 90],
                delivery: false,
                type: '', //Individual
                resource: '',
                desc: ''
            },
            valTotal: 0,
            pieData: []
        };
    },
    watch: {
        sizeForm: {
            deep: true,
            handler(curVal, oldVal) {
                var _region = curVal.region;
                if (_region.length == 0) {
                    _region = ['China', 'HongKong', 'Singapore', 'United Kingdom'];
                }

                let _pieData = [],
                    _total = 0;
                _region.forEach((item, index) => {
                    let max = 666,
                        min = 333,
                        _val = parseInt(Math.random() * (max - min + 1) + min, 10);
                    let tempObj = { value: _val, name: item };
                    _total += _val;
                    _pieData.push(tempObj);
                });
                this.valTotal = _total;
                this.pieData = _pieData;
            },
            immediate: true
        }
    },

    computed: {},
    methods: {
        onSubmit() {

            let _seft = this;
        },
        drawPieChart() {
            let _seft = this;

            this.chartPie = __WEBPACK_IMPORTED_MODULE_0_echarts___default.a.init(document.getElementById('chartPie'));
            this.chartPie.setOption({
                title: {
                    text: 'Customer Distribution By Region',
                    subtext: 'Total GPB Customer : ' + _seft.valTotal,
                    x: 'center'
                },
                tooltip: {
                    trigger: 'item',
                    showContent: true,
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical', //horizontal
                    left: 'right',
                    data: ['China', 'HongKong', 'Singapore', 'United Kingdom'],
                    formatter: function (name) {
                        let num = '';
                        _seft.pieData.forEach((item, value) => {
                            if (item.name == name) {
                                num = item.value;
                            }
                        });
                        return name + ": " + num;
                    }
                },
                series: [{
                    name: 'distribution of data',
                    type: 'pie',
                    roseType: 'radius',
                    radius: ['10%', '70%'],
                    center: ['50%', '60%'],
                    data: _seft.pieData,
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        },
                        normal: {
                            label: {
                                show: true,
                                formatter: '{b} : {c} ({d}%)'
                            },
                            labelLine: {
                                show: true
                            }
                        }
                    }

                }]
            });
        },
        drawCharts() {
            this.drawPieChart();
        }
    },

    mounted() {
        this.drawCharts();
    },
    updated() {
        this.drawCharts();
    }
});

/***/ }),

/***/ 609:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_echarts__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_echarts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_echarts__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            chartColumn: null,
            chartBar: null,
            chartLine: null,
            chartPie: null
        };
    },

    methods: {
        drawColumnChart() {
            this.chartColumn = __WEBPACK_IMPORTED_MODULE_0_echarts___default.a.init(document.getElementById('chartColumn'));
            this.chartColumn.setOption({
                title: { text: 'Column Chart' },
                tooltip: {},
                xAxis: {
                    data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
                },
                yAxis: {},
                series: [{
                    name: '销量',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
                }]
            });
        },
        drawBarChart() {
            this.chartBar = __WEBPACK_IMPORTED_MODULE_0_echarts___default.a.init(document.getElementById('chartBar'));
            this.chartBar.setOption({
                title: {
                    text: 'Bar Chart',
                    subtext: '数据来自网络'
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                legend: {
                    data: ['2011年', '2012年']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'value',
                    boundaryGap: [0, 0.01]
                },
                yAxis: {
                    type: 'category',
                    data: ['巴西', '印尼', '美国', '印度', '中国', '世界人口(万)']
                },
                series: [{
                    name: '2011年',
                    type: 'bar',
                    data: [18203, 23489, 29034, 104970, 131744, 630230]
                }, {
                    name: '2012年',
                    type: 'bar',
                    data: [19325, 23438, 31000, 121594, 134141, 681807]
                }]
            });
        },
        drawLineChart() {
            this.chartLine = __WEBPACK_IMPORTED_MODULE_0_echarts___default.a.init(document.getElementById('chartLine'));
            this.chartLine.setOption({
                title: {
                    text: 'Line Chart'
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: ['邮件营销', '联盟广告', '搜索引擎']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    name: '邮件营销',
                    type: 'line',
                    stack: '总量',
                    data: [120, 132, 101, 134, 90, 230, 210]
                }, {
                    name: '联盟广告',
                    type: 'line',
                    stack: '总量',
                    data: [220, 182, 191, 234, 290, 330, 310]
                }, {
                    name: '搜索引擎',
                    type: 'line',
                    stack: '总量',
                    data: [820, 932, 901, 934, 1290, 1330, 1320]
                }]
            });
        },
        drawPieChart() {
            this.chartPie = __WEBPACK_IMPORTED_MODULE_0_echarts___default.a.init(document.getElementById('chartPie'));
            this.chartPie.setOption({
                title: {
                    text: 'Pie Chart',
                    subtext: '纯属虚构',
                    x: 'center'
                },
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
                },
                series: [{
                    name: '访问来源',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '60%'],
                    data: [{ value: 335, name: '直接访问' }, { value: 310, name: '邮件营销' }, { value: 234, name: '联盟广告' }, { value: 135, name: '视频广告' }, { value: 1548, name: '搜索引擎' }],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }]
            });
        },
        drawCharts() {
            this.drawColumnChart();
            this.drawBarChart();
            this.drawLineChart();
            this.drawPieChart();
        }
    },

    mounted: function () {
        this.drawCharts();
    },
    updated: function () {
        this.drawCharts();
    }
});

/***/ }),

/***/ 610:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_highcharts_highstock__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_highcharts_highstock___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_highcharts_highstock__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_highcharts_highcharts_more__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_highcharts_highcharts_more___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_highcharts_highcharts_more__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_highcharts_modules_drilldown__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_highcharts_modules_drilldown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_highcharts_modules_drilldown__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_highcharts_highcharts_3d__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_highcharts_highcharts_3d___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_highcharts_highcharts_3d__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_highcharts_modules_map__ = __webpack_require__(1491);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_highcharts_modules_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_highcharts_modules_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery__ = __webpack_require__(1492);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_highchartsComponent_vue__ = __webpack_require__(1503);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_highchartsComponent_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__components_highchartsComponent_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







__WEBPACK_IMPORTED_MODULE_1_highcharts_highcharts_more___default()(__WEBPACK_IMPORTED_MODULE_0_highcharts_highstock___default.a);
__WEBPACK_IMPORTED_MODULE_2_highcharts_modules_drilldown___default()(__WEBPACK_IMPORTED_MODULE_0_highcharts_highstock___default.a);
__WEBPACK_IMPORTED_MODULE_3_highcharts_highcharts_3d___default()(__WEBPACK_IMPORTED_MODULE_0_highcharts_highstock___default.a);
__WEBPACK_IMPORTED_MODULE_4_highcharts_modules_map___default()(__WEBPACK_IMPORTED_MODULE_0_highcharts_highstock___default.a);



/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'highcharts',
    data() {
        return {
            stockChart: null,

            type: 'columnrange',
            moreSamples: [{
                name: '柱形范围图',
                code: 'columnrange'
            }, {
                name: '下钻',
                code: 'drilldown'
            }, {
                name: '3D 饼图',
                code: '3dpie'
            }],

            chart: null,
            options: {
                xAxis: {
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                },
                yAxis: {
                    title: {
                        text: 'Temperature'
                    },
                    lineWidth: 2,
                    lineColor: '#F33',
                    id: 'temperature-axis'
                },
                series: [{
                    name: 'Temperature',
                    data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
                    color: '#F33'
                }]
            },
            styles: {
                width: 600,
                height: 400
            }
        };
    },
    components: {
        HighchartsComponent: __WEBPACK_IMPORTED_MODULE_6__components_highchartsComponent_vue___default.a
    },
    mounted() {
        this.createChart();
        this.moreChart();
        this.highmaps();
    },
    methods: {
        updateChart() {
            // 通过 refs 获取组件信息
            this.$refs.simpleChart.chart.series[0].update({
                color: '#000'
            });
        },
        updateStcockChart() {
            var rangeSelector = this.stockChart.rangeSelector,
                selected = rangeSelector.selected,
                total = rangeSelector.buttons.length;
            selected++;
            if (selected >= total) {
                selected = 0;
            }

            this.stockChart.rangeSelector.clickButton(selected);
        },
        createChart() {
            __WEBPACK_IMPORTED_MODULE_0_highcharts_highstock___default.a.setOptions({
                lang: {
                    rangeSelectorZoom: ''
                }
            });
            __WEBPACK_IMPORTED_MODULE_5_jquery___default.a.getJSON('https://data.jianshukeji.com/jsonp?filename=json/aapl-ohlcv.json&callback=?', data => {
                var ohlc = [],
                    volume = [],
                    dataLength = data.length,

                // set the allowed units for data grouping
                groupingUnits = [['week', // unit name
                [1] // allowed multiples
                ], ['month', [1, 2, 3, 4, 6]]],
                    i = 0;
                for (i; i < dataLength; i += 1) {
                    ohlc.push([data[i][0], // the date
                    data[i][1], // open
                    data[i][2], // high
                    data[i][3], // low
                    data[i][4] // close
                    ]);
                    volume.push([data[i][0], // the date
                    data[i][5] // the volume
                    ]);
                }
                // create the chart
                this.stockChart = new __WEBPACK_IMPORTED_MODULE_0_highcharts_highstock___default.a.stockChart('container', {
                    rangeSelector: {
                        selected: 1,
                        inputDateFormat: '%Y-%m-%d'
                    },
                    title: {
                        text: '苹果历史股价'
                    },
                    xAxis: {
                        dateTimeLabelFormats: {
                            millisecond: '%H:%M:%S.%L',
                            second: '%H:%M:%S',
                            minute: '%H:%M',
                            hour: '%H:%M',
                            day: '%m-%d',
                            week: '%m-%d',
                            month: '%y-%m',
                            year: '%Y'
                        }
                    },
                    yAxis: [{
                        labels: {
                            align: 'right',
                            x: -3
                        },
                        title: {
                            text: '股价'
                        },
                        height: '60%',
                        lineWidth: 2
                    }, {
                        labels: {
                            align: 'right',
                            x: -3
                        },
                        title: {
                            text: '成交量'
                        },
                        top: '65%',
                        height: '35%',
                        offset: 0,
                        lineWidth: 2
                    }],
                    series: [{
                        type: 'candlestick',
                        name: 'AAPL',
                        color: 'green',
                        lineColor: 'green',
                        upColor: 'red',
                        upLineColor: 'red',
                        tooltip: {},
                        data: ohlc,
                        dataGrouping: {
                            units: groupingUnits
                        }
                    }, {
                        type: 'column',
                        name: 'Volume',
                        data: volume,
                        yAxis: 1,
                        dataGrouping: {
                            units: groupingUnits
                        }
                    }]
                });
            });
        },

        moreChart() {
            var options = this.getMoreOptions(this.type);

            if (this.chart) {
                this.chart.destroy();
            };

            this.chart = new __WEBPACK_IMPORTED_MODULE_0_highcharts_highstock___default.a.Chart('highcharts-more', options);
        },

        highmaps() {
            __WEBPACK_IMPORTED_MODULE_0_highcharts_highstock___default.a.setOptions({
                lang: {
                    drillUpText: '< 返回 “{series.name}”'
                }
            });
            var map = null,
                geochina = 'https://data.jianshukeji.com/jsonp?filename=geochina/';
            __WEBPACK_IMPORTED_MODULE_5_jquery___default.a.getJSON(geochina + 'china.json&callback=?', function (mapdata) {
                var data = [];
                // 随机数据
                __WEBPACK_IMPORTED_MODULE_0_highcharts_highstock___default.a.each(mapdata.features, function (md, index) {
                    var tmp = {
                        name: md.properties.name,
                        value: Math.floor(Math.random() * 100 + 1) // 生成 1 ~ 100 随机值
                    };
                    if (md.properties.drilldown) {
                        tmp.drilldown = md.properties.drilldown;
                    }
                    data.push(tmp);
                });
                map = new __WEBPACK_IMPORTED_MODULE_0_highcharts_highstock___default.a.Map('highmaps', {
                    chart: {
                        events: {
                            drilldown: function (e) {
                                console.log(e);
                                // 异步下钻
                                if (e.point.drilldown) {
                                    var pointName = e.point.properties.fullname;
                                    map.showLoading('下钻中，请稍后...');
                                    // 获取二级行政地区数据并更新图表
                                    __WEBPACK_IMPORTED_MODULE_5_jquery___default.a.getJSON(geochina + e.point.drilldown + '.json&callback=?', function (data) {
                                        data = __WEBPACK_IMPORTED_MODULE_0_highcharts_highstock___default.a.geojson(data);
                                        __WEBPACK_IMPORTED_MODULE_0_highcharts_highstock___default.a.each(data, function (d) {
                                            if (d.properties.drilldown) {
                                                d.drilldown = d.properties.drilldown;
                                            }
                                            d.value = Math.floor(Math.random() * 100 + 1); // 生成 1 ~ 100 随机值
                                        });
                                        map.hideLoading();
                                        map.addSeriesAsDrilldown(e.point, {
                                            name: e.point.name,
                                            data: data,
                                            dataLabels: {
                                                enabled: true,
                                                format: '{point.name}'
                                            }
                                        });
                                        map.setTitle({
                                            text: pointName
                                        });
                                    });
                                }
                            },
                            drillup: function () {
                                map.setTitle({
                                    text: '中国'
                                });
                            }
                        }
                    },
                    title: {
                        text: '中国地图'
                    },
                    subtitle: {
                        text: '<a href="https://www.hcharts.cn/mapdata">点击查看地图数据及详情，注意县级数据为收费数据，如果您有需要，请联系我们购买</a>'
                    },
                    mapNavigation: {
                        enabled: true,
                        buttonOptions: {
                            verticalAlign: 'bottom'
                        }
                    },
                    tooltip: {
                        useHTML: true,
                        headerFormat: '<table><tr><td>{point.name}</td></tr>',
                        pointFormat: '<tr><td>全称</td><td>{point.properties.fullname}</td></tr>' + '<tr><td>行政编号</td><td>{point.properties.areacode}</td></tr>' + '<tr><td>父级</td><td>{point.properties.parent}</td></tr>' + '<tr><td>经纬度</td><td>{point.properties.longitude},{point.properties.latitude}</td></tr>',
                        footerFormat: '</table>'
                    },
                    colorAxis: {
                        min: 0,
                        minColor: '#fff',
                        maxColor: '#006cee',
                        labels: {
                            style: {
                                "color": "red", "fontWeight": "bold"
                            }
                        }
                    },
                    series: [{
                        data: data,
                        mapData: mapdata,
                        joinBy: 'name',
                        name: '中国地图',
                        states: {
                            hover: {
                                color: '#a4edba'
                            }
                        }
                    }]
                });
            });
        },

        getMoreOptions(type) {
            if (type === 'columnrange') {
                return {
                    chart: {
                        type: 'columnrange',
                        inverted: true
                    },
                    title: {
                        text: '每月温度变化范围'
                    },
                    subtitle: {
                        text: '2009 挪威某地'
                    },
                    xAxis: {
                        categories: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
                    },
                    yAxis: {
                        title: {
                            text: '温度 ( °C )'
                        }
                    },
                    tooltip: {
                        valueSuffix: '°C'
                    },
                    plotOptions: {
                        columnrange: {
                            dataLabels: {
                                enabled: true,
                                formatter: function () {
                                    return this.y + '°C';
                                }
                            }
                        }
                    },
                    legend: {
                        enabled: false
                    },
                    series: [{
                        name: '温度',
                        data: [[-9.7, 9.4], [-8.7, 6.5], [-3.5, 9.4], [-1.4, 19.9], [0.0, 22.6], [2.9, 29.5], [9.2, 30.7], [7.3, 26.5], [4.4, 18.0], [-3.1, 11.4], [-5.2, 10.4], [-13.5, 9.8]]
                    }]
                };
            } else if (type === 'drilldown') {
                return {
                    chart: {
                        type: 'column'
                    },
                    title: {
                        text: 'Basic drilldown'
                    },
                    xAxis: {
                        type: 'category'
                    },
                    legend: {
                        enabled: false
                    },
                    plotOptions: {
                        series: {
                            borderWidth: 0,
                            dataLabels: {
                                enabled: true
                            }
                        }
                    },
                    series: [{
                        name: 'Things',
                        colorByPoint: true,
                        data: [{
                            name: 'Animals',
                            y: 5,
                            drilldown: 'animals'
                        }, {
                            name: 'Fruits',
                            y: 2,
                            drilldown: 'fruits'
                        }, {
                            name: 'Cars',
                            y: 4,
                            drilldown: 'cars'
                        }]
                    }],
                    drilldown: {
                        series: [{
                            id: 'animals',
                            data: [['Cats', 4], ['Dogs', 2], ['Cows', 1], ['Sheep', 2], ['Pigs', 1]]
                        }, {
                            id: 'fruits',
                            data: [{
                                name: 'Apples',
                                y: 4
                            }, {
                                name: 'Oranges',
                                y: 2,
                                drilldown: 'third-leves'
                            }]
                        }, {
                            id: 'cars',
                            data: [['Toyota', 4], ['Opel', 2], ['Volkswagen', 2]]
                        }, {
                            id: 'third-leves',
                            data: [['Toyota', 4], ['Opel', 2], ['Volkswagen', 2]]
                        }]
                    }
                };
            } else if (type === '3dpie') {
                return {
                    chart: {
                        type: 'pie',
                        options3d: {
                            enabled: true,
                            alpha: 45,
                            beta: 0
                        }
                    },
                    title: {
                        text: '2014年某网站不同浏览器访问量占比'
                    },
                    tooltip: {
                        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                    },
                    plotOptions: {
                        pie: {
                            allowPointSelect: true,
                            cursor: 'pointer',
                            depth: 35,
                            dataLabels: {
                                enabled: true,
                                format: '{point.name}'
                            }
                        }
                    },
                    series: [{
                        type: 'pie',
                        name: '浏览器占比',
                        data: [['Firefox', 45.0], ['IE', 26.8], {
                            name: 'Chrome',
                            y: 12.8,
                            sliced: true,
                            selected: true
                        }, ['Safari', 8.5], ['Opera', 6.2], ['Others', 0.7]]
                    }]
                };
            }
        }

    }
});

/***/ }),

/***/ 611:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
	data() {
		return {
			form: {
				name: '',
				region: '',
				date1: '',
				date2: '',
				delivery: false,
				type: [],
				resource: '',
				desc: ''
			}
		};
	},
	methods: {
		onSubmit() {
			console.log('submit!');
		}
	}
});

/***/ }),

/***/ 612:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_js_util__ = __webpack_require__(620);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_api__ = __webpack_require__(128);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


//import NProgress from 'nprogress'


/* harmony default export */ __webpack_exports__["default"] = ({
	data() {
		return {
			filters: {
				name: ''
			},
			users: [],
			total: 0,
			page: 1,
			listLoading: false,
			sels: [], //列表选中列

			editFormVisible: false, //编辑界面是否显示
			editLoading: false,
			editFormRules: {
				name: [{ required: true, message: '请输入姓名', trigger: 'blur' }]
			},
			//编辑界面数据
			editForm: {
				id: 0,
				name: '',
				sex: -1,
				age: 0,
				birth: '',
				addr: ''
			},

			addFormVisible: false, //新增界面是否显示
			addLoading: false,
			addFormRules: {
				name: [{ required: true, message: '请输入姓名', trigger: 'blur' }]
			},
			//新增界面数据
			addForm: {
				name: '',
				sex: -1,
				age: 0,
				birth: '',
				addr: ''
			}

		};
	},
	methods: {
		//性别显示转换
		formatSex: function (row, column) {
			return row.sex == 1 ? '男' : row.sex == 0 ? '女' : '未知';
		},
		handleCurrentChange(val) {
			this.page = val;
			this.getUsers();
		},
		//获取用户列表
		getUsers() {
			let para = {
				page: this.page,
				name: this.filters.name
			};
			this.listLoading = true;
			//NProgress.start();
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__api_api__["d" /* getUserListPage */])(para).then(res => {
				this.total = res.data.total;
				this.users = res.data.users;
				this.listLoading = false;
				//NProgress.done();
			});
		},
		//删除
		handleDel: function (index, row) {
			this.$confirm('确认删除该记录吗?', '提示', {
				type: 'warning'
			}).then(() => {
				this.listLoading = true;
				//NProgress.start();
				let para = { id: row.id };
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__api_api__["e" /* removeUser */])(para).then(res => {
					this.listLoading = false;
					//NProgress.done();
					this.$message({
						message: '删除成功',
						type: 'success'
					});
					this.getUsers();
				});
			}).catch(() => {});
		},
		//显示编辑界面
		handleEdit: function (index, row) {
			this.editFormVisible = true;
			this.editForm = Object.assign({}, row);
		},
		//显示新增界面
		handleAdd: function () {
			this.addFormVisible = true;
			this.addForm = {
				name: '',
				sex: -1,
				age: 0,
				birth: '',
				addr: ''
			};
		},
		//编辑
		editSubmit: function () {
			this.$refs.editForm.validate(valid => {
				if (valid) {
					this.$confirm('确认提交吗？', '提示', {}).then(() => {
						this.editLoading = true;
						//NProgress.start();
						let para = Object.assign({}, this.editForm);
						para.birth = !para.birth || para.birth == '' ? '' : __WEBPACK_IMPORTED_MODULE_0__common_js_util__["a" /* default */].formatDate.format(new Date(para.birth), 'yyyy-MM-dd');
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__api_api__["f" /* editUser */])(para).then(res => {
							this.editLoading = false;
							//NProgress.done();
							this.$message({
								message: '提交成功',
								type: 'success'
							});
							this.$refs['editForm'].resetFields();
							this.editFormVisible = false;
							this.getUsers();
						});
					});
				}
			});
		},
		//新增
		addSubmit: function () {
			this.$refs.addForm.validate(valid => {
				if (valid) {
					this.$confirm('确认提交吗？', '提示', {}).then(() => {
						this.addLoading = true;
						//NProgress.start();
						let para = Object.assign({}, this.addForm);
						para.birth = !para.birth || para.birth == '' ? '' : __WEBPACK_IMPORTED_MODULE_0__common_js_util__["a" /* default */].formatDate.format(new Date(para.birth), 'yyyy-MM-dd');
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__api_api__["g" /* addUser */])(para).then(res => {
							this.addLoading = false;
							//NProgress.done();
							this.$message({
								message: '提交成功',
								type: 'success'
							});
							this.$refs['addForm'].resetFields();
							this.addFormVisible = false;
							this.getUsers();
						});
					});
				}
			});
		},
		selsChange: function (sels) {
			this.sels = sels;
		},
		//批量删除
		batchRemove: function () {
			var ids = this.sels.map(item => item.id).toString();
			this.$confirm('确认删除选中记录吗？', '提示', {
				type: 'warning'
			}).then(() => {
				this.listLoading = true;
				//NProgress.start();
				let para = { ids: ids };
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__api_api__["h" /* batchRemoveUser */])(para).then(res => {
					this.listLoading = false;
					//NProgress.done();
					this.$message({
						message: '删除成功',
						type: 'success'
					});
					this.getUsers();
				});
			}).catch(() => {});
		}
	},
	mounted() {
		this.getUsers();
	}
});

/***/ }),

/***/ 613:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_api__ = __webpack_require__(128);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


//import NProgress from 'nprogress'
/* harmony default export */ __webpack_exports__["default"] = ({
	data() {
		return {
			filters: {
				name: ''
			},
			loading: false,
			users: []
		};
	},
	methods: {
		//性别显示转换
		formatSex: function (row, column) {
			return row.sex == 1 ? '男' : row.sex == 0 ? '女' : '未知';
		},
		//获取用户列表
		getUser: function () {
			let para = {
				name: this.filters.name
			};
			this.loading = true;
			//NProgress.start();
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_api__["c" /* getUserList */])(para).then(res => {
				this.users = res.data.users;
				this.loading = false;
				//NProgress.done();
			});
		}
	},
	mounted() {
		this.getUser();
	}
});

/***/ }),

/***/ 614:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_api__ = __webpack_require__(128);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


//import NProgress from 'nprogress'
/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      filters: {
        name: ''
      },
      loading: false,
      customers: []
    };
  },
  methods: {
    //性别显示转换
    formatSex: function (row, column) {
      return row.customerType == 1 ? 'Individual' : row.customerType == 0 ? 'Entity' : 'undefined';
    },
    //获取用户列表
    getUser: function () {
      let para = {
        name: this.filters.name
      };
      this.loading = true;
      //NProgress.start();
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_api__["b" /* getCustomerList */])(para).then(res => {
        this.customers = res.data.customers;
        this.loading = false;
        //NProgress.done();
      });
    }
  },
  mounted() {
    this.getUser();
  }
});

/***/ }),

/***/ 615:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


//import NProgress from 'nprogress'
/* harmony default export */ __webpack_exports__["default"] = ({
	data() {
		return {
			value3: true,
			value4: true,
			filters: {
				name: ''
			},
			loading: false,
			users: []
		};
	},
	methods: {},
	mounted() {}
});

/***/ }),

/***/ 616:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_api__ = __webpack_require__(128);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


//import NProgress from 'nprogress'
/* harmony default export */ __webpack_exports__["default"] = ({
	data() {
		return {
			filters: {
				name: ''
			},
			loading: false,
			users: [{ number: '8000-123456', name: 'Nikko KITMAN	', equity: 16300508.05, fixedIncome: 16300508.05, fx: 16300508.05, structureProduct: 2345232.00, equity: 23455.00, value: 16300508.05 }, { number: '8000-677988', name: 'Oliver HUSIN	', equity: 5000300.00, fixedIncome: 0.00, fx: 0.00, structureProduct: 2345232.00, value: 9789644.98 }, { number: '8000-546700', name: 'Ming Group LTD	', equity: 0.00, fixedIncome: 100000.00, fx: 3004030.00, structureProduct: 2345232.00, value: 6788688.05 }, { number: '8000-544976', name: 'Calvin ZUGBERG	', equity: 0.00, fixedIncome: 300000.00, fx: 400000.00, structureProduct: '2345232.40', value: 6689002.00 }, { number: '8000-321456', name: 'Shawn BLIANCE	', equity: 9789644.98, fixedIncome: 9789644.98, fx: 9789644.98, structureProduct: 2345232.00, value: 5776559.98 }, { number: ' 8000-698929', name: 'Kawasaki MIZUKA	', equity: 6788688.05, fixedIncome: 6788688.05, fx: 6788688.05, structureProduct: '2345232.02', value: 3002993.99 }]
		};
	},
	methods: {
		//性别显示转换
		formatSex: function (row, column) {
			return row.sex == 1 ? '男' : row.sex == 0 ? '女' : '未知';
		},
		// 修改table header的背景色
		tableHeaderColor({ row, column, rowIndex, columnIndex }) {
			if (rowIndex === 0) {
				return 'background-color: #F7F6Fd;color: #666;font-weight: 500;';
			}
		},

		//获取用户列表
		getUser: function () {
			// let para = {
			// 	name: this.filters.name
			// };
			// this.loading = true;
			// //NProgress.start();
			// getUserList(para).then((res) => {
			// 	this.users = res.data.users;
			// 	this.loading = false;
			// 	//NProgress.done();
			// });
		}
	},
	mounted() {
		this.getUser();
	}
});

/***/ }),

/***/ 617:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_echarts__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_echarts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_echarts__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            chartPie1: null,
            chartPie2: null,
            tableData1: [{
                name: 'HSBC Holding',
                quantity: 80000,
                totalAmount: 5084000,
                marketPrice: 63.55,
                averageCost: 60.05,
                pl: 280000,
                lbdp: 6000
            }, {
                name: 'Tencent',
                quantity: 10000,
                totalAmount: 2706000,
                marketPrice: 270.6,
                averageCost: 180.05,
                pl: 901000,
                lbdp: 3000
            }],
            tableData2: [{
                name: 'HSBC Bond 5Y',
                quantity: 80000,
                totalAmount: 5084000,
                marketPrice: 63.55,
                averageCost: 60.05,
                pl: 280000,
                lbdp: 6000
            }],
            tableData3: [{
                name: 'HKD/USD',
                quantity: 80000,
                totalAmount: 5084000,
                marketPrice: 63.55,
                averageCost: 60.05,
                pl: '-165.5380002',
                lbdp: '-165.5380002'
            }],
            tableData4: [{
                name: '50000',
                quantity: 80000,
                totalAmount: 5084000,
                marketPrice: 63.55,
                averageCost: 60.05,
                pl: '-165.5380002',
                lbdp: '-165.5380002'
            }]
        };
    },
    methods: {

        getSummaries(param) {
            const { columns, data } = param;
            const sums = [];
            columns.forEach((column, index) => {
                if (index === 0) {
                    sums[index] = '总价';
                    return;
                }
                const values = data.map(item => Number(item[column.property]));
                if (!values.every(value => isNaN(value))) {
                    sums[index] = values.reduce((prev, curr) => {
                        const value = Number(curr);
                        if (!isNaN(value)) {
                            return prev + curr;
                        } else {
                            return prev;
                        }
                    }, 0);
                    sums[index] += ' 元';
                } else {
                    sums[index] = 'N/A';
                }
            });

            return sums;
        },
        // 修改table header的背景色
        tableHeaderColor({ row, column, rowIndex, columnIndex }) {
            if (rowIndex === 0) {
                return 'background-color: #F7F6Fd;color: #666;font-weight: bold;';
            }
        },
        drawPieChart() {
            let _seft = this;

            this.chartPie1 = __WEBPACK_IMPORTED_MODULE_0_echarts___default.a.init(document.getElementById('chartPie1'));
            this.chartPie1.setOption({
                title: {
                    text: 'Asset Allocation(USD)',
                    // subtext: 'Total GPB Customer : ' + _seft.valTotal,
                    x: 'center'
                },
                // tooltip: {
                //     trigger: 'item',
                //     showContent: true,
                //     formatter: "{a} <br/>{b} : {c} ({d}%)"
                // },
                legend: {
                    // orient: 'vertical',//horizontal
                    // left: 'bottom',
                    bottom: '20',
                    data: ['Equity', 'Fixed Income', 'FX', 'Structure Product']
                },
                series: [{
                    // name: 'distribution of data',
                    type: 'pie',
                    radius: '40%',
                    // roseType : 'radius',
                    // radius: ['10%', '70%'],
                    // center: ['50%', '50%'],
                    data: [{ name: 'Equity', value: 300 }, { name: 'Fixed Income', value: 400 }, { name: 'FX', value: 700 }, { name: 'Structure Product', value: 300 }],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        },
                        normal: {
                            label: {
                                show: true,
                                formatter: '{c} ({d}%)'
                            },
                            labelLine: {
                                show: true
                            }
                        }
                    }

                }]
            });

            this.chartPie2 = __WEBPACK_IMPORTED_MODULE_0_echarts___default.a.init(document.getElementById('chartPie2'));
            this.chartPie2.setOption({
                title: {
                    text: 'By Currency',
                    // subtext: 'Total GPB Customer : ' + _seft.valTotal,
                    x: 'center'
                },
                // tooltip: {
                //     trigger: 'item',
                //     showContent: true,
                //     formatter: "{a} <br/>{b} : {c} ({d}%)"
                // },
                legend: {
                    // orient: 'vertical',//horizontal
                    // left: 'bottom',
                    bottom: '20',
                    data: ['Equity', 'Fixed Income', 'FX', 'Structure Product']
                },
                series: [{
                    // name: 'distribution of data',
                    type: 'pie',
                    radius: '40%',
                    // roseType : 'radius',
                    // radius: ['10%', '70%'],
                    // center: ['50%', '50%'],
                    data: [{ name: 'Equity', value: 130 }, { name: 'Fixed Income', value: 250 }, { name: 'FX', value: 560 }, { name: 'Structure Product', value: 300 }],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        },
                        normal: {
                            label: {
                                show: true,
                                formatter: '{c} ({d}%)'
                            },
                            labelLine: {
                                show: true
                            }
                        }
                    }

                }]
            });
        },
        drawCharts() {
            this.drawPieChart();
        }

    },
    mounted() {
        this.drawCharts();
    },
    updated() {
        this.drawCharts();
    }
});

/***/ }),

/***/ 618:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
	data() {
		return {
			tableData: [{
				date: '2018-11-01 13:36',
				info: 'Share Deal Confirmation #67998'
			}, {
				date: '2016-05-04 13:36',
				info: 'Customer 8000123456 today\'s birthday'
			}, {
				date: '2016-05-01 13:36',
				info: 'Bond Deal #67998 pending settlement'
			}, {
				date: '2016-05-03 13:36',
				info: 'Customer 8000123456 today\'s birthday'
			}]
		};
	},
	methods: {},
	mounted() {}
});

/***/ }),

/***/ 619:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
	data() {
		return {
			form: {
				name: '',
				buySell: [],
				eSharePhone: [],
				shareIssue: '',
				norminal: '',
				shareCurrency: [],
				sharePrice: '',
				tradeType: [],
				remark: ''
			},
			tableData: [{
				issueName: '0005.HK',
				avgPrice: 60.5,
				norminal: 80000,
				totalValue: 4840000,
				CCY: 'HKD'
			}]
		};
	},
	methods: {
		onSubmit() {},
		onReset() {},
		tableHeaderColor({ row, column, rowIndex, columnIndex }) {
			if (rowIndex === 0) {
				return 'background-color: #F7F6Fd;color: #666;font-weight: bold;';
			}
		}

	},
	mounted() {}
});

/***/ }),

/***/ 620:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var SIGN_REGEXP = /([yMdhsm])(\1*)/g;
var DEFAULT_PATTERN = 'yyyy-MM-dd';
function padding(s, len) {
    var len = len - (s + '').length;
    for (var i = 0; i < len; i++) {
        s = '0' + s;
    }
    return s;
};

/* harmony default export */ __webpack_exports__["a"] = ({
    getQueryStringByName: function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        var context = "";
        if (r != null) context = r[2];
        reg = null;
        r = null;
        return context == null || context == "" || context == "undefined" ? "" : context;
    },
    formatDate: {

        format: function (date, pattern) {
            pattern = pattern || DEFAULT_PATTERN;
            return pattern.replace(SIGN_REGEXP, function ($0) {
                switch ($0.charAt(0)) {
                    case 'y':
                        return padding(date.getFullYear(), $0.length);
                    case 'M':
                        return padding(date.getMonth() + 1, $0.length);
                    case 'd':
                        return padding(date.getDate(), $0.length);
                    case 'w':
                        return date.getDay() + 1;
                    case 'h':
                        return padding(date.getHours(), $0.length);
                    case 'm':
                        return padding(date.getMinutes(), $0.length);
                    case 's':
                        return padding(date.getSeconds(), $0.length);
                }
            });
        },
        parse: function (dateString, pattern) {
            var matchs1 = pattern.match(SIGN_REGEXP);
            var matchs2 = dateString.match(/(\d)+/g);
            if (matchs1.length == matchs2.length) {
                var _date = new Date(1970, 0, 1);
                for (var i = 0; i < matchs1.length; i++) {
                    var _int = parseInt(matchs2[i]);
                    var sign = matchs1[i];
                    switch (sign.charAt(0)) {
                        case 'y':
                            _date.setFullYear(_int);break;
                        case 'M':
                            _date.setMonth(_int - 1);break;
                        case 'd':
                            _date.setDate(_int);break;
                        case 'h':
                            _date.setHours(_int);break;
                        case 'm':
                            _date.setMinutes(_int);break;
                        case 's':
                            _date.setSeconds(_int);break;
                    }
                }
                return _date;
            }
            return null;
        }

    }

});

/***/ }),

/***/ 621:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_polyfill__ = __webpack_require__(548);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_polyfill___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_polyfill__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__App__ = __webpack_require__(553);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_element_ui__ = __webpack_require__(549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_element_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_element_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_element_ui_lib_transitions_collapse_transition__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_element_ui_lib_transitions_collapse_transition___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_element_ui_lib_transitions_collapse_transition__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_theme_element_darkred_index_css__ = __webpack_require__(552);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_theme_element_darkred_index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__assets_theme_element_darkred_index_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_vue_router__ = __webpack_require__(554);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__vuex_store__ = __webpack_require__(547);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_vuex__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__routes__ = __webpack_require__(546);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__mock__ = __webpack_require__(545);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_font_awesome_css_font_awesome_min_css__ = __webpack_require__(550);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_font_awesome_css_font_awesome_min_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_font_awesome_css_font_awesome_min_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_vue_orgchart_dist_style_min_css__ = __webpack_require__(551);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_vue_orgchart_dist_style_min_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_vue_orgchart_dist_style_min_css__);





//import 'element-ui/lib/theme-default/index.css'
// import './assets/theme/theme-green/index.css'




//import NProgress from 'nprogress'
//import 'nprogress/nprogress.css'


__WEBPACK_IMPORTED_MODULE_10__mock__["a" /* default */].bootstrap();



__WEBPACK_IMPORTED_MODULE_1_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_3_element_ui___default.a);
__WEBPACK_IMPORTED_MODULE_1_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_6_vue_router__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_1_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_8_vuex__["a" /* default */]);

//NProgress.configure({ showSpinner: false });

const router = new __WEBPACK_IMPORTED_MODULE_6_vue_router__["a" /* default */]({
  routes: __WEBPACK_IMPORTED_MODULE_9__routes__["a" /* default */]
});

router.beforeEach((to, from, next) => {
  //NProgress.start();
  if (to.path == '/login') {
    sessionStorage.removeItem('user');
  }
  let user = JSON.parse(sessionStorage.getItem('user'));
  if (!user && to.path != '/login') {
    next({ path: '/login' });
  } else {
    next();
  }
});

__WEBPACK_IMPORTED_MODULE_1_vue__["default"].component(__WEBPACK_IMPORTED_MODULE_4_element_ui_lib_transitions_collapse_transition___default.a.name, __WEBPACK_IMPORTED_MODULE_4_element_ui_lib_transitions_collapse_transition___default.a);

//router.afterEach(transition => {
//NProgress.done();
//});

new __WEBPACK_IMPORTED_MODULE_1_vue__["default"]({
  //el: '#app',
  //template: '<App/>',
  router,
  store: __WEBPACK_IMPORTED_MODULE_7__vuex_store__["a" /* default */],
  //components: { App }
  render: h => h(__WEBPACK_IMPORTED_MODULE_2__App___default.a)
}).$mount('#app');

/***/ }),

/***/ 622:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LoginUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Users; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Customers; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mockjs__ = __webpack_require__(1493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mockjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mockjs__);

const LoginUsers = [{
  id: 1,
  username: 'manager',
  password: '123456',
  avatar: '',
  meta: 'manager',
  name: 'katherine pierce'
}, {
  id: 2,
  username: 'rm',
  password: '123456',
  avatar: '',
  meta: 'rm',
  name: 'Daniel Gillies'
}, {
  id: 2,
  username: 'admin',
  password: '123456',
  avatar: '',
  meta: 'admin',
  name: 'Daniel Gillies'
}];

const Users = [];

for (let i = 0; i < 60; i++) {
  Users.push(__WEBPACK_IMPORTED_MODULE_0_mockjs___default.a.mock({
    id: __WEBPACK_IMPORTED_MODULE_0_mockjs___default.a.Random.guid(),
    name: __WEBPACK_IMPORTED_MODULE_0_mockjs___default.a.Random.cname(),
    addr: __WEBPACK_IMPORTED_MODULE_0_mockjs___default.a.mock('@county(true)'),
    'age|18-60': 1,
    birth: __WEBPACK_IMPORTED_MODULE_0_mockjs___default.a.Random.date(),
    sex: __WEBPACK_IMPORTED_MODULE_0_mockjs___default.a.Random.integer(0, 1)
  }));
}

const Customers = [];

// "customerNumber" : 8000123456,
// "customerName" : "Tony HUANG",
// "customerType" : "Individual", Entity
// "homeCountry" : "CN",
// "bookingCenter" :"HK",
// "rmCode" : "HKRM01",
// "dateOfBirth" : "1983-01-01"

for (let i = 0; i < 60; i++) {
  Customers.push(__WEBPACK_IMPORTED_MODULE_0_mockjs___default.a.mock({
    id: __WEBPACK_IMPORTED_MODULE_0_mockjs___default.a.Random.guid(),
    customerNumber: __WEBPACK_IMPORTED_MODULE_0_mockjs___default.a.Random.natural(1000000000, 9000000000),
    customerName: __WEBPACK_IMPORTED_MODULE_0_mockjs___default.a.Random.name(),
    customerType: __WEBPACK_IMPORTED_MODULE_0_mockjs___default.a.Random.integer(0, 1),
    homeCountry: __WEBPACK_IMPORTED_MODULE_0_mockjs___default.a.mock('@county(true)'),
    bookingCenter: __WEBPACK_IMPORTED_MODULE_0_mockjs___default.a.mock('@county(true)'),
    rmCode: 'HKRM' + __WEBPACK_IMPORTED_MODULE_0_mockjs___default.a.Random.natural(1000, 9000),
    dateOfBirth: __WEBPACK_IMPORTED_MODULE_0_mockjs___default.a.Random.date()
  }));
}



/***/ }),

/***/ 623:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios_mock_adapter__ = __webpack_require__(578);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios_mock_adapter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios_mock_adapter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_user__ = __webpack_require__(622);



let _Users = __WEBPACK_IMPORTED_MODULE_2__data_user__["a" /* Users */];
let _Customers = __WEBPACK_IMPORTED_MODULE_2__data_user__["b" /* Customers */];

/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   * mock bootstrap
   */
  bootstrap() {
    let mock = new __WEBPACK_IMPORTED_MODULE_1_axios_mock_adapter___default.a(__WEBPACK_IMPORTED_MODULE_0_axios___default.a);

    // mock success request
    mock.onGet('/success').reply(200, {
      msg: 'success'
    });

    // mock error request
    mock.onGet('/error').reply(500, {
      msg: 'failure'
    });

    //登录
    mock.onPost('/login').reply(config => {
      let { username, password } = JSON.parse(config.data);
      return new Promise((resolve, reject) => {
        let user = null;
        setTimeout(() => {
          let hasUser = __WEBPACK_IMPORTED_MODULE_2__data_user__["c" /* LoginUsers */].some(u => {
            if (u.username === username && u.password === password) {
              user = JSON.parse(JSON.stringify(u));
              user.password = undefined;
              return true;
            }
          });

          if (hasUser) {
            resolve([200, { code: 200, msg: '请求成功', user }]);
          } else {
            resolve([200, { code: 500, msg: '账号或密码错误' }]);
          }
        }, 1000);
      });
    });

    //获取用户列表
    mock.onGet('/customer/list').reply(config => {
      let { name } = config.params;
      let mockUsers = __WEBPACK_IMPORTED_MODULE_2__data_user__["b" /* Customers */].filter(customer => {
        if (name && customer.name.indexOf(name) == -1) return false;
        return true;
      });
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            customers: mockUsers
          }]);
        }, 1000);
      });
    });

    //获取用户列表
    mock.onGet('/user/list').reply(config => {
      let { name } = config.params;
      let mockUsers = _Users.filter(user => {
        if (name && user.name.indexOf(name) == -1) return false;
        return true;
      });
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            users: mockUsers
          }]);
        }, 1000);
      });
    });

    //获取用户列表（分页）
    mock.onGet('/user/listpage').reply(config => {
      let { page, name } = config.params;
      let mockUsers = _Users.filter(user => {
        if (name && user.name.indexOf(name) == -1) return false;
        return true;
      });
      let total = mockUsers.length;
      mockUsers = mockUsers.filter((u, index) => index < 20 * page && index >= 20 * (page - 1));
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            total: total,
            users: mockUsers
          }]);
        }, 1000);
      });
    });

    //删除用户
    mock.onGet('/user/remove').reply(config => {
      let { id } = config.params;
      _Users = _Users.filter(u => u.id !== id);
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            code: 200,
            msg: '删除成功'
          }]);
        }, 500);
      });
    });

    //批量删除用户
    mock.onGet('/user/batchremove').reply(config => {
      let { ids } = config.params;
      ids = ids.split(',');
      _Users = _Users.filter(u => !ids.includes(u.id));
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            code: 200,
            msg: '删除成功'
          }]);
        }, 500);
      });
    });

    //编辑用户
    mock.onGet('/user/edit').reply(config => {
      let { id, name, addr, age, birth, sex } = config.params;
      _Users.some(u => {
        if (u.id === id) {
          u.name = name;
          u.addr = addr;
          u.age = age;
          u.birth = birth;
          u.sex = sex;
          return true;
        }
      });
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            code: 200,
            msg: '编辑成功'
          }]);
        }, 500);
      });
    });

    //新增用户
    mock.onGet('/user/add').reply(config => {
      let { name, addr, age, birth, sex } = config.params;
      _Users.push({
        name: name,
        addr: addr,
        age: age,
        birth: birth,
        sex: sex
      });
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            code: 200,
            msg: '新增成功'
          }]);
        }, 500);
      });
    });
  }
});

/***/ }),

/***/ 624:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//test
const increment = ({ commit }) => {
    commit('INCREMENT');
};
/* harmony export (immutable) */ __webpack_exports__["increment"] = increment;

const decrement = ({ commit }) => {
    commit('DECREMENT');
};
/* harmony export (immutable) */ __webpack_exports__["decrement"] = decrement;


/***/ }),

/***/ 625:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//test
const getCount = state => {
    return state.count;
};
/* harmony export (immutable) */ __webpack_exports__["getCount"] = getCount;


/***/ })

},[621]);
//# sourceMappingURL=app.2282449774407dc982e0.js.map