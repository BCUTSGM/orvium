import { useEffect } from "react";

export default function BotpressChat() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.botpress.cloud/webchat/v0/inject.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.botpressWebChat.init({
        botId: "tu-bot-id",
        clientId: "tu-client-id",
        hostUrl: "https://cdn.botpress.cloud/webchat/v0",
        messagingUrl: "https://messaging.botpress.cloud",
        botName: "Mi Bot",
        theme: "prism",
        hideWidget: true, // 🔹 Oculta el botón flotante original
      });

      // 🔹 Botón lateral personalizado
      const launcher = document.createElement("div");
      document.body.appendChild(launcher);

      // 🔹 Estilos
      const style = document.createElement("style");
      style.innerHTML = `
        /* Esconde el botón original de Botpress */
        #bp-web-widget {
          display: none !important;
        }

        #custom-launcher {
          position: fixed;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          background: #b73939;
          color: white;
          padding: 12px 6px;
          border-radius: 8px 0 0 8px;
          cursor: pointer;
          font-family: Arial, sans-serif;
          writing-mode: vertical-rl;
          text-align: center;
          z-index: 9999;
        }
        .launcher-text {
          transform: rotate(180deg);
        }
      `;
      document.head.appendChild(style);

      // 🔹 Acción al hacer clic
      document
        .getElementById("custom-launcher")
        .addEventListener("click", () => {
          window.botpressWebChat.sendEvent({ type: "show" });
        });
    };

    return () => {
      const iframe = document.getElementById("bp-widget");
      if (iframe) iframe.remove();

      const launcher = document.getElementById("custom-launcher");
      if (launcher) launcher.remove();
    };
  }, []);

  return null;
}
