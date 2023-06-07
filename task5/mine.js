let year = prompt('рік народження', '1990');
let age = 2023 - year;
if(year == null) {
  alert('Шкода, що Ви не захотіли ввести свій рік народження');
  age =  '-'
} 
 




let city = prompt('Введіть Ваше місто', 'Харків');
if(city == null) {
  alert('Шкода що Ви не захотіли ввести своє місто');
  city = '-';
}


let sport = prompt('Введіть Ваш улюблений спорт');
if(sport == null) {
  alert('Шкода що Ви не захотіли ввести свій улюблений спорт', 'Харків');
  sport = '-';
}

let cityText = '';
switch(city) {
  case('Kиїв') : 
    cityText = `Ти живеш у столиці України.`;
    break;
  case('Лондон') : 
    cityText = `Ти живеш у столиці Великобританії.`;
    break;
  case('Вашингтон') : 
    cityText = `Ти живеш у столиці США.`;
    break;
  default:
    cityText = `Ти живеш у місті ${city}.`;
}

let sportText = '';
switch(sport) {
  case('футбол') : 
    sportText = `Твій улюблений спорт - футбол. Круто! Хочеш стати Mессі!`;
    break;
  case('теніс') : 
    sportText = `Твій улюблений спорт - теніс. Круто! Хочеш стати Ксю Ксіном!`;
    break;
  case('плавання') : 
    sportText = `Твій улюблений спорт - плавання. Круто! Хочеш стати Фелпсом!`;
    break;
  default:
    sportText = `Твій улюблений спорт ${sport}.`;
}

alert(`Тобі - ${age}\n${cityText}\n${sportText}`);