# Report Log

上报日志

## 安装

```shell
npm i @ponycool/report-log

# OR

yarn add @ponycool/report-log

```

## 使用

```js
import {setReportLogUrl, reportLog} from '@ponycool/report-log';

setReportLogUrl('https://example.com/new-log');
reportLog({event: 'click', params: {button: 'submit'}});
```

## 编译

```shell
npm run build

# OR

make build

# OR

make

```

## 阿里云源同步

通过 web 方式来同步: [/sync/@ponycool/report-log](https://www.npmmirror.com/sync/@ponycool/report-log)