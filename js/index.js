$(function () {
  $(window).on('resize', function () {
    // 1.1获取窗口的宽度
    let clientW = $(window).width();

    // 1.2设置临界值
    let isShowBigImage = clientW >= 800;

    // 1.3获取所有的item
    let $allItems = $('#lk_carousel .item');

    // 1.4遍历
    $allItems.each(function (index, item) {
      // 1.4.1 取出图片的路径
      let src = isShowBigImage ? $(item).data('lg-img') : $(item).data('sm-img');
      let imgUrl = 'url("'+src+'")';

      // 1.4.2 设置背景图片
      $(item).css({
        backgroundImage: imgUrl
      })

      // 1.4.3 设置小窗口图片
      if(!isShowBigImage) {
        let $img = "<img src='"+src+"'>";
        $(item).empty().append($img);
      }else {
        $(item).empty();
      }
    })
  })

  $(window).trigger('resize');

  // 2.工具提示
  $('[data-toggle="tooltip"]').tooltip();

  // 3.动态处理宽度
  $(window).on('resize', function () {
    let $ul = $('#lk_product .nav');
    let $allLis = $("[role='presentation']", $ul);
    // console.log($allLis);

    // 3.1遍历
    let totalW = 0;
    $allLis.each(function (index, item) {
      totalW += $(item).width();
    })
    console.log(totalW);

    let parentW = $ul.parent().width();

    // 3.2设置宽度
    if(totalW > parentW) {
      $ul.css({
        width: totalW + 'px'
      })
    }else {
      $ul.removeAttr("style");
    }
  })

  // 4.导航处理
  let allLis = $('#lk_nav li');

  // 关于我们导航
  $(allLis[0]).on('click', function () {
    $('html,body').animate({scrollTop: $('#lk_about').offset().top}, 500);
  })

  // 热门课程导航
  $(allLis[2]).on('click', function () {
    $('html,body').animate({scrollTop: $('#lk_hot').offset().top}, 500);
  })

  $(window).trigger('resize');
})