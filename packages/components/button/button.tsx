import { computed, CSSProperties, defineComponent } from 'vue';
import { useNameSpace } from '../../utils';
import { buttonProps } from './types';
import './button.scss';

const name = useNameSpace('button');

export default defineComponent({
  name,
  props: buttonProps,
  setup(props, { slots }) {
    const classes = computed(() => ({
      [name]: true,
      [`${name}-${props.type}`]: true,
      [`${name}-round`]: props.round,
      [`${name}-disabled`]: props.disabled,
      [`${name}-${props.size}`]: props.size,
    }));

    const renderText = () => {
      let text = '';
      if (props.loadingText) {
        text = props.loadingText;
      } else {
        text = slots.default ? slots.default() : '';
      }
      return <span>{text}</span>;
    };

    const getStyle = () => {
      const { color, plain } = props;
      const style: CSSProperties = {};
      if (color && plain) {
        style.color = color;
        style.background = '#fff';
        style.borderColor = color;
      }
      return style;
    };

    const getAttrs = () => {
      const { disabled, loading } = props;
      return {
        attrs: {
          disabled: disabled || loading,
        },
      };
    };

    return () => {
      const { loading } = props;
      return (
        <button class={classes.value} {...getAttrs()} style={getStyle()}>
          { loading && <amber-icon name="loading" /> }
          { renderText() }
        </button>
      );
    };
  },
});
