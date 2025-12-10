"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@ionic/react");
const ExploreContainer_1 = require("../components/ExploreContainer");
require("./Home.css");
const Home = () => {
    return (<react_1.IonPage>
      <react_1.IonHeader>
        <react_1.IonToolbar>
          <react_1.IonTitle>Blank</react_1.IonTitle>
        </react_1.IonToolbar>
      </react_1.IonHeader>
      <react_1.IonContent fullscreen>
        <react_1.IonHeader collapse="condense">
          <react_1.IonToolbar>
            <react_1.IonTitle size="large">Blank</react_1.IonTitle>
          </react_1.IonToolbar>
        </react_1.IonHeader>
        <ExploreContainer_1.default />
      </react_1.IonContent>
    </react_1.IonPage>);
};
exports.default = Home;
