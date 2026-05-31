import { useMemo, useState } from "react";

type Props = {
  label: string;
  phone?: string;
};

export function AppointmentButton({ label, phone = "01 23 45 67 89" }: Props) {
  const [open, setOpen] = useState(false);
  const telHref = useMemo(() => `tel:${phone.replace(/[^0-9+]/g, "")}`, [phone]);

  return (
    <div className="relative inline-flex">
      <button
        type="button"
        onClick={() => setOpen((v: boolean) => !v)}
        className="bg-primary text-on-primary font-label-md text-label-md px-6 py-3 rounded-lg hover:bg-primary-container hover:text-on-primary-container transition-all flex items-center gap-2 shadow-[0px_10px_30px_rgba(0,104,94,0.12)] hover:-translate-y-0.5 font-bold"
        aria-expanded={open}
      >
        <span className="material-symbols-outlined text-sm">calendar_month</span>
        {label}
      </button>

      {open ? (
        <div className="absolute right-0 top-full mt-3 w-72 rounded-2xl border border-outline-variant/50 bg-surface shadow-2xl overflow-hidden">
          <div className="px-5 py-4">
            <p className="font-bold text-sm text-on-surface">Prendre rendez-vous</p>
            <p className="text-xs text-on-surface-variant mt-1">
              Appelez le cabinet ou envoyez un message.
            </p>
          </div>
          <div className="border-t border-outline-variant/40">
            <a
              className="flex items-center gap-3 px-5 py-4 hover:bg-surface-container-low transition-colors"
              href={telHref}
            >
              <span className="material-symbols-outlined text-primary">call</span>
              <div className="flex flex-col">
                <span className="font-bold text-sm text-on-surface">{phone}</span>
                <span className="text-[11px] text-on-surface-variant">Appel direct</span>
              </div>
            </a>
            <a
              className="flex items-center gap-3 px-5 py-4 hover:bg-surface-container-low transition-colors"
              href="mailto:contact@exemple.fr"
            >
              <span className="material-symbols-outlined text-primary">mail</span>
              <div className="flex flex-col">
                <span className="font-bold text-sm text-on-surface">contact@exemple.fr</span>
                <span className="text-[11px] text-on-surface-variant">Email</span>
              </div>
            </a>
          </div>
        </div>
      ) : null}
    </div>
  );
}
