let form__box = document.querySelector('.form-box');
let btn = document.querySelector('.btn');
let fa__x = document.querySelector('.fa-x');

btn.addEventListener('click', () => {
    form__box.classList.add('active')
})
fa__x.addEventListener('click', () => {
    form__box.classList.remove('active')
})

 !(function (f, b, e, v, n, t, s) {
   if (f.fbq) return;
   n = f.fbq = function () {
     n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
   };
   if (!f._fbq) f._fbq = n;
   n.push = n;
   n.loaded = !0;
   n.version = "2.0";
   n.queue = [];
   t = b.createElement(e);
   t.async = !0;
   t.src = v;
   s = b.getElementsByTagName(e)[0];
   s.parentNode.insertBefore(t, s);
 })(
   window,
   document,
   "script",
   "https://connect.facebook.net/en_US/fbevents.js"
 );
 fbq("init", "514646110844168");
 fbq("track", "PageView");

