function k(i) {
  var V = i.msg, j = i.position || "top center", r = i.ele, A = Math.max(300, i.duration || 2500), B = i.className, u = "yznotify", d = "arrow", m = "ele", c = "global", z = "content", p = "fade", b = "in", W = "out", X = "pos";
  function y(e) {
    return Array.prototype.slice.call(e);
  }
  function t() {
    return u + "-" + y(arguments).join("-");
  }
  function g() {
    return y(arguments).join(" ");
  }
  function Y(e) {
    return document.getElementById(e);
  }
  function N(e) {
    return document.createElement(e);
  }
  function I(e, h, C, H, L, M) {
    return e === "bottom" && (C += L), e === "right" && (h += H), e === "center" && (M === "top" || M === "bottom" ? h += H / 2 : C += L / 2), [h, C];
  }
  var o = j.split(" "), a = o[0], l = o[1], n = N("DIV"), v = N("DIV");
  if (n.className = g(u, t(p, b), B), v.innerHTML = V, v.className = t(z), n.appendChild(v), r) {
    n.className += " " + g(t(m), t(m, 0, a), t(m, 1, l), t(d), t(d, a), t(d, X, l));
    var s = r.offsetLeft, f = r.offsetTop, T = r.offsetWidth, E = r.offsetHeight, o = I(a, s, f, T, E);
    s = o[0], f = o[1], o = I(l, s, f, T, E, a), s = o[0], f = o[1], n.style.left = s + "px", n.style.top = f + "px", document.body.appendChild(n);
  } else {
    var D = t(u, c, a, l);
    let e = Y(D);
    e === null && (e = N("DIV"), e.id = D, e.className = g(t(c), t(c, a), t(c, l)), document.body.appendChild(e)), e.appendChild(n);
  }
  return setTimeout(function() {
    n.className = n.className.replace(t(p, b), t(p, W)), setTimeout(function() {
      var e = n.parentNode;
      e.removeChild(n), e.innerHTML === "" && e.parentNode.removeChild(e);
    }, 200);
  }, A - 200), n;
}
export {
  k as default
};
