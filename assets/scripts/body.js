//hide card
$(".cardbd").fadeOut("1", function () {
    $(".cardbd").removeClass("nov")
})
$("#birthday").fadeOut("1", function () {
    $("#birthday").removeClass("nov")
})


$( document ).ready(function() {
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

    // DNOTOPEN
    const validName = ['jose', 'jose luis', 'josito', 'jose luis calleja garcia', 'jose luis calleja'];
    const validNameHer = ['youbin', 'yubin', 'youbeen', 'yi youbeen', 'yi youbin', 'yubi', 'yubinita'];
    var hisName = "";
    var herName = "";

    //BODY.html SCRIPTS
    $("#btn-start").on("click", function(){
        nameRequest();
        document.documentElement.requestFullscreen().catch(err => {
            console.log("Error al entrar en pantalla completa:", err);
        });

    })



    function nameRequest(her = false){
        let name = "";
        let message = "";
        let title = "Who is the boy? 🤔 ";
        let icono = "fas fa-meh-rolling-eyes"
        if(!her){
            message = '<br><b>Enter the boy\'s name you are in love 😊:</b><br><br>';
        } else{
            icono = "far fa-smile";
            title = "He is "+hisName+ " 😊";
            message = '<br><b>Enter the girl\'s name whom '+ hisName +' love so much (your name 🤭) 😍:</b><br><br>';
        }

        iziToast.info({
            theme: 'dark',
            icon: icono,
            iconText: '',
            image: '../fotos/AI.png',
            imageWidth: 100,
            maxWidth: 500,
            color: '#D54346',
            layout: 2,
            balloon: true,
            progressBarEasing: 'linear',
            transitionIn: transitions(),
            title: title,
            message: message,
            position: 'center', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter
            progressBarColor: '#FE4365',
            drag:"false",
            timeout: false,
            overlay: true,
            displayMode: 'once',
            inputs: [
                ['<input type="text">', 'keyup', function (instance, toast, input, e) {
                    name = input.value;
                }, true], // true to focus
            ],
            buttons: [
                ['<button class="btn btn-primary">Acept</button>', function (instance, toast) {
                    instance.hide({
                        transitionOut: transitions("out"),
                        onClosing: function(instance, toast, closedBy){

                            //Empty value for both of us
                            if(name == ""){
                                iziToast.warning({
                                    image: '../fotos/sad.png',
                                    icon: 'far fa-sad-cry',
                                    color: 'yellow',
                                    title: 'Wait!...',
                                    position: 'center',
                                    transitionOut: transitions("out"),
                                    transitionIn: transitions(),
                                    message: "The name cannot be empty 😢",
                                    onClosing: function(instance, toast, closedBy){
                                        if(!her) {
                                            nameRequest();
                                        } else{
                                            nameRequest(true);
                                        }
                                    }
                                });
                                return false;
                            }
                            //wrong name
                            if(!her){
                                //for him
                                if(!validName.includes(name.toLowerCase().trim())){
                                    iziToast.show({
                                        image: '../fotos/sad.png',
                                        icon: 'fas fa-flushed',
                                        color: 'yellow',
                                        title: 'Wait!...',
                                        position: 'center',
                                        transitionOut: transitions("out"),
                                        transitionIn: transitions(),
                                        message: "¡No!, "+name+" is not the name of the person you are in love 😤",
                                        onClosing: function(instance, toast, closedBy){
                                            nameRequest();
                                            return false;
                                        }
                                    });
                                    nameRequest();
                                    return false;
                                } else {
                                    hisName = name;
                                    hisName = hisName.charAt(0).toUpperCase() + hisName.slice(1);

                                    nameRequest(true);
                                    return true;
                                }
                            } else {
                                let mes = "";
                                if(!her){
                                    mes = "¡No!, "+name+" is not the name of the person you are in love 😤";
                                } else {
                                    mes = "¡No!, "+name+" is not the name who Jose is in love 😭"
                                }
                                if(!validNameHer.includes(name.toLowerCase().trim())){
                                    iziToast.show({
                                        image: '../fotos/sad.png',
                                        icon: 'fas fa-flushed',
                                        color: 'yellow',
                                        title: 'Wait!...',
                                        position: 'center',
                                        transitionOut: transitions("out"),
                                        transitionIn: transitions(),
                                        message: mes,
                                        onClosing: function(instance, toast, closedBy){
                                            nameRequest(true);
                                            return false;
                                        }
                                    });
                                    nameRequest(true);
                                    return false;
                                } else {
                                    herName = name;
                                    herName = herName.charAt(0).toUpperCase() + herName.slice(1);
                                    showMessages();
                                    return true;
                                }
                            }
                        }
                    }, toast, 'buttonName');
                }]
            ],
            onOpening: function(instance, toast){
                console.info('callback abriu!');
            },
            onClosing: function(instance, toast, closedBy){
                console.info('closedBy: ' + closedBy); // tells if it was closed by 'drag' or 'button'
            }
        });
    }

    function showMessages(time = 1) {
        let message = "";
        let title = "";
        let subMessage = "";
        let percent;
        let img = "../fotos/AI.png";

        switch (time) {
            case 1:
                title = "Getting Information...";
                message = "After analyzing a basic part of the both, I have detected quite valuable information. <span class='magicW'>K</span><sup>1</sup>eep this in mind because it is important 😉";
                subMessage = "Measuring emotion levels:";
                percent = 5;
                break;
            case 2:
                title = "I know more thant you think " +herName;
                message = "Did you know that I have the knowledge of fate? I am able to see what you feel in the deepest of your heart ❤";
                subMessage = "Feelings that your heart screams. Emotion Levels:";
                percent = 10;
                img ="../fotos/scared.png";

                break;
            case 3:
                title = "Letting you know";
                message = "As a Sorcerer of Fate who has analyzed your heart and the person who is deep inside in your heart, I can confirm you, "+herName+", oh yes, I know your name is "+herName+" 🤭, that to "+hisName+" you are the most important person in the world.";
                subMessage = "His heart screams you<span class='magicW'>R</span><sup>2</sup> name, it only beats for you 😍. Emotion levels:";
                percent = 25;
                img ="../fotos/cuteface.png";

                break;
            case 4:
                title = "Magic Exists Between The Two";
                message = "The trust you have in each other is something magical ✨. Something even words can't describe 😱";
                subMessage = "Let nothing come between you and him. Emotion levels:";
                percent = 30;
                break;
            case 5:
                title = hisName +" is so in love of you";
                message = "He loves you very very much 🥰. There is nothing <span class='magicW'>I</span><sup>3</sup>n the world that he loves so much, and nothing can take away that feeling he feels for you 😍";
                subMessage = "The power of that feeling is really awesome. Emotion Levels:";
                percent = 40;
                break;
            case 6:
                title = "Together, You Will Be Able With Everything";
                message = "Sometimes the situation can be complicated or the distance can be difficult 😔. But...";
                subMessage = "Other better things are more important than this... Emotion Levels:";
                percent = 50;
                break;
            case 7:
                title = hisName+"'s Inspiration Moment 🥰";
                message = "In the quiet garden of "+hisName+"'s heart, your name blooms like the first rose of spring, "+ herName;
                subMessage = "The stars may light the sky, but it is your smile that illuminates "+hisName+"'s soul in Seoul 🫣... Emotion Levels:";
                percent = 55;
                img ="../fotos/funyJose.png";
                break;
            case 8:
                title = "Important Information";
                message = "If there is something clear, it is that there i<span class='magicW'>S</span><sup>4</sup> nothing than he wants more than to share his life with you, by your side 🤗";
                subMessage = "Exciting, his heart is yours ❤, don't let his go. Emotion Levels:";
                percent = 65;
                break;
            case 9:
                title = "Really Important Words";
                message = "There is nothing more beautiful than being with the one you love, sharing their dreams, and helping them come true. Each day by that person's side fills their heart with joy and lights their face with the most radiant smile. 🥰";
                subMessage = "<span class='magicW'>T</span><sup>5</sup>ell him you love him, don't hold it back. Emotion Levels:";
                percent = 70;
                img ="../fotos/looking.png";

                break;
            case 10:
                title = "Near Future";
                message = "The day will come when all your dreams will come true, your wishes will be fulfilled. And he will be with you so that all of these are possible 😃";
                subMessage = "That sounds incredible, but you are his destiny. Emotion Levels:";
                percent = 75;
                break;
            case 11:
                title = "To love is power and power is love";
                message = "Perhaps the one who loves you is a little strange at times, but who else but love itself dares to break the rules just to make you laugh? 🙃";
                subMessage = "Love may come dressed in oddity, but only the heart that dares to be different can scatter your laughter like stars across the night 😜. Emotion Levels:";
                percent = 80;
                img ="../fotos/suriJose.png";

                break;
            case 12:
                title = herName + " It is Amazing";
                message = "As far as <span class='magicW'>I</span><sup>6</sup> can see, inside your heart there is a great person, someone like that deserves the best, you also deserve to be loved, taken care of and pampered 🤗";
                subMessage = "Your emotion levels oscillates by the:";
                percent = 85;
                img ="../fotos/coreanme.png";

                break;
            case 13:
                title = "Being A Sorcerer of Fate, I Think, I Like You Too";
                message = "Today is a special day, one that won't be forgotten. "+hisName+" wishes he could be with you right now, sharing countless beautiful moments together. 😌";
                subMessage = "It sounds interesting, but why is today a special day? 🤔 Emotion Levels:";
                percent = 87;
                break;
            case 14:
                title = "Shadows with love cover the Halloween night";
                message = "Wrapped in the oddest Halloween disguise, "+hisName+"'s crossed the night just to reach your light because even shadows know where true love hides. 😈.";
                subMessage = "His heart would still find yours because love sees through masks no matter how weird they seem. 👻 Emotion Levels:";
                percent = 90;
                img ="../fotos/crepy.png";
                break;
            case 15:
                title = "There Is More Than You Think";
                message = "Today is another day that brings you closer to your goals, one step nearer to your happiness. It's a day you’ll look back on, when your dreams have come true and what once felt distant is now your reality. 😃";
                subMessage = "Liste<span class='magicW'>N</span><sup>7</sup> to it, it knows what it's talking about. Emotion Levels:";
                percent = 95;
                img ="../fotos/pensative.png";

                break;

            case 16:
                title = "Today is a Special day";
                message = "But for now, we wish you a Happy Birthday 🥳, with all our best wishes 🥰. And don’t forget everything fate has whispered to you 🤫";
                subMessage = "Your emotion levels oscillates by the 😳:";
                percent = 99.9;
                break;
            default:
                title = "Happy Birthday";
                message = "I love you "+herName+"! 🤗";
                img ="../fotos/together.png";

        }

        iziToast.info({
            theme: 'light',
            icon: 'icon-person',
            iconText: '',
            image: img,
            color: '#fc9d9a',
            layout: 2,
            balloon: false,
            imageWidth: 130,
            maxWidth: 500,
            progressBarEasing: 'linear',
            transitionIn: transitions(),
            title: title,
            drag: "false",
            timeout: false,
            overlay: true,
            message: "<b class=''><br>" + message + "<br><br></b>",
            progressBarColor: '#bd2f2c',
            position: 'center',
            displayMode: 'once',

            buttons: [
                ['<button>Ok</button>', function (instance, toast) {
                    instance.hide({
                        transitionOut: transitions("out"),
                        onClosing: function (instance, toast, closedBy) {
                            if(time <= 16){
                                showMessage(subMessage, percent)
                                showMessages(time+1);
                                return false;
                            } else {
                                showFin();
                                return true;
                            }
                        }
                    }, toast, 'buttonName');
                }, true], // true to focus
            ],
            onClosing: function (instance, toast, closedBy) {
                if(time <= 16){
                    showMessage(subMessage, percent)
                    showMessages(time+1);
                    return false;
                } else {
                    showFin();
                    return true;
                }

            }
        });
    }

    function showMessage(text, percent = 0) {
        iziToast.show({
            theme: 'light',
            timeout: '10000',
            icon: 'icon-person',
            iconText: '',
            image: '../fotos/thinking.png',
            imageWidth: 80,
            maxWidth: 500,
            color: '#a5cbd8',
            layout: 2,
            balloon: false,
            progressBarEasing: 'linear',
            transitionIn: transitions(),
            title: 'The Wise Destiny',
            message: text+'<br><br><div class="progress"><div class="progress-bar bg-danger progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="'+percent+'" aria-valuemin="0" aria-valuemax="100" style="width: '+percent+'%">'+percent+'%</div></div>',
            position: transitions("pos"), // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter
            progressBarColor: '#51d1f6',
            onOpening: function(instance, toast){
                console.info('callback chu!');
            },
            onClosing: function(instance, toast, closedBy){
                console.info('closedBy: ' + closedBy); // tells if it was closed by 'drag' or 'button'
            }
        });
    }

    function showFin() {
        //clean the residual iziToast class
        if($(".iziToast-overlay").length > 0){
            $(".iziToast-overlay").remove();
        }
        if($(".iziToast-wrapper").length > 0){
            $(".iziToast-wrapper").remove();
        }

        $(".cardbd").fadeIn( "slow");
        $("#birthday").fadeIn("3000")
    }

    $(".cardbd").click(function(ev){
        if( $(ev.target).hasClass("boxy")){
            return;
        }
        if($(".cardbd").hasClass("cardop")){
            $(".cardbd").removeClass("cardop");
            $(".outside").removeClass("cardop2");
        } else {
            $(".cardbd").addClass("cardop");
            $(".outside").addClass("cardop2");
        }
    });

    $(".boxy").click(function(ev){
        window.open('end.html', '_blank');
    });
});

