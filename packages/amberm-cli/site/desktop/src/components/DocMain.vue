<template>
  <div class="Main">
    <g-markdown>
      <router-view />
      <!-- <Md /> -->
    </g-markdown>
  </div>
</template>
<script setup>
  import { onMounted } from 'vue'

  import '../../../common/style/base.scss'
  import '../../../common/style/highlight.scss'
  import { copyToClipboard } from '../../../common/utils/index'

  const copyAction = () => {
    const codeBoxes = document.querySelectorAll('.amberm-doc-content pre code')

    if (!codeBoxes || !codeBoxes.length) {
      return
    }

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < codeBoxes.length; i++) {
      const item = codeBoxes[i]
      let timer = null

      item.addEventListener('click', () => {
        if (timer) return
        const content = item.innerText
        copyToClipboard(content)
        item.classList.add('code-copy-success')

        timer = setTimeout(() => {
          item.classList.remove('code-copy-success')
          timer = null
        }, 1400)
      })
    }
  }
  onMounted(() => {
    copyAction()
  })
</script>
<style lang="scss">
  @import '../../../common/style/var.scss';
  @import '../../../common/style/common.scss';

  .Main {
    position: relative;
    flex: 1;
    padding: 0 0 75px;
    box-sizing: border-box;
    padding-left: 220px;
    overflow: hidden;
    padding-right: 384px;
    g-markdown {
      width: 100%;

      .markdown-body {
        padding: 24px;
        overflow: hidden;
        .custom-block {
          &.tip {
            padding: 8px 16px;
            background-color: #ecf8ff;
            border-radius: 4px;
            border-left: 5px solid #50bfff;
            margin: 20px 0;
          }
        }
        .amberm-doc-content {
          margin-bottom: 24px;
          padding: 24px;
          background-color: $themeColor2;
          border-radius: $amberm-doc-border-radius;
          box-shadow: 0 8px 12px #ebedf0;

          & > pre code {
            position: relative;
            padding-right: 30px;
            pointer-events: none;
            overflow: initial;
          }

          & > pre:hover {
            code::before {
              position: absolute;
              z-index: 9;
              right: 14px;
              top: 11px;
              width: 20px;
              height: 20px;
              background-position: center;
              background-size: contain;
              background-image: url(data:image/png;base64,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);
              cursor: pointer;
              content: '';
              display: block;
              pointer-events: auto;
            }
          }

          & > pre .code-copy-success::after {
            content: 'Copied!';
            display: block;
            position: absolute;
            z-index: 9;
            right: -4px;
            color: $amberm-doc-copy-color;
            top: 0;
            animation: ease-out code-copy-animation 0.2s;
            animation-fill-mode: forwards;
          }

          @keyframes code-copy-animation {
            0% {
              top: 0;
              opacity: 0;
            }

            100% {
              top: -20px;
              opacity: 1;
            }
          }

          & > p a,
          & > ul a,
          & > table a,
          & > blockquote a {
            margin: 0 1px;
            color: var(amberm-doc-blue);
            -webkit-font-smoothing: auto;

            &:hover {
              color: darken($amberm-doc-blue, 10%);
            }

            &:active {
              color: darken($amberm-doc-blue, 20%);
            }
          }

          & > h3,
          & > h4,
          & > h5,
          & > h6 {
            color: $textColor;
            font-weight: normal;
            line-height: 1.6;

            &[id] {
              cursor: pointer;
            }
          }

          & > h3 {
            margin-bottom: 16px;
            font-weight: 600;
            font-size: 20px;
          }

          & > h4 {
            margin: 24px 0 12px;
            font-weight: 600;
            font-size: 18px;
          }

          & > h5 {
            margin: 24px 0 12px;
            font-weight: 600;
            font-size: 16px;
          }

          & > p {
            margin-top: 8px;
          }

          & > p,
          & > blockquote p {
            color: $textColor;
            font-size: 15px;
            line-height: 26px;

            strong {
              color: black;
            }
          }

          & > table {
            width: 100%;
            margin-top: 12px;
            color: $textColor;
            font-size: 14px;
            line-height: 1.5;
            border-collapse: collapse;

            th {
              padding: 8px 10px;
              font-weight: 600;
              text-align: left;

              &:first-child {
                padding-left: 0;
              }

              &:last-child {
                padding-right: 0;
              }
            }

            td {
              padding: 8px;
              border-top: 1px solid $amberm-doc-code-background-color;

              &:first-child {
                padding-left: 0;

                // version tag
                code {
                  margin: 0;
                  padding: 2px 6px;
                  color: var(amberm-doc-blue);
                  font-weight: 600;
                  font-size: 11px;
                  background-color: $themeColor;
                  border-radius: 20px;
                }
              }

              &:last-child {
                padding-right: 0;
              }
            }

            em {
              display: inline-block;
              color: $amberm-doc-green;
              font-size: 14px;
              font-family: $amberm-doc-code-font-family;
              font-style: normal;
              max-width: 300px;
              -webkit-font-smoothing: auto;
            }
          }

          & > ul {
            margin: 12px 0;
          }

          & > ul li,
          & > ol li {
            position: relative;
            margin: 5px 0 5px 10px;
            padding-left: 15px;
            color: $textColor;
            font-size: 15px;
            line-height: 26px;

            &::before {
              position: absolute;
              top: 0;
              left: 0;
              box-sizing: border-box;
              width: 6px;
              height: 6px;
              margin-top: 10px;
              border: 1px solid $amberm-doc-dark-grey;
              border-radius: 50%;
              content: '';
            }
          }

          & > hr {
            margin: 30px 0;
            border: 0 none;
            border-top: 1px solid #eee;
          }

          & > p code,
          & > ul code,
          & > ol code,
          & > table code {
            display: inline;
            margin: 0 2px;
            padding: 2px 5px;
            font-size: 14px;
            font-family: inherit;
            font-weight: 600;
            word-break: keep-all;
            border-radius: 4px;
            -webkit-font-smoothing: antialiased;
          }

          & > blockquote {
            margin: 16px 0 0;
            padding: 16px;
            background-color: #ecf9ff;
            border-radius: var(amberm-doc-border-radius);
          }

          & > img,
          & > p img {
            width: 100%;
            margin: 16px 0;
            border-radius: var(amberm-doc-border-radius);
          }
        }

        h1,
        h2 {
          color: var(amberm-doc-black);
          font-weight: normal;
          line-height: 1.5;

          &[id] {
            cursor: pointer;
          }
        }

        h1 {
          margin: 0 0 30px;
          font-size: 34px;
          cursor: default;
        }

        h2 {
          margin: 45px 0 20px;
          font-size: 26px;
        }

        &--changelog {
          strong {
            display: block;
            margin: 24px 0 12px;
            font-weight: 600;
            font-size: 15px;
          }

          h3 {
            + p code {
              margin: 0;
            }

            a {
              color: inherit;
              font-size: 20px;
            }
          }
          .tip {
            background-color: #f3f5f7;
            border-color: #42b983;
            padding: 0.1rem 1.5rem;
            border-left: 0.5rem solid #42b983;
            position: relative;
          }
          .header-anchor {
            color: #1a9dff;
            font-size: 0.85em;
            float: left;
            margin-left: -0.87em;
            padding-right: 0.23em;
            margin-top: 0.125em;
            opacity: 0;
            &:hover {
              opacity: 0.7;
            }
          }
        }
      }
    }
  }
</style>
