export function apptable(num)
{
    //делаем таблицу размером num x num
    let tab = document.getElementById('tab');
    //добавляем столбцы
    let start = '<td></td><td></td>';
    let addition = '<td></td>';
    for (let i = 3; i <= num; i++)
    {
       start = start + addition;
    }

    let trEl = document.querySelectorAll('tr');

    trEl.forEach(function(el,key){
      el.innerHTML = '<tr>'+start+'</tr>';
    });

    //добавляем строки
    for (let i = 3; i <= num; i++)
    {
      let trLast = document.createElement('tr');
      trLast.innerHTML = start;
      tab.append(trLast);
    }
}







