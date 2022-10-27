import type { RouteLocationRaw } from 'vue-router'
import type { PropType } from 'vue'

export const tabProps = {
  title: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  dot: {
    type: Boolean,
    default: false
  },
  badge: {
    type: String,
    default: ''
  },
  name: {
    type: String,
    default: ''
  },
  url: {
    type: String,
    default: ''
  },
  to: {
    type: [String, Object] as PropType<RouteLocationRaw>
  },
  replace: {
    type: Boolean,
    default: false
  },
  titleStyle: {
    type: String || Object || Array
  },
  titleClass: {
    type: String || Object || Array
  },
  showZeroBadge: {
    type: Boolean,
    default: true
  }
}
