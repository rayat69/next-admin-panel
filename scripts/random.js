function random(length) {
  const key = "qwertyuioplkjhgfdsazxcvbnmPOIUYTREWQASDFGHJKLMNBVCZX0192837465";
  let auth = "";
  for (let i = 0; i < length; i++) {
    let j = Math.floor(Math.random() * key.length);
    auth += key[j];
  }
  return auth;
}

function adminSecret() {
  return `CktN6${random(15)}`;
}

exports.adminSecret = adminSecret;

exports.random = random;
