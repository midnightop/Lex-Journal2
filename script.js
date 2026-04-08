function openModal(type) {
  const modal = document.getElementById("modal");
  const title = document.getElementById("modal-title");
  const text = document.getElementById("modal-text");

  if (type === "kesavananda") {
    title.innerText = "Kesavananda Bharati Case (1973)";
    text.innerText = "This case established the Basic Structure Doctrine, limiting Parliament’s power to amend the Constitution.";
  }

  if (type === "privacy") {
    title.innerText = "Right to Privacy Case (2017)";
    text.innerText = "Supreme Court declared privacy as a fundamental right under Article 21.";
  }

  modal.style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}
