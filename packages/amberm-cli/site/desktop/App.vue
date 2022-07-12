<template>
  <router-view />
</template>
<style lang="scss">
  * {
    padding: 0;
    margin: 0;
  }
  * ::-webkit-scrollbar {
    display: none;
  }
  html,
  body {
    height: 100%;
    width: 100%;
    background: #fff;
    margin: 0;
    padding: 0;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-tap-highlight-color: transparent;
  }

  #app {
    background: #fff;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;

    #nav {
      position: fixed;
      z-index: 10;
      left: 0;
      right: 0;
      height: 57px;
      line-height: 57px;
      text-align: center;
      background: #fff;
      font-weight: bold;
      font-size: 20px;
      color: rgba(51, 51, 51, 1);
      box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.07);
      .back {
        position: absolute;
        left: 0;
        height: 100%;
        width: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
      }
      .translate {
        position: absolute;
        top: 0;
        right: 0;
        height: 100%;
        width: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
      }
    }
    .mobile-content {
      margin-top: 20px;
      padding: 0 15px;
      background: #f7f8fa;
    }
    .nav-black {
      width: 100%;
      height: 57px;
    }

    .demo {
      height: 100%;
      background: #f7f8fa;
      overflow-x: hidden;
      overflow-y: auto;
      padding: 57px 17px 46px 17px;
      &.full {
        padding: 57px 0 46px 0;
        h2 {
          padding-left: 27px;
        }
      }

      &.bg-w {
        background: #fff;
      }

      &::-webkit-scrollbar {
        width: 0;
        background: transparent;
      }
      > h2 {
        margin-top: 30px;
        margin-bottom: 10px;
        font-size: 14px;
        color: rgba(144, 156, 164, 1);
        padding: 0 10px;
        font-weight: normal;
      }
      > p {
        font-size: 12px;
      }

      .card {
        padding: 25px 18px;
        background: rgba(255, 255, 255, 1);
      }
    }
  }
</style>
