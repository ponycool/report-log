# Report Log

上报日志

## 安装

```shell
npm i @pony-cool/report-log

# OR

yarn add @pony-cool/report-log

```

## 使用

```js
import {setReportLogUrl, reportLog} from 'report-log';

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

通过 web 方式来同步: [/sync/@pony-cool/report-log](https://www.npmmirror.com/sync/@pony-cool/report-log)