import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from './../../../services/auth.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApiService } from './../../../services/api.service';
import { Component, OnInit, ViewChild } from '@angular/core';
// import {} from 'googlemaps';

declare var google;
declare var $;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('map', {static: true}) mapElement: any;
  display = true;
  map: google.maps.Map;
  isLoading = true;
  counters: any;
  centerCords = {
    lat: null,
    lng: null
    };
    locations: any;
    markersOnMap: any;
    options = {
      minValue: 0,
      maxValue: 240,
      animationRule: 'elastic',
      animationDuration: 500
   };
   speed: any;
   angle: any;
  constructor(
    private api: ApiService,
    private spinner: NgxSpinnerService,
    private auth: AuthService,
    public toast: ToastrService,
    public http: HttpClient
  ) {
   }
  ngOnInit() {
    $(document).ready(function(e) {
      var $donation_form = $("#paypal_donate_form_onetime_recurring");
      //toggle custom amount
      var $custom_other_amount = $donation_form.find("#custom_other_amount");
      $custom_other_amount.hide();
      $donation_form.find("select[name='amount']").change(function() {
          var $this = $(this);
          if ($this.val() == 'other') {
              $custom_other_amount.show().append('<div class="input-group"><span class="input-group-addon">$</span> <input id="input_other_amount" type="text" name="amount" class="form-control" value="100"/></div>');
          } else {
              $custom_other_amount.children(".input-group").remove();
              $custom_other_amount.hide();
          }
      });

      //toggle donation_type_choice
      var $donation_type_choice = $donation_form.find("#donation_type_choice");
      $donation_type_choice.hide();
      $("input[name='payment_type']").change(function() {
          if (this.value == 'recurring') {
              $donation_type_choice.show();
          } else {
              $donation_type_choice.hide();
          }
      });


      // submit form on click
      $donation_form.on('submit', function(e) {
          $("#paypal_donate_form-onetime").submit();
          var item_name = $donation_form.find("select[name='item_name'] option:selected").val();
          var currency_code = $donation_form.find("select[name='currency_code'] option:selected").val();
          var amount = $donation_form.find("select[name='amount'] option:selected").val();
          var t3 = $donation_form.find("input[name='t3']:checked").val();

          if (amount == 'other') {
              amount = $donation_form.find("#input_other_amount").val();
          }

          // submit proper form now
          if ($("input[name='payment_type']:checked", $donation_form).val() == 'recurring') {
              var recurring_form = $('#paypal_donate_form-recurring');

              recurring_form.find("input[name='item_name']").val(item_name);
              recurring_form.find("input[name='currency_code']").val(currency_code);
              recurring_form.find("input[name='a3']").val(amount);
              recurring_form.find("input[name='t3']").val(t3);

              recurring_form.find("input[type='submit']").trigger('click');

          } else if ($("input[name='payment_type']:checked", $donation_form).val() == 'one_time') {
              var onetime_form = $('#paypal_donate_form-onetime');

              onetime_form.find("input[name='item_name']").val(item_name);
              onetime_form.find("input[name='currency_code']").val(currency_code);
              onetime_form.find("input[name='amount']").val(amount);

              onetime_form.find("input[type='submit']").trigger('click');
          }
          return false;
      });
  });
  $(document).ready(function(e) {
    $(".rev_slider").revolution({
        sliderType: "standard",
        sliderLayout: "fullscreen",
        dottedOverlay: "none",
        delay: 5000,
        navigation: {
            keyboardNavigation: "off",
            keyboard_direction: "horizontal",
            mouseScrollNavigation: "off",
            onHoverStop: "off",
            touch: {
                touchenabled: "on",
                swipe_threshold: 75,
                swipe_min_touches: 1,
                swipe_direction: "horizontal",
                drag_block_vertical: false
            },
            arrows: {
                style: "gyges",
                enable: true,
                hide_onmobile: false,
                hide_onleave: true,
                hide_delay: 200,
                hide_delay_mobile: 1200,
                tmp: '',
                left: {
                    h_align: "left",
                    v_align: "center",
                    h_offset: 0,
                    v_offset: 0
                },
                right: {
                    h_align: "right",
                    v_align: "center",
                    h_offset: 0,
                    v_offset: 0
                }
            },
            bullets: {
                enable: true,
                hide_onmobile: true,
                hide_under: 800,
                style: "hebe",
                hide_onleave: false,
                direction: "horizontal",
                h_align: "center",
                v_align: "bottom",
                h_offset: 0,
                v_offset: 30,
                space: 5,
                tmp: '<span class="tp-bullet-image"></span><span class="tp-bullet-imageoverlay"></span><span class="tp-bullet-title"></span>'
            }
        },
        responsiveLevels: [1240, 1024, 778, 480],
        visibilityLevels: [1240, 1024, 778, 480],
        gridwidth: [1170, 1024, 778, 480],
        gridheight: [550, 768, 960, 720],
        lazyType: "none",
        parallax: {
            origo: "slidercenter",
            speed: 1000,
            levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 46, 47, 48, 49, 50, 100, 55],
            type: "scroll"
        },
        shadow: 0,
        spinner: "off",
        stopLoop: "on",
        stopAfterLoops: 0,
        stopAtSlide: -1,
        shuffle: "off",
        autoHeight: "off",
        fullScreenAutoWidth: "off",
        fullScreenAlignForce: "off",
        fullScreenOffsetContainer: "",
        fullScreenOffset: "0",
        hideThumbsOnMobile: "off",
        hideSliderAtLimit: 0,
        hideCaptionAtLimit: 0,
        hideAllCaptionAtLilmit: 0,
        debugMode: false,
        fallbacks: {
            simplifyAll: "off",
            nextSlideOnWindowFocus: "off",
            disableFocusListener: false,
        }
    });
});
  }
}
