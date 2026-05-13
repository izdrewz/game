const subjects = [
  "a very annoying kid",
  "a smug couple",
  "a baby staring like it knows something",
  "a man in a suit",
  "an evil cat",
  "a troll with a loyalty card",
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
  "a goose with authority",
  "a man carrying one single egg",
  "a bride with villain energy",
  "a group chat admin",
  "someone who definitely read your message",
  "a woman who says she is not being funny",
  "a dad who thinks he is a DJ",
  "a toddler with too much power",
  "a security guard taking the job too seriously",
  "a waiter who hates everyone",
  "a couple having a silent argument",
  "a man who owns a tiny dog",
  "someone wearing sunglasses indoors",
  "a person who claps when the plane lands",
  "a neighbour you have never trusted",
  "a choir boy with criminal energy",
  "a knight in fake armour",
  "a jester with a clipboard",
  "an evil cat in a pram",
  "a troll pretending to be staff",
  "a royal messenger with gossip",
  "a woman carrying a suspiciously heavy tote bag",
  "someone who always says they are an empath",
  "a man eating soup too loudly",
  "a person who thinks they are the main character",
  "a substitute teacher losing control",
  "a tiny dog with a better outfit than you",
  "a teenager filming everything",
  "a man loudly explaining crypto",
  "someone who once blanked you in public",
  "a woman who knows exactly what she did",
  "a shop assistant who has chosen violence",
  "a child dressed as a Victorian ghost",
  "a medieval guard on minimum wage",
  "a bus driver with secrets",
  "someone who says your full name",
  "a person who starts every sentence with ‘basically’",
  "an old man with suspicious confidence",
  "a best friend acting innocent",
  "a stranger who looks too familiar",
  "someone who definitely recognises you",
  "a man holding flowers and a shovel"
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
  "a very serious museum",
  "a pharmacy queue",
  "a packed train toilet corridor",
  "a school corridor after lunch",
  "the reduced aisle",
  "a castle drawbridge",
  "a haunted gift shop",
  "a silent library",
  "a garden centre cafe",
  "the airport security queue",
  "a pub quiz",
  "a rehearsal for a school play",
  "a royal wedding",
  "a village hall disco",
  "a posh hotel lobby",
  "a garden party where nobody is relaxed",
  "a medieval dungeon",
  "a pottery painting cafe",
  "the back of a National Express coach",
  "a very small changing room",
  "a restaurant toilet queue",
  "a school trip coach",
  "a supermarket car park",
  "a church hall",
  "a silent retreat",
  "a fancy cheese counter",
  "a badly organised escape room",
  "a children’s birthday party",
  "a royal banquet that is going wrong",
  "a nail salon with too much gossip",
  "a rainy bus stop",
  "a suspiciously romantic balcony",
  "a staff-only corridor",
  "a shop with too many mirrors",
  "a castle tower during a storm",
  "a cafe where everyone can hear you",
  "a train carriage with no spare seats"
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
  "says something wildly inappropriate",
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
  "tries to whisper but screams",
  "starts a rumour while you are standing there",
  "breaks something and blames the nearest child",
  "spills soup into a handbag",
  "asks if you remember them",
  "sends a voice note by accident",
  "falls in love with the worst person there",
  "starts singing happy birthday to nobody",
  "knocks over a display and walks away",
  "gets stuck in a chair",
  "tries to wink and looks unwell",
  "eats something that was clearly decoration",
  "opens a mysterious envelope",
  "pretends to faint for attention",
  "tries to bribe a member of staff",
  "starts a slow clap nobody asked for",
  "insists they can fix it and makes it worse",
  "announces a secret by accident",
  "laughs before checking if anyone is hurt",
  "tries to hide behind something too small",
  "drops their phone into food",
  "makes eye contact while doing something illegal",
  "starts acting like they are in a music video",
  "gets dumped very publicly",
  "pretends not to see you",
  "starts a fight with furniture",
  "tries to look mysterious and trips",
  "puts a curse on the wrong person",
  "pulls out a sword for no clear reason",
  "declares war over something tiny",
  "finds a rat and calls it beautiful",
  "gets arrested very politely",
  "locks themselves out while still inside",
  "hands you a baby without warning",
  "starts applauding your worst decision",
  "orders something and then says they are allergic",
  "uses your full government name in public"
];

const wilds = [
  "they are your enemy",
  "you are running from the police",
  "your mum is watching",
  "you accidentally caused it",
  "you are undercover",
  "you are on a first date",
  "you owe them money",
  "they owe you money",
  "they recognise you",
  "someone is filming",
  "you are trying to impress someone nearby",
  "you have lied about being somewhere else",
  "you are meant to be the responsible adult",
  "you are hiding from them",
  "you have to join in",
  "you realise you know them",
  "they think you work there",
  "you are about to be sick",
  "you have just said ‘nothing weird ever happens here’",
  "you have to pretend it is romantic",
  "you are already banned from this place",
  "your crush is watching",
  "your ex has just walked in",
  "you promised you would not react",
  "everyone thinks it is your fault",
  "you need them to like you",
  "you have to act like this was your plan",
  "you are the only witness",
  "you are trying not to laugh",
  "you are trying not to look guilty",
  "you have to pretend to be concerned",
  "you are holding evidence",
  "you are meant to be giving a speech in one minute",
  "you have just been told to behave normally",
  "you are being introduced to someone important",
  "you are pretending to be posh",
  "you have to leave without anyone noticing",
  "you have already made the same mistake today",
  "you are supposed to be invisible",
  "you are wearing something that makes this worse",
  "you have to pretend you do not care",
  "this is exactly what you warned everyone about",
  "this is the person you have been gossiping about",
  "you have just defended them",
  "you are secretly delighted",
  "you are supposed to be in charge",
  "you were just about to confess something",
  "you cannot tell if this is flirting",
  "you need to borrow money from them later",
  "they have your phone",
  "you have their phone",
  "you are trying to win an argument silently",
  "you have to pretend you understand what is happening",
  "you are meant to be asleep",
  "you are pretending not to know them",
  "you are trying to look innocent for security",
  "this is happening during a moment of silence",
  "you have just called them normal",
  "you are trying to make a good first impression",
  "you are the reason they are here"
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
