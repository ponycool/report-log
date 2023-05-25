
declare module 'report-log' {
    export interface params {
        // 事件名称
        event: string;
        // 事件的额外数据，可选
        params?: Record<string, any>;
    }

    // 用来设置上报日志的 URL 地址
    export function setReportLogUrl(newUrl: string): void;

    // 用来上报日志
    export function reportLog(logParams: params): void;
}