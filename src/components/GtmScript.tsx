import { useEffect } from "react";

const GTM_ID = import.meta.env.VITE_GTM_ID as string | undefined;

interface GtmScriptProps {
  consent: "accepted" | "refused" | null;
}

const GtmScript = ({ consent }: GtmScriptProps) => {
  useEffect(() => {
    if (!GTM_ID || consent !== "accepted") return;

    // Ne pas injecter deux fois
    if (document.getElementById("gtm-script")) return;

    const script = document.createElement("script");
    script.id = "gtm-script";
    script.textContent = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`;
    document.head.appendChild(script);
  }, [consent]);

  if (!GTM_ID || consent !== "accepted") return null;

  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
        title="Google Tag Manager"
      />
    </noscript>
  );
};

export default GtmScript;
