const imgs = document.querySelectorAll('img');
const options = {
    rootMargin: '0px',
    threshold: 1.0
}

images.forEach(img => {
    observer.observe(img);
});

const handleIntersection = (entries, observer) => {
    entries.forEach(entry => {
        if(entry.intersectionRatio > 0) {
            loadImage(entry.target)
        }
    });
}

const loadImage = (image) => {
    const src = image.dataset.src;
    fetchImage(src).then(() => {
    image.src = src;
    });
}

const fetchImage = (url) => {
    return new Promise((resolve, reject) => {
        const image = new Image();
        image.src = url;
        image.onload = resolve;
        image.onerror = reject;
    });
}

const observer = new IntersectionObserver(handleIntersection, options);   