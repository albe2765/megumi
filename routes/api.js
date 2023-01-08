__path = process.cwd()

let creator = '@Albe'

var express = require('express');
var scr = require('@bochilteam/scraper')
var ytdl = require('ytdl-core');
var ytpl = require('ytpl');
var secure = require('ssl-express-www');
var cors = require('cors');
var scrapeYt = require("scrape-yt");
var fetch = require('node-fetch');
var cheerio = require('cheerio');
var request = require('request');
var router = express.Router();
const am = require('ra-api');

var { color, bgcolor } = require(__path + '/megumi/lib/color.js');
var { fetchJson } = require(__path + '/megumi/lib/fetcher.js')
var options = require(__path + '/megumi/lib/options.js')
const oxy = require(__path + '/megumi/lib/oxy.js');
var {
   whois
} = require('../megumi/lib');

var cookie = "HSID=A7EDzLn3kae2B1Njb;SSID=AheuwUjMojTWvA5GN;APISID=cgfXh13rQbb4zbLP/AlvlPJ2xBJBsykmS_;SAPISID=m82rJG4AC9nxQ5uG/A1FotfA_gi9pvo91C;__Secure-3PAPISID=m82rJG4AC9nxQ5uG/A1FotfA_gi9pvo91C;VISITOR_INFO1_LIVE=RgZLnZtCoPU;LOGIN_INFO=AFmmF2swRQIhAOXIXsKVou2azuz-kTsCKpbM9szRExAMUD-OwHYiuB6eAiAyPm4Ag3O9rbma7umBK-AG1zoGqyJinh4ia03csp5Nkw:QUQ3MjNmeXJ0UHFRS3dzaTNGRmlWR2FfMDRxa2NRYTFiN3lfTEdOVTc4QUlwbUI4S2dlVngxSG10N3ZqcHZwTHBKano5SkN2dDlPSkhRMUtReE42TkhYeUVWS3kyUE1jY2I1QzA1MDZBaktwd1llWU9lOWE4NWhoZV92aDkxeE9vMTNlcG1uMU9rYjhOaDZWdno2ZzN3TXl5TVNhSjNBRnJaMExrQXpoa2xzRVUteFNWZDI5S0Fn;PREF=app=desktop&f4=4000000&al=id;SID=2wezCMTUkWN3YS1VmS_DXaEU84J0pZIQdemM8Zry-uzWm8y1njBpLTOpxSfN-EaYCRSiDg.;YSC=HCowA1fmvzo;__Secure-3PSID=2wezCMTUkWN3YS1VmS_DXaEU84J0pZIQdemM8Zry-uzWm8y1dajgWzlBh9TgKapGOwuXfA.;SIDCC=AJi4QfFK0ri9fSfMjMQ4tOJNp6vOb9emETXB_nf2S05mvr2jBlmeEvlSsQSzPMuJl_V0wcbL1r8;__Secure-3PSIDCC=AJi4QfGeWHx-c4uTpU1rXCciO1p0s2fJWU07KrkZhWyD1Tqi8LyR-kHuBwHY9mViVYu1fRh2PA";

loghandler = {
   eror: {
      status: false,
      code: 1337,
      creator: creator,
      message: 'Sistem sedang maintenance\ncobalagi nanti!!'
   },

   noque: {
      status: false,
      code: 404,
      creator: creator,
      message: `Silahkan masukan parameter query`
   },

   url: {
      status: false,
      code: 404,
      creator: creator,
      message: `Silahkan masukan parameter url`
   }

}

var len = 15
var arr = '123456789abcdefghijklmnopqrstuvwxyz'
var random = '';

for (var i = len; i > 0; i--) {
   random += arr[Math.floor(Math.random() * arr.length)];
}

var lenn = 5
var randomlagi = '';

for (var i = lenn; i > 0; i--) {
   randomlagi += arr[Math.floor(Math.random() * arr.length)];
}

var randomTextNumber = random + randomlagi + '---------Albe' + 'Albe--Gans';

//tiny shortner
router.get('/tiny', async (req, res, next) => {
   url = req.query.url
   if (!url) return res.json(m.url)

   request(`https://tinyurl.com/api-create.php?url=${url}`, function (error, response, body) {
      try {
         res.json({
            status: true,
            code: 200,
            creator: creator,
            result: {
               link: `${body}`,
            },
            message: `jangan lupa follow ${creator}`
         })
      } catch (e) {
         console.log('Error :', color(e, 'red'))
         res.json(`Url yang anda masukan salah\nexample: https://github.com`)
      }
   })
})

