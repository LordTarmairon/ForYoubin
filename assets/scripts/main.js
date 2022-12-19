
$( document ).ready(function() {
    var msec = unescape('%48%69%20%45%6d%6d%61%2c%20%49%20%73%65%65%20%74%68%61%74%20%79%6f%75%20%68%61%76%65%20%6d%61%6e%61%67%65%64%20%74%6f%20%66%69%6e%64%20%74%68%65%20%73%65%63%72%65%74%20%77%6f%72%64%2e%20%49%20%68%6f%70%65%20%79%6f%75%20%68%61%76%65%20%61%20%67%6f%6f%64%20%62%69%72%74%68%64%61%79%20%68%6f%6e%65%79%20%61%6e%64%20%74%68%61%74%20%79%6f%75%20%6c%69%6b%65%64%20%74%68%69%73%20%6c%69%74%74%6c%65%20%64%65%74%61%69%6c%2e%20%46%72%6f%6d%20%74%68%69%73%20%6d%6f%6d%65%6e%74%20%61%6c%6c%20%74%68%69%6e%67%73%20%61%72%65%20%67%6f%69%6e%67%20%74%6f%20%67%65%74%20%62%65%74%74%65%72%2e%20%54%68%69%73%20%6e%65%77%20%79%65%61%72%20%77%69%6c%6c%20%62%65%20%66%75%6c%6c%20%6f%66%20%68%61%70%70%79%20%6d%6f%6d%65%6e%74%73%20%61%6e%64%20%69%6d%70%6f%72%74%61%6e%74%20%74%68%69%6e%67%73%20%69%6e%20%79%6f%75%72%20%6c%69%66%65%20%74%6f%20%61%63%68%69%65%76%65%20%65%76%65%72%79%74%68%69%6e%67%20%79%6f%75%20%77%61%6e%74%2e%20%59%6f%75%20%77%69%6c%6c%20%61%6c%77%61%79%73%20%68%61%76%65%20%6d%65%20%62%79%20%79%6f%75%72%20%73%69%64%65%2c%20%6e%6f%20%6d%61%74%74%65%72%20%77%68%61%74%2c%20%49%20%77%69%6c%6c%20%6e%65%76%65%72%20%61%62%61%6e%64%6f%6e%20%79%6f%75%20%61%6e%64%20%49%20%77%69%6c%6c%20%74%61%6b%65%20%63%61%72%65%20%6f%66%20%79%6f%75%2e%20%4d%61%79%20%74%68%69%73%20%62%69%72%74%68%64%61%79%20%67%69%66%74%20%72%65%6d%69%6e%64%20%79%6f%75%20%6f%66%20%66%65%65%6c%69%6e%67%73%20%74%68%61%74%20%6d%61%6b%65%20%79%6f%75%20%73%6d%69%6c%65%20%61%6e%64%20%62%65%20%68%61%70%70%79%2e%20%49%20%68%6f%70%65%20%74%68%61%74%20%74%68%65%20%6e%65%78%74%20%62%69%72%74%68%64%61%79%73%20%77%65%20%77%69%6c%6c%20%62%65%20%74%6f%67%65%74%68%65%72%20%65%6e%6a%6f%79%69%6e%67%20%69%6e%63%72%65%64%69%62%6c%65%20%6d%6f%6d%65%6e%74%73%2e%20%49%20%6c%6f%76%65%20%79%6f%75%20%68%6f%6e%65%79%2c%20%74%68%65%20%77%6f%6d%61%6e%20%6f%66%20%6d%79%20%6c%69%66%65%2c%20%74%68%65%20%6d%6f%73%74%20%61%6d%61%7a%69%6e%67%20%67%69%72%6c%20%45%6d%6d%61%2c%20%48%61%70%70%79%20%42%69%72%74%68%64%61%79');
    var titleS = unescape('%46%6f%72%20%45%6d%6d%61');

    const transitionIn = ['bounceInLeft', 'bounceInRight', 'bounceInUp', 'bounceInDown', 'fadeIn', 'fadeInDown', 'fadeInUp', 'fadeInLeft', 'fadeInRight','flipInX'];
    const transitionOut = ['fadeOut', 'fadeOutUp', 'fadeOutDown', 'fadeOutLeft', 'fadeOutRight', 'flipOutX'];
    const position = ['bottomRight', 'bottomLeft', 'topRight', 'topLeft', 'topCenter', 'bottomCenter'];

    function transitions(transition = "in"){
        let random = 0;
        switch (transition) {
            case "in":
                random = ~~(transitionIn.length * Math.random());
                return transitionIn[random];
                break;
            case "out":
                random = ~~(transitionOut.length * Math.random());
                return transitionOut[random];
                break;
            case "pos":
                random = ~~(position.length * Math.random());
                return position[random];
                break;
        }
    }

    $("#btn-not").on("click", function(e){
        e.preventDefault();
        iziToast.question({
            close: false,
            overlay: true,
            displayMode: 'once',
            theme: 'dark',
            icon: 'fas fa-sad-tear',
            iconText: '',
            image: './fotos/sad2.png',
            imageWidth: 120,
            maxWidth: 500,
            color: 'grey',
            layout: 2,
            balloon: true,
            drag: "false",
            progressBarEasing: '',
            transitionIn: transitions(),
            timeout: false,
            title: 'Do not open the heart',
            message: '<br> Since you have decided not to open The Heart, I get sad. <br><br>',
            position: 'center', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter
            progressBarColor: '',
            buttons: [
                ['<button>Continue <i class="fas fa-sad-cry"></i></button>', function (instance, toast) {
                    window.location = "www/dnopen.html";
                }, true], // true to focus
            ],
            onClosing: function(instance, toast, closedBy){
                window.location = "www/dnopen.html";
            }
        });
    });

    $(".btn-send").on("click", function(e){
        e.preventDefault();
        if($(".magi-word").val() === ""){
            iziToast.warning({
                title: 'Empty value',
                message: 'You should find the magic word!',
            });
            return false;
        }
        if(CryptoJS.MD5($(".magi-word").val()).toString() == "7f4cb6c326b8420bc881204cd6169a31" || CryptoJS.MD5($(".magi-word").val()).toString()  == "22cb1f23011040c9d815a37fc498392b"){
            iziToast.success({
                title: 'This is the Macig Word',
                message: 'Congratulations, you will watch the secret!',
            });
            $("#secretTitle").text(titleS);
            $("#secretMessage").text(msec);
            $("#exampleModal").modal("show");
        } else {
            iziToast.error({
                image: 'https://c.tenor.com/x7E9uhFQsPkAAAAM/dennis-jurassic-park.gif',
                title: 'Ah ah ah!',
                imageWidth: 30,
                message: "You didn't say the Magic Word",
            });
        }
    });

    $("#btn-restore").on("click", function(e){
        e.preventDefault();
        iziToast.show({
            timeout: false,
            close: false,
            overlay: true,
            displayMode: 'once',
            icon: 'far fa-laugh',
            iconText: '',
            color: 'white',
            image: '../fotos/happy.png',
            imageWidth: 120,
            maxWidth: 500,
            layout: 1,
            balloon: true,
            progressBarEasing: '',
            drag: "false",
            transitionIn: transitions(),
            title: 'Restore Heart 💝',
            message: "<br><b>You didn't want to use me, and that's why I'm sad. But you had a good idea, and you wanted to restore me, so I will once again give you the opportunity to learn important information about the feelings that are hidden inside you.</b><br><br>",
            position: 'center', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter
            progressBarColor: '',
            buttons: [
                ['<button>Restore <i class="far fa-smile"></i></button>', function (instance, toast) {
                    window.location = "../index.html?key=935d84332fbe99f700b54f7b5cf33ec6";
                }, true], // true to focus
            ],
            onClosing: function(instance, toast, closedBy){
                window.location = "../index.html";
            }
        });
    });
    //OPEN
    $("#btn-open").on("click", function(e){
        iziToast.show({
            timeout: 20000,
             overlay: true,
            displayMode: 'once',
            icon: 'far fa-laugh',
            iconText: '',
            color: 'green',
            image: './fotos/wii.png',
            imageWidth: 175,
            maxWidth: 650,
            layout: 2,
            balloon: true,
            progressBarEasing: '',
            transitionIn: transitions(),
            title: 'Open Heart 💝',
            message: "<br><b class='text-justify'>Welcome inside the Heart Gift. By deciding to open heart, you will be able to see important information. About feelings inside of you. This heart has an AI capable of seeing destiny and the feelings that are kept deep within you. Let me show you below.</b><br><br>",
            position: 'center', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter
            progressBarColor: '',
            buttons: [
                ['<button>Acept <i class="far fa-smile"></i></button>', function (instance, toast) {
                    instance.hide({
                        transitionOut: transitions("out"),
                        onClosing: function(instance, toast, closedBy){
                            setInterval( function(){window.location = "./www/body.html"}, 500);
                        }
                    }, toast, 'buttonName');
                }, true], // true to focus
            ],
            onClosing: function(instance, toast, closedBy){
                window.location = "./www/body.html";
            }
        });
    });

});
