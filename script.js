
Shery.mouseFollower({
    // skew: true,
  });
var crsr=document.querySelector(".mousefollower");
// var h4=document.querySelector(".mousefollower h4")
var allContainer = document.querySelectorAll(".container");
allContainer.forEach(function(val){
    val.addEventListener("mouseenter",function(){
     crsr.style.scale=4
// h4.style.scale=.5
    })
    val.addEventListener("mouseleave",function(){
        crsr.style.scale=1
    })

})


setInterval(function(){
    var time=new Date();
var today=time.getHours()+":"+ time.getMinutes();
document.querySelector(".nav2 h4 span").innerHTML=today
},3000)


function rightScrollAnimation(){
    
var tl=gsap.timeline();
tl.to(".o-div h4",{
    delay:2,
    rotate:90,
    duration:1,
    ease:"ease"
})
tl.to(".o-div",{
    color:"black",
    background:" white",
    duration:1,
    ease:"ease",
})
tl.to(".o-div",{
    opacity:0

})
tl.to(".loader h4",{
    y:25,
},"s")
tl.to(".loader h5",{
    y:-25,
},"s")
tl.to(".loader",{
    transform:"translateY(-120%)",
    ease:"ease",
    duration:2,
})
tl.from("#h1,.left",{
    y:200,
    ease:"ease",
    opacity:0,
})
tl.from(".right",{
    y:-200,
    opacity:0,
    ease:"ease",
})

}
rightScrollAnimation();


    
Shery.textAnimate(".right h1" /* Element to target.*/, {
    //Parameters are optional.
    style: 1,
    y: 10,
    delay: 0.1,
    duration: 4,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  })
Shery.textAnimate(".right h4" /* Element to target.*/, {
    //Parameters are optional.
    style: 1,
    y: 10,
    delay: 0.1,
    duration: 1,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  })
  
