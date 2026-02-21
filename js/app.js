(function () {
  "use strict";

  var widthEl = document.getElementById("width");
  var depthEl = document.getElementById("depth");
  var calcBtn = document.getElementById("calc");
  var calcResult = document.getElementById("calcResult");
  var cupBtn = document.getElementById("cupBtn");
  var reasonDisplay = document.getElementById("reasonDisplay");

  var reasons = [
    "10.25″ × 13″ — under 1 square foot. One rectangle. No sprawl.",
    "I'll wipe down the counter and the machine after every use. No mess left behind.",
    "Mat or drip tray under the machine. The counter stays protected.",
    "One spot. The machine stays there. I won't spread stuff out.",
    "Accessories go in a bin or drawer when I'm done. Counter stays clear.",
    "It's one compact unit. Not a bunch of pieces sitting around.",
    "I'll clean up after every use. No exceptions.",
    "You can hold me to it: one spot, mat underneath, wipe down when I'm done.",
    "Designed to sit in one place. 10.25″ × 13″. That's the whole footprint.",
    "Everything gets put away when I'm finished. The counter looks the same as before.",
  ];

  function showReason() {
    if (!reasonDisplay) return;
    var reason = reasons[Math.floor(Math.random() * reasons.length)];
    reasonDisplay.textContent = reason;
  }

  if (cupBtn) cupBtn.addEventListener("click", showReason);

  function getNumber(el, fallback) {
    var n = parseFloat(el.value, 10);
    return isNaN(n) || n < 1 ? fallback : n;
  }

  function calcFootprint() {
    var w = getNumber(widthEl, 10.25);
    var d = getNumber(depthEl, 13);
    var sqIn = w * d;
    var sqFt = (sqIn / 144).toFixed(2);
    var wStr = w % 1 ? w.toFixed(2) : String(w);
    var dStr = d % 1 ? d.toFixed(2) : String(d);
    calcResult.textContent =
      wStr + '" × ' + dStr + '" = ' + sqIn.toFixed(1) + ' sq in (~' + sqFt + ' sq ft). One defined spot.';
  }

  if (calcBtn) calcBtn.addEventListener("click", calcFootprint);

  [widthEl, depthEl].forEach(function (el) {
    if (el) el.addEventListener("keydown", function (e) { if (e.key === "Enter") calcFootprint(); });
  });
})();
