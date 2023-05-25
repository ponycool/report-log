import axios from 'axios';

// 表示上报日志的参数类型
interface params {
    // 事件名称
    event: string;
    // 事件的额外数据，可选
    params?: Record<string, any>;
}

// 定义一个变量，表示上报日志的 URL 地址
let url = '/api/v1/open/log/report';

// 定义一个函数，用来设置上报日志的 URL 地址
function setReportLogUrl(newUrl: string): void {
    // 把 logUrl 的值更新为 newLogUrl
    url = newUrl;
}

// 定义一个函数，用来上报日志
function reportLog(params: params): void {
    // 获取当前页面的 title 和 url
    const title = document.title;
    const url = window.location.href;

    // 构造一个对象，包含 title、url 和 logParams
    const data = {
        title,
        url,
        ...params,
    };

    // 使用 axios 发送一个 POST 请求到 logUrl，并传入 data
    axios.post(url, data).then(() => {
        // 请求成功，打印一条信息
        console.log('Log reported successfully.');
    }).catch((error) => {
        // 请求失败，打印错误信息
        console.error('Log report failed:', error);
    });
}


export {setReportLogUrl, reportLog}