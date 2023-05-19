const passwordEle = document.getElementById("password");
const strengthTag = document.getElementById("strengthIndicator");

passwordEle.addEventListener("input", (e) => {
  const passwordLength = e.target.value.length;
  strengthTag.textContent = getPasswordStrength(passwordLength);
  strengthTag.className = getStrengthClass(passwordLength);
});

const getPasswordStrength = (passwordLength) => {
  if (passwordLength < 4) return "Very Weak";
  if (passwordLength < 8) return "Weak";
  if (passwordLength < 12) return "Medium";
  if (passwordLength < 16) return "Strong";
  return "Very Strong";
};

const getStrengthClass = (passwordLength) => {
  if (passwordLength < 4) return "veryWeak";
  if (passwordLength < 8) return "weak";
  if (passwordLength < 12) return "medium";
  if (passwordLength < 16) return "strong";
  return "veryStrong";
};
