const dDay = document.querySelector(".d-day-content");

const dDayCount = () => {
  // D-Day 설정
  const setDday = new Date("2022-12-25T00:00:00+0900");

  //현재 날짜
  const now = new Date();

  //D-Day 와 현재 날짜 차이
  const distance = setDday.getTime() - now.getTime();

  const day = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  dDay.innerHTML = `
  <div class="time day">
  <span class="show-time">Day</span>
  <span class="flow-time">${day}</span>
</div>
<div class="time hours">
  <span class="show-time">Hours </span>
  <span class="flow-time">${hours}</span>
</div>
<div class="time minutes">
  <span class="show-time">Minutes</span>
  <span class="flow-time">${minutes}</span>
</div>
<div class="time seconds">
  <span class="show-time">Seconds </span>
  <span class="flow-time">${seconds}</span>
</div>`;
};

const init = () => {
  dDayCount();

  setInterval(dDayCount, 1000);
};

init();
