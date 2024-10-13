// particles-config.js
const particlesConfig = {
  particles: {
      number: {
          value: 80,
          density: {
              enable: true,
              value_area: 800,
          },
      },
      color: {
          value: "#F9BA32",
      },
      line_linked: {
          enable: true, 
          distance: 150, 
          color: "#F9BA32", 
          opacity: 0.4, 
          width: 1,
      },
      opacity: {
          value: 0.5,
          anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
          },
      },
      size: {
          value: 3,
          random: true,
      },
      move: {
          enable: true,
          speed: 2,
          direction: "none",
          out_mode: "out",
      },
  },
  interactivity: {
      events: {
          onhover: {
              enable: true,
              mode: "grab",
          },
      },
      modes: {
          grab: {
              distance: 140,
              line_linked: {
                  opacity: 1,
              },
          },
      },
  },
  retina_detect: true,
};
