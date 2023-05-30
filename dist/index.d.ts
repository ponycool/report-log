interface params {
    event: string;
    params?: Record<string, any>;
}
declare function setReportLogUrl(url: string): void;
declare function reportLog(params: params): void;
export { setReportLogUrl, reportLog };
