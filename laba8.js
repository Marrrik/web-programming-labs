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