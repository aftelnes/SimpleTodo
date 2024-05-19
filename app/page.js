"use client";
import { Provider } from "react-redux";

import store from "./store";
import App from "./components/App";

export default function Home() {
  return (
    <div>
      <Provider store={store}>
        <App />
      </Provider>
    </div>
  );
}
