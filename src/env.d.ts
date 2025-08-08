interface ImportMetaEnv {
  readonly EMAILJS_SERVICE_ID: string;
  readonly EMAILJS_TEMPLATE_ID: string;
  readonly EMAILJS_USER_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
