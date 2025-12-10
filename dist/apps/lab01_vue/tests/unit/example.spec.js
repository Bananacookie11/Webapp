"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_utils_1 = require("@vue/test-utils");
const HomePage_vue_1 = require("@/views/HomePage.vue");
const vitest_1 = require("vitest");
(0, vitest_1.describe)('HomePage.vue', () => {
    (0, vitest_1.test)('renders home vue', () => {
        const wrapper = (0, test_utils_1.mount)(HomePage_vue_1.default);
        (0, vitest_1.expect)(wrapper.text()).toMatch('Ready to create an app?');
    });
});
