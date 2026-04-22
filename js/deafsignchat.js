const localChatMarkup = `
  <div class="card deafSignChatcard" id="localDeafChatCard">
    <div id="header">
      <div id="logo">
        <div class="deafchatIcn"></div>
      </div>
      <div id="title">
        <div>
          <span style="width: 100%; color: rgb(106, 106, 106); padding-left: 20px; font-size: 15px;">
            Absher Local Assistant
          </span>
        </div>
      </div>
      <div id="close-button">
        <div id="hide-chatbot" class="closedeafchatbtn"></div>
      </div>
    </div>
    <div id="message-section" dir="ltr">
      <div id="intro-bot">
        <img src="images/signDeaf.png" alt="Sign language support">
        <p>
          This local copy includes a lightweight assistant for navigation only.
          Server-driven chat flows are disabled in standalone mode.
        </p>
      </div>
      <div id="bot-timestamp" class="message">
        <div class="deafchatIcn"></div> Absher Local Assistant
      </div>
      <div id="main-chat">
        <div class="chatgrid">
          <button type="button" class="message" id="bot" data-action="contact">
            <img src="images/customer-support.svg" alt="Contact">
            <p>Contact Us Section</p>
          </button>
          <button type="button" class="message" id="bot" data-action="guide">
            <img src="images/sign-language.svg" alt="Guide">
            <p>Service Guide</p>
          </button>
        </div>
      </div>
    </div>
  </div>
`;

function setupLocalChatCard() {
  const showButton = document.getElementById("show-chatbot");
  if (!showButton) {
    return;
  }

  showButton.addEventListener("click", (event) => {
    event.preventDefault();

    let chatCard = document.getElementById("localDeafChatCard");
    if (!chatCard) {
      document.body.insertAdjacentHTML("beforeend", localChatMarkup);
      chatCard = document.getElementById("localDeafChatCard");

      chatCard
        ?.querySelector("#hide-chatbot")
        ?.addEventListener("click", () => chatCard.style.setProperty("display", "none"));

      chatCard?.querySelectorAll("[data-action]").forEach((actionButton) => {
        actionButton.addEventListener("click", () => {
          const action = actionButton.getAttribute("data-action");

          if (action === "contact") {
            document
              .getElementById("absherHomeCoontactUs")
              ?.scrollIntoView({ behavior: "smooth", block: "start" });
          } else if (action === "guide" && typeof window.showStandaloneNotice === "function") {
            window.showStandaloneNotice(
              "Service guide links are disabled in the local standalone copy."
            );
          }
        });
      });
    }

    chatCard.style.display = "block";
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", setupLocalChatCard);
} else {
  setupLocalChatCard();
}
