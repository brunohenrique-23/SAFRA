// =============================================================
// Safra · configuração do Firebase
//
// Cole aqui o objeto "firebaseConfig" do seu projeto:
// Firebase → ⚙ Configurações do projeto → Geral → Seus apps → app da Web (</>)
//
// Esses valores podem ficar no site sem problema: foram feitos para o
// navegador. Quem protege os dados são as regras do Firestore
// (arquivo firebase/firestore.rules).
//
// Enquanto "apiKey" estiver vazio, o app funciona só no aparelho, sem login.
// =============================================================
window.SAFRA_CONFIG = {
  firebase: {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  },

  // Botões "Continuar com…" da tela de entrada.
  // Deixe só os que você ativou em Authentication → Método de login.
  // Opções: "google", "microsoft", "apple", "github"
  provedores: ["google"]
};
