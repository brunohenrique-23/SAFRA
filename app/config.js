// =============================================================
// Safra · configuração do Firebase
// Projeto: safra-3e75f
//
// Esses valores podem ficar no site sem problema: foram feitos para o
// navegador. Quem protege os dados são as regras do Firestore
// (arquivo firebase/firestore.rules).
// =============================================================
window.SAFRA_CONFIG = {
  firebase: {
    apiKey: "AIzaSyCurtuvvu0by_g8TRNHMr7cKxM9z1Slv8g",
    authDomain: "safra-3e75f.firebaseapp.com",
    projectId: "safra-3e75f",
    storageBucket: "safra-3e75f.firebasestorage.app",
    messagingSenderId: "942570186880",
    appId: "1:942570186880:web:18542b256fd796c0359e65",
    measurementId: "G-ZZGY02C250"
  },

  // Botões "Continuar com…" da tela de entrada.
  // Deixe só os que você ativou em Authentication → Método de login.
  // Opções: "google", "microsoft", "apple", "github"
  provedores: ["google"]
};