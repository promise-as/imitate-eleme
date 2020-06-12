window.onload = function () {
  var contentList = document.querySelectorAll('#app .content>div');
  var guideItems = document.querySelectorAll('#app .guide_item');
  var profileLink = document.querySelector('#app .profile-link');
  var loginOrRegister = document.querySelectorAll('.login_content>form>div');
  var loginA = document.querySelectorAll('.login_header_title>a');
  var switchCircle = document.querySelector('.switch_circle');
  var switchButton = document.querySelector('.switch_button');
  var switchText = document.querySelector('.switch_text');
  var goBack = document.querySelector('.go_back');
  var login = document.querySelector('#app>div');
  var headerLogin = document.querySelector('.header_login');

  function tabSwitch(btns, contentList, originalClass, switchClass) {
    btns.forEach(function (e, i) {
      e.index = i;
      e.onclick = function () {
        // 去掉全部的on
        btns.forEach(function (e2, i2) {
          e2.classList.value = originalClass;
          contentList[i2].classList.value = ''
        });
        // 添加on
        this.classList.value = originalClass + ' ' + switchClass;
        contentList[e.index].classList.value = switchClass
      }
    });
  }
  // footer tab切换
  tabSwitch(guideItems, contentList, 'guide_item', 'on',);

  // 轮播图
  var mySwiper = new Swiper('.swiper-container', {
    autoplay: 5000, //可选选项，自动滑动
    pagination: '.swiper-pagination',
  });
};