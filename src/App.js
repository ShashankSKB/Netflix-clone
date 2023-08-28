import React from "react";
import Body from "./Components/Body";
import { Provider } from "react-redux";
import store from "./Store/store";

export default function App() {
  return (
    <div>
      <Provider store={store}>
        <Body />
      </Provider>
    </div>
  );
}
