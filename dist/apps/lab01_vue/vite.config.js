"use strict";
/// <reference types="vitest" />
Object.defineProperty(exports, "__esModule", { value: true });
const plugin_legacy_1 = require("@vitejs/plugin-legacy");
const plugin_vue_1 = require("@vitejs/plugin-vue");
const path_1 = require("path");
const vite_1 = require("vite");
// https://vitejs.dev/config/
exports.default = (0, vite_1.defineConfig)({
    plugins: [
        (0, plugin_vue_1.default)(),
        (0, plugin_legacy_1.default)()
    ],
    build: {
        outDir: path_1.default.resolve(__dirname, '../../docs/lab01_vue'),
        emptyOutDir: true
    },
    resolve: {
        alias: {
            '@': path_1.default.resolve(__dirname, './src'),
        },
    },
    test: {
        globals: true,
        environment: 'jsdom'
    }
});
