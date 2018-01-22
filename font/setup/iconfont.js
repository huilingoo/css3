;(function(window) {

var svgSprite = '<svg>' +
  ''+
    '<symbol id="icon-computer" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M965.448978 775.290545 555.854299 775.290545l0 87.766926 321.812403 0c16.155958 0 29.27065 13.113669 29.27065 29.283953 0 16.129352-13.113669 29.241998-29.27065 29.241998L146.288273 921.583422c-16.155958 0-29.255301-13.112646-29.255301-29.241998 0-16.170285 13.099343-29.283953 29.255301-29.283953l321.813426 0L468.101699 775.290545 58.50702 775.290545c-32.31294 0-58.482973-26.170033-58.482973-58.490136L0.024048 160.934343c0-32.31908 26.170033-58.518788 58.482973-58.518788l906.941957 0c32.327266 0 58.525951 26.198685 58.525951 58.518788l0 555.866067C1023.974929 749.120512 997.776244 775.290545 965.448978 775.290545L965.448978 775.290545zM980.07714 160.934343c0-8.077979-6.54302-14.627139-14.628162-14.627139L58.50702 146.307204c-8.070816 0-14.627139 6.54916-14.627139 14.627139l0 555.866067c0 8.079002 6.556323 14.628162 14.627139 14.628162l906.941957 0c8.085142 0 14.628162-6.54916 14.628162-14.628162L980.07714 160.934343 980.07714 160.934343z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-tn-setup" viewBox="0 0 1025 1024">'+
      ''+
      '<path d="M959.410857 415.776883l-82.062223-18.224687c-6.392241-20.423266-14.727413-40.000847-24.36946-58.83091l44.40005-73.914186c16.581377-26.513842 24.919616-65.468574 0-90.438298l-45.246759-45.200742c-12.186264-12.238416-28.568235-17.377979-45.098483-17.377979-17.129488 0-34.464518 5.593594-47.395231 14.581181l-71.973301 45.848045c-18.678719-9.689087-38.156086-17.979264-58.432098-24.571934l-18.425116-83.000965c-5.494403-30.464126-32.11664-63.423384-67.422753-63.423384l-63.926501 0c-35.312249 0-56.936042 33.459307-63.928546 63.923433l-20.528594 82.003935c-21.62277 6.890245-42.452007 15.72751-62.228993 26.169227l-73.761819-46.947334c-12.984911-8.989632-30.265743-14.581181-47.445338-14.581181-16.482185 0-32.863134 5.13854-45.100528 17.377979l-45.195629 45.200742c-24.971769 24.970746-16.580355 63.924456 0 90.438298l46.692708 77.80925c-8.735006 17.679644-16.52718 35.856269-22.519586 54.933801L63.436678 415.776883c-30.465149 5.500538-63.427475 32.114595-63.427475 67.426844l0 63.924456c0 35.306113 33.461352 56.933997 63.927524 63.925478l83.051072 20.720842c5.746984 17.632605 12.885719 34.558596 21.029665 50.940568l-46.746906 77.907419c-16.579332 26.468848-24.924729 65.421535 0 90.391258l45.248804 45.19972c12.187287 12.233303 28.567213 17.428086 45.096437 17.428086 17.133578 0 34.460427-5.593594 47.397276-14.582204l73.917254-47.145718c19.923217 10.534773 40.852668 19.478389 62.627805 26.368633l20.476441 81.804529c6.993527 30.464126 28.614252 63.924456 63.927524 63.924456l63.925478 0c35.309181 0 61.931418-32.961303 67.422753-63.423384l18.427161-83.249455c20.076607-6.497568 39.353544-14.690599 57.786841-24.224252l72.115441 45.945191c12.933781 8.989632 30.265743 14.583227 47.395231 14.583227 16.533315 0 32.912219-5.194782 45.10155-17.428086l45.246759-45.19972c24.916549-24.969724 16.5824-63.924456 0-90.392281l-44.448112-74.015423c8.93748-17.576362 16.681591-35.855247 22.920443-54.834609l83.05823-20.720842c30.465149-6.991482 63.928546-28.618342 63.928546-63.922411l0-63.925478C1022.83731 447.8925 989.876006 421.277421 959.410857 415.776883L959.410857 415.776883zM971.697336 547.127159c0 2.544216-9.436506 10.63601-25.171175 14.329623l-83.05823 20.722887-27.418839 6.844228-8.788181 26.868682c-5.191715 15.781708-11.883576 31.761799-19.876178 47.499536l-12.884696 25.215146 14.582204 24.271291 44.950206 74.858041c8.089749 12.938894 8.98861 25.323541 7.239972 27.122286l-45.350041 45.245736c-2.196534 2.197557-7.339164 2.399008-8.888395 2.399008-6.296117 0-13.487005-2.197557-18.281953-5.494403l-0.798647-0.552201-0.844663-0.548111-72.072492-45.944169-24.871554-15.882945-26.169227 13.585174c-16.427988 8.541736-33.260923 15.580257-49.988532 20.973423l-27.869803 9.036672-6.293049 28.565167-18.479313 83.254568-0.399835 1.998151c-1.899981 10.586926-11.541007 21.375302-17.081426 21.375302l-63.927524 0c-2.550352 0-10.688162-9.436506-14.335759-25.216169l-20.424289-81.808619-6.944442-27.715391-27.270562-8.642973c-18.178671-5.738803-36.405403-13.428717-54.183216-22.819206l-26.269442-13.830597-25.070961 15.983159-73.914186 47.089475-0.852844 0.548111-0.800692 0.552201c-4.792903 3.295824-11.984813 5.492358-18.277862 5.492358-1.545141 0-6.691861-0.199406-8.935435-2.497177l-45.201765-45.145522c-1.798745-1.798745-0.9459-14.183392 7.64492-27.965927l46.745883-77.909464 14.429837-23.971671-12.485884-25.070961c-7.539593-15.12827-13.48496-29.564243-18.180716-44.000216l-8.789204-26.915722-27.4669-6.845251-84.00413-20.97649c-14.829672-3.442055-24.219139-11.532826-24.219139-14.077042l0-63.924456c0-5.545532 10.734179-15.180422 21.32315-17.131533l1.051228-0.153389 0.999075-0.245423 82.00598-18.179693 28.866833-6.392241 8.837266-28.167378c4.746886-15.029078 11.141172-30.563318 19.531564-47.54453l12.486907-25.069938-14.438018-24.025868-47.19378-78.651868c-8.090771-12.884696-8.990655-25.317406-7.190888-27.115128l45.195629-45.19972c2.196534-2.196534 6.991482-2.396963 8.942593-2.396963 6.338044 0 13.48496 2.097342 18.279907 5.393166l0.798647 0.599241 0.899884 0.546066 73.761819 46.998464 25.024944 15.926916 26.270464-13.829574c17.479216-9.189038 35.606756-16.880998 53.984833-22.673998l27.121263-8.690012 6.938307-27.666306 20.730045-82.953925c3.39706-14.829672 11.587023-24.218116 14.085223-24.218116l63.925478 0c5.542465 0 15.184512 10.740315 17.081426 21.328263l0.199406 1.046115 0.199406 0.99703 18.427161 83.001987 6.347247 28.56619 27.866735 8.989632c16.981212 5.49338 34.00844 12.684268 50.640947 21.276111l26.169227 13.584151 24.871554-15.828747 71.919103-45.851113 0.847731-0.546066 0.798647-0.600263c4.794948-3.294801 11.986858-5.392143 18.278885-5.392143 1.552299 0 6.691861 0.146231 8.98861 2.396963l45.150635 45.147567c1.850897 1.797722 0.949991 14.283606-7.638784 27.965927l-44.403118 73.913163-14.582204 24.371506 12.884696 25.270367c9.042807 17.678622 15.934075 34.35919 21.128857 50.840353l8.837266 28.265547 28.867856 6.392241 82.059155 18.179693 0.998053 0.29962 0.998053 0.099192c10.585903 1.951111 21.37428 11.586001 21.37428 17.133578L971.698358 368.461414 971.698358 547.127159 971.697336 547.127159zM511.822068 307.704957c-113.024353 0-205.064034 91.844366-205.064034 204.757256 0 112.918003 92.040704 204.711239 205.064034 204.711239 113.116386 0 205.113119-91.791191 205.113119-204.711239C716.935187 399.550346 624.937432 307.704957 511.822068 307.704957L511.822068 307.704957zM512.321095 667.232982c-85.255787 0-154.675668-69.21843-154.675668-154.217545 0-84.999115 69.420904-154.169483 154.675668-154.169483 85.249651 0 154.623515 69.171391 154.623515 154.169483C666.94461 598.014552 597.570746 667.232982 512.321095 667.232982L512.321095 667.232982z"  ></path>'+
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