import { PropType } from "vue";

export type ButtonType =
  | "default"
  | "primary"
  | "success"
  | "warning"
  | "danger";

export type ButtonSize = 'normal' | 'large' | 'small' | 'mini';

export const buttonProps = {
  type: {
    type: String as PropType<ButtonType>,
    default: "default",
  },
  size: {
    type: String as PropType<ButtonSize>,
    default: "normal",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false
  },
  loadingText: {
    type: String,
    default: ''
  },
  round: {
    type: Boolean,
    default: false
  }
};
