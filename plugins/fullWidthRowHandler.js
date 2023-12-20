import $ from 'jquery';

export default ({ app }, inject) => {
  inject('fullWidthRowHandler', () => {
    const $elements = $('[data-vc-full-width="true"]');
    $.each($elements, function (key, item) {
      const $el = $(this);
      $el.addClass('vc_hidden');
      let el_margin_left,
        el_margin_right,
        offset,
        width,
        padding,
        paddingRight;
      const $el_full = $el.next('.vc_row-full-width');
      if ($el_full) {
        el_margin_left = parseInt($el.css('margin-left'), 10);
        el_margin_right = parseInt($el.css('margin-right'), 10);
        offset = 0 - $el_full.offset().left - el_margin_left;
        width = $(window).width();
        if ('rtl' === $el.css('direction')) {
          offset -= $el_full.width();
          offset += width;
          offset += el_margin_left;
          offset += el_margin_right;
        }
        $el.css({
          position: 'relative',
          left: offset,
          'box-sizing': 'border-box',
          width: width,
        });
        if (
          $el.data('vcStretchContent') ||
          'rtl' === $el.css('direction')
        ) {
          if ((padding = offset < 0 ? 0 : offset)) {
            if ((paddingRight = offset < 0 ? 0 : offset)) {
            }
          }
        } else {
          if (
            (paddingRight =
              width -
              (padding = (padding = -1 * offset) < 0 ? 0 : padding) -
              $el_full.width() +
              el_margin_left +
              el_margin_right) < 0
          ) {
            paddingRight = 0;
          }
        }
        $el.css({
          'padding-left': padding + 'px',
          'padding-right': paddingRight + 'px',
        });
        $el.attr('data-vc-full-width-init', 'true');
        $el.removeClass('vc_hidden');
      }
    });
  });
};
