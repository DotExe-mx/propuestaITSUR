$(document).ready(function(){
    //    animation: desplazar 2s cubic-bezier(0.43, 0.85, 0.7, 1) 0s 1 normal forwards;
    //from{
    //    margin-left: -90vw;
    //}to{
    //    margin-left: 1vw;
    //}
    document.querySelector('#barra2').animate(
        [
            {
                marginLeft: '-90vw'
            },{
                marginLeft: '1vw'
            }
        ],
        {
            duration:3000,
            easing:'linear',
            iterations:1,
            fill:'forwards',
            direction:'normal',
            delay:0
    });

    document.querySelector('.DB').animate(
        [
            {
                transform: 'scale(0)'
            },{
                transform: 'scale(1)'
            }
        ],
        {
            duration:1500,
            easing:'linear',
            iterations:1,
            fill:'forwards',
            direction:'normal',
            delay:3000
    });
    document.querySelector('.cisco').animate(
        [
            {
                transform: 'scale(0)'
            },{
                transform: 'scale(1)'
            }
        ],
        {
            duration:1500,
            easing:'linear',
            iterations:1,
            fill:'forwards',
            direction:'normal',
            delay:3500
    });
    document.querySelector('.java').animate(
        [
            {
                transform: 'scale(0)'
            },{
                transform: 'scale(1)'
            }
        ],
        {
            duration:1500,
            easing:'linear',
            iterations:1,
            fill:'forwards',
            direction:'normal',
            delay:4000
    });
    document.querySelector('.IoT').animate(
        [
            {
                transform: 'scale(0)'
            },{
                transform: 'scale(1)'
            }
        ],
        {
            duration:1500,
            easing:'linear',
            iterations:1,
            fill:'forwards',
            direction:'normal',
            delay:4500
    });
    document.querySelector('.android').animate(
        [
            {
                transform: 'scale(0)'
            },{
                transform: 'scale(1)'
            }
        ],
        {
            duration:1500,
            easing:'linear',
            iterations:1,
            fill:'forwards',
            direction:'normal',
            delay:4500
    });
    document.querySelector('#logo2').animate(
        [
            {
                transform: 'rotateY(-90deg)'
            },{
                transform: 'rotateY(0deg)'
            }
        ],
        {
            duration:1000,
            easing:'linear',
            iterations:1,
            fill:'forwards',
            direction:'normal',
            delay:5000
    });
    document.querySelector('#barra1').animate(//105vw;/*18*/
        [
            {
                marginLeft: '105vw'
            },{
                marginLeft: '18vw'
            }
        ],
        {
            duration:3000,
            //easing:'cubic-bezier(0.43, 0.85, 0.7, 1)',
            easing:'linear',
            iterations:1,
            fill:'forwards',
            direction:'normal',
            delay:5000
    });
    document.querySelector('.css').animate(
        [
            {
                transform: 'scale(0)'
            },{
                transform: 'scale(1)'
            }
        ],
        {
            duration:1500,
            easing:'linear',
            iterations:1,
            fill:'forwards',
            direction:'normal',
            delay:8500
    });
    document.querySelector('.CSharp').animate(
        [
            {
                transform: 'scale(0)'
            },{
                transform: 'scale(1)'
            }
        ],
        {
            duration:1500,
            easing:'linear',
            iterations:1,
            fill:'forwards',
            direction:'normal',
            delay:9000
    });
    document.querySelector('.php').animate(
        [
            {
                transform: 'scale(0)'
            },{
                transform: 'scale(1)'
            }
        ],
        {
            duration:1500,
            easing:'linear',
            iterations:1,
            fill:'forwards',
            direction:'normal',
            delay:9500
    });
    document.querySelector('.js').animate(
        [
            {
                transform: 'scale(0)'
            },{
                transform: 'scale(1)'
            }
        ],
        {
            duration:1500,
            easing:'linear',
            iterations:1,
            fill:'forwards',
            direction:'normal',
            delay:10000
    });
    document.querySelector('.html').animate(
        [
            {
                transform: 'scale(0)'
            },{
                transform: 'scale(1)'
            }
        ],
        {
            duration:1500,
            easing:'linear',
            iterations:1,
            fill:'forwards',
            direction:'normal',
            delay:10500
    });
    document.querySelector('#logo1').animate(
        [
            {
                transform: 'rotateY(-90deg)'
            },{
                transform: 'rotateY(0deg)'
            }
        ],
        {
            duration:1000,
            easing:'linear',
            iterations:1,
            fill:'forwards',
            direction:'normal',
            delay:11000
    });
    document.querySelector('#tituloBanner').animate(
        [
            {
                transform: 'scale(0)'
            },{
                transform: 'scale(1)'
            }
        ],
        {
            duration:1500,
            easing:'cubic-bezier(0.43, 0.85, 0.7, 2)',
            iterations:1,
            fill:'forwards',
            direction:'normal',
            delay:11500
    });
});