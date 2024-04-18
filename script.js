var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".two",
        start: "0% 95%",
        end: "70% 50%",
        scrub: true,
        // markers: true,
    }
})

tl.to("#fanta", {
    top: "120%",
    left: "0%"
}, 'orange')
tl.to("#cuting-orange", {
    top: "160%",
    left: "25%"
}, 'orange')
tl.to("#orange-img", {
    top: "170%",
    right: "10%",
    width: "15vw"
}, 'orange')
tl.to("#leaf1", {
    top: "105%",
    rotate: "130deg",
    left: "82%"
}, 'orange')
tl.to("#leaf2", {
    top: "110%",
    rotate: "130deg",
    left: "4%"
}, 'orange')

var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".three",
        start: "0% 95%",
        end: "20% 50%",
        scrub: true,
       // markers: true,
    }
})
tl2.from(".lemon1", {
    rotate: "-90deg",
    left: "-100%",
    top: "110%"
}, 'ca')
tl2.from("#cocacola", {
    rotate: "-90deg",
    left: "-100%",
    top: "110%"
}, 'ca')
tl2.from(".lemon2",{
    rotate : "90deg",
    left : "100%",
    top : "110%"
},'ca')
tl2.from("#pepsi",{
    rotate : "90deg",
    left : "100%",
    top : "110%"
},'ca')
tl2.to("#fanta",{
    width : "35%",
    top : "212%",
    left : "33%"
},'ca')
tl2.to("#cuting-orange",{
    width : "20%",
    top : "201%",
    left : "40%"
},'ca')