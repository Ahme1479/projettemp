/**
 * Global helpers for the standalone local copy.
 * The original page expected server-side modules and assets, so we guard
 * interactive features and keep only the behaviors that work locally.
 */

const ABSHER_STANDALONE_MODE =
  window.location.protocol === "file:" ||
  !/(\.|^)absher\.sa$/i.test(window.location.hostname || "");

window.ABSHER_STANDALONE_MODE = ABSHER_STANDALONE_MODE;

const LOCAL_HOME_PATH = "./index.html";
const LOCAL_DISABLED_PATH = "#";
const LOCAL_BADGE_LIGHT_PATH = "images/absher_dga_ar.png";
const LOCAL_BADGE_DARK_PATH = "images/abhser_dga_ar_mobil.png";
const LOCAL_FALLBACK_IMAGE_PATH = "images/absher_logo.svg";

const elements = {
  megaMenu: document.querySelector(".mega-menu"),
  searchMenu: document.querySelector(".ab-search"),
  searchResults: document.querySelector(".ab-search .results"),
  subMenu: document.querySelector(".mega-menu .sub-menu"),
};

let standaloneToastTimeout = null;
let counterObserverAttached = false;
let standaloneObserverAttached = false;
let standaloneObserverFrame = 0;

function ensureStandaloneToast() {
  let toast = document.getElementById("standalone-toast");

  if (!toast) {
    toast = document.createElement("div");
    toast.id = "standalone-toast";
    toast.setAttribute("aria-live", "polite");
    document.body.appendChild(toast);
  }

  return toast;
}

function showStandaloneNotice(message) {
  const toast = ensureStandaloneToast();

  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(standaloneToastTimeout);
  standaloneToastTimeout = window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 2600);
}

window.showStandaloneNotice = showStandaloneNotice;

function bindStandaloneLinkNotice(link, message) {
  if (!link || link.dataset.standaloneBound === "true") {
    return;
  }

  if (link.getAttribute("target") === "") {
    link.removeAttribute("target");
  }

  link.dataset.standaloneBound = "true";
  link.classList.add("standalone-disabled-link");
  link.setAttribute("title", "Disabled in local standalone mode");
  link.addEventListener("click", (event) => {
    event.preventDefault();
    showStandaloneNotice(message);
  });
}

function hasStandaloneDisabledFlag(link) {
  return link?.dataset?.standaloneDisabled === "true";
}

function isStandaloneManagedPath(value) {
  const path = (value || "").trim();

  if (
    !path ||
    path.startsWith("#") ||
    path.startsWith("javascript:") ||
    path.startsWith("mailto:") ||
    path.startsWith("tel:") ||
    path.startsWith("data:")
  ) {
    return false;
  }

  if (
    path.startsWith("/wps/") ||
    path.startsWith("/portal/") ||
    path.startsWith("?uri=") ||
    path.startsWith("?1dmy") ||
    path.startsWith("//")
  ) {
    return true;
  }

  if (!/^https?:\/\//i.test(path)) {
    return false;
  }

  try {
    return new URL(path, window.location.href).origin !== window.location.origin;
  } catch (error) {
    return true;
  }
}

function shouldUseLocalHome(link, path) {
  return (
    link?.classList?.contains("ab-lang") ||
    link?.id === "cancelURL" ||
    link?.id === "wps_link_cancel" ||
    /homepublic|resetpasswordindividuals|registerindividuals/i.test(path || "")
  );
}

function toStandaloneHref(value, options = {}) {
  if (!ABSHER_STANDALONE_MODE || !isStandaloneManagedPath(value)) {
    return value;
  }

  return options.home ? LOCAL_HOME_PATH : LOCAL_DISABLED_PATH;
}

function getStandaloneImageFallback(image) {
  if (image?.alt?.toLowerCase() === "raqmi") {
    return image.closest('[data-theme="dark"]')
      ? LOCAL_BADGE_DARK_PATH
      : LOCAL_BADGE_LIGHT_PATH;
  }

  return LOCAL_FALLBACK_IMAGE_PATH;
}

window.toStandaloneHref = toStandaloneHref;

