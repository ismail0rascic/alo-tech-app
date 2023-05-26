(()=>{"use strict";var e,t,r,n={681:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});var n,a=(n=r(519))&&n.__esModule?n:{default:n},o=r(585),s=new a.default({clientId:o.client_id,clientSecret:o.client_secret});s.clientCredentialsGrant().then((function(e){s.setAccessToken(e.body.access_token)})).catch((function(e){throw e})),t.default=s},187:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});var n=u(r(860)),a=u(r(249)),o=u(r(986)),s=u(r(582));function u(e){return e&&e.__esModule?e:{default:e}}var i=(0,n.default)();i.use(o.default.urlencoded({extended:!0})),i.use((0,s.default)()),i.get("/",(function(e,t){t.send("Explore spotify tracks!!!")})),i.use(a.default),t.default=i},585:(e,t,r)=>{var n;Object.defineProperty(t,"__esModule",{value:!0}),t.client_secret=t.client_id=t.port=void 0,((n=r(142))&&n.__esModule?n:{default:n}).default.config(),t.port=process.env.PORT,t.client_id=process.env.CLIENT_ID,t.client_secret=process.env.CLIENT_SECRET},95:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getTracks=void 0,r(478);var n,a,o,s=(n=r(681))&&n.__esModule?n:{default:n},u=r(401);t.getTracks=(a=regeneratorRuntime.mark((function e(t,r){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.default.searchTracks("artist:"+t.artist,{limit:50,type:"track"});case 3:n=e.sent,r.status(200).json((0,u.formatTracks)(n.body.tracks.items)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),r.status(400).json("Failed to retrieve tracks");case 10:case"end":return e.stop()}}),e,void 0,[[0,7]])})),o=function(){var e=a.apply(this,arguments);return new Promise((function(t,r){return function n(a,o){try{var s=e[a](o),u=s.value}catch(e){return void r(e)}if(!s.done)return Promise.resolve(u).then((function(e){n("next",e)}),(function(e){n("throw",e)}));t(u)}("next")}))},function(e,t){return o.apply(this,arguments)})},977:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.findRandomArtist=t.readJson=void 0;var n,a=(n=r(231))&&n.__esModule?n:{default:n},o=r(401),s=r(635);t.readJson=function(e){return function(t,r,n){a.default.readFile(e,(function(e,a){try{t.jsonData=JSON.parse(a),n()}catch(e){r.send("Error parsing JSON data:",e)}}))}},t.findRandomArtist=function(e,t,r){var n=(0,s.validateGenreInput)(e.jsonData,e.query.q),a=e.jsonData[e.query.q];n?t.status(400).json(n):(e.artist=(0,o.random)(a),r())}},249:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});var n,a=(n=r(860))&&n.__esModule?n:{default:n},o=r(505),s=r(95),u=r(977),i=a.default.Router();i.route("/api/tracks").get((0,u.readJson)(o.filePath),u.findRandomArtist,s.getTracks),t.default=i},401:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.random=function(e){return e[Math.floor(Math.random()*e.length)]},t.formatTracks=function(e){return e.sort((function(e,t){return t.popularity-e.popularity})),e.slice(0,10).map((function(e){return{artist:e.artists[0].name,track:e.name,album_image_url:e.album.images[0].url,preview_url:e.preview_url}}))}},505:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.filePath="./src/data/genres.json"},635:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.validateGenreInput=void 0;var n=o(r(564)),a=o(r(917));function o(e){return e&&e.__esModule?e:{default:e}}t.validateGenreInput=function(e,t){var r=!1;return t=(0,a.default)(t)?"":t,e.hasOwnProperty(t)||(r="This genre is not available, please try another!"),n.default.isEmpty(t)&&(r="Please, input genre to start searching!"),r}},478:e=>{e.exports=require("babel-polyfill")},986:e=>{e.exports=require("body-parser")},582:e=>{e.exports=require("cors")},142:e=>{e.exports=require("dotenv")},860:e=>{e.exports=require("express")},231:e=>{e.exports=require("fs")},917:e=>{e.exports=require("is-empty")},519:e=>{e.exports=require("spotify-web-api-node")},564:e=>{e.exports=require("validator")}},a={};function o(e){var t=a[e];if(void 0!==t)return t.exports;var r=a[e]={exports:{}};return n[e](r,r.exports,o),r.exports}t=(e=o(187))&&e.__esModule?e:{default:e},r=o(585),t.default.listen(r.port,(function(){console.log("Server is running on port "+r.port)}))})();