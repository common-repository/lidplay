/*
 Copyright 2020  LidPlay  (contact@lidplay.net)
 
 This program is free software; you can redistribute it and/or modify
 it under the terms of the GNU General Public License as published by
 the Free Software Foundation; either version 2 of the License, or
 (at your option) any later version.
 
 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.
 
 You should have received a copy of the GNU General Public License
 along with this program; if not, write to the Free Software
 Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
 */

function lidplay(o,s,a){function b(t){var e=[];for(var r in t)e.push(encodeURIComponent(r)+"="+encodeURIComponent(t[r]));return e.join("&")}function c(t,e){return-1<t.indexOf(e)}function d(t,e){if("[object String]"==Object.prototype.toString.call(e))return c(t,e);for(var r=0;r<e.length;r++)if(c(t,e[r]))return!0;return!1}setInterval(function(){for(var t=document.getElementsByTagName("iframe"),e=0;e<t.length;e++)!c(t[e].src,s)&&d(t[e].src,a)&&(l=t[e],u=l.getBoundingClientRect(),i=u.top,n=u.bottom,i<window.innerHeight&&0<=n)&&(r=t[e],"none"!==window.getComputedStyle(r).display)&&(o.url=t[e].src,t[e].getAttribute("subtitles_src")?o.subtitles_src=t[e].getAttribute("subtitles_src"):delete o.subtitles_src,t[e].getAttribute("subtitles_label")?o.subtitles_label=t[e].getAttribute("subtitles_label"):delete o.subtitles_label,t[e].getAttribute("default_resolution")?o.default_resolution=t[e].getAttribute("default_resolution"):delete o.default_resolution,t[e].getAttribute("start")?o.start=t[e].getAttribute("start"):delete o.start,t[e].getAttribute("autoplay")?o.autoplay=t[e].getAttribute("autoplay"):delete o.autoplay,t[e].src=s+b(o),t[e].setAttribute("allowfullscreen",""),t[e].setAttribute("mozallowfullscreen",""),t[e].setAttribute("webkitallowfullscreen",""),t[e].removeAttribute("sandbox"));var r,l,u,i,n},500)}