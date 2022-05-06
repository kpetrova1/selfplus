'use strict';
import './inView.jquery.min';

const FORM_PENDING_TEXT = 'Please wait...'

$(document).ready(function () {
  $('.tab__btn').on('click', function () {
    if ($(this).parent().hasClass('tab--active')) {
      $(this).parent().removeClass('tab--active');
      $(this).siblings('.tab__body').slideUp(400);
    } else {
      $('.tab__btn').parent().removeClass('tab--active');
      $('.tab-img').removeClass('tab-img--active');
      $(this).parent().addClass('tab--active');
      const tabNum = $(this).parent().attr('data-tab');
      $('.tab-img[data-tab="' + tabNum + '"]').addClass('tab-img--active');
      $('.tab__body').slideUp(400);
      $(this).siblings('.tab__body').slideDown(400);
    }
  });

  $('.open-popup-btn').on('click', function () {
    $('.popup').removeAttr('hidden');
    $('body').addClass('locked');
    $('.popup__inner.result').attr('hidden', true);
    $('.popup__inner.form').removeAttr('hidden');
  });

  $('.close-popup').on('click', function () {
    $('.popup').attr('hidden', true);
    $('body').removeClass('locked');
  });

  $("input[name='Type']").change(function(e){
    const btn = e.currentTarget;
    if ($(btn).attr('id') === 'email') {
      $("#username").attr('placeholder', 'me@example.com')
    } else {
      $("#username").attr('placeholder', '@username')
    }
  });

  let isFormPending = false;

  // Send data
  $('form.popup__form').submit(function (e) {
    e.preventDefault();
    const form = $(this);
    const url = form.attr('action');
    if (url && !isFormPending) {
      const btn = form.find('button[type=submit]');
      const errorMsg = form.find('.popup__subtitle.error');
      const formWrap = $('.popup__inner.form');
      const result = $('.popup__inner.result');
      const btnText = btn.text();
      const fields = form.serializeArray().reduce(
        (acc, {name,value}) =>({...acc,[name]:value}),
        {},
      );
      fields['Date'] = new Date().toISOString();

      btn.text(FORM_PENDING_TEXT);
      btn.attr('disabled', true);
      errorMsg.attr('hidden', true);
      isFormPending = true;

      fetch(url, {
        method: 'POST',
        body: JSON.stringify([{fields}]),
      })
        .then(r => r.json())
        .then((data) => {
          if (data.success) {
            formWrap.attr('hidden', true);
            result.removeAttr('hidden');
          } else {
            console.error(data.err);
            errorMsg.removeAttr('hidden');
          }
        })
        .finally(() => {
          isFormPending = false;
          btn.text(btnText);
          btn.removeAttr('disabled');
        });
    }

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
        $(this).offset().top - $(window).height() / 4 < $(window).scrollTop() &&
        $(this).offset().top + $(this).height() - $(window).height() / 4 > $(window).scrollTop()
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
