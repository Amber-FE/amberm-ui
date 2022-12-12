import { computed, defineComponent } from 'vue'
import type { CSSProperties } from 'vue'

import { useNameSpace } from '../../utils'

import { tabsProps } from './types'

const name = useNameSpace('tabs')
export default defineComponent({
  name,
  props: tabsProps,
  setup(props) {
    return () => {
      return <div>123</div>
    }
  }
})
