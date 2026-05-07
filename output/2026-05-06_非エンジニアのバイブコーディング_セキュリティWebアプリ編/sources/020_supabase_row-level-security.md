---
url: https://supabase.com/docs/guides/database/postgres/row-level-security
title: "Row Level Security | Supabase Docs"
---

#  {#section .mb-0 .[&>p]:m-0}

Row Level Security

##  {#section-1 .mt-3 .text-xl .text-foreground-light}

Secure your data using Postgres Row Level Security.

------------------------------------------------------------------------

When you need granular authorization rules, nothing beats Postgres\'s [Row Level Security (RLS)](https://www.postgresql.org/docs/current/ddl-rowsecurity.html).

## Row Level Security in Supabase[\#](#row-level-security-in-supabase){.ml-2 .opacity-0 .focus:opacity-100 .group-hover:opacity-100 .transition} {#row-level-security-in-supabase .group .scroll-mt-24}

![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0idy02IGgtNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Ym94PSIwIDAgMjIgMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNOC4xNTEzNyAxLjk1MTE3QzkuMzA2MTUgLTAuMDQ4ODI4MSAxMi4xOTQzIC0wLjA0ODgyODEgMTMuMzQ4MSAxLjk1MTE3TDIwLjcwMzEgMTQuNjk5MkMyMS44NTc0IDE2LjY5OTIgMjAuNDEzMSAxOS4xOTkyIDE4LjEwNCAxOS4xOTkySDMuMzk1MDJDMS4wODU5NCAxOS4xOTkyIC0wLjM1NjkzMyAxNi42OTkyIDAuNzk3MzY0IDE0LjY5OTJMOC4xNTEzNyAxLjk1MTE3Wk0xMS43NjY2IDE2LjAwODNDMTEuNDk3MSAxNi4yNzc4IDExLjEzMTMgMTYuNDI5MiAxMC43NSAxNi40MjkyQzEwLjM2ODcgMTYuNDI5MiAxMC4wMDI5IDE2LjI3NzggOS43MzM0IDE2LjAwODNDOS40NjM4NyAxNS43Mzg4IDkuMzEyNSAxNS4zNzMgOS4zMTI1IDE0Ljk5MTdDOS4zMTI1IDE0LjkzMDcgOS4zMTY0MSAxNC44NzA2IDkuMzIzNzMgMTQuODExQzkuMzM1NDUgMTQuNzE5NyA5LjM1NTQ3IDE0LjYzMDQgOS4zODM3OSAxNC41NDM5TDkuNDE0MDYgMTQuNDYwOUM5LjQ4NTg0IDE0LjI4MDMgOS41OTM3NSAxNC4xMTQ3IDkuNzMzNCAxMy45NzUxQzEwLjAwMjkgMTMuNzA1NiAxMC4zNjg3IDEzLjU1NDIgMTAuNzUgMTMuNTU0MkMxMS4xMzEzIDEzLjU1NDIgMTEuNDk3MSAxMy43MDU2IDExLjc2NjYgMTMuOTc1MUMxMi4wMzYxIDE0LjI0NDYgMTIuMTg3NSAxNC42MTA0IDEyLjE4NzUgMTQuOTkxN0MxMi4xODc1IDE1LjM3MyAxMi4wMzYxIDE1LjczODggMTEuNzY2NiAxNi4wMDgzWk0xMC43NSA0LjY5OTcxQzExLjAzMTcgNC42OTk3MSAxMS4zMDIyIDQuODExNTIgMTEuNTAxNSA1LjAxMDc0QzExLjcwMDcgNS4yMDk5NiAxMS44MTI1IDUuNDgwNDcgMTEuODEyNSA1Ljc2MjIxVjExLjA3NDdDMTEuODEyNSAxMS4zNTY0IDExLjcwMDcgMTEuNjI3IDExLjUwMTUgMTEuODI2MkMxMS4zMDIyIDEyLjAyNTQgMTEuMDMxNyAxMi4xMzcyIDEwLjc1IDEyLjEzNzJDMTAuNDY4MyAxMi4xMzcyIDEwLjE5NzggMTIuMDI1NCA5Ljk5ODU0IDExLjgyNjJDOS43OTkzMiAxMS42MjcgOS42ODc1IDExLjM1NjQgOS42ODc1IDExLjA3NDdWNS43NjIyMUM5LjY4NzUgNS40ODA0NyA5Ljc5OTMyIDUuMjA5OTYgOS45OTg1NCA1LjAxMDc0QzEwLjE5NzggNC44MTE1MiAxMC40NjgzIDQuNjk5NzEgMTAuNzUgNC42OTk3MVoiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PC9wYXRoPjwvc3ZnPg==){.w-6 .h-6}

Supabase allows convenient and secure data access from the browser, as long as you enable RLS.

RLS *must* always be enabled on any tables stored in an exposed schema. By default, this is the `public` schema.

RLS is enabled by default on tables created with the Table Editor in the dashboard. If you create one in raw SQL or with the SQL editor, remember to enable RLS yourself and grant only the permissions each Postgres role needs.

``` {.grid .grid-cols-[auto_1fr]}
1GRANT SELECT ON <schema_name>.<table_name> TO anon;2GRANT SELECT, INSERT, UPDATE, DELETE ON <schema_name>.<table_name> TO authenticated;3GRANT SELECT, INSERT, UPDATE, DELETE ON <schema_name>.<table_name> TO service_role;45alter table <schema_name>.<table_name>6enable row level security;
```

![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ibHVjaWRlIGx1Y2lkZS13cmFwLXRleHQgdGV4dC1saWdodGVyIiBmaWxsPSJub25lIiBoZWlnaHQ9IjE0IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIHZpZXdib3g9IjAgMCAyNCAyNCIgd2lkdGg9IjE0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxsaW5lIHgxPSIzIiB4Mj0iMjEiIHkxPSI2IiB5Mj0iNiI+PC9saW5lPjxwYXRoIGQ9Ik0zIDEyaDE1YTMgMyAwIDEgMSAwIDZoLTQiPjwvcGF0aD48cG9seWxpbmUgcG9pbnRzPSIxNiAxNiAxNCAxOCAxNiAyMCI+PC9wb2x5bGluZT48bGluZSB4MT0iMyIgeDI9IjEwIiB5MT0iMTgiIHkyPSIxOCI+PC9saW5lPjwvc3ZnPg==){.lucide .lucide-wrap-text .text-lighter}

![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jb3B5IHRleHQtbGlnaHRlciIgZmlsbD0ibm9uZSIgaGVpZ2h0PSIxNCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiB2aWV3Ym94PSIwIDAgMjQgMjQiIHdpZHRoPSIxNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBoZWlnaHQ9IjE0IiByeD0iMiIgcnk9IjIiIHdpZHRoPSIxNCIgeD0iOCIgeT0iOCI+PC9yZWN0PjxwYXRoIGQ9Ik00IDE2Yy0xLjEgMC0yLS45LTItMlY0YzAtMS4xLjktMiAyLTJoMTBjMS4xIDAgMiAuOSAyIDIiPjwvcGF0aD48L3N2Zz4=){.lucide .lucide-copy .text-lighter}

RLS is incredibly powerful and flexible, allowing you to write complex SQL rules that fit your unique business needs. RLS can be combined with [Supabase Auth](/docs/guides/auth) for end-to-end user security from the browser to the database.

RLS is a Postgres primitive and can provide \"[defense in depth](https://en.wikipedia.org/wiki/Defense_in_depth_(computing))\" to protect your data from malicious actors even when accessed through third-party tooling.

## Policies[\#](#policies){.ml-2 .opacity-0 .focus:opacity-100 .group-hover:opacity-100 .transition} {#policies .group .scroll-mt-24}

