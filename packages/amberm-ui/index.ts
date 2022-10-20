/* eslint-disable */
import { App as Application, Plugin } from "vue";
import * as components from "./components/index";
import { setVueInstance } from "./utils";

const installs: Exclude<Plugin["install"], undefined> = (
  instance: Application
) => {
  setVueInstance(instance);
  for (const componentKey in components) {
    instance.use((components as any)[componentKey]);
  }
};

export   default {
version:'1.01',
};
export const install=installs


export * from "./components";