"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reportLog = exports.setReportLogUrl = void 0;
var axios_1 = require("axios");
// 定义一个变量，表示上报日志的 URL 地址
var url = '/api/v1/open/log/report';
// 定义一个函数，用来设置上报日志的 URL 地址
function setReportLogUrl(newUrl) {
    // 把 logUrl 的值更新为 newLogUrl
    url = newUrl;
}
exports.setReportLogUrl = setReportLogUrl;
// 定义一个函数，用来上报日志
function reportLog(params) {
    // 获取当前页面的 title 和 url
    var title = document.title;
    var url = window.location.href;
    // 构造一个对象，包含 title、url 和 logParams
    var data = __assign({ title: title, url: url }, params);
    // 使用 axios 发送一个 POST 请求到 logUrl，并传入 data
    axios_1.default.post(url, data).then(function () {
        // 请求成功，打印一条信息
        console.log('Log reported successfully.');
    }).catch(function (error) {
        // 请求失败，打印错误信息
        console.error('Log report failed:', error);
    });
}
exports.reportLog = reportLog;
