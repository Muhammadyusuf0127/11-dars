function num(text) {
    var num = 0;
    var unlilar = ['a', 'e', 'i', 'o', 'u',"o'"];
    
    for (var i = 0; i < text.length; i++) {
      var harf = text[i].toLowerCase();
      
      if (unlilar.includes(harf)) {
        num++;
      }
    }
    
    return num;
  }
  var matn = prompt('Matn kiriting:');
  var num = num(matn);
  
  console.log('Siz kiritgan matnda', num, 'ta unli harf mavjud.');
  