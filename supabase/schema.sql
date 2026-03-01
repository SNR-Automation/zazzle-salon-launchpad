-- ============================================================
-- Zazzle Salon – Supabase Schema
-- Run this in the Supabase SQL Editor to set up the database.
-- ============================================================

-- 1. Appointments (submitted via the website contact form)
create table if not exists public.appointments (
  id            uuid primary key default gen_random_uuid(),
  name          text        not null,
  phone         text        not null,
  service       text        not null,
  preferred_date date,
  status        text        not null default 'pending'
                  check (status in ('pending', 'confirmed', 'completed', 'cancelled')),
  notes         text,
  created_at    timestamptz not null default now()
);

-- Index for quick look-ups by status & date
create index if not exists idx_appointments_status on public.appointments (status);
create index if not exists idx_appointments_date   on public.appointments (preferred_date);

-- 2. Row-Level Security
alter table public.appointments enable row level security;

-- Allow anonymous inserts (website visitors submitting the form)
create policy "Anyone can request an appointment"
  on public.appointments
  for insert
  to anon
  with check (true);

-- Only authenticated users (salon staff) can read / update / delete
create policy "Authenticated users can view appointments"
  on public.appointments
  for select
  to authenticated
  using (true);

create policy "Authenticated users can update appointments"
  on public.appointments
  for update
  to authenticated
  using (true)
  with check (true);

create policy "Authenticated users can delete appointments"
  on public.appointments
  for delete
  to authenticated
  using (true);
