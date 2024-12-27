function changeGift() {
  const giftDiv = document.getElementById("gift");
  const gifts = {
    1: { emoji: "🌹", text: "A single rose for you" },
    2: { emoji: "🍫", text: "You are sweet as chocolates" },
    3: { emoji: "🎶", text: "Song always remind you" },
    4: { emoji: "✨", text: "Magical moments with you" },
    5: { emoji: "💎", text: "Sparkling compliment for you" },
    6: { emoji: "☕", text: "Cozy chai dates with you on sofa" },
    7: { emoji: "🌷", text: "Roses as fresh as you" },
    8: { emoji: "🎨", text: "Beautiful colors that remind you"},
    9: { emoji: "💌", text: "Heartfelt letters" },
    10: { emoji: "🎁", text: "Thoughtful gifts as jhumkaas" },
    11: { emoji: "🌙", text: "Moonlit nights to dream of you" },
    12: { emoji: "❤️", text: "Reasons why I adore you" }
  };

  const days = Object.keys(gifts);
  const randomDay = days[Math.floor(Math.random() * days.length)];
  const { emoji, text } = gifts[randomDay];

  giftDiv.innerHTML = `<span>${emoji}<span><p>${text}</p>`;
}

document.getElementById("cube").addEventListener("click", function () {
  this.classList.toggle("active");
  if (!this.classList.contains("active")) {
    changeGift();
  }
});

document.addEventListener("DOMContentLoaded", function () {
  changeGift();

  const cube = document.getElementById("cube");
  cube.classList.add("active");
  setTimeout(() => {
    cube.classList.remove("active");
  }, 3000);
});
