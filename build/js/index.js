
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvaW5kZXguanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIn0=


(function Check() {
    $('.navigation__menu-btnClose').on('click', function () {
        $('.navigation').removeClass('navigation--opened').addClass('navigation--closed');
    });

    $('.navigation__menu-btnOpen').on('click', function () {
        $('.navigation').removeClass('navigation--closed').addClass('navigation--opened');
    });
}());