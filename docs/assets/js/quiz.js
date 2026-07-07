const fabricQuestions = [
  {
    question: "Which yarn direction runs parallel to the selvage in woven fabric?",
    options: ["Warp or lengthwise yarns", "Weft yarns", "Bias yarns", "Filling yarns"],
    answer: 0,
    note: "Warp yarns run lengthwise and parallel to the selvage."
  },
  {
    question: "Why are many garment pieces cut with lengthwise grain running vertically?",
    options: ["It gives stability and durability", "It gives maximum stretch", "It removes the need for seams", "It makes the fabric waterproof"],
    answer: 0,
    note: "Lengthwise yarns are strong, stable and less likely to stretch."
  },
  {
    question: "True bias lies at what angle to the lengthwise and crosswise grains?",
    options: ["45 degrees", "15 degrees", "90 degrees", "180 degrees"],
    answer: 0,
    note: "True bias is a 45 degree diagonal across warp and weft."
  },
  {
    question: "Which fabric direction is best known for graceful drape in flares and cowls?",
    options: ["True bias", "Selvage", "Straight lengthwise grain", "Raw edge"],
    answer: 0,
    note: "Bias cutting gives elasticity and soft drape."
  },
  {
    question: "What is seam allowance?",
    options: ["Extra fabric between raw edge and stitching line", "A finished neckline", "A woven edge", "A decorative unstitched fold"],
    answer: 0,
    note: "Seam allowance helps protect the seam and control fraying."
  },
  {
    question: "Which term describes a triangular stitched fold used to shape flat fabric to body curves?",
    options: ["Dart", "Pleat", "Cuff", "Yoke"],
    answer: 0,
    note: "A dart disposes fullness and shapes fabric around curves."
  },
  {
    question: "Which formation method interlaces two sets of yarns at right angles?",
    options: ["Weaving", "Knitting", "Bonding", "Felting only"],
    answer: 0,
    note: "Weaving interlaces warp and weft yarns."
  },
  {
    question: "In weaving, what is shedding?",
    options: ["Raising and lowering warp yarns to make an opening", "Pushing the weft into place", "Winding fabric onto the cloth beam", "Removing seeds from cotton"],
    answer: 0,
    note: "Shedding creates the shed through which the weft passes."
  },
  {
    question: "Which basic weave has the maximum number of interlacements?",
    options: ["Plain weave", "Twill weave", "Satin weave", "Pile weave"],
    answer: 0,
    note: "Plain weave alternates warp and weft and is firm and stable."
  },
  {
    question: "Which weave is recognised by diagonal line formation?",
    options: ["Twill", "Plain", "Satin", "Basket"],
    answer: 0,
    note: "Twill's interlacing pattern produces diagonal lines."
  },
  {
    question: "Satin and sateen weaves are known for which surface quality?",
    options: ["High lustre from floating yarns", "Maximum fraying", "No yarn floats", "The roughest surface"],
    answer: 0,
    note: "Floating yarns create the smooth lustrous surface."
  },
  {
    question: "In knitting, what is a wale?",
    options: ["A vertical column of loops", "A horizontal row of loops", "A seam allowance", "A bonded layer"],
    answer: 0,
    note: "Wales run vertically in knitted structures."
  },
  {
    question: "Which knit type forms stitches in a course from one yarn running horizontally?",
    options: ["Weft knit", "Warp knit", "Satin knit", "Bonded knit"],
    answer: 0,
    note: "Weft knitting uses yarns running across the fabric width."
  },
  {
    question: "Bonded fabrics are mainly produced by joining fibres or layers using heat, mechanical or chemical action. Which category do they often belong to?",
    options: ["Non-woven or composite materials", "Only plain weaves", "Only protein fibres", "Only filament yarns"],
    answer: 0,
    note: "Bonding joins fibres or layers directly into a material."
  },
  {
    question: "Which natural fibre is almost pure cellulosic fibre and contains about 80-90 percent cellulose?",
    options: ["Cotton", "Wool", "Silk", "Nylon"],
    answer: 0,
    note: "Cotton is a natural cellulosic fibre."
  },
  {
    question: "Which cotton manufacturing step removes seeds from harvested cotton?",
    options: ["Ginning", "Throwing", "Sericulture", "Carbonising"],
    answer: 0,
    note: "Ginning separates cotton fibre from seeds."
  },
  {
    question: "Which cotton property makes it suitable for summer clothing?",
    options: ["High moisture absorbency and heat conductivity", "Very high wool-like crimp", "Low absorbency", "Melting behaviour"],
    answer: 0,
    note: "Cotton absorbs moisture and helps heat dissipate."
  },
  {
    question: "Wool is mainly classified as which type of natural fibre?",
    options: ["Protein fibre", "Cellulosic fibre", "Synthetic PET fibre", "Regenerated cellulose fibre"],
    answer: 0,
    note: "Wool comes from animal fleece and is a protein fibre."
  },
  {
    question: "Which wool property gives elasticity and helps insulation?",
    options: ["Crimp", "Selvage", "Degumming", "Hydrophobicity"],
    answer: 0,
    note: "Crimp is the wave-like structure of wool fibres."
  },
  {
    question: "Which silk process removes sericin gum?",
    options: ["Degumming", "Ginning", "Shedding", "Melt spinning"],
    answer: 0,
    note: "Degumming removes sericin and improves silk's handle and lustre."
  },
  {
    question: "Rayon is best described as which fibre type?",
    options: ["Regenerated cellulosic fibre", "Natural protein fibre", "Synthetic polyamide fibre", "Synthetic PET fibre"],
    answer: 0,
    note: "Rayon is made by reforming cellulose."
  },
  {
    question: "Which rayon property requires careful handling during washing?",
    options: ["It loses strength when wet", "It cannot absorb moisture", "It is naturally flame resistant", "It is impossible to dye"],
    answer: 0,
    note: "Rayon may lose 30-50 percent of strength when wet."
  },
  {
    question: "Nylon belongs to which polymer family?",
    options: ["Polyamide", "Polyacrylonitrile", "Cellulose", "PET only"],
    answer: 0,
    note: "Nylon is a synthetic polyamide fibre."
  },
  {
    question: "Which property makes nylon useful for ropes, conveyor belts and fishing nets?",
    options: ["High tensile strength and abrasion resistance", "Very low durability", "Weakness when wet", "Poor elasticity"],
    answer: 0,
    note: "Nylon is strong, elastic and abrasion resistant."
  },
  {
    question: "Polyester is derived from which polymer?",
    options: ["Polyethylene terephthalate", "Pure cellulose", "Keratin", "Polyamide salt only"],
    answer: 0,
    note: "Polyester textile fibre is commonly PET based."
  },
  {
    question: "Which polyester property explains its quick-drying behaviour?",
    options: ["Low moisture absorbency", "High wool crimp", "High gum content", "Seed structure"],
    answer: 0,
    note: "Polyester is hydrophobic and dries quickly."
  },
  {
    question: "Acrylic is often used as a substitute for which fibre?",
    options: ["Wool", "Silk", "Cotton", "Rayon"],
    answer: 0,
    note: "Acrylic is warm, soft, light and wool-like."
  },
  {
    question: "Which acrylic property makes it useful in curtains and outdoor-facing home furnishings?",
    options: ["Excellent sunlight resistance", "High moisture regain", "Natural sericin", "Weak biological resistance"],
    answer: 0,
    note: "Acrylic maintains colour and strength well in sunlight."
  }
];