//Animate Baloons!
function ballons(baloonId = 1){
    $(".baloons").removeClass("d-none");
    $("#bal"+baloonId).animate({
        bottom:"200%"},  7000);
    window.setTimeout(function(){
        ballons(baloonId+1)
    }, 700);
}
//ballons(1)



//FIREWORKS ANIMATE
// helper functions
const PI2 = Math.PI * 2
const random = (min, max) => Math.random() * (max - min + 1) + min | 0
const timestamp = _ => new Date().getTime()

// container
class Birthday {
    constructor() {
        this.resize()

        // create a lovely place to store the firework
        this.fireworks = []
        this.counter = 0

    }

    resize() {
        this.width = canvas.width = window.innerWidth
        let center = this.width / 2 | 0
        this.spawnA = center - center / 4 | 0
        this.spawnB = center + center / 4 | 0

        this.height = canvas.height = window.innerHeight
        this.spawnC = this.height * .1
        this.spawnD = this.height * .5

    }

    onClick(evt) {
        let x = evt.clientX || evt.touches && evt.touches[0].pageX
        let y = evt.clientY || evt.touches && evt.touches[0].pageY

        let count = random(3,5)
        for(let i = 0; i < count; i++) this.fireworks.push(new Firework(
            random(this.spawnA, this.spawnB),
            this.height,
            x,
            y,
            random(0, 260),
            random(30, 110)))

        this.counter = -1

    }

