/*
 * Copyright (C) 2012 David Geary. This code is from the book
 * Core HTML5 Canvas, published by Prentice-Hall in 2012.
 *
 * License:
 *
 * Permission is hereby granted, free of charge, to any person 
 * obtaining a copy of this software and associated documentation files
 * (the "Software"), to deal in the Software without restriction,
 * including without limitation the rights to use, copy, modify, merge,
 * publish, distribute, sublicense, and/or sell copies of the Software,
 * and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * The Software may not be used to create training material of any sort,
 * including courses, books, instructional videos, presentations, etc.
 * without the express written consent of David Geary.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
*/

var canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d');
var heightKadr = 900;

canvas.width = 1654;
canvas.height = heightKadr;

var position = 0;
   
var kadr = new Image;
kadr.src = "./images/kadr.png";

kadr.onload = function() {
   
var drawImage = function(pos, url, callback) {
    var img = new Image;
    img.src = "./images/" + url;
    console.log("Drawing: [" + pos + "] =" + img.src);
    img.onload = function() {
        var y = pos* heightKadr;
        console.log("LOADED: [" + pos + "] = " + y);
        context.drawImage(kadr, 0, 0, 250, 135, 0, y, 1654, heightKadr);
        context.drawImage(this, 0, 0, 730, 535, 305, y + 48, 1050, 810);
        context.save();
        setTimeout(function() {
          callback(); 
        }, 500);
    }
};

function drawImages(urls) {
  // increase significantly
  console.log("LENGTH "  + urls.length);
  canvas.height = heightKadr * urls.length;
  context = canvas.getContext('2d');

  var inputUrls = urls;
  var ttt = 0;
  function drawImagesReq() {
    if (inputUrls.length ==0)
      return;
     var poste = ttt;
     drawImage(poste, inputUrls.shift(), function(){
         ++ttt;
         drawImagesReq();
      });
     
  }

  drawImagesReq();
}

var sortList = function(ll) {
  function getById(id) {
      for (var x in ll) {
          if (ll[x].indexOf(id) >= 0) {
              return ll[x];
          }
      }
      return null;
  }
  var result = new Array();
  for (var y =1; y< ll.length; ++y) {
      
      var rr = getById((y < 10 ?"_img00": "_img0") + y);
      if (!rr)
        rr = getById((y < 10 ?"_img0": "_img") + y);
      if (!rr)
        console.log("Could not find item: _img" + y);
      else
        result.push(rr);
  }
  return result;
}


var xlist = sortList(["1459714103_img021.jpg",
"1459714105_img015.jpg",
"1459714107_img020.jpg",
"1459714108_img016.jpg",
"1459714111_img022.jpg",
"1459714112_img030.jpg",
"1459714116_img009.jpg",
"1459714117_img012.jpg",
"1459714121_img028.jpg",
"1459714130_img023.jpg",
"1459714131_img033.jpg",
"1459714131_img41.jpg",
"1459714135_img025.jpg",
"1459714135_img49.jpg",
"1459714136_img027.jpg",
"1459714136_img66.jpg",
"1459714140_img55.jpg",
"1459714142_img72.jpg",
"1459714143_img019.jpg",
"1459714143_img56.jpg",
"1459714143_img75.jpg",
"1459714145_img002.jpg",
"1459714146_img034.jpg",
"1459714147_img46.jpg",
"1459714149_img018.jpg",
"1459714149_img59.jpg",
"1459714150_img011.jpg",
"1459714151_img038.jpg",
"1459714151_img48.jpg",
"1459714151_img77.jpg",
"1459714152_img006.jpg",
"1459714152_img029.jpg",
"1459714153_img035.jpg",
"1459714154_img031.jpg",
"1459714156_img003.jpg",
"1459714156_img013.jpg",
"1459714156_img61.jpg",
"1459714156_img65.jpg",
"1459714157_img004.jpg",
"1459714157_img76.jpg",
"1459714160_img78.jpg",
"1459714164_img036.jpg",
"1459714165_img026.jpg",
"1459714165_img62.jpg",
"1459714166_img001.jpg",
"1459714170_img014.jpg",
"1459714171_img017.jpg",
"1459714172_img010.jpg",
"1459714172_img024.jpg",
"1459714172_img47.jpg",
"1459714173_img73.jpg",
"1459714174_img63.jpg",
"1459714176_img005.jpg",
"1459714176_img67.jpg",
"1459714177_img42.jpg",
"1459714177_img58.jpg",
"1459714177_img68.jpg",
"1459714179_img008.jpg",
"1459714180_img39.jpg",
"1459714182_img53.jpg",
"1459714184_img037.jpg",
"1459714187_img007.jpg",
"1459714187_img43.jpg",
"1459714188_img52.jpg",
"1459714189_img69.jpg",
"1459714190_img57.jpg",
"1459714192_img40.jpg",
"1459714194_img64.jpg",
"1459714196_img70.jpg",
"1459714201_img44.jpg",
"1459714202_img032.jpg",
"1459714203_img71.jpg",
"1459714209_img51.jpg",
"1459714209_img60.jpg",
"1459714211_img54.jpg",
"1459714214_img45.jpg",
"1459714215_img74.jpg",
"1459714216_img50.jpg"]
);


    var testList = [];
for (var ff =0; ff < 30; ++ff) {
testList.push(xlist[ff]);
}

drawImages(testList);

}; // kadr onload
