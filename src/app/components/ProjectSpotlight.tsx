'use client';

import React, { useRef, useEffect, useState } from 'react';
import { projects, type Project, type ProjectEmbed, social } from '@/config/portfolio';

// ─── Minimal syntax highlighting ──────────────────────────────────────────────
// Enough to make a TypeScript-ish snippet readable; not a real parser.
const KEYWORDS = new Set([
  'abstract',
  'async',
  'await',
  'case',
  'catch',
  'class',
  'const',
  'constructor',
  'else',
  'export',
  'extends',
  'false',
  'for',
  'from',
  'function',
  'if',
  'implements',
  'import',
  'interface',
  'let',
  'new',
  'null',
  'private',
  'protected',
  'public',
  'readonly',
  'return',
  'static',
  'switch',
  'this',
  'throw',
  'true',
  'try',
  'type',
  'typeof',
  'undefined',
  'var',
  'void',
  'while',
  'yield',
]);

const tokenClass = (token: string, next: string): string => {
  if (token.startsWith('@')) return 'tok-fn';
  if (/^['"`]/.test(token)) return 'tok-string';
  if (/^\d/.test(token)) return 'tok-num';
  if (KEYWORDS.has(token)) return 'tok-keyword';
  if (/^[A-Z]/.test(token)) return 'tok-type';
  if (/^[A-Za-z_$]/.test(token)) return next === '(' ? 'tok-fn' : 'tok-var';
  return 'tok-punct';
};

const HighlightedLine: React.FC<{ line: string }> = ({ line }) => {
  if (line.trimStart().startsWith('//')) {
    return <span className="tok-comment">{line}</span>;
  }

  // Split into strings, identifiers/numbers, whitespace and everything else.
  const tokens = line.match(/`[^`]*`|'[^']*'|"[^"]*"|@?[\w$]+|\s+|[^\s\w$]/g) ?? [line];

  return (
    <>
      {tokens.map((token, i) => {
        if (/^\s+$/.test(token)) return token;
        const next = tokens.slice(i + 1).find((t) => !/^\s+$/.test(t)) ?? '';
        return (
          <span key={i} className={tokenClass(token, next)}>
            {token}
          </span>
        );
      })}
    </>
  );
};

// ─── Code Embed ───────────────────────────────────────────────────────────────
const CodeEmbed: React.FC<{ embed: Extract<ProjectEmbed, { kind: 'code' }> }> = ({ embed }) => (
  <div className="code-embed">
    <div className="code-header">
      <div className="flex gap-1.5">
        <div className="w-3 h-3 rounded-full" style={{ background: '#FF5F57' }} />
        <div className="w-3 h-3 rounded-full" style={{ background: '#FFBD2E' }} />
        <div className="w-3 h-3 rounded-full" style={{ background: '#28CA42' }} />
      </div>
      <span
        className="font-mono text-xs ml-3"
        style={{ fontFamily: 'JetBrains Mono, monospace', color: '#546E7A', fontSize: '11px' }}
      >
        {embed.filename}
      </span>
    </div>
    <div className="code-body">
      <pre
        style={{
          margin: 0,
          whiteSpace: 'pre',
          color: '#EEFFFF',
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: '13px',
          lineHeight: 1.9,
        }}
      >
        {embed.code.split('\n').map((line, i) => (
          <React.Fragment key={i}>
            <HighlightedLine line={line} />
            {'\n'}
          </React.Fragment>
        ))}
      </pre>
    </div>
  </div>
);

// ─── CLI Embed ────────────────────────────────────────────────────────────────
const CliEmbed: React.FC<{ embed: Extract<ProjectEmbed, { kind: 'cli' }> }> = ({ embed }) => {
  const [step, setStep] = useState(0);
  const stepCount = embed.lines.length;

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setStep(i);
      if (i >= stepCount) clearInterval(interval);
    }, 140);
    return () => clearInterval(interval);
  }, [stepCount]);

  return (
    <div className="terminal-window w-full">
      <div className="terminal-bar">
        <div className="w-3 h-3 rounded-full" style={{ background: '#FF5F57' }} />
        <div className="w-3 h-3 rounded-full" style={{ background: '#FFBD2E' }} />
        <div className="w-3 h-3 rounded-full" style={{ background: '#28CA42' }} />
        <span
          className="ml-3 font-mono text-xs"
          style={{ color: '#6B7280', fontFamily: 'JetBrains Mono, monospace', fontSize: '11px' }}
        >
          {embed.title}
        </span>
      </div>
      <div className="terminal-body" style={{ minHeight: '260px' }}>
        {embed.lines.slice(0, step).map((s, i) => (
          <div key={i} className={s.prompt ? 'flex gap-2' : ''}>
            {s.prompt ? (
              <>
                <span className="terminal-prompt">❯</span>
                <span style={{ color: '#EEFFFF' }}>{s.text}</span>
              </>
            ) : (
              <span
                style={{
                  color: s.text.startsWith('  ')
                    ? '#C3E88D'
                    : s.text.startsWith('│') || s.text.startsWith('┌') || s.text.startsWith('└')
                      ? 'var(--blue)'
                      : '#8B9BAA',
                }}
              >
                {s.text}
              </span>
            )}
          </div>
        ))}
        {step < stepCount && <span className="terminal-cursor" />}
      </div>
    </div>
  );
};

// ─── Metrics Embed ────────────────────────────────────────────────────────────
const MetricsEmbed: React.FC<{ embed: Extract<ProjectEmbed, { kind: 'metrics' }> }> = ({
  embed,
}) => (
  <div
    className="w-full rounded-2xl overflow-hidden"
    style={{
      background: 'var(--card)',
      border: '1px solid rgba(110,140,160,0.15)',
      boxShadow: '0 20px 60px -20px rgba(42,42,42,0.08)',
    }}
  >
    {/* Header */}
    <div
      className="px-6 py-4 flex items-center gap-3"
      style={{
        borderBottom: '1px solid rgba(110,140,160,0.1)',
        background: 'rgba(245,240,235,0.8)',
      }}
    >
      <div
        className="w-2 h-2 rounded-full"
        style={{ background: 'var(--clay)', animation: 'pulse 2s infinite' }}
      />
      <span
        className="font-mono text-xs tracking-widest uppercase"
        style={{
          fontFamily: 'JetBrains Mono, monospace',
          color: 'var(--blue)',
          fontSize: '10px',
          letterSpacing: '0.2em',
        }}
      >
        {embed.label}
      </span>
      <span
        className="ml-auto font-mono text-xs"
        style={{
          fontFamily: 'JetBrains Mono, monospace',
          color: 'var(--clay)',
          fontSize: '10px',
        }}
      >
        {embed.status}
      </span>
    </div>

    {/* Note */}
    {embed.note && (
      <div className="px-6 pt-5 pb-3">
        <p
          className="font-serif italic text-sm leading-relaxed"
          style={{
            fontFamily: 'Fraunces, serif',
            color: 'var(--graphite-light)',
            fontSize: '14px',
          }}
        >
          &ldquo;{embed.note}&rdquo;
        </p>
      </div>
    )}

    {/* Metrics grid */}
    <div className="grid grid-cols-2 gap-px" style={{ background: 'rgba(110,140,160,0.1)' }}>
      {embed.metrics.map((m, i) => (
        <div key={i} className="px-6 py-5" style={{ background: 'rgba(245,240,235,0.6)' }}>
          <div
            className="font-mono text-2xl font-bold mb-1"
            style={{ fontFamily: 'JetBrains Mono, monospace', color: 'var(--graphite)' }}
          >
            {m.value}
          </div>
          <div
            className="text-xs font-medium mb-0.5"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              color: 'var(--graphite)',
              fontSize: '12px',
            }}
          >
            {m.label}
          </div>
          <div
            className="text-xs"
            style={{
              fontFamily: 'JetBrains Mono, monospace',
              color: 'var(--blue)',
              fontSize: '10px',
            }}
          >
            {m.note}
          </div>
        </div>
      ))}
    </div>

    {/* GitHub handle */}
    <div
      className="px-6 py-4 flex items-center gap-3"
      style={{ borderTop: '1px solid rgba(110,140,160,0.1)' }}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="#3B3B3B">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
      <span
        className="font-mono text-xs"
        style={{
          fontFamily: 'JetBrains Mono, monospace',
          color: 'var(--graphite-light)',
          fontSize: '11px',
        }}
      >
        {social.github.replace(/^https?:\/\//, '')}
      </span>
    </div>
  </div>
);

// ─── Project Row ──────────────────────────────────────────────────────────────
const ProjectRow: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const rowRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );
    if (rowRef.current) observer.observe(rowRef.current);
    return () => observer.disconnect();
  }, []);

  const embed = project.embed;

  return (
    <div
      ref={rowRef}
      className={`project-section ${project.reversed ? 'reversed' : ''}`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(40px)',
        transition:
          'opacity 0.8s cubic-bezier(0.25, 1, 0.5, 1), transform 0.8s cubic-bezier(0.25, 1, 0.5, 1)',
        borderTop: index > 0 ? '1px solid var(--hair)' : 'none',
      }}
    >
      {/* Embed side */}
      <div
        className="project-embed"
        style={{ background: index % 2 === 0 ? 'var(--parchment)' : 'var(--parchment-dark)' }}
      >
        {embed.kind === 'code' ? (
          <CodeEmbed embed={embed} />
        ) : embed.kind === 'cli' ? (
          <CliEmbed embed={embed} />
        ) : (
          <MetricsEmbed embed={embed} />
        )}
      </div>

      {/* Annotation side */}
      <div
        className="project-annotation"
        style={{ background: index % 2 === 0 ? 'var(--parchment-dark)' : 'var(--parchment)' }}
      >
        <div className="annotation-number">
          {project.number} — {project.year}
        </div>
        <div className="section-divider" />

        <h2
          className="font-serif font-medium mb-3 leading-tight"
          style={{
            fontFamily: 'Fraunces, serif',
            fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)',
            color: 'var(--graphite)',
            lineHeight: 1.15,
          }}
        >
          {project.title}
        </h2>

        <p
          className="font-body text-sm mb-6 leading-relaxed"
          style={{
            fontFamily: 'DM Sans, sans-serif',
            color: 'var(--blue)',
            fontSize: '14px',
            fontStyle: 'italic',
          }}
        >
          {project.tagline}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag) => (
            <span key={tag} className="tag-pill">
              {tag}
            </span>
          ))}
        </div>

        {/* First-person annotation */}
        <div className="relative pl-5" style={{ borderLeft: '2px solid rgba(194,120,92,0.3)' }}>
          {project.annotation.split('\n\n').map((para, i) => (
            <p
              key={i}
              className="font-body text-sm leading-relaxed mb-4 last:mb-0"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                color: 'var(--graphite-light)',
                fontSize: '14px',
                lineHeight: 1.8,
              }}
            >
              {para}
            </p>
          ))}
        </div>

        {/* Links */}
        <div className="mt-8 flex flex-wrap items-center gap-6">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="github-cta"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="9" />
                <path d="M3 12h18M12 3a15 15 0 010 18a15 15 0 010-18" />
              </svg>
              Live demo
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="github-cta"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              View source
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const ProjectSpotlight: React.FC = () => (
  <section id="work" data-tour="work" className="bg-parchment">
    <div
      className="max-w-7xl mx-auto px-8 pt-24 pb-8"
      style={{ borderBottom: '1px solid var(--hair)' }}
    >
      <span
        className="font-mono text-xs tracking-widest uppercase"
        style={{
          fontFamily: 'JetBrains Mono, monospace',
          color: 'var(--blue)',
          fontSize: '10px',
          letterSpacing: '0.25em',
        }}
      >
        Selected Work
      </span>
      <h2
        className="font-serif font-light mt-3 leading-tight"
        style={{
          fontFamily: 'Fraunces, serif',
          fontSize: 'clamp(2rem, 4vw, 3.5rem)',
          color: 'var(--graphite)',
          lineHeight: 1.1,
        }}
      >
        Things I&rsquo;ve shipped
      </h2>
    </div>

    <div>
      {projects.map((project, i) => (
        <ProjectRow key={project.id} project={project} index={i} />
      ))}
    </div>
  </section>
);

export default ProjectSpotlight;
