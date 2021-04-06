export const InitRotator = () => {
  return {
    lazy: true,
    speed: 1000,
    autoplay: { delay: 5000 },
    centeredSlides: true,
    loop: true,
    grabCursor: true,
    longSwipesRatio: 0.25,
    navigation: true,
    pagination: true,
    watchSlidesVisibility: true,
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 0,
    breakpoints: {}
  };
};
