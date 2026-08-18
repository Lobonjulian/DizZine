import { issues } from "./data.js";

const currentIssueElement = document.querySelector("#current-issue");
const editionsListElement = document.querySelector(".issue__editions");
const portadaElement = document.querySelector("#portada");
const buyButtonElement = document.querySelector("#issue-buy");

const DEFAULT_POSTER = "assets/images/Base.avif";
let currentIssueId = issues[0].id;

function setActiveCity(id) {
  currentIssueId = id;
  const issue = issues.find((issue) => issue.id === id);
  if (!issue) return;

  document.body.style.backgroundColor = issue.bgColor;

  currentIssueElement.textContent = issue.name;
  buyButtonElement.textContent = "Ver edición " + issue.name;
  selectedIssue(id);
}

function onIntersection(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      setActiveCity(entry.target.dataset.id);
    }
  });
}

const observer = new IntersectionObserver(onIntersection, {
  root: portadaElement,
  threshold: 0.6,
});

function renderSections() {
  const section = issues
    .map(
      (issue) =>
        `<section class="snap-city" data-id="${issue.id}">
          <figure class="home__figure">
            <img src="${issue.poster || DEFAULT_POSTER}" alt="Portada de ${issue.name}">
            <figcaption class="home__overlay">
              <p>${issue.population}</p>
              <p>${issue.architecture.join(" · ")}</p>
            </figcaption>
          </figure>
        </section>`,
    )
    .join("");

  portadaElement.setHTMLUnsafe(section);

  portadaElement.querySelectorAll("img").forEach((img) => {
    img.addEventListener(
      "error",
      () => {
        img.src = DEFAULT_POSTER;
      },
      { once: true },
    );
  });

  portadaElement.querySelectorAll(".snap-city").forEach((section) => {
    observer.observe(section);
  });
}

function renderIssueList() {
  const html = issues
    .map(
      (issue) =>
        `<li class="issues__list">
          <button data-id="${issue.id}" class="issue__button">${issue.name}</button>
      </li>`,
    )
    .join("");

  editionsListElement.addEventListener("click", (event) => {
    const button = event.target.closest(".issue__button");
    const id = button?.dataset.id;
    const target = portadaElement.querySelector(`.snap-city[data-id="${id}"]`);
    if (!target) return;
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  editionsListElement.setHTMLUnsafe(html);
}

function selectedIssue(currentId) {
  const buttons = document.querySelectorAll(".issue__button");
  buttons.forEach((button) => {
    button.classList.toggle("active", button.dataset.id === currentId);
  });
}

function render() {
  renderSections();
  setActiveCity(currentIssueId);
  renderIssueList();
}

render();
