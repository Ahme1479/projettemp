function renderLocalMapFallback() {
  const svgContainer = document.getElementById("saudi-arabia-map-svg");
  if (!svgContainer) {
    return;
  }

  svgContainer.innerHTML = `
    <div class="local-map-fallback">
      <h4>Self-Service Kiosks</h4>
      <p>
        This standalone version uses a local visual placeholder instead of the
        original server-driven interactive map.
      </p>
      <div class="local-map-fallback__chips">
        <span>Riyadh</span>
        <span>Jeddah</span>
        <span>Dammam</span>
        <span>Makkah</span>
      </div>
    </div>
  `;
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", renderLocalMapFallback);
} else {
  renderLocalMapFallback();
}
