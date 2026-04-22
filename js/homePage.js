function mountLoginPanel() {
  const loginContainer = document.querySelector(".login-form-container.container");
  const componentControl = document.querySelector(
    ".component-control.id-Z7_G11AH2G0LGGR20QCA137AB18H4"
  );
  const banner = document.querySelector(".new_business_landing_banner");
  const bannerControls = banner?.querySelector(".position-relative");

  if (!loginContainer || !componentControl) {
    return;
  }

  loginContainer.classList.add("left-side");

  if (!loginContainer.contains(componentControl)) {
    loginContainer.replaceChildren(componentControl);
  }

  if (bannerControls && bannerControls.nextElementSibling !== loginContainer) {
    bannerControls.insertAdjacentElement("afterend", loginContainer);
  } else if (banner && loginContainer.parentElement !== banner) {
    banner.appendChild(loginContainer);
  }
}

mountLoginPanel();

function normalizeLocalHref(href, options) {
  return typeof window.toStandaloneHref === "function"
    ? window.toStandaloneHref(href, options)
    : href;
}

if (typeof homeDynamicTexts === "object" && homeDynamicTexts) {
  Object.keys(homeDynamicTexts).forEach((key) => {
    try {
      const textTarget = document.querySelector("[data-text='" + key + "']");
      if (!textTarget) {
        return;
      }

      const currentLang = document.documentElement.getAttribute("lang");
      textTarget.innerHTML = textTarget.innerHTML.trim() + homeDynamicTexts[key][currentLang];
    } catch (error) {
      console.warn("Failed to bind dynamic home text:", key, error);
    }
  });
}

