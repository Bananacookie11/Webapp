"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cypress_1 = require("cypress");
exports.default = (0, cypress_1.defineConfig)({
    e2e: {
        supportFile: 'tests/e2e/support/e2e.{js,jsx,ts,tsx}',
        specPattern: 'tests/e2e/specs/**/*.cy.{js,jsx,ts,tsx}',
        videosFolder: 'tests/e2e/videos',
        screenshotsFolder: 'tests/e2e/screenshots',
        baseUrl: 'http://localhost:5173',
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
    },
});
