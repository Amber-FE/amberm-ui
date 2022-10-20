<template>
  <div class="container">
    <h2>{{ $t('button.type') }}</h2>
    <section class="container-content">
      <am-button type="default" @click="handleClick">
        {{ $t('button.default') }}
      </am-button>
      <am-button type="primary">
        {{ $t('button.primary') }}
      </am-button>
      <am-button type="success">
        {{ $t('button.success') }}
      </am-button>
      <am-button type="info">
        {{ $t('button.info') }}
      </am-button>
      <am-button type="warning">
        {{ $t('button.warning') }}
      </am-button>
      <am-button type="danger">
        {{ $t('button.danger') }}
      </am-button>
    </section>
    <h2>{{ $t('button.disabled') }}</h2>
    <section class="container-content">
      <am-button disabled type="default" @click="handleClick">
        {{ $t('button.default') }}
      </am-button>
      <am-button disabled type="primary">
        {{ $t('button.primary') }}
      </am-button>
      <am-button disabled type="success">
        {{ $t('button.success') }}
      </am-button>
      <am-button disabled type="info">
        {{ $t('button.info') }}
      </am-button>
      <am-button disabled type="warning">
        {{ $t('button.warning') }}
      </am-button>
      <am-button disabled type="danger">
        {{ $t('button.danger') }}
      </am-button>
    </section>
    <h2>{{ $t('button.plain') }}</h2>
    <section class="container-content">
      <am-button color="#333" plain>
        {{ $t('button.default') }}
      </am-button>
      <am-button color="#2a78bf" plain>
        {{ $t('button.default') }}
      </am-button>
      <am-button color="#f56c6c" plain>
        {{ $t('button.default') }}
      </am-button>
    </section>
    <h2>{{ $t('button.shape') }}</h2>
    <section class="container-content">
      <am-button type="primary">
        {{ $t('button.primary') }}
      </am-button>
      <am-button round type="success">
        {{ $t('button.success') }}
      </am-button>
    </section>
    <h2>{{ $t('button.loading') }}</h2>
    <section class="container-content">
      <am-button loading type="primary" :loading-text="$t('button.loading')">
123
</am-button>
      <am-button loading type="success" :loading-text="$t('button.loading')" />
    </section>
    <h2>{{ $t('button.size') }}</h2>
    <section class="container-content">
      <am-button size="large">
        {{ $t('button.large') }}
      </am-button>
      <am-button size="normal">
        {{ $t('button.normal') }}
      </am-button>
      <am-button size="small">
        {{ $t('button.small') }}
      </am-button>
      <am-button size="mini">
        {{ $t('button.mini') }}
      </am-button>
    </section>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'ButtonDemo',
    setup() {
      const methods = {
        handleClick(e: Event) {
          console.log('点击了按钮', e)
        }
      }

      return {
        ...methods
      }
    }
  })
</script>
<style lang="scss" scoped>
  .container {
    position: relative;
    h2 {
      padding: 10px 0;
      font-weight: 400;
      font-size: 14px;
      color: #5e6d82;
    }
    &-content {
      overflow: hidden;
      .am-button {
        margin-bottom: 10px;
      }
    }
  }
</style>
