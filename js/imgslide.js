window.onload = function () {
    const imgslide = document.querySelector('.imgslide');
    const slider = imgslide.querySelector('.slider');
    const slideli = slider.querySelectorAll('li');
    const controller = imgslide.querySelector('.controller');

    const copy1 = slideli[0].cloneNode(true);
    const copylast = slideli[slideli.length - 1].cloneNode(true);
    slider.insertBefore(copylast, slideli[0]);
    slider.appendChild(copy1);

    let currentIdx = 0;
    let translate = 0;
    const speedTime = 500;

    const slidercopyli = slider.querySelectorAll('li');
    const liWidth = slideli[0].clientWidth;
    const sliderwidth = liWidth * slidercopyli.length;
    slider.style.width = `${sliderwidth}px`;
    currentIdx = 1;
    translate = -liWidth;
    slider.style.transform = `translateX(${translate}px)`;

    controller.addEventListener('click', moveSlide);

    function move(D) {
        currentIdx += (-1 * D);
        translate += liWidth * D;
        slider.style.transform = `translateX(${translate}px)`;
        slider.style.transition = `all ${speedTime}ms ease`
      }
  
      function moveSlide(event) {
        event.preventDefault();
        if (event.target.className === 'next') {
          move(-1);
          if (currentIdx === slidercopyli.length -1)
            setTimeout(() => {
              slider.style.transition = 'none';
              currentIdx = 1;
              translate = -liWidth;
              slider.style.transform = `translateX(${translate}px)`;
            }, speedTime);
        } else {
            move(1);
            if (currentIdx === 0) {
              setTimeout(() => {
                slider.style.transition = 'none';
                currentIdx = slidercopyli.length -2;
                translate = -(liWidth * currentIdx);
                slider.style.transform = `translateX(${translate}px)`;
              }, speedTime);
            }
          }
      }

      function autoslide() {
        move(-1);
        if (currentIdx === slidercopyli.length -1)
          setTimeout(() => {
            slider.style.transition = 'none';
            currentIdx = 1;
            translate = -liWidth;
            slider.style.transform = `translateX(${translate}px)`;
          }, speedTime);
      }

      function sliding() {
        setInterval(autoslide, 2000);
      }

      sliding();
};
