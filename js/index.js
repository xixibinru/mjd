window.onload = function () {
    //header搜索框变色
    (function(window,document){
        var header = document.getElementById('header');
        var carousel = document.getElementById('carousel')
        var carouselHeight = carousel.offsetHeight;
        var headerHeight = header.offsetHeight;
        function Hopacity() {
            var scrollTop = document.body.scrollTop;
            var opacity = scrollTop / (carouselHeight-headerHeight) * 0.85;
            if(opacity < 0.85)
                header.style.backgroundColor = 'rgba(201,21,35,'+opacity+')';
        }
        Hopacity();
        window.onscroll = function () {
            Hopacity();
        }
    })(window,document);

    //轮播图
    (function(window,document){
        var src = document.querySelector('#carousel>ul');
        slider_(src,1000);
    })(window,document);
}
