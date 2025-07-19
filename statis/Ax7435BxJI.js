
    window.addEventListener("load", function () {
      const preloader = document.getElementById("preloader");
      preloader.style.display = "none";
    });
  </script>
  <script>
    const qrContainer = document.getElementById("qrCanvas");
    const showQRBtn = document.getElementById("showQRBtn");
    const downloadBtn = document.getElementById("downloadBtn");
    const qrCanvasContainer = document.getElementById("qrCanvasContainer");
    const closeBtn = document.getElementById("closeBtn");

    let canvas;

    showQRBtn.addEventListener("click", () => {
      qrCanvasContainer.style.display = "block";
      qrContainer.innerHTML = "";

      const url = window.location.href;

      QRCode.toCanvas(url, { 
        width: 300, 
        margin: 2,
        errorCorrectionLevel: 'H'
      }, (err, c) => {
        if (err) {
          console.error("Error generating QR:", err);
          qrContainer.innerHTML = "<p style='color: red;'>Failed to generate QR code.</p>";
          return;
        }
        canvas = c;
        qrContainer.appendChild(canvas);

        const logo = document.createElement("img");
        logo.src = "img/logo.svg";
        logo.className = "logos";
        logo.crossOrigin = "anonymous";
        logo.onerror = () => {
          console.error("Failed to load logo");
        };
        qrContainer.appendChild(logo);

        showQRBtn.style.display = "none";
        downloadBtn.style.display = "inline-block";
      });
    });

    qrContainer.addEventListener("click", () => {
      qrCanvasContainer.classList.add("active");
      setTimeout(() => {
        qrCanvasContainer.classList.remove("active");
      }, 300);
    });

    closeBtn.addEventListener("click", () => {
      qrCanvasContainer.style.display = "none";
      showQRBtn.style.display = "inline-block";
      downloadBtn.style.display = "none";
      qrContainer.innerHTML = "";
      canvas = null;
    });

    downloadBtn.addEventListener("click", () => {
      if (!canvas) {
        alert("QR code has not been created. Click 'Show QR Link' first.");
        return;
      }

      const url = window.location.href;
      QRCode.toCanvas(url, { 
        width: 4000,
        margin: 8,
        errorCorrectionLevel: 'H'
      }, (err, highResCanvas) => {
        if (err) {
          console.error("Error generating high-res QR:", err);
          alert("Failed to generate QR code for download.");
          return;
        }

        const combinedCanvas = document.createElement("canvas");
        combinedCanvas.width = 4400;
        combinedCanvas.height = 4400;
        const ctx = combinedCanvas.getContext("2d");

        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, 4400, 4400);

        ctx.drawImage(highResCanvas, 200, 200, 4000, 4000);

        const logoImage = new Image();
        logoImage.crossOrigin = "anonymous";
        logoImage.src = "img/logo.svg";

        logoImage.onload = () => {
          const logoSize = 400;
          const logoX = (4400 - logoSize) / 2;
          const logoY = (4400 - logoSize) / 2;
          ctx.drawImage(logoImage, logoX, logoY, logoSize, logoSize);

          ctx.font = "bold 120px 'Ubuntu', sans-serif";
          const gradient = ctx.createLinearGradient(900, 0, 3500, 0);
          gradient.addColorStop(0, "#03a9f4");
          gradient.addColorStop(1, "#f441a5");
          ctx.fillStyle = gradient;
          ctx.shadowColor = "rgba(0, 0, 0, 0.3)";
          ctx.shadowBlur = 10;
          ctx.shadowOffsetX = 2;
          ctx.shadowOffsetY = 2;
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          const watermarkText = "Faylotto Decentralized Betting Web3 Social";
          const textX = 4400 / 2;
          const textY = 4000;
          ctx.fillText(watermarkText, textX, textY);

          ctx.shadowColor = "transparent";
          ctx.shadowBlur = 0;

          const generateUniqueId = () => {
            const timestamp = Date.now();
            const randomStr = Math.random().toString(36).substring(2, 8);
            return `${timestamp}${randomStr}`;
          };

          const link = document.createElement("a");
          link.download = `Faylotto${generateUniqueId()}.png`;
          link.href = combinedCanvas.toDataURL("image/png");
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        };

        logoImage.onerror = () => {
          console.error("Failed to load logo for download, please try again.");

          ctx.font = "bold 120px 'Ubuntu', sans-serif";
          const gradient = ctx.createLinearGradient(900, 0, 3500, 0);
          gradient.addColorStop(0, "#03a9f4");
          gradient.addColorStop(1, "#f441a5");
          ctx.fillStyle = gradient;
          ctx.shadowColor = "rgba(0, 0, 0, 0.3)";
          ctx.shadowBlur = 10;
          ctx.shadowOffsetX = 2;
          ctx.shadowOffsetY = 2;
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          const watermarkText = "Faylotto Decentralized Betting Web3 Social";
          const textX = 4400 / 2;
          const textY = 4000;
          ctx.fillText(watermarkText, textX, textY);

          ctx.shadowColor = "transparent";
          ctx.shadowBlur = 0;

          const generateUniqueId = () => {
            const timestamp = Date.now();
            const randomStr = Math.random().toString(36).substring(2, 8);
            return `${timestamp}${randomStr}`;
          };

          const link = document.createElement("a");
          link.download = `Faylotto${generateUniqueId()}.png`;
          link.href = combinedCanvas.toDataURL("image/png");
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        };
      });
    });
