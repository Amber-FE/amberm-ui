export const tabbarProps = {
  modelValue: {
    type: [Number, String],
    default: 0
  },
  fixed: {
    type: Boolean,
    default: true
  },
  border: {
    type: Boolean,
    default: true
  },
  ZIndex: {
    type: Number,
    default: 1
  },
  activeColor: {
    type: String,
  },
  inActiveColor: {
    type: String,
  },
  route: {
    type: Boolean,
    default: false
  },
  placeholder: {
    type: Boolean,
    default: false
  }
}
