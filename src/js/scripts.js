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
});
