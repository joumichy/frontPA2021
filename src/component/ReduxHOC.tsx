import React from "react";
import {Provider} from "react-redux";
import store from "../redux";


export default function ReduxHOC(Component:any) {
  return (props: any) => {
    return <Provider store={store}>
      <Component {...props}/>
    </Provider>
  }
}