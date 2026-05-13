const subjects = [
  "very annoying kid",
  "your enemy",
  "a smug couple",
  "a baby staring like it knows something",
  "a man in a suit",
  "an evil cat",
  "a troll with a shopping bag",
  "a knight having a breakdown",
  "a jester who has gone too far",
  "your teacher",
  "a cashier who has seen everything",
  "a dog that looks disappointed in you",
  "someone you owe money to",
  "a mysterious auntie",
  "a child with sticky hands",
  "a posh teenager",
  "someone from school you avoid",
  "a magician with no confidence",
  "a prince with lip filler",
  "a goose with legal authority",
  "a man carrying one single egg",
  "a bride with villain energy",
  "a group chat admin",
  "someone who definitely read your message"
];

const places = [
  "Waitrose",
  "a funeral buffet",
  "a soft play",
  "a suspiciously quiet cafe",
  "the self-checkout area",
  "a castle corridor",
  "a school assembly",
  "a doctor’s waiting room",
  "a first date",
  "a bus that is too full",
  "a wedding reception",
  "a medieval banquet",
  "a charity shop changing room",
  "a lift that has stopped moving",
  "a tiny village fete",
  "a romantic garden",
  "a train platform",
  "a royal court",
  "a corner shop at 11pm",
  "a candlelit restaurant",
  "a swimming pool viewing gallery",
  "a suspicious Airbnb",
  "a petting zoo",
  "a very serious museum"
];

const actions = [
  "falls over dramatically",
  "starts a drug deal",
  "waves at the wrong person",
  "drops a full lasagne",
  "gets caught lying",
  "tries to flirt and fails",
  "starts crying but carries on singing",
  "walks into a glass door",
  "announces something wildly inappropriate",
  "steals your seat",
  "asks you to hold something suspicious",
  "proposes at the worst possible moment",
  "starts sword fighting badly",
  "reads your private message out loud",
  "gets praised for something you did",
  "vomits and pretends nothing happened",
  "shouts your name wrong",
  "drops a cake face-down",
  "accuses you of being dramatic",
  "starts clapping alone",
  "forgets why they came in",
  "takes credit for your joke",
  "opens a bag of prawns",
  "tries to whisper but screams"
];

const wilds = [
  "you are running from the police",
  "it is your enemy",
  "your mum is watching",
  "you accidentally caused it",
  "you are undercover",
  "you are on a first date",
  "you owe them money",
  "you are holding something suspicious",
  "they recognise you",
  "someone is filming",
  "you are trying to impress someone nearby",
  "you have lied about being somewhere else",
  "you are dressed as a knight",
  "you are meant to be the responsible adult",
  "you are hiding from them",
  "you have to join in",
  "you realise you know them",
  "they think you work there",
  "you are about to be sick",
  "you have just said ‘nothing weird ever happens here’",
  "you are wearing a cape",
  "you have to pretend it is romantic",
  "you are carrying a tiny cursed statue",
  "you are already banned from this place"
];

const subjectText = document.querySelector("#subjectText");
const placeText = document.querySelector("#placeText");
const actionText = document.querySelector("#actionText");
const wildText = document.querySelector("#wildText");
const sceneText = document.querySelector("#sceneText");
const guessModeText = document.querySelector("#guessModeText");
const cards = document.querySelectorAll(".card");
const scenePanel = document.querySelector(".scene-panel");

const playerOneScore = document.querySelector("#playerOneScore");
const playerTwoScore = document.querySelector("#playerTwoScore");

let scores = {
  one: 0,
  two: 0
};

function pick(deck) {
  return deck[Math.floor(Math.random() * deck.length)];
}

function capitaliseFirst(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function buildScene(subject, place, action, wild) {
  return `${capitaliseFirst(subject)} in ${place} ${action}, but ${wild}.`;
}

function setHidden(isHidden) {
  cards.forEach((card) => card.classList.toggle("is-hidden", isHidden));
  scenePanel.classList.toggle("is-hidden", isHidden);
  guessModeText.hidden = !isHidden;
}

function dealScene() {
  const subject = pick(subjects);
  const place = pick(places);
  const action = pick(actions);
  const wild = pick(wilds);

  subjectText.textContent = subject;
  placeText.textContent = place;
  actionText.textContent = action;
  wildText.textContent = wild;
  sceneText.textContent = buildScene(subject, place, action, wild);
  setHidden(false);
}

function updateScores() {
  playerOneScore.textContent = scores.one;
  playerTwoScore.textContent = scores.two;
}

document.querySelector("#dealButton").addEventListener("click", dealScene);
document.querySelector("#hideButton").addEventListener("click", () => setHidden(true));
document.querySelector("#revealButton").addEventListener("click", () => setHidden(false));
document.querySelector("#resetScoreButton").addEventListener("click", () => {
  scores = { one: 0, two: 0 };
  updateScores();
});

document.querySelectorAll(".score-button").forEach((button) => {
  button.addEventListener("click", () => {
    const player = button.dataset.player;
    scores[player] += Number(button.dataset.points);
    updateScores();
  });
});

dealScene();
updateScores();
