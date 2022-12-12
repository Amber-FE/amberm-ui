import { defineComponent, computed, openBlock, createElementBlock, normalizeStyle, createElementVNode, resolveComponent, createBlock } from "vue";
if (typeof window !== "undefined") {
  let loadSvg = function() {
    var body = document.body;
    var svgDom = document.getElementById("__svg__icons__dom__");
    if (!svgDom) {
      svgDom = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svgDom.style.position = "absolute";
      svgDom.style.width = "0";
      svgDom.style.height = "0";
      svgDom.id = "__svg__icons__dom__";
      svgDom.setAttribute("xmlns", "http://www.w3.org/2000/svg");
      svgDom.setAttribute("xmlns:link", "http://www.w3.org/1999/xlink");
    }
    svgDom.innerHTML = '<symbol class="icon" viewBox="0 0 1024 1024"  id="amberm-agent-linkage"><defs><style>@font-face{font-family:feedback-iconfont;src:url(//at.alicdn.com/t/font_1031158_u69w8yhxdu.woff2?t=1630033759944) format("woff2"),url(//at.alicdn.com/t/font_1031158_u69w8yhxdu.woff?t=1630033759944) format("woff"),url(//at.alicdn.com/t/font_1031158_u69w8yhxdu.ttf?t=1630033759944) format("truetype")}</style></defs><path d="M557.821 620.015h-87.828a15.474 15.474 0 1 1 0-30.893h87.828a34.27 34.27 0 0 0 34.27-34.27V271.86a34.27 34.27 0 0 0-34.27-34.27h-282.99a34.27 34.27 0 0 0-34.49 34.27v283.318a34.27 34.27 0 0 0 34.49 33.943h77.476a15.474 15.474 0 0 1 0 30.893H274.83a65.381 65.381 0 0 1-65.381-65.381V271.86a65.381 65.381 0 0 1 65.381-65.381h283.318a65.381 65.381 0 0 1 65.381 65.38V555.18a65.381 65.381 0 0 1-65.708 64.836z" /><path d="M749.17 817.52H465.852a65.381 65.381 0 0 1-65.381-65.38V468.82a65.381 65.381 0 0 1 65.38-65.38h76.66a15.474 15.474 0 0 1 0 30.892h-76.55a34.325 34.325 0 0 0-34.27 34.27v283.318a34.27 34.27 0 0 0 34.27 34.27h283.318a34.27 34.27 0 0 0 34.27-34.27V468.603a34.325 34.325 0 0 0-34.27-34.27h-80.8a15.474 15.474 0 1 1 0-30.893h80.69a65.381 65.381 0 0 1 65.382 65.381V752.14a65.381 65.381 0 0 1-65.381 65.381z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="amberm-agent-package"><defs><style>@font-face{font-family:feedback-iconfont;src:url(//at.alicdn.com/t/font_1031158_u69w8yhxdu.woff2?t=1630033759944) format("woff2"),url(//at.alicdn.com/t/font_1031158_u69w8yhxdu.woff?t=1630033759944) format("woff"),url(//at.alicdn.com/t/font_1031158_u69w8yhxdu.ttf?t=1630033759944) format("truetype")}</style></defs><path d="M733.314 459.58a158.002 158.002 0 1 0-266.643-1.483 254.917 254.917 0 0 0-34.02 26.557 140.76 140.76 0 0 0-28.133-29.338 100.345 100.345 0 1 0-168.94-.974 140.065 140.065 0 0 0-57.612 112.952v.324c.741 64.193 105.999 88.85 175.012 78.793-16.87 218.394 492.268 202.08 492.963 20.393A244.813 244.813 0 0 0 733.314 459.58zM600.387 262.46A111.932 111.932 0 1 1 488.5 374.344a112.024 112.024 0 0 1 111.886-111.886zM320.302 346.72a54.135 54.135 0 1 1-53.95 54.042 54.181 54.181 0 0 1 53.95-54.042zM361.6 597.374a172.787 172.787 0 0 1-119.301-12.236c-14.693-8.389-17.984-15.758-17.984-17.844a94.83 94.83 0 0 1 44.727-80.461 97.332 97.332 0 0 0 101.503.556 94.505 94.505 0 0 1 30.127 31.749 243.145 243.145 0 0 0-39.072 78.236zm437.994 69.152c0 20.115-18.03 41.714-49.269 59.697-138.211 78.793-353.037 14.832-352.249-61.087a200.504 200.504 0 0 1 98.537-172.278 157.585 157.585 0 0 0 48.527 29.246 87.228 87.228 0 0 1 28.736 46.673A376.304 376.304 0 0 1 532.857 684a440.033 440.033 0 0 0 68.179 38.052A443.092 443.092 0 0 0 669.168 684a377.046 377.046 0 0 1-40.972-115.223 87.645 87.645 0 0 1 29.292-47.23 157.307 157.307 0 0 0 45.19-27.484 201.894 201.894 0 0 1 96.915 172.463z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="amberm-desktop"><defs><style>@font-face{font-family:feedback-iconfont;src:url(//at.alicdn.com/t/font_1031158_u69w8yhxdu.woff2?t=1630033759944) format("woff2"),url(//at.alicdn.com/t/font_1031158_u69w8yhxdu.woff?t=1630033759944) format("woff"),url(//at.alicdn.com/t/font_1031158_u69w8yhxdu.ttf?t=1630033759944) format("truetype")}</style></defs><path d="M533.333 682.667V768h128v42.667H362.667V768h128v-85.333H149.333V213.333h725.334v469.334H533.333zm0-42.667H832V256H192v384h341.333z" fill="currentColor" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="amberm-flow-packet-copy"><defs><style>@font-face{font-family:feedback-iconfont;src:url(//at.alicdn.com/t/font_1031158_u69w8yhxdu.woff2?t=1630033759944) format("woff2"),url(//at.alicdn.com/t/font_1031158_u69w8yhxdu.woff?t=1630033759944) format("woff"),url(//at.alicdn.com/t/font_1031158_u69w8yhxdu.ttf?t=1630033759944) format("truetype")}</style></defs><path d="M810.817 507.303a28.906 28.906 0 1 0 57.812 0 28.906 28.906 0 1 0-57.812 0ZM810.817 610.642a28.906 28.906 0 1 0 57.812 0 28.906 28.906 0 1 0-57.812 0ZM810.817 713.259a28.906 28.906 0 1 0 57.812 0 28.906 28.906 0 1 0-57.812 0Z" /><path d="M834.665 772.517c-15.176 0-27.461 12.285-27.461 27.46 0 39.024-31.797 70.82-70.82 70.82H294.12c-39.023 0-70.82-31.796-70.82-70.82V419.862c0-39.024 31.797-70.82 70.82-70.82h442.987c39.023 0 70.82 31.796 70.82 70.82 0 15.175 12.285 27.46 27.46 27.46s27.461-12.285 27.461-27.46c0-68.652-55.644-125.02-125.019-125.02h-13.008V171.27c0-62.871-50.585-113.457-113.456-113.457H422.752c-62.87 0-113.456 50.586-113.456 113.457v123.574h-13.008c-68.652 0-125.02 55.644-125.02 125.019v380.115c0 68.652 55.645 125.02 125.02 125.02h13.73v28.906c0 15.175 12.285 27.46 27.461 27.46s27.461-12.285 27.461-27.46v-29.63h306.405v29.63c0 15.175 12.285 27.46 27.46 27.46s27.462-12.285 27.462-27.46v-29.63h13.73c68.652 0 125.02-55.644 125.02-125.018-3.614-14.453-15.9-26.738-30.352-26.738zM362.049 171.269c0-32.52 26.739-59.258 59.258-59.258H609.92c32.519 0 59.257 26.738 59.257 59.258v123.574H362.05V171.269z" /><path d="M463.22 763.845c13.009 0 23.126-10.117 23.126-23.125V483.455c0-9.394-5.781-17.343-14.453-20.957s-18.79-1.445-25.293 5.059l-81.66 82.382c-8.672 8.672-8.672 23.848 0 32.52 8.672 8.672 23.848 8.672 32.52 0l42.636-42.637v201.62c.723 11.563 10.84 22.403 23.125 22.403zm104.063-302.792c-13.008 0-23.125 10.117-23.125 23.125V740.72c0 9.394 5.781 17.344 14.453 20.957 2.89 1.445 5.781 1.445 8.672 1.445 5.781 0 11.562-2.168 16.621-6.504l82.383-82.382c8.671-8.672 8.671-23.848 0-32.52-8.672-8.672-23.848-8.672-32.52 0l-42.636 42.637V483.455c-.723-12.285-10.84-22.402-23.848-22.402z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="amberm-flow-packet"><defs><style>@font-face{font-family:feedback-iconfont;src:url(//at.alicdn.com/t/font_1031158_u69w8yhxdu.woff2?t=1630033759944) format("woff2"),url(//at.alicdn.com/t/font_1031158_u69w8yhxdu.woff?t=1630033759944) format("woff"),url(//at.alicdn.com/t/font_1031158_u69w8yhxdu.ttf?t=1630033759944) format("truetype")}</style></defs><path d="M810.817 507.303a28.906 28.906 0 1 0 57.812 0 28.906 28.906 0 1 0-57.812 0ZM810.817 610.642a28.906 28.906 0 1 0 57.812 0 28.906 28.906 0 1 0-57.812 0ZM810.817 713.259a28.906 28.906 0 1 0 57.812 0 28.906 28.906 0 1 0-57.812 0Z" /><path d="M834.665 772.517c-15.176 0-27.461 12.285-27.461 27.46 0 39.024-31.797 70.82-70.82 70.82H294.12c-39.023 0-70.82-31.796-70.82-70.82V419.862c0-39.024 31.797-70.82 70.82-70.82h442.987c39.023 0 70.82 31.796 70.82 70.82 0 15.175 12.285 27.46 27.46 27.46s27.461-12.285 27.461-27.46c0-68.652-55.644-125.02-125.019-125.02h-13.008V171.27c0-62.871-50.585-113.457-113.456-113.457H422.752c-62.87 0-113.456 50.586-113.456 113.457v123.574h-13.008c-68.652 0-125.02 55.644-125.02 125.019v380.115c0 68.652 55.645 125.02 125.02 125.02h13.73v28.906c0 15.175 12.285 27.46 27.461 27.46s27.461-12.285 27.461-27.46v-29.63h306.405v29.63c0 15.175 12.285 27.46 27.46 27.46s27.462-12.285 27.462-27.46v-29.63h13.73c68.652 0 125.02-55.644 125.02-125.018-3.614-14.453-15.9-26.738-30.352-26.738zM362.049 171.269c0-32.52 26.739-59.258 59.258-59.258H609.92c32.519 0 59.257 26.738 59.257 59.258v123.574H362.05V171.269z" /><path d="M463.22 763.845c13.009 0 23.126-10.117 23.126-23.125V483.455c0-9.394-5.781-17.343-14.453-20.957s-18.79-1.445-25.293 5.059l-81.66 82.382c-8.672 8.672-8.672 23.848 0 32.52 8.672 8.672 23.848 8.672 32.52 0l42.636-42.637v201.62c.723 11.563 10.84 22.403 23.125 22.403zm104.063-302.792c-13.008 0-23.125 10.117-23.125 23.125V740.72c0 9.394 5.781 17.344 14.453 20.957 2.89 1.445 5.781 1.445 8.672 1.445 5.781 0 11.562-2.168 16.621-6.504l82.383-82.382c8.671-8.672 8.671-23.848 0-32.52-8.672-8.672-23.848-8.672-32.52 0l-42.636 42.637V483.455c-.723-12.285-10.84-22.402-23.848-22.402z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="amberm-onekey-add"><defs><style>@font-face{font-family:feedback-iconfont;src:url(//at.alicdn.com/t/font_1031158_u69w8yhxdu.woff2?t=1630033759944) format("woff2"),url(//at.alicdn.com/t/font_1031158_u69w8yhxdu.woff?t=1630033759944) format("woff"),url(//at.alicdn.com/t/font_1031158_u69w8yhxdu.ttf?t=1630033759944) format("truetype")}</style></defs><path d="M389.229 642.671a23.701 23.701 0 0 0-31.601 35.078l18.96 17.223H229.484a23.701 23.701 0 1 0 0 47.401h151.213l-24.175 24.333a23.701 23.701 0 0 0 16.748 40.45 24.175 24.175 0 0 0 16.749-6.952l64.309-64.467a23.227 23.227 0 0 0 6.952-17.223 23.543 23.543 0 0 0-7.742-16.906z" /><path d="M759.912 332.03h-118.82V282.26a72.841 72.841 0 0 0-72.684-72.841H453.064a72.999 72.999 0 0 0-72.841 72.84v49.773H264.088a67.943 67.943 0 0 0-68.101 67.784V612.65a23.701 23.701 0 0 0 47.402 0v-47.402a66.837 66.837 0 0 0 21.173 3.634h494.56a66.837 66.837 0 0 0 21.489-4.108v182.024a20.383 20.383 0 0 1-20.383 20.382H521.006a23.701 23.701 0 0 0 0 47.402h238.906a67.943 67.943 0 0 0 68.101-67.784V399.183a67.943 67.943 0 0 0-68.1-67.152zM428.1 282.26a25.439 25.439 0 0 1 25.439-25.44h115.344a25.439 25.439 0 0 1 25.281 25.44v49.772H427.625zm331.813 238.747H264.878a21.173 21.173 0 0 1-21.489-21.173v-98.438a21.173 21.173 0 0 1 21.173-21.172h494.56a21.173 21.173 0 0 1 21.489 21.172v99.229a21.173 21.173 0 0 1-21.489 20.382z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="amberm-package"><defs><style>@font-face{font-family:feedback-iconfont;src:url(//at.alicdn.com/t/font_1031158_u69w8yhxdu.woff2?t=1630033759944) format("woff2"),url(//at.alicdn.com/t/font_1031158_u69w8yhxdu.woff?t=1630033759944) format("woff"),url(//at.alicdn.com/t/font_1031158_u69w8yhxdu.ttf?t=1630033759944) format("truetype")}</style></defs><path d="M490.582 248.633c7.467 0 13.577 6.11 13.577 13.578v54.309h271.547v391.028H504.16v54.31c0 7.467-6.11 13.577-13.577 13.577h-228.1c-7.467 0-13.577-6.11-13.577-13.578V262.211c0-7.468 6.11-13.578 13.577-13.578h228.1m0-40.732h-228.1c-30.006 0-54.31 24.304-54.31 54.31v499.646c0 30.006 24.304 54.31 54.31 54.31h228.1c30.006 0 54.31-24.304 54.31-54.31V748.28h271.546V275.788H544.891V262.21c0-30.006-24.303-54.31-54.31-54.31z" /><path d="M544.891 316.52H504.16v391.028h40.732V316.52zM464.785 304.98H288.279v40.731h176.506V304.98zM410.475 379.655H288.28v40.732h122.196v-40.732zM464.785 454.33H288.279v40.732h176.506V454.33zM410.475 529.006H288.28v40.732h122.196v-40.732zM464.785 603.681H288.279v40.732h176.506v-40.732zM410.475 678.357H288.28v40.732h122.196v-40.732zM695.6 381.012H573.404v40.733H695.6v-40.733zM749.91 455.688H573.403v40.732h176.505v-40.732zM695.6 530.363H573.404v40.732H695.6v-40.732zM749.91 605.039H573.403v40.732h176.505v-40.732z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="amberm-plat-and-package"><defs><style>@font-face{font-family:feedback-iconfont;src:url(//at.alicdn.com/t/font_1031158_u69w8yhxdu.woff2?t=1630033759944) format("woff2"),url(//at.alicdn.com/t/font_1031158_u69w8yhxdu.woff?t=1630033759944) format("woff"),url(//at.alicdn.com/t/font_1031158_u69w8yhxdu.ttf?t=1630033759944) format("truetype")}</style></defs><path d="M492.165 206.48a95.228 95.228 0 0 1 95.228 95.228l-.031 39.67h134.914a95.228 95.228 0 0 1 95.244 95.229v285.685a95.228 95.228 0 0 1-95.228 95.228H436.607a95.228 95.228 0 0 1-95.228-95.228V555.635h-39.671a95.228 95.228 0 0 1-95.228-95.197v-158.73a95.228 95.228 0 0 1 95.228-95.228h190.457zm230.127 182.528-134.915-.015v71.429a95.228 95.228 0 0 1-95.212 95.228l-103.172-.015v166.657a47.63 47.63 0 0 0 44.81 47.536l2.82.078h285.669a47.63 47.63 0 0 0 47.536-44.81l.078-2.804V436.607a47.63 47.63 0 0 0-44.81-47.52l-2.804-.094zm-71.21 214.256a15.668 15.668 0 0 1 15.668 15.668l-.016 31.93h31.962a15.668 15.668 0 0 1 15.668 15.669v.423a15.668 15.668 0 0 1-15.668 15.667l-31.962-.015v31.962a15.668 15.668 0 0 1-15.667 15.668h-.392a15.668 15.668 0 0 1-15.668-15.668l-.015-31.962H603.06a15.668 15.668 0 0 1-15.668-15.668v-.392a15.668 15.668 0 0 1 15.668-15.667l31.93-.016v-31.93a15.668 15.668 0 0 1 15.668-15.669h.423zm-158.917-349.17H301.708a47.63 47.63 0 0 0-47.536 44.81l-.078 2.804v158.714a47.63 47.63 0 0 0 44.81 47.536l2.804.078 39.67-.016v-71.413a95.228 95.228 0 0 1 95.229-95.228h103.156v-39.671a47.63 47.63 0 0 0-44.81-47.536l-2.788-.078zm47.598 134.899H436.607a47.63 47.63 0 0 0-47.52 44.81l-.094 2.82v71.397h103.172a47.63 47.63 0 0 0 47.536-44.81l.078-2.788-.016-71.43z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="amberm-platform"><defs><style>@font-face{font-family:feedback-iconfont;src:url(//at.alicdn.com/t/font_1031158_u69w8yhxdu.woff2?t=1630033759944) format("woff2"),url(//at.alicdn.com/t/font_1031158_u69w8yhxdu.woff?t=1630033759944) format("woff"),url(//at.alicdn.com/t/font_1031158_u69w8yhxdu.ttf?t=1630033759944) format("truetype")}</style></defs><path d="M112 712h799.92c.24 0 .08-560 .08-560H112.08c-.24 0-.08 560-.08 560zM32 152c0-44.2 35.6-80 80.08-80H911.92A80 80 0 0 1 992 152v560c0 44.24-35.6 80-80.08 80H112.08A80 80 0 0 1 32 712V152z" /><path d="M711.92 552c.08-.16-399.84 0-399.84 0-.08.16 399.84 0 399.84 0zM272 552c0-22.08 18.24-40 40.08-40h399.84a39.96 39.96 0 1 1 0 80H312.08A39.96 39.96 0 0 1 272 552zm279.92-240c.08-.16-239.84 0-239.84 0-.08.16 239.84 0 239.84 0zM272 312c0-22.08 18.24-40 40.08-40h239.84a39.96 39.96 0 1 1 0 80H312.08A39.96 39.96 0 0 1 272 312zm200 400h80v200h-80z" /><path d="M312 872h400v80H312v-80z" /></symbol><symbol  viewBox="0 0 16 15" id="amberm-sousuo"><g fill="none" fill-rule="evenodd"><path stroke="currentColor" d="M-231-116H845v543H-231z" /><g transform="translate(1 1)"><circle stroke="currentColor" cx="6" cy="6" r="6" /><path stroke="CurrentColor" stroke-linecap="round" d="m11 10 3 3.19" /></g></g></symbol><symbol  viewBox="0 0 9 16" id="amberm-you"><g fill="none" fill-rule="evenodd"><path stroke="currentColor" d="M-376-116H700v543H-376z" /><path stroke="currentColor" d="m1 15 7-7.07L1 1" stroke-linecap="round" stroke-linejoin="round" /></g></symbol><symbol  viewBox="0 0 9 16" id="amberm-zuo"><g fill="none"><path stroke="currentColor" d="M-304-116H772v543H-304z" /><g filter="currentColor" stroke-linecap="round" stroke-linejoin="round"><path stroke="currentColor" d="M8 1 1 8.07 8 15" /></g></g></symbol>';
    body.insertBefore(svgDom, body.lastChild);
  };
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", loadSvg);
  } else {
    loadSvg();
  }
}
const svgProps = {
  name: {
    type: String,
    default: ""
  },
  size: {
    type: String,
    default: "16px"
  },
  color: {
    type: String,
    default: "#000000"
  }
};
var index_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => ".svg-icon[data-v-a3916f4a]{width:1em;height:1em;fill:currentColor;overflow:hidden}\n")();
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$1 = defineComponent({
  name: "SvgIcon",
  props: svgProps,
  setup(props) {
    const svgSize = `${props.size.replace("px", "")}px`;
    const svgName = computed(() => `#${props.name}`);
    const svgStyle = computed(() => {
      const style = {};
      style.color = props.color;
      style.fontSize = svgSize;
      return style;
    });
    return {
      svgStyle,
      svgName
    };
  }
});
const _hoisted_1 = ["xlink:href"];
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", {
    class: "icon svg-icon",
    style: normalizeStyle(_ctx.svgStyle),
    "aria-hidden": "true"
  }, [
    createElementVNode("use", { "xlink:href": _ctx.svgName }, null, 8, _hoisted_1)
  ], 4);
}
var SvgIcon = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-a3916f4a"]]);
const _sfc_main = defineComponent({
  name: "am-icon",
  components: { SvgIcon },
  props: {
    name: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: "16px"
    },
    color: {
      type: String,
      default: "#000000"
    },
    backgroundColor: {
      type: String,
      default: "#fff"
    }
  },
  setup(props) {
    const iconSize = `${props.size.replace("px", "")}px`;
    const iconStyle = computed(() => {
      const style = {};
      style.color = props.color;
      style.fontSize = iconSize;
      return style;
    });
    return {
      iconStyle
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_svg_icon = resolveComponent("svg-icon");
  return openBlock(), createBlock(_component_svg_icon, {
    name: _ctx.name,
    size: _ctx.size,
    color: _ctx.color
  }, null, 8, ["name", "size", "color"]);
}
var Icon = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
Icon.install = (app) => {
  app.component(Icon.name, Icon);
};
export { Icon as default };