    update(delta) {
        ctx.globalCompositeOperation = 'hard-light'
        ctx.fillStyle = `rgba(20,20,20,${ 7 * delta })`
        ctx.fillRect(0, 0, this.width, this.height)

        ctx.globalCompositeOperation = 'lighter'
        for (let firework of this.fireworks) firework.update(delta)

        // if enough time passed... create new new firework
        this.counter += delta * 3 // each second
        if (this.counter >= 1) {
            this.fireworks.push(new Firework(
                random(this.spawnA, this.spawnB),
                this.height,
                random(0, this.width),
                random(this.spawnC, this.spawnD),
                random(0, 360),
                random(30, 110)))
            this.counter = 0
        }

        // remove the dead fireworks
        if (this.fireworks.length > 1000) this.fireworks = this.fireworks.filter(firework => !firework.dead)

    }
}

class Firework {
    constructor(x, y, targetX, targetY, shade, offsprings) {
        this.dead = false
        this.offsprings = offsprings

        this.x = x
        this.y = y
        this.targetX = targetX
        this.targetY = targetY

        this.shade = shade
        this.history = []
    }
    update(delta) {
        if (this.dead) return

        let xDiff = this.targetX - this.x
        let yDiff = this.targetY - this.y
        if (Math.abs(xDiff) > 3 || Math.abs(yDiff) > 3) { // is still moving
            this.x += xDiff * 2 * delta
            this.y += yDiff * 2 * delta

            this.history.push({
                x: this.x,
                y: this.y
            })

            if (this.history.length > 20) this.history.shift()

        } else {
            if (this.offsprings && !this.madeChilds) {

                let babies = this.offsprings / 2
                for (let i = 0; i < babies; i++) {
                    let targetX = this.x + this.offsprings * Math.cos(PI2 * i / babies) | 0
                    let targetY = this.y + this.offsprings * Math.sin(PI2 * i / babies) | 0

                    birthday.fireworks.push(new Firework(this.x, this.y, targetX, targetY, this.shade, 0))

                }

            }
            this.madeChilds = true
            this.history.shift()
        }

        if (this.history.length === 0) this.dead = true
        else if (this.offsprings) {
            for (let i = 0; this.history.length > i; i++) {
                let point = this.history[i]
                ctx.beginPath()
                ctx.fillStyle = 'hsl(' + this.shade + ',100%,' + i + '%)'
                ctx.arc(point.x, point.y, 1, 0, PI2, false)
                ctx.fill()
            }
        } else {
            ctx.beginPath()
            ctx.fillStyle = 'hsl(' + this.shade + ',100%,50%)'
            ctx.arc(this.x, this.y, 1, 0, PI2, false)
            ctx.fill()
        }

    }
}

let canvas = document.getElementById('birthday')
let ctx = canvas.getContext('2d')

let then = timestamp()

let birthday = new Birthday;
window.onresize = () => birthday.resize()
document.onclick = evt => birthday.onClick(evt)
document.ontouchstart = evt => birthday.onClick(evt)

;(function loop(){
    requestAnimationFrame(loop)

    let now = timestamp()
    let delta = now - then

    then = now
    birthday.update(delta / 1000)
})()
