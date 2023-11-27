const canvas= document.querySelector(".canvas");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

const context= canvas.getContext("2d");
const frameCount=200;

const currentFrame=(index)=>`./Quest/${(index+1).toString()}.png`;
const images=[];
let pose= {frame:0};

for(let i=0;i<frameCount;i++)
{
  const img= new Image();
  img.src=currentFrame(i);
  images.push(img);
}

gsap.to(pose, {
  frame:frameCount-1,
  snap:"frame",
  ease:"none",
  scrollTrigger:{
    scrub:true,
    pin: "canvas",
    end: "500%",
  },
  onUpdate:render,
});

gsap.fromTo(
  ".head-text",{
    top:300,
  },{
    top:0,
    scrollTrigger:{
      scrub:true,
      start:"5%",
      end:"20%",
    },
  }
);

gsap.fromTo(
  ".scroll",{
    opacity:1,
  },{
    opacity:0,
    scrollTrigger:{
      scrub:true,
      start:"0%",
      end:"5%",
    },
  }
);

gsap.fromTo(
  ".head-text",{
    opacity:1,
  },{
    opacity:0,
    scrollTrigger:{
      scrub:true,
      start:"40%",
      end:"60%",
    },
  }
);

gsap.fromTo(
  ".txt",{
    opacity:0,
    bottom:500,
    visibility:"hidden",
  },{
    opacity:1,
    bottom:10,
    visibility:"visible",
    scrollTrigger:{
      scrub:true,
      start:"30%",
      end:"50%",
    },
  }
);

gsap.fromTo(
  ".head-text1",{
    opacity:0
  },{
    opacity:1,
    scrollTrigger:{
      scrub:true,
      start:"60%",
      end:"65%",
    },
  }
);
gsap.fromTo(
  ".head-text2",{
    opacity:0
  },{
    opacity:1,
    scrollTrigger:{
      scrub:true,
      start:"65%",
      end:"70%",
    },
  }
);
gsap.fromTo(
  ".head-text3",{
    opacity:0
  },{
    opacity:1,
    scrollTrigger:{
      scrub:true,
      start:"70%",
      end:"75%",
    },
  }
);

gsap.fromTo(
  ".head-text4",{
    opacity:0
  },{
    opacity:1,
    scrollTrigger:{
      scrub:true,
      start:"75%",
      end:"80%",
    },
  }
);

gsap.fromTo(
  ".head-text5",{
    opacity:0
  },{
    opacity:1,
    scrollTrigger:{
      scrub:true,
      start:"80%",
      end:"85%",
    },
  }
);

gsap.fromTo(
  ".head-text6",{
    opacity:0
  },{
    opacity:1,
    scrollTrigger:{
      scrub:true,
      start:"85%",
      end:"90%",
    },
  }
);

gsap.fromTo(
  ".head-text7",{
    opacity:0
  },{
    opacity:1,
    scrollTrigger:{
      scrub:true,
      start:"90%",
      end:"95%",
    },
  }
);

gsap.fromTo(
  ".head-text8",{
    opacity:0
  },{
    opacity:1,
    scrollTrigger:{
      scrub:true,
      start:"95%",
      end:"100%",
    },
  }
);

gsap.fromTo(
  ".head-text9",{
    opacity:0
  },{
    opacity:1,
    scrollTrigger:{
      scrub:true,
      start:"100%",
      end:"105%",
    },
  }
);

gsap.fromTo(
  ".head-text10",{
    opacity:0
  },{
    opacity:1,
    scrollTrigger:{
      scrub:true,
      start:"105%",
      end:"110%",
    },
  }
);

gsap.fromTo(
  ".price",{
    opacity:0,
    visibility:"hidden"
  },{
    opacity:1,
    visibility:"visible",
    scrollTrigger:{
      scrub:true,
      start:"110%",
      end:"120%",
    },
  }
);

gsap.fromTo(
  ".price",{
    opacity:1
  },{
    opacity:0,
    scrollTrigger:{
      scrub:true,
      start:"210%",
      end:"220%",
    },
  }
);

gsap.fromTo(
  ".brand1",{
    opacity:1
  },{
    opacity:0,
    scrollTrigger:{
      scrub:true,
      start:"210%",
      end:"220%",
    },
  }
);

gsap.fromTo(
  ".txt",{
    opacity:1
  },{
    opacity:0,
    scrollTrigger:{
      scrub:true,
      start:"210%",
      end:"220%",
    },
  }
);

gsap.fromTo(
  ".features",{
    opacity:0,
    visibility:"hidden"
  },{
    opacity:1,
    visibility:"visible",
    scrollTrigger:{
      scrub:true,
      start:"390%",
      end:"400%",
    },
  }
);

gsap.fromTo(
  ".features",{
    opacity:1,
  },{
    opacity:0,
    scrollTrigger:{
      scrub:true,
      start:"450%",
      end:"460%",
    },
  }
);

gsap.fromTo(
  ".buy",{
    opacity:0,
    // visibility:"hidden"
  },{
    opacity:1,
    // visibility:"visible",
    scrollTrigger:{
      scrub:true,
      start:"490%",
      end:"500%",
    },
  }
);


images[0].onload = render;

function render()
{
  context.clearRect(0,0,canvas.width,canvas.height);
  context.drawImage(images[pose.frame],0,0,canvas.width,canvas.height);
}

