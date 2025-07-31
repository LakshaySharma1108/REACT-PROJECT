import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import 'remixicon/fonts/remixicon.css'

const App = () => {
  const [showContent, setShowContent] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "Expo.easeInOut",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          document.querySelector(".svg").remove();
          setShowContent(true);
          this.kill();
        }
      },
    });
  });

  useGSAP(()=>{
    if(!showContent) return;

    gsap.to(".main", {
      delay:-1,
      duration:2,
      rotate:0,
      scale:1,
      ease:"Expo.easeInOut"
    })
    gsap.to(".sky", {
  scale: 1.2,
  rotate: 0,
  duration: 2,
  delay: "-.8",
  ease: "Expo.easeInOut",
});

gsap.to(".bg", {
  scale: 1.2,
  rotate: 0,
  duration: 2,
  delay: "-.8",
  ease: "Expo.easeInOut",
});
gsap.to(".text", {
  scale: 1,
  rotate: 0,
  duration: 2,
  delay: "-.8",
  ease: "Expo.easeInOut",
});
gsap.to(".character", {
  scale: 1,
  bottom:"-30%",
  rotate: 0,
  duration: 2,
  delay: "-.8",
  ease: "Expo.easeInOut",
});

    const main = document.querySelector(".main")

  
    main?.addEventListener("mousemove",function(e){
      const xMove = (e.clientX - window.innerWidth-0.5)*.25;

      gsap.to(".main .text", {
        x: `${xMove*0.4}`
      })

      gsap.to(".Imagesdiv .sky", {
        x: `${xMove*0.4}`
      })

      gsap.to(".Imagesdiv .bg", {
        x: `${xMove*0.2}`
      })


    })
  }, [showContent])


  return (
    <>
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
        <svg
          viewBox="0 0 800 600"
          preserveAspectRatio="xMidYMid slice"
          width="100%"
          height="100%"
        >
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>

          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          ></image>
        </svg>
      </div>

      {showContent && (
        <div className="main rotate-[-10deg] scale-[1.7] w-full">
          <div className="landing overflow-hidden relative w-full h-screen bg-black">
            <div className="navbar absolute top-0 left-0 w-full z-[10] py-10 px-10 ">
             
              <div className="logo flex gap-4">
              <div className="lines flex flex-col gap-1">
                <div className="line w-15 h-1  bg-white"></div>
                <div className="line w-8 h-1  bg-white"></div>
                <div className="line w-5 h-1 bg-white"></div>
              </div>
              <h3 className="text-2xl -mt-[6px] leading-none text-white">Rockstar</h3>
              </div>
            </div>
            <div className="Imagesdiv relative w-full overflow-hidden h-screen">
              <img
                className="sky absolute scale-[1.3] rotate-[-20deg] top-0 left-0 w-full h-full object-cover"
                src="./sky.png"
                alt=""
              />
              <img
                className="absolute scale-[1.8] rotate-[-3deg] bg top-0 left-0 w-full h-full object-cover"
                src="./bg.png"
                alt=""
              />
               <div className="text absolute text-white flex flex-col gap-2 top-15 left-1/2 -translate-x-[1/2] scale-[1.4] rotation-[-10deg]">
                <h1 className="text text-9xl -ml-75">grand</h1>
                <h1 className="text text-9xl -ml-30">theft</h1>
                <h1 className="text text-9xl -ml-65">auto</h1>
              </div>
              <img
                className="absolute character bottom-[-150%] left-1/2 -translate-x-1/2 w-[50%] max-h-[100%] scale-[3] rotate-[-20deg] object-contain"
                src="./girlbg.png"
                alt="Girl"
              />
            </div>
            <div className="btmbar  text-white absolute z-[10] bottom-0 left-0 w-full py-10 px-10 bg-gradient-to-t from-black/80 to-transparent">
              <div className="flex items-center gap-4">
                <i className="text-4xl ri-arrow-down-line"></i>
                <h3 className="text-2xl font-[Helvetica_Now_Display]">Scroll Down</h3>
              </div>
              <img className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[50px] " src="./ps5.png" alt="" />
</div>
          </div>
          <div className="w-full h-screen flex items-center justify-center bg-black">
            <div className="cntnr flex text-white w-full h-[80%] ">
                <div className="leftimg  w-1/2 h-full relative">
                <img className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[0.7]" src="./imag.png" alt="" />
              </div>
            <div className="rimg w-[30%] ">
              <h1 className="text-5xl">Still Running</h1>
              <h1 className="text-5xl">Not Hunting</h1>
              <p className="mt-7 font-[Helvetica_Now_Display]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, dignissimos ratione? Molestias temporibus enim itaque cupiditate. Non cum quasi magnam aperiam provident beatae!</p>
              <p className="mt-3 font-[Helvetica_Now_Display]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta accusamus architecto qui ducimus delectus est, dolor laudantium nam quia aspernatur, et, illum magni. Facere quas cumque animi ratione saepe porro sint exercitationem, totam repellendus minus!</p>
              <p className="mt-3 font-[Helvetica_Now_Display]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa aperiam commodi fuga earum culpa voluptatum saepe, totam consectetur autem aut?!</p>
              <button className="bg-yellow-500 px-6 py-4 mt-10 text-black text-xl">Download Now</button>
            </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
