// Ion.CheckRadio
// version 1.1.0 Build: 23
// © 2014 Denis Ineshin | IonDen.com
//
// Project page:    http://ionden.com/a/plugins/ion.CheckRadio/en.html
// GitHub page:     https://github.com/IonDen/ion.CheckRadio
//
// Released under MIT licence:
// http://ionden.com/a/plugins/licence-en.html
// =====================================================================================================================

(function ($) {
    var plugin_count = 0;

    if (!String.prototype.trim) {
        String.prototype.trim = function () {
            return this.replace(/^\s+|\s+$/g, '');
        };
    }

    var methods = {
        init: function () {
            return this.each(function () {
                var $input = $(this),
                    $label,
                    $elem,
                    $container,
                    hidden,

                    disabled,
                    checked,
                    type,
                    id,
                    name,
                    html,
                    text,
                    temp_text,

                    self = this;



                //prevent overwrite
                if ($input.data("isActive")) {
                    return;
                }
                $input.data("isActive", true);

                plugin_count += 1;
                this.plugin_count = plugin_count;

                hidden = '<div class="icr__hidden" id="icr-container__' + this.plugin_count + '"></div>';



                // private methods
                var getInfo = function () {
                    type = $input.prop("type");
                    disabled = $input.prop("disabled");
                    checked = $input.prop("checked");
                    name = $input.prop("name");

                    getText();
                };

                var getText = function () {
                    $label = $input.parent("label");

                    if ($label.length > 0) {
                        $label.after(hidden);
                        $container = $("#icr-container__" + self.plugin_count);
                        $input.appendTo($container);
                        $label.appendTo($container);

                        text = $label.html();
                        temp_text = text.replace(/<input["-=a-zA-Z\u0400-\u04FF\s\d\[\]\_]+>{1}/,"");
                        text = temp_text.trim();
                    } else {
                        id = $input.prop("id");
                        $label = $("label[for='"+id+"']");
                        $label.after(hidden);
                        $container = $("#icr-container__" + self.plugin_count);
                        $input.appendTo($container);
                        $label.appendTo($container);

                        if ($label.length > 0) {
                            text = $label.html();
                            temp_text = text.toString();
                            text = temp_text.trim();
                        } else {
                            throw new Error("Label not found!");
                        }
                    }

                    placeNew();
                };

                var placeNew = function () {
                    if (disabled) {
                        if (checked) {
                            html = '<span class="icr disabled checked" id="icr-' + self.plugin_count + '">';
                        } else {
                            html = '<span class="icr disabled" id="icr-' + self.plugin_count + '">';
                        }
                    } else {
                        if (checked) {
                            html = '<span class="icr enabled checked" id="icr-'+self.plugin_count + '">';
                        } else {
                            html = '<span class="icr enabled" id="icr-' + self.plugin_count + '">';
                        }
                    }

                    html += '<span class="icr__' + type + '"></span>';
                    html += '<span class="icr__text">' + text + '</span>';
                    html += '</span>';

                    $container.after(html);
                    $elem = $("#icr-" + self.plugin_count);

                    bindEvents();
                };

                var bindEvents = function () {
                    $elem.on("click", function () {
                        if (!disabled) {
                            if (checked && type !== 'radio') {
                                checkOff();
                            } else {
                                checkOn();
                            }
                        }
                    });

                    $elem.on("mousedown", function (e) {
                        e.preventDefault();
                        return false;
                    });

                    $input.on("stateChanged", function () {
                        checkListen();
                    });
                };

                var checkOn = function () {
                    $input.prop("checked", "checked");
                    $input.trigger("change");
                    $("input[name='"+name+"']").trigger("stateChanged");
                };

                var checkOff = function () {
                    $input.removeProp("checked");
                    $input.trigger("change");
                    $("input[name='"+name+"']").trigger("stateChanged");
                };

                var checkListen = function () {
                    checked = $input.prop("checked");
                    if (checked) {
                        $elem.addClass("checked");
                    } else {
                        $elem.removeClass("checked");
                    }
                };



                // yarrr!
                getInfo();
            });
        }
    };

    $.fn.ionCheckRadio = function (method) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' + method + ' does not exist for jQuery.ionCheckRadio');
            return false;
        }
    };
})(jQuery);
