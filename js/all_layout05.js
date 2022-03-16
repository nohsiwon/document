$(function(){
//////////////////////////////
// $('선택').on('이벤트', 할일)
// 일 => function 일() {}
    
//$(this)  나
//$(this).index()  번호
    
function tabMenu() {
    var idx = $(this).index(); //0,1,2,3
    $('.tabLink li').removeClass('active');
    $(this).addClass('active');
    $('.tabContent>div').removeClass('active');
    //$('.tabContent>div').eq(idx).addClass('active').siblings().removeClass('active');
}

$('.tabLink li').on('click', tabMenu);
    
$('.xi-close').on('click', function(){
    $('.headerWrap').slideToggle(2000);
})
//////////////////////////////
})