const clock = document.querySelector(".clock");

const tick = () => {
  const now = new Date();

  let hh = now.getHours();
  let h = hh % 12;

  let m = now.getMinutes();
  let s = now.getSeconds();

  let AMorPM = "AM";
  if (hh > 12) {
    AMorPM = "PM";
  }
  if (h == 0) {
    h = 12;
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  const html = `
        <span>${h}</span>:
        <span>${m}</span>:
        <span>${s}</span>
        <span>${AMorPM}</span>
    `;
  clock.innerHTML = html;
};

setInterval(tick, 1000);
