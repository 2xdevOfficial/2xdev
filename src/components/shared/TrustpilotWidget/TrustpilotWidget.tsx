import { useEffect, useRef } from 'react';

const SCRIPT_SRC = 'https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js';

declare global {
  interface Window {
    Trustpilot?: { loadFromElement: (el: HTMLElement, force?: boolean) => void };
  }
}

/** Loads Trustpilot's script once, then renders the widget inside this element.
 *  Calling loadFromElement on mount makes it work after client-side navigation too. */
function loadTrustpilot(el: HTMLElement) {
  if (window.Trustpilot) {
    window.Trustpilot.loadFromElement(el, true);
    return;
  }
  let script = document.querySelector<HTMLScriptElement>(`script[src="${SCRIPT_SRC}"]`);
  if (!script) {
    script = document.createElement('script');
    script.src = SCRIPT_SRC;
    script.async = true;
    document.body.appendChild(script);
  }
  script.addEventListener('load', () => window.Trustpilot?.loadFromElement(el, true), { once: true });
}

/** TrustBox – Review Collector widget for 2xdev.com */
export function TrustpilotWidget() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) loadTrustpilot(ref.current);
  }, []);

  return (
    <div
      ref={ref}
      className="trustpilot-widget"
      data-locale="en-US"
      data-template-id="56278e9abfbbba0bdcd568bc"
      data-businessunit-id="6acdf8974d63e03ca15ba091"
      data-style-height="52px"
      data-style-width="100%"
      data-token="2e49d2a6-38a0-4ca6-a49c-de8e42311eaa"
    >
      <a href="https://www.trustpilot.com/review/2xdev.com" target="_blank" rel="noopener">
        Trustpilot
      </a>
    </div>
  );
}