function shuffle(items) {
  const array = [...items];
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function prepareQuestion(item, index) {
  const correct = item.options[item.answer];
  const options = shuffle(item.options).map((label) => ({
    label,
    correct: label === correct
  }));
  return { ...item, displayNumber: index + 1, options };
}

function renderQuiz() {
  const root = document.getElementById("quiz-root");
  if (!root) return;

  const questions = shuffle(fabricQuestions).slice(0, 8).map(prepareQuestion);

  root.innerHTML = `
    <div class="quiz-header">
      <div>
        <p class="eyebrow">Random revision set</p>
        <h2>Fabric Studies Quiz</h2>
      </div>
      <button type="button" class="quiz-refresh">New set</button>
    </div>
    <form class="quiz-form">
      ${questions.map((q, qIndex) => `
        <fieldset class="quiz-card">
          <legend>${q.displayNumber}. ${q.question}</legend>
          ${q.options.map((option, optionIndex) => `
            <label>
              <input type="radio" name="question-${qIndex}" value="${optionIndex}">
              <span>${option.label}</span>
            </label>
          `).join("")}
          <p class="quiz-note" hidden>${q.note}</p>
        </fieldset>
      `).join("")}
      <div class="quiz-actions">
        <button type="submit" class="primary-action">Check answers</button>
        <p class="quiz-score" aria-live="polite"></p>
      </div>
    </form>
  `;

  root.querySelector(".quiz-refresh").addEventListener("click", renderQuiz);
  root.querySelector(".quiz-form").addEventListener("submit", (event) => {
    event.preventDefault();
    let score = 0;
    const cards = [...root.querySelectorAll(".quiz-card")];

    cards.forEach((card, qIndex) => {
      const selected = card.querySelector(`input[name="question-${qIndex}"]:checked`);
      const inputs = [...card.querySelectorAll("input")];
      card.classList.remove("correct", "incorrect");

      inputs.forEach((input, inputIndex) => {
        const label = input.closest("label");
        label.classList.remove("answer-correct", "answer-wrong");
        if (questions[qIndex].options[inputIndex].correct) {
          label.classList.add("answer-correct");
        }
      });

      if (selected) {
        const choiceIndex = Number(selected.value);
        if (questions[qIndex].options[choiceIndex].correct) {
          score += 1;
          card.classList.add("correct");
        } else {
          selected.closest("label").classList.add("answer-wrong");
          card.classList.add("incorrect");
        }
      } else {
        card.classList.add("incorrect");
      }

      card.querySelector(".quiz-note").hidden = false;
    });

    root.querySelector(".quiz-score").textContent = `Score: ${score} / ${questions.length}`;
  });
}

document.addEventListener("DOMContentLoaded", renderQuiz);
