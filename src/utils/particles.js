export default {
    background: {
        color: {
            value: "#1d1d1d",
        },
    },
    fpsLimit: 100,
    interactivity: {
        events: {
            onClick: {
                enable: true,
                mode: "push",
            },
            onHover: {
                enable: true,
                mode: "repulse",
            },
            resize: true,
        },
        modes: {
            push: {
                quantity: 4,
            },
            repulse: {
                distance: 130,
                duration: 0.4,
            },
        },
    },
    particles: {
        color: {
            value: "#ffffff",
        },
        links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.1,
            width: 1,
        },
        collisions: {
            enable: true,
        },
        move: {
            direction: "none",
            enable: true,
            outModes: {
                default: "bounce",
            },
            random: false,
            speed: 0.9,
            straight: false,
        },
        number: {
            density: {
                enable: true,
                area: 500,
            },
            value: 80,
        },
        opacity: {
            value: 0.5,
        },
        shape: {
            type: "react",
        },
        size: {
            value: { min: 1, max: 5 },
        },
    },
    detectRetina: true,
};