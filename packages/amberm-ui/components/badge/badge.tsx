/* eslint-disable import/no-relative-packages */
import { defineComponent } from 'vue'

import { useNameSpace } from '../../utils'

import { badgeProps } from './types'
import '../../../amberm-icons/dist/style.css'

const name = useNameSpace('badge')

export default defineComponent({
  name,
  props: badgeProps,
  setup(props, { slots }) {
    const renderBadge = () => {
      return <div>666</div>
    }

    return <>{renderBadge()}</>
  }
})
