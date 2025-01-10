2:I[4707,[],""]
3:I[6423,[],""]
4:{"fontFamily":"system-ui,\"Segoe UI\",Roboto,Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\"","height":"100vh","textAlign":"center","display":"flex","flexDirection":"column","alignItems":"center","justifyContent":"center"}
5:{"display":"inline-block","margin":"0 20px 0 0","padding":"0 23px 0 0","fontSize":24,"fontWeight":500,"verticalAlign":"top","lineHeight":"49px"}
6:{"display":"inline-block"}
7:{"fontSize":14,"fontWeight":400,"lineHeight":"49px","margin":0}
8:T784,
  function createStars() {
    const starsContainer = document.getElementById('stars');
    const numberOfStars = 200;
    for (let i = 0; i < numberOfStars; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.width = Math.random() * 2 + 'px';
      star.style.height = star.style.width;
      star.style.left = Math.random() * 100 + '%';
      star.style.top = Math.random() * 100 + '%';
      star.style.animationDelay = Math.random() * 3 + 's';
      starsContainer.appendChild(star);
    }
  }

  function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const numberOfParticles = 50;
    for (let i = 0; i < numberOfParticles; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.width = (Math.random() * 5 + 1) + 'px';
      particle.style.height = particle.style.width;
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
      particle.style.animationDelay = Math.random() * 5 + 's';
      particlesContainer.appendChild(particle);
    }
  }

  function createShootingStars() {
    const shootingStarsContainer = document.getElementById('shooting-stars');
    const numberOfShootingStars = 3;
    for (let i = 0; i < numberOfShootingStars; i++) {
      const shootingStar = document.createElement('div');
      shootingStar.className = 'shooting-star';
      shootingStar.style.top = Math.random() * 50 + '%';
      shootingStar.style.left = Math.random() * 50 + '%';
      shootingStar.style.animationDelay = Math.random() * 5 + 's';
      shootingStarsContainer.appendChild(shootingStar);
    }
  }

  window.addEventListener('load', () => {
    createStars();
    createParticles();
    createShootingStars();
  });
0:["RtTbUL40-_jdTcTamB4jo",[[["",{"children":["/_not-found",{"children":["__PAGE__",{}]}]},"$undefined","$undefined",true],["",{"children":["/_not-found",{"children":["__PAGE__",{},[["$L1",[["$","title",null,{"children":"404: This page could not be found."}],["$","div",null,{"style":{"fontFamily":"system-ui,\"Segoe UI\",Roboto,Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\"","height":"100vh","textAlign":"center","display":"flex","flexDirection":"column","alignItems":"center","justifyContent":"center"},"children":["$","div",null,{"children":[["$","style",null,{"dangerouslySetInnerHTML":{"__html":"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}"}}],["$","h1",null,{"className":"next-error-h1","style":{"display":"inline-block","margin":"0 20px 0 0","padding":"0 23px 0 0","fontSize":24,"fontWeight":500,"verticalAlign":"top","lineHeight":"49px"},"children":"404"}],["$","div",null,{"style":{"display":"inline-block"},"children":["$","h2",null,{"style":{"fontSize":14,"fontWeight":400,"lineHeight":"49px","margin":0},"children":"This page could not be found."}]}]]}]}]],null],null],null]},[null,["$","$L2",null,{"parallelRouterKey":"children","segmentPath":["children","/_not-found","children"],"error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L3",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","notFoundStyles":"$undefined"}]],null]},[[[["$","link","0",{"rel":"stylesheet","href":"/_next/static/css/18e1d037bedc024e.css","precedence":"next","crossOrigin":"$undefined"}]],["$","html",null,{"lang":"en","children":["$","body",null,{"className":"__className_0aa4ae flex flex-col min-h-screen text-gray-100","children":[["$","div",null,{"className":"space-background","children":[["$","div",null,{"id":"stars","className":"stars"}],["$","div",null,{"id":"particles","className":"particles"}],["$","div",null,{"id":"shooting-stars","className":"shooting-stars"}]]}],["$","$L2",null,{"parallelRouterKey":"children","segmentPath":["children"],"error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L3",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":[["$","title",null,{"children":"404: This page could not be found."}],["$","div",null,{"style":"$4","children":["$","div",null,{"children":[["$","style",null,{"dangerouslySetInnerHTML":{"__html":"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}"}}],["$","h1",null,{"className":"next-error-h1","style":"$5","children":"404"}],["$","div",null,{"style":"$6","children":["$","h2",null,{"style":"$7","children":"This page could not be found."}]}]]}]}]],"notFoundStyles":[]}],["$","script",null,{"dangerouslySetInnerHTML":{"__html":"$8"}}]]}]}]],null],null],["$L9",["$","meta",null,{"name":"robots","content":"noindex"}]]]]]
9:[["$","meta","0",{"name":"viewport","content":"width=device-width, initial-scale=1"}],["$","meta","1",{"charSet":"utf-8"}],["$","title","2",{"children":"Elara News - AI-Driven Data Marketplace on SUI Blockchain"}],["$","meta","3",{"name":"description","content":"Discover $Elara token - powering advanced data analysis and exclusive insights in the cryptocurrency market on the SUI blockchain."}],["$","meta","4",{"name":"keywords","content":"Elara, SUI blockchain, AI, data marketplace, cryptocurrency"}],["$","meta","5",{"property":"og:title","content":"Elara News - AI-Driven Data Marketplace on SUI Blockchain"}],["$","meta","6",{"property":"og:description","content":"Discover $Elara token - powering advanced data analysis and exclusive insights in the cryptocurrency market on the SUI blockchain."}],["$","meta","7",{"property":"og:image","content":"http://localhost:3000/og-image.jpg"}],["$","meta","8",{"name":"twitter:card","content":"summary_large_image"}],["$","meta","9",{"name":"twitter:title","content":"Elara News - AI-Driven Data Marketplace on SUI Blockchain"}],["$","meta","10",{"name":"twitter:description","content":"Discover $Elara token - powering advanced data analysis and exclusive insights in the cryptocurrency market on the SUI blockchain."}],["$","meta","11",{"name":"twitter:image","content":"http://localhost:3000/twitter-image.jpg"}],["$","meta","12",{"name":"next-size-adjust"}]]
1:null
