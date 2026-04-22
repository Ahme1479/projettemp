const localKioskData = [
  {
    province: "Riyadh",
    city: "Riyadh",
    location: "Absher Self-Service Kiosk",
    details: "Digital Government Center, Riyadh",
  },
  {
    province: "Makkah",
    city: "Jeddah",
    location: "Absher Self-Service Kiosk",
    details: "King Abdulaziz Road, Jeddah",
  },
  {
    province: "Eastern Province",
    city: "Dammam",
    location: "Absher Self-Service Kiosk",
    details: "Corniche District, Dammam",
  },
  {
    province: "Makkah",
    city: "Makkah",
    location: "Absher Self-Service Kiosk",
    details: "Ibrahim Al Khalil Road, Makkah",
  },
];

function buildDropdownOptions(menu, values, onSelect) {
  if (!menu) {
    return;
  }

  menu.querySelectorAll("li").forEach((item) => item.remove());

  values.forEach((value) => {
    const li = document.createElement("li");
    const button = document.createElement("button");

    button.type = "button";
    button.className = "dropdown-item";
    button.textContent = value;
    button.addEventListener("click", () => onSelect(value, menu));
    li.appendChild(button);

    menu.appendChild(li);
  });
}

function hideBootstrapDropdown(menu) {
  const toggleButton = menu?.previousElementSibling;
  if (!toggleButton || !window.bootstrap?.Dropdown) {
    return;
  }

  window.bootstrap.Dropdown.getOrCreateInstance(toggleButton).hide();
}

function renderKioskList(items) {
  const kioskList = document.getElementById("kiosks-list");
  if (!kioskList) {
    return;
  }

  kioskList.classList.add("local-kiosk-list");
  kioskList.innerHTML = "";

  if (!items.length) {
    kioskList.innerHTML =
      '<li class="local-kiosk-empty">No local kiosk records match this selection.</li>';
    return;
  }

  items.forEach((item) => {
    const li = document.createElement("li");
    li.className = "ab-kiosk-item";
    li.innerHTML = `
      <strong>${item.location}</strong>
      <small>${item.city}, ${item.province}</small>
      <small>${item.details}</small>
    `;
    kioskList.appendChild(li);
  });
}

function initLocalKioskSection() {
  const provinceMenu = document.getElementById("provinces");
  const cityMenu = document.getElementById("cities");
  const provinceTitle = document.getElementById("provinceTitle");
  const cityTitle = document.getElementById("cityTitle");

  if (!provinceMenu || !cityMenu || !provinceTitle || !cityTitle) {
    return;
  }

  let selectedProvince = "";
  const initialCityTitle = cityTitle.textContent.trim();

  const provinces = [...new Set(localKioskData.map((item) => item.province))];

  const updateCities = (province) => {
    const cities = [
      ...new Set(
        localKioskData
          .filter((item) => !province || item.province === province)
          .map((item) => item.city)
      ),
    ];

    buildDropdownOptions(cityMenu, cities, (city, menu) => {
      cityTitle.textContent = city;
      renderKioskList(
        localKioskData.filter(
          (item) =>
            (!selectedProvince || item.province === selectedProvince) &&
            item.city === city
        )
      );
      hideBootstrapDropdown(menu);
    });
  };

  buildDropdownOptions(provinceMenu, provinces, (province, menu) => {
    selectedProvince = province;
    provinceTitle.textContent = province;
    cityTitle.textContent = initialCityTitle;
    renderKioskList(
      localKioskData.filter((item) => item.province === selectedProvince)
    );
    updateCities(selectedProvince);
    hideBootstrapDropdown(menu);
  });

  updateCities("");
  renderKioskList(localKioskData);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initLocalKioskSection);
} else {
  initLocalKioskSection();
}
