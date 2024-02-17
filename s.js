
function ID(id) { 
    return document.getElementById(i) 
}

function AS(e,a,v) {
    e.setAttribute(a,v)
}

function AG(e,a) {
    return e.getAttribute(a)
}

function AO(e, o) { 
    for(a in o) { 
        AS(e, a, UD(o[a])) 
    } 
}

function AR(e, a) { e.removeAttribute(a) }

function TS(e, t) { 
    e.innerText = t || '' 
}

function TG(e) { 
    return e.innerText 
}

function CE(o) { 
    const el = cde(o.e)
    o.cl ? AS(el, 'class', o.cl) : null
    o.a ? AO(el, o.a) : null
    o.s ? SO(o.s) : null
    if(o.c && o.c.length) { 
        for(ch of o.c) { add(el, CE(ch)) } 
    }
    return el
}

function SS(e,s) { e.style = s }
function SA(e,a,v) { e.style[a] = v }
function SG(e,a) { return e.style }
function SGA(e,a) { return e.style[a] }
function SO(e,o) {
    var st = ''
    for(s in o) { st += s + ':' + o[s] + '; ' }
    SS(e, st.replace(/_/g, '-'))
}

function UD(s) {
    return s.replace(/_/g, '-')
}

function DU(s) {
    return s.replace(/-/g, '_')
}

function OE(e) {
    var o = {}
    o.e = e.nodeName
    if(e != undefined && e.attributes.length) {
        o.a = {}
        for(a of e.attributes) {o.a[a.name] = a.value}
    }
    if(e.children.length) {
        o.c = []
        for(ch of e.children) {o.c.push(OE(ch))}
        const cln = e.cloneNode(true)
        const cl = cln.children.length
        for(var i = 0; i < cl; i++) { cln.children[0].remove() }
        if(cln.innerText && cln.innerText.length) { o.t = cln.innerText.trim()}
    }
    else if(e.innerText && e.innerText.length ) { o.t = e.innerText.trim()}
    return o
}



function cde(el) { return document.createElement(el || 'div') }

function q(qu) { return document.querySelector(qu) }
function qa(qu) { return document.querySelectorAll(qu) }
function qe(el, qu) { return el.querySelector(qu) }
function qea(el, qu) { return el.querySelectorAll(qu) }

function ds(key, value) { window.localStorage.setItem(key, value)}
function dg(key) { return window.localStorage.getItem(key)}
function dso(key, obj) { window.localStorage.setItem(key, JSON.stringify(obj))}
function dgo(key) { return JSON.parse(window.localStorage.getItem(key))}



function show(id, display = 'block') { e(id).style.display = display}
function hide(id) { e(id).style.display = 'none'}



function ADD(el, child) { el.append(child) }
function sadd(el, child) { el.prepend(child) }




function ca(el, clas) { el.classList.add(clas) }
function cr(el, clas) { el.classList.remove(clas) }
function ct(el, clas) { el.classList.toggle(clas) }
function ih(el, html) {el.innerHTML = html}
function oh(el, html) {el.outerHTML = html}

function p(el) { return el.parentNode }
function gp(el) { return p(el.parentNode) }
function si(el) { return p(el).children }
function uo(object, key, value) {

    let path = key.split('.')

    if(path.length > 1) {
        for(p in path) {
            if(!object[path[p]]) { object[path[p]] = {} }
            if(p === path.length - 1) {
                object
            }
        }
    }
    
}




function lw(w) {
    const head = q('head')
    const body = q('body')
    for(h of w.head) { add(head, ce(h)) }
    for(b of w.body) { add(body, ce(b)) }
}


function mw(document) {
    var w = {head: [], body: []}
    for(h of q('head').children) { w.head.push(obj(h))}
    for(b of q('body').children) { w.body.push(obj(b))}
    return w
}

function mo(o = {}, objects = []) {
    let ob = o
    //iterate objects from array
    for(let i = 0; i < objects.length; i++) {
        //iterate properties of object
        let object = objects[i]
        for(prop in object) {
            //if property is not an object assign it
            if(typeof object[prop] !== 'object' ) {
                ob[prop] = object[prop]
            }
            else if(Array.isArray(object[prop])) {
                console.log('hooray, an array - what to do?')
            }
            //if it is itterate the object
            else {
                ob[prop] = mo(ob[prop], [object[prop]])
            }
        }
    }

    return ob
}

function coe(obj) {
    const el = ce({
        a: {o: JSON.stringify(obj)},
        t: obj.e
    })
    return el
}


function notify(m, style = 'z-index: 100; padding: 22px; background-color: #ddd; color: #222; display: flex; justify-content: center; align-items: center; position: fixed; top: 0; left: 0; right: 0; bottom: 0;  font-size: 22px;') {
    const n = cde('div')
    SS(n, style)
    TS(n, m)

    const x = cde('div')
    TS(x, 'ok')
    AS(x, 'onclick', 'p(this).remove()')
    SS(x, 'position: fixed; bottom: 0; margin: 1em; padding: 1em; cursor: pointer; text-align: center; background-color: #222; color: #ddd;')
    ADD(n,x)

    ADD(q('body'), n)
}
