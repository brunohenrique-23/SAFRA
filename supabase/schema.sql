-- =============================================================
-- Safra · script do banco de dados (Supabase)
-- Cole tudo no SQL Editor do Supabase e clique em "Run".
-- Pode rodar mais de uma vez sem problema.
-- =============================================================

-- 1) Tabela com os dados de cada usuário (talhões, diário, tarefas, checklist)
create table if not exists public.safra_dados (
  user_id       uuid primary key references auth.users (id) on delete cascade,
  dados         jsonb       not null default '{}'::jsonb,
  atualizado_em timestamptz not null default now()
);

-- 2) Segurança: cada pessoa só enxerga e altera os próprios dados
alter table public.safra_dados enable row level security;

drop policy if exists "ver os proprios dados"       on public.safra_dados;
drop policy if exists "criar os proprios dados"     on public.safra_dados;
drop policy if exists "alterar os proprios dados"   on public.safra_dados;
drop policy if exists "apagar os proprios dados"    on public.safra_dados;

create policy "ver os proprios dados"     on public.safra_dados
  for select using (auth.uid() = user_id);
create policy "criar os proprios dados"   on public.safra_dados
  for insert with check (auth.uid() = user_id);
create policy "alterar os proprios dados" on public.safra_dados
  for update using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "apagar os proprios dados"  on public.safra_dados
  for delete using (auth.uid() = user_id);

-- 3) Pasta (bucket) privada para as fotos do diário
insert into storage.buckets (id, name, public)
values ('fotos', 'fotos', false)
on conflict (id) do nothing;

-- Cada usuário só mexe na pasta com o próprio id: fotos/<id-do-usuario>/arquivo.jpg
drop policy if exists "fotos: ver as proprias"    on storage.objects;
drop policy if exists "fotos: enviar as proprias" on storage.objects;
drop policy if exists "fotos: apagar as proprias" on storage.objects;

create policy "fotos: ver as proprias" on storage.objects
  for select using (bucket_id = 'fotos' and (storage.foldername(name))[1] = auth.uid()::text);
create policy "fotos: enviar as proprias" on storage.objects
  for insert with check (bucket_id = 'fotos' and (storage.foldername(name))[1] = auth.uid()::text);
create policy "fotos: apagar as proprias" on storage.objects
  for delete using (bucket_id = 'fotos' and (storage.foldername(name))[1] = auth.uid()::text);