[Policies](https://www.postgresql.org/docs/current/sql-createpolicy.html) are Postgres\'s rule engine. Policies are easy to understand once you get the hang of them. Each policy is attached to a table, and the policy is executed every time a table is accessed.

You can just think of them as adding a `WHERE` clause to every query. For example a policy like this \...

``` {.grid .grid-cols-[auto_1fr]}
1create policy "Individuals can view their own todos."2on todos for select3using ( (select auth.uid()) = user_id );
```

![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ibHVjaWRlIGx1Y2lkZS13cmFwLXRleHQgdGV4dC1saWdodGVyIiBmaWxsPSJub25lIiBoZWlnaHQ9IjE0IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIHZpZXdib3g9IjAgMCAyNCAyNCIgd2lkdGg9IjE0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxsaW5lIHgxPSIzIiB4Mj0iMjEiIHkxPSI2IiB5Mj0iNiI+PC9saW5lPjxwYXRoIGQ9Ik0zIDEyaDE1YTMgMyAwIDEgMSAwIDZoLTQiPjwvcGF0aD48cG9seWxpbmUgcG9pbnRzPSIxNiAxNiAxNCAxOCAxNiAyMCI+PC9wb2x5bGluZT48bGluZSB4MT0iMyIgeDI9IjEwIiB5MT0iMTgiIHkyPSIxOCI+PC9saW5lPjwvc3ZnPg==){.lucide .lucide-wrap-text .text-lighter}

![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jb3B5IHRleHQtbGlnaHRlciIgZmlsbD0ibm9uZSIgaGVpZ2h0PSIxNCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiB2aWV3Ym94PSIwIDAgMjQgMjQiIHdpZHRoPSIxNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBoZWlnaHQ9IjE0IiByeD0iMiIgcnk9IjIiIHdpZHRoPSIxNCIgeD0iOCIgeT0iOCI+PC9yZWN0PjxwYXRoIGQ9Ik00IDE2Yy0xLjEgMC0yLS45LTItMlY0YzAtMS4xLjktMiAyLTJoMTBjMS4xIDAgMiAuOSAyIDIiPjwvcGF0aD48L3N2Zz4=){.lucide .lucide-copy .text-lighter}

.. would translate to this whenever a user tries to select from the todos table:

``` {.grid .grid-cols-[auto_1fr]}
1select *2from todos3where auth.uid() = todos.user_id;4-- Policy is implicitly added.
```

![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ibHVjaWRlIGx1Y2lkZS13cmFwLXRleHQgdGV4dC1saWdodGVyIiBmaWxsPSJub25lIiBoZWlnaHQ9IjE0IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIHZpZXdib3g9IjAgMCAyNCAyNCIgd2lkdGg9IjE0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxsaW5lIHgxPSIzIiB4Mj0iMjEiIHkxPSI2IiB5Mj0iNiI+PC9saW5lPjxwYXRoIGQ9Ik0zIDEyaDE1YTMgMyAwIDEgMSAwIDZoLTQiPjwvcGF0aD48cG9seWxpbmUgcG9pbnRzPSIxNiAxNiAxNCAxOCAxNiAyMCI+PC9wb2x5bGluZT48bGluZSB4MT0iMyIgeDI9IjEwIiB5MT0iMTgiIHkyPSIxOCI+PC9saW5lPjwvc3ZnPg==){.lucide .lucide-wrap-text .text-lighter}

![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jb3B5IHRleHQtbGlnaHRlciIgZmlsbD0ibm9uZSIgaGVpZ2h0PSIxNCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiB2aWV3Ym94PSIwIDAgMjQgMjQiIHdpZHRoPSIxNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBoZWlnaHQ9IjE0IiByeD0iMiIgcnk9IjIiIHdpZHRoPSIxNCIgeD0iOCIgeT0iOCI+PC9yZWN0PjxwYXRoIGQ9Ik00IDE2Yy0xLjEgMC0yLS45LTItMlY0YzAtMS4xLjktMiAyLTJoMTBjMS4xIDAgMiAuOSAyIDIiPjwvcGF0aD48L3N2Zz4=){.lucide .lucide-copy .text-lighter}

## Enabling Row Level Security[\#](#enabling-row-level-security){.ml-2 .opacity-0 .focus:opacity-100 .group-hover:opacity-100 .transition} {#enabling-row-level-security .group .scroll-mt-24}

You can enable RLS for any table using the `enable row level security` clause:

``` {.grid .grid-cols-[auto_1fr]}
1alter table "table_name" enable row level security;
```

![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ibHVjaWRlIGx1Y2lkZS13cmFwLXRleHQgdGV4dC1saWdodGVyIiBmaWxsPSJub25lIiBoZWlnaHQ9IjE0IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIHZpZXdib3g9IjAgMCAyNCAyNCIgd2lkdGg9IjE0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxsaW5lIHgxPSIzIiB4Mj0iMjEiIHkxPSI2IiB5Mj0iNiI+PC9saW5lPjxwYXRoIGQ9Ik0zIDEyaDE1YTMgMyAwIDEgMSAwIDZoLTQiPjwvcGF0aD48cG9seWxpbmUgcG9pbnRzPSIxNiAxNiAxNCAxOCAxNiAyMCI+PC9wb2x5bGluZT48bGluZSB4MT0iMyIgeDI9IjEwIiB5MT0iMTgiIHkyPSIxOCI+PC9saW5lPjwvc3ZnPg==){.lucide .lucide-wrap-text .text-lighter}

![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jb3B5IHRleHQtbGlnaHRlciIgZmlsbD0ibm9uZSIgaGVpZ2h0PSIxNCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiB2aWV3Ym94PSIwIDAgMjQgMjQiIHdpZHRoPSIxNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBoZWlnaHQ9IjE0IiByeD0iMiIgcnk9IjIiIHdpZHRoPSIxNCIgeD0iOCIgeT0iOCI+PC9yZWN0PjxwYXRoIGQ9Ik00IDE2Yy0xLjEgMC0yLS45LTItMlY0YzAtMS4xLjktMiAyLTJoMTBjMS4xIDAgMiAuOSAyIDIiPjwvcGF0aD48L3N2Zz4=){.lucide .lucide-copy .text-lighter}

Once you have enabled RLS, no data will be accessible via the [API](/docs/guides/api) when using a publishable key, until you create policies.

## Auto-enable RLS for new tables[\#](#auto-enable-rls-for-new-tables){.ml-2 .opacity-0 .focus:opacity-100 .group-hover:opacity-100 .transition} {#auto-enable-rls-for-new-tables .group .scroll-mt-24}

If you want RLS enabled automatically for new tables, you can create an event trigger that runs after table creation. This uses a Postgres [event trigger](/docs/guides/database/postgres/event-triggers) to call `ALTER TABLE ... ENABLE ROW LEVEL SECURITY` on each newly created table.

``` {.grid .grid-cols-[auto_1fr]}
1CREATE OR REPLACE FUNCTION rls_auto_enable()2RETURNS EVENT_TRIGGER3LANGUAGE plpgsql4SECURITY DEFINER5SET search_path = pg_catalog6AS $$7DECLARE8  cmd record;9BEGIN10  FOR cmd IN11    SELECT *12    FROM pg_event_trigger_ddl_commands()13    WHERE command_tag IN ('CREATE TABLE', 'CREATE TABLE AS', 'SELECT INTO')14      AND object_type IN ('table','partitioned table')15  LOOP16     IF cmd.schema_name IS NOT NULL AND cmd.schema_name IN ('public') AND cmd.schema_name NOT IN ('pg_catalog','information_schema') AND cmd.schema_name NOT LIKE 'pg_toast%' AND cmd.schema_name NOT LIKE 'pg_temp%' THEN17      BEGIN18        EXECUTE format('alter table if exists %s enable row level security', cmd.object_identity);19        RAISE LOG 'rls_auto_enable: enabled RLS on %', cmd.object_identity;20      EXCEPTION21        WHEN OTHERS THEN22          RAISE LOG 'rls_auto_enable: failed to enable RLS on %', cmd.object_identity;23      END;24     ELSE25        RAISE LOG 'rls_auto_enable: skip % (either system schema or not in enforced list: %.)', cmd.object_identity, cmd.schema_name;26     END IF;27  END LOOP;28END;29$$;3031DROP EVENT TRIGGER IF EXISTS ensure_rls;32CREATE EVENT TRIGGER ensure_rls33ON ddl_command_end34WHEN TAG IN ('CREATE TABLE', 'CREATE TABLE AS', 'SELECT INTO')35EXECUTE FUNCTION rls_auto_enable();
```

![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ibHVjaWRlIGx1Y2lkZS13cmFwLXRleHQgdGV4dC1saWdodGVyIiBmaWxsPSJub25lIiBoZWlnaHQ9IjE0IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIHZpZXdib3g9IjAgMCAyNCAyNCIgd2lkdGg9IjE0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxsaW5lIHgxPSIzIiB4Mj0iMjEiIHkxPSI2IiB5Mj0iNiI+PC9saW5lPjxwYXRoIGQ9Ik0zIDEyaDE1YTMgMyAwIDEgMSAwIDZoLTQiPjwvcGF0aD48cG9seWxpbmUgcG9pbnRzPSIxNiAxNiAxNCAxOCAxNiAyMCI+PC9wb2x5bGluZT48bGluZSB4MT0iMyIgeDI9IjEwIiB5MT0iMTgiIHkyPSIxOCI+PC9saW5lPjwvc3ZnPg==){.lucide .lucide-wrap-text .text-lighter}

![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jb3B5IHRleHQtbGlnaHRlciIgZmlsbD0ibm9uZSIgaGVpZ2h0PSIxNCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiB2aWV3Ym94PSIwIDAgMjQgMjQiIHdpZHRoPSIxNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBoZWlnaHQ9IjE0IiByeD0iMiIgcnk9IjIiIHdpZHRoPSIxNCIgeD0iOCIgeT0iOCI+PC9yZWN0PjxwYXRoIGQ9Ik00IDE2Yy0xLjEgMC0yLS45LTItMlY0YzAtMS4xLjktMiAyLTJoMTBjMS4xIDAgMiAuOSAyIDIiPjwvcGF0aD48L3N2Zz4=){.lucide .lucide-copy .text-lighter}

Note that this applies to tables created after the trigger is installed. Existing tables still need RLS enabled manually.

![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0idy02IGgtNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Ym94PSIwIDAgMjIgMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNOC4xNTEzNyAxLjk1MTE3QzkuMzA2MTUgLTAuMDQ4ODI4MSAxMi4xOTQzIC0wLjA0ODgyODEgMTMuMzQ4MSAxLjk1MTE3TDIwLjcwMzEgMTQuNjk5MkMyMS44NTc0IDE2LjY5OTIgMjAuNDEzMSAxOS4xOTkyIDE4LjEwNCAxOS4xOTkySDMuMzk1MDJDMS4wODU5NCAxOS4xOTkyIC0wLjM1NjkzMyAxNi42OTkyIDAuNzk3MzY0IDE0LjY5OTJMOC4xNTEzNyAxLjk1MTE3Wk0xMS43NjY2IDE2LjAwODNDMTEuNDk3MSAxNi4yNzc4IDExLjEzMTMgMTYuNDI5MiAxMC43NSAxNi40MjkyQzEwLjM2ODcgMTYuNDI5MiAxMC4wMDI5IDE2LjI3NzggOS43MzM0IDE2LjAwODNDOS40NjM4NyAxNS43Mzg4IDkuMzEyNSAxNS4zNzMgOS4zMTI1IDE0Ljk5MTdDOS4zMTI1IDE0LjkzMDcgOS4zMTY0MSAxNC44NzA2IDkuMzIzNzMgMTQuODExQzkuMzM1NDUgMTQuNzE5NyA5LjM1NTQ3IDE0LjYzMDQgOS4zODM3OSAxNC41NDM5TDkuNDE0MDYgMTQuNDYwOUM5LjQ4NTg0IDE0LjI4MDMgOS41OTM3NSAxNC4xMTQ3IDkuNzMzNCAxMy45NzUxQzEwLjAwMjkgMTMuNzA1NiAxMC4zNjg3IDEzLjU1NDIgMTAuNzUgMTMuNTU0MkMxMS4xMzEzIDEzLjU1NDIgMTEuNDk3MSAxMy43MDU2IDExLjc2NjYgMTMuOTc1MUMxMi4wMzYxIDE0LjI0NDYgMTIuMTg3NSAxNC42MTA0IDEyLjE4NzUgMTQuOTkxN0MxMi4xODc1IDE1LjM3MyAxMi4wMzYxIDE1LjczODggMTEuNzY2NiAxNi4wMDgzWk0xMC43NSA0LjY5OTcxQzExLjAzMTcgNC42OTk3MSAxMS4zMDIyIDQuODExNTIgMTEuNTAxNSA1LjAxMDc0QzExLjcwMDcgNS4yMDk5NiAxMS44MTI1IDUuNDgwNDcgMTEuODEyNSA1Ljc2MjIxVjExLjA3NDdDMTEuODEyNSAxMS4zNTY0IDExLjcwMDcgMTEuNjI3IDExLjUwMTUgMTEuODI2MkMxMS4zMDIyIDEyLjAyNTQgMTEuMDMxNyAxMi4xMzcyIDEwLjc1IDEyLjEzNzJDMTAuNDY4MyAxMi4xMzcyIDEwLjE5NzggMTIuMDI1NCA5Ljk5ODU0IDExLjgyNjJDOS43OTkzMiAxMS42MjcgOS42ODc1IDExLjM1NjQgOS42ODc1IDExLjA3NDdWNS43NjIyMUM5LjY4NzUgNS40ODA0NyA5Ljc5OTMyIDUuMjA5OTYgOS45OTg1NCA1LjAxMDc0QzEwLjE5NzggNC44MTE1MiAxMC40NjgzIDQuNjk5NzEgMTAuNzUgNC42OTk3MVoiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PC9wYXRoPjwvc3ZnPg==){.w-6 .h-6}

<div>

##### \`auth.uid()\` Returns \`null\` When Unauthenticated {#auth.uid-returns-null-when-unauthenticated .mb-0.5 .text .mt-0.5 .flex .gap-3 .text-sm}

When a request is made without an authenticated user (e.g., no access token is provided or the session has expired), `auth.uid()` returns `null`.

This means that a policy like:

``` {.grid .grid-cols-[auto_1fr]}
1USING (auth.uid() = user_id)
```

![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ibHVjaWRlIGx1Y2lkZS13cmFwLXRleHQgdGV4dC1saWdodGVyIiBmaWxsPSJub25lIiBoZWlnaHQ9IjE0IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIHZpZXdib3g9IjAgMCAyNCAyNCIgd2lkdGg9IjE0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxsaW5lIHgxPSIzIiB4Mj0iMjEiIHkxPSI2IiB5Mj0iNiI+PC9saW5lPjxwYXRoIGQ9Ik0zIDEyaDE1YTMgMyAwIDEgMSAwIDZoLTQiPjwvcGF0aD48cG9seWxpbmUgcG9pbnRzPSIxNiAxNiAxNCAxOCAxNiAyMCI+PC9wb2x5bGluZT48bGluZSB4MT0iMyIgeDI9IjEwIiB5MT0iMTgiIHkyPSIxOCI+PC9saW5lPjwvc3ZnPg==){.lucide .lucide-wrap-text .text-lighter}

![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jb3B5IHRleHQtbGlnaHRlciIgZmlsbD0ibm9uZSIgaGVpZ2h0PSIxNCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiB2aWV3Ym94PSIwIDAgMjQgMjQiIHdpZHRoPSIxNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBoZWlnaHQ9IjE0IiByeD0iMiIgcnk9IjIiIHdpZHRoPSIxNCIgeD0iOCIgeT0iOCI+PC9yZWN0PjxwYXRoIGQ9Ik00IDE2Yy0xLjEgMC0yLS45LTItMlY0YzAtMS4xLjktMiAyLTJoMTBjMS4xIDAgMiAuOSAyIDIiPjwvcGF0aD48L3N2Zz4=){.lucide .lucide-copy .text-lighter}

will silently fail for unauthenticated users, because:

``` {.grid .grid-cols-[auto_1fr]}
1null = user_id
```

![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ibHVjaWRlIGx1Y2lkZS13cmFwLXRleHQgdGV4dC1saWdodGVyIiBmaWxsPSJub25lIiBoZWlnaHQ9IjE0IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIHZpZXdib3g9IjAgMCAyNCAyNCIgd2lkdGg9IjE0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxsaW5lIHgxPSIzIiB4Mj0iMjEiIHkxPSI2IiB5Mj0iNiI+PC9saW5lPjxwYXRoIGQ9Ik0zIDEyaDE1YTMgMyAwIDEgMSAwIDZoLTQiPjwvcGF0aD48cG9seWxpbmUgcG9pbnRzPSIxNiAxNiAxNCAxOCAxNiAyMCI+PC9wb2x5bGluZT48bGluZSB4MT0iMyIgeDI9IjEwIiB5MT0iMTgiIHkyPSIxOCI+PC9saW5lPjwvc3ZnPg==){.lucide .lucide-wrap-text .text-lighter}

![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jb3B5IHRleHQtbGlnaHRlciIgZmlsbD0ibm9uZSIgaGVpZ2h0PSIxNCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiB2aWV3Ym94PSIwIDAgMjQgMjQiIHdpZHRoPSIxNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBoZWlnaHQ9IjE0IiByeD0iMiIgcnk9IjIiIHdpZHRoPSIxNCIgeD0iOCIgeT0iOCI+PC9yZWN0PjxwYXRoIGQ9Ik00IDE2Yy0xLjEgMC0yLS45LTItMlY0YzAtMS4xLjktMiAyLTJoMTBjMS4xIDAgMiAuOSAyIDIiPjwvcGF0aD48L3N2Zz4=){.lucide .lucide-copy .text-lighter}

is always false in SQL.

To avoid confusion and make your intention clear, we recommend explicitly checking for authentication:

``` {.grid .grid-cols-[auto_1fr]}
1USING (auth.uid() IS NOT NULL AND auth.uid() = user_id)
```

![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ibHVjaWRlIGx1Y2lkZS13cmFwLXRleHQgdGV4dC1saWdodGVyIiBmaWxsPSJub25lIiBoZWlnaHQ9IjE0IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIHZpZXdib3g9IjAgMCAyNCAyNCIgd2lkdGg9IjE0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxsaW5lIHgxPSIzIiB4Mj0iMjEiIHkxPSI2IiB5Mj0iNiI+PC9saW5lPjxwYXRoIGQ9Ik0zIDEyaDE1YTMgMyAwIDEgMSAwIDZoLTQiPjwvcGF0aD48cG9seWxpbmUgcG9pbnRzPSIxNiAxNiAxNCAxOCAxNiAyMCI+PC9wb2x5bGluZT48bGluZSB4MT0iMyIgeDI9IjEwIiB5MT0iMTgiIHkyPSIxOCI+PC9saW5lPjwvc3ZnPg==){.lucide .lucide-wrap-text .text-lighter}

![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jb3B5IHRleHQtbGlnaHRlciIgZmlsbD0ibm9uZSIgaGVpZ2h0PSIxNCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiB2aWV3Ym94PSIwIDAgMjQgMjQiIHdpZHRoPSIxNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBoZWlnaHQ9IjE0IiByeD0iMiIgcnk9IjIiIHdpZHRoPSIxNCIgeD0iOCIgeT0iOCI+PC9yZWN0PjxwYXRoIGQ9Ik00IDE2Yy0xLjEgMC0yLS45LTItMlY0YzAtMS4xLjktMiAyLTJoMTBjMS4xIDAgMiAuOSAyIDIiPjwvcGF0aD48L3N2Zz4=){.lucide .lucide-copy .text-lighter}

## Authenticated and unauthenticated roles[\#](#authenticated-and-unauthenticated-roles){.ml-2 .opacity-0 .focus:opacity-100 .group-hover:opacity-100 .transition} {#authenticated-and-unauthenticated-roles .group .scroll-mt-24}

Supabase maps every request to one of the roles:

-   `anon`: an unauthenticated request (the user is not logged in)
-   `authenticated`: an authenticated request (the user is logged in)

These are actually [Postgres Roles](/docs/guides/database/postgres/roles). You can use these roles within your Policies using the `TO` clause:

``` {.grid .grid-cols-[auto_1fr]}
1create policy "Profiles are viewable by everyone"2on profiles for select3to authenticated, anon4using ( true );56-- OR78create policy "Public profiles are viewable only by authenticated users"9on profiles for select10to authenticated11using ( true );
```

![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ibHVjaWRlIGx1Y2lkZS13cmFwLXRleHQgdGV4dC1saWdodGVyIiBmaWxsPSJub25lIiBoZWlnaHQ9IjE0IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIHZpZXdib3g9IjAgMCAyNCAyNCIgd2lkdGg9IjE0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxsaW5lIHgxPSIzIiB4Mj0iMjEiIHkxPSI2IiB5Mj0iNiI+PC9saW5lPjxwYXRoIGQ9Ik0zIDEyaDE1YTMgMyAwIDEgMSAwIDZoLTQiPjwvcGF0aD48cG9seWxpbmUgcG9pbnRzPSIxNiAxNiAxNCAxOCAxNiAyMCI+PC9wb2x5bGluZT48bGluZSB4MT0iMyIgeDI9IjEwIiB5MT0iMTgiIHkyPSIxOCI+PC9saW5lPjwvc3ZnPg==){.lucide .lucide-wrap-text .text-lighter}

![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jb3B5IHRleHQtbGlnaHRlciIgZmlsbD0ibm9uZSIgaGVpZ2h0PSIxNCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiB2aWV3Ym94PSIwIDAgMjQgMjQiIHdpZHRoPSIxNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBoZWlnaHQ9IjE0IiByeD0iMiIgcnk9IjIiIHdpZHRoPSIxNCIgeD0iOCIgeT0iOCI+PC9yZWN0PjxwYXRoIGQ9Ik00IDE2Yy0xLjEgMC0yLS45LTItMlY0YzAtMS4xLjktMiAyLTJoMTBjMS4xIDAgMiAuOSAyIDIiPjwvcGF0aD48L3N2Zz4=){.lucide .lucide-copy .text-lighter}

![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0idy02IGgtNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Ym94PSIwIDAgMjEgMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMC42MjUgOS44MjUyQzAuNjI1IDQuNDQwNDMgNC45OTAyMyAwLjA3NTE5NTMgMTAuMzc1IDAuMDc1MTk1M0MxNS43NTk4IDAuMDc1MTk1MyAyMC4xMjUgNC40NDA0MyAyMC4xMjUgOS44MjUyQzIwLjEyNSAxNS4yMSAxNS43NTk4IDE5LjU3NTIgMTAuMzc1IDE5LjU3NTJDNC45OTAyMyAxOS41NzUyIDAuNjI1IDE1LjIxIDAuNjI1IDkuODI1MlpNOS4zNTg0IDQuMzgxMzVDOS40NTExNyA0LjI4ODU3IDkuNTU1MTggNC4yMDk5NiA5LjY2Njk5IDQuMTQ2NDhDOS44ODA4NiA0LjAyNTM5IDEwLjEyNDUgMy45NjA0NSAxMC4zNzUgMy45NjA0NUMxMC41ODQ1IDMuOTYwNDUgMTAuNzg5NiA0LjAwNTg2IDEwLjk3NjYgNC4wOTIyOUMxMS4xMjk0IDQuMTYyNiAxMS4yNzA1IDQuMjYwMjUgMTEuMzkxNiA0LjM4MTM1QzExLjY2MTEgNC42NTA4OCAxMS44MTI1IDUuMDE2NiAxMS44MTI1IDUuMzk3OTVDMTEuODEyNSA1LjUyNDkgMTEuNzk1OSA1LjY0OTkgMTEuNzYzNyA1Ljc3MDAyQzExLjY5ODcgNi4wMTE3MiAxMS41NzE4IDYuMjM0MzggMTEuMzkxNiA2LjQxNDU1QzExLjEyMjEgNi42ODQwOCAxMC43NTYzIDYuODM1NDUgMTAuMzc1IDYuODM1NDVDOS45OTM2NSA2LjgzNTQ1IDkuNjI3OTMgNi42ODQwOCA5LjM1ODQgNi40MTQ1NUM5LjA4ODg3IDYuMTQ1MDIgOC45Mzc1IDUuNzc5MyA4LjkzNzUgNS4zOTc5NUM4LjkzNzUgNS4yOTQ5MiA4Ljk0ODczIDUuMTkyODcgOC45NzAyMSA1LjA5Mzc1QzkuMDI3ODMgNC44MjU2OCA5LjE2MTYyIDQuNTc4MTIgOS4zNTg0IDQuMzgxMzVaTTEwLjM3NSAxNS42ODk5QzEwLjA5MzMgMTUuNjg5OSA5LjgyMjc1IDE1LjU3ODEgOS42MjM1NCAxNS4zNzg5QzkuNDI0MzIgMTUuMTc5NyA5LjMxMjUgMTQuOTA5MiA5LjMxMjUgMTQuNjI3NFY5LjMxNDk0QzkuMzEyNSA5LjAzMzIgOS40MjQzMiA4Ljc2MjcgOS42MjM1NCA4LjU2MzQ4QzkuODIyNzUgOC4zNjQyNiAxMC4wOTMzIDguMjUyNDQgMTAuMzc1IDguMjUyNDRDMTAuNjU2NyA4LjI1MjQ0IDEwLjkyNzIgOC4zNjQyNiAxMS4xMjY1IDguNTYzNDhDMTEuMzI1NyA4Ljc2MjcgMTEuNDM3NSA5LjAzMzIgMTEuNDM3NSA5LjMxNDk0VjE0LjYyNzRDMTEuNDM3NSAxNC43OTQ0IDExLjM5NzkgMTQuOTU3NSAxMS4zMjQyIDE1LjEwNEMxMS4yNzM5IDE1LjIwNDYgMTEuMjA3NSAxNS4yOTc5IDExLjEyNjUgMTUuMzc4OUMxMC45MjcyIDE1LjU3ODEgMTAuNjU2NyAxNS42ODk5IDEwLjM3NSAxNS42ODk5WiIgZmlsbC1ydWxlPSJldmVub2RkIj48L3BhdGg+PC9zdmc+){.w-6 .h-6}

<div>

##### Anonymous user vs the anon key {#anonymous-user-vs-the-anon-key .mb-0.5 .text .mt-0.5 .flex .gap-3 .text-sm}

Using the `anon` Postgres role is different from an [anonymous user](/docs/guides/auth/auth-anonymous) in Supabase Auth. An anonymous user assumes the `authenticated` role to access the database and can be differentiated from a permanent user by checking the `is_anonymous` claim in the JWT.

## Creating policies[\#](#creating-policies){.ml-2 .opacity-0 .focus:opacity-100 .group-hover:opacity-100 .transition} {#creating-policies .group .scroll-mt-24}

Policies are SQL logic that you attach to a Postgres table. You can attach as many policies as you want to each table.

Supabase provides some [helpers](#helper-functions) that simplify RLS if you\'re using Supabase Auth. We\'ll use these helpers to illustrate some basic policies:

### SELECT policies[\#](#select-policies){.ml-2 .opacity-0 .focus:opacity-100 .group-hover:opacity-100 .transition} {#select-policies .group .scroll-mt-24}

You can specify select policies with the `using` clause.

Let\'s say you have a table called `profiles` in the public schema and you want to enable read access to everyone.

``` {.grid .grid-cols-[auto_1fr]}
1-- 1. Create table2create table profiles (3  id uuid primary key,4  user_id uuid references auth.users,5  avatar_url text6);78-- 2. Enable RLS9alter table profiles enable row level security;1011-- 3. Create Policy12create policy "Public profiles are visible to everyone."13on profiles for select14to anon         -- the Postgres Role (recommended)15using ( true ); -- the actual Policy
```

![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ibHVjaWRlIGx1Y2lkZS13cmFwLXRleHQgdGV4dC1saWdodGVyIiBmaWxsPSJub25lIiBoZWlnaHQ9IjE0IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIHZpZXdib3g9IjAgMCAyNCAyNCIgd2lkdGg9IjE0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxsaW5lIHgxPSIzIiB4Mj0iMjEiIHkxPSI2IiB5Mj0iNiI+PC9saW5lPjxwYXRoIGQ9Ik0zIDEyaDE1YTMgMyAwIDEgMSAwIDZoLTQiPjwvcGF0aD48cG9seWxpbmUgcG9pbnRzPSIxNiAxNiAxNCAxOCAxNiAyMCI+PC9wb2x5bGluZT48bGluZSB4MT0iMyIgeDI9IjEwIiB5MT0iMTgiIHkyPSIxOCI+PC9saW5lPjwvc3ZnPg==){.lucide .lucide-wrap-text .text-lighter}

![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jb3B5IHRleHQtbGlnaHRlciIgZmlsbD0ibm9uZSIgaGVpZ2h0PSIxNCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiB2aWV3Ym94PSIwIDAgMjQgMjQiIHdpZHRoPSIxNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBoZWlnaHQ9IjE0IiByeD0iMiIgcnk9IjIiIHdpZHRoPSIxNCIgeD0iOCIgeT0iOCI+PC9yZWN0PjxwYXRoIGQ9Ik00IDE2Yy0xLjEgMC0yLS45LTItMlY0YzAtMS4xLjktMiAyLTJoMTBjMS4xIDAgMiAuOSAyIDIiPjwvcGF0aD48L3N2Zz4=){.lucide .lucide-copy .text-lighter}

Alternatively, if you only wanted users to be able to see their own profiles:

``` {.grid .grid-cols-[auto_1fr]}
1create policy "User can see their own profile only."2on profiles3for select using ( (select auth.uid()) = user_id );
```

![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ibHVjaWRlIGx1Y2lkZS13cmFwLXRleHQgdGV4dC1saWdodGVyIiBmaWxsPSJub25lIiBoZWlnaHQ9IjE0IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIHZpZXdib3g9IjAgMCAyNCAyNCIgd2lkdGg9IjE0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxsaW5lIHgxPSIzIiB4Mj0iMjEiIHkxPSI2IiB5Mj0iNiI+PC9saW5lPjxwYXRoIGQ9Ik0zIDEyaDE1YTMgMyAwIDEgMSAwIDZoLTQiPjwvcGF0aD48cG9seWxpbmUgcG9pbnRzPSIxNiAxNiAxNCAxOCAxNiAyMCI+PC9wb2x5bGluZT48bGluZSB4MT0iMyIgeDI9IjEwIiB5MT0iMTgiIHkyPSIxOCI+PC9saW5lPjwvc3ZnPg==){.lucide .lucide-wrap-text .text-lighter}

![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jb3B5IHRleHQtbGlnaHRlciIgZmlsbD0ibm9uZSIgaGVpZ2h0PSIxNCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiB2aWV3Ym94PSIwIDAgMjQgMjQiIHdpZHRoPSIxNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBoZWlnaHQ9IjE0IiByeD0iMiIgcnk9IjIiIHdpZHRoPSIxNCIgeD0iOCIgeT0iOCI+PC9yZWN0PjxwYXRoIGQ9Ik00IDE2Yy0xLjEgMC0yLS45LTItMlY0YzAtMS4xLjktMiAyLTJoMTBjMS4xIDAgMiAuOSAyIDIiPjwvcGF0aD48L3N2Zz4=){.lucide .lucide-copy .text-lighter}

### INSERT policies[\#](#insert-policies){.ml-2 .opacity-0 .focus:opacity-100 .group-hover:opacity-100 .transition} {#insert-policies .group .scroll-mt-24}

You can specify insert policies with the `with check` clause. The `with check` expression ensures that any new row data adheres to the policy constraints.

Let\'s say you have a table called `profiles` in the public schema and you only want users to be able to create a profile for themselves. In that case, we want to check their User ID matches the value that they are trying to insert:

``` {.grid .grid-cols-[auto_1fr]}
1-- 1. Create table2create table profiles (3  id uuid primary key,4  user_id uuid references auth.users,5  avatar_url text6);78-- 2. Enable RLS9alter table profiles enable row level security;1011-- 3. Create Policy12create policy "Users can create a profile."13on profiles for insert14to authenticated                          -- the Postgres Role (recommended)15with check ( (select auth.uid()) = user_id );      -- the actual Policy
```

![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ibHVjaWRlIGx1Y2lkZS13cmFwLXRleHQgdGV4dC1saWdodGVyIiBmaWxsPSJub25lIiBoZWlnaHQ9IjE0IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIHZpZXdib3g9IjAgMCAyNCAyNCIgd2lkdGg9IjE0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxsaW5lIHgxPSIzIiB4Mj0iMjEiIHkxPSI2IiB5Mj0iNiI+PC9saW5lPjxwYXRoIGQ9Ik0zIDEyaDE1YTMgMyAwIDEgMSAwIDZoLTQiPjwvcGF0aD48cG9seWxpbmUgcG9pbnRzPSIxNiAxNiAxNCAxOCAxNiAyMCI+PC9wb2x5bGluZT48bGluZSB4MT0iMyIgeDI9IjEwIiB5MT0iMTgiIHkyPSIxOCI+PC9saW5lPjwvc3ZnPg==){.lucide .lucide-wrap-text .text-lighter}

![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jb3B5IHRleHQtbGlnaHRlciIgZmlsbD0ibm9uZSIgaGVpZ2h0PSIxNCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiB2aWV3Ym94PSIwIDAgMjQgMjQiIHdpZHRoPSIxNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBoZWlnaHQ9IjE0IiByeD0iMiIgcnk9IjIiIHdpZHRoPSIxNCIgeD0iOCIgeT0iOCI+PC9yZWN0PjxwYXRoIGQ9Ik00IDE2Yy0xLjEgMC0yLS45LTItMlY0YzAtMS4xLjktMiAyLTJoMTBjMS4xIDAgMiAuOSAyIDIiPjwvcGF0aD48L3N2Zz4=){.lucide .lucide-copy .text-lighter}

### UPDATE policies[\#](#update-policies){.ml-2 .opacity-0 .focus:opacity-100 .group-hover:opacity-100 .transition} {#update-policies .group .scroll-mt-24}

You can specify update policies by combining both the `using` and `with check` expressions.

The `using` clause represents the condition that must be true for the update to be allowed, and `with check` clause ensures that the updates made adhere to the policy constraints.

Let\'s say you have a table called `profiles` in the public schema and you only want users to be able to update their own profile.

You can create a policy where the `using` clause checks if the user owns the profile being updated. And the `with check` clause ensures that, in the resultant row, users do not change the `user_id` to a value that is not equal to their User ID, maintaining that the modified profile still meets the ownership condition.

``` {.grid .grid-cols-[auto_1fr]}
1-- 1. Create table2create table profiles (3  id uuid primary key,4  user_id uuid references auth.users,5  avatar_url text6);78-- 2. Enable RLS9alter table profiles enable row level security;1011-- 3. Create Policy12create policy "Users can update their own profile."13on profiles for update14to authenticated                    -- the Postgres Role (recommended)15using ( (select auth.uid()) = user_id )       -- checks if the existing row complies with the policy expression16with check ( (select auth.uid()) = user_id ); -- checks if the new row complies with the policy expression
```

![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ibHVjaWRlIGx1Y2lkZS13cmFwLXRleHQgdGV4dC1saWdodGVyIiBmaWxsPSJub25lIiBoZWlnaHQ9IjE0IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIHZpZXdib3g9IjAgMCAyNCAyNCIgd2lkdGg9IjE0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxsaW5lIHgxPSIzIiB4Mj0iMjEiIHkxPSI2IiB5Mj0iNiI+PC9saW5lPjxwYXRoIGQ9Ik0zIDEyaDE1YTMgMyAwIDEgMSAwIDZoLTQiPjwvcGF0aD48cG9seWxpbmUgcG9pbnRzPSIxNiAxNiAxNCAxOCAxNiAyMCI+PC9wb2x5bGluZT48bGluZSB4MT0iMyIgeDI9IjEwIiB5MT0iMTgiIHkyPSIxOCI+PC9saW5lPjwvc3ZnPg==){.lucide .lucide-wrap-text .text-lighter}

![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jb3B5IHRleHQtbGlnaHRlciIgZmlsbD0ibm9uZSIgaGVpZ2h0PSIxNCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiB2aWV3Ym94PSIwIDAgMjQgMjQiIHdpZHRoPSIxNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBoZWlnaHQ9IjE0IiByeD0iMiIgcnk9IjIiIHdpZHRoPSIxNCIgeD0iOCIgeT0iOCI+PC9yZWN0PjxwYXRoIGQ9Ik00IDE2Yy0xLjEgMC0yLS45LTItMlY0YzAtMS4xLjktMiAyLTJoMTBjMS4xIDAgMiAuOSAyIDIiPjwvcGF0aD48L3N2Zz4=){.lucide .lucide-copy .text-lighter}

If no `with check` expression is defined, then the `using` expression will be used both to determine which rows are visible (normal USING case) and which new rows will be allowed to be added (WITH CHECK case).

![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0idy02IGgtNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Ym94PSIwIDAgMjIgMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNOC4xNTEzNyAxLjk1MTE3QzkuMzA2MTUgLTAuMDQ4ODI4MSAxMi4xOTQzIC0wLjA0ODgyODEgMTMuMzQ4MSAxLjk1MTE3TDIwLjcwMzEgMTQuNjk5MkMyMS44NTc0IDE2LjY5OTIgMjAuNDEzMSAxOS4xOTkyIDE4LjEwNCAxOS4xOTkySDMuMzk1MDJDMS4wODU5NCAxOS4xOTkyIC0wLjM1NjkzMyAxNi42OTkyIDAuNzk3MzY0IDE0LjY5OTJMOC4xNTEzNyAxLjk1MTE3Wk0xMS43NjY2IDE2LjAwODNDMTEuNDk3MSAxNi4yNzc4IDExLjEzMTMgMTYuNDI5MiAxMC43NSAxNi40MjkyQzEwLjM2ODcgMTYuNDI5MiAxMC4wMDI5IDE2LjI3NzggOS43MzM0IDE2LjAwODNDOS40NjM4NyAxNS43Mzg4IDkuMzEyNSAxNS4zNzMgOS4zMTI1IDE0Ljk5MTdDOS4zMTI1IDE0LjkzMDcgOS4zMTY0MSAxNC44NzA2IDkuMzIzNzMgMTQuODExQzkuMzM1NDUgMTQuNzE5NyA5LjM1NTQ3IDE0LjYzMDQgOS4zODM3OSAxNC41NDM5TDkuNDE0MDYgMTQuNDYwOUM5LjQ4NTg0IDE0LjI4MDMgOS41OTM3NSAxNC4xMTQ3IDkuNzMzNCAxMy45NzUxQzEwLjAwMjkgMTMuNzA1NiAxMC4zNjg3IDEzLjU1NDIgMTAuNzUgMTMuNTU0MkMxMS4xMzEzIDEzLjU1NDIgMTEuNDk3MSAxMy43MDU2IDExLjc2NjYgMTMuOTc1MUMxMi4wMzYxIDE0LjI0NDYgMTIuMTg3NSAxNC42MTA0IDEyLjE4NzUgMTQuOTkxN0MxMi4xODc1IDE1LjM3MyAxMi4wMzYxIDE1LjczODggMTEuNzY2NiAxNi4wMDgzWk0xMC43NSA0LjY5OTcxQzExLjAzMTcgNC42OTk3MSAxMS4zMDIyIDQuODExNTIgMTEuNTAxNSA1LjAxMDc0QzExLjcwMDcgNS4yMDk5NiAxMS44MTI1IDUuNDgwNDcgMTEuODEyNSA1Ljc2MjIxVjExLjA3NDdDMTEuODEyNSAxMS4zNTY0IDExLjcwMDcgMTEuNjI3IDExLjUwMTUgMTEuODI2MkMxMS4zMDIyIDEyLjAyNTQgMTEuMDMxNyAxMi4xMzcyIDEwLjc1IDEyLjEzNzJDMTAuNDY4MyAxMi4xMzcyIDEwLjE5NzggMTIuMDI1NCA5Ljk5ODU0IDExLjgyNjJDOS43OTkzMiAxMS42MjcgOS42ODc1IDExLjM1NjQgOS42ODc1IDExLjA3NDdWNS43NjIyMUM5LjY4NzUgNS40ODA0NyA5Ljc5OTMyIDUuMjA5OTYgOS45OTg1NCA1LjAxMDc0QzEwLjE5NzggNC44MTE1MiAxMC40NjgzIDQuNjk5NzEgMTAuNzUgNC42OTk3MVoiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PC9wYXRoPjwvc3ZnPg==){.w-6 .h-6}

To perform an `UPDATE` operation, a corresponding [`SELECT` policy](#select-policies) is required. Without a `SELECT` policy, the `UPDATE` operation will not work as expected.

### DELETE policies[\#](#delete-policies){.ml-2 .opacity-0 .focus:opacity-100 .group-hover:opacity-100 .transition} {#delete-policies .group .scroll-mt-24}

You can specify delete policies with the `using` clause.

Let\'s say you have a table called `profiles` in the public schema and you only want users to be able to delete their own profile:

``` {.grid .grid-cols-[auto_1fr]}
1-- 1. Create table2create table profiles (3  id uuid primary key,4  user_id uuid references auth.users,5  avatar_url text6);78-- 2. Enable RLS9alter table profiles enable row level security;1011-- 3. Create Policy12create policy "Users can delete a profile."13on profiles for delete14to authenticated                     -- the Postgres Role (recommended)15using ( (select auth.uid()) = user_id );      -- the actual Policy
```

![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ibHVjaWRlIGx1Y2lkZS13cmFwLXRleHQgdGV4dC1saWdodGVyIiBmaWxsPSJub25lIiBoZWlnaHQ9IjE0IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIHZpZXdib3g9IjAgMCAyNCAyNCIgd2lkdGg9IjE0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxsaW5lIHgxPSIzIiB4Mj0iMjEiIHkxPSI2IiB5Mj0iNiI+PC9saW5lPjxwYXRoIGQ9Ik0zIDEyaDE1YTMgMyAwIDEgMSAwIDZoLTQiPjwvcGF0aD48cG9seWxpbmUgcG9pbnRzPSIxNiAxNiAxNCAxOCAxNiAyMCI+PC9wb2x5bGluZT48bGluZSB4MT0iMyIgeDI9IjEwIiB5MT0iMTgiIHkyPSIxOCI+PC9saW5lPjwvc3ZnPg==){.lucide .lucide-wrap-text .text-lighter}

![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jb3B5IHRleHQtbGlnaHRlciIgZmlsbD0ibm9uZSIgaGVpZ2h0PSIxNCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiB2aWV3Ym94PSIwIDAgMjQgMjQiIHdpZHRoPSIxNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBoZWlnaHQ9IjE0IiByeD0iMiIgcnk9IjIiIHdpZHRoPSIxNCIgeD0iOCIgeT0iOCI+PC9yZWN0PjxwYXRoIGQ9Ik00IDE2Yy0xLjEgMC0yLS45LTItMlY0YzAtMS4xLjktMiAyLTJoMTBjMS4xIDAgMiAuOSAyIDIiPjwvcGF0aD48L3N2Zz4=){.lucide .lucide-copy .text-lighter}

### Views[\#](#views){.ml-2 .opacity-0 .focus:opacity-100 .group-hover:opacity-100 .transition} {#views .group .scroll-mt-24}

Views bypass RLS by default because they are usually created with the `postgres` user. This is a feature of Postgres, which automatically creates views with `security definer`.

In Postgres 15 and above, you can make a view obey the RLS policies of the underlying tables when invoked by `anon` and `authenticated` roles by setting `security_invoker = true`.

``` {.grid .grid-cols-[auto_1fr]}
1create view <VIEW_NAME>2with(security_invoker = true)3as select <QUERY>
```

![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ibHVjaWRlIGx1Y2lkZS13cmFwLXRleHQgdGV4dC1saWdodGVyIiBmaWxsPSJub25lIiBoZWlnaHQ9IjE0IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIHZpZXdib3g9IjAgMCAyNCAyNCIgd2lkdGg9IjE0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxsaW5lIHgxPSIzIiB4Mj0iMjEiIHkxPSI2IiB5Mj0iNiI+PC9saW5lPjxwYXRoIGQ9Ik0zIDEyaDE1YTMgMyAwIDEgMSAwIDZoLTQiPjwvcGF0aD48cG9seWxpbmUgcG9pbnRzPSIxNiAxNiAxNCAxOCAxNiAyMCI+PC9wb2x5bGluZT48bGluZSB4MT0iMyIgeDI9IjEwIiB5MT0iMTgiIHkyPSIxOCI+PC9saW5lPjwvc3ZnPg==){.lucide .lucide-wrap-text .text-lighter}

![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jb3B5IHRleHQtbGlnaHRlciIgZmlsbD0ibm9uZSIgaGVpZ2h0PSIxNCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiB2aWV3Ym94PSIwIDAgMjQgMjQiIHdpZHRoPSIxNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBoZWlnaHQ9IjE0IiByeD0iMiIgcnk9IjIiIHdpZHRoPSIxNCIgeD0iOCIgeT0iOCI+PC9yZWN0PjxwYXRoIGQ9Ik00IDE2Yy0xLjEgMC0yLS45LTItMlY0YzAtMS4xLjktMiAyLTJoMTBjMS4xIDAgMiAuOSAyIDIiPjwvcGF0aD48L3N2Zz4=){.lucide .lucide-copy .text-lighter}

In older versions of Postgres, protect your views by revoking access from the `anon` and `authenticated` roles, or by putting them in an unexposed schema.

## Helper functions[\#](#helper-functions){.ml-2 .opacity-0 .focus:opacity-100 .group-hover:opacity-100 .transition} {#helper-functions .group .scroll-mt-24}

Supabase provides some helper functions that make it easier to write Policies.

### `auth.uid()`[\#](#authuid){.ml-2 .opacity-0 .focus:opacity-100 .group-hover:opacity-100 .transition} {#authuid .group .scroll-mt-24}

Returns the ID of the user making the request.

### `auth.jwt()`[\#](#authjwt){.ml-2 .opacity-0 .focus:opacity-100 .group-hover:opacity-100 .transition} {#authjwt .group .scroll-mt-24}

![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0idy02IGgtNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Ym94PSIwIDAgMjIgMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNOC4xNTEzNyAxLjk1MTE3QzkuMzA2MTUgLTAuMDQ4ODI4MSAxMi4xOTQzIC0wLjA0ODgyODEgMTMuMzQ4MSAxLjk1MTE3TDIwLjcwMzEgMTQuNjk5MkMyMS44NTc0IDE2LjY5OTIgMjAuNDEzMSAxOS4xOTkyIDE4LjEwNCAxOS4xOTkySDMuMzk1MDJDMS4wODU5NCAxOS4xOTkyIC0wLjM1NjkzMyAxNi42OTkyIDAuNzk3MzY0IDE0LjY5OTJMOC4xNTEzNyAxLjk1MTE3Wk0xMS43NjY2IDE2LjAwODNDMTEuNDk3MSAxNi4yNzc4IDExLjEzMTMgMTYuNDI5MiAxMC43NSAxNi40MjkyQzEwLjM2ODcgMTYuNDI5MiAxMC4wMDI5IDE2LjI3NzggOS43MzM0IDE2LjAwODNDOS40NjM4NyAxNS43Mzg4IDkuMzEyNSAxNS4zNzMgOS4zMTI1IDE0Ljk5MTdDOS4zMTI1IDE0LjkzMDcgOS4zMTY0MSAxNC44NzA2IDkuMzIzNzMgMTQuODExQzkuMzM1NDUgMTQuNzE5NyA5LjM1NTQ3IDE0LjYzMDQgOS4zODM3OSAxNC41NDM5TDkuNDE0MDYgMTQuNDYwOUM5LjQ4NTg0IDE0LjI4MDMgOS41OTM3NSAxNC4xMTQ3IDkuNzMzNCAxMy45NzUxQzEwLjAwMjkgMTMuNzA1NiAxMC4zNjg3IDEzLjU1NDIgMTAuNzUgMTMuNTU0MkMxMS4xMzEzIDEzLjU1NDIgMTEuNDk3MSAxMy43MDU2IDExLjc2NjYgMTMuOTc1MUMxMi4wMzYxIDE0LjI0NDYgMTIuMTg3NSAxNC42MTA0IDEyLjE4NzUgMTQuOTkxN0MxMi4xODc1IDE1LjM3MyAxMi4wMzYxIDE1LjczODggMTEuNzY2NiAxNi4wMDgzWk0xMC43NSA0LjY5OTcxQzExLjAzMTcgNC42OTk3MSAxMS4zMDIyIDQuODExNTIgMTEuNTAxNSA1LjAxMDc0QzExLjcwMDcgNS4yMDk5NiAxMS44MTI1IDUuNDgwNDcgMTEuODEyNSA1Ljc2MjIxVjExLjA3NDdDMTEuODEyNSAxMS4zNTY0IDExLjcwMDcgMTEuNjI3IDExLjUwMTUgMTEuODI2MkMxMS4zMDIyIDEyLjAyNTQgMTEuMDMxNyAxMi4xMzcyIDEwLjc1IDEyLjEzNzJDMTAuNDY4MyAxMi4xMzcyIDEwLjE5NzggMTIuMDI1NCA5Ljk5ODU0IDExLjgyNjJDOS43OTkzMiAxMS42MjcgOS42ODc1IDExLjM1NjQgOS42ODc1IDExLjA3NDdWNS43NjIyMUM5LjY4NzUgNS40ODA0NyA5Ljc5OTMyIDUuMjA5OTYgOS45OTg1NCA1LjAxMDc0QzEwLjE5NzggNC44MTE1MiAxMC40NjgzIDQuNjk5NzEgMTAuNzUgNC42OTk3MVoiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PC9wYXRoPjwvc3ZnPg==){.w-6 .h-6}

Not all information present in the JWT should be used in RLS policies. For instance, creating an RLS policy that relies on the `user_metadata` claim can create security issues in your application as this information can be modified by authenticated end users.

Returns the JWT of the user making the request. Anything that you store in the user\'s `raw_app_meta_data` column or the `raw_user_meta_data` column will be accessible using this function. It\'s important to know the distinction between these two:

-   `raw_user_meta_data` - can be updated by the authenticated user using the `supabase.auth.update()` function. It is not a good place to store authorization data.
-   `raw_app_meta_data` - cannot be updated by the user, so it\'s a good place to store authorization data.

The `auth.jwt()` function is extremely versatile. For example, if you store some team data inside `app_metadata`, you can use it to determine whether a particular user belongs to a team. For example, if this was an array of IDs:

``` {.grid .grid-cols-[auto_1fr]}
1create policy "User is in team"2on my_table3to authenticated4using ( team_id in (select auth.jwt() -> 'app_metadata' -> 'teams'));
```

![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ibHVjaWRlIGx1Y2lkZS13cmFwLXRleHQgdGV4dC1saWdodGVyIiBmaWxsPSJub25lIiBoZWlnaHQ9IjE0IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIHZpZXdib3g9IjAgMCAyNCAyNCIgd2lkdGg9IjE0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxsaW5lIHgxPSIzIiB4Mj0iMjEiIHkxPSI2IiB5Mj0iNiI+PC9saW5lPjxwYXRoIGQ9Ik0zIDEyaDE1YTMgMyAwIDEgMSAwIDZoLTQiPjwvcGF0aD48cG9seWxpbmUgcG9pbnRzPSIxNiAxNiAxNCAxOCAxNiAyMCI+PC9wb2x5bGluZT48bGluZSB4MT0iMyIgeDI9IjEwIiB5MT0iMTgiIHkyPSIxOCI+PC9saW5lPjwvc3ZnPg==){.lucide .lucide-wrap-text .text-lighter}

![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jb3B5IHRleHQtbGlnaHRlciIgZmlsbD0ibm9uZSIgaGVpZ2h0PSIxNCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiB2aWV3Ym94PSIwIDAgMjQgMjQiIHdpZHRoPSIxNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBoZWlnaHQ9IjE0IiByeD0iMiIgcnk9IjIiIHdpZHRoPSIxNCIgeD0iOCIgeT0iOCI+PC9yZWN0PjxwYXRoIGQ9Ik00IDE2Yy0xLjEgMC0yLS45LTItMlY0YzAtMS4xLjktMiAyLTJoMTBjMS4xIDAgMiAuOSAyIDIiPjwvcGF0aD48L3N2Zz4=){.lucide .lucide-copy .text-lighter}

![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0idy02IGgtNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Ym94PSIwIDAgMjIgMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNOC4xNTEzNyAxLjk1MTE3QzkuMzA2MTUgLTAuMDQ4ODI4MSAxMi4xOTQzIC0wLjA0ODgyODEgMTMuMzQ4MSAxLjk1MTE3TDIwLjcwMzEgMTQuNjk5MkMyMS44NTc0IDE2LjY5OTIgMjAuNDEzMSAxOS4xOTkyIDE4LjEwNCAxOS4xOTkySDMuMzk1MDJDMS4wODU5NCAxOS4xOTkyIC0wLjM1NjkzMyAxNi42OTkyIDAuNzk3MzY0IDE0LjY5OTJMOC4xNTEzNyAxLjk1MTE3Wk0xMS43NjY2IDE2LjAwODNDMTEuNDk3MSAxNi4yNzc4IDExLjEzMTMgMTYuNDI5MiAxMC43NSAxNi40MjkyQzEwLjM2ODcgMTYuNDI5MiAxMC4wMDI5IDE2LjI3NzggOS43MzM0IDE2LjAwODNDOS40NjM4NyAxNS43Mzg4IDkuMzEyNSAxNS4zNzMgOS4zMTI1IDE0Ljk5MTdDOS4zMTI1IDE0LjkzMDcgOS4zMTY0MSAxNC44NzA2IDkuMzIzNzMgMTQuODExQzkuMzM1NDUgMTQuNzE5NyA5LjM1NTQ3IDE0LjYzMDQgOS4zODM3OSAxNC41NDM5TDkuNDE0MDYgMTQuNDYwOUM5LjQ4NTg0IDE0LjI4MDMgOS41OTM3NSAxNC4xMTQ3IDkuNzMzNCAxMy45NzUxQzEwLjAwMjkgMTMuNzA1NiAxMC4zNjg3IDEzLjU1NDIgMTAuNzUgMTMuNTU0MkMxMS4xMzEzIDEzLjU1NDIgMTEuNDk3MSAxMy43MDU2IDExLjc2NjYgMTMuOTc1MUMxMi4wMzYxIDE0LjI0NDYgMTIuMTg3NSAxNC42MTA0IDEyLjE4NzUgMTQuOTkxN0MxMi4xODc1IDE1LjM3MyAxMi4wMzYxIDE1LjczODggMTEuNzY2NiAxNi4wMDgzWk0xMC43NSA0LjY5OTcxQzExLjAzMTcgNC42OTk3MSAxMS4zMDIyIDQuODExNTIgMTEuNTAxNSA1LjAxMDc0QzExLjcwMDcgNS4yMDk5NiAxMS44MTI1IDUuNDgwNDcgMTEuODEyNSA1Ljc2MjIxVjExLjA3NDdDMTEuODEyNSAxMS4zNTY0IDExLjcwMDcgMTEuNjI3IDExLjUwMTUgMTEuODI2MkMxMS4zMDIyIDEyLjAyNTQgMTEuMDMxNyAxMi4xMzcyIDEwLjc1IDEyLjEzNzJDMTAuNDY4MyAxMi4xMzcyIDEwLjE5NzggMTIuMDI1NCA5Ljk5ODU0IDExLjgyNjJDOS43OTkzMiAxMS42MjcgOS42ODc1IDExLjM1NjQgOS42ODc1IDExLjA3NDdWNS43NjIyMUM5LjY4NzUgNS40ODA0NyA5Ljc5OTMyIDUuMjA5OTYgOS45OTg1NCA1LjAxMDc0QzEwLjE5NzggNC44MTE1MiAxMC40NjgzIDQuNjk5NzEgMTAuNzUgNC42OTk3MVoiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PC9wYXRoPjwvc3ZnPg==){.w-6 .h-6}

Keep in mind that a JWT is not always \"fresh\". In the example above, even if you remove a user from a team and update the `app_metadata` field, that will not be reflected using `auth.jwt()` until the user\'s JWT is refreshed.

Also, if you are using Cookies for Auth, then you must be mindful of the JWT size. Some browsers are limited to 4096 bytes for each cookie, and so the total size of your JWT should be small enough to fit inside this limitation.

### MFA[\#](#mfa){.ml-2 .opacity-0 .focus:opacity-100 .group-hover:opacity-100 .transition} {#mfa .group .scroll-mt-24}

The `auth.jwt()` function can be used to check for [Multi-Factor Authentication](/docs/guides/auth/auth-mfa#enforce-rules-for-mfa-logins). For example, you could restrict a user from updating their profile unless they have at least 2 levels of authentication (Assurance Level 2):

``` {.grid .grid-cols-[auto_1fr]}
1create policy "Restrict updates."2on profiles3as restrictive4for update5to authenticated using (6  (select auth.jwt()->>'aal') = 'aal2'7);
```

![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ibHVjaWRlIGx1Y2lkZS13cmFwLXRleHQgdGV4dC1saWdodGVyIiBmaWxsPSJub25lIiBoZWlnaHQ9IjE0IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIHZpZXdib3g9IjAgMCAyNCAyNCIgd2lkdGg9IjE0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxsaW5lIHgxPSIzIiB4Mj0iMjEiIHkxPSI2IiB5Mj0iNiI+PC9saW5lPjxwYXRoIGQ9Ik0zIDEyaDE1YTMgMyAwIDEgMSAwIDZoLTQiPjwvcGF0aD48cG9seWxpbmUgcG9pbnRzPSIxNiAxNiAxNCAxOCAxNiAyMCI+PC9wb2x5bGluZT48bGluZSB4MT0iMyIgeDI9IjEwIiB5MT0iMTgiIHkyPSIxOCI+PC9saW5lPjwvc3ZnPg==){.lucide .lucide-wrap-text .text-lighter}

![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jb3B5IHRleHQtbGlnaHRlciIgZmlsbD0ibm9uZSIgaGVpZ2h0PSIxNCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiB2aWV3Ym94PSIwIDAgMjQgMjQiIHdpZHRoPSIxNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBoZWlnaHQ9IjE0IiByeD0iMiIgcnk9IjIiIHdpZHRoPSIxNCIgeD0iOCIgeT0iOCI+PC9yZWN0PjxwYXRoIGQ9Ik00IDE2Yy0xLjEgMC0yLS45LTItMlY0YzAtMS4xLjktMiAyLTJoMTBjMS4xIDAgMiAuOSAyIDIiPjwvcGF0aD48L3N2Zz4=){.lucide .lucide-copy .text-lighter}

## Bypassing Row Level Security[\#](#bypassing-row-level-security){.ml-2 .opacity-0 .focus:opacity-100 .group-hover:opacity-100 .transition} {#bypassing-row-level-security .group .scroll-mt-24}

Supabase provides special \"Service\" keys, which can be used to bypass RLS. These should never be used in the browser or exposed to customers, but they are useful for administrative tasks.

![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0idy02IGgtNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Ym94PSIwIDAgMjEgMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMC42MjUgOS44MjUyQzAuNjI1IDQuNDQwNDMgNC45OTAyMyAwLjA3NTE5NTMgMTAuMzc1IDAuMDc1MTk1M0MxNS43NTk4IDAuMDc1MTk1MyAyMC4xMjUgNC40NDA0MyAyMC4xMjUgOS44MjUyQzIwLjEyNSAxNS4yMSAxNS43NTk4IDE5LjU3NTIgMTAuMzc1IDE5LjU3NTJDNC45OTAyMyAxOS41NzUyIDAuNjI1IDE1LjIxIDAuNjI1IDkuODI1MlpNOS4zNTg0IDQuMzgxMzVDOS40NTExNyA0LjI4ODU3IDkuNTU1MTggNC4yMDk5NiA5LjY2Njk5IDQuMTQ2NDhDOS44ODA4NiA0LjAyNTM5IDEwLjEyNDUgMy45NjA0NSAxMC4zNzUgMy45NjA0NUMxMC41ODQ1IDMuOTYwNDUgMTAuNzg5NiA0LjAwNTg2IDEwLjk3NjYgNC4wOTIyOUMxMS4xMjk0IDQuMTYyNiAxMS4yNzA1IDQuMjYwMjUgMTEuMzkxNiA0LjM4MTM1QzExLjY2MTEgNC42NTA4OCAxMS44MTI1IDUuMDE2NiAxMS44MTI1IDUuMzk3OTVDMTEuODEyNSA1LjUyNDkgMTEuNzk1OSA1LjY0OTkgMTEuNzYzNyA1Ljc3MDAyQzExLjY5ODcgNi4wMTE3MiAxMS41NzE4IDYuMjM0MzggMTEuMzkxNiA2LjQxNDU1QzExLjEyMjEgNi42ODQwOCAxMC43NTYzIDYuODM1NDUgMTAuMzc1IDYuODM1NDVDOS45OTM2NSA2LjgzNTQ1IDkuNjI3OTMgNi42ODQwOCA5LjM1ODQgNi40MTQ1NUM5LjA4ODg3IDYuMTQ1MDIgOC45Mzc1IDUuNzc5MyA4LjkzNzUgNS4zOTc5NUM4LjkzNzUgNS4yOTQ5MiA4Ljk0ODczIDUuMTkyODcgOC45NzAyMSA1LjA5Mzc1QzkuMDI3ODMgNC44MjU2OCA5LjE2MTYyIDQuNTc4MTIgOS4zNTg0IDQuMzgxMzVaTTEwLjM3NSAxNS42ODk5QzEwLjA5MzMgMTUuNjg5OSA5LjgyMjc1IDE1LjU3ODEgOS42MjM1NCAxNS4zNzg5QzkuNDI0MzIgMTUuMTc5NyA5LjMxMjUgMTQuOTA5MiA5LjMxMjUgMTQuNjI3NFY5LjMxNDk0QzkuMzEyNSA5LjAzMzIgOS40MjQzMiA4Ljc2MjcgOS42MjM1NCA4LjU2MzQ4QzkuODIyNzUgOC4zNjQyNiAxMC4wOTMzIDguMjUyNDQgMTAuMzc1IDguMjUyNDRDMTAuNjU2NyA4LjI1MjQ0IDEwLjkyNzIgOC4zNjQyNiAxMS4xMjY1IDguNTYzNDhDMTEuMzI1NyA4Ljc2MjcgMTEuNDM3NSA5LjAzMzIgMTEuNDM3NSA5LjMxNDk0VjE0LjYyNzRDMTEuNDM3NSAxNC43OTQ0IDExLjM5NzkgMTQuOTU3NSAxMS4zMjQyIDE1LjEwNEMxMS4yNzM5IDE1LjIwNDYgMTEuMjA3NSAxNS4yOTc5IDExLjEyNjUgMTUuMzc4OUMxMC45MjcyIDE1LjU3ODEgMTAuNjU2NyAxNS42ODk5IDEwLjM3NSAxNS42ODk5WiIgZmlsbC1ydWxlPSJldmVub2RkIj48L3BhdGg+PC9zdmc+){.w-6 .h-6}

Supabase will adhere to the RLS policy of the signed-in user, even if the client library is initialized with a Service Key.

You can also create new [Postgres Roles](/docs/guides/database/postgres/roles) which can bypass Row Level Security using the \"bypass RLS\" privilege:

``` {.grid .grid-cols-[auto_1fr]}
1alter role "role_name" with bypassrls;
```

![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ibHVjaWRlIGx1Y2lkZS13cmFwLXRleHQgdGV4dC1saWdodGVyIiBmaWxsPSJub25lIiBoZWlnaHQ9IjE0IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIHZpZXdib3g9IjAgMCAyNCAyNCIgd2lkdGg9IjE0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxsaW5lIHgxPSIzIiB4Mj0iMjEiIHkxPSI2IiB5Mj0iNiI+PC9saW5lPjxwYXRoIGQ9Ik0zIDEyaDE1YTMgMyAwIDEgMSAwIDZoLTQiPjwvcGF0aD48cG9seWxpbmUgcG9pbnRzPSIxNiAxNiAxNCAxOCAxNiAyMCI+PC9wb2x5bGluZT48bGluZSB4MT0iMyIgeDI9IjEwIiB5MT0iMTgiIHkyPSIxOCI+PC9saW5lPjwvc3ZnPg==){.lucide .lucide-wrap-text .text-lighter}

![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jb3B5IHRleHQtbGlnaHRlciIgZmlsbD0ibm9uZSIgaGVpZ2h0PSIxNCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiB2aWV3Ym94PSIwIDAgMjQgMjQiIHdpZHRoPSIxNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBoZWlnaHQ9IjE0IiByeD0iMiIgcnk9IjIiIHdpZHRoPSIxNCIgeD0iOCIgeT0iOCI+PC9yZWN0PjxwYXRoIGQ9Ik00IDE2Yy0xLjEgMC0yLS45LTItMlY0YzAtMS4xLjktMiAyLTJoMTBjMS4xIDAgMiAuOSAyIDIiPjwvcGF0aD48L3N2Zz4=){.lucide .lucide-copy .text-lighter}

This can be useful for system-level access. You should *never* share login credentials for any Postgres Role with this privilege.

## RLS performance recommendations[\#](#rls-performance-recommendations){.ml-2 .opacity-0 .focus:opacity-100 .group-hover:opacity-100 .transition} {#rls-performance-recommendations .group .scroll-mt-24}

Every authorization system has an impact on performance. While row level security is powerful, the performance impact is important to keep in mind. This is especially true for queries that scan every row in a table - like many `select` operations, including those using limit, offset, and ordering.

Based on a series of [tests](https://github.com/GaryAustin1/RLS-Performance), we have a few recommendations for RLS:

### Add indexes[\#](#add-indexes){.ml-2 .opacity-0 .focus:opacity-100 .group-hover:opacity-100 .transition} {#add-indexes .group .scroll-mt-24}

Make sure you\'ve added [indexes](/docs/guides/database/postgres/indexes) on any columns used within the Policies which are not already indexed (or primary keys). For a Policy like this:

``` {.grid .grid-cols-[auto_1fr]}
1create policy "rls_test_select" on test_table2to authenticated3using ( (select auth.uid()) = user_id );
```

![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ibHVjaWRlIGx1Y2lkZS13cmFwLXRleHQgdGV4dC1saWdodGVyIiBmaWxsPSJub25lIiBoZWlnaHQ9IjE0IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIHZpZXdib3g9IjAgMCAyNCAyNCIgd2lkdGg9IjE0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxsaW5lIHgxPSIzIiB4Mj0iMjEiIHkxPSI2IiB5Mj0iNiI+PC9saW5lPjxwYXRoIGQ9Ik0zIDEyaDE1YTMgMyAwIDEgMSAwIDZoLTQiPjwvcGF0aD48cG9seWxpbmUgcG9pbnRzPSIxNiAxNiAxNCAxOCAxNiAyMCI+PC9wb2x5bGluZT48bGluZSB4MT0iMyIgeDI9IjEwIiB5MT0iMTgiIHkyPSIxOCI+PC9saW5lPjwvc3ZnPg==){.lucide .lucide-wrap-text .text-lighter}

![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jb3B5IHRleHQtbGlnaHRlciIgZmlsbD0ibm9uZSIgaGVpZ2h0PSIxNCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiB2aWV3Ym94PSIwIDAgMjQgMjQiIHdpZHRoPSIxNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBoZWlnaHQ9IjE0IiByeD0iMiIgcnk9IjIiIHdpZHRoPSIxNCIgeD0iOCIgeT0iOCI+PC9yZWN0PjxwYXRoIGQ9Ik00IDE2Yy0xLjEgMC0yLS45LTItMlY0YzAtMS4xLjktMiAyLTJoMTBjMS4xIDAgMiAuOSAyIDIiPjwvcGF0aD48L3N2Zz4=){.lucide .lucide-copy .text-lighter}

You can add an index like:

``` {.grid .grid-cols-[auto_1fr]}
1create index userid2on test_table3using btree (user_id);
```

![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ibHVjaWRlIGx1Y2lkZS13cmFwLXRleHQgdGV4dC1saWdodGVyIiBmaWxsPSJub25lIiBoZWlnaHQ9IjE0IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIHZpZXdib3g9IjAgMCAyNCAyNCIgd2lkdGg9IjE0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxsaW5lIHgxPSIzIiB4Mj0iMjEiIHkxPSI2IiB5Mj0iNiI+PC9saW5lPjxwYXRoIGQ9Ik0zIDEyaDE1YTMgMyAwIDEgMSAwIDZoLTQiPjwvcGF0aD48cG9seWxpbmUgcG9pbnRzPSIxNiAxNiAxNCAxOCAxNiAyMCI+PC9wb2x5bGluZT48bGluZSB4MT0iMyIgeDI9IjEwIiB5MT0iMTgiIHkyPSIxOCI+PC9saW5lPjwvc3ZnPg==){.lucide .lucide-wrap-text .text-lighter}

![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jb3B5IHRleHQtbGlnaHRlciIgZmlsbD0ibm9uZSIgaGVpZ2h0PSIxNCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiB2aWV3Ym94PSIwIDAgMjQgMjQiIHdpZHRoPSIxNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBoZWlnaHQ9IjE0IiByeD0iMiIgcnk9IjIiIHdpZHRoPSIxNCIgeD0iOCIgeT0iOCI+PC9yZWN0PjxwYXRoIGQ9Ik00IDE2Yy0xLjEgMC0yLS45LTItMlY0YzAtMS4xLjktMiAyLTJoMTBjMS4xIDAgMiAuOSAyIDIiPjwvcGF0aD48L3N2Zz4=){.lucide .lucide-copy .text-lighter}

#### Benchmarks[\#](#benchmarks){.ml-2 .opacity-0 .focus:opacity-100 .group-hover:opacity-100 .transition} {#benchmarks .group .scroll-mt-24}

  ------------------------------------------------------------------------------------------------------------------------------------------------------------------
  Test                                                                                            Before (ms)    After (ms)     \% Improvement   Change
  ----------------------------------------------------------------------------------------------- -------------- -------------- ---------------- -------------------
  [test1-indexed](https://github.com/GaryAustin1/RLS-Performance/tree/main/tests/test1-indexed)   171            \< 0.1         99.94%           Before:\
                                                                                                                                                 No index\
                                                                                                                                                 \
                                                                                                                                                 After:\
                                                                                                                                                 `user_id` indexed

  ------------------------------------------------------------------------------------------------------------------------------------------------------------------

### Call functions with `select`[\#](#call-functions-with-select){.ml-2 .opacity-0 .focus:opacity-100 .group-hover:opacity-100 .transition} {#call-functions-with-select .group .scroll-mt-24}

You can use `select` statement to improve policies that use functions. For example, instead of this:

``` {.grid .grid-cols-[auto_1fr]}
1create policy "rls_test_select" on test_table2to authenticated3using ( auth.uid() = user_id );
```

![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ibHVjaWRlIGx1Y2lkZS13cmFwLXRleHQgdGV4dC1saWdodGVyIiBmaWxsPSJub25lIiBoZWlnaHQ9IjE0IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIHZpZXdib3g9IjAgMCAyNCAyNCIgd2lkdGg9IjE0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxsaW5lIHgxPSIzIiB4Mj0iMjEiIHkxPSI2IiB5Mj0iNiI+PC9saW5lPjxwYXRoIGQ9Ik0zIDEyaDE1YTMgMyAwIDEgMSAwIDZoLTQiPjwvcGF0aD48cG9seWxpbmUgcG9pbnRzPSIxNiAxNiAxNCAxOCAxNiAyMCI+PC9wb2x5bGluZT48bGluZSB4MT0iMyIgeDI9IjEwIiB5MT0iMTgiIHkyPSIxOCI+PC9saW5lPjwvc3ZnPg==){.lucide .lucide-wrap-text .text-lighter}

![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jb3B5IHRleHQtbGlnaHRlciIgZmlsbD0ibm9uZSIgaGVpZ2h0PSIxNCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiB2aWV3Ym94PSIwIDAgMjQgMjQiIHdpZHRoPSIxNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBoZWlnaHQ9IjE0IiByeD0iMiIgcnk9IjIiIHdpZHRoPSIxNCIgeD0iOCIgeT0iOCI+PC9yZWN0PjxwYXRoIGQ9Ik00IDE2Yy0xLjEgMC0yLS45LTItMlY0YzAtMS4xLjktMiAyLTJoMTBjMS4xIDAgMiAuOSAyIDIiPjwvcGF0aD48L3N2Zz4=){.lucide .lucide-copy .text-lighter}

You can do:

``` {.grid .grid-cols-[auto_1fr]}
1create policy "rls_test_select" on test_table2to authenticated3using ( (select auth.uid()) = user_id );
```

![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ibHVjaWRlIGx1Y2lkZS13cmFwLXRleHQgdGV4dC1saWdodGVyIiBmaWxsPSJub25lIiBoZWlnaHQ9IjE0IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIHZpZXdib3g9IjAgMCAyNCAyNCIgd2lkdGg9IjE0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxsaW5lIHgxPSIzIiB4Mj0iMjEiIHkxPSI2IiB5Mj0iNiI+PC9saW5lPjxwYXRoIGQ9Ik0zIDEyaDE1YTMgMyAwIDEgMSAwIDZoLTQiPjwvcGF0aD48cG9seWxpbmUgcG9pbnRzPSIxNiAxNiAxNCAxOCAxNiAyMCI+PC9wb2x5bGluZT48bGluZSB4MT0iMyIgeDI9IjEwIiB5MT0iMTgiIHkyPSIxOCI+PC9saW5lPjwvc3ZnPg==){.lucide .lucide-wrap-text .text-lighter}

![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jb3B5IHRleHQtbGlnaHRlciIgZmlsbD0ibm9uZSIgaGVpZ2h0PSIxNCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiB2aWV3Ym94PSIwIDAgMjQgMjQiIHdpZHRoPSIxNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBoZWlnaHQ9IjE0IiByeD0iMiIgcnk9IjIiIHdpZHRoPSIxNCIgeD0iOCIgeT0iOCI+PC9yZWN0PjxwYXRoIGQ9Ik00IDE2Yy0xLjEgMC0yLS45LTItMlY0YzAtMS4xLjktMiAyLTJoMTBjMS4xIDAgMiAuOSAyIDIiPjwvcGF0aD48L3N2Zz4=){.lucide .lucide-copy .text-lighter}

This method works well for JWT functions like `auth.uid()` and `auth.jwt()` as well as `security definer` Functions. Wrapping the function causes an `initPlan` to be run by the Postgres optimizer, which allows it to \"cache\" the results per-statement, rather than calling the function on each row.

![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0idy02IGgtNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Ym94PSIwIDAgMjIgMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNOC4xNTEzNyAxLjk1MTE3QzkuMzA2MTUgLTAuMDQ4ODI4MSAxMi4xOTQzIC0wLjA0ODgyODEgMTMuMzQ4MSAxLjk1MTE3TDIwLjcwMzEgMTQuNjk5MkMyMS44NTc0IDE2LjY5OTIgMjAuNDEzMSAxOS4xOTkyIDE4LjEwNCAxOS4xOTkySDMuMzk1MDJDMS4wODU5NCAxOS4xOTkyIC0wLjM1NjkzMyAxNi42OTkyIDAuNzk3MzY0IDE0LjY5OTJMOC4xNTEzNyAxLjk1MTE3Wk0xMS43NjY2IDE2LjAwODNDMTEuNDk3MSAxNi4yNzc4IDExLjEzMTMgMTYuNDI5MiAxMC43NSAxNi40MjkyQzEwLjM2ODcgMTYuNDI5MiAxMC4wMDI5IDE2LjI3NzggOS43MzM0IDE2LjAwODNDOS40NjM4NyAxNS43Mzg4IDkuMzEyNSAxNS4zNzMgOS4zMTI1IDE0Ljk5MTdDOS4zMTI1IDE0LjkzMDcgOS4zMTY0MSAxNC44NzA2IDkuMzIzNzMgMTQuODExQzkuMzM1NDUgMTQuNzE5NyA5LjM1NTQ3IDE0LjYzMDQgOS4zODM3OSAxNC41NDM5TDkuNDE0MDYgMTQuNDYwOUM5LjQ4NTg0IDE0LjI4MDMgOS41OTM3NSAxNC4xMTQ3IDkuNzMzNCAxMy45NzUxQzEwLjAwMjkgMTMuNzA1NiAxMC4zNjg3IDEzLjU1NDIgMTAuNzUgMTMuNTU0MkMxMS4xMzEzIDEzLjU1NDIgMTEuNDk3MSAxMy43MDU2IDExLjc2NjYgMTMuOTc1MUMxMi4wMzYxIDE0LjI0NDYgMTIuMTg3NSAxNC42MTA0IDEyLjE4NzUgMTQuOTkxN0MxMi4xODc1IDE1LjM3MyAxMi4wMzYxIDE1LjczODggMTEuNzY2NiAxNi4wMDgzWk0xMC43NSA0LjY5OTcxQzExLjAzMTcgNC42OTk3MSAxMS4zMDIyIDQuODExNTIgMTEuNTAxNSA1LjAxMDc0QzExLjcwMDcgNS4yMDk5NiAxMS44MTI1IDUuNDgwNDcgMTEuODEyNSA1Ljc2MjIxVjExLjA3NDdDMTEuODEyNSAxMS4zNTY0IDExLjcwMDcgMTEuNjI3IDExLjUwMTUgMTEuODI2MkMxMS4zMDIyIDEyLjAyNTQgMTEuMDMxNyAxMi4xMzcyIDEwLjc1IDEyLjEzNzJDMTAuNDY4MyAxMi4xMzcyIDEwLjE5NzggMTIuMDI1NCA5Ljk5ODU0IDExLjgyNjJDOS43OTkzMiAxMS42MjcgOS42ODc1IDExLjM1NjQgOS42ODc1IDExLjA3NDdWNS43NjIyMUM5LjY4NzUgNS40ODA0NyA5Ljc5OTMyIDUuMjA5OTYgOS45OTg1NCA1LjAxMDc0QzEwLjE5NzggNC44MTE1MiAxMC40NjgzIDQuNjk5NzEgMTAuNzUgNC42OTk3MVoiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PC9wYXRoPjwvc3ZnPg==){.w-6 .h-6}

You can only use this technique if the results of the query or function do not change based on the row data.

#### Benchmarks[\#](#benchmarks){.ml-2 .opacity-0 .focus:opacity-100 .group-hover:opacity-100 .transition} {#benchmarks .group .scroll-mt-24}

  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  Test                                                                                                                                Before (ms)    After (ms)     \% Improvement   Change
  ----------------------------------------------------------------------------------------------------------------------------------- -------------- -------------- ---------------- --------------------------------------------------------
  [test2a-wrappedSQL-uid](https://github.com/GaryAustin1/RLS-Performance/tree/main/tests/test2a-wrappedSQL-uid())                     179            9              94.97%           Before:\
                                                                                                                                                                                     `auth.uid() = user_id`\
                                                                                                                                                                                     \
                                                                                                                                                                                     After:\
                                                                                                                                                                                     `(select auth.uid()) = user_id`

  [test2b-wrappedSQL-isadmin](https://github.com/GaryAustin1/RLS-Performance/tree/main/tests/test2b-wrappedSQL-isadmin())             11,000         7              99.94%           Before:\
                                                                                                                                                                                     `is_admin()` *table join*\
                                                                                                                                                                                     \
                                                                                                                                                                                     After:\
                                                                                                                                                                                     `(select is_admin())` *table join*

  [test2c-wrappedSQL-two-functions](https://github.com/GaryAustin1/RLS-Performance/tree/main/tests/test2c-wrappedSQL-two-functions)   11,000         10             99.91%           Before:\
                                                                                                                                                                                     `is_admin() OR auth.uid() = user_id`\
                                                                                                                                                                                     \
                                                                                                                                                                                     After:\
                                                                                                                                                                                     `(select is_admin()) OR (select auth.uid() = user_id)`

  [test2d-wrappedSQL-sd-fun](https://github.com/GaryAustin1/RLS-Performance/tree/main/tests/test2d-wrappedSQL-sd-fun)                 178,000        12             99.993%          Before:\
                                                                                                                                                                                     `has_role() = role`\
                                                                                                                                                                                     \
                                                                                                                                                                                     After:\
                                                                                                                                                                                     (select has_role()) = role

  [test2e-wrappedSQL-sd-fun-array](https://github.com/GaryAustin1/RLS-Performance/tree/main/tests/test2e-wrappedSQL-sd-fun-array)     173000         16             99.991%          Before:\
                                                                                                                                                                                     `team_id=any(user_teams())`\
                                                                                                                                                                                     \
                                                                                                                                                                                     After:\
                                                                                                                                                                                     team_id=any(array(select user_teams()))
  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

### Add filters to every query[\#](#add-filters-to-every-query){.ml-2 .opacity-0 .focus:opacity-100 .group-hover:opacity-100 .transition} {#add-filters-to-every-query .group .scroll-mt-24}

Policies are \"implicit where clauses,\" so it\'s common to run `select` statements without any filters. This is a bad pattern for performance. Instead of doing this (JS client example):

``` {.grid .grid-cols-[auto_1fr]}
1const { data } = supabase2  .from('table')3  .select()
```

![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ibHVjaWRlIGx1Y2lkZS13cmFwLXRleHQgdGV4dC1saWdodGVyIiBmaWxsPSJub25lIiBoZWlnaHQ9IjE0IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIHZpZXdib3g9IjAgMCAyNCAyNCIgd2lkdGg9IjE0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxsaW5lIHgxPSIzIiB4Mj0iMjEiIHkxPSI2IiB5Mj0iNiI+PC9saW5lPjxwYXRoIGQ9Ik0zIDEyaDE1YTMgMyAwIDEgMSAwIDZoLTQiPjwvcGF0aD48cG9seWxpbmUgcG9pbnRzPSIxNiAxNiAxNCAxOCAxNiAyMCI+PC9wb2x5bGluZT48bGluZSB4MT0iMyIgeDI9IjEwIiB5MT0iMTgiIHkyPSIxOCI+PC9saW5lPjwvc3ZnPg==){.lucide .lucide-wrap-text .text-lighter}

![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jb3B5IHRleHQtbGlnaHRlciIgZmlsbD0ibm9uZSIgaGVpZ2h0PSIxNCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiB2aWV3Ym94PSIwIDAgMjQgMjQiIHdpZHRoPSIxNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBoZWlnaHQ9IjE0IiByeD0iMiIgcnk9IjIiIHdpZHRoPSIxNCIgeD0iOCIgeT0iOCI+PC9yZWN0PjxwYXRoIGQ9Ik00IDE2Yy0xLjEgMC0yLS45LTItMlY0YzAtMS4xLjktMiAyLTJoMTBjMS4xIDAgMiAuOSAyIDIiPjwvcGF0aD48L3N2Zz4=){.lucide .lucide-copy .text-lighter}

You should always add a filter:

``` {.grid .grid-cols-[auto_1fr]}
1const { data } = supabase2  .from('table')3  .select()4  .eq('user_id', userId)
```

![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ibHVjaWRlIGx1Y2lkZS13cmFwLXRleHQgdGV4dC1saWdodGVyIiBmaWxsPSJub25lIiBoZWlnaHQ9IjE0IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIHZpZXdib3g9IjAgMCAyNCAyNCIgd2lkdGg9IjE0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxsaW5lIHgxPSIzIiB4Mj0iMjEiIHkxPSI2IiB5Mj0iNiI+PC9saW5lPjxwYXRoIGQ9Ik0zIDEyaDE1YTMgMyAwIDEgMSAwIDZoLTQiPjwvcGF0aD48cG9seWxpbmUgcG9pbnRzPSIxNiAxNiAxNCAxOCAxNiAyMCI+PC9wb2x5bGluZT48bGluZSB4MT0iMyIgeDI9IjEwIiB5MT0iMTgiIHkyPSIxOCI+PC9saW5lPjwvc3ZnPg==){.lucide .lucide-wrap-text .text-lighter}

![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jb3B5IHRleHQtbGlnaHRlciIgZmlsbD0ibm9uZSIgaGVpZ2h0PSIxNCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiB2aWV3Ym94PSIwIDAgMjQgMjQiIHdpZHRoPSIxNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBoZWlnaHQ9IjE0IiByeD0iMiIgcnk9IjIiIHdpZHRoPSIxNCIgeD0iOCIgeT0iOCI+PC9yZWN0PjxwYXRoIGQ9Ik00IDE2Yy0xLjEgMC0yLS45LTItMlY0YzAtMS4xLjktMiAyLTJoMTBjMS4xIDAgMiAuOSAyIDIiPjwvcGF0aD48L3N2Zz4=){.lucide .lucide-copy .text-lighter}

Even though this duplicates the contents of the Policy, Postgres can use the filter to construct a better query plan.

#### Benchmarks[\#](#benchmarks){.ml-2 .opacity-0 .focus:opacity-100 .group-hover:opacity-100 .transition} {#benchmarks .group .scroll-mt-24}

  --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  Test                                                                                                Before (ms)    After (ms)     \% Improvement   Change
  --------------------------------------------------------------------------------------------------- -------------- -------------- ---------------- -----------------------------------
  [test3-addfilter](https://github.com/GaryAustin1/RLS-Performance/tree/main/tests/test3-addfilter)   171            9              94.74%           Before:\
                                                                                                                                                     `auth.uid() = user_id`\
                                                                                                                                                     \
                                                                                                                                                     After:\
                                                                                                                                                     add `.eq` or `where` on `user_id`

  --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

### Use security definer functions[\#](#use-security-definer-functions){.ml-2 .opacity-0 .focus:opacity-100 .group-hover:opacity-100 .transition} {#use-security-definer-functions .group .scroll-mt-24}

A \"security definer\" function runs using the same role that *created* the function. This means that if you create a role with a superuser (like `postgres`), then that function will have `bypassrls` privileges. For example, if you had a policy like this:

``` {.grid .grid-cols-[auto_1fr]}
1create policy "rls_test_select" on test_table2to authenticated3using (4  exists (5    select 1 from roles_table6    where (select auth.uid()) = user_id and role = 'good_role'7  )8);
```

![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ibHVjaWRlIGx1Y2lkZS13cmFwLXRleHQgdGV4dC1saWdodGVyIiBmaWxsPSJub25lIiBoZWlnaHQ9IjE0IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIHZpZXdib3g9IjAgMCAyNCAyNCIgd2lkdGg9IjE0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxsaW5lIHgxPSIzIiB4Mj0iMjEiIHkxPSI2IiB5Mj0iNiI+PC9saW5lPjxwYXRoIGQ9Ik0zIDEyaDE1YTMgMyAwIDEgMSAwIDZoLTQiPjwvcGF0aD48cG9seWxpbmUgcG9pbnRzPSIxNiAxNiAxNCAxOCAxNiAyMCI+PC9wb2x5bGluZT48bGluZSB4MT0iMyIgeDI9IjEwIiB5MT0iMTgiIHkyPSIxOCI+PC9saW5lPjwvc3ZnPg==){.lucide .lucide-wrap-text .text-lighter}

![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jb3B5IHRleHQtbGlnaHRlciIgZmlsbD0ibm9uZSIgaGVpZ2h0PSIxNCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiB2aWV3Ym94PSIwIDAgMjQgMjQiIHdpZHRoPSIxNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBoZWlnaHQ9IjE0IiByeD0iMiIgcnk9IjIiIHdpZHRoPSIxNCIgeD0iOCIgeT0iOCI+PC9yZWN0PjxwYXRoIGQ9Ik00IDE2Yy0xLjEgMC0yLS45LTItMlY0YzAtMS4xLjktMiAyLTJoMTBjMS4xIDAgMiAuOSAyIDIiPjwvcGF0aD48L3N2Zz4=){.lucide .lucide-copy .text-lighter}

We can instead create a `security definer` function which can scan `roles_table` without any RLS penalties:

``` {.grid .grid-cols-[auto_1fr]}
1create function private.has_good_role()2returns boolean3language plpgsql4security definer -- will run as the creator5as $$6begin7  return exists (8    select 1 from roles_table9    where (select auth.uid()) = user_id and role = 'good_role'10  );11end;12$$;1314-- Update our policy to use this function:15create policy "rls_test_select"16on test_table17to authenticated18using ( (select private.has_good_role()) );
```

![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ibHVjaWRlIGx1Y2lkZS13cmFwLXRleHQgdGV4dC1saWdodGVyIiBmaWxsPSJub25lIiBoZWlnaHQ9IjE0IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIHZpZXdib3g9IjAgMCAyNCAyNCIgd2lkdGg9IjE0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxsaW5lIHgxPSIzIiB4Mj0iMjEiIHkxPSI2IiB5Mj0iNiI+PC9saW5lPjxwYXRoIGQ9Ik0zIDEyaDE1YTMgMyAwIDEgMSAwIDZoLTQiPjwvcGF0aD48cG9seWxpbmUgcG9pbnRzPSIxNiAxNiAxNCAxOCAxNiAyMCI+PC9wb2x5bGluZT48bGluZSB4MT0iMyIgeDI9IjEwIiB5MT0iMTgiIHkyPSIxOCI+PC9saW5lPjwvc3ZnPg==){.lucide .lucide-wrap-text .text-lighter}

![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jb3B5IHRleHQtbGlnaHRlciIgZmlsbD0ibm9uZSIgaGVpZ2h0PSIxNCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiB2aWV3Ym94PSIwIDAgMjQgMjQiIHdpZHRoPSIxNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBoZWlnaHQ9IjE0IiByeD0iMiIgcnk9IjIiIHdpZHRoPSIxNCIgeD0iOCIgeT0iOCI+PC9yZWN0PjxwYXRoIGQ9Ik00IDE2Yy0xLjEgMC0yLS45LTItMlY0YzAtMS4xLjktMiAyLTJoMTBjMS4xIDAgMiAuOSAyIDIiPjwvcGF0aD48L3N2Zz4=){.lucide .lucide-copy .text-lighter}

![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0idy02IGgtNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Ym94PSIwIDAgMjIgMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNOC4xNTEzNyAxLjk1MTE3QzkuMzA2MTUgLTAuMDQ4ODI4MSAxMi4xOTQzIC0wLjA0ODgyODEgMTMuMzQ4MSAxLjk1MTE3TDIwLjcwMzEgMTQuNjk5MkMyMS44NTc0IDE2LjY5OTIgMjAuNDEzMSAxOS4xOTkyIDE4LjEwNCAxOS4xOTkySDMuMzk1MDJDMS4wODU5NCAxOS4xOTkyIC0wLjM1NjkzMyAxNi42OTkyIDAuNzk3MzY0IDE0LjY5OTJMOC4xNTEzNyAxLjk1MTE3Wk0xMS43NjY2IDE2LjAwODNDMTEuNDk3MSAxNi4yNzc4IDExLjEzMTMgMTYuNDI5MiAxMC43NSAxNi40MjkyQzEwLjM2ODcgMTYuNDI5MiAxMC4wMDI5IDE2LjI3NzggOS43MzM0IDE2LjAwODNDOS40NjM4NyAxNS43Mzg4IDkuMzEyNSAxNS4zNzMgOS4zMTI1IDE0Ljk5MTdDOS4zMTI1IDE0LjkzMDcgOS4zMTY0MSAxNC44NzA2IDkuMzIzNzMgMTQuODExQzkuMzM1NDUgMTQuNzE5NyA5LjM1NTQ3IDE0LjYzMDQgOS4zODM3OSAxNC41NDM5TDkuNDE0MDYgMTQuNDYwOUM5LjQ4NTg0IDE0LjI4MDMgOS41OTM3NSAxNC4xMTQ3IDkuNzMzNCAxMy45NzUxQzEwLjAwMjkgMTMuNzA1NiAxMC4zNjg3IDEzLjU1NDIgMTAuNzUgMTMuNTU0MkMxMS4xMzEzIDEzLjU1NDIgMTEuNDk3MSAxMy43MDU2IDExLjc2NjYgMTMuOTc1MUMxMi4wMzYxIDE0LjI0NDYgMTIuMTg3NSAxNC42MTA0IDEyLjE4NzUgMTQuOTkxN0MxMi4xODc1IDE1LjM3MyAxMi4wMzYxIDE1LjczODggMTEuNzY2NiAxNi4wMDgzWk0xMC43NSA0LjY5OTcxQzExLjAzMTcgNC42OTk3MSAxMS4zMDIyIDQuODExNTIgMTEuNTAxNSA1LjAxMDc0QzExLjcwMDcgNS4yMDk5NiAxMS44MTI1IDUuNDgwNDcgMTEuODEyNSA1Ljc2MjIxVjExLjA3NDdDMTEuODEyNSAxMS4zNTY0IDExLjcwMDcgMTEuNjI3IDExLjUwMTUgMTEuODI2MkMxMS4zMDIyIDEyLjAyNTQgMTEuMDMxNyAxMi4xMzcyIDEwLjc1IDEyLjEzNzJDMTAuNDY4MyAxMi4xMzcyIDEwLjE5NzggMTIuMDI1NCA5Ljk5ODU0IDExLjgyNjJDOS43OTkzMiAxMS42MjcgOS42ODc1IDExLjM1NjQgOS42ODc1IDExLjA3NDdWNS43NjIyMUM5LjY4NzUgNS40ODA0NyA5Ljc5OTMyIDUuMjA5OTYgOS45OTg1NCA1LjAxMDc0QzEwLjE5NzggNC44MTE1MiAxMC40NjgzIDQuNjk5NzEgMTAuNzUgNC42OTk3MVoiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PC9wYXRoPjwvc3ZnPg==){.w-6 .h-6}

Security-definer functions should never be created in a schema in the \"Exposed schemas\" inside your [API settings](/dashboard/project/_/settings/api)\`.

### Minimize joins[\#](#minimize-joins){.ml-2 .opacity-0 .focus:opacity-100 .group-hover:opacity-100 .transition} {#minimize-joins .group .scroll-mt-24}

You can often rewrite your Policies to avoid joins between the source and the target table. Instead, try to organize your policy to fetch all the relevant data from the target table into an array or set, then you can use an `IN` or `ANY` operation in your filter.

For example, this is an example of a slow policy which joins the source `test_table` to the target `team_user`:

``` {.grid .grid-cols-[auto_1fr]}
1create policy "rls_test_select" on test_table2to authenticated3using (4  (select auth.uid()) in (5    select user_id6    from team_user7    where team_user.team_id = team_id -- joins to the source "test_table.team_id"8  )9);
```

![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ibHVjaWRlIGx1Y2lkZS13cmFwLXRleHQgdGV4dC1saWdodGVyIiBmaWxsPSJub25lIiBoZWlnaHQ9IjE0IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIHZpZXdib3g9IjAgMCAyNCAyNCIgd2lkdGg9IjE0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxsaW5lIHgxPSIzIiB4Mj0iMjEiIHkxPSI2IiB5Mj0iNiI+PC9saW5lPjxwYXRoIGQ9Ik0zIDEyaDE1YTMgMyAwIDEgMSAwIDZoLTQiPjwvcGF0aD48cG9seWxpbmUgcG9pbnRzPSIxNiAxNiAxNCAxOCAxNiAyMCI+PC9wb2x5bGluZT48bGluZSB4MT0iMyIgeDI9IjEwIiB5MT0iMTgiIHkyPSIxOCI+PC9saW5lPjwvc3ZnPg==){.lucide .lucide-wrap-text .text-lighter}

![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jb3B5IHRleHQtbGlnaHRlciIgZmlsbD0ibm9uZSIgaGVpZ2h0PSIxNCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiB2aWV3Ym94PSIwIDAgMjQgMjQiIHdpZHRoPSIxNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBoZWlnaHQ9IjE0IiByeD0iMiIgcnk9IjIiIHdpZHRoPSIxNCIgeD0iOCIgeT0iOCI+PC9yZWN0PjxwYXRoIGQ9Ik00IDE2Yy0xLjEgMC0yLS45LTItMlY0YzAtMS4xLjktMiAyLTJoMTBjMS4xIDAgMiAuOSAyIDIiPjwvcGF0aD48L3N2Zz4=){.lucide .lucide-copy .text-lighter}

We can rewrite this to avoid this join, and instead select the filter criteria into a set:

``` {.grid .grid-cols-[auto_1fr]}
1create policy "rls_test_select" on test_table2to authenticated3using (4  team_id in (5    select team_id6    from team_user7    where user_id = (select auth.uid()) -- no join8  )9);
```

![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ibHVjaWRlIGx1Y2lkZS13cmFwLXRleHQgdGV4dC1saWdodGVyIiBmaWxsPSJub25lIiBoZWlnaHQ9IjE0IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIHZpZXdib3g9IjAgMCAyNCAyNCIgd2lkdGg9IjE0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxsaW5lIHgxPSIzIiB4Mj0iMjEiIHkxPSI2IiB5Mj0iNiI+PC9saW5lPjxwYXRoIGQ9Ik0zIDEyaDE1YTMgMyAwIDEgMSAwIDZoLTQiPjwvcGF0aD48cG9seWxpbmUgcG9pbnRzPSIxNiAxNiAxNCAxOCAxNiAyMCI+PC9wb2x5bGluZT48bGluZSB4MT0iMyIgeDI9IjEwIiB5MT0iMTgiIHkyPSIxOCI+PC9saW5lPjwvc3ZnPg==){.lucide .lucide-wrap-text .text-lighter}

![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jb3B5IHRleHQtbGlnaHRlciIgZmlsbD0ibm9uZSIgaGVpZ2h0PSIxNCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiB2aWV3Ym94PSIwIDAgMjQgMjQiIHdpZHRoPSIxNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBoZWlnaHQ9IjE0IiByeD0iMiIgcnk9IjIiIHdpZHRoPSIxNCIgeD0iOCIgeT0iOCI+PC9yZWN0PjxwYXRoIGQ9Ik00IDE2Yy0xLjEgMC0yLS45LTItMlY0YzAtMS4xLjktMiAyLTJoMTBjMS4xIDAgMiAuOSAyIDIiPjwvcGF0aD48L3N2Zz4=){.lucide .lucide-copy .text-lighter}

In this case you can also consider [using a `security definer` function](#use-security-definer-functions) to bypass RLS on the join table:

![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0idy02IGgtNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Ym94PSIwIDAgMjEgMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMC42MjUgOS44MjUyQzAuNjI1IDQuNDQwNDMgNC45OTAyMyAwLjA3NTE5NTMgMTAuMzc1IDAuMDc1MTk1M0MxNS43NTk4IDAuMDc1MTk1MyAyMC4xMjUgNC40NDA0MyAyMC4xMjUgOS44MjUyQzIwLjEyNSAxNS4yMSAxNS43NTk4IDE5LjU3NTIgMTAuMzc1IDE5LjU3NTJDNC45OTAyMyAxOS41NzUyIDAuNjI1IDE1LjIxIDAuNjI1IDkuODI1MlpNOS4zNTg0IDQuMzgxMzVDOS40NTExNyA0LjI4ODU3IDkuNTU1MTggNC4yMDk5NiA5LjY2Njk5IDQuMTQ2NDhDOS44ODA4NiA0LjAyNTM5IDEwLjEyNDUgMy45NjA0NSAxMC4zNzUgMy45NjA0NUMxMC41ODQ1IDMuOTYwNDUgMTAuNzg5NiA0LjAwNTg2IDEwLjk3NjYgNC4wOTIyOUMxMS4xMjk0IDQuMTYyNiAxMS4yNzA1IDQuMjYwMjUgMTEuMzkxNiA0LjM4MTM1QzExLjY2MTEgNC42NTA4OCAxMS44MTI1IDUuMDE2NiAxMS44MTI1IDUuMzk3OTVDMTEuODEyNSA1LjUyNDkgMTEuNzk1OSA1LjY0OTkgMTEuNzYzNyA1Ljc3MDAyQzExLjY5ODcgNi4wMTE3MiAxMS41NzE4IDYuMjM0MzggMTEuMzkxNiA2LjQxNDU1QzExLjEyMjEgNi42ODQwOCAxMC43NTYzIDYuODM1NDUgMTAuMzc1IDYuODM1NDVDOS45OTM2NSA2LjgzNTQ1IDkuNjI3OTMgNi42ODQwOCA5LjM1ODQgNi40MTQ1NUM5LjA4ODg3IDYuMTQ1MDIgOC45Mzc1IDUuNzc5MyA4LjkzNzUgNS4zOTc5NUM4LjkzNzUgNS4yOTQ5MiA4Ljk0ODczIDUuMTkyODcgOC45NzAyMSA1LjA5Mzc1QzkuMDI3ODMgNC44MjU2OCA5LjE2MTYyIDQuNTc4MTIgOS4zNTg0IDQuMzgxMzVaTTEwLjM3NSAxNS42ODk5QzEwLjA5MzMgMTUuNjg5OSA5LjgyMjc1IDE1LjU3ODEgOS42MjM1NCAxNS4zNzg5QzkuNDI0MzIgMTUuMTc5NyA5LjMxMjUgMTQuOTA5MiA5LjMxMjUgMTQuNjI3NFY5LjMxNDk0QzkuMzEyNSA5LjAzMzIgOS40MjQzMiA4Ljc2MjcgOS42MjM1NCA4LjU2MzQ4QzkuODIyNzUgOC4zNjQyNiAxMC4wOTMzIDguMjUyNDQgMTAuMzc1IDguMjUyNDRDMTAuNjU2NyA4LjI1MjQ0IDEwLjkyNzIgOC4zNjQyNiAxMS4xMjY1IDguNTYzNDhDMTEuMzI1NyA4Ljc2MjcgMTEuNDM3NSA5LjAzMzIgMTEuNDM3NSA5LjMxNDk0VjE0LjYyNzRDMTEuNDM3NSAxNC43OTQ0IDExLjM5NzkgMTQuOTU3NSAxMS4zMjQyIDE1LjEwNEMxMS4yNzM5IDE1LjIwNDYgMTEuMjA3NSAxNS4yOTc5IDExLjEyNjUgMTUuMzc4OUMxMC45MjcyIDE1LjU3ODEgMTAuNjU2NyAxNS42ODk5IDEwLjM3NSAxNS42ODk5WiIgZmlsbC1ydWxlPSJldmVub2RkIj48L3BhdGg+PC9zdmc+){.w-6 .h-6}

If the list exceeds 1000 items, a different approach may be needed or you may need to analyze the approach to ensure that the performance is acceptable.

#### Benchmarks[\#](#benchmarks){.ml-2 .opacity-0 .focus:opacity-100 .group-hover:opacity-100 .transition} {#benchmarks .group .scroll-mt-24}

  -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  Test                                                                                                  Before (ms)    After (ms)     \% Improvement   Change
  ----------------------------------------------------------------------------------------------------- -------------- -------------- ---------------- ------------------------------------
  [test5-fixed-join](https://github.com/GaryAustin1/RLS-Performance/tree/main/tests/test5-fixed-join)   9,000          20             99.78%           Before:\
                                                                                                                                                       `auth.uid()` in table join on col\
                                                                                                                                                       \
                                                                                                                                                       After:\
                                                                                                                                                       col in table join on `auth.uid()`

  -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

### Specify roles in your policies[\#](#specify-roles-in-your-policies){.ml-2 .opacity-0 .focus:opacity-100 .group-hover:opacity-100 .transition} {#specify-roles-in-your-policies .group .scroll-mt-24}

Always use the Role of inside your policies, specified by the `TO` operator. For example, instead of this query:

``` {.grid .grid-cols-[auto_1fr]}
1create policy "rls_test_select" on rls_test2using ( auth.uid() = user_id );
```

![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ibHVjaWRlIGx1Y2lkZS13cmFwLXRleHQgdGV4dC1saWdodGVyIiBmaWxsPSJub25lIiBoZWlnaHQ9IjE0IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIHZpZXdib3g9IjAgMCAyNCAyNCIgd2lkdGg9IjE0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxsaW5lIHgxPSIzIiB4Mj0iMjEiIHkxPSI2IiB5Mj0iNiI+PC9saW5lPjxwYXRoIGQ9Ik0zIDEyaDE1YTMgMyAwIDEgMSAwIDZoLTQiPjwvcGF0aD48cG9seWxpbmUgcG9pbnRzPSIxNiAxNiAxNCAxOCAxNiAyMCI+PC9wb2x5bGluZT48bGluZSB4MT0iMyIgeDI9IjEwIiB5MT0iMTgiIHkyPSIxOCI+PC9saW5lPjwvc3ZnPg==){.lucide .lucide-wrap-text .text-lighter}

![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jb3B5IHRleHQtbGlnaHRlciIgZmlsbD0ibm9uZSIgaGVpZ2h0PSIxNCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiB2aWV3Ym94PSIwIDAgMjQgMjQiIHdpZHRoPSIxNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBoZWlnaHQ9IjE0IiByeD0iMiIgcnk9IjIiIHdpZHRoPSIxNCIgeD0iOCIgeT0iOCI+PC9yZWN0PjxwYXRoIGQ9Ik00IDE2Yy0xLjEgMC0yLS45LTItMlY0YzAtMS4xLjktMiAyLTJoMTBjMS4xIDAgMiAuOSAyIDIiPjwvcGF0aD48L3N2Zz4=){.lucide .lucide-copy .text-lighter}

Use:

``` {.grid .grid-cols-[auto_1fr]}
1create policy "rls_test_select" on rls_test2to authenticated3using ( (select auth.uid()) = user_id );
```

![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ibHVjaWRlIGx1Y2lkZS13cmFwLXRleHQgdGV4dC1saWdodGVyIiBmaWxsPSJub25lIiBoZWlnaHQ9IjE0IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIHZpZXdib3g9IjAgMCAyNCAyNCIgd2lkdGg9IjE0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxsaW5lIHgxPSIzIiB4Mj0iMjEiIHkxPSI2IiB5Mj0iNiI+PC9saW5lPjxwYXRoIGQ9Ik0zIDEyaDE1YTMgMyAwIDEgMSAwIDZoLTQiPjwvcGF0aD48cG9seWxpbmUgcG9pbnRzPSIxNiAxNiAxNCAxOCAxNiAyMCI+PC9wb2x5bGluZT48bGluZSB4MT0iMyIgeDI9IjEwIiB5MT0iMTgiIHkyPSIxOCI+PC9saW5lPjwvc3ZnPg==){.lucide .lucide-wrap-text .text-lighter}

![](data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jb3B5IHRleHQtbGlnaHRlciIgZmlsbD0ibm9uZSIgaGVpZ2h0PSIxNCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiB2aWV3Ym94PSIwIDAgMjQgMjQiIHdpZHRoPSIxNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBoZWlnaHQ9IjE0IiByeD0iMiIgcnk9IjIiIHdpZHRoPSIxNCIgeD0iOCIgeT0iOCI+PC9yZWN0PjxwYXRoIGQ9Ik00IDE2Yy0xLjEgMC0yLS45LTItMlY0YzAtMS4xLjktMiAyLTJoMTBjMS4xIDAgMiAuOSAyIDIiPjwvcGF0aD48L3N2Zz4=){.lucide .lucide-copy .text-lighter}

This prevents the policy `( (select auth.uid()) = user_id )` from running for any `anon` users, since the execution stops at the `to authenticated` step.

#### Benchmarks[\#](#benchmarks){.ml-2 .opacity-0 .focus:opacity-100 .group-hover:opacity-100 .transition} {#benchmarks .group .scroll-mt-24}

  ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  Test                                                                                            Before (ms)    After (ms)     \% Improvement   Change
  ----------------------------------------------------------------------------------------------- -------------- -------------- ---------------- -------------------------------------
  [test6-To-role](https://github.com/GaryAustin1/RLS-Performance/tree/main/tests/test6-To-role)   170            \< 0.1         99.78%           Before:\
                                                                                                                                                 No `TO` policy\
                                                                                                                                                 \
                                                                                                                                                 After:\
                                                                                                                                                 `TO authenticated` (anon accessing)

  ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## More resources[\#](#more-resources){.ml-2 .opacity-0 .focus:opacity-100 .group-hover:opacity-100 .transition} {#more-resources .group .scroll-mt-24}

-   [Testing your database](/docs/guides/database/testing)
-   [RLS Guide and Best Practices](https://github.com/orgs/supabase/discussions/14576)
-   Community repo on testing RLS using [pgTAP and dbdev](https://github.com/usebasejump/supabase-test-helpers/tree/main)