function normalizeStandaloneButtons() {
  if (!ABSHER_STANDALONE_MODE) {
    return;
  }

  document
    .querySelectorAll('.accordion-button[disabled][data-bs-toggle="collapse"]')
    .forEach((button) => {
      button.disabled = false;
      button.removeAttribute("disabled");
    });
}

function normalizeStandaloneAnchors(root = document) {
  if (!ABSHER_STANDALONE_MODE) {
    return;
  }

  root.querySelectorAll('a[target=""]').forEach((link) => {
    link.removeAttribute("target");
  });

  root.querySelectorAll("a[href]").forEach((link) => {
    const href = (link.getAttribute("href") || "").trim();

    if (href === "") {
      bindStandaloneLinkNotice(
        link,
        "This action is not available in the local standalone preview."
      );
      return;
    }

    if (hasStandaloneDisabledFlag(link)) {
      link.setAttribute("href", LOCAL_DISABLED_PATH);
      link.removeAttribute("target");
      bindStandaloneLinkNotice(
        link,
        "This local copy keeps the layout only. External and server-side links are disabled."
      );
      return;
    }

    if (!isStandaloneManagedPath(href)) {
      return;
    }

    const nextHref = toStandaloneHref(href, {
      home: shouldUseLocalHome(link, href),
    });

    if (href !== nextHref) {
      link.dataset.originalHref = href;
      link.setAttribute("href", nextHref);
    }

    link.removeAttribute("target");

    if (nextHref === LOCAL_DISABLED_PATH) {
      link.dataset.standaloneDisabled = "true";
      bindStandaloneLinkNotice(
        link,
        "This local copy keeps the layout only. External and server-side links are disabled."
      );
    }
  });
}

function normalizeStandaloneForms(root = document) {
  if (!ABSHER_STANDALONE_MODE) {
    return;
  }

  root.querySelectorAll("form[action]").forEach((form) => {
    const action = (form.getAttribute("action") || "").trim();

    if (!isStandaloneManagedPath(action)) {
      return;
    }

    form.dataset.originalAction = action;
    form.setAttribute("action", LOCAL_HOME_PATH);

    if (form.dataset.standaloneBound === "true") {
      return;
    }

    form.dataset.standaloneBound = "true";
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      showStandaloneNotice(
        "Login and server-side forms are disabled in this local preview."
      );
    });
  });
}

function normalizeStandaloneImages(root = document) {
  if (!ABSHER_STANDALONE_MODE) {
    return;
  }

  root.querySelectorAll("img[src]").forEach((image) => {
    const src = (image.getAttribute("src") || "").trim();

    if (!isStandaloneManagedPath(src)) {
      return;
    }

    image.dataset.originalSrc = src;
    image.setAttribute("src", getStandaloneImageFallback(image));
    image.removeAttribute("srcset");
  });
}

function markStandaloneLinks(root = document) {
  if (!ABSHER_STANDALONE_MODE) {
    return;
  }

  document.documentElement.classList.add("standalone-mode");
  normalizeStandaloneAnchors(root);
  normalizeStandaloneForms(root);
  normalizeStandaloneImages(root);
}

function refreshStandalonePaths(root = document) {
  if (!ABSHER_STANDALONE_MODE) {
    return;
  }

  normalizeStandaloneButtons();
  markStandaloneLinks(root);
}

window.refreshStandalonePaths = refreshStandalonePaths;

function attachStandaloneObserver() {
  if (
    !ABSHER_STANDALONE_MODE ||
    standaloneObserverAttached ||
    !document.body ||
    typeof MutationObserver === "undefined"
  ) {
    return;
  }

  standaloneObserverAttached = true;

  const observer = new MutationObserver((mutations) => {
    if (standaloneObserverFrame) {
      cancelAnimationFrame(standaloneObserverFrame);
    }

    standaloneObserverFrame = requestAnimationFrame(() => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            refreshStandalonePaths(node);
          }
        });
      });
    });
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
}

function initAccessibilityFallbacks() {
  if (document.documentElement.dir === "rtl") {
    document.querySelector(".offcanvas")?.classList.remove("offcanvas-start");
    document.querySelector(".offcanvas")?.classList.add("offcanvas-end");
  } else {
    document.querySelector(".offcanvas")?.classList.remove("offcanvas-end");
    document.querySelector(".offcanvas")?.classList.add("offcanvas-start");
  }
}

