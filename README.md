# Report Log

上报日志

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