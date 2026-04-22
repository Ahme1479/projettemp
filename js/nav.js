(function () {
  if (window.__absherNavScrollBound) {
    return;
  }

  window.__absherNavScrollBound = true;

  const sticky = 100;
  let isHandlingScroll = false;

  const handleScroll = () => {
    if (isHandlingScroll) {
      return;
    }

    isHandlingScroll = true;

    window.requestAnimationFrame(() => {
      const navigation = document.getElementById("mainNav");

      if (!navigation) {
        isHandlingScroll = false;
        return;
      }

      if (window.scrollY > sticky && !navigation.classList.contains("fixed")) {
        navigation.classList.add("fixed");
      } else if (window.scrollY < 90 && navigation.classList.contains("fixed")) {
        navigation.classList.remove("fixed");
      }

      isHandlingScroll = false;
    });
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
})();