function initCustomBannerPagination() {
  const sliderImagesBox = document.querySelectorAll(".cards-box");
  if (!sliderImagesBox.length) {
    return;
  }

  sliderImagesBox.forEach((box) => {
    const imageNodes = box.querySelectorAll(".card:not(.hide)");
    const paginationContainer = document.querySelector(".banner_pagination");

    if (!imageNodes.length || !paginationContainer) {
      return;
    }

    paginationContainer.innerHTML = "";
    const state = [];
    const indexes = [];

    imageNodes.forEach((_, index) => {
      const bullet = document.createElement("span");
      bullet.classList.add("pagination-bullet");

      if (index === 0) {
        bullet.classList.add("pagination-bullet-active");
        bullet.setAttribute("aria-current", "true");
      }

      paginationContainer.appendChild(bullet);
      indexes.push(index);
      state.push(index === 0);
    });

    const setIndex = (arr) => {
      imageNodes.forEach((node, index) => {
        node.dataset.slide = arr[index];
      });
    };

    box.addEventListener("click", () => {
      indexes.unshift(indexes.pop());
      state.unshift(state.pop());

      paginationContainer.querySelectorAll("span").forEach((bullet, index) => {
        bullet.classList.toggle("pagination-bullet-active", state[index]);
      });

      setIndex(indexes);
    });

    paginationContainer.querySelectorAll("span").forEach((bullet, targetIndex) => {
      bullet.addEventListener("click", () => {
        const rotated = [...indexes];

        for (let index = 0; index < targetIndex; index += 1) {
          rotated.unshift(rotated.pop());
        }

        paginationContainer.querySelectorAll("span").forEach((current, index) => {
          current.classList.toggle(
            "pagination-bullet-active",
            index === targetIndex
          );
        });

        setIndex(rotated);
      });
    });

    setIndex(indexes);
  });
}

function initSwiper(selector, options, skeletonSelector) {
  if (typeof window.Swiper === "undefined" || !document.querySelector(selector)) {
    return null;
  }

  const instance = new window.Swiper(selector, options);

  if (instance?.initialized && skeletonSelector) {
    document.querySelectorAll(skeletonSelector).forEach((item) => item.remove());
  }

  return instance;
}

function initSwipers() {
  initSwiper(
    ".new_business_landing_banner",
    {
      direction: "horizontal",
      enabled: true,
      loop: true,
      autoplay: false,
      lazy: true,
      slidesPerView: 1,
      pagination: {
        el: ".swiper-pagination",
      },
      navigation: {
        nextEl: ".banner-swiper-button-next",
        prevEl: ".banner-swiper-button-prev",
      },
    },
    ".skeleton-loader"
  );

  initSwiper(
    ".swiper_cards_new_services",
    {
      direction: "horizontal",
      lazy: true,
      breakpoints: {
        320: { slidesPerView: 1.2, spaceBetween: 10 },
        480: { slidesPerView: 1.2, spaceBetween: 10 },
        640: { slidesPerView: 2, spaceBetween: 20 },
        964: { slidesPerView: 3, spaceBetween: 20 },
        1200: { slidesPerView: 3, spaceBetween: 20 },
      },
      autoplay: false,
      loop: false,
      stopOnLastSlide: true,
      navigation: {
        nextEl: ".swiper-button-prev",
        prevEl: ".swiper-button-next",
      },
    },
    ".skeleton-loader-cards"
  );

  initSwiper(
    ".swiper_cards_latest_news",
    {
      direction: "horizontal",
      lazy: true,
      breakpoints: {
        320: { slidesPerView: 1.2, spaceBetween: 10 },
        480: { slidesPerView: 1.2, spaceBetween: 10 },
        640: { slidesPerView: 2, spaceBetween: 20 },
        964: { slidesPerView: 4, spaceBetween: 20 },
        1200: { slidesPerView: 4, spaceBetween: 20 },
      },
      autoplay: false,
      loop: false,
      stopOnLastSlide: true,
      navigation: {
        nextEl: ".swiper-button-news-prev",
        prevEl: ".swiper-button-news-next",
      },
    },
    ".skeleton-loader-cards-long"
  );
}

