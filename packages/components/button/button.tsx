import { computed, defineComponent, type ExtractPropTypes } from 'vue';
import { useNameSpace } from '../../utils';
import { buttonProps } from './types';
import './button.scss';

const name = useNameSpace('button');

export default defineComponent({
    name: name,
    props: buttonProps,
    setup(props, { slots }) {

        const classes = computed(() => {
            return {
              [name]: true,
              [`${name}-${props.type}`]: true,
              [`${name}-round`]: props.round,
              [`${name}-disabled`]: props.disabled,
              [`${name}-${props.size}`]: props.size
            }
          })
        return () => {
            return (
              <button class={ classes.value }>
                  {/* <span v-if="loadingText" class="amber-button-loading--text">{{ slots.default }}</span> */}
              </button>
            );
        }
    }
})