if (
  typeof instantServicesCategories === "object" &&
  instantServicesCategories &&
  Array.isArray(instantServices) &&
  document.querySelector("#servicesTab") &&
  document.querySelector("#servicesTabContent")
) {
  Object.keys(instantServicesCategories).forEach((sCategory, tIndex) => {
    let tabCurrent = tIndex === 0 ? " active" : "";
    const tabTemplate = `
	<li class="nav-item" role="presentation">
		<button class="nav-link${tabCurrent}" id="${sCategory}-tab" data-bs-toggle="tab" data-bs-target="#${sCategory}-tab-pane" type="button" role="tab" aria-controls="${sCategory}-tab-pane" aria-selected="true">
		   ${instantServicesCategories[sCategory].svg}
		   ${instantServicesCategories[sCategory].title[document.documentElement.lang]}
		</button>
	</li>
	`;

    document.querySelector("#servicesTab").innerHTML += tabTemplate;

    tabCurrent = tIndex === 0 ? " active show" : "";
    const tabPanelTemplate = `
	 <div class="tab-pane fade${tabCurrent}" id="${sCategory}-tab-pane" role="tabpanel" aria-labelledby="${sCategory}-tab" tabindex="0">
		<div class="d-flex align-items-start gap-4">
		   <div class="nav" id="v-pills-${sCategory}-tab" role="tablist" aria-orientation="vertical">
		   </div>
		   <div class="tab-content" id="v-pills-tabContent-${sCategory}">
		   </div>
		</div>
	 </div>
	`;

    document.querySelector("#servicesTabContent").innerHTML += tabPanelTemplate;

    const servicesList = instantServices.filter((service) => service.categories.includes(instantServicesCategories[sCategory]));

    servicesList.forEach((service, sindex) => {
      let currentState = sindex === 0 ? " active" : "";
      const vPanelTemplate = `
		<button class="nav-link${currentState}" id="v-pills-${sCategory}-${sindex}-tab" data-bs-toggle="pill" data-bs-target="#v-pills-${sCategory}-${sindex}" type="button" role="tab" aria-controls="v-pills-${sCategory}-${sindex}" aria-selected="true">
		  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
			<path d="M10 22C8.64 22 7.34 21.74 6.1 21.22C4.91333 20.7133 3.85667 19.9967 2.93 19.07C2.00333 18.1433 1.28667 17.0867 0.78 15.9C0.26 14.66 0 13.36 0 12C0 10.64 0.26 9.34 0.78 8.1C1.28667 6.91333 2.00333 5.85667 2.93 4.93C3.85667 4.00333 4.91333 3.28667 6.1 2.78C7.34 2.26 8.64 2 10 2C11.36 2 12.66 2.26 13.9 2.78C15.0867 3.28667 16.1433 4.00333 17.07 4.93C17.9967 5.85667 18.7133 6.91333 19.22 8.1C19.74 9.34 20 10.64 20 12C20 13.36 19.74 14.66 19.22 15.9C18.7133 17.0867 17.9967 18.1433 17.07 19.07C16.1433 19.9967 15.0867 20.7133 13.9 21.22C12.66 21.74 11.36 22 10 22ZM10 20C11.4533 20 12.8 19.6333 14.04 18.9C15.24 18.1933 16.1933 17.24 16.9 16.04C17.6333 14.8 18 13.4533 18 12C18 10.5467 17.6333 9.2 16.9 7.96C16.1933 6.76 15.24 5.80667 14.04 5.1C12.8 4.36667 11.4533 4 10 4C8.54667 4 7.2 4.36667 5.96 5.1C4.76 5.80667 3.80667 6.76 3.1 7.96C2.36667 9.2 2 10.5467 2 12C2 13.4533 2.36667 14.8 3.1 16.04C3.80667 17.24 4.76 18.1933 5.96 18.9C7.2 19.6333 8.54667 20 10 20ZM9 15H11V17H9V15ZM11 13.36V14H9V12.5C9 12.22 9.09667 11.9833 9.29 11.79C9.48333 11.5967 9.72 11.5 10 11.5C10.4133 11.5 10.7667 11.3533 11.06 11.06C11.3533 10.7667 11.5 10.4133 11.5 10C11.5 9.58667 11.3533 9.23333 11.06 8.94C10.7667 8.64667 10.4133 8.5 10 8.5C9.64 8.5 9.32333 8.61333 9.05 8.84C8.77667 9.06667 8.6 9.35333 8.52 9.7L6.56 9.32C6.66667 8.78667 6.88667 8.30667 7.22 7.88C7.55333 7.45333 7.96 7.11667 8.44 6.87C8.92 6.62333 9.44 6.5 10 6.5C10.64 6.5 11.2267 6.65667 11.76 6.97C12.2933 7.28333 12.7167 7.70667 13.03 8.24C13.3433 8.77333 13.5 9.36 13.5 10C13.5 10.7867 13.2667 11.4867 12.8 12.1C12.3333 12.7133 11.7333 13.1333 11 13.36Z" fill="#008550"></path>
		  </svg>
		  ${service.title[document.documentElement.lang]}
		</button>
		`;

      const tabTarget = document.querySelector("#v-pills-" + sCategory + "-tab");
      const contentTarget = document.querySelector("#v-pills-tabContent-" + sCategory);

      if (tabTarget) {
        tabTarget.innerHTML += vPanelTemplate;
      }

      currentState = sindex === 0 ? " show active" : "";
      const descriptionTemplate = `
		<div class="tab-pane fade${currentState}" id="v-pills-${sCategory}-${sindex}" role="tabpanel" aria-labelledby="v-pills-${sCategory}-${sindex}-tab" tabindex="0">
		 <div class="service-start px-3 py-1">
			<h3>
			   ${service.title[document.documentElement.lang]}
			</h3>
			<p>
			   ${service.description[document.documentElement.lang]}
			</p>
			<div>
			   <a class="ab-btn ab-btn--solid primary xxl w-50 p-2" href="${normalizeLocalHref(service.link)}">
			   <strong class="d-arabic-only">
			   ط¨ط¯ط، ط§ظ„ط®ط¯ظ…ط©
			   </strong>
			   <strong class="d-english-only">
			   Start Service
			   </strong>
			   </a>
			</div>
		 </div>
		</div>
		`;

      if (contentTarget) {
        contentTarget.innerHTML += descriptionTemplate;
      }
    });
  });
}

