
        

        // GSAP Animation for Initial Load
        gsap.from("#doll", { opacity: 0, x: -100, duration: 1 });

        // Handwriting Effect
        gsap.to("#valentine-text", { 
            text: "Happy Valentine", 
            duration: 5, 
            delay: 1.2, 
            ease: "power1.out",
            opacity: 1 
        });

        // Fade-in Poem
        gsap.to("#poem", { opacity: 1, y: 0, duration: 1, delay: 7 });

        // Parallax Scroll Effect
        gsap.to("#doll img", {
            scrollTrigger: {
          trigger: "header.header",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
        yPercent: 40,
        scale:0.7,
        
        filter: "blur(5px)", // Blurred appearance
        ease: "power1.out",
        });

        gsap.to("#valentine-text", {
            scrollTrigger: {
                trigger: "#valentine-text",
                start: "top 40%",  // Start effect slightly before entering view
                end: "bottom top",  // Keep it running smoothly till it exits
                scrub: 2,  // Makes motion fluid
            },
            scale:0.7,
            filter: "blur(2px)", 
            y: 120,  // Moves text down smoothly
            ease: "none",  // Avoids sudden jumps
            
        });


        gsap.to("#poem", {
            y: -20, // Moves poem slightly up on scroll
            scrollTrigger: {
                trigger: "#poem",
                start: "top 90%",
                scrub: true
            }
        });

