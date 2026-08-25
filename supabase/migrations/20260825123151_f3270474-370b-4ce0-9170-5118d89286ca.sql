-- 1) Server-side cookie consent audit log
CREATE TABLE public.cookie_consent_audit (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid,
  action text NOT NULL,
  analytics_allowed boolean NOT NULL,
  marketing_allowed boolean NOT NULL,
  affiliate_allowed boolean NOT NULL,
  path text,
  user_agent text,
  version integer NOT NULL DEFAULT 1,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX idx_cookie_consent_audit_created_at ON public.cookie_consent_audit (created_at DESC);
CREATE INDEX idx_cookie_consent_audit_action ON public.cookie_consent_audit (action);

GRANT INSERT ON public.cookie_consent_audit TO anon, authenticated;
GRANT SELECT, DELETE ON public.cookie_consent_audit TO authenticated;
GRANT ALL ON public.cookie_consent_audit TO service_role;

ALTER TABLE public.cookie_consent_audit ENABLE ROW LEVEL SECURITY;

-- Any visitor may record their own consent decision
CREATE POLICY "Anyone can record a consent decision"
ON public.cookie_consent_audit
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Only compliance admins can read the log
CREATE POLICY "Admins can view the consent audit log"
ON public.cookie_consent_audit
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Only compliance admins can clear the log
CREATE POLICY "Admins can delete consent audit entries"
ON public.cookie_consent_audit
FOR DELETE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- 2) Admin role management
GRANT INSERT, UPDATE, DELETE ON public.user_roles TO authenticated;

CREATE POLICY "Admins can manage roles"
ON public.user_roles
FOR ALL
TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- 3) Admins need to see profiles to grant roles
CREATE POLICY "Admins can view all profiles"
ON public.profiles
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));