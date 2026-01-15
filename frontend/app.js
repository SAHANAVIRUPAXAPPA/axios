function checkScore() {
  const userId = document.getElementById("userId").value;

  if (!userId) {
    alert("Please enter User ID");
    return;
  }

  fetch(`http://localhost:8080/api/score/explain/${userId}`, {
    headers: {
      "X-API-KEY": "BANK-456-KEY"
    }
  })
  .then(res => {
    if (!res.ok) throw new Error("API Error");
    return res.json();
  })
  .then(data => {
    document.getElementById("result").classList.remove("hidden");
    document.getElementById("score").innerText = data.score;
    document.getElementById("risk").innerText = data.riskLevel;
    document.getElementById("base").innerText = data.explanation.baseScore;
    document.getElementById("variable").innerText = data.explanation.variableScore;
  })
  .catch(() => {
    alert("Backend not running or invalid User ID");
  });
}
