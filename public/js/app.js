function initParticles() {
  const isSmallScreen = window.innerWidth < 768;
  
  particlesJS("particles-js", {
    particles: {
      number: {
        value: isSmallScreen ? 80 : 160,
        density: {
          enable: true,
          value_area: isSmallScreen ? 200 : 450
        }
      },
      color: {
        value: "#9d9d9d"
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000"
        },
        polygon: {
          nb_sides: 5
        },
        image: {
          src: "img/github.svg",
          width: 100,
          height: 100
        }
      },
      opacity: {
        value: 1,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0,
          sync: false
        }
      },
      size: {
        value: isSmallScreen ? 2 : 3,
        random: true,
        anim: {
          enable: false,
          speed: 4,
          size_min: 0.3,
          sync: false
        }
      },
      line_linked: {
        enable: false,
        distance: 150,
        color: "#dedcdc",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: isSmallScreen ? 0.5 : 1,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 600
        }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: false,
          mode: "bubble"
        },
        onclick: {
          enable: false,
          mode: "repulse"
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 250,
          size: 0,
          duration: 2,
          opacity: 0,
          speed: 3
        },
        repulse: {
          distance: 400,
          duration: 0.4
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      }
    },
    retina_detect: true
  });
}

initParticles();

window.addEventListener("resize", () => {
  document.querySelector("#particles-js").innerHTML = "";
  initParticles();
});
