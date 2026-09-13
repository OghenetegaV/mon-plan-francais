-- Run this once in your Supabase project's SQL Editor (left sidebar → SQL Editor → New query → Run).
-- It creates one row per signed-up user holding their entire app state as JSON,
-- and locks it down with Row Level Security so a user can only ever read/write their own row.

create table if not exists public.plans (
  user_id uuid primary key references auth.users(id) on delete cascade,
  state jsonb not null,
  updated_at timestamptz not null default now()
);

alter table public.plans enable row level security;

create policy "Users can view their own plan"
  on public.plans for select
  using (auth.uid() = user_id);

create policy "Users can insert their own plan"
  on public.plans for insert
  with check (auth.uid() = user_id);

create policy "Users can update their own plan"
  on public.plans for update
  using (auth.uid() = user_id);
