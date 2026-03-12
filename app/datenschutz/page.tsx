import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz — Anderius",
};

export default function DatenschutzPage() {
  return (
    <section className="bg-stone" style={{ paddingTop: 160, paddingBottom: 140 }}>
      <div className="container-narrow" style={{ maxWidth: 680 }}>
        <h1
          className="font-serif text-text-primary mb-12"
          style={{ fontSize: "clamp(32px, 4vw, 48px)", letterSpacing: "-0.02em" }}
        >
          Datenschutzerklärung
        </h1>
        <div className="font-sans text-[16px] text-text-secondary leading-[1.75] space-y-6" style={{ fontWeight: 400 }}>
          <p>
            Anderius GmbH<br />
            Frankfurt am Main, Deutschland
          </p>
          <p className="text-text-tertiary text-[14px]">
            Inhalt folgt.
          </p>
        </div>
      </div>
    </section>
  );
}
