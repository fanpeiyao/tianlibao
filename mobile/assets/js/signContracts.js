$(function () {

    //同意条款icon切换
    $('.agreeIcon').click(function () {
        $(this).toggleClass(function() {
            if ($(this).hasClass('icon-yuanquan1')) {
                return  'icon-icon-test'
            }else{
                return 'icon-yuanquan1'
            }
        })
    })


    
})