if (Array.isArray(mostUsedServicesActions) && document.querySelector("#mostUsedServiceSwipper")) {
  mostUsedServicesActions.forEach((ser) => {
    const tabTemplate = `<div class="swiper-slide">
		<div class="ab-card border">
		  <div class="ab-card_head ">${ser.cssClass}</div>
		  <div class="ab-card_body">
			<div class="ab-card_body--heading">
			 <h3>${ser.title[document.documentElement.lang]}</h3>
			</div>
			<div class="ab-card_body--content">
			  <p>${ser.description[document.documentElement.lang]}</p>
			</div>
		  </div>
		  <div class="ab-card_footer">
			<a href="${normalizeLocalHref(ser.url)}" class="d-flex flex-row color-primary">
			   <strong class="d-arabic-only">
			   ط¨ط¯ط، ط§ظ„ط®ط¯ظ…ط©
				<svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" fill="currentColor"><path fill="none" d="M0 0h24v24H0z"></path><path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"></path></svg>
			   </strong>
			   <strong class="d-english-only">
			   Start Service
				<svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" fill="currentColor"><path fill="none" d="M0 0h24v24H0z"></path><path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"></path></svg>
			   </strong>
			</a>
		  </div>
		</div>
	  </div>
	`;

    document.querySelector("#mostUsedServiceSwipper").innerHTML += tabTemplate;
  });
}

if (Array.isArray(numbersActions) && document.querySelector("#absherHomePageNumbers")) {
  numbersActions.forEach((numbs) => {
    const numbersTemplate = `<div class="new_landing_numbers-body--card col">
	  ${numbs.cssClass}
	  <p class="card-numbers-white">${numbs.text[[document.documentElement.lang]]}</p>
	  <div>
		<h6> +
			<span class="count"> ${numbs.numbers[[document.documentElement.lang]]} </span>
			<span style="font-size: 1rem;" class="">
			<p>${numbs.units[[document.documentElement.lang]]}</p>
			</span>
		</h6>
	  </div>
	  <p class="color-primary">
		<strong></strong>
	  </p>
	</div>
	`;

    document.querySelector("#absherHomePageNumbers").innerHTML += numbersTemplate;
  });
}

if (typeof contactusActions === "object" && contactusActions) {
  const contactTitle = document.querySelector("#absherHomeCoontactUs .new_business_landing_contact-us--start-body>p>b");
  const contactBody = document.querySelector("#absherHomeCoontactUs .new_business_landing_contact-us--center>p");
  const contactAction = document.querySelector("#absherHomeCoontactUs .new_business_landing_contact-us--left >div >a");

  if (contactTitle) {
    contactTitle.innerHTML = contactusActions.headText[document.documentElement.lang];
  }

  if (contactBody) {
    contactBody.innerHTML = contactusActions.bodyText[document.documentElement.lang];
  }

  if (contactAction) {
    contactAction.innerHTML = contactusActions.actionText[document.documentElement.lang];
    contactAction.setAttribute("href", normalizeLocalHref(contactusActions.url));
  }
}

window.refreshStandalonePaths?.();

document.addEventListener("DOMContentLoaded", () => {
  mountLoginPanel();

  const stickyLink = document.querySelector("#login-sticky a");
  const stickyContainer = document.querySelector("div.sticky-show");
  const stickyLogin = document.querySelector("#login-sticky");

  if (stickyLink) {
    stickyLink.addEventListener("click", () => {
      window.scrollTo(0, 0);
    }, false);
  }

  if (stickyContainer && stickyLogin) {
    stickyContainer.appendChild(stickyLogin);
  }

  window.refreshStandalonePaths?.();
}, false);
