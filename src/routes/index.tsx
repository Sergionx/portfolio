import { createFileRoute, redirect } from "@tanstack/react-router";
import i18n from "@/i18n";

export const Route = createFileRoute("/")({
  beforeLoad: () => {
    const locale = i18n.language || "en";
    throw redirect({ to: "/$locale", params: { locale } });
  },
});
