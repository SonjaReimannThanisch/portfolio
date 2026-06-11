window.addEventListener(
    "wheel",
    (event) => {
        event.preventDefault();

        window.scrollBy({
            left: event.deltaY > 0 ? window.innerWidth : -window.innerWidth,
            behavior: "smooth",
        });
    },
    { passive: false }
);