$(document).ready(function (){
    var currentFloor = 2; //текущий этаж
    var counterUp = $('.counter-up');
    var counterDown = $('.counter-down');
    var floorPath = $('.home-image path');//этажи в свг
    var modal = $(".modal");
    var modalCloseButton = $(".modal-close-button");
    var viewFlatsButton =$(".view-flats");
    floorPath.on('mouseover',function (){ // наведение на этаж
        floorPath.removeClass('current-floor'); //удаление активного класса у этажей
        currentFloor = $(this).attr('data-floor'); //запись текущего этажа в переменную
       $('.counter').text(currentFloor);//счетчик справа
    });
    counterUp.on('click',function (){ //кнопка вверх
        if (currentFloor < 18){ //проверка этажа
            currentFloor++; //+
            usCurrentFloor = currentFloor.toLocaleString('en-Us',{minimumIntegerDigits:2,useGrouping:false}); //01 а не 1
            $('.counter').text(usCurrentFloor); // счетчик справа
            floorPath.removeClass('current-floor'); // очищение класса
            $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');// подсветка этажа
        }
    });

    floorPath.on('click',function (){
        modal.toggleClass('is-open');
    })

    modalCloseButton.on('click',function (){
        modal.toggleClass('is-open');
    })
    viewFlatsButton.on('click',function (){
        modal.toggleClass('is-open');
    })

    counterDown.on('click', function (){
        if (currentFloor > 2){
            currentFloor--;
            usCurrentFloor = currentFloor.toLocaleString('en-Us',{minimumIntegerDigits:2,useGrouping:false});
            $('.counter').text(usCurrentFloor);
            floorPath.removeClass('current-floor');
            $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
        }
    })
})