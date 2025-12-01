import React, { useState } from "react";
import "./_styles.scss";

const shopifyComponents = [
    {
        brand: "Aurora Skin Co.",
        name: "Lookbook carousel",
        summary:
            "Home hero that lets the user swipe through seasonal drops, swap variants, and jump straight to PDPs without leaving the page.",
        features: [
            "Liquid section reads a JSON metafield so merchants can swap slides without code.",
            "Variant picker wires into Shopify's cart.js for instant add-to-cart.",
            "Progress dots keyboard-focusable for accessibility and QA demos."
        ],
        stack: ["Liquid", "Javascript", "CSS Grid", "Theme metafields"],
        snippet: `{% section 'lookbook-carousel' %}`
    },
    {
        brand: "Bravio Coffee",
        name: "Bundle/upsell drawer",
        summary:
            "Reusable drawer that surfaces add-ons based on the cart line item product type. Great for AOV lift tests.",
        features: [
            "Scans cart attributes and fetches recommendations with Shopify's predictive search endpoint.",
            "Liquid fallback ensures drawer still renders if JS is disabled.",
            "Telemetry data pushed to window.dataLayer for GA4/Meta experiments."
        ],
        stack: ["Liquid", "Alpine.js", "Fetch API", "DataLayer events"],
        snippet: `{{ 'bundle-drawer' | render: cart: cart }}`
    },
    {
        brand: "Noir Athletics",
        name: "Shoppable size guide",
        summary:
            "Size guide modal that swaps copy per-collection and lets shoppers add the recommended variant directly from the table.",
        features: [
            "Uses dynamic sources so merchandisers edit sizing tables in admin blocks.",
            "Auto-selects matching variant and syncs with AJAX cart.",
            "ARIA-labelled modal with focus trap for WCAG checks."
        ],
        stack: ["Liquid", "Modal accessibility", "AJAX Cart", "Theme settings"],
        snippet: `{% render 'size-guide-modal', product: product %}`
    }
];

export const Shopify = () => {
    const [copiedSnippet, setCopiedSnippet] = useState("");

    const handleCopy = async (snippet) => {
        try {
            await navigator.clipboard.writeText(snippet);
            setCopiedSnippet(snippet);
            setTimeout(() => setCopiedSnippet(""), 2000);
        } catch (error) {
            setCopiedSnippet("Clipboard unavailable");
        }
    };

    return (
        <section className="shopifyContainer">
            <header className="shopifyHeader">
                <p className="eyebrow">Shopify components</p>
                <h1>Production-ready blocks I can drop into any theme</h1>
                <p className="lede">
                    Aquí puedes ver piezas en Liquid/JS que he usado para marcas. Cada componente está pensado para clonarlo rápido,
                    mostrar el snippet que se pega en el theme y qué valor aporta.
                </p>
            </header>

            <div className="shopifyGrid">
                {shopifyComponents.map((component) => (
                    <article className="shopifyCard" key={component.name}>
                        <div className="cardMeta">
                            <p className="brand">{component.brand}</p>
                            <h2>{component.name}</h2>
                            <p className="summary">{component.summary}</p>
                            <ul className="stack">
                                {component.stack.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="cardDetails">
                            <h3>Qué demuestra</h3>
                            <ul className="featureList">
                                {component.features.map((feature) => (
                                    <li key={feature}>{feature}</li>
                                ))}
                            </ul>
                            <div className="snippetBlock">
                                <div className="snippetHeader">
                                    <span>Snippet Liquid</span>
                                    <button
                                        type="button"
                                        aria-label="Copiar snippet"
                                        onClick={() => handleCopy(component.snippet)}
                                    >
                                        {copiedSnippet === component.snippet ? "Copiado" : "Copiar"}
                                    </button>
                                </div>
                                <pre>
                                    <code>{component.snippet}</code>
                                </pre>
                                {copiedSnippet === "Clipboard unavailable" && (
                                    <p className="copyError">No se pudo copiar automáticamente, pero puedes seleccionar el código.</p>
                                )}
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};
