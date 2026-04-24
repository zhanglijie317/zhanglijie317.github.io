const data = window.siteContent;

const setText = (id, value) => {
  const el = document.getElementById(id);
  if (el) el.textContent = value || "";
};

const renderContacts = () => {
  const container = document.getElementById("contact-list");
  data.profile.contacts.forEach((item) => {
    const el = item.href ? document.createElement("a") : document.createElement("span");
    el.className = "contact-pill";
    el.textContent = `${item.label}: ${item.value}`;
    if (item.href) {
      el.href = item.href;
      el.target = item.href.startsWith("http") ? "_blank" : "_self";
      el.rel = "noreferrer";
    }
    container.appendChild(el);
  });
};

const renderInterests = () => {
  const container = document.getElementById("interests");
  data.profile.interests.forEach((item) => {
    const chip = document.createElement("span");
    chip.className = "chip";
    chip.textContent = item;
    container.appendChild(chip);
  });
};

const buildEntry = (item) => {
  const article = document.createElement("article");
  article.className = "entry";

  const top = document.createElement("div");
  top.className = "entry__top";

  const titleWrap = document.createElement("div");
  const title = document.createElement("h3");
  title.className = "entry__title";
  title.textContent = item.title;
  titleWrap.appendChild(title);

  if (item.institution || item.venue || item.subtitle) {
    const subtitle = document.createElement("p");
    subtitle.className = "entry__subtitle";
    subtitle.textContent = item.institution || item.venue || item.subtitle;
    titleWrap.appendChild(subtitle);
  }

  const date = document.createElement("p");
  date.className = "entry__date";
  date.textContent = item.date || "";

  top.append(titleWrap, date);
  article.appendChild(top);

  if (item.description) {
    const description = document.createElement("p");
    description.className = "entry__description";
    description.textContent = item.description;
    article.appendChild(description);
  }

  if (item.tags && item.tags.length) {
    const tags = document.createElement("div");
    tags.className = "entry__tags";
    item.tags.forEach((tag) => {
      const tagEl = document.createElement("span");
      tagEl.className = "entry__tag";
      tagEl.textContent = tag;
      tags.appendChild(tagEl);
    });
    article.appendChild(tags);
  }

  return article;
};

const renderList = (id, list) => {
  const container = document.getElementById(id);
  list.forEach((item) => container.appendChild(buildEntry(item)));
};

const renderHighlights = () => {
  const container = document.getElementById("highlights-list");
  data.profile.highlights.forEach((item) => {
    const card = document.createElement("article");
    card.className = "fact-card";
    const value = document.createElement("strong");
    value.textContent = item.value;
    const label = document.createElement("p");
    label.textContent = item.label;
    card.append(value, label);
    container.appendChild(card);
  });
};

const renderSkills = () => {
  const container = document.getElementById("skills-list");
  data.skills.forEach((item) => {
    const card = document.createElement("article");
    card.className = "skill-group";
    const title = document.createElement("h3");
    title.textContent = item.title;
    const text = document.createElement("p");
    text.textContent = item.items;
    card.append(title, text);
    container.appendChild(card);
  });
};

setText("name", data.profile.name);
setText("tagline", data.profile.tagline);
setText("bio", data.profile.bio);
setText("current-proposal-title", data.profile.currentProposal.title);
setText("current-proposal-description", data.profile.currentProposal.description);
setText("last-updated", data.lastUpdated);

renderContacts();
renderInterests();
renderHighlights();
renderList("education-list", data.education);
renderList("publications-list", data.publications);
renderList("experience-list", data.experience);
renderList("honors-list", data.honors);
renderSkills();
renderList("activities-list", data.activities);
