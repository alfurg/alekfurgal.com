'use client';

import { useState, useRef } from 'react';

function CopyIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  );
}

export function CopyEmailButton({ email }: { email: string }) {
  const [state, setState] = useState<'idle' | 'copied' | 'fading'>('idle');
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function handleCopy(e: React.MouseEvent) {
    e.preventDefault();
    navigator.clipboard.writeText(email).then(() => {
      setState('copied');
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => setState('fading'), 2000);
    });
  }

  function handleTransitionEnd() {
    if (state === 'fading') setState('idle');
  }

  return (
    <button
      className={`contact-copy-btn${state === 'copied' ? ' contact-copy-btn--done' : ''}`}
      onClick={handleCopy}
      onTransitionEnd={handleTransitionEnd}
      aria-label={state === 'copied' ? 'Copied' : 'Copy email address'}
    >
      {state === 'idle' ? <CopyIcon /> : <CheckIcon />}
    </button>
  );
}