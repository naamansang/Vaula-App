function akanFunction() {
    var ay, bm, cd;
    var male, female;
  
    ay = parseInt(document.getElementById('year').value);
    bm = parseInt(document.getElementById('month').value);
    cd = parseInt(document.getElementById('dayOfMonth').value);
  
    male = document.getElementById('rad1').checked;
    female = document.getElementById('rad2').checked;
  
    var year, month, day;
    year = parseInt(ay);
    month = parseInt(bm);
    day = parseInt(cd);
  
  
    var century = parseInt((year - 1) / 100 + 1);
    var formula = (((26 * (month + 1) / 10)) + ((5 * year / 4)) + ((century / 4) - 2 * century - 1) + day) % 7;
    var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Afua", "Afua", "Ama"];
    var dayOfMonth = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var dayIndex = Math.floor(formula);
    dayIndex +=1;
  
  
    if (year > 0 && year < 2021) {
      if (month > 0 && month < 13) {
        if (day > 0 && day < 32) {
  
          if (male) {
            document.getElementById("result").innerHTML = (' You were born on a: ' + dayOfMonth[dayIndex] + ' your akan name is :' + maleNames[dayIndex]);
          } else {
            document.getElementById("result").innerHTML = (' You were born on a: ' + dayOfMonth[dayIndex]  + ' your akan name is:' + femaleNames[dayIndex]);
          }
  
        } else {
          alert("Input the correct date e.g 30");
        }
  
      } else {
        alert("Input the correct month e.g 12");
      }
  
    } else {
      alert("input the correct year e.g 2019");
    }
  }