// =============================================================
// Safra · configuração do Supabase
// Cole aqui os dados do seu projeto em:
// Supabase → Project Settings → API (ou "Data API" / "API Keys")
//
// Pode deixar a chave pública (anon / publishable) aqui sem medo:
// ela foi feita para ficar no navegador. Quem protege os dados são
// as regras de segurança (RLS) criadas pelo arquivo supabase/schema.sql.
//
// NUNCA coloque aqui a chave "service_role" / "secret".
//
// Enquanto os dois campos estiverem vazios, o app funciona só no
// aparelho, sem login.
// =============================================================
window.SAFRA_CONFIG = {
  supabaseUrl: "",      // ex.: "https://abcdefghijkl.supabase.co"
  supabaseAnonKey: ""   // ex.: "eyJhbGciOi..." ou "sb_publishable_..."
};