//nsfw
router.get('/nsfw/ass', async (req, res, next) => {
   var text = req.query.page
   fetch(encodeURI(`https://raw.githubusercontent.com/danzzcoding/data-danzzapi.xyz/main/nsfw/ass.json`))
      .then(response => response.json())
      .then(data => {
         var result = data;
         var result = data[Math.floor(Math.random() * data.length)];
         var requestSettings = {
            url: result.url,
            method: 'GET',
            encoding: null
         };
         request(requestSettings, function (error, response, body) {
            res.set('Content-Type', 'image/png');
            res.send(body);
         });
      })
})
router.get('/nsfw/ahegao', async (req, res, next) => {
   var text = req.query.page
   fetch(encodeURI(`https://raw.githubusercontent.com/danzzcoding/data-danzzapi.xyz/main/nsfw/ahegao.json`))
      .then(response => response.json())
      .then(data => {
         var result = data;
         var result = data[Math.floor(Math.random() * data.length)];
         var requestSettings = {
            url: result.url,
            method: 'GET',
            encoding: null
         };
         request(requestSettings, function (error, response, body) {
            res.set('Content-Type', 'image/png');
            res.send(body);
         });
      })
})
router.get('/nsfw/bdsm', async (req, res, next) => {
   var text = req.query.page
   fetch(encodeURI(`https://raw.githubusercontent.com/danzzcoding/data-danzzapi.xyz/main/nsfw/bdsm.json`))
      .then(response => response.json())
      .then(data => {
         var result = data;
         var result = data[Math.floor(Math.random() * data.length)];
         var requestSettings = {
            url: result.url,
            method: 'GET',
            encoding: null
         };
         request(requestSettings, function (error, response, body) {
            res.set('Content-Type', 'image/png');
            res.send(body);
         });
      })
})
router.get('/nsfw/blowjob', async (req, res, next) => {
   var text = req.query.page
   fetch(encodeURI(`https://raw.githubusercontent.com/danzzcoding/data-danzzapi.xyz/main/nsfw/blowjob.json`))
      .then(response => response.json())
      .then(data => {
         var result = data;
         var result = data[Math.floor(Math.random() * data.length)];
         var requestSettings = {
            url: result.url,
            method: 'GET',
            encoding: null
         };
         request(requestSettings, function (error, response, body) {
            res.set('Content-Type', 'image/png');
            res.send(body);
         });
      })
})
router.get('/nsfw/cuckold', async (req, res, next) => {
   var text = req.query.page
   fetch(encodeURI(`https://raw.githubusercontent.com/danzzcoding/data-danzzapi.xyz/main/nsfw/cuckold.json`))
      .then(response => response.json())
      .then(data => {
         var result = data;
         var result = data[Math.floor(Math.random() * data.length)];
         var requestSettings = {
            url: result.url,
            method: 'GET',
            encoding: null
         };
         request(requestSettings, function (error, response, body) {
            res.set('Content-Type', 'image/png');
            res.send(body);
         });
      })
})

//stalking
router.get('/stalking/github', async (req, res, next) => {
   var text = req.query.username
   if (!text) return res.json({ status: false, creator: `${creator}`, message: "masukan parameter username" })
   fetch(encodeURI(`https://github-api-zhirrr.vercel.app/api/detailuser?q=${text}`))
      .then(response => response.json())
      .then(data => {
         var result = data;
         res.json({
            author: 'Zeeone',
            result
         })
      }).catch(e => {
         console.log(e);
         res.json(loghandler.error)
      })
})

//downloader
router.get('/download/ytmp3', async (req, res, next) => {
   var url = req.query.url
   if (!url) return res.json({ status: false, creator: `${creator}`, message: "masukan parameter url" })
   const { id, thumbnail, audio: _audio, title } = await scr.youtubedlv2(url)
   try {
      for (let i in _audio) {
         audio = _audio[i]
         let kin = await audio.download()
         res.json({
            id: id,
            thumbnail: thumbnail,
            title: title,
            size: audio.fileSize,
            download: kin
         })
      }
   } catch (e) {
      console.log(e);
      res.json(loghandler.error)
   }
})

router.get('/download/ytmp4', async (req, res, next) => {
   var url = req.query.url
   if (!url) return res.json({ status: false, creator: `${creator}`, message: "masukan parameter url" })
   const { id, thumbnail, video: _video, title } = await scr.youtubedlv2(url)
   try {
      for (let i in _video) {
         video = _video[i]
         let kin = await video.download()
         res.json({
            id: id,
            thumbnail: thumbnail,
            title: title,
            size: video.fileSize,
            download: kin
         })
      }
   } catch (e) {
      console.log(e);
      res.json(loghandler.error)
   }
})

//photooxy
router.get('/photooxy/flaming', async (req, res, next) => {
       	var text = req.query.text
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})
       oxy("https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html", [text])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
.catch((err) =>{
 res.json(loghandler.error)
})
})
router.get('/photooxy/shadow-sky', async (req, res, next) => {
       	var text = req.query.text
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})
       oxy("https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html", [text])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
.catch((err) =>{
 res.json(loghandler.error)
})
})
router.get('/photooxy/metallic', async (req, res, next) => {
       	var text = req.query.text
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})
       oxy("https://photooxy.com/other-design/create-metallic-text-glow-online-188.html", [text])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
.catch((err) =>{
 res.json(loghandler.error)
})
})
router.get('/photooxy/naruto', async (req, res, next) => {
       	var text = req.query.text
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})
       oxy("https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html", [text])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
.catch((err) =>{
 res.json(loghandler.error)
})
})
router.get('/photooxy/pubg-mobile', async (req, res, next) => {
       	var text = req.query.text
       var text2 = req.query.text
       if (!text || !text2) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text & text2"})
       oxy("https://photooxy.com/battlegrounds/make-wallpaper-battlegrounds-logo-text-146.html", [text,text2])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
.catch((err) =>{
 res.json(loghandler.error)
})
})
module.exports = router
