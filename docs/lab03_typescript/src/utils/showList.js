"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showList = showList;
function showList(items) {
    items.forEach((item, index) => {
        console.log(`${index + 1}. ${JSON.stringify(item)}`);
    });
}
//# sourceMappingURL=showList.js.map