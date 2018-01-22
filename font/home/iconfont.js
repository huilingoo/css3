;(function(window) {

var svgSprite = '<svg>' +
  ''+
    '<symbol id="icon-home" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M367.941 908.444c-1.344 0-2.414-0.052-3.164-0.107h-100.094c-21.173 0-37.633-6.372-48.927-18.94-15.452-17.196-14.955-39.331-14.543-44.964l-6.64-288.861h-55.634c-21.311 0-35.941-7.375-43.484-21.918-6-11.57-6-25.297-6-37.41 0-6.226 0-13.973 54.756-75.277 33.099-37.056 76.123-82.001 118.043-123.31 34.343-33.842 84.975-82.033 131.157-119.422 62.375-50.499 85.978-56.339 98.304-56.339 7.133 0 28.841 0 98.566 51.085 38.815 28.438 86.112 68.030 133.172 111.482 46.474 42.908 89.206 86.303 120.327 122.188 49.687 57.296 55.435 78.574 55.435 89.594 0 47.293-31.374 58.159-32.71 58.599l-2.215 0.73h-61.071v287.622c0 25.532-11.551 45.366-32.525 55.854-14.882 7.441-29.382 7.655-30.987 7.655h-97.807c-26.126 0-46.785-12.116-58.176-34.116-8.067-15.583-8.82-30.752-8.879-32.43l-0.010-0.513v-198.33c0-7.983-2.992-13.142-9.707-16.727-4.875-2.602-9.962-3.367-11.233-3.525h-87.505c-14.402 0-25.053 3.684-31.659 10.949-10.002 11.001-8.881 27.961-8.865 28.126l0.066 0.689v175.328c0 27.637-7.934 47.978-23.582 60.455-12.914 10.297-27.105 11.834-34.414 11.834zM366.957 879.311c0.163 0.011 0.502 0.027 0.985 0.027 10.788 0 28.887-5.61 28.887-43.183v-174.128c-0.315-5.108-0.921-30.578 16.37-49.596 12.354-13.587 30.252-20.477 53.197-20.477l89.186 0.034c16.729 1.141 48.368 12.921 48.368 49.325v197.961c0.089 1.298 0.916 11.239 6.002 20.636 6.442 11.902 16.895 17.686 31.952 17.686h97.807c0-0.001 9.659-0.188 18.673-4.945 10.583-5.584 15.729-15.219 15.729-29.457v-316.729h84.427c3.513-2.343 11.571-9.934 11.571-30.221 0-0.604-0.549-15.442-48.317-70.524-30.439-35.101-72.374-77.671-118.083-119.873-46.281-42.73-92.673-81.578-130.629-109.388-57.568-42.178-76.831-45.456-81.362-45.456-4.198 0-22.171 3.429-77.123 47.545-34.643 27.811-77.998 67.035-125.381 113.43-92.222 90.303-162.122 170.199-170.649 186.5 0.016 8.49 0.219 16.932 2.732 21.777 0.881 1.697 3.221 6.209 17.643 6.209h84.081l7.337 319.151-0.097 0.764c-0.078 1.035-0.912 14.745 7.275 23.702 5.546 6.069 14.679 9.146 27.147 9.146l102.274 0.083z"  ></path>'+
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
