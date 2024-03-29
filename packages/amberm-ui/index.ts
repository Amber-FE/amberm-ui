/* eslint-disable */
import { App as Application, Plugin } from "vue";
import * as components from "./components/index";
import { setVueInstance } from "./utils";
import  Icon  from "../amberm-icons/index";

const installs: Exclude<Plugin["install"], undefined> = (
  instance: Application
) => {
  setVueInstance(instance);
  for (const componentKey in components) {
    instance.use((components as any)[componentKey]);
  }
  instance.use(Icon)
};


export   default {
version:'1.01',
};
export const install=installs


export * from "./components";