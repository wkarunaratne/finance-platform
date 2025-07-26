function calculateSavings() {
  const income = parseFloat(document.getElementById('income').value) || 0;
  const expenses = parseFloat(document.getElementById('expenses').value) || 0;
  const savings = income - expenses;
  const resultEl = document.getElementById('result');
  if (savings > 0) {
    resultEl.textContent = `Congratulations! You can save LKR ${savings.toFixed(2)} per month.`;
  } else if (savings === 0) {
    resultEl.textContent = 'Your budget breaks even. Consider reducing expenses to start saving.';
  } else {
    resultEl.textContent = `Your expenses exceed your income by LKR ${Math.abs(savings).toFixed(2)}. Time to cut costs!`;
  }
}
