function openPopup(type) {
  const popup = document.getElementById("popup");
  const content = document.getElementById("popupContent");

  if (type === "journal") {
    fetch("data.json")
      .then(res => res.json())
      .then(data => {
        content.innerHTML = data.map(item => `
          <div class="inner-card">
            <h3>${item.title}</h3>
            <p>${item.desc}</p>
            <a href="${item.link}" target="_blank">Open</a>
          </div>
        `).join("");
      });
  }

  if (type === "constitution") {
    content.innerHTML = `
      <div class="inner-card"><h3>Article 14</h3><p>Right to Equality</p></div>
      <div class="inner-card"><h3>Article 19</h3><p>Freedom of Speech</p></div>
      <div class="inner-card"><h3>Article 21</h3><p>Right to Life & Liberty</p></div>
    `;
  }

  if (type === "courts") {
    content.innerHTML = `
      <div class="inner-card">
        <h3>Supreme Court of India</h3>
        <p>Highest court of India.</p>
      </div>
      <div class="inner-card">
        <h3>Calcutta High Court</h3>
        <p>One of the oldest High Courts.</p>
      </div>
    `;
  }

  if (type === "news") {

    const apiKey = "pub_381f5922674c4f8db2a9d1978c537bbb";

    fetch(`https://newsapi.org/v2/everything?q=law OR court OR constitution&language=en&apiKey=${apiKey}`)
      .then(res => res.json())
      .then(data => {
        content.innerHTML = data.articles.slice(0, 6).map(article => `
          <div class="inner-card">
            <h3>${article.title}</h3>
            <p>${article.description || ""}</p>
            <a href="${article.url}" target="_blank">Read More</a>
          </div>
        `).join("");
      });
  }

  popup.style.display = "flex";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}
