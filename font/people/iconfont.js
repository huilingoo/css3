;(function(window) {

var svgSprite = '<svg>' +
  ''+
    '<symbol id="icon-people" viewBox="0 0 1268 1024">'+
      ''+
      '<path d="M287.596263 790.666463l-0.407723 0C145.169266 788.229329 0 774.058967 0 687.511122c0-69.881164 106.277713-148.032537 236.901775-174.191282 6.374953-1.538827 12.396107-7.608645 14.858231-15.674993 2.984272-9.787993 0.186764-20.238864-7.704657-28.670848-0.539247-0.568182-1.021939-1.133734-1.483587-1.741374-41.92975-43.37388-67.867536-112.246258-67.867536-180.681976 0-106.528923 67.088916-183.853012 159.527707-183.853012 92.416432 0 159.507978 77.324089 159.507978 183.853012 0 70.02847-27.051791 140.351554-70.571663 183.524203-6.948396 7.550775-9.673567 17.872753-6.74585 27.51607 2.429242 8.029521 8.375428 14.115122 15.527686 15.911735 50.469583 9.972126 99.383241 28.285483 140.331825 52.723899 11.172937 6.673512 14.768794 21.043789 8.022945 32.098355-6.762948 11.072979-21.289739 14.554411-32.442947 7.937454-36.31632-21.68694-80.004542-38.003768-126.344281-47.189383-24.327936-6.048774-43.189747-24.362132-50.359103-48.048232-7.707288-25.407745-1.037722-52.776509 17.822774-73.235018 35.222043-34.944528 57.513992-94.009184 57.513992-151.24303 0-80.71477-46.172704-137.102919-112.263356-137.102919-66.109064 0-112.283084 56.388149-112.283084 137.102919 0 56.903722 22.15911 115.823702 56.456541 150.086937 1.019309 1.007471 1.909724 2.089911 2.704127 3.244689 17.454508 20.29542 23.402009 46.690908 15.878854 71.293728-7.299564 23.886016-26.404695 42.183591-49.859313 47.791761-124.158358 24.87639-199.883119 91.589148-199.883119 128.544672 0 19.523376 31.276332 52.815966 240.758049 56.407878 13.043204 0.219645 23.436205 10.871748 23.215245 23.776852C310.998272 780.476008 300.454019 790.666463 287.596263 790.666463"  ></path>'+
      ''+
      '<path d="M916.775317 622.555521c-14.174307-3.520889-25.920688-15.281737-30.629236-30.70815-5.542408-18.122648-0.627368-37.365879 12.63548-51.886093 63.261577-62.551349 104.141768-169.01188 104.141768-271.213673C1002.92333 110.519352 907.575235 0 771.065488 0 634.57547 0 539.249734 110.519352 539.249734 268.747604c0 101.559958 38.435166 203.699936 100.54328 267.712513 0.583965 0.760207 1.191605 1.520414 1.859745 2.221435 14.495225 15.481653 19.569409 34.90507 13.948087 53.265777-4.74932 15.546099-16.616702 27.306947-30.022911 30.504288-193.684407 38.728464-351.281346 152.810792-351.281346 254.329978 0 129.383794 238.752313 147.207883 496.7689 147.207883 258.021848 0 496.764954-17.82409 496.764954-147.207883C1267.831758 774.903349 1109.796845 660.723694 916.775317 622.555521M771.066803 945.868356c-103.628826 0-419.027881 0-419.027881-90.538274 0-55.955436 110.975739-156.173853 292.584957-192.490172 30.158381-7.173302 54.762516-30.801532 64.219069-61.659618 9.877429-32.29038 1.942605-67.004741-21.235814-93.646178-0.856219-1.27841-1.842647-2.487113-2.950076-3.594542-50.573487-50.627412-83.247916-137.325194-83.247916-220.88219 0-120.661143 69.757531-204.933628 169.657661-204.933628 99.922488 0 169.698433 84.272485 169.698433 204.933628 0 84.10282-32.90328 170.968952-84.621023 222.163231-24.662006 26.90317-33.338623 62.748634-23.21393 95.847885 9.343443 30.556897 33.642443 54.14567 64.600488 61.806925 181.268572 35.887552 292.565228 136.271689 292.565228 192.453346C1190.097315 945.868356 874.696945 945.868356 771.066803 945.868356"  ></path>'+
      ''+
    '</symbol>'+
  ''+
'</svg>'
var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
var shouldInjectCss = script.getAttribute("data-injectcss")

/**
 * document ready
 */
var ready = function(fn){
  if(document.addEventListener){
      document.addEventListener("DOMContentLoaded",function(){
          document.removeEventListener("DOMContentLoaded",arguments.callee,false)
          fn()
      },false)
  }else if(document.attachEvent){
     IEContentLoaded (window, fn)
  }

  function IEContentLoaded (w, fn) {
      var d = w.document, done = false,
      // only fire once
      init = function () {
          if (!done) {
              done = true
              fn()
          }
      }
      // polling for no errors
      ;(function () {
          try {
              // throws errors until after ondocumentready
              d.documentElement.doScroll('left')
          } catch (e) {
              setTimeout(arguments.callee, 50)
              return
          }
          // no errors, fire

          init()
      })()
      // trying to always fire before onload
      d.onreadystatechange = function() {
          if (d.readyState == 'complete') {
              d.onreadystatechange = null
              init()
          }
      }
  }
}

/**
 * Insert el before target
 *
 * @param {Element} el
 * @param {Element} target
 */

var before = function (el, target) {
  target.parentNode.insertBefore(el, target)
}

/**
 * Prepend el to target
 *
 * @param {Element} el
 * @param {Element} target
 */

var prepend = function (el, target) {
  if (target.firstChild) {
    before(el, target.firstChild)
  } else {
    target.appendChild(el)
  }
}

function appendSvg(){
  var div,svg

  div = document.createElement('div')
  div.innerHTML = svgSprite
  svg = div.getElementsByTagName('svg')[0]
  if (svg) {
    svg.setAttribute('aria-hidden', 'true')
    svg.style.position = 'absolute'
    svg.style.width = 0
    svg.style.height = 0
    svg.style.overflow = 'hidden'
    prepend(svg,document.body)
  }
}

if(shouldInjectCss && !window.__iconfont__svg__cssinject__){
  window.__iconfont__svg__cssinject__ = true
  try{
    document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
  }catch(e){
    console && console.log(e)
  }
}

ready(appendSvg)


})(window)
