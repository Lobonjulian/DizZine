import { issues } from "./data.js";

const coverElement = document.querySelector("#cover");
const currentIssueElement = document.querySelector("#current-issue");
const editionsListElement = document.querySelector(".issue__editions");

function renderIssue(issue) {
  document.body.style.backgroundColor = issue.bgColor;
  coverElement.src = issue.poster;
  coverElement.alt = `Portada de ${issue.name} - ${issue.description}`;
  currentIssueElement.textContent = issue.name;
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
    if (!button) return;

    const id = button.dataset.id;

    const issue = issues.find((issue) => issue.id === id);
    renderIssue(issue);
    selectedIssue(id);
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
  renderIssue(issues[0]);
  renderIssueList();
  selectedIssue(issues[0].id);
}

render();
