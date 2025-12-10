"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_2 = require("@testing-library/react");
const App_1 = require("./App");
test('renders without crashing', () => {
    const { baseElement } = (0, react_2.render)(<App_1.default />);
    expect(baseElement).toBeDefined();
});
