var app = (function(){

    var test, test2 = 2, currentScrollLeft = 0, currentScreen = 1, loaderInterval = 0,

    init = function() {
        initializeScrollHandler();
        initializeClickHandlers();
        browserDetect();
    },

    hidePreload = function(){
        if($(window).height() > 800){
            //$('footer').css("top", "100%");
        }  

        if (navigator.userAgent.match(/msie/i) || navigator.userAgent.match(/trident/i) ){
            var angle = 0;
            loaderInterval = setInterval(function(){
                angle+=3;
                $(".load-bar").rotate(angle);
            },50);
        }
        $("section#pre-loading-wrapper").fadeOut(1000, function(){
            clearInterval(loaderInterval);
        });

        $("section#main-section-wrapper").fadeTo(500, 1, function(){
            app.init();
        });
    },

    initializeClickHandlers = function(){

        $(document).on("click", "#screen-eight-wrapper img#building", function(){
            //$('.modal-wrapper').css({left: $('body').scrollLeft()})
            $('.modal-wrapper .content-container').html("<iframe width='650' height='365' src='https://www.youtube.com/embed/hlRNO8xcrgU'>");
            $('.modal-wrapper').fadeIn(700);
        });
        

        $(document).on("click", "#choppa", function(){
            //$('.modal-wrapper').css({left: $('body').scrollLeft()})
            $('.modal-wrapper .content-container').html("<iframe width='650' height='365' src='https://www.youtube.com/embed/QzL-iySR6nw'>");
            $('.modal-wrapper').fadeIn(700);
        });        
        $(document).on("click", ".shard-building", function(){
            $('.modal-wrapper .content-container').html("<iframe width='650' height='365' src='https://www.youtube.com/embed/4vuf15SzSfM'>");
            $('.modal-wrapper').fadeIn(700);
        }); 
        $(document).on("click", ".gherkin-building", function(){
            $('.modal-wrapper .content-container').html("<iframe width='650' height='365' src='https://www.youtube.com/embed/QtbDj2zTc3c'>");
            $('.modal-wrapper').fadeIn(700);
        });        
        $(document).on("click", ".tube-building", function(){
            $('.modal-wrapper .content-container').html("<iframe width='650' height='365' src='https://www.youtube.com/embed/PH_Z8Ghuq6E'>");
            $('.modal-wrapper').fadeIn(700);
        });               
        $(document).on("click", ".modal-wrapper .close", function(){
            $('.modal-wrapper').fadeOut(700,function(){
                $('.modal-wrapper .content-container').html("");
            });
        });

        $(document).on("click", ".browser-detection .close", function(){
            $('.browser-detection').fadeOut(500);
        });

        $(document).on("click", ".eye-button", function(){
            var clickedElem = $(this);
            var popupElem = clickedElem.next();

            if(clickedElem.hasClass("active")){

                /*popupElem.stop().fadeTo(500, 0, function(){
                    clickedElem.removeClass("active");
                });*/


                popupElem.stop().fadeOut("fast", function(){
                    $('.numbers-box.active').removeClass('active');
                    clickedElem.removeClass("active");
                });

                if(popupElem.attr("data-type") == "height"){
                    $(".bus-height").fadeOut("fast");
                }
                else if(popupElem.attr("data-type") == "cost"){

                }
                else if(popupElem.attr("data-type") == "value"){

                }
                else if(popupElem.attr("data-type") == "floor"){

                }
                
            }
            else{
                $(".popup-text-wrapper:visible").stop().fadeOut("fast", function(){
                    $('.numbers-box.active').removeClass('active');
                    $(".eye-button.active").removeClass("active");                  
                    clickedElem.addClass("active");
                    clickedElem.parents('.numbers-box').addClass('active');
                });
                $(".bus-height:visible").fadeOut("fast");
                if(popupElem.attr("data-type") == "height"){
                    $(clickedElem).parents("section.screen-wrapper").find(".bus-height").fadeIn("fast");
                }
                else if(popupElem.attr("data-type") == "cost"){

                }
                else if(popupElem.attr("data-type") == "value"){

                }
                else if(popupElem.attr("data-type") == "floor"){

                }

                /*popupElem.stop().fadeTo(500, 1, function(){
                    clickedElem.addClass("active");
                });*/                
                clickedElem.parents('.numbers-box').addClass('active');
                popupElem.fadeIn("fast", function(){                    
                    clickedElem.addClass("active");
                });
                
            }
        });
    },

    initializeParallaxAnimations = function(){
        $delay = 0.15,
        $timing = 2,
        $ease = 'Back.easeOut',
        $ease2 = 'Back.easeIn'
        // init controller
        var animationController = new ScrollMagic({vertical: false});

        //Screen 1 animations************////////
        //bus animation
        var tweenAnim1_2 = TweenMax.to("#screen-one-wrapper #anim-elem-2", 0.5, {marginLeft: "920px"});
        var tweenAnim1_2scene = new ScrollScene({triggerElement: "#screen-one-wrapper #trigger2", duration: 1000, offset: 700})
                        .setTween(tweenAnim1_2)
                        .addTo(animationController);

        //Screen 2 animations************////////
        //text box slide
        var tweenAnim2_1 = TweenMax.to("#screen-two-wrapper #anim-elem-1", 0.5, {marginTop: "0px"});
        var tweenAnim2_1scene = new ScrollScene({triggerElement: "#screen-two-wrapper #trigger1", duration: 300, offset: -300})
                        .setTween(tweenAnim2_1)
                        .addTo(animationController);
        //numbers boxes
       /* var tweenAnim2_2 = TweenMax.fromTo("#screen-two-wrapper #anim-elem-2", 1, {scale: 0}, {scale: 1});
        var tweenAnim2_2scene = new ScrollScene({triggerElement: "#screen-two-wrapper #trigger2", duration: 700, offset: 400})
                        .setTween(tweenAnim2_2)
                        .addTo(animationController);

        var tweenAnim2_3 = TweenMax.fromTo("#screen-two-wrapper #anim-elem-3", 1, {scale: 0}, {scale: 1});
        var tweenAnim2_3scene = new ScrollScene({triggerElement: "#screen-two-wrapper #trigger3", duration: 700, offset: 700})
                        .setTween(tweenAnim2_3)
                        .addTo(animationController);

        var tweenAnim2_4 = TweenMax.fromTo("#screen-two-wrapper #anim-elem-4", 1, {scale: 0}, {scale: 1});
        var tweenAnim2_4scene = new ScrollScene({triggerElement: "#screen-two-wrapper #trigger4", duration: 700, offset: 1000})
                        .setTween(tweenAnim2_4)
                        .addTo(animationController);*/


        var tweenAnim2_2scene = new ScrollScene({triggerElement: "#screen-two-wrapper #trigger2", duration: 10}).addTo(animationController);
        tweenAnim2_2scene.on("start", function (event) {
            if (event.scrollDirection == "FORWARD") {
                app.animateNumbers('#screen-two-wrapper .numbers-box', 'start');
            }
        });
        tweenAnim2_2scene.on("end", function (event) {
            if (event.scrollDirection == "REVERSE") {
                app.animateNumbers('#screen-two-wrapper .numbers-box', 'end');
            }
        });
        //taxi animation
        var tweenAnim2_5 = TweenMax.to("#screen-two-wrapper #car", 1, {right: "710px", ease: Back.easeOut});
        var tweenAnim2_5scene = new ScrollScene({triggerElement: "#screen-two-wrapper #trigger5", duration: 1200, offset: 1500})
                        .setTween(tweenAnim2_5)
                        .addTo(animationController);
                        

        //polce animation
        var tweenAnim2_6 = TweenMax.to("#screen-two-wrapper #police2", 1, {right: "710px", ease: Back.easeOut});
        var tweenAnim2_6scene = new ScrollScene({triggerElement: "#screen-two-wrapper #trigger5", duration: 1200, offset: 1600})
                        .setTween(tweenAnim2_6)
                        .addTo(animationController);
        //polce animation
      /*  var tweenAnim2_7 = TweenMax.fromTo("#screen-two-wrapper #police1", 1, {left: "395px"},{left: "1750px"});
        var tweenAnim2_7scene = new ScrollScene({triggerElement: "#screen-two-wrapper #trigger4", duration: 1500, offset: 400})
                        .setTween(tweenAnim2_7)
                        .addTo(animationController);*/
                        

        //trees animation
        var tweenAnim2_5scene = new ScrollScene({triggerElement: "#screen-two-wrapper #trigger5", duration: 10}).addTo(animationController);
        tweenAnim2_5scene.on("start", function (event) {
            if (event.scrollDirection == "FORWARD") {
                app.animateTrees('#screen-two-wrapper .animated-tree', 'start');
            }
        });
        tweenAnim2_5scene.on("end", function (event) {
            if (event.scrollDirection == "REVERSE") {
                app.animateTrees('#screen-two-wrapper .animated-tree', 'end');
            }
        });

        //Screen 3 animations************////////
        //text box slide
        var tweenAnim3_1 = TweenMax.to("#screen-three-wrapper #anim-elem-1", 0.5, {marginTop: "0px"});
        var tweenAnim3_1scene = new ScrollScene({triggerElement: "#screen-three-wrapper #trigger1", duration: 300, offset: -300})
                        .setTween(tweenAnim3_1)
                        .addTo(animationController);

        //numbers boxes
       /* var tweenAnim3_2 = TweenMax.fromTo("#screen-three-wrapper #anim-elem-2", 1, {scale: 0}, {scale: 1});
        var tweenAnim3_2scene = new ScrollScene({triggerElement: "#screen-three-wrapper #trigger2", duration: 500, offset: 200})
                        .setTween(tweenAnim3_2)
                        .addTo(animationController);

        var tweenAnim3_3 = TweenMax.fromTo("#screen-three-wrapper #anim-elem-3", 1, {scale: 0}, {scale: 1});
        var tweenAnim3_3scene = new ScrollScene({triggerElement: "#screen-three-wrapper #trigger3", duration: 500, offset: 400})
                        .setTween(tweenAnim3_3)
                        .addTo(animationController);

        var tweenAnim3_5 = TweenMax.fromTo("#screen-three-wrapper #car", 1, {left: "410px"},{left: "900px"});
        var tweenAnim3_5scene = new ScrollScene({triggerElement: "#screen-three-wrapper #trigger4", duration: 1200, offset: 200})
                        .setTween(tweenAnim3_5)
                        .addTo(animationController);

        var tweenAnim3_6 = TweenMax.fromTo("#screen-three-wrapper #police1", 1, {right: "345px"},{right: "710px"});
        var tweenAnim3_6scene = new ScrollScene({triggerElement: "#screen-three-wrapper #trigger4", duration: 1200, offset: 200})
                        .setTween(tweenAnim3_6)
                        .addTo(animationController);
*/
        var tweenAnim3_2scene = new ScrollScene({triggerElement: "#screen-three-wrapper #trigger2", duration: 10}).addTo(animationController);
        tweenAnim3_2scene.on("start", function (event) {
            if (event.scrollDirection == "FORWARD") {
                app.animateNumbers('#screen-three-wrapper .numbers-box', 'start');
            }
        });
        tweenAnim3_2scene.on("end", function (event) {
            if (event.scrollDirection == "REVERSE") {
                app.animateNumbers('#screen-three-wrapper .numbers-box', 'end');
            }
        });
       //trees animation
        var tweenAnim3_4scene = new ScrollScene({triggerElement: "#screen-three-wrapper #trigger4", duration: 10}).addTo(animationController);
        tweenAnim3_4scene.on("start", function (event) {
            if (event.scrollDirection == "FORWARD") {
                app.animateTrees('#screen-three-wrapper .animated-tree', 'start');
            }
        });
        tweenAnim3_4scene.on("end", function (event) {
            if (event.scrollDirection == "REVERSE") {
                app.animateTrees('#screen-three-wrapper .animated-tree', 'end');
            }
        });

        //Screen 4 animations************////////
         //text box slide
        var tweenAnim4_1 = TweenMax.to("#screen-four-wrapper #anim-elem-1", 0.5, {marginTop: "0px"});
        var tweenAnim4_1scene = new ScrollScene({triggerElement: "#screen-four-wrapper #trigger1", duration: 300, offset: -300})
                        .setTween(tweenAnim4_1)
                        .addTo(animationController);

        //numbers boxes
        var tweenAnim4_2scene = new ScrollScene({triggerElement: "#screen-four-wrapper #trigger2", duration: 10}).addTo(animationController);
        tweenAnim4_2scene.on("start", function (event) {
            if (event.scrollDirection == "FORWARD") {
                app.animateNumbers('#screen-four-wrapper .numbers-box', 'start');
            }
        });
        tweenAnim4_2scene.on("end", function (event) {
            if (event.scrollDirection == "REVERSE") {
                app.animateNumbers('#screen-four-wrapper .numbers-box', 'end');
            }
        });
        var tweenAnim4_5 = TweenMax.fromTo("#screen-four-wrapper #man", 1, {left: "790px"},{left: "1290px"});
        var tweenAnim4_5scene = new ScrollScene({triggerElement: "#screen-four-wrapper #trigger4", duration: 1200, offset: 200})
                        .setTween(tweenAnim4_5)
                        .addTo(animationController);

        var tweenAnim4_6 = TweenMax.fromTo("#screen-four-wrapper #man2", 1, {right: "550px"},{right: "790px"});
        var tweenAnim4_6scene = new ScrollScene({triggerElement: "#screen-four-wrapper #trigger4", duration: 1200, offset: 200})
                        .setTween(tweenAnim4_6)
                        .addTo(animationController);

        var tweenAnim4_7 = TweenMax.fromTo("#screen-four-wrapper #man3", 1, {right: "440px"},{right: "680px"});
        var tweenAnim4_7scene = new ScrollScene({triggerElement: "#screen-four-wrapper #trigger4", duration: 1200, offset: 200})
                        .setTween(tweenAnim4_7)
                        .addTo(animationController);

        var tweenAnim4_8 = TweenMax.fromTo("#screen-four-wrapper #woman", 1, {left: "730px"},{left: "1200px"});
        var tweenAnim4_8scene = new ScrollScene({triggerElement: "#screen-four-wrapper #trigger4", duration: 1200, offset: 500})
                        .setTween(tweenAnim4_8)
                        .addTo(animationController);
       

        //Screen 5 animations************////////
        //text box slide
        var tweenAnim5_1 = TweenMax.to("#screen-five-wrapper #anim-elem-1", 0.5, {marginTop: "0px"});
        var tweenAnim5_1scene = new ScrollScene({triggerElement: "#screen-five-wrapper #trigger1", duration: 300, offset: -300})
                        .setTween(tweenAnim5_1)
                        .addTo(animationController);

        //numbers boxes
        var tweenAnim5_2scene = new ScrollScene({triggerElement: "#screen-five-wrapper #trigger2", duration: 10}).addTo(animationController);
        tweenAnim5_2scene.on("start", function (event) {
            if (event.scrollDirection == "FORWARD") {
                app.animateNumbers('#screen-five-wrapper .numbers-box', 'start');
            }
        });
        tweenAnim5_2scene.on("end", function (event) {
            if (event.scrollDirection == "REVERSE") {
                app.animateNumbers('#screen-five-wrapper .numbers-box', 'end');
            }
        });
       //trees animation
        var tweenAnim5_5scene = new ScrollScene({triggerElement: "#screen-five-wrapper #trigger5", duration: 10}).addTo(animationController);
        tweenAnim5_5scene.on("start", function (event) {
            if (event.scrollDirection == "FORWARD") {
                app.animateTrees('#screen-five-wrapper .animated-tree', 'start');
            }
        });
        tweenAnim5_5scene.on("end", function (event) {
            if (event.scrollDirection == "REVERSE") {
                app.animateTrees('#screen-five-wrapper .animated-tree', 'end');
            }
        });

        //Screen 6 animations************////////
        //text box slide
        var tweenAnim6_1 = TweenMax.to("#screen-six-wrapper #anim-elem-1", 0.5, {marginTop: "0px"});
        var tweenAnim6_1scene = new ScrollScene({triggerElement: "#screen-six-wrapper #trigger1", duration: 300, offset: -300})
                        .setTween(tweenAnim6_1)
                        .addTo(animationController);

        //numbers boxes

        var tweenAnim6_2scene = new ScrollScene({triggerElement: "#screen-six-wrapper #trigger2", duration: 10}).addTo(animationController);
        tweenAnim6_2scene.on("start", function (event) {
            if (event.scrollDirection == "FORWARD") {
                app.animateNumbers('#screen-six-wrapper .numbers-box', 'start');
            }
        });
        tweenAnim6_2scene.on("end", function (event) {
            if (event.scrollDirection == "REVERSE") {
                app.animateNumbers('#screen-six-wrapper .numbers-box', 'end');
            }
        });

        //light animation
        var tweenAnim6_5scene = new ScrollScene({triggerElement: "#screen-six-wrapper #trigger5", duration: 10}).addTo(animationController);
        tweenAnim6_5scene.on("start", function (event) {
            if (event.scrollDirection == "FORWARD") {
                app.animateTrees('#screen-six-wrapper .animated-tree', 'start');
            }
        });
        tweenAnim6_5scene.on("end", function (event) {
            if (event.scrollDirection == "REVERSE") {
                app.animateTrees('#screen-six-wrapper .animated-tree', 'end');
            }
        });

        var tweenAnim6_6 = TweenMax.fromTo("#screen-six-wrapper #bus-six", 1, {left: "0px"}, {left: "1130px"});
        var tweenAnim6_6scene = new ScrollScene({triggerElement: "#screen-six-wrapper #trigger2", duration: 1100, offset: 200})
                        .setTween(tweenAnim6_6)
                        .addTo(animationController);
    

        //Screen 7 animations************////////
        //text box slide
        var tweenAnim7_1 = TweenMax.to("#screen-seven-wrapper #anim-elem-1", 0.5, {marginTop: "0px"});
        var tweenAnim7_1scene = new ScrollScene({triggerElement: "#screen-seven-wrapper #trigger1", duration: 300, offset: -300})
                        .setTween(tweenAnim7_1)
                        .addTo(animationController);

        //numbers boxes
        var tweenAnim7_2scene = new ScrollScene({triggerElement: "#screen-seven-wrapper #trigger2", duration: 10}).addTo(animationController);
        tweenAnim7_2scene.on("start", function (event) {
            if (event.scrollDirection == "FORWARD") {
                app.animateNumbers('#screen-seven-wrapper .numbers-box', 'start');
            }
        });
        tweenAnim7_2scene.on("end", function (event) {
            if (event.scrollDirection == "REVERSE") {
                app.animateNumbers('#screen-seven-wrapper .numbers-box', 'end');
            }
        });

        //bridge animation
        var tweenAnim7_7 = TweenMax.to("#screen-seven-wrapper #bridge-left", 0.5, {
                                transform: "rotatez(-60deg)",
                                bottom: "104px",
                                marginLeft: "-53px"
                            });
        var tweenAnim7_7scene = new ScrollScene({triggerElement: "#screen-seven-wrapper #trigger7", duration: 1000, offset: 700})
                        .setTween(tweenAnim7_7)
                        .addTo(animationController);

        var tweenAnim7_8 = TweenMax.to("#screen-seven-wrapper #bridge-right", 0.5, {
                    transform: "rotatez(60deg)",
                    bottom: "104px",
                    marginLeft: "53px"
                });
        var tweenAnim7_8scene = new ScrollScene({triggerElement: "#screen-seven-wrapper #trigger8", duration: 1000, offset: 700})
                        .setTween(tweenAnim7_8)
                        .addTo(animationController);


        //Screen 8 animations************////////
        //text box slide
        var tweenAnim8_1 = TweenMax.to("#screen-eight-wrapper #anim-elem-1", 0.5, {marginTop: "0px"});
        var tweenAnim8_1scene = new ScrollScene({triggerElement: "#screen-eight-wrapper #trigger1", duration: 300, offset: -300})
                        .setTween(tweenAnim8_1)
                        .addTo(animationController);

        //numbers boxes

        var tweenAnim8_2scene = new ScrollScene({triggerElement: "#screen-eight-wrapper #trigger2", duration: 10}).addTo(animationController);
        tweenAnim8_2scene.on("start", function (event) {
            if (event.scrollDirection == "FORWARD") {
                app.animateNumbers('#screen-eight-wrapper .numbers-box', 'start');
            }
        });
        tweenAnim8_2scene.on("end", function (event) {
            if (event.scrollDirection == "REVERSE") {
                app.animateNumbers('#screen-eight-wrapper .numbers-box', 'end');
            }
        });

        //trees animation
        var tweenAnim8_5scene = new ScrollScene({triggerElement: "#screen-eight-wrapper #trigger5", duration: 10}).addTo(animationController);
        tweenAnim8_5scene.on("start", function (event) {
            if (event.scrollDirection == "FORWARD") {
                app.animateTrees('#screen-eight-wrapper .animated-tree', 'start');
            }
        });
        tweenAnim8_5scene.on("end", function (event) {
            if (event.scrollDirection == "REVERSE") {
                app.animateTrees('#screen-eight-wrapper .animated-tree', 'end');
            }
        });

        //Screen 9 animations************////////
        //text box slide
        var tweenAnim9_1 = TweenMax.to("#screen-nine-wrapper #anim-elem-1", 0.5, {marginTop: "0px"});
        var tweenAnim9_1scene = new ScrollScene({triggerElement: "#screen-nine-wrapper #trigger1", duration: 300, offset: -300})
                        .setTween(tweenAnim9_1)
                        .addTo(animationController);

        //numbers boxes
     

        var tweenAnim9_2scene = new ScrollScene({triggerElement: "#screen-nine-wrapper #trigger2", duration: 10}).addTo(animationController);
        tweenAnim9_2scene.on("start", function (event) {
            if (event.scrollDirection == "FORWARD") {
                app.animateNumbers('#screen-nine-wrapper .numbers-box', 'start');
            }
        });
        tweenAnim9_2scene.on("end", function (event) {
            if (event.scrollDirection == "REVERSE") {
                app.animateNumbers('#screen-nine-wrapper .numbers-box', 'end');
            }
        });


        //trees animation
        var tweenAnim9_5scene = new ScrollScene({triggerElement: "#screen-nine-wrapper #trigger5", duration: 10}).addTo(animationController);
        tweenAnim9_5scene.on("start", function (event) {
            if (event.scrollDirection == "FORWARD") {
                app.animateTrees('#screen-nine-wrapper .animated-tree', 'start');
            }
        });
        tweenAnim9_5scene.on("end", function (event) {
            if (event.scrollDirection == "REVERSE") {
                app.animateTrees('#screen-nine-wrapper .animated-tree', 'end');
            }
        });

        //Screen 10 animations************////////
        //text box slide
        var tweenAnim10_1 = TweenMax.to("#screen-ten-wrapper #anim-elem-1", 0.5, {marginTop: "0px"});
        var tweenAnim10_1scene = new ScrollScene({triggerElement: "#screen-ten-wrapper #trigger1", duration: 300, offset: -300})
                        .setTween(tweenAnim10_1)
                        .addTo(animationController);

        //numbers boxes      

        var tweenAnim10_2scene = new ScrollScene({triggerElement: "#screen-ten-wrapper #trigger2", duration: 10}).addTo(animationController);
        tweenAnim10_2scene.on("start", function (event) {
            if (event.scrollDirection == "FORWARD") {
                app.animateNumbers('#screen-ten-wrapper .numbers-box', 'start');
            }
        });
        tweenAnim10_2scene.on("end", function (event) {
            if (event.scrollDirection == "REVERSE") {
                app.animateNumbers('#screen-ten-wrapper .numbers-box', 'end');
            }
        });

        //trees animation
        var tweenAnim10_5scene = new ScrollScene({triggerElement: "#screen-ten-wrapper #trigger5", duration: 10}).addTo(animationController);
        tweenAnim10_5scene.on("start", function (event) {
            if (event.scrollDirection == "FORWARD") {
                app.animateTrees('#screen-ten-wrapper .animated-tree', 'start');
            }
        });
        tweenAnim10_5scene.on("end", function (event) {
            if (event.scrollDirection == "REVERSE") {
                app.animateTrees('#screen-ten-wrapper .animated-tree', 'end');
            }
        });

        //Screen 11 animations************////////
        //text box slide
        var tweenAnim11_1 = TweenMax.to("#screen-eleven-wrapper #anim-elem-1", 0.5, {marginTop: "0px"});
        var tweenAnim11_1scene = new ScrollScene({triggerElement: "#screen-eleven-wrapper #trigger1", duration: 300, offset: -300})
                        .setTween(tweenAnim11_1)
                        .addTo(animationController);

        //numbers boxes

        var tweenAnim11_2scene = new ScrollScene({triggerElement: "#screen-eleven-wrapper #trigger2", duration: 10}).addTo(animationController);
        tweenAnim11_2scene.on("start", function (event) {
            if (event.scrollDirection == "FORWARD") {
                app.animateNumbers('#screen-eleven-wrapper .numbers-box', 'start');
            }
        });
        tweenAnim11_2scene.on("end", function (event) {
            if (event.scrollDirection == "REVERSE") {
                app.animateNumbers('#screen-eleven-wrapper .numbers-box', 'end');
            }
        });

        //trees animation
        var tweenAnim11_4scene = new ScrollScene({triggerElement: "#screen-eleven-wrapper #trigger4", duration: 10}).addTo(animationController);
        tweenAnim11_4scene.on("start", function (event) {
            if (event.scrollDirection == "FORWARD") {
                app.animateTrees('#screen-eleven-wrapper .animated-tree', 'start');
            }
        });
        tweenAnim11_4scene.on("end", function (event) {
            if (event.scrollDirection == "REVERSE") {
                app.animateTrees('#screen-eleven-wrapper .animated-tree', 'end');
            }
        });

        //Screen 12 animations************////////
        //text box slide
        var tweenAnim12_1 = TweenMax.to("#screen-twelve-wrapper #anim-elem-1", 0.5, {marginTop: "0px"});
        var tweenAnim12_1scene = new ScrollScene({triggerElement: "#screen-twelve-wrapper #trigger1", duration: 300, offset: -300})
                        .setTween(tweenAnim12_1)
                        .addTo(animationController);

        //numbers boxes
        var tweenAnim12_2scene = new ScrollScene({triggerElement: "#screen-twelve-wrapper #trigger2", duration: 10}).addTo(animationController);
        tweenAnim12_2scene.on("start", function (event) {
            if (event.scrollDirection == "FORWARD") {
                app.animateNumbers('#screen-twelve-wrapper .numbers-box', 'start');
            }
        });
        tweenAnim12_2scene.on("end", function (event) {
            if (event.scrollDirection == "REVERSE") {
                app.animateNumbers('#screen-twelve-wrapper .numbers-box', 'end');
            }
        });

        var tweenAnim12_6 = TweenMax.fromTo("#screen-twelve-wrapper #bus-twelve", 1, {right: "0px"}, {right: "1280px"});
        var tweenAnim12_6scene = new ScrollScene({triggerElement: "#screen-twelve-wrapper #trigger2", duration: 700, offset: 200})
                        .setTween(tweenAnim12_6)
                        .addTo(animationController);

      

        //Screen 13 animations************////////
        //text box slide
        var tweenAnim13_1 = TweenMax.to("#screen-thirteen-wrapper #anim-elem-1", 0.5, {marginTop: "0px"});
        var tweenAnim13_1scene = new ScrollScene({triggerElement: "#screen-thirteen-wrapper #trigger1", duration: 300, offset: -300})
                        .setTween(tweenAnim13_1)
                        .addTo(animationController);

        //numbers boxes
        var tweenAnim13_2scene = new ScrollScene({triggerElement: "#screen-thirteen-wrapper #trigger2", duration: 10}).addTo(animationController);
        tweenAnim13_2scene.on("start", function (event) {
            if (event.scrollDirection == "FORWARD") {
                app.animateNumbers('#screen-thirteen-wrapper .numbers-box', 'start');
            }
        });
        tweenAnim13_2scene.on("end", function (event) {
            if (event.scrollDirection == "REVERSE") {
                app.animateNumbers('#screen-thirteen-wrapper .numbers-box', 'end');
            }
        });

        //trees animation
        var tweenAnim13_4scene = new ScrollScene({triggerElement: "#screen-thirteen-wrapper #trigger4", duration: 10}).addTo(animationController);
        tweenAnim13_4scene.on("start", function (event) {
            if (event.scrollDirection == "FORWARD") {
                app.animateTrees('#screen-thirteen-wrapper .animated-tree', 'start');
            }
        });
        tweenAnim13_4scene.on("end", function (event) {
            if (event.scrollDirection == "REVERSE") {
                app.animateTrees('#screen-thirteen-wrapper .animated-tree', 'end');
            }
        });

        //Screen 14 animations************////////
        //text box slide
        var tweenAnim14_0 = TweenMax.to("#screen-fourteen-wrapper #anim-elem-1", 0.5, {marginTop: "0px"});
        var tweenAnim14_0scene = new ScrollScene({triggerElement: "#screen-fourteen-wrapper #trigger1", duration: 300, offset: -300})
                        .setTween(tweenAnim14_0)
                        .addTo(animationController);

        //spines animation  
        var tweenAnim14_1 = TweenMax.to("#screen-fourteen-wrapper #build-spines", 1, {height: "238px", ease: Back.easeOut});
        var tweenAnim14_1scene = new ScrollScene({triggerElement: "#screen-fourteen-wrapper #trigger1", duration: 1000, offset: 700})
                        .setTween(tweenAnim14_1)
                        .addTo(animationController);

        //numbers boxes

        var tweenAnim14_2scene = new ScrollScene({triggerElement: "#screen-fourteen-wrapper #trigger2", duration: 10}).addTo(animationController);
        tweenAnim14_2scene.on("start", function (event) {
            if (event.scrollDirection == "FORWARD") {
                app.animateNumbers('#screen-fourteen-wrapper .numbers-box', 'start');
            }
        });
        tweenAnim14_2scene.on("end", function (event) {
            if (event.scrollDirection == "REVERSE") {
                app.animateNumbers('#screen-fourteen-wrapper .numbers-box', 'end');
            }
        });

        //trees animation
        var tweenAnim14_5scene = new ScrollScene({triggerElement: "#screen-fourteen-wrapper #trigger5", duration: 10}).addTo(animationController);
        tweenAnim14_5scene.on("start", function (event) {
            if (event.scrollDirection == "FORWARD") {
                app.animateTrees('#screen-fourteen-wrapper .animated-tree', 'start');
            }
        });
        tweenAnim14_5scene.on("end", function (event) {
            if (event.scrollDirection == "REVERSE") {
                app.animateTrees('#screen-fourteen-wrapper .animated-tree', 'end');
            }
        });

        //Screen 15 animations************////////
        //text box slide
        var tweenAnim15_1 = TweenMax.to("#screen-fiveten-wrapper #anim-elem-1", 0.5, {marginTop: "0px"});
        var tweenAnim15_1scene = new ScrollScene({triggerElement: "#screen-fiveten-wrapper #trigger1", duration: 300, offset: -300})
                        .setTween(tweenAnim15_1)
                        .addTo(animationController);

        //numbers boxes
        var tweenAnim15_2scene = new ScrollScene({triggerElement: "#screen-fiveten-wrapper #trigger2", duration: 10}).addTo(animationController);
        tweenAnim15_2scene.on("start", function (event) {
            if (event.scrollDirection == "FORWARD") {
                app.animateNumbers('#screen-fiveten-wrapper .numbers-box', 'start');
            }
        });
        tweenAnim15_2scene.on("end", function (event) {
            if (event.scrollDirection == "REVERSE") {
                app.animateNumbers('#screen-fiveten-wrapper .numbers-box', 'end');
            }
        });

        //trees animation
        var tweenAnim15_4scene = new ScrollScene({triggerElement: "#screen-fiveten-wrapper #trigger4", duration: 10}).addTo(animationController);
        tweenAnim15_4scene.on("start", function (event) {
            if (event.scrollDirection == "FORWARD") {
                app.animateTrees('#screen-fiveten-wrapper .animated-tree', 'start');
            }
        });
        tweenAnim15_4scene.on("end", function (event) {
            if (event.scrollDirection == "REVERSE") {
                app.animateTrees('#screen-fiveten-wrapper .animated-tree', 'end');
            }
        });

        /*Teams animations*/
        /*var tweenAnim15_5 = TweenMax.fromTo("#screen-fiveten-wrapper #team1-wrapper", 1, {left:200, bottom:32}, {left:305, bottom:43});
        var tweenAnim15_5scene = new ScrollScene({triggerElement: "#screen-fiveten-wrapper #trigger3", duration: 250, offset: 1})
                        .setTween(tweenAnim15_5)
                        .addTo(animationController);    
        tweenAnim15_5scene.on("start", function (event) {
            if (event.scrollDirection == "FORWARD") {
                $("#screen-fiveten-wrapper #team1-wrapper.fixed").removeClass('fixed');
            }
            else{
                $("#screen-fiveten-wrapper #team1-wrapper:not(.fixed)").addClass('fixed');
            }
        });    
        var tweenAnim15_6 = TweenMax.fromTo("#screen-fiveten-wrapper #team1-wrapper", 1, {left:306, bottom:44}, {left:434, bottom:63});
        var tweenAnim15_6scene = new ScrollScene({triggerElement: "#screen-fiveten-wrapper #trigger5", duration: 250, offset: 1})
                        .setTween(tweenAnim15_6)
                        .addTo(animationController);
        var tweenAnim15_7 = TweenMax.fromTo("#screen-fiveten-wrapper #team1-wrapper", 1, {left:435, bottom:64}, {left:540, bottom:86});
        var tweenAnim15_7scene = new ScrollScene({triggerElement: "#screen-fiveten-wrapper #trigger6", duration: 250, offset: 1})
                        .setTween(tweenAnim15_7)
                        .addTo(animationController);        

        var tweenAnim15_8 = TweenMax.fromTo("#screen-fiveten-wrapper #team2-wrapper", 1, {right:200, bottom:34},{right: 305,bottom: 45});
        var tweenAnim15_8scene = new ScrollScene({triggerElement: "#screen-fiveten-wrapper #trigger7", duration: 250, offset: 1})
                        .setTween(tweenAnim15_8)
                        .addTo(animationController);
        tweenAnim15_8scene.on("start", function (event) {
            if (event.scrollDirection == "FORWARD") {
                $("#screen-fiveten-wrapper #team2-wrapper.fixed").removeClass('fixed');
            }
            else{
                $("#screen-fiveten-wrapper #team2-wrapper:not(.fixed)").addClass('fixed');
            }
        });
        var tweenAnim15_9 = TweenMax.fromTo("#screen-fiveten-wrapper #team2-wrapper", 1, {right:305, bottom:45},{right: 434,bottom: 65});
        var tweenAnim15_9scene = new ScrollScene({triggerElement: "#screen-fiveten-wrapper #trigger8", duration: 250, offset: 1})
                        .setTween(tweenAnim15_9)
                        .addTo(animationController);
        var tweenAnim15_10 = TweenMax.fromTo("#screen-fiveten-wrapper #team2-wrapper", 1, {right:434, bottom:65},{right: 540,bottom: 88});
        var tweenAnim15_10scene = new ScrollScene({triggerElement: "#screen-fiveten-wrapper #trigger9", duration: 250, offset: 1})
                        .setTween(tweenAnim15_10)
                        .addTo(animationController); */

        //Screen 16 animations************////////
        //text box slide
        var tweenAnim16_1 = TweenMax.to("#screen-sixteen-wrapper #anim-elem-1", 0.5, {marginTop: "0px"});
        var tweenAnim16_1scene = new ScrollScene({triggerElement: "#screen-sixteen-wrapper #trigger1", duration: 300, offset: -300})
                        .setTween(tweenAnim16_1)
                        .addTo(animationController);

        //numbers boxes
       /* var tweenAnim16_2 = TweenMax.fromTo("#screen-sixteen-wrapper #anim-elem-2", 1, {scale: 0}, {scale: 1});
        var tweenAnim16_2scene = new ScrollScene({triggerElement: "#screen-sixteen-wrapper #trigger2", duration: 500, offset: 100})
                        .setTween(tweenAnim16_2)
                        .addTo(animationController);

        var tweenAnim16_7 = TweenMax.fromTo("#screen-sixteen-wrapper #anim-elem-7", 1, {scale: 0}, {scale: 1});
        var tweenAnim16_7scene = new ScrollScene({triggerElement: "#screen-sixteen-wrapper #trigger7", duration: 500, offset: 100})
                        .setTween(tweenAnim16_7)
                        .addTo(animationController);

        var tweenAnim16_3 = TweenMax.fromTo("#screen-sixteen-wrapper #anim-elem-3", 1, {scale: 0}, {scale: 1});
        var tweenAnim16_3scene = new ScrollScene({triggerElement: "#screen-sixteen-wrapper #trigger3", duration: 500, offset: 100})
                        .setTween(tweenAnim16_3)
                        .addTo(animationController);

        var tweenAnim16_8 = TweenMax.fromTo("#screen-sixteen-wrapper #anim-elem-8", 1, {scale: 0}, {scale: 1});
        var tweenAnim16_8scene = new ScrollScene({triggerElement: "#screen-sixteen-wrapper #trigger8", duration: 500, offset: 100})
                        .setTween(tweenAnim16_8)
                        .addTo(animationController);

        var tweenAnim16_4 = TweenMax.fromTo("#screen-sixteen-wrapper #anim-elem-4", 1, {scale: 0}, {scale: 1});
        var tweenAnim16_4scene = new ScrollScene({triggerElement: "#screen-sixteen-wrapper #trigger4", duration: 400, offset: 150})
                        .setTween(tweenAnim16_4)
                        .addTo(animationController);

        var tweenAnim16_9 = TweenMax.fromTo("#screen-sixteen-wrapper #anim-elem-9", 1, {scale: 0}, {scale: 1});
        var tweenAnim16_9scene = new ScrollScene({triggerElement: "#screen-sixteen-wrapper #trigger9", duration: 400, offset: 150})
                        .setTween(tweenAnim16_9)
                        .addTo(animationController);

        var tweenAnim16_5 = TweenMax.fromTo("#screen-sixteen-wrapper #anim-elem-5", 1, {scale: 0}, {scale: 1});
        var tweenAnim16_5scene = new ScrollScene({triggerElement: "#screen-sixteen-wrapper #trigger5", duration: 400, offset: 150})
                        .setTween(tweenAnim16_5)
                        .addTo(animationController);

        var tweenAnim16_10 = TweenMax.fromTo("#screen-sixteen-wrapper #anim-elem-10", 1, {scale: 0}, {scale: 1});
        var tweenAnim16_10scene = new ScrollScene({triggerElement: "#screen-sixteen-wrapper #trigger10", duration: 400, offset: 150})
                        .setTween(tweenAnim16_10)
                        .addTo(animationController);

        var tweenAnim16_6 = TweenMax.fromTo("#screen-sixteen-wrapper #anim-elem-6", 1, {scale: 0}, {scale: 1});
        var tweenAnim16_6scene = new ScrollScene({triggerElement: "#screen-sixteen-wrapper #trigger6", duration: 400, offset: 150})
                        .setTween(tweenAnim16_6)
                        .addTo(animationController);*/
        var tweenAnim16_2scene = new ScrollScene({triggerElement: "#screen-sixteen-wrapper #trigger2", duration: 10}).addTo(animationController);
        tweenAnim16_2scene.on("start", function (event) {
            if (event.scrollDirection == "FORWARD") {
                app.animateNumbers('#screen-sixteen-wrapper .numbers-box', 'start');
            }
        });
        tweenAnim16_2scene.on("end", function (event) {
            if (event.scrollDirection == "REVERSE") {
                app.animateNumbers('#screen-sixteen-wrapper .numbers-box', 'end');
            }
        });

        //building animation
        var tweenAnim16_7 = new ScrollScene({triggerElement: "#screen-sixteen-wrapper #trigger4", duration: 10, offset: 400}).addTo(animationController);
        tweenAnim16_7.on("start", function (event) {
            if (event.scrollDirection == "FORWARD") {
                app.animateTrees('#screen-sixteen-wrapper .animated-tree', 'start');
            }
        });
        tweenAnim16_7.on("end", function (event) {
            if (event.scrollDirection == "REVERSE") {
                app.animateTrees('#screen-sixteen-wrapper .animated-tree', 'end');
            }
        });       

    },

    initializeScrollHandler = function(){
        $("body").on("mousewheel DOMMouseScroll", function(event, delta) {
            event.preventDefault();
            //this.scrollLeft -= (delta * 30);  
            $(window).scrollLeft($(window).scrollLeft()-(delta * 30));
        });



        fixTrainPositionTop();
        //trainControll();
        handleScrollLeft();

        var _startTouch = 0;
        document.addEventListener("touchstart", function(event){
            if(event && event.touches && event.touches.length > 0 && event.touches[0])
                _startTouch = event.touches[0].clientX;
        });
        document.addEventListener("touchmove", function(event){
            if(event && event.touches && event.touches.length > 0 && event.touches[0]){
                currentScrollLeft += _startTouch - event.touches[0].clientX;
                _startTouch = event.touches[0].clientX;
            }
            trainControll();
        });

        $(window).on("scroll", function(event){
            $('footer').css({
                'left': $(this).scrollLeft() + 0
            });

            closeOpenedItems();

            var documentScrollLeft = $(document).scrollLeft();
            if (currentScrollLeft != documentScrollLeft) {
                //scroll left
                currentScrollLeft = documentScrollLeft;
                handleScrollLeft();
            }
            else{
                //scroll top
                fixTrainPositionTop();
            }

            if(currentScrollLeft <= 1190){
                currentScreen = 1;
            }
            else if(currentScrollLeft > 1190 && currentScrollLeft <= 2975){
                currentScreen = 2;
            }
            else if(currentScrollLeft > 2975 && currentScrollLeft <= 4050){
                currentScreen = 3;
            }
            else if(currentScrollLeft > 4050 && currentScrollLeft <= 5510){
                currentScreen = 4;
            }
            else if(currentScrollLeft > 5510 && currentScrollLeft <= 7140){
                currentScreen = 5;
            }
            else if(currentScrollLeft > 7140 && currentScrollLeft <= 8430){
                currentScreen = 6;
            }
            else if(currentScrollLeft > 8430 && currentScrollLeft <= 10060){
                currentScreen = 7;
            }
            else if(currentScrollLeft > 10060 && currentScrollLeft <= 11424){
                currentScreen = 8;
            }
            else if(currentScrollLeft > 11424 && currentScrollLeft <= 12829){
                currentScreen = 9;
            }
            else if(currentScrollLeft > 12829 && currentScrollLeft <= 14165){
                currentScreen = 10;
            }
            else if(currentScrollLeft > 14165 && currentScrollLeft <= 15329){
                currentScreen = 11;
            }
            else if(currentScrollLeft > 15329 && currentScrollLeft <= 17041){
                currentScreen = 12;
            }
            else if(currentScrollLeft > 17041 && currentScrollLeft <= 18717){
                currentScreen = 13;
            }
            else if(currentScrollLeft > 18717 && currentScrollLeft <= 20292){
                currentScreen = 14;
            }
            else if(currentScrollLeft > 20292){
                currentScreen = 15;
            }
        });
        
        currentScrollLeft = $(document).scrollLeft();
        trainControll();

    },

    animateTrees = function(elements, action){
        $delay = 0.15,
        $timing = 2,
        $ease = 'Back.easeOut',
        $ease2 = 'Back.easeIn';

        TweenMax.killTweensOf(elements);
        switch (action) {
            case 'start':
                setTimeout(function() {
                    $(elements).each(function(i) {
                        TweenMax.to($(this), $timing, {
                            delay: $delay * i,
                            rotationX: 0,
                            opacity: 1,
                            ease: $ease,
                            startAt: {
                                visibility: 'visible'
                            }
                        });
                    });
                }, 100)
                break;
            case 'end':
                setTimeout(function() {
                    $(elements).each(function(i) {
                        TweenMax.fromTo($(this), $timing, {
                            rotationX: 0,
                            startAt: {
                                visibility: 'visible'
                            }
                        }, {
                            delay: $delay * i,
                            rotationX: -89,
                            ease: $ease2,
                            opacity: 0,
                            onCompleteParams: [$(this)],
                            onComplete: function(param1) {
                                param1.css({
                                    visibility: 'hidden',
                                    opacity: 1
                                })
                            }
                        })
                    });
                }, 400)
                break;
        }
    },
    animateNumbers = function(elements, action){
        $delay = 0.15,
        $timing = 2,
        $ease = 'Back.easeOut',
        $ease2 = 'Back.easeIn';

        TweenMax.killTweensOf(elements);
        switch (action) {
            case 'start':
                setTimeout(function() {
                    $(elements).each(function(i) {
                        TweenMax.to($(this), $timing + 1, {
                            //delay: $delay * i,
                            rotationX: 0,
                            opacity: 1,
                            ease: $ease,
                            startAt: {
                                visibility: 'visible'
                            }
                        });
                    });
                }, 100)
                break;
            case 'end':
                setTimeout(function() {
                    $(elements).each(function(i) {
                        TweenMax.fromTo($(this), $timing - 2, {
                            rotationX: 0,
                            startAt: {
                                visibility: 'visible'
                            }
                        }, {
                            delay: $delay * i,
                            rotationX: 0,
                            ease: $ease2,
                            opacity: 0,
                            onCompleteParams: [$(this)],
                            onComplete: function(param1) {
                                param1.css({
                                    visibility: 'hidden',
                                    opacity: 0
                                })
                            }
                        })
                    });
                }, 0)
                break;
        }
    },

    handleScrollLeft = function(){
        trainControll();
    },

    trainControll = function(){  
        var $trainLine = $(".train-line"),
            $train = $trainLine.find(".train"),
            $tube = $trainLine.find('.numbers-box.tube');
        if(currentScrollLeft == 0){
           $train.addClass("animate-left").css("left", "-212px");
            $tube.hide();
        }
        else{
            //$(".train-line .train").css("left", "640px");
            if(parseInt($train.css("left")) > 539)
                $train.removeClass("animate-left");

            $train.css("left", (currentScrollLeft + ($(window).width()/2.5))+"px");

            $tube.stop(true, true);
            if(currentScrollLeft > ($('body').width()-$(window).width())*0.98)
                $tube.fadeIn(500);
            else
                $tube.fadeOut(500);
        }
    },

    browserDetect = function(){
        Modernizr.addTest("keyframe", function(){
            // test wether browser recognizes the style property animationName, which is part of keyframe animations
            return Modernizr.testAllProps('animationName'); 
        });
        if(!$('html').hasClass('keyframe')){
            $('.browser-detection').fadeIn(500);
        }
    },    

    fixTrainPositionTop = function(){
        




        //$(".train-line .train").css('top', 670-$(window).scrollTop() + 'px');
        $('footer').css({
            'left': $(this).scrollLeft() + 0
        });

    }, 
    closeOpenedItems = function(){
        setTimeout(function(){
            $(".popup-text-wrapper").fadeOut("fast", function(){
                
            });
            $(".eye-button").removeClass("active");

            $(".bus-height").fadeOut("fast");
        }, 100);

    };

    return {
        init: init,
        hidePreload: hidePreload,
        initializeParallaxAnimations: initializeParallaxAnimations,
        animateTrees: animateTrees,        
        animateNumbers: animateNumbers
    }

})();

$(window).load(app.hidePreload);

$(document).ready(app.initializeParallaxAnimations);