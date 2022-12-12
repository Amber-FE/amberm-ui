export const tabsProps = {
  type: { type: String, default: 'line' },
  color: { type: String, default: '#ee0a24' },
  border: { type: Boolean, default: false },
  sticky: { type: Boolean, default: false },
  shrink: { type: Boolean, default: false },
  active: {
    type: [String, Number],
    default: 0
  },
  duration: { type: String, default: 0.3 },
  animated: { type: Boolean, default: false },
  ellipsis: { type: Boolean, default: true },
  swipeable: { type: Boolean, default: false },
  scrollspy: { type: Boolean, default: false },
  offsetTop: { type: [Number, String], default: 0 },
  background: { type: String, default: 'white' },
  lazyRender: { type: Boolean, default: true },
  lineWidth: { type: [Number, String], default: '40px' },
  lineHeight: { type: [Number, String], default: '3px' },
  beforeChange: Function,
  swipeThreshold: { type: [Number, String], default: 0 },
  titleActiveColor: String,
  titleInactiveColor: String
}
