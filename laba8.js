function ShowDate(){
    let out0 = document.getElementById('current_date0');
    let out1 = document.getElementById('current_date1');
    let out2 = document.getElementById('current_date2');
    let out3 = document.getElementById('current_date3');
    let out4 = document.getElementById('current_date4');
    let Todey0 = new Date ();
    let Today1 = new Date();
    let Today2 = new Date();
    let Today3 = new Date();
    let Today4 = new Date();
    out0.innerHTML ="Дата и время для русской локали: " + Todey0.toLocaleString('ru-RU');
    out1.innerHTML ="Дата и время для американской локали: " + Today1.toLocaleString('en-US');
    out2.innerHTML ="Дата и время для французской локали: " + Today2.toLocaleString('fr-FR');
    out3.innerHTML ="Дата и время для японской локали: " + Today3.toLocaleString('ja-JP');
    out4.innerHTML ="Дата и время для китайской локали: " + Today4.toLocaleString('zh-CN');

}

function showDaysCount() {
    let today = new Date();
    let inputDate = document.querySelector('input[type=date');
    let birthday = new Date(inputDate.value);
    let daysCount = (today - birthday)/1000/60/60/24;
    daysCount = Math.floor(daysCount);
    let day = document.getElementById('days');
    if(isNaN(inputDate)){
        day.innerHTML = 'Нет значений';
    }
    else{
        day.innerHTML = 'Количество дней с дня рождения: ' + daysCount;
    }
}
function Clear(){
    let inputDate = document.querySelector('input[type=date');
    let day = document.getElementById('days');

    inputDate.value = '';
    day.innerHTML = '';
}

function showTime() {
    let today = new Date();
    let currentTime = today.toLocaleTimeString('ru-RU');
    document.getElementById('clock').innerHTML = currentTime;
}
setInterval(showTime, 1000);

