import { getCurrentInstance } from 'vue'

function useRouter() {
  const { proxy } = getCurrentInstance()
  return proxy.$router || null
}

export default useRouter
