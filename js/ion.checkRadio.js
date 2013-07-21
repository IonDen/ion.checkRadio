// Ion.CheckRadio
// version 1.0.0, build: 14
// © 2013 Denis Ineshin | IonDen.com
//
// Project page:    http://ionden.com/a/plugins/ion.CheckRadio/en.html
// GitHub page:     https://github.com/IonDen/ion.CheckRadio
//
// Released under MIT licence:
// http://ionden.com/a/plugins/licence-en.html
// =====================================================================================================================

(function($){
    var pluginCount = 0;
    var methods = {
        init: function(){
            return this.each(function(){
                var $input = $(this),
                    $label,
                    $elem,

                    disabled,
                    checked,
                    type,
                    id,
                    name,
                    html,
                    text,

                    self = this;



                //prevent overwrite
                if($input.data("isActive")) {
                    return;
                }
                $input.data("isActive", true);

                pluginCount++;
                this.pluginCount = pluginCount;



                // private methods
                var getInfo = function(){
                    type = $input.prop("type");
                    disabled = $input.prop("disabled");
                    checked = $input.prop("checked");
                    name = $input.prop("name");

                    getText();
                };

                var getText = function(){
                    $label = $input.parent("label");

                    if($label.length > 0) {
                        text = $label.text().trim();
                    } else {
                        id = $input.prop("id");
                        $label = $("label[for='"+id+"']");
                        if($label.length > 0) {
                            text = $label.text().trim();
                        } else {
                            throw new Error("Label not found!");
                        }
                    }

                    hideOld();
                };

                var hideOld = function(){
                    $input[0].style.display = "none";
                    $label[0].style.display = "none";

                    placeNew();
                };

                var placeNew = function(){
                    if(disabled) {
                        if(checked) {
                            html = '<span class="icr disabled checked" id="icr-'+self.pluginCount+'">';
                        } else {
                            html = '<span class="icr disabled" id="icr-'+self.pluginCount+'">';
                        }
                    } else {
                        if(checked) {
                            html = '<span class="icr enabled checked" id="icr-'+self.pluginCount+'">';
                        } else {
                            html = '<span class="icr enabled" id="icr-'+self.pluginCount+'">';
                        }
                    }

                    html += '<span class="icr__'+type+'"></span>';
                    html += '<span class="icr__text">'+text+'</span>';
                    html += '</span>';

                    $label.after(html);
                    $elem = $("#icr-" + self.pluginCount);

                    bindEvents();
                };

                var bindEvents = function(){
                    $elem.on("click", function(){
                        if(!disabled) {
                            if(checked) {
                                checkOff();
                            } else {
                                checkOn();
                            }
                        }
                    });

                    $elem.on("mousedown", function(e){
                        e.preventDefault();
                        return false;
                    });

                    $input.on("stateChanged", function(){
                        checkListen();
                    });
                };

                var checkOn = function(){
                    $input.prop("checked", true);
                    $("input[name='"+name+"']").trigger("stateChanged");
                };

                var checkOff = function(){
                    $input.prop("checked", false);
                    $("input[name='"+name+"']").trigger("stateChanged");
                };

                var checkListen = function(){
                    checked = $input.prop("checked");
                    if(checked) {
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

    $.fn.ionCheckRadio = function(method){
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