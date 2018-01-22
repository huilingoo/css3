;(function(window) {

var svgSprite = '<svg>' +
  ''+
    '<symbol id="icon-zhong" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M813.985185 664.367407c-0.853333-1.232593-86.85037-121.362963-86.85037-206.885926 0-63.146667-13.463704-116.242963-40.106667-157.771852-22.091852-34.607407-53.380741-60.681481-90.737778-75.757037l-2.275556-2.74963c-2.74963-46.648889-33.659259-75.282963-82.10963-75.282963-48.355556 0-79.265185 28.634074-82.10963 75.282963l-2.275556 2.74963c-37.357037 15.075556-68.645926 41.14963-90.737778 75.757037-26.548148 41.528889-40.106667 94.625185-40.106667 157.771852 0 85.522963-85.997037 205.653333-86.85037 206.885926-7.300741 10.05037-9.860741 22.85037-7.111111 34.986667 2.74963 12.136296 10.714074 22.565926 21.712593 28.444444 3.223704 1.706667 77.748148 41.434074 171.804444 63.241481 9.386667 23.798519 23.703704 44.183704 41.908148 59.354074 21.617778 18.204444 47.122963 27.780741 73.860741 27.780741l0 0c26.642963 0 52.148148-9.576296 73.860741-27.780741 17.92-15.075556 32.142222-35.176296 41.528889-58.595556 3.697778-0.948148 7.300741-1.896296 10.903704-3.034074l-0.094815-0.284444c89.031111-22.281481 158.151111-59.06963 161.28-60.681481 10.998519-5.878519 18.962963-16.308148 21.712593-28.444444C823.940741 687.217778 821.285926 674.417778 813.985185 664.367407zM512 183.751111c14.791111 0 25.979259 3.697778 33.28 11.093333 5.025185 5.025185 8.343704 11.946667 9.955556 20.48-15.265185-1.232593-30.814815-1.896296-33.754074-1.896296l-16.213333 0c-1.232593 0-19.342222 0.853333-36.693333 2.37037 1.517037-8.817778 4.93037-15.928889 10.05037-21.048889C486.020741 187.448889 497.208889 183.751111 512 183.751111zM512 840.248889c-27.401481 0-52.527407-15.644444-69.30963-41.528889 33.564444 3.508148 69.12 4.740741 69.594074 4.740741 0.094815 0 2.654815 0.094815 7.111111 0.094815 11.282963 0 34.607407-0.474074 60.965926-3.508148C563.674074 825.173333 538.927407 840.248889 512 840.248889zM784.213333 690.915556c-0.284444 1.422222-1.327407 2.74963-2.654815 3.413333-3.128889 1.706667-78.506667 41.813333-172.088889 61.914074l-10.714074 2.275556-0.18963 0.568889c-35.176296 6.162963-72.059259 6.826667-84.859259 6.447407-16.402963-0.568889-62.103704-2.939259-91.211852-7.585185l-7.774815-1.706667c-93.582222-20.100741-168.96-60.207407-172.183704-61.914074-1.327407-0.758519-2.275556-1.991111-2.654815-3.413333-0.379259-1.517037 0-3.128889 0.853333-4.266667 0.18963-0.284444 23.798519-33.185185 47.028148-77.274074 31.194074-59.448889 47.028148-110.554074 47.028148-151.798519 0-137.955556 69.594074-184.50963 111.028148-199.964444l4.835556-1.801481 0 0 0.094815 0.379259c-0.094815 0-0.18963 0.094815-0.284444 0.094815 7.016296-1.801481 48.071111-4.740741 54.802963-4.835556L521.481481 251.448889c5.30963 0 38.494815 1.611852 50.251852 4.077037l0.284444-1.422222 1.327407 1.706667 4.835556 1.801481c41.434074 15.454815 111.028148 61.914074 111.028148 199.964444 0 41.244444 15.834074 92.34963 47.028148 151.798519 23.134815 44.183704 46.743704 76.98963 46.933333 77.274074C784.213333 687.786667 784.497778 689.398519 784.213333 690.915556z"  ></path>'+
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
