;(function(window) {

var svgSprite = '<svg>' +
  ''+
    '<symbol id="icon-xinfengpsd" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M854.215481 221.263792 169.784519 221.263792c-45.947013 0-83.342961 37.395948-83.342961 83.369558l0 414.759896c0 45.947013 37.395948 83.35626 83.342961 83.35626l684.44426 0c45.947013 0 83.342961-37.395948 83.342961-83.35626L937.57174 304.620052C937.558442 258.65974 900.162494 221.263792 854.215481 221.263792zM854.215481 274.924052c3.923117 0 7.660052 0.811221 11.091117 2.207584L520.511169 547.135169 172.510753 274.924052 854.215481 274.924052zM883.898182 719.393247c0 0.598442-0.146286 1.156987-0.172883 1.755429l-232.408104-163.84c-8.08561-5.705143-19.229922-3.750234-24.921766 4.308779s-3.763532 19.229922 4.308779 24.921766l229.615377 161.89839c-1.968208 0.41226-4.002909 0.651636-6.104104 0.651636l-671.318442 0 230.546286-162.550026c8.072312-5.691844 10.000623-16.862753 4.308779-24.921766-5.705143-8.059013-16.849455-10.013922-24.935065-4.308779L143.572779 733.024416c-2.141091-4.109299-3.470961-8.684052-3.470961-13.631169L140.101818 304.620052c0-2.978909 0.585143-5.811532 1.396364-8.537766l356.950442 279.219532c6.476468 5.066805 14.256208 7.593558 22.049247 7.593558 7.77974 0 15.572779-2.526753 22.049247-7.593558l341.337766-267.303896L883.884883 719.393247z"  ></path>'+
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
