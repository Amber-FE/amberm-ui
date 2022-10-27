import type { PropType } from 'vue'

export type directionType = 'zuo' | 'you' | 'shang' | 'xia'
export const cellProps = {
  title: {
    type: [Number, String]
  },
  value: {
    type: [Number, String]
  },
  label: {
    type: String
  },
  size: {
    type: String
  },
  icon: {
    type: String,
    default: ''
  },
  url: {
    type: String
  },
  to: {
    type: [String, Object]
  },
  replace: {
    type: Boolean,
    default: false
  },
  border: {
    type: Boolean,
    default: true
  },
  clickable: {
    type: Boolean,
    default: null
  },
  isLink: {
    type: Boolean,
    default: false
  },
  required: {
    type: Boolean,
    default: false
  },
  center: {
    type: Boolean,
    default: false
  },
  arrowDirection: {
    type: String as PropType<directionType>,
    default: 'you'
  },
  titleStyle: {
    type: [String, Array, Object]
  },
  titleClass: {
    type: [String, Array, Object]
  },
  valueClass: {
    type: [String, Array, Object]
  },
  labelClass: {
    type: [String, Array, Object]
  }
}
