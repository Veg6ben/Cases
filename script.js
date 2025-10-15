// Mobile menu logic
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenuButton = document.getElementById('close-menu-button');

mobileMenuButton.addEventListener('click', () => {
  mobileMenu.classList.remove('hidden');
  mobileMenu.querySelector('div').classList.remove('-translate-x-full');
});

closeMenuButton.addEventListener('click', () => {
  mobileMenu.querySelector('div').classList.add('-translate-x-full');
  setTimeout(() => mobileMenu.classList.add('hidden'), 300);
});

    mobileMenu.addEventListener('click', (e) => {
      if (e.target === mobileMenu) {
        closeMenuButton.click();
      }
    });

function closeMobileMenu() {
    closeMenuButton.click();
}

// Image zoom logic
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.imagenesGrid img');
    images.forEach(function(img) {
        img.style.cursor = 'pointer';
        img.title = 'Haz clic para ampliar';
        img.draggable = false;

        const cardDiv = img.parentElement; // El div contenedor de la imagen

        img.addEventListener('click', function() {

            if (cardDiv.classList.contains('zoomed')) {
                cardDiv.classList.remove('zoomed');
                cardDiv.style.transform = 'scale(1)';
                cardDiv.style.zIndex = 'auto';
            } else {
                cardDiv.classList.add('zoomed');
                cardDiv.style.transform = 'scale(1.3)';
                cardDiv.style.zIndex = '10';
            }
            return false
        });

        img.addEventListener('mouseenter', function() {
            if (!cardDiv.classList.contains('zoomed')) {
                cardDiv.style.transform = 'scale(1.1)';
                cardDiv.style.zIndex = '10';
            }
        });

        img.addEventListener('mouseleave', function() {
            cardDiv.classList.remove('zoomed');
            cardDiv.style.transform = 'scale(1)';
            cardDiv.style.zIndex = 'auto';
        });

        // Prevenir arrastre
        img.addEventListener('dragstart', function(e) {
            e.preventDefault();
        });
    });
});