function animateCounts() {
  const countElements = document.querySelectorAll(".count");
  if (!countElements.length || counterObserverAttached) {
    return;
  }

  counterObserverAttached = true;

  const animateElement = (element) => {
    const targetValue = parseFloat(element.textContent.replace(/,/g, "")) || 0;
    const duration = 900;
    const startTime = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const value = Math.round(progress * targetValue);
      element.textContent = value.toLocaleString();

      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        element.textContent = targetValue.toLocaleString();
      }
    };

    requestAnimationFrame(tick);
  };

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        countElements.forEach(animateElement);
        currentObserver.disconnect();
      });
    }, { threshold: 0.2 });

    observer.observe(countElements[0]);
    return;
  }

  countElements.forEach(animateElement);
}

function initSelectInputs() {
  document.querySelectorAll(".ab-select_menu label[slot='item']").forEach((item) => {
    if (item.querySelector("input[type='radio']")) {
      return;
    }

    const input = document.createElement("input");
    const labelName = item.getAttribute("for") || item.textContent.trim();
    input.type = "radio";
    input.id = labelName;
    input.value = item.textContent.trim();
    item.appendChild(input);
  });

  document.querySelectorAll("ab-select").forEach((select) => {
    const label = select.querySelector("label");
    if (!label) {
      return;
    }

    select.querySelectorAll("input").forEach((input) => {
      input.name = label.textContent.trim();
    });
  });
}

function toggleMegaMenu() {
  if (!elements.megaMenu || !elements.subMenu) {
    return;
  }

  elements.megaMenu.classList.toggle("open");
  elements.subMenu.classList.remove("open");
}

function toggleSubMenu() {
  elements.subMenu?.classList.toggle("open");
}

function toggleSearch() {
  const input = document.querySelector(".ab-search input");

  if (!elements.searchMenu) {
    return;
  }

  elements.searchMenu.classList.toggle("open");
  elements.searchResults?.setAttribute("hidden", true);

  if (input) {
    input.value = "";
  }
}

function showSearchResults(event) {
  event?.preventDefault();
  elements.searchResults?.removeAttribute("hidden");
}

function changeDisplay() {
  document.querySelector(".d-grid")?.classList.toggle("d-row");
  document.querySelector(".grid")?.classList.toggle("list");

  document.querySelectorAll(".results_body ab-card").forEach((card) => {
    if (card.hasAttribute("flex")) {
      card.removeAttribute("flex");
    } else {
      card.setAttribute("flex", "row");
    }
  });
}

function getSelect() {}

function showSurveyReasons() {
  const reasonSection = document.querySelector(".ab-survey--form_reason");
  if (reasonSection) {
    reasonSection.hidden = false;
  }
}

function showSurveyMsg(event) {
  event?.preventDefault();
  document.querySelector(".ab-survey--form")?.setAttribute("hidden", true);
  document.querySelector(".ab-survey--form_msg")?.removeAttribute("hidden");
}

function showhidePassword() {
  const passwordInput = document.getElementById("LoginPortletSecretField1");
  const hideIcon = document.getElementById("hidePassword");
  const showIcon = document.getElementById("showPassword");

  if (!passwordInput || !hideIcon || !showIcon) {
    return;
  }

  if (passwordInput.type === "text") {
    passwordInput.type = "password";
    hideIcon.style.display = "block";
    showIcon.style.display = "none";
  } else {
    passwordInput.type = "text";
    hideIcon.style.display = "none";
    showIcon.style.display = "block";
  }
}

window.toggleMegaMenu = toggleMegaMenu;
window.toggleSubMenu = toggleSubMenu;
window.toggleSearch = toggleSearch;
window.showSearchResults = showSearchResults;
window.changeDisplay = changeDisplay;
window.getSelect = getSelect;
window.showSurveyReasons = showSurveyReasons;
window.showSurveyMsg = showSurveyMsg;
window.showhidePassword = showhidePassword;

document.addEventListener("DOMContentLoaded", () => {
  refreshStandalonePaths();
  attachStandaloneObserver();
  initSelectInputs();
  animateCounts();
});

window.addEventListener("load", () => {
  refreshStandalonePaths();
  attachStandaloneObserver();
  initAccessibilityFallbacks();
  initCustomBannerPagination();
  initSwipers();
  animateCounts();
});
