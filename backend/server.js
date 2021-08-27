var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import chalk from 'chalk';
import app from './app';
var PORT = process.env.PORT || 5000;
app.listen(PORT, function () { return console.log(chalk.bold.yellowBright(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Server is running on http://localhost:", ""], ["Server is running on http://localhost:", ""])), PORT)); });
var templateObject_1;
//# sourceMappingURL=server.js.map