// Carousel logic
function carousel() {
    return {
        currentSlide: 0,
        visibleSlides: 1,
        slidePercentage: 100,
        slides: [
            {
                id: 1,
                image: 'images/case1.jpeg',
                title: 'Estuche Personalizado 1',
                description: 'Diseño único y personalizado para tu dispositivo'
            },
            {
                id: 2,
                image: 'images/case2.jpeg',
                title: 'Estuche Personalizado 2',
                description: 'Protección y estilo en un solo diseño'
            },
            {
                id: 3,
                image: 'images/case4.jpeg',
                title: 'Estuche Personalizado 3',
                description: 'Personaliza tu dispositivo con creatividad'
            },
            {
                id: 4,
                image: 'images/case5.jpeg',
                title: 'Estuche Personalizado 4',
                description: 'Estilo moderno para tu teléfono'
            },
            {
                id: 5,
                image: 'images/case6.jpeg',
                title: 'Estuche Personalizado 5',
                description: 'Diseño exclusivo para ti'
            },
            {
                id: 6,
                image: 'images/case7.jpeg',
                title: 'Estuche Personalizado 6',
                description: 'Protege y personaliza tu gadget'
            },
            {
                id: 7,
                image: 'images/case8.jpeg',
                title: 'Estuche Personalizado 7',
                description: 'Creatividad en cada detalle'
            },
            {
                id: 8,
                image: 'images/case9.jpeg',
                title: 'Estuche Personalizado 8',
                description: 'Estuche único para tu estilo'
            },
            {
                id: 9,
                image: 'images/case10.jpeg',
                title: 'Estuche Personalizado 9',
                description: 'Diseño personalizado de alta calidad'
            },
            {
                id: 10,
                image: 'images/case11.jpeg',
                title: 'Estuche Personalizado 10',
                description: 'Protección con personalidad'
            },
            {
                id: 11,
                image: 'images/case12.jpeg',
                title: 'Estuche Personalizado 11',
                description: 'Tu dispositivo, tu estilo'
            },
            {
                id: 12,
                image: 'images/case13.jpeg',
                title: 'Estuche Personalizado 12',
                description: 'Innovación en diseño de estuches'
            },
            {
                id: 13,
                image: 'images/case14.jpeg',
                title: 'Estuche Personalizado 13',
                description: 'Estilo y funcionalidad juntos'
            },
            {
                id: 14,
                image: 'images/case15.jpeg',
                title: 'Estuche Personalizado 14',
                description: 'Personaliza tu mundo digital'
            },
            {
                id: 15,
                image: 'images/case16.jpeg',
                title: 'Estuche Personalizado 15',
                description: 'Diseños únicos para cada uno'
            },
            {
                id: 16,
                image: 'images/case17.jpeg',
                title: 'Estuche Personalizado 16',
                description: 'Protege con estilo'
            },
            {
                id: 17,
                image: 'images/case18.jpeg',
                title: 'Estuche Personalizado 17',
                description: 'Creatividad sin límites'
            },
            {
                id: 18,
                image: 'images/case19.jpeg',
                title: 'Estuche Personalizado 18',
                description: 'Estuche hecho a tu medida'
            },
            {
                id: 19,
                image: 'images/case20.jpeg',
                title: 'Estuche Personalizado 19',
                description: 'Diseño personalizado premium'
            },
            {
                id: 20,
                image: 'images/case21.jpeg',
                title: 'Estuche Personalizado 20',
                description: 'Tu personalidad en un estuche'
            },
            {
                id: 21,
                image: 'images/case22.jpeg',
                title: 'Estuche Personalizado 21',
                description: 'Innovación y estilo'
            },
            {
                id: 22,
                image: 'images/case23.jpeg',
                title: 'Estuche Personalizado 22',
                description: 'Protección personalizada'
            },
            {
                id: 23,
                image: 'images/case24.jpeg',
                title: 'Estuche Personalizado 23',
                description: 'Estilo único para ti'
            },
            {
                id: 24,
                image: 'images/case25.jpeg',
                title: 'Estuche Personalizado 24',
                description: 'Diseño creativo y funcional'
            }
        ],
        updateVisibleSlides() {
            if (window.innerWidth < 768) {
                this.visibleSlides = 1;
                this.slidePercentage = 100;
            } else {
                this.visibleSlides = 3;
                this.slidePercentage = 100 / 3;
            }
        },
        next() {
            if (this.currentSlide >= this.slides.length - this.visibleSlides) {
                this.currentSlide = 0;
            } else {
                this.currentSlide += 1;
            }
        },
        prev() {
            if (this.currentSlide <= 0) {
                this.currentSlide = this.slides.length - this.visibleSlides;
            } else {
                this.currentSlide -= 1;
            }
        },
        goTo(index) {
            if (index <= this.slides.length - this.visibleSlides) {
                this.currentSlide = index;
            } else {
                this.currentSlide = this.slides.length - this.visibleSlides;
            }
        },
        handleImageError(slide) {
            // Fallback obrázok ak sa pôvodný nepodarí načítať
            slide.image = 'https://picsum.photos/id/20/800/600';
        },
        init() {
            this.updateVisibleSlides();
            window.addEventListener('resize', () => {
                this.updateVisibleSlides();
            });
            this.startAutoSlide();
        },
        startAutoSlide() {
            setInterval(() => {
                this.next();
            }, 4000);
        }
    }
}

// Slider logic (seems unused, but included)
document.addEventListener('DOMContentLoaded', function() {
    const slider = document.getElementById('slider');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');
    const dots = document.querySelectorAll('.dot');
    let currentIndex = 0;
    const totalSlides = 5;
    let autoSlideInterval;

    function updateSlider() {
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlider();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateSlider();
    }

    function goToSlide(index) {
        currentIndex = index;
        updateSlider();
    }

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => goToSlide(index));
    });

    // Auto slide
    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 4000);
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    // Pause on hover
    const sliderContainer = document.querySelector('.relative.overflow-hidden');
    sliderContainer.addEventListener('mouseenter', stopAutoSlide);
    sliderContainer.addEventListener('mouseleave', startAutoSlide);

    startAutoSlide();
    updateSlider();
});
