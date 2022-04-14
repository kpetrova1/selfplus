'use strict';
import './inView.jquery.min';

$(document).ready(function () {
  $('.tab__btn').on('click', function () {
    if ($(this).parent().hasClass('tab--active')) {
      $(this).parent().removeClass('tab--active');
      $(this).siblings('.tab__body').slideUp(200);
    } else {
      $('.tab__btn').parent().removeClass('tab--active');
      $('.tab-img').removeClass('tab-img--active');
      $(this).parent().addClass('tab--active');
      const tabNum = $(this).parent().attr('data-tab');
      $('.tab-img[data-tab="' + tabNum + '"]').addClass('tab-img--active');
      $('.tab__body').slideUp(200);
      $(this).siblings('.tab__body').slideDown(200);
    }
  });

  $('.open-popup-btn').on('click', function () {
    $('.popup').removeAttr('hidden');
    $('body').addClass('locked');
  });

  $('.close-popup').on('click', function () {
    $('.popup').attr('hidden', true);
    $('body').removeClass('locked');
  });


  let contentSections = $('section'),
    navigationItems = $('.nav-dots a');

  updateNavigation();
  $(window).on('scroll', function () {
    updateNavigation();
  });

  navigationItems.on('click', function (event) {
    event.preventDefault();
    smoothScroll($(this.hash));
  });

  function updateNavigation() {
    contentSections.each(function () {
      let activeSection = $('.nav-dots a[href="#' + $(this).attr('id') + '"]').data('number') - 1;
      if (
        $(this).offset().top - $(window).height() / 2 < $(window).scrollTop() &&
        $(this).offset().top + $(this).height() - $(window).height() / 2 > $(window).scrollTop()
      ) {
        navigationItems.eq(activeSection).addClass('nav-dots__item--selected');
      } else {
        navigationItems.eq(activeSection).removeClass('nav-dots__item--selected');
      }
    });
  }

  function smoothScroll(target) {
    $('body,html').animate({ scrollTop: target.offset().top }, 600);
  }
});
