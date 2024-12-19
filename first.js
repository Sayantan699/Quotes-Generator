const quotes = [
  "“We cannot solve problems with the kind of thinking we employed when we came up with them.” —Albert Einstein",
  "“Learn as if you will live forever, live like you will die tomorrow.” —Mahatma Gandhi",
  "“Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too.” —Mark Twain",
  "“When you give joy to other people, you get more joy in return. You should give a good thought to the happiness that you can give out.” —Eleanor Roosevelt",
  "“When you change your thoughts, remember to also change your world.” —Norman Vincent Peale",
  "“It is only when we take chances that our lives improve. The initial and the most difficult risk we need to take is to become honest.” —Walter Anderson",
  "“Nature has given us all the pieces required to achieve exceptional wellness and health, but has left it to us to put these pieces together.” —Diane McLaren",
  "“The road to success and the road to failure are almost exactly the same.” —Colin R. Davis",
  "“Success is peace of mind, which is a direct result of self-satisfaction in knowing you made the effort to become the best of which you are capable.” —John Wooden",
  "“I never dreamed about success. I worked for it.” —Estée Lauder",
  "“Success is getting what you want; happiness is wanting what you get.”―W. P. Kinsella",
  "Don’t let yesterday take up too much of today.” —Will Rogers",

  "“Experience is a hard teacher because she gives the test first, the lesson afterward.” ―Vernon Sanders Law",

  "“To know how much there is to know is the beginning of learning to live.” —Dorothy West",

  "“Goal setting is the secret to a compelling future.” —Tony Robbins",

  "“Concentrate all your thoughts upon the work in hand. The sun’s rays do not burn until brought to a focus.” —Alexander Graham Bell",
  "The only limit to our realization of tomorrow will be our doubts of today — Franklin D. Roosevelt",
  "Do what you can, with what you have, where you are. — Theodore Roosevelt",
  "Believe you can and you're halfway there — Theodore Roosevelt",
  "Act as if what you do makes a difference. It does. — William James",
];
const gradients = [
  "linear-gradient(120deg, #ff7eb3, #ff758c, #ff6a7a)", // Soft pink shades
  "linear-gradient(135deg, #89f7fe, #66a6ff)", // Light blue to deep blue
  "linear-gradient(120deg, #ff9a9e, #fad0c4)", // Pastel pink and peach
  "linear-gradient(140deg, #a18cd1, #fbc2eb)", // Purple to pink
  "linear-gradient(150deg, #f093fb, #f5576c)", // Neon pink to orange
  "linear-gradient(120deg, #4facfe, #00f2fe)", // Light blue to aqua
  "linear-gradient(140deg, #43e97b, #38f9d7)", // Green to aqua
  "linear-gradient(135deg, #fa709a, #fee140)", // Pink to yellow
  "linear-gradient(145deg, #30cfd0, #330867)", // Aqua to deep purple
  "linear-gradient(120deg, #8e44ad, #c0392b)", // Purple to deep red
  "linear-gradient(135deg, #ffecd2, #fcb69f)", // Soft cream to peach
  "linear-gradient(140deg, #c2e9fb, #a1c4fd)", // Light blue to sky blue
  "linear-gradient(150deg, #ffafbd, #ffc3a0)", // Rose pink to peach
  "linear-gradient(135deg, #667eea, #764ba2)", // Soft violet to purple
  "linear-gradient(140deg, #6a11cb, #2575fc)", // Indigo to blue
  "linear-gradient(120deg, #d4fc79, #96e6a1)", // Light green to lime
  "linear-gradient(150deg, #fddb92, #d1fdff)", // Pastel yellow to aqua
  "linear-gradient(140deg, #ff6a00, #ee0979)", // Orange to hot pink
  "linear-gradient(135deg, #5ee7df, #b490ca)", // Aqua to lavender
  "linear-gradient(150deg, #00c6ff, #0072ff)", // Cyan to deep blue
];

function change() {
  const ele = document.getElementById("quote");
  ele.textContent = quotes[Math.floor(Math.random() * quotes.length)];
}
setInterval(change, 5000);
function changeBackground() {
  document.body.style.background =
    gradients[Math.floor(Math.random() * gradients.length)];
}
setInterval(changeBackground, 5000);
