import { computed, defineComponent } from 'vue'
import type { CSSProperties } from 'vue'

import { useNameSpace } from '../../utils'

import { tabProps } from './types'

const name = useNameSpace('tab')
export default defineComponent({
  name,
  props: tabProps,
  setup(props) {
    return () => {
      return <div></div>
    }
  }
})
