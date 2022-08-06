export default function (opt) {
  var msg = opt.msg, position = opt.position || 'top center', ele = opt.ele, duration = Math.max(300, opt.duration || 2500), className = opt.className,
      n = 'yznotify', na = 'arrow', ne = 'ele', ng = 'global', nc = 'content', nf = 'fade', ni= 'in', no = 'out', np = 'pos'
  function getA (arrayLike) {
    return Array.prototype.slice.call(arrayLike)
  }
  function getN () {
     return n + '-' + getA(arguments).join('-')
  }
  function getC () {
    return getA(arguments).join(' ')
  }
  function getEleById (id) {
    return document.getElementById(id)
  }
  function createEle (tag) {
    return document.createElement(tag)
  }
  function getXY(pos1, x, y, w, h, pos0) {
    if (pos1 === 'bottom') y += h
    if (pos1 === 'right') x += w
    if (pos1 === 'center') {
      if (pos0 === 'top' || pos0 === 'bottom') x += w / 2
      else y += h / 2
    }
    return [x, y]
  }
  var t = position.split(' '), pos0 = t[0], pos1 = t[1]

  var notify = createEle('DIV'), notifyContent = createEle('DIV')
  notify.className = getC(n, getN(nf, ni), className)
  notifyContent.innerHTML = msg
  notifyContent.className = getN(nc)
  notify.appendChild(notifyContent)

  if (ele) {
    notify.className += ' ' + getC(getN(ne), getN(ne, 0, pos0), getN(ne, 1, pos1), getN(na), getN(na, pos0), getN(na, np, pos1))
    var x = ele.offsetLeft, y = ele.offsetTop, w = ele.offsetWidth, h = ele.offsetHeight
    var t = getXY(pos0, x, y, w, h)
    x = t[0]
    y = t[1]
    t = getXY(pos1, x, y, w, h, pos0)
    x = t[0]
    y = t[1]
    notify.style.left = x + 'px'
    notify.style.top = y + 'px'
    document.body.appendChild(notify)
  } else {
    var id = getN(n, ng, pos0, pos1)
    let box = getEleById(id)
    if (box === null) {
      box = createEle('DIV')
      box.id = id
      box.className = getC(getN(ng), getN(ng, pos0), getN(ng, pos1))
      document.body.appendChild(box)
    }
    box.appendChild(notify)
  }
  
  setTimeout(function() {
    notify.className = notify.className.replace(getN(nf, ni), getN(nf, no))
    setTimeout(function() {
      var p = notify.parentNode
      p.removeChild(notify)
      if (p.innerHTML === '') p.parentNode.removeChild(p)
    }, 200)
  }, duration - 200)
  return notify
}