app.directive("simpleSwitch", function($compile) {

	// easy way to do it

    var TIME_COST = 100,
        htmlMarkup =
        "<div class=\"container-switch\" >" +
            "<div class=\"switch-left\">" +
            "{{trueText}}" +
            "</div>" +
            "<div class=\"switch-right switch-background-right\">" +
            "{{falseText}}<div class=\"switch-anchor\" ></div>" +
            "</div>" +
            "</div>";

    var moveToRight = function(rn, ln, timecost) {
        if (!timecost && timecost != 0) {
            timecost = TIME_COST;
            setTimeout(function() {
                rn.addClass('anchor-right-background');
            }, timecost - 50 );
        } else {
            rn.addClass('anchor-right-background');
        }

        ln.stop().animate({
            left: '0px'
        }, timecost);

        rn.stop().animate({
            left: '32px'
        }, timecost);
    };

    var moveToLeft = function(rn, ln, timecost) {
        if (!timecost)
            timecost = TIME_COST;
        rn.removeClass('anchor-right-background');
        ln.stop().animate({
            left: '-32px'
        }, timecost);

        rn.stop().animate({
            left: '0px'
        }, timecost);
    };

    return {
        restrict: 'AC',
        template: htmlMarkup,
        scope: {
            trueText: "@",
            falseText: "@",
            value: "=",
            onswitch: "&"
        },

        link : function(scope, el, attr, ctrl){
            var falseValue = false,
                trueValue = true;

            if (attr.falseValue)
                falseValue = attr.falseValue;
            if (attr.trueValue)
                trueValue = attr.trueValue;

            var initial = 1;

            scope.$watch(function() {
                return scope.value;
            }, function(newValue) {
                if (initial == 1) {
                    initial = 0;
                    init();
                } else {
                    var ln = $(el.find(".switch-left")),
                        rn = $(el.find(".switch-right"));

                    scope.onswitch();

                    if (isOn(scope.value)) {
                        moveToRight(rn, ln);
                    } else {
                        moveToLeft(rn, ln);
                    }
                }
            });

            el.bind("click", function() {
                scope.value = reverseModel(scope);
                scope.$apply();
            });


            function reverseModel(scope) {
                if (isOn(scope.value)) {
                    return falseValue;
                } else {
                    return trueValue;
                }
            }

            function init() {
                var ln = $(el.find(".switch-left")),
                    rn = $(el.find(".switch-right"));

                if (isOn(scope.value)) {
                    moveToRight(rn, ln, 0);
                } else {
                    moveToLeft(rn, ln, 0);
                }
            }

            function isOn(value) {
                var isOn = false;
                if (value == trueValue) {
                    isOn = true;
                }
                return isOn;
            }
        }
    };
});