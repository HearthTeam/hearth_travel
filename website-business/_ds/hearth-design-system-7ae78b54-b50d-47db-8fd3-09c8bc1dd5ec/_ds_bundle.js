/* @ds-bundle: {"format":3,"namespace":"HearthDesignSystem_7ae78b","components":[{"name":"Avatar","sourcePath":"components/data-display/Avatar.jsx"},{"name":"Badge","sourcePath":"components/data-display/Badge.jsx"},{"name":"Card","sourcePath":"components/data-display/Card.jsx"},{"name":"ContentCard","sourcePath":"components/data-display/ContentCard.jsx"},{"name":"DetailRow","sourcePath":"components/data-display/DetailRow.jsx"},{"name":"ProgressBar","sourcePath":"components/data-display/ProgressBar.jsx"},{"name":"BottomSheet","sourcePath":"components/feedback/BottomSheet.jsx"},{"name":"EmptyState","sourcePath":"components/feedback/EmptyState.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Chip","sourcePath":"components/forms/Chip.jsx"},{"name":"IconButton","sourcePath":"components/forms/IconButton.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"SelectCard","sourcePath":"components/forms/SelectCard.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"TopBar","sourcePath":"components/navigation/TopBar.jsx"}],"sourceHashes":{"components/data-display/Avatar.jsx":"2a69bf131721","components/data-display/Badge.jsx":"b60504df5950","components/data-display/Card.jsx":"087fd3ac4035","components/data-display/ContentCard.jsx":"9cb1b1f9406e","components/data-display/DetailRow.jsx":"f422a92109b6","components/data-display/ProgressBar.jsx":"fa1367f56449","components/feedback/BottomSheet.jsx":"8bf0de91b9bd","components/feedback/EmptyState.jsx":"96e00a81ed48","components/feedback/Toast.jsx":"50de3b7a22c9","components/forms/Button.jsx":"3fd3f63beb93","components/forms/Chip.jsx":"7fdcb1506b17","components/forms/IconButton.jsx":"b78eddd0c80c","components/forms/Input.jsx":"545d773d1373","components/forms/SelectCard.jsx":"4c39d28839a2","components/forms/Textarea.jsx":"a7814986f771","components/navigation/Tabs.jsx":"cc968459196a","components/navigation/TopBar.jsx":"7860e210ed6e","ui_kits/creator-app/ContentStatusScreen.jsx":"6441bbe19175","ui_kits/creator-app/KnowledgeChoiceScreen.jsx":"07c6cafc1e80","ui_kits/creator-app/StoryInputScreen.jsx":"59871b31a3ed","ui_kits/editorial-backoffice/ReviewWorkspace.jsx":"d84510a5d6a6","ui_kits/editorial-backoffice/Sidebar.jsx":"3a869845a26d","ui_kits/municipality-dashboard/LibraryScreen.jsx":"77f38bfb4269","ui_kits/public-guides/PublicGuide.jsx":"a49a825f64c8","ui_kits/traveler-web/DetailMap.jsx":"af2a6a9bfc1e","ui_kits/traveler-web/HomeScreens.jsx":"96afaffc7fba","ui_kits/traveler-web/PassFlow.jsx":"dbffa8d0b2f7","ui_kits/traveler-web/TravelerKit.jsx":"21ab0ae52f64"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.HearthDesignSystem_7ae78b = window.HearthDesignSystem_7ae78b || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/data-display/Avatar.jsx
try { (() => {
/** Round avatar — contributor / municipality / editor. Falls back to initials. */
function Avatar({
  src = null,
  name = '',
  size = 40,
  ring = false,
  style = {}
}) {
  const initials = name.split(' ').map(p => p[0]).filter(Boolean).slice(0, 2).join('').toUpperCase();
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size,
      borderRadius: '50%',
      overflow: 'hidden',
      flexShrink: 0,
      background: 'var(--cream-200)',
      color: 'var(--ink-700)',
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--fw-heavy)',
      fontSize: size * 0.36,
      border: ring ? '2px solid var(--surface-card)' : 'none',
      boxShadow: ring ? '0 0 0 1px var(--border-strong)' : 'none',
      ...style
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Badge.jsx
try { (() => {
const VARIANTS = {
  review: {
    bg: 'var(--status-review-bg)',
    fg: 'var(--status-review-fg)',
    dot: 'var(--slate-500)'
  },
  progress: {
    bg: 'var(--status-progress-bg)',
    fg: 'var(--status-progress-fg)',
    dot: 'var(--green-500)'
  },
  approved: {
    bg: 'var(--status-approved-bg)',
    fg: 'var(--status-approved-fg)',
    dot: 'var(--green-500)'
  },
  published: {
    bg: 'var(--status-published-bg)',
    fg: 'var(--status-published-fg)',
    dot: '#fff'
  },
  correction: {
    bg: 'var(--status-correction-bg)',
    fg: 'var(--status-correction-fg)',
    dot: 'var(--amber-500)'
  },
  error: {
    bg: 'var(--status-error-bg)',
    fg: 'var(--status-error-fg)',
    dot: 'var(--red-500)'
  },
  neutral: {
    bg: 'var(--surface-sunken)',
    fg: 'var(--text-muted)',
    dot: 'var(--neutral-500)'
  }
};

/**
 * Status badge — a pill with a meaning-carrying dot + label. Functional, never
 * color-only (the label always states the status). `onLight` adds a white pill
 * shell so it reads over photography.
 */
function Badge({
  label,
  variant = 'neutral',
  onLight = false,
  icon = null,
  style = {}
}) {
  const v = VARIANTS[variant] || VARIANTS.neutral;
  const solid = variant === 'published';
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      padding: '6px 12px 6px 11px',
      borderRadius: 'var(--radius-pill)',
      background: onLight && !solid ? 'rgba(255,255,255,0.94)' : v.bg,
      color: v.fg,
      backdropFilter: onLight ? 'blur(6px)' : 'none',
      border: onLight && !solid ? '1px solid rgba(255,255,255,0.5)' : '1px solid transparent',
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--fw-heavy)',
      fontSize: 'var(--text-xs)',
      letterSpacing: 'var(--ls-tight)',
      whiteSpace: 'nowrap',
      lineHeight: 1,
      ...style
    }
  }, icon || /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: onLight && !solid ? v.dot : v.fg,
      flexShrink: 0
    }
  }), label);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Card.jsx
try { (() => {
/**
 * Base surface card — white fill, large radius, subtle warm border, soft shadow.
 * The calm container for everything in product UI.
 */
function Card({
  children,
  padding = 'var(--space-6)',
  elevated = false,
  style = {},
  onClick
}) {
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-soft)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: elevated ? 'var(--shadow-md)' : 'var(--shadow-xs)',
      padding,
      cursor: onClick ? 'pointer' : 'default',
      transition: 'box-shadow var(--dur-base), transform var(--dur-base)',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Card.jsx", error: String((e && e.message) || e) }); }

// components/data-display/ContentCard.jsx
try { (() => {
/**
 * Image-first content card for a place / activity / person / product / event.
 * The core unit of guides, libraries and review queues. Large photo, optional
 * status badge overlay, category eyebrow, heavy title, location, optional author.
 */
function ContentCard({
  image,
  title,
  location,
  category,
  status = null,
  // { label, variant }
  author = null,
  // { name, avatar }
  aspect = '4 / 3',
  onClick,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-soft)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      cursor: onClick ? 'pointer' : 'default',
      transition: 'box-shadow var(--dur-base), transform var(--dur-base)',
      fontFamily: 'var(--font-sans)',
      boxShadow: 'var(--shadow-xs)',
      ...style
    },
    onMouseEnter: e => {
      if (onClick) {
        e.currentTarget.style.boxShadow = 'var(--shadow-md)';
        e.currentTarget.style.transform = 'translateY(-2px)';
      }
    },
    onMouseLeave: e => {
      if (onClick) {
        e.currentTarget.style.boxShadow = 'var(--shadow-xs)';
        e.currentTarget.style.transform = 'translateY(0)';
      }
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      aspectRatio: aspect,
      background: 'var(--surface-sunken)'
    }
  }, image && /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: title,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }), status && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 'var(--space-3)',
      left: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    label: status.label,
    variant: status.variant,
    onLight: true
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-5)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)'
    }
  }, category && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-2xs)',
      fontWeight: 'var(--fw-heavy)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--text-subtle)'
    }
  }, category), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xl)',
      fontWeight: 'var(--fw-heavy)',
      color: 'var(--text-heading)',
      letterSpacing: 'var(--ls-tight)',
      lineHeight: 'var(--lh-tight)'
    }
  }, title), location && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, location), author && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      marginTop: 'var(--space-2)'
    }
  }, author.avatar && /*#__PURE__*/React.createElement("img", {
    src: author.avatar,
    alt: "",
    style: {
      width: 24,
      height: 24,
      borderRadius: '50%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)'
    }
  }, "Raccontato da ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--text-body)'
    }
  }, author.name)))));
}
Object.assign(__ds_scope, { ContentCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/ContentCard.jsx", error: String((e && e.message) || e) }); }

// components/data-display/DetailRow.jsx
try { (() => {
const {
  useState
} = React;
/**
 * Expandable detail row — the Creator App "Dettagli utili" pattern
 * (Consiglio locale / Momento migliore / Costo o condizioni). Icon chip +
 * title + helper, chevron toggles an editable body. Completed rows show a check.
 */
function DetailRow({
  icon = null,
  title,
  hint,
  completed = false,
  defaultOpen = false,
  children,
  style = {}
}) {
  const [open, setOpen] = useState(defaultOpen);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: `1px solid ${open ? 'var(--border-strong)' : 'var(--border-soft)'}`,
      borderRadius: 'var(--radius-lg)',
      fontFamily: 'var(--font-sans)',
      overflow: 'hidden',
      transition: 'border-color var(--dur-base)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setOpen(o => !o),
    style: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      padding: 'var(--space-4)',
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 40,
      flexShrink: 0,
      borderRadius: 'var(--radius-md)',
      background: completed ? 'var(--green-50)' : 'var(--surface-sunken)',
      color: completed ? 'var(--green-600)' : 'var(--neutral-700)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, icon), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-md)',
      fontWeight: 'var(--fw-heavy)',
      color: 'var(--text-heading)'
    }
  }, title), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-subtle)',
      lineHeight: 'var(--lh-snug)'
    }
  }, hint)), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      color: 'var(--neutral-500)',
      transform: open ? 'rotate(180deg)' : 'rotate(0)',
      transition: 'transform var(--dur-base)',
      fontSize: 18,
      lineHeight: 1,
      flexShrink: 0
    }
  }, "\u2304")), open && children && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 var(--space-4) var(--space-4) var(--space-4)'
    }
  }, children));
}
Object.assign(__ds_scope, { DetailRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/DetailRow.jsx", error: String((e && e.message) || e) }); }

// components/data-display/ProgressBar.jsx
try { (() => {
/**
 * Progress indicator. `bar` = thin green fill (step flows, character meters);
 * `steps` = segmented step dots/label ("3 di 5"). Calm, green, restrained.
 */
function ProgressBar({
  value = 0,
  max = 100,
  variant = 'bar',
  label = null,
  style = {}
}) {
  const pct = Math.max(0, Math.min(100, value / max * 100));
  if (variant === 'steps') {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-3)',
        fontFamily: 'var(--font-sans)',
        ...style
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 6,
        flex: 1
      }
    }, Array.from({
      length: max
    }).map((_, i) => /*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        flex: 1,
        height: 5,
        borderRadius: 'var(--radius-pill)',
        background: i < value ? 'var(--green-500)' : 'var(--neutral-200)',
        transition: 'background var(--dur-base)'
      }
    }))), label !== false && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--text-xs)',
        fontWeight: 'var(--fw-semibold)',
        color: 'var(--text-muted)',
        whiteSpace: 'nowrap'
      }
    }, label || `${value} di ${max}`));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 6,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--neutral-200)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${pct}%`,
      height: '100%',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--green-500)',
      transition: 'width var(--dur-slow) var(--ease-out)'
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)'
    }
  }, label));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/feedback/BottomSheet.jsx
try { (() => {
/**
 * Bottom sheet — rounded top, grab handle, optional title, scrim. The Creator
 * App's modal surface. `inline` renders without the fixed scrim (for kit demos).
 */
function BottomSheet({
  open = true,
  title = null,
  onClose,
  children,
  inline = false,
  maxWidth = 412,
  style = {}
}) {
  if (!open) return null;
  const sheet = /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      maxWidth,
      margin: '0 auto',
      background: 'var(--surface-card)',
      borderTopLeftRadius: 'var(--radius-2xl)',
      borderTopRightRadius: 'var(--radius-2xl)',
      boxShadow: 'var(--shadow-sheet)',
      padding: 'var(--space-3) var(--space-5) var(--space-6)',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      padding: 'var(--space-2) 0 var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 5,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--neutral-300)'
    }
  })), title && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xl)',
      fontWeight: 'var(--fw-heavy)',
      color: 'var(--text-heading)',
      letterSpacing: 'var(--ls-tight)'
    }
  }, title), onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClose,
    "aria-label": "Chiudi",
    style: {
      width: 32,
      height: 32,
      borderRadius: '50%',
      border: 'none',
      cursor: 'pointer',
      background: 'var(--surface-sunken)',
      color: 'var(--neutral-700)',
      fontSize: 16
    }
  }, "\u2715")), children);
  if (inline) return sheet;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 'var(--z-sheet)',
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'center',
      background: 'rgba(26, 22, 14, 0.42)',
      backdropFilter: 'blur(2px)'
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center'
    }
  }, sheet));
}
Object.assign(__ds_scope, { BottomSheet });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/BottomSheet.jsx", error: String((e && e.message) || e) }); }

// components/feedback/EmptyState.jsx
try { (() => {
/**
 * Empty / error / loading state. Centered icon chip, calm message, optional action.
 * tone: empty (neutral), error (red), loading (muted, with shimmer dots).
 */
function EmptyState({
  icon = null,
  title,
  message,
  action = null,
  tone = 'empty',
  style = {}
}) {
  const tones = {
    empty: {
      chipBg: 'var(--surface-sunken)',
      chipFg: 'var(--neutral-500)'
    },
    error: {
      chipBg: 'var(--red-50)',
      chipFg: 'var(--red-500)'
    },
    loading: {
      chipBg: 'var(--surface-sunken)',
      chipFg: 'var(--neutral-500)'
    }
  };
  const t = tones[tone] || tones.empty;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      gap: 'var(--space-3)',
      padding: 'var(--space-12) var(--space-6)',
      fontFamily: 'var(--font-sans)',
      maxWidth: 360,
      margin: '0 auto',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      borderRadius: 'var(--radius-lg)',
      background: t.chipBg,
      color: t.chipFg,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 'var(--space-2)'
    }
  }, icon), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xl)',
      fontWeight: 'var(--fw-heavy)',
      color: 'var(--text-heading)',
      letterSpacing: 'var(--ls-tight)'
    }
  }, title), message && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)',
      lineHeight: 'var(--lh-normal)'
    }
  }, message), tone === 'loading' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      marginTop: 'var(--space-2)'
    }
  }, [0, 1, 2].map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: 'var(--neutral-400)',
      animation: `hearthPulse 1.2s ${i * 0.16}s infinite ease-in-out`
    }
  })), /*#__PURE__*/React.createElement("style", null, `@keyframes hearthPulse{0%,100%{opacity:.3;transform:translateY(0)}50%{opacity:1;transform:translateY(-3px)}}`)), action && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-4)'
    }
  }, action));
}
Object.assign(__ds_scope, { EmptyState });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/EmptyState.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
/**
 * Toast — brief inline confirmation/feedback. tone: neutral, success, error.
 * Soft card with a dot + message; not a full notification system.
 */
function Toast({
  message,
  tone = 'neutral',
  icon = null,
  action = null,
  style = {}
}) {
  const tones = {
    neutral: {
      dot: 'var(--neutral-500)'
    },
    success: {
      dot: 'var(--green-500)'
    },
    error: {
      dot: 'var(--red-500)'
    }
  };
  const t = tones[tone] || tones.neutral;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      padding: '12px 16px',
      background: 'var(--neutral-900)',
      color: 'var(--text-on-dark)',
      borderRadius: 'var(--radius-pill)',
      boxShadow: 'var(--shadow-lg)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--fw-semibold)',
      ...style
    }
  }, icon || /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: t.dot,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", null, message), action && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--green-300)',
      fontWeight: 'var(--fw-heavy)',
      cursor: 'pointer',
      marginLeft: 4
    }
  }, action));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Hearth primary action. Pill-shaped. Variants map to the brand's CTA rules:
 * - primary: near-black public CTA      - green: product confirm / success
 * - secondary: white w/ border          - ghost: text + green
 * Always shows a clear disabled state with optional helper line underneath.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  helper = null,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '0 16px',
      height: 38,
      font: 'var(--text-sm)'
    },
    md: {
      padding: '0 24px',
      height: 48,
      font: 'var(--text-md)'
    },
    lg: {
      padding: '0 32px',
      height: 56,
      font: 'var(--text-md)'
    }
  };
  const s = sizes[size] || sizes.md;
  const variants = {
    primary: {
      background: 'var(--cta-fill)',
      color: 'var(--cta-text)',
      border: '1px solid var(--cta-fill)'
    },
    green: {
      background: 'var(--green-500)',
      color: 'var(--text-on-green)',
      border: '1px solid var(--green-500)'
    },
    secondary: {
      background: 'var(--surface-card)',
      color: 'var(--text-heading)',
      border: '1px solid var(--border-strong)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--green-600)',
      border: '1px solid transparent'
    }
  };
  const v = variants[variant] || variants.primary;
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'var(--space-2)',
    width: fullWidth ? '100%' : 'auto',
    height: s.height,
    padding: s.padding,
    fontFamily: 'var(--font-sans)',
    fontWeight: 'var(--fw-heavy)',
    fontSize: s.font,
    letterSpacing: 'var(--ls-tight)',
    lineHeight: 1,
    borderRadius: 'var(--radius-pill)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'transform var(--dur-fast) var(--ease-standard), background var(--dur-base), opacity var(--dur-base)',
    whiteSpace: 'nowrap',
    ...(disabled ? {
      background: 'var(--cta-disabled)',
      color: 'var(--cta-disabled-text)',
      border: '1px solid var(--cta-disabled)'
    } : v)
  };
  const btn = /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    style: {
      ...base,
      ...style
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = 'scale(0.98)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'scale(1)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'scale(1)';
    }
  }, rest), iconLeft, children, iconRight);
  if (!helper) return btn;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 'var(--space-2)',
      width: fullWidth ? '100%' : 'auto'
    }
  }, btn, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-xs)',
      color: 'var(--text-subtle)'
    }
  }, helper));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Chip.jsx
try { (() => {
/**
 * Outlined pill — the signature Hearth tag/label motif from the posters.
 * Used for years, categories, filters, section labels. Optional leading dot/icon.
 */
function Chip({
  children,
  icon = null,
  selected = false,
  tone = 'outline',
  size = 'md',
  onClick,
  style = {}
}) {
  const interactive = !!onClick;
  const sizes = {
    sm: {
      padding: '4px 12px',
      font: 'var(--text-xs)',
      height: 28
    },
    md: {
      padding: '7px 16px',
      font: 'var(--text-sm)',
      height: 36
    }
  };
  const s = sizes[size] || sizes.md;
  const tones = {
    outline: {
      background: 'var(--surface-card)',
      color: 'var(--text-heading)',
      border: '1px solid var(--border-strong)'
    },
    soft: {
      background: 'var(--surface-sunken)',
      color: 'var(--text-muted)',
      border: '1px solid transparent'
    },
    solid: {
      background: 'var(--neutral-900)',
      color: 'var(--text-on-dark)',
      border: '1px solid var(--neutral-900)'
    }
  };
  const base = selected ? {
    background: 'var(--green-500)',
    color: '#fff',
    border: '1px solid var(--green-500)'
  } : tones[tone] || tones.outline;
  return /*#__PURE__*/React.createElement("span", {
    role: interactive ? 'button' : undefined,
    onClick: onClick,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      height: s.height,
      padding: s.padding,
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--fw-semibold)',
      fontSize: s.font,
      letterSpacing: 'var(--ls-tight)',
      whiteSpace: 'nowrap',
      cursor: interactive ? 'pointer' : 'default',
      transition: 'background var(--dur-base), color var(--dur-base)',
      ...base,
      ...style
    }
  }, icon, children);
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Chip.jsx", error: String((e && e.message) || e) }); }

// components/forms/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Circular icon button — top-bar actions (back, share, close), photo overlays.
 * tone: light (white over media), dark (near-black), plain (transparent on neutral).
 */
function IconButton({
  icon,
  tone = 'light',
  size = 'md',
  'aria-label': ariaLabel,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: 36,
    md: 44,
    lg: 52
  };
  const dim = sizes[size] || sizes.md;
  const tones = {
    light: {
      background: 'rgba(255,255,255,0.92)',
      color: 'var(--neutral-900)',
      border: '1px solid rgba(255,255,255,0.6)',
      backdropFilter: 'blur(6px)'
    },
    dark: {
      background: 'var(--neutral-900)',
      color: 'var(--text-on-dark)',
      border: '1px solid var(--neutral-900)'
    },
    plain: {
      background: 'var(--surface-sunken)',
      color: 'var(--neutral-700)',
      border: '1px solid transparent'
    }
  };
  const t = tones[tone] || tones.light;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": ariaLabel,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: dim,
      height: dim,
      borderRadius: 'var(--radius-circle)',
      cursor: 'pointer',
      transition: 'transform var(--dur-fast) var(--ease-standard), background var(--dur-base)',
      flexShrink: 0,
      ...t,
      ...style
    },
    onMouseDown: e => {
      e.currentTarget.style.transform = 'scale(0.94)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'scale(1)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'scale(1)';
    }
  }, rest), icon);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * Text input with optional label, overline style, helper and error.
 * Calm: white fill, 1px warm border, green focus ring.
 */
function Input({
  label,
  overline = false,
  placeholder,
  value,
  defaultValue,
  helper,
  error,
  iconRight = null,
  disabled = false,
  style = {},
  onChange,
  ...rest
}) {
  const [focused, setFocused] = useState(false);
  const borderColor = error ? 'var(--red-500)' : focused ? 'var(--border-focus)' : 'var(--border-soft)';
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: overline ? {
      fontSize: 'var(--text-2xs)',
      fontWeight: 'var(--fw-heavy)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--text-heading)'
    } : {
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--text-heading)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      height: 52,
      padding: '0 16px',
      background: disabled ? 'var(--surface-sunken)' : 'var(--surface-card)',
      border: `1px solid ${borderColor}`,
      borderRadius: 'var(--radius-md)',
      boxShadow: focused && !error ? '0 0 0 3px var(--green-50)' : 'none',
      transition: 'border-color var(--dur-base), box-shadow var(--dur-base)'
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    value: value,
    defaultValue: defaultValue,
    placeholder: placeholder,
    disabled: disabled,
    onChange: onChange,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      flex: 1,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-md)',
      fontWeight: 'var(--fw-regular)',
      color: 'var(--text-body)',
      minWidth: 0
    }
  }, rest)), iconRight), (helper || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: error ? 'var(--red-500)' : 'var(--text-subtle)'
    }
  }, error || helper));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/SelectCard.jsx
try { (() => {
/**
 * Selection card with a radio control — the Creator App "Quanto conosci
 * questo posto?" pattern. Icon chip + title + description + optional tag.
 * Selected = green ring + filled green radio.
 */
function SelectCard({
  icon = null,
  title,
  description,
  tag = null,
  selected = false,
  onClick,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "radio",
    "aria-checked": selected,
    tabIndex: 0,
    onClick: onClick,
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      padding: 'var(--space-5)',
      background: 'var(--surface-card)',
      border: `1.5px solid ${selected ? 'var(--green-500)' : 'var(--border-soft)'}`,
      borderRadius: 'var(--radius-lg)',
      boxShadow: selected ? '0 0 0 3px var(--green-50)' : 'var(--shadow-xs)',
      cursor: 'pointer',
      transition: 'border-color var(--dur-base), box-shadow var(--dur-base)',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, icon && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 'var(--radius-md)',
      background: 'var(--surface-sunken)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--neutral-700)'
    }
  }, icon), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-1)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-lg)',
      fontWeight: 'var(--fw-heavy)',
      color: 'var(--text-heading)',
      letterSpacing: 'var(--ls-tight)'
    }
  }, title), description && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)',
      lineHeight: 'var(--lh-snug)'
    }
  }, description)), tag && /*#__PURE__*/React.createElement("span", {
    style: {
      alignSelf: 'flex-start',
      marginTop: 'var(--space-1)',
      padding: '4px 12px',
      borderRadius: 'var(--radius-pill)',
      border: '1px solid var(--border-strong)',
      background: 'var(--surface-card)',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--text-muted)'
    }
  }, tag)), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      width: 24,
      height: 24,
      flexShrink: 0,
      borderRadius: 'var(--radius-circle)',
      border: `2px solid ${selected ? 'var(--green-500)' : 'var(--border-strong)'}`,
      background: selected ? 'var(--green-500)' : 'transparent',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all var(--dur-base)'
    }
  }, selected && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 9,
      borderRadius: '50%',
      background: '#fff'
    }
  })));
}
Object.assign(__ds_scope, { SelectCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SelectCard.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * Multi-line text area with an optional dictate affordance and a
 * "x / N caratteri consigliati" counter that turns green past a threshold.
 * Mirrors the Creator App "Racconto principale" field.
 */
function Textarea({
  label,
  overline = true,
  placeholder,
  value,
  defaultValue = '',
  recommended = 240,
  showDictate = true,
  rows = 5,
  disabled = false,
  style = {},
  onChange,
  ...rest
}) {
  const [val, setVal] = useState(defaultValue);
  const [focused, setFocused] = useState(false);
  const count = value != null ? value.length : val.length;
  const meetsRec = count > 0;
  const handle = e => {
    if (value == null) setVal(e.target.value);
    onChange && onChange(e);
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: overline ? {
      fontSize: 'var(--text-2xs)',
      fontWeight: 'var(--fw-heavy)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--text-heading)'
    } : {
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--text-heading)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      background: disabled ? 'var(--surface-sunken)' : 'var(--surface-card)',
      border: `1px solid ${focused ? 'var(--border-focus)' : 'var(--border-soft)'}`,
      borderRadius: 'var(--radius-lg)',
      boxShadow: focused ? '0 0 0 3px var(--green-50)' : 'none',
      transition: 'border-color var(--dur-base), box-shadow var(--dur-base)',
      padding: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("textarea", _extends({
    value: value != null ? value : val,
    placeholder: placeholder,
    rows: rows,
    disabled: disabled,
    onChange: handle,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      width: '100%',
      border: 'none',
      outline: 'none',
      background: 'transparent',
      resize: 'none',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-md)',
      lineHeight: 'var(--lh-normal)',
      color: 'var(--text-body)',
      display: 'block'
    }
  }, rest)), showDictate && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      marginTop: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '6px 12px',
      borderRadius: 'var(--radius-pill)',
      border: '1px solid var(--border-strong)',
      background: 'var(--surface-card)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--text-heading)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      fontSize: 13
    }
  }, "\uD83C\uDF99"), " Detta"))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: meetsRec ? 'var(--green-600)' : 'var(--text-subtle)'
    }
  }, count, " / ", recommended, " caratteri consigliati"));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
/**
 * Segmented tabs. underline = editorial/desktop section nav; segment = the
 * Creator App pill toggle ("Correzioni / Anteprima scheda").
 */
function Tabs({
  tabs = [],
  active,
  onChange,
  variant = 'underline',
  style = {}
}) {
  if (variant === 'segment') {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'inline-flex',
        gap: 4,
        padding: 4,
        background: 'var(--surface-sunken)',
        borderRadius: 'var(--radius-pill)',
        fontFamily: 'var(--font-sans)',
        ...style
      }
    }, tabs.map(t => {
      const on = t.value === active;
      return /*#__PURE__*/React.createElement("button", {
        key: t.value,
        type: "button",
        onClick: () => onChange && onChange(t.value),
        style: {
          padding: '9px 18px',
          border: 'none',
          borderRadius: 'var(--radius-pill)',
          cursor: 'pointer',
          background: on ? 'var(--surface-card)' : 'transparent',
          color: on ? 'var(--green-600)' : 'var(--text-muted)',
          fontWeight: 'var(--fw-heavy)',
          fontSize: 'var(--text-sm)',
          boxShadow: on ? 'var(--shadow-xs)' : 'none',
          transition: 'all var(--dur-base)'
        }
      }, t.label);
    }));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-6)',
      borderBottom: '1px solid var(--border-soft)',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, tabs.map(t => {
    const on = t.value === active;
    return /*#__PURE__*/React.createElement("button", {
      key: t.value,
      type: "button",
      onClick: () => onChange && onChange(t.value),
      style: {
        padding: '0 0 var(--space-3)',
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
        color: on ? 'var(--text-heading)' : 'var(--text-muted)',
        fontWeight: on ? 'var(--fw-heavy)' : 'var(--fw-semibold)',
        fontSize: 'var(--text-md)',
        borderBottom: `2px solid ${on ? 'var(--green-500)' : 'transparent'}`,
        marginBottom: -1,
        transition: 'color var(--dur-base)',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8
      }
    }, t.label, t.count != null && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--text-xs)',
        fontWeight: 'var(--fw-heavy)',
        padding: '1px 8px',
        borderRadius: 'var(--radius-pill)',
        background: on ? 'var(--green-50)' : 'var(--surface-sunken)',
        color: on ? 'var(--green-700)' : 'var(--text-muted)'
      }
    }, t.count));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/navigation/TopBar.jsx
try { (() => {
/**
 * App top bar. `media` = dark translucent bar that floats over a photo
 * (back · centered pill title "Info 3 di 5" · close). `solid` = plain bar.
 */
function TopBar({
  left = null,
  title = null,
  badge = null,
  right = null,
  variant = 'solid',
  style = {}
}) {
  const onMedia = variant === 'media';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-3)',
      height: 64,
      padding: '0 var(--space-4)',
      background: onMedia ? 'transparent' : 'var(--surface-card)',
      borderBottom: onMedia ? 'none' : '1px solid var(--border-soft)',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      minWidth: 44
    }
  }, left), title != null && /*#__PURE__*/React.createElement("div", {
    style: onMedia ? {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      padding: '8px 16px',
      borderRadius: 'var(--radius-pill)',
      background: 'rgba(20,18,14,0.72)',
      backdropFilter: 'blur(8px)',
      color: 'var(--text-on-dark)',
      fontWeight: 'var(--fw-heavy)',
      fontSize: 'var(--text-sm)'
    } : {
      fontWeight: 'var(--fw-heavy)',
      fontSize: 'var(--text-lg)',
      color: 'var(--text-heading)',
      letterSpacing: 'var(--ls-tight)',
      textAlign: 'center',
      flex: 1
    }
  }, title, badge != null && /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: onMedia ? 0.6 : 1,
      fontWeight: 'var(--fw-semibold)',
      color: onMedia ? 'inherit' : 'var(--text-subtle)'
    }
  }, badge)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      minWidth: 44,
      justifyContent: 'flex-end'
    }
  }, right));
}
Object.assign(__ds_scope, { TopBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/TopBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/creator-app/ContentStatusScreen.jsx
try { (() => {
// Creator App — content status / detail ("In revisione").
const {
  TopBar,
  IconButton,
  Badge,
  Card,
  Avatar,
  Tabs,
  Button
} = window.HearthDesignSystem_7ae78b;
function ContentStatusScreen({
  onRestart,
  lucideIcon
}) {
  const I = lucideIcon;
  const [tab, setTab] = React.useState('fix');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      background: 'var(--surface-app)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 360,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/imagery/ref-content-status.jpg",
    alt: "Torre dello Zenobito",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to bottom, rgba(0,0,0,.18) 0%, rgba(0,0,0,0) 22%, rgba(0,0,0,0) 60%, rgba(0,0,0,.5) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 18,
      left: 0,
      right: 0
    }
  }, /*#__PURE__*/React.createElement(TopBar, {
    variant: "solid",
    style: {
      background: 'transparent',
      borderBottom: 'none'
    },
    left: /*#__PURE__*/React.createElement(IconButton, {
      icon: /*#__PURE__*/React.createElement(I, {
        n: "arrow-left"
      }),
      tone: "light",
      "aria-label": "Indietro"
    }),
    right: /*#__PURE__*/React.createElement(IconButton, {
      icon: /*#__PURE__*/React.createElement(I, {
        n: "share"
      }),
      tone: "light",
      "aria-label": "Condividi"
    })
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 16,
      right: 16,
      bottom: 16,
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    label: "In revisione",
    variant: "review",
    onLight: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Marta",
    size: 34,
    ring: true,
    src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&q=70"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      color: '#fff',
      fontSize: 13,
      lineHeight: 1.2
    }
  }, /*#__PURE__*/React.createElement("b", null, "Raccontato da Marta"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: .85
    }
  }, "di Capraia (Italia)"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: '20px 20px 0',
      overflowY: 'auto'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 800,
      fontSize: 26,
      letterSpacing: '-0.02em',
      color: 'var(--text-heading)',
      margin: '0 0 4px'
    }
  }, "Torre dello Zenobito"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: 'var(--text-muted)',
      margin: '0 0 18px'
    }
  }, "Capraia (LI), Italia"), /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 'var(--radius-md)',
      background: 'var(--surface-sunken)',
      color: 'var(--neutral-700)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(I, {
    n: "clock",
    s: 20
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 800,
      fontSize: 18,
      color: 'var(--text-heading)'
    }
  }, "In revisione")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      color: 'var(--text-body)',
      lineHeight: 1.5,
      margin: '0 0 12px'
    }
  }, "Stiamo controllando contenuti, foto e testi.", /*#__PURE__*/React.createElement("br", null), "Se serve qualcosa, ti scriviamo qui."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      color: 'var(--text-subtle)'
    }
  }, "Inviato il 12 giugno alle ore 23:07", /*#__PURE__*/React.createElement("span", {
    style: {
      width: 3,
      height: 3,
      borderRadius: '50%',
      background: 'var(--neutral-400)'
    }
  }), /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--text-muted)'
    }
  }, "In revisione Hearth"))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 18
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      borderTop: '1px solid var(--border-soft)',
      padding: '14px 20px 22px',
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    variant: "segment",
    active: tab,
    onChange: v => {
      setTab(v);
      if (v === 'preview') onRestart && onRestart();
    },
    tabs: [{
      label: 'Correzioni',
      value: 'fix'
    }, {
      label: 'Anteprima scheda',
      value: 'preview'
    }]
  })));
}
window.ContentStatusScreen = ContentStatusScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/creator-app/ContentStatusScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/creator-app/KnowledgeChoiceScreen.jsx
try { (() => {
// Creator App — "Quanto conosci questo posto?" knowledge-choice step.
const {
  TopBar,
  IconButton,
  SelectCard,
  Button,
  ProgressBar,
  Chip
} = window.HearthDesignSystem_7ae78b;
function KnowledgeChoiceScreen({
  onContinue,
  lucideIcon
}) {
  const I = lucideIcon;
  const [choice, setChoice] = React.useState(null);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      background: 'var(--surface-app)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--neutral-900)',
      paddingBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 18
    }
  }), /*#__PURE__*/React.createElement(TopBar, {
    variant: "media",
    left: /*#__PURE__*/React.createElement(IconButton, {
      icon: /*#__PURE__*/React.createElement(I, {
        n: "arrow-left"
      }),
      tone: "dark",
      "aria-label": "Indietro"
    }),
    title: "Info",
    badge: "3 di 5",
    right: /*#__PURE__*/React.createElement(IconButton, {
      icon: /*#__PURE__*/React.createElement(I, {
        n: "x"
      }),
      tone: "dark",
      "aria-label": "Chiudi"
    })
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: 'var(--surface-card)',
      borderTopLeftRadius: 24,
      borderTopRightRadius: 24,
      marginTop: -16,
      padding: '22px 20px 0',
      overflowY: 'auto'
    }
  }, /*#__PURE__*/React.createElement(Chip, {
    icon: /*#__PURE__*/React.createElement(I, {
      n: "map-pin",
      s: 14
    }),
    style: {
      borderColor: 'var(--green-300)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-subtle)',
      fontWeight: 600
    }
  }, "Luogo scelto:\xA0"), "Ristorante Il Vecchio Casale"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 800,
      fontSize: 28,
      letterSpacing: '-0.02em',
      color: 'var(--text-heading)',
      margin: '18px 0 6px',
      lineHeight: 1.1
    }
  }, "Quanto conosci", /*#__PURE__*/React.createElement("br", null), "questo posto?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      color: 'var(--text-muted)',
      margin: '0 0 22px'
    }
  }, "Ci aiuta a chiederti solo le informazioni giuste."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      paddingBottom: 24
    }
  }, /*#__PURE__*/React.createElement(SelectCard, {
    icon: /*#__PURE__*/React.createElement(I, {
      n: "home",
      s: 20
    }),
    title: "Lo conosco bene",
    description: "Vivo qui, lo frequento spesso o lo conosco davvero.",
    tag: "Dettagli locali",
    selected: choice === 'local',
    onClick: () => setChoice('local')
  }), /*#__PURE__*/React.createElement(SelectCard, {
    icon: /*#__PURE__*/React.createElement(I, {
      n: "compass",
      s: 20
    }),
    title: "L'ho scoperto durante una visita",
    description: "Mi ha colpito e voglio segnalarlo, anche se non conosco tutti i dettagli.",
    tag: "Segnalazione",
    selected: choice === 'visit',
    onClick: () => setChoice('visit')
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      borderTop: '1px solid var(--border-soft)',
      padding: '14px 20px 22px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    fullWidth: true,
    disabled: !choice,
    helper: !choice ? 'In base alla scelta, ti faremo solo le domande davvero utili.' : null,
    onClick: onContinue
  }, "Continua")));
}
window.KnowledgeChoiceScreen = KnowledgeChoiceScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/creator-app/KnowledgeChoiceScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/creator-app/StoryInputScreen.jsx
try { (() => {
// Creator App — "Raccontalo a modo tuo" story-input step.
const {
  TopBar,
  IconButton,
  Chip,
  Textarea,
  DetailRow,
  Button
} = window.HearthDesignSystem_7ae78b;
function StoryInputScreen({
  onContinue,
  lucideIcon
}) {
  const I = lucideIcon;
  const [text, setText] = React.useState('');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      background: 'var(--surface-app)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--neutral-900)',
      paddingBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 18
    }
  }), /*#__PURE__*/React.createElement(TopBar, {
    variant: "media",
    left: /*#__PURE__*/React.createElement(IconButton, {
      icon: /*#__PURE__*/React.createElement(I, {
        n: "arrow-left"
      }),
      tone: "dark",
      "aria-label": "Indietro"
    }),
    title: "Info",
    badge: "3 di 5",
    right: /*#__PURE__*/React.createElement(IconButton, {
      icon: /*#__PURE__*/React.createElement(I, {
        n: "x"
      }),
      tone: "dark",
      "aria-label": "Chiudi"
    })
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: 'var(--surface-card)',
      borderTopLeftRadius: 24,
      borderTopRightRadius: 24,
      marginTop: -16,
      padding: '22px 20px 0',
      overflowY: 'auto'
    }
  }, /*#__PURE__*/React.createElement(Chip, {
    icon: /*#__PURE__*/React.createElement(I, {
      n: "map-pin",
      s: 14
    }),
    style: {
      borderColor: 'var(--green-300)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-subtle)',
      fontWeight: 600
    }
  }, "Luogo scelto:\xA0"), "Tenuta Terra di Fuoco"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 800,
      fontSize: 28,
      letterSpacing: '-0.02em',
      color: 'var(--text-heading)',
      margin: '18px 0 6px',
      lineHeight: 1.1
    }
  }, "Raccontalo a modo tuo"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      color: 'var(--text-muted)',
      margin: '0 0 22px',
      lineHeight: 1.45
    }
  }, "Scrivi quello che sai davvero.", /*#__PURE__*/React.createElement("br", null), "Hearth ti aiuter\xE0 a darle forma."), /*#__PURE__*/React.createElement(Textarea, {
    label: "Racconto principale",
    value: text,
    onChange: e => setText(e.target.value),
    recommended: 240,
    placeholder: "Scrivi anche in modo grezzo:\n•  che cos'è\n•  cosa lo rende speciale\n•  cosa non perdere\n•  una cosa utile da sapere"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      margin: '26px 0 12px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 800,
      fontSize: 11,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--text-heading)'
    }
  }, "Dettagli utili"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: 'var(--text-muted)',
      fontWeight: 600
    }
  }, "0/3 completati")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: 'var(--text-subtle)',
      margin: '0 0 14px'
    }
  }, "Completa tutte le info: sono ci\xF2 che rende davvero utile la scheda."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      paddingBottom: 24
    }
  }, /*#__PURE__*/React.createElement(DetailRow, {
    icon: /*#__PURE__*/React.createElement(I, {
      n: "lightbulb",
      s: 20
    }),
    title: "Consiglio locale",
    hint: "Una dritta pratica che rende migliore la visita."
  }, /*#__PURE__*/React.createElement(Textarea, {
    showDictate: false,
    recommended: 120,
    placeholder: "Es. chiedi del tavolo sotto il pergolato."
  })), /*#__PURE__*/React.createElement(DetailRow, {
    icon: /*#__PURE__*/React.createElement(I, {
      n: "clock",
      s: 20
    }),
    title: "Momento migliore",
    hint: "Quando conviene andarci e perch\xE9."
  }), /*#__PURE__*/React.createElement(DetailRow, {
    icon: /*#__PURE__*/React.createElement(I, {
      n: "banknote",
      s: 20
    }),
    title: "Costo o condizioni",
    hint: "Dicci se \xE8 gratuito o aggiungi una dritta utile sul costo."
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      borderTop: '1px solid var(--border-soft)',
      padding: '14px 20px 22px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    fullWidth: true,
    disabled: text.trim().length === 0,
    helper: text.trim().length === 0 ? 'Scrivi una breve traccia per continuare.' : null,
    onClick: onContinue
  }, "Continua")));
}
window.StoryInputScreen = StoryInputScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/creator-app/StoryInputScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/editorial-backoffice/ReviewWorkspace.jsx
try { (() => {
// Backoffice — review workspace: queue list + content review panel.
const {
  Tabs,
  Badge,
  Avatar,
  Button,
  Chip,
  Card,
  Textarea
} = window.HearthDesignSystem_7ae78b;
const QUEUE = [{
  id: 1,
  title: 'Torre dello Zenobito',
  cat: 'Luogo',
  who: 'Marta',
  place: 'Capraia (LI)',
  img: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=200&q=70',
  status: {
    label: 'In revisione',
    variant: 'review'
  },
  active: true
}, {
  id: 2,
  title: 'Tenuta Terra di Fuoco',
  cat: 'Prodotto',
  who: 'Giulia',
  place: 'Suvereto (LI)',
  img: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=200&q=70',
  status: {
    label: 'In revisione',
    variant: 'review'
  }
}, {
  id: 3,
  title: 'Festa della Mietitura',
  cat: 'Evento',
  who: 'Paolo',
  place: 'Volterra (PI)',
  img: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=200&q=70',
  status: {
    label: 'Correzioni',
    variant: 'correction'
  }
}, {
  id: 4,
  title: 'Sentiero del Diavolo',
  cat: 'Attività',
  who: 'Marta',
  place: 'Capraia (LI)',
  img: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=200&q=70',
  status: {
    label: 'In revisione',
    variant: 'review'
  }
}];
function ReviewWorkspace({
  lucideIcon
}) {
  const I = lucideIcon;
  const [sel, setSel] = React.useState(1);
  const [tab, setTab] = React.useState('queue');
  const item = QUEUE.find(q => q.id === sel) || QUEUE[0];
  return /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      display: 'flex',
      minWidth: 0,
      background: 'var(--surface-app)',
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      width: 360,
      flexShrink: 0,
      borderRight: '1px solid var(--border-soft)',
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--surface-card)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '22px 22px 14px'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontWeight: 800,
      fontSize: 22,
      color: 'var(--text-heading)',
      margin: '0 0 16px',
      letterSpacing: '-0.01em'
    }
  }, "Revisione contenuti"), /*#__PURE__*/React.createElement(Tabs, {
    variant: "underline",
    active: tab,
    onChange: setTab,
    tabs: [{
      label: 'In coda',
      value: 'queue',
      count: 12
    }, {
      label: 'Correzioni',
      value: 'fix',
      count: 3
    }, {
      label: 'Approvati',
      value: 'done'
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '6px 14px 18px',
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, QUEUE.map(q => {
    const on = q.id === sel;
    return /*#__PURE__*/React.createElement("div", {
      key: q.id,
      onClick: () => setSel(q.id),
      style: {
        display: 'flex',
        gap: 12,
        padding: 10,
        borderRadius: 'var(--radius-md)',
        cursor: 'pointer',
        background: on ? 'var(--surface-sunken)' : 'transparent',
        border: `1px solid ${on ? 'var(--border-strong)' : 'transparent'}`
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: q.img,
      alt: "",
      style: {
        width: 56,
        height: 56,
        borderRadius: 'var(--radius-sm)',
        objectFit: 'cover',
        flexShrink: 0
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        fontWeight: 800,
        letterSpacing: '.1em',
        textTransform: 'uppercase',
        color: 'var(--text-subtle)'
      }
    }, q.cat), /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 800,
        fontSize: 15,
        color: 'var(--text-heading)',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    }, q.title), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        marginTop: 6
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      label: q.status.label,
      variant: q.status.variant
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: 'var(--text-subtle)'
      }
    }, "\xB7 ", q.place))));
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      flex: 1,
      overflowY: 'auto',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 260
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: item.img.replace('w=200', 'w=1200'),
    alt: item.title,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to bottom, rgba(0,0,0,.1), rgba(0,0,0,.45))'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 28,
      bottom: 22
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    label: item.status.label,
    variant: item.status.variant,
    onLight: true
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-sans)',
      color: '#fff',
      fontWeight: 800,
      fontSize: 30,
      letterSpacing: '-0.02em',
      margin: '10px 0 0'
    }
  }, item.title), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'rgba(255,255,255,.9)',
      fontSize: 14,
      margin: '4px 0 0'
    }
  }, item.cat, " \xB7 ", item.place, " \xB7 Raccontato da ", item.who))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '24px 28px',
      maxWidth: 720
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement(Chip, {
    icon: /*#__PURE__*/React.createElement(I, {
      n: "check",
      s: 14
    })
  }, "4 foto"), /*#__PURE__*/React.createElement(Chip, {
    icon: /*#__PURE__*/React.createElement(I, {
      n: "type",
      s: 14
    })
  }, "Racconto \xB7 238 car."), /*#__PURE__*/React.createElement(Chip, {
    icon: /*#__PURE__*/React.createElement(I, {
      n: "map-pin",
      s: 14
    })
  }, "Geolocalizzato")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 800,
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      color: 'var(--text-subtle)',
      marginBottom: 10
    }
  }, "Racconto principale"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      lineHeight: 1.65,
      color: 'var(--text-body)',
      margin: '0 0 26px'
    }
  }, "Una torre genovese del Cinquecento a strapiombo sul mare, all'estremit\xE0 sud di Capraia. Ci si arriva con una camminata tra la macchia mediterranea: vale la pena partire un'ora prima del tramonto, quando la luce accende la pietra."), /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: 18,
      marginBottom: 24,
      background: 'var(--amber-50)',
      border: '1px solid transparent'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--amber-700)'
    }
  }, /*#__PURE__*/React.createElement(I, {
    n: "message-square",
    s: 18
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 800,
      fontSize: 14,
      color: 'var(--amber-700)'
    }
  }, "Nota interna")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14.5,
      color: 'var(--text-body)',
      margin: 0,
      lineHeight: 1.5
    }
  }, "Bel racconto. Manca il dettaglio sul costo/accesso \u2014 chiedere una correzione leggera all'autrice."))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      bottom: 0,
      background: 'var(--surface-card)',
      borderTop: '1px solid var(--border-soft)',
      padding: '16px 28px',
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "green",
    iconLeft: /*#__PURE__*/React.createElement(I, {
      n: "check",
      s: 18
    })
  }, "Approva e pubblica"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    iconLeft: /*#__PURE__*/React.createElement(I, {
      n: "pencil",
      s: 16
    })
  }, "Richiedi correzioni"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost"
  }, "Salta"))));
}
window.ReviewWorkspace = ReviewWorkspace;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/editorial-backoffice/ReviewWorkspace.jsx", error: String((e && e.message) || e) }); }

// ui_kits/editorial-backoffice/Sidebar.jsx
try { (() => {
// Backoffice — left navigation rail (shared desktop shell).
const {
  Avatar,
  Badge
} = window.HearthDesignSystem_7ae78b;
function Sidebar({
  active = 'review',
  lucideIcon,
  brandMark
}) {
  const I = lucideIcon;
  const items = [{
    id: 'review',
    label: 'Revisione',
    icon: 'clipboard-check',
    count: 12
  }, {
    id: 'queue',
    label: 'In coda',
    icon: 'inbox'
  }, {
    id: 'published',
    label: 'Pubblicati',
    icon: 'globe'
  }, {
    id: 'creators',
    label: 'Explorer',
    icon: 'users'
  }, {
    id: 'territories',
    label: 'Territori',
    icon: 'map'
  }];
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 248,
      flexShrink: 0,
      background: 'var(--surface-card)',
      borderRight: '1px solid var(--border-soft)',
      display: 'flex',
      flexDirection: 'column',
      padding: '22px 16px',
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '0 8px 22px'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: brandMark,
    alt: "",
    style: {
      width: 26,
      height: 26
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: 26,
      color: 'var(--ink-800)',
      letterSpacing: '-0.01em'
    }
  }, "Hearth")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 800,
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      color: 'var(--text-subtle)',
      padding: '0 8px 10px'
    }
  }, "Redazione"), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, items.map(it => {
    const on = it.id === active;
    return /*#__PURE__*/React.createElement("div", {
      key: it.id,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '11px 12px',
        borderRadius: 'var(--radius-md)',
        cursor: 'pointer',
        background: on ? 'var(--surface-sunken)' : 'transparent',
        color: on ? 'var(--text-heading)' : 'var(--text-muted)',
        fontWeight: on ? 800 : 600,
        fontSize: 14.5
      }
    }, /*#__PURE__*/React.createElement(I, {
      n: it.icon,
      s: 19
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, it.label), it.count != null && /*#__PURE__*/React.createElement(Badge, {
      label: String(it.count),
      variant: "progress"
    }));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '10px 8px',
      borderTop: '1px solid var(--border-soft)'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Luca Ferri",
    size: 34
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      lineHeight: 1.2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 800,
      fontSize: 13.5,
      color: 'var(--text-heading)'
    }
  }, "Luca Ferri"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-subtle)'
    }
  }, "Editor"))));
}
window.Sidebar = Sidebar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/editorial-backoffice/Sidebar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/municipality-dashboard/LibraryScreen.jsx
try { (() => {
// Municipality Dashboard — content library.
const {
  ContentCard,
  Chip,
  Input,
  Button,
  Avatar,
  Tabs,
  Badge
} = window.HearthDesignSystem_7ae78b;
const LIB = [{
  img: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&q=70',
  cat: 'Luogo',
  title: 'Torre dello Zenobito',
  loc: 'Capraia (LI)',
  status: {
    label: 'Pubblicato',
    variant: 'published'
  },
  who: 'Marta'
}, {
  img: 'https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?w=600&q=70',
  cat: 'Prodotto',
  title: 'Olio della Tenuta',
  loc: 'Suvereto (LI)',
  status: {
    label: 'Pubblicato',
    variant: 'published'
  },
  who: 'Giulia'
}, {
  img: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&q=70',
  cat: 'Evento',
  title: 'Festa della Mietitura',
  loc: 'Volterra (PI)',
  status: {
    label: 'In revisione',
    variant: 'review'
  },
  who: 'Paolo'
}, {
  img: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&q=70',
  cat: 'Attività',
  title: 'Sentiero del Diavolo',
  loc: 'Capraia (LI)',
  status: {
    label: 'Pubblicato',
    variant: 'published'
  },
  who: 'Marta'
}, {
  img: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=600&q=70',
  cat: 'Luogo',
  title: 'Borgo di Montefioralle',
  loc: 'Greve (FI)',
  status: {
    label: 'Approvato',
    variant: 'approved'
  },
  who: 'Anna'
}, {
  img: 'https://images.unsplash.com/photo-1473445730015-841f29a9490b?w=600&q=70',
  cat: 'Persona',
  title: 'Maestro d\'ascia Bartoli',
  loc: 'Viareggio (LU)',
  status: {
    label: 'Pubblicato',
    variant: 'published'
  },
  who: 'Luca'
}];
function LibraryScreen({
  lucideIcon
}) {
  const I = lucideIcon;
  const [filter, setFilter] = React.useState('Tutti');
  const [tab, setTab] = React.useState('library');
  const cats = ['Tutti', 'Luoghi', 'Attività', 'Persone', 'Prodotti', 'Eventi'];
  const map = {
    Luoghi: 'Luogo',
    Attività: 'Attività',
    Persone: 'Persona',
    Prodotti: 'Prodotto',
    Eventi: 'Evento'
  };
  const shown = filter === 'Tutti' ? LIB : LIB.filter(x => x.cat === map[filter]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      overflowY: 'auto',
      background: 'var(--surface-app)',
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: '18px 36px',
      borderBottom: '1px solid var(--border-soft)',
      background: 'var(--surface-card)',
      position: 'sticky',
      top: 0,
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    variant: "underline",
    active: tab,
    onChange: setTab,
    tabs: [{
      label: 'Libreria',
      value: 'library'
    }, {
      label: 'Collezioni',
      value: 'coll'
    }, {
      label: 'Guida pubblica',
      value: 'guide'
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 280
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "Cerca luoghi, eventi\u2026",
    iconRight: /*#__PURE__*/React.createElement(I, {
      n: "search",
      s: 18
    }),
    style: {
      gap: 0
    }
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    iconLeft: /*#__PURE__*/React.createElement(I, {
      n: "plus",
      s: 18
    })
  }, "Nuova collezione")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '28px 36px 48px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 800,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'var(--green-600)',
      marginBottom: 8
    }
  }, "Comune di Capraia Isola"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: 44,
      letterSpacing: '-0.02em',
      color: 'var(--ink-800)',
      margin: 0,
      lineHeight: 1
    }
  }, "Libreria del territorio")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 28,
      textAlign: 'right'
    }
  }, [['48', 'Schede'], ['31', 'Pubblicate'], ['6', 'Explorer']].map(([n, l]) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 800,
      fontSize: 28,
      color: 'var(--text-heading)'
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'var(--text-subtle)'
    }
  }, l))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginBottom: 26,
      flexWrap: 'wrap'
    }
  }, cats.map(c => /*#__PURE__*/React.createElement(Chip, {
    key: c,
    selected: filter === c,
    onClick: () => setFilter(c)
  }, c))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 22
    }
  }, shown.map((x, i) => /*#__PURE__*/React.createElement(ContentCard, {
    key: i,
    image: x.img,
    category: x.cat,
    title: x.title,
    location: x.loc,
    status: x.status,
    author: {
      name: x.who
    },
    onClick: () => {}
  })))));
}
window.LibraryScreen = LibraryScreen;
function MuniSidebar({
  lucideIcon,
  brandMark
}) {
  const I = lucideIcon;
  const items = [{
    id: 'lib',
    label: 'Libreria',
    icon: 'layout-grid',
    on: true
  }, {
    id: 'coll',
    label: 'Collezioni',
    icon: 'folder'
  }, {
    id: 'map',
    label: 'Mappa',
    icon: 'map'
  }, {
    id: 'guide',
    label: 'Guida pubblica',
    icon: 'globe'
  }, {
    id: 'team',
    label: 'Explorer',
    icon: 'users'
  }];
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 240,
      flexShrink: 0,
      background: 'var(--surface-card)',
      borderRight: '1px solid var(--border-soft)',
      display: 'flex',
      flexDirection: 'column',
      padding: '22px 16px',
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '0 8px 24px'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: brandMark,
    alt: "",
    style: {
      width: 26,
      height: 26
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: 26,
      color: 'var(--ink-800)'
    }
  }, "Hearth")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, items.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.id,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '11px 12px',
      borderRadius: 'var(--radius-md)',
      cursor: 'pointer',
      background: it.on ? 'var(--surface-sunken)' : 'transparent',
      color: it.on ? 'var(--text-heading)' : 'var(--text-muted)',
      fontWeight: it.on ? 800 : 600,
      fontSize: 14.5
    }
  }, /*#__PURE__*/React.createElement(I, {
    n: it.icon,
    s: 19
  }), /*#__PURE__*/React.createElement("span", null, it.label)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '10px 8px',
      borderTop: '1px solid var(--border-soft)'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Comune Capraia",
    size: 34
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      lineHeight: 1.2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 800,
      fontSize: 13,
      color: 'var(--text-heading)'
    }
  }, "Capraia Isola"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-subtle)'
    }
  }, "Municipalit\xE0"))));
}
window.MuniSidebar = MuniSidebar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/municipality-dashboard/LibraryScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/public-guides/PublicGuide.jsx
try { (() => {
// Public Digital Guide — editorial, image-first web page.
const {
  Button,
  Chip,
  ContentCard,
  Badge,
  Avatar
} = window.HearthDesignSystem_7ae78b;
function GuideNav({
  lucideIcon
}) {
  const I = lucideIcon;
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '18px 44px',
      background: 'rgba(250,246,234,0.82)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--border-editorial)',
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: 30,
      color: 'var(--ink-800)',
      letterSpacing: '-0.01em'
    }
  }, "Hearth"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 30,
      fontSize: 14.5,
      fontWeight: 600,
      color: 'var(--ink-700)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Luoghi"), /*#__PURE__*/React.createElement("span", null, "Esperienze"), /*#__PURE__*/React.createElement("span", null, "Persone"), /*#__PURE__*/React.createElement("span", null, "Eventi"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm"
  }, "Esplora la guida")));
}
function PublicGuide({
  lucideIcon
}) {
  const I = lucideIcon;
  const places = [{
    img: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=700&q=75',
    cat: 'Luogo',
    title: 'Torre dello Zenobito',
    loc: 'Capraia (LI)',
    who: 'Marta'
  }, {
    img: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=700&q=75',
    cat: 'Attività',
    title: 'Sentiero del Diavolo',
    loc: 'Capraia (LI)',
    who: 'Marta'
  }, {
    img: 'https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?w=700&q=75',
    cat: 'Prodotto',
    title: 'Olio della Tenuta',
    loc: 'Suvereto (LI)',
    who: 'Giulia'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--cream-100)',
      fontFamily: 'var(--font-sans)',
      minHeight: '100%'
    }
  }, /*#__PURE__*/React.createElement(GuideNav, {
    lucideIcon: I
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '64px 44px 40px',
      maxWidth: 1180,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(Chip, {
    icon: /*#__PURE__*/React.createElement(I, {
      n: "map-pin",
      s: 14
    }),
    style: {
      marginBottom: 26
    }
  }, "Comune di Capraia Isola"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: 'clamp(48px, 7vw, 92px)',
      lineHeight: 0.98,
      letterSpacing: '-0.025em',
      color: 'var(--ink-800)',
      margin: '0 0 28px',
      maxWidth: 12 + 'ch'
    }
  }, "Un'isola da ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'italic'
    }
  }, "raccontare")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 19,
      lineHeight: 1.6,
      color: 'var(--ink-700)',
      maxWidth: 560,
      margin: '0 0 34px'
    }
  }, "Luoghi, mestieri e storie di Capraia, raccontati da chi li vive davvero. Una guida viva, costruita insieme alla comunit\xE0."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement(I, {
      n: "arrow-right",
      s: 18
    })
  }, "Inizia a esplorare"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg"
  }, "Guarda la mappa"))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '20px 44px 0',
      maxWidth: 1180,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      borderRadius: 'var(--radius-2xl)',
      overflow: 'hidden',
      height: 460
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://images.unsplash.com/photo-1530538987395-032d1800fdd4?w=1400&q=80",
    alt: "Capraia",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to bottom, rgba(0,0,0,0) 50%, rgba(0,0,0,.5))'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 34,
      bottom: 30,
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    label: "Storia in evidenza",
    variant: "published"
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: 40,
      margin: '14px 0 0',
      letterSpacing: '-0.01em'
    }
  }, "La Capraia dei pescatori")))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '64px 44px',
      maxWidth: 1180,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      marginBottom: 30
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: 40,
      color: 'var(--ink-800)',
      margin: 0,
      letterSpacing: '-0.01em'
    }
  }, "Da non perdere"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontWeight: 700,
      fontSize: 14.5,
      color: 'var(--ink-700)',
      cursor: 'pointer'
    }
  }, "Tutti i luoghi ", /*#__PURE__*/React.createElement(I, {
    n: "arrow-right",
    s: 16
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 24
    }
  }, places.map((p, i) => /*#__PURE__*/React.createElement(ContentCard, {
    key: i,
    image: p.img,
    category: p.cat,
    title: p.title,
    location: p.loc,
    author: {
      name: p.who
    },
    onClick: () => {},
    style: {
      background: 'var(--surface-card)'
    }
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '0 44px 72px',
      maxWidth: 1180,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--ink-800)',
      borderRadius: 'var(--radius-2xl)',
      padding: '56px 48px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: 'clamp(34px,4vw,52px)',
      color: 'var(--cream-100)',
      margin: '0 0 14px',
      letterSpacing: '-0.02em',
      lineHeight: 1.05
    }
  }, "Conosci un luogo da ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'italic'
    }
  }, "raccontare?")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      color: 'rgba(250,246,234,0.7)',
      maxWidth: 480,
      margin: '0 auto 28px',
      lineHeight: 1.55
    }
  }, "Diventa explorer di Capraia e aiuta a custodire la memoria del territorio."), /*#__PURE__*/React.createElement(Button, {
    variant: "green",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement(I, {
      n: "arrow-right",
      s: 18
    })
  }, "Candidati come explorer"))), /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: '1px solid var(--border-editorial)',
      padding: '32px 44px',
      maxWidth: 1180,
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      color: 'var(--ink-700)',
      fontSize: 13.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 22,
      color: 'var(--ink-800)'
    }
  }, "Hearth"), /*#__PURE__*/React.createElement("span", null, "Societ\xE0 Benefit \xB7 Una guida viva dei territori")));
}
window.PublicGuide = PublicGuide;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/public-guides/PublicGuide.jsx", error: String((e && e.message) || e) }); }

// ui_kits/traveler-web/DetailMap.jsx
try { (() => {
/* global React */
// Content detail (person + place + story + experience) + Map discovery
const {
  Avatar,
  Button,
  Chip,
  IconButton,
  Badge
} = window.HearthDesignSystem_7ae78b;
const {
  TKIcon: Icon,
  Media,
  gradientFor,
  DATA,
  PeopleCard,
  MiniMap
} = window;

// ============================================================
// DETAIL — the Hearth unit: person + place + story + experience
// ============================================================
function DetailScreen({
  id,
  hasPass,
  onBack,
  onPass,
  onRedeem,
  onMap
}) {
  const item = id === DATA.hero.id ? DATA.hero : DATA.feed.find(f => f.id === id) || DATA.hero;
  const person = item.person;
  const story = item.story || DATA.hero.story;
  const benefit = item.benefit || DATA.hero.benefit;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      overflowY: 'auto',
      background: 'var(--surface-app)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement(Media, {
    seed: item.seed,
    kind: item.kind || 'castle',
    aspect: "4 / 5",
    video: item.video,
    style: {
      aspectRatio: '4 / 5'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 48,
      left: 16,
      right: 16,
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      n: "arrow-left",
      s: 20
    }),
    tone: "light",
    "aria-label": "Indietro",
    onClick: onBack
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      n: "share",
      s: 18
    }),
    tone: "light",
    "aria-label": "Condividi"
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      n: "bookmark",
      s: 18
    }),
    tone: "light",
    "aria-label": "Salva"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 20,
      right: 20,
      bottom: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '6px 11px',
      borderRadius: 999,
      background: 'rgba(255,255,255,.92)',
      color: 'var(--ink-800)',
      fontSize: 11.5,
      fontWeight: 800,
      letterSpacing: '.04em',
      textTransform: 'uppercase'
    }
  }, item.category), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: 40,
      lineHeight: 1.0,
      letterSpacing: '-0.02em',
      margin: '14px 0 0'
    }
  }, item.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 7,
      marginTop: 10,
      fontSize: 13.5,
      color: 'rgba(255,255,255,.88)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "map-pin",
    s: 15
  }), " ", item.location))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 20px 120px',
      display: 'flex',
      flexDirection: 'column',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '13px 14px',
      borderRadius: 18,
      background: 'var(--cream-100)',
      border: '1px solid var(--cream-300)'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: person.name,
    ring: true,
    size: 46,
    style: {
      background: `linear-gradient(150deg, ${gradientFor(person.seed)[0]}, ${gradientFor(person.seed)[1]})`,
      color: '#fff',
      boxShadow: '0 0 0 2px var(--green-500)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 800,
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: 'var(--green-700)'
    }
  }, "Raccontato da"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 800,
      color: 'var(--ink-800)'
    }
  }, person.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'var(--ink-700)'
    }
  }, person.role)), /*#__PURE__*/React.createElement(IconButton, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      n: "play",
      s: 16
    }),
    tone: "dark",
    "aria-label": "Ascolta"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: 24,
      lineHeight: 1.18,
      letterSpacing: '-0.01em',
      color: 'var(--ink-800)',
      margin: 0
    }
  }, "Un luogo che racconta l\u2019isola ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'italic'
    }
  }, "davvero"), "."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      lineHeight: 1.65,
      color: 'var(--text-700)',
      margin: '12px 0 0'
    }
  }, story, " ", item.experience || '')), /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 18,
      border: '1px solid var(--border-soft)',
      overflow: 'hidden',
      background: 'var(--surface-card)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '13px 16px',
      fontSize: 12,
      fontWeight: 800,
      letterSpacing: '.06em',
      textTransform: 'uppercase',
      color: 'var(--text-700)',
      borderBottom: '1px solid var(--border-soft)'
    }
  }, "Come viverlo"), [['sunset', 'Quando', item.when || DATA.hero.when], ['footprints', 'Come arrivare', item.walk || 'Sentiero costiero · 40 min'], ['eye', 'Cosa osservare', 'La torre genovese e la luce del mattino sulla punta']].map(([ic, k, v], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: 12,
      padding: '13px 16px',
      borderTop: i ? '1px solid var(--neutral-100)' : 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--green-600)',
      marginTop: 1
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    n: ic,
    s: 18,
    sw: 1.8
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'var(--text-500)'
    }
  }, k), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14.5,
      fontWeight: 600,
      color: 'var(--text-900)'
    }
  }, v))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 18,
      padding: 18,
      background: hasPass ? 'var(--green-50)' : 'var(--ink-900)',
      color: hasPass ? 'var(--ink-800)' : '#fff',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 11.5,
      fontWeight: 800,
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: hasPass ? 'var(--green-700)' : 'rgba(255,255,255,.7)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "ticket",
    s: 15
  }), " ", hasPass ? 'Sbloccato con il tuo Pass' : 'Con Visit Pass'), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 700,
      lineHeight: 1.4,
      margin: '10px 0 14px',
      fontFamily: 'var(--font-sans)'
    }
  }, benefit), hasPass ? /*#__PURE__*/React.createElement(Button, {
    variant: "green",
    size: "md",
    fullWidth: true,
    onClick: onRedeem,
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      n: "unlock",
      s: 17
    })
  }, "Sblocca il racconto") : /*#__PURE__*/React.createElement(Button, {
    variant: "green",
    size: "md",
    fullWidth: true,
    onClick: onPass,
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      n: "arrow-right",
      s: 17
    })
  }, "Attiva il Visit Pass \xB7 ", DATA.pass.price)), /*#__PURE__*/React.createElement("div", {
    onClick: onMap,
    style: {
      borderRadius: 18,
      overflow: 'hidden',
      border: '1px solid var(--border-soft)',
      cursor: 'pointer',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(MiniMap, {
    h: 120
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      padding: '9px 14px',
      borderRadius: 999,
      background: 'rgba(255,255,255,.95)',
      fontSize: 13,
      fontWeight: 700,
      color: 'var(--ink-800)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "route",
    s: 15,
    c: "var(--green-600)"
  }), " Vedi sul percorso")))));
}

// ============================================================
// MAP discovery
// ============================================================
function MapScreen({
  onOpen
}) {
  const [filter, setFilter] = React.useState('Tutto');
  const filters = ['Tutto', 'Persone', 'Sapori', 'Natura', 'Eventi'];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      position: 'relative',
      background: 'var(--surface-app)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0
    }
  }, /*#__PURE__*/React.createElement(BigMap, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      padding: '48px 16px 12px',
      background: 'linear-gradient(180deg, rgba(250,250,247,.96), rgba(250,250,247,0))'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      padding: '11px 14px',
      borderRadius: 14,
      background: 'var(--surface-card)',
      border: '1px solid var(--border-soft)',
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "search",
    s: 17,
    c: "var(--text-500)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--text-500)'
    }
  }, "Cerca a Capraia")), /*#__PURE__*/React.createElement(IconButton, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      n: "sliders-horizontal",
      s: 18
    }),
    tone: "plain",
    "aria-label": "Filtri",
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-soft)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      overflowX: 'auto'
    }
  }, filters.map(f => /*#__PURE__*/React.createElement(Chip, {
    key: f,
    selected: filter === f,
    tone: filter === f ? 'solid' : 'outline',
    size: "sm",
    onClick: () => setFilter(f)
  }, f)))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 76,
      padding: '0 0 10px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 20px 10px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 800,
      color: 'var(--ink-800)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      background: 'rgba(255,255,255,.9)',
      padding: '6px 11px',
      borderRadius: 999
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "navigation",
    s: 13,
    c: "var(--green-600)"
  }), " ", DATA.feed.length + 1, " luoghi vicino a te")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 13,
      overflowX: 'auto',
      padding: '0 20px'
    }
  }, [DATA.hero, ...DATA.feed].map(it => /*#__PURE__*/React.createElement("div", {
    key: it.id,
    style: {
      flex: '0 0 210px'
    }
  }, /*#__PURE__*/React.createElement(PeopleCard, {
    item: it,
    onClick: () => onOpen(it.id)
  }))))));
}
function BigMap() {
  const pins = [[70, 150], [120, 230], [200, 180], [250, 300], [150, 360], [300, 250]];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      height: '100%',
      background: 'linear-gradient(160deg,#e3ebe4 0%,#d2e0d8 45%,#c2d6dd 100%)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 360 760",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%'
    },
    preserveAspectRatio: "xMidYMid slice"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M60,260 C90,160 180,140 230,190 C280,240 320,230 320,320 C320,420 270,520 180,540 C90,560 30,460 40,360 C46,310 50,300 60,260 Z",
    fill: "#c3b189",
    opacity: "0.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M0,540 C120,520 200,540 360,520 L360,760 L0,760 Z",
    fill: "#a4c3cd",
    opacity: "0.55"
  }), [[70, 150, 250, 300], [120, 230, 200, 180]].map((l, i) => /*#__PURE__*/React.createElement("path", {
    key: i,
    d: `M${l[0]},${l[1]} Q${(l[0] + l[2]) / 2},${(l[1] + l[3]) / 2 - 30} ${l[2]},${l[3]}`,
    stroke: "#1C5938",
    strokeWidth: "2",
    strokeDasharray: "5 6",
    fill: "none",
    opacity: "0.45"
  }))), pins.map(([x, y], i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      position: 'absolute',
      left: x,
      top: y,
      transform: 'translate(-50%,-100%)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      width: i === 0 ? 38 : 30,
      height: i === 0 ? 38 : 30,
      borderRadius: '50% 50% 50% 2px',
      transform: 'rotate(45deg)',
      background: i === 0 ? 'var(--heritage-red)' : 'var(--green-500)',
      border: '2.5px solid #fff',
      boxShadow: '0 4px 10px rgba(0,0,0,.28)',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      transform: 'rotate(-45deg)',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    n: i === 0 ? 'star' : 'map-pin',
    s: i === 0 ? 16 : 13,
    sw: 2.4
  }))))));
}
Object.assign(window, {
  DetailScreen,
  MapScreen,
  BigMap
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/traveler-web/DetailMap.jsx", error: String((e && e.message) || e) }); }

// ui_kits/traveler-web/HomeScreens.jsx
try { (() => {
/* global React */
// Touchpoint-branded entry + Home / Today guide (3 directions)
const {
  Avatar,
  Button,
  Chip,
  IconButton,
  Badge
} = window.HearthDesignSystem_7ae78b;
const {
  TKIcon: Icon,
  Media,
  gradientFor,
  DATA,
  PeopleCard,
  ContextBar
} = window;

// ============================================================
// ENTRY — partner/touchpoint-branded launch state
// Partner customizes the entry point, never the design system.
// ============================================================
function EntryScreen({
  onEnter
}) {
  const tp = DATA.touchpoint;
  const t = DATA.territory;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--ink-900)',
      color: '#fff',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Media, {
    seed: "capraia-entry",
    kind: "mountain",
    aspect: "auto",
    video: true,
    style: {
      position: 'absolute',
      inset: 0,
      aspectRatio: 'auto',
      height: '100%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg, rgba(20,16,10,.35) 0%, rgba(20,16,10,.2) 35%, rgba(20,16,10,.86) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      padding: '56px 24px 0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontWeight: 800,
      letterSpacing: '.02em'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 26,
      height: 26,
      borderRadius: 7,
      background: 'var(--green-500)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "flame",
    s: 15,
    c: "#fff"
  })), "Hearth"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontSize: 12,
      color: 'rgba(255,255,255,.8)',
      border: '1px solid rgba(255,255,255,.25)',
      borderRadius: 999,
      padding: '5px 10px'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "globe",
    s: 13
  }), " ", tp.lang)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      padding: '0 24px 30px',
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 11,
      padding: '11px 13px',
      borderRadius: 16,
      background: 'rgba(255,255,255,.13)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255,255,255,.16)'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: tp.partner,
    size: 38,
    style: {
      background: 'rgba(255,255,255,.9)',
      color: 'var(--ink-800)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'rgba(255,255,255,.65)',
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      fontWeight: 700
    }
  }, "La tua guida, offerta da"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 800
    }
  }, tp.partner)), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      fontSize: 11,
      fontWeight: 700,
      color: '#fff',
      background: 'rgba(255,255,255,.18)',
      borderRadius: 999,
      padding: '5px 9px',
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "map-pin",
    s: 12
  }), " ", tp.room)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 800,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,.7)',
      marginBottom: 12
    }
  }, t.region), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: 46,
      lineHeight: 1.0,
      letterSpacing: '-0.02em',
      margin: 0
    }
  }, "Vivi ", t.name, /*#__PURE__*/React.createElement("br", null), "come chi ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'italic'
    }
  }, "ci abita"), "."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14.5,
      lineHeight: 1.55,
      color: 'rgba(255,255,255,.82)',
      margin: '16px 0 0',
      maxWidth: 320
    }
  }, tp.welcome)), /*#__PURE__*/React.createElement(Button, {
    variant: "green",
    size: "lg",
    fullWidth: true,
    onClick: onEnter,
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      n: "arrow-right",
      s: 18
    })
  }, "Entra nella guida"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 7,
      fontSize: 11.5,
      color: 'rgba(255,255,255,.6)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "link",
    s: 12
  }), " Accesso via ", tp.partner, " \xB7 ref\xA0", /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'rgba(255,255,255,.85)'
    }
  }, tp.ref))));
}

// ============================================================
// HOME / TODAY — 3 directions
// ============================================================
function GreetingBlock({
  dark
}) {
  const t = DATA.territory;
  const c = DATA.context;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 800,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: dark ? 'rgba(255,255,255,.7)' : 'var(--green-600)'
    }
  }, c.clock, " \xB7 ", t.name), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: 34,
      lineHeight: 1.04,
      letterSpacing: '-0.02em',
      margin: '8px 0 0',
      color: dark ? '#fff' : 'var(--ink-800)'
    }
  }, "Cosa vivere ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'italic'
    }
  }, "oggi"), " sull\u2019isola"));
}
function RailCard({
  item,
  onOpen
}) {
  return /*#__PURE__*/React.createElement("div", {
    onClick: onOpen,
    style: {
      flex: '0 0 150px',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Media, {
    seed: item.seed,
    kind: item.kind,
    aspect: "3 / 4",
    radius: 14,
    label: `${item.count} luoghi`
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 800,
      color: 'var(--text-900)',
      marginTop: 8,
      lineHeight: 1.15
    }
  }, item.title));
}
function EventRow({
  ev,
  onOpen
}) {
  return /*#__PURE__*/React.createElement("div", {
    onClick: onOpen,
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center',
      padding: 10,
      borderRadius: 16,
      background: 'var(--surface-card)',
      border: '1px solid var(--border-soft)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      flex: '0 0 56px'
    }
  }, /*#__PURE__*/React.createElement(Media, {
    seed: ev.seed,
    kind: ev.kind,
    aspect: "1 / 1",
    radius: 12
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 7
    }
  }, ev.live && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      fontSize: 10.5,
      fontWeight: 800,
      color: 'var(--heritage-red)',
      textTransform: 'uppercase',
      letterSpacing: '.06em'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 9,
      background: 'var(--heritage-red)'
    }
  }), "Ora"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--text-500)',
      fontWeight: 600
    }
  }, ev.when)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 800,
      color: 'var(--text-900)',
      marginTop: 2
    }
  }, ev.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-500)'
    }
  }, ev.where)), /*#__PURE__*/React.createElement(Icon, {
    n: "chevron-right",
    s: 18,
    c: "var(--neutral-400)"
  }));
}
function SectionLabel({
  children,
  accent
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 800,
      letterSpacing: '.04em',
      color: accent ? 'var(--green-700)' : 'var(--text-700)',
      margin: '4px 0 0',
      textTransform: 'uppercase'
    }
  }, children);
}

// Direction A — Editorial now: immersive dark hero + rails
function HomeA({
  onOpen
}) {
  const h = DATA.hero;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      overflowY: 'auto',
      background: 'var(--surface-app)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement(Media, {
    seed: h.seed,
    kind: h.category === 'Luogo' ? 'castle' : 'mountain',
    aspect: "3 / 4",
    video: true,
    style: {
      aspectRatio: '3 / 4'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      padding: '52px 20px 22px',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(GreetingBlock, {
    dark: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement(ContextBar, {
    dark: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      alignSelf: 'flex-start',
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: h.person.name,
    ring: true,
    size: 30,
    style: {
      background: `linear-gradient(150deg, ${gradientFor(h.person.seed)[0]}, ${gradientFor(h.person.seed)[1]})`,
      color: '#fff'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 700
    }
  }, h.storyTitle)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'rgba(255,255,255,.85)',
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "sparkles",
    s: 14
  }), " Perch\xE9 ora: ", h.reasonNow), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "md",
    onClick: () => onOpen(h.id),
    style: {
      alignSelf: 'flex-start'
    },
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      n: "arrow-right",
      s: 16
    })
  }, "Vivilo ora"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 20px 92px',
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    accent: true
  }, "Selezionati per te, adesso"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 13,
      overflowX: 'auto',
      margin: '0 -20px',
      padding: '0 20px'
    }
  }, DATA.feed.slice(0, 3).map(it => /*#__PURE__*/React.createElement("div", {
    key: it.id,
    style: {
      flex: '0 0 230px'
    }
  }, /*#__PURE__*/React.createElement(PeopleCard, {
    item: it,
    onClick: () => onOpen(it.id)
  })))), /*#__PURE__*/React.createElement(SectionLabel, null, "Collezioni di stagione"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 13,
      overflowX: 'auto',
      margin: '0 -20px',
      padding: '0 20px'
    }
  }, DATA.collections.map(c => /*#__PURE__*/React.createElement(RailCard, {
    key: c.id,
    item: c,
    onOpen: () => onOpen(DATA.hero.id)
  }))), /*#__PURE__*/React.createElement(SectionLabel, null, "Sta succedendo"), DATA.events.map(ev => /*#__PURE__*/React.createElement(EventRow, {
    key: ev.id,
    ev: ev,
    onOpen: () => onOpen(DATA.hero.id)
  }))));
}

// Direction B — Contextual stack: context bar + ranked vertical feed with reasons
function HomeB({
  onOpen
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      overflowY: 'auto',
      background: 'var(--surface-app)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '52px 20px 14px',
      background: 'var(--surface-card)',
      borderBottom: '1px solid var(--border-soft)',
      position: 'sticky',
      top: 0,
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement(GreetingBlock, null), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13.5,
      color: 'var(--text-500)',
      margin: '10px 0 14px',
      lineHeight: 1.5
    }
  }, "Selezioni che hanno senso adesso \u2014 in base a meteo, stagione, ora e a chi vive l\u2019isola."), /*#__PURE__*/React.createElement(ContextBar, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 20px 92px',
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, DATA.feed.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.id
  }, /*#__PURE__*/React.createElement(PeopleCard, {
    item: it,
    onClick: () => onOpen(it.id)
  })))));
}

// Direction C — Map-forward: nearby snapshot + today picks
function HomeC({
  onOpen,
  onMap
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      overflowY: 'auto',
      background: 'var(--surface-app)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '52px 20px 0'
    }
  }, /*#__PURE__*/React.createElement(GreetingBlock, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 20px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: onMap,
    style: {
      position: 'relative',
      borderRadius: 20,
      overflow: 'hidden',
      cursor: 'pointer',
      border: '1px solid var(--border-soft)'
    }
  }, /*#__PURE__*/React.createElement(MiniMap, null), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 14,
      top: 14,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '7px 11px',
      borderRadius: 999,
      background: 'rgba(255,255,255,.94)',
      fontSize: 12,
      fontWeight: 800,
      color: 'var(--ink-800)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "navigation",
    s: 13,
    c: "var(--green-600)"
  }), " Vicino a te \xB7 4 luoghi"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 14,
      bottom: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '8px 13px',
      borderRadius: 999,
      background: 'var(--ink-900)',
      color: '#fff',
      fontSize: 12.5,
      fontWeight: 700
    }
  }, "Apri mappa ", /*#__PURE__*/React.createElement(Icon, {
    n: "arrow-up-right",
    s: 14
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 20px 92px',
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(ContextBar, null), /*#__PURE__*/React.createElement(SectionLabel, {
    accent: true
  }, "Da vivere adesso, qui intorno"), DATA.feed.slice(0, 3).map(it => /*#__PURE__*/React.createElement(PeopleCard, {
    key: it.id,
    item: it,
    onClick: () => onOpen(it.id)
  }))));
}

// shared tiny map snapshot
function MiniMap({
  h = 200
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: h,
      background: 'linear-gradient(160deg,#dce6df 0%,#ccdcd4 50%,#bcd0d8 100%)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'radial-gradient(60% 50% at 30% 30%, rgba(127,184,151,.5), transparent 70%)'
    }
  }), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 300 200",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%'
    },
    preserveAspectRatio: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M40,120 C60,70 120,60 160,80 C200,100 250,90 270,130 C285,160 240,185 180,180 C120,175 30,170 40,120 Z",
    fill: "#bfae86",
    opacity: "0.55"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M0,150 C80,140 120,150 300,140 L300,200 L0,200 Z",
    fill: "#9cc0cb",
    opacity: "0.5"
  })), [[80, 70], [150, 95], [205, 80], [175, 140]].map(([x, y], i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      position: 'absolute',
      left: x,
      top: y,
      width: 16,
      height: 16,
      marginLeft: -8,
      marginTop: -8,
      borderRadius: '50%',
      background: i === 1 ? 'var(--heritage-red)' : 'var(--green-500)',
      border: '2.5px solid #fff',
      boxShadow: '0 2px 6px rgba(0,0,0,.25)'
    }
  })));
}
Object.assign(window, {
  EntryScreen,
  HomeA,
  HomeB,
  HomeC,
  MiniMap,
  EventRow
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/traveler-web/HomeScreens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/traveler-web/PassFlow.jsx
try { (() => {
/* global React */
// Itinerary / path · Visit Pass purchase + wallet · benefit redemption
const {
  Avatar,
  Button,
  Chip,
  IconButton,
  Badge,
  ProgressBar
} = window.HearthDesignSystem_7ae78b;
const {
  TKIcon: Icon,
  Media,
  gradientFor,
  DATA,
  MiniMap
} = window;

// ============================================================
// ITINERARY / PATH
// ============================================================
function ItineraryScreen({
  onOpen
}) {
  const stops = [DATA.hero, ...DATA.feed.slice(0, 2)];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      overflowY: 'auto',
      background: 'var(--surface-app)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(MiniMap, {
    h: 210
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg, rgba(28,22,14,.15), rgba(250,250,247,1) 96%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 48,
      left: 16
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      n: "arrow-left",
      s: 20
    }),
    tone: "light",
    "aria-label": "Indietro"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 20,
      right: 20,
      bottom: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 800,
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      color: 'var(--green-700)'
    }
  }, "Percorso a piedi"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: 32,
      lineHeight: 1.02,
      letterSpacing: '-0.02em',
      color: 'var(--ink-800)',
      margin: '6px 0 0'
    }
  }, "Capraia selvatica"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '4px 20px 8px',
      display: 'flex',
      gap: 16,
      color: 'var(--text-500)',
      fontSize: 12.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "map-pin",
    s: 14,
    c: "var(--green-600)"
  }), " 3 tappe"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "clock",
    s: 14,
    c: "var(--green-600)"
  }), " 2h 15\u2032"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "footprints",
    s: 14,
    c: "var(--green-600)"
  }), " 4,5 km")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 20px 120px'
    }
  }, stops.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s.id,
    style: {
      display: 'flex',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: 28
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 28,
      borderRadius: '50%',
      background: 'var(--green-500)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 13,
      fontWeight: 800,
      flex: '0 0 28px'
    }
  }, i + 1), i < stops.length - 1 && /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      width: 2,
      background: 'var(--neutral-200)',
      margin: '4px 0'
    }
  })), /*#__PURE__*/React.createElement("div", {
    onClick: () => onOpen(s.id),
    style: {
      flex: 1,
      marginBottom: 18,
      cursor: 'pointer',
      display: 'flex',
      gap: 12,
      padding: 10,
      borderRadius: 16,
      background: 'var(--surface-card)',
      border: '1px solid var(--border-soft)',
      boxShadow: 'var(--shadow-xs)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      flex: '0 0 64px'
    }
  }, /*#__PURE__*/React.createElement(Media, {
    seed: s.seed,
    kind: s.kind || 'castle',
    aspect: "3 / 4",
    radius: 11
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: s.person.name,
    ring: true,
    size: 20,
    style: {
      background: `linear-gradient(150deg, ${gradientFor(s.person.seed)[0]}, ${gradientFor(s.person.seed)[1]})`,
      color: '#fff'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--text-500)'
    }
  }, s.person.name)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 800,
      color: 'var(--text-900)',
      margin: '4px 0 2px',
      lineHeight: 1.15
    }
  }, s.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-500)'
    }
  }, s.when || DATA.hero.when), (s.pass || s.id === DATA.hero.id) && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      marginTop: 6,
      padding: '4px 8px',
      borderRadius: 999,
      background: 'var(--green-50)',
      color: 'var(--green-700)',
      fontSize: 11,
      fontWeight: 700
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "ticket",
    s: 11
  }), " Vantaggio Pass"))))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    fullWidth: true,
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      n: "navigation",
      s: 18
    })
  }, "Avvia il percorso")));
}

// ============================================================
// VISIT PASS — purchase + wallet
// ============================================================
function FauxQR() {
  const cells = React.useMemo(() => Array.from({
    length: 49
  }, (_, i) => hash('qr' + i) % 10 > 4), []);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(7,1fr)',
      gap: 3,
      width: 92,
      height: 92,
      padding: 8,
      background: '#fff',
      borderRadius: 12
    }
  }, cells.map((on, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      background: on ? 'var(--ink-900)' : 'transparent',
      borderRadius: 2
    }
  })));
}
function hash(s) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = h * 31 + s.charCodeAt(i) >>> 0;
  return h;
}
function PassScreen({
  hasPass,
  onBuy,
  onRedeem
}) {
  const p = DATA.pass;
  const tp = DATA.touchpoint;
  if (hasPass) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        height: '100%',
        overflowY: 'auto',
        background: 'var(--surface-app)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '52px 20px 16px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        fontWeight: 800,
        letterSpacing: '.12em',
        textTransform: 'uppercase',
        color: 'var(--green-600)'
      }
    }, "Il tuo wallet"), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 300,
        fontSize: 30,
        letterSpacing: '-0.02em',
        color: 'var(--ink-800)',
        margin: '6px 0 0'
      }
    }, "Visit Pass attivo")), /*#__PURE__*/React.createElement("div", {
      style: {
        margin: '6px 20px 0',
        borderRadius: 22,
        padding: 20,
        background: 'linear-gradient(150deg, #245a3c, #1C5938 60%, #14402a)',
        color: '#fff',
        boxShadow: 'var(--shadow-lg)',
        position: 'relative',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 7,
        fontWeight: 800
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 22,
        height: 22,
        borderRadius: 6,
        background: 'rgba(255,255,255,.18)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      n: "flame",
      s: 13
    })), " Hearth"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 300,
        fontSize: 26,
        marginTop: 16,
        letterSpacing: '-0.01em'
      }
    }, p.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5,
        color: 'rgba(255,255,255,.75)',
        marginTop: 4
      }
    }, "Valido fino al 22 giugno \xB7 ", DATA.territory.region)), /*#__PURE__*/React.createElement(FauxQR, null)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 18,
        marginTop: 18,
        fontSize: 12
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        color: 'rgba(255,255,255,.6)'
      }
    }, "Vantaggi"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 800,
        fontSize: 15
      }
    }, p.count, " disponibili")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        color: 'rgba(255,255,255,.6)'
      }
    }, "Usati"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 800,
        fontSize: 15
      }
    }, "2")))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '22px 20px 100px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        fontWeight: 800,
        letterSpacing: '.06em',
        textTransform: 'uppercase',
        color: 'var(--text-700)',
        marginBottom: 12
      }
    }, "Vantaggi vicino a te"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10
      }
    }, DATA.feed.filter(f => f.pass).map(f => /*#__PURE__*/React.createElement("div", {
      key: f.id,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: 12,
        borderRadius: 16,
        background: 'var(--surface-card)',
        border: '1px solid var(--border-soft)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 46,
        flex: '0 0 46px'
      }
    }, /*#__PURE__*/React.createElement(Media, {
      seed: f.seed,
      kind: f.kind,
      aspect: "1 / 1",
      radius: 11
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14.5,
        fontWeight: 800,
        color: 'var(--text-900)'
      }
    }, f.title), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: 'var(--green-700)',
        fontWeight: 600,
        display: 'flex',
        alignItems: 'center',
        gap: 5
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      n: "gift",
      s: 12
    }), " Omaggio incluso")), /*#__PURE__*/React.createElement(Button, {
      variant: "green",
      size: "sm",
      onClick: onRedeem
    }, "Riscatta"))))));
  }
  // purchase
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      overflowY: 'auto',
      background: 'var(--surface-app)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement(Media, {
    seed: "pass-hero",
    kind: "ticket",
    aspect: "4 / 3",
    style: {
      aspectRatio: '4 / 3'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      padding: '52px 20px 20px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 800,
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,.78)'
    }
  }, "Visit Pass"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: 38,
      lineHeight: 1.0,
      letterSpacing: '-0.02em',
      margin: '8px 0 0'
    }
  }, "Il tuo accesso", /*#__PURE__*/React.createElement("br", null), "all\u2019", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'italic'
    }
  }, "isola vera")))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 20px 130px',
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14.5,
      lineHeight: 1.6,
      color: 'var(--text-700)',
      margin: 0
    }
  }, "Non un coupon. Un livello di accesso curato: racconti, omaggi, luoghi nascosti e riduzioni nelle attivit\xE0 autentiche selezionate da Hearth."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, p.benefits.map(b => /*#__PURE__*/React.createElement("div", {
    key: b.label,
    style: {
      display: 'flex',
      gap: 13,
      alignItems: 'center',
      padding: '13px 0',
      borderTop: '1px solid var(--neutral-100)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 38,
      height: 38,
      borderRadius: 11,
      background: 'var(--green-50)',
      color: 'var(--green-700)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: '0 0 38px'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    n: b.icon,
    s: 18,
    sw: 1.9
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14.5,
      color: 'var(--text-900)',
      fontWeight: 600
    }
  }, b.label)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 11,
      padding: 14,
      borderRadius: 16,
      background: 'var(--cream-100)',
      border: '1px solid var(--cream-300)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "sprout",
    s: 18,
    c: "var(--ink-700)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      lineHeight: 1.5,
      color: 'var(--ink-700)'
    }
  }, "Acquistando da ", /*#__PURE__*/React.createElement("b", null, tp.partner), " sostieni chi racconta ", DATA.territory.name, ": parte del ricavato torna in contenuti e attivit\xE0 locali."))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      padding: '14px 20px 20px',
      background: 'linear-gradient(180deg, rgba(255,255,255,0), var(--surface-card) 28%)',
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 24,
      fontWeight: 800,
      color: 'var(--text-900)'
    }
  }, p.price), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-500)'
    }
  }, p.duration)), /*#__PURE__*/React.createElement(Button, {
    variant: "green",
    size: "lg",
    onClick: onBuy,
    style: {
      flex: 1
    },
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      n: "arrow-right",
      s: 18
    })
  }, "Attiva il Pass")));
}

// ============================================================
// REDEEM — benefit redemption flow
// ============================================================
function RedeemScreen({
  onClose
}) {
  const [step, setStep] = React.useState(0); // 0 review · 1 code · 2 done
  const benefit = DATA.feed.find(f => f.id === 'beppe');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      background: 'rgba(20,16,10,.55)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      borderRadius: '28px 28px 0 0',
      padding: '12px 22px 30px',
      boxShadow: 'var(--shadow-sheet)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 38,
      height: 4,
      borderRadius: 2,
      background: 'var(--neutral-200)',
      margin: '0 auto 18px'
    }
  }), step === 0 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 52,
      flex: '0 0 52px'
    }
  }, /*#__PURE__*/React.createElement(Media, {
    seed: benefit.seed,
    kind: benefit.kind,
    aspect: "1 / 1",
    radius: 13
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 800,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: 'var(--green-700)'
    }
  }, "Vantaggio Pass"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 800,
      color: 'var(--text-900)'
    }
  }, benefit.title))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 11,
      padding: 14,
      borderRadius: 14,
      background: 'var(--green-50)',
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "gift",
    s: 18,
    c: "var(--green-700)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      lineHeight: 1.5,
      color: 'var(--ink-800)'
    }
  }, "Un assaggio del pescato del giorno offerto da Beppe, riservato a chi ha il Visit Pass.")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'var(--text-500)',
      margin: '8px 0 16px',
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "info",
    s: 14
  }), " Mostra il codice al locale per riscattare."), /*#__PURE__*/React.createElement(Button, {
    variant: "green",
    size: "lg",
    fullWidth: true,
    onClick: () => setStep(1)
  }, "Riscatta ora"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "md",
    fullWidth: true,
    onClick: onClose,
    style: {
      marginTop: 6
    }
  }, "Pi\xF9 tardi")), step === 1 && /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-500)'
    }
  }, "Mostra al banco \xB7 ", benefit.title), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '18px auto',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement(FauxQR, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 28,
      fontWeight: 800,
      letterSpacing: '.12em',
      color: 'var(--ink-900)'
    }
  }, "HRT-4Q9"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'var(--text-500)',
      margin: '8px 0 18px'
    }
  }, "Valido 10 minuti \xB7 il locale conferma"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    fullWidth: true,
    onClick: () => setStep(2),
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      n: "check",
      s: 18
    })
  }, "Il locale ha confermato")), step === 2 && /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '12px 0 6px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 72,
      height: 72,
      borderRadius: '50%',
      background: 'var(--green-500)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 18px'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "check",
    s: 38,
    c: "#fff",
    sw: 2.6
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: 28,
      color: 'var(--ink-800)',
      letterSpacing: '-0.01em'
    }
  }, "Riscattato!"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: 'var(--text-500)',
      margin: '8px 0 20px'
    }
  }, "Buon assaggio. Hai sostenuto un\u2019attivit\xE0 autentica di ", DATA.territory.name, "."), /*#__PURE__*/React.createElement(Button, {
    variant: "green",
    size: "lg",
    fullWidth: true,
    onClick: onClose
  }, "Continua a esplorare"))));
}
Object.assign(window, {
  ItineraryScreen,
  PassScreen,
  RedeemScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/traveler-web/PassFlow.jsx", error: String((e && e.message) || e) }); }

// ui_kits/traveler-web/TravelerKit.jsx
try { (() => {
/* global React */
// ============================================================
// Hearth · Traveler Web App — shared kit
// Sample Capraia world + vertical-first media + people-first card
// + bottom nav. All screens compose DS primitives from the bundle.
// ============================================================
const {
  Avatar,
  Badge,
  Chip,
  Button,
  IconButton
} = window.HearthDesignSystem_7ae78b;

// ---- Lucide icon helper (matches house pattern) ----
const Icon = ({
  n,
  s = 20,
  c,
  sw = 1.9
}) => {
  const r = React.useRef(null);
  React.useEffect(() => {
    if (r.current) {
      r.current.innerHTML = '';
      const e = document.createElement('i');
      e.setAttribute('data-lucide', n);
      r.current.appendChild(e);
      window.lucide && lucide.createIcons({
        attrs: {
          width: s,
          height: s,
          'stroke-width': sw
        }
      });
    }
  });
  return /*#__PURE__*/React.createElement("span", {
    ref: r,
    style: {
      display: 'inline-flex',
      color: c || 'currentColor'
    }
  });
};

// ---- Deterministic warm duotone media (vertical-first) ----
// Mediterranean-island palette; never rainbow. Real vertical photo/video
// drops in here later — these are intentional editorial placeholders.
const GRADIENTS = [['#C9A879', '#7E4A2A'],
// terra cliff
['#86B79A', '#1C5938'],
// macchia green
['#D7C6A1', '#4A3D2C'],
// dune / stone
['#9DB0C6', '#39506E'],
// sea
['#D29A4E', '#8A5615'],
// ochre light
['#AEB79C', '#56603F'] // olive
];
function hash(str = '') {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = h * 31 + str.charCodeAt(i) >>> 0;
  return h;
}
function gradientFor(seed) {
  return GRADIENTS[hash(seed) % GRADIENTS.length];
}
function Media({
  seed = '',
  kind,
  aspect = '4 / 5',
  radius = 0,
  label,
  video = false,
  overlay = true,
  children,
  style = {}
}) {
  const [a, b] = gradientFor(seed);
  const ang = 145 + hash(seed) % 40;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      aspectRatio: aspect,
      borderRadius: radius,
      overflow: 'hidden',
      background: `linear-gradient(${ang}deg, ${a} 0%, ${b} 100%)`,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'radial-gradient(120% 80% at 25% 15%, rgba(255,255,255,.28), rgba(255,255,255,0) 55%)'
    }
  }), overlay && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg, rgba(28,22,14,0) 40%, rgba(28,22,14,.55) 100%)'
    }
  }), kind && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%,-50%)',
      color: 'rgba(255,255,255,.32)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    n: kind,
    s: 40,
    sw: 1.4
  })), video && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 12,
      right: 12,
      width: 30,
      height: 30,
      borderRadius: '50%',
      background: 'rgba(20,16,10,.42)',
      backdropFilter: 'blur(6px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "play",
    s: 13,
    sw: 2.4
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      bottom: 10,
      left: 12,
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,.78)'
    }
  }, label), children);
}

// ---- Sample Capraia world ----
const MARTA = {
  name: 'Marta',
  role: 'Storyteller dell\u2019isola',
  seed: 'marta-face'
};
const PEOPLE = {
  beppe: {
    name: 'Beppe',
    role: 'Pescatore',
    seed: 'beppe-face'
  },
  lucia: {
    name: 'Lucia',
    role: 'Vignaiola',
    seed: 'lucia-face'
  },
  elsa: {
    name: 'Elsa',
    role: 'Bottegaia',
    seed: 'elsa-face'
  },
  nico: {
    name: 'Don Nico',
    role: 'Comunit\u00e0',
    seed: 'nico-face'
  }
};
const DATA = {
  territory: {
    name: 'Capraia',
    region: 'Arcipelago Toscano',
    sub: 'Isola di Capraia · LI'
  },
  context: {
    clock: '08:42',
    daypart: 'Mattina',
    weather: {
      label: 'Sereno',
      temp: '21\u00b0',
      icon: 'sun'
    },
    season: 'Bassa stagione',
    month: 'Giugno',
    sea: 'Mare calmo'
  },
  hero: {
    id: 'zenobito',
    person: MARTA,
    category: 'Luogo',
    title: 'Torre dello Zenobito',
    location: 'Punta sud, Capraia',
    storyTitle: 'Marta racconta Torre dello Zenobito',
    story: 'Quando andarci, cosa osservare, perch\u00e9 questo luogo dice qualcosa dell\u2019isola \u2014 e come viverlo nel momento giusto.',
    reasonNow: 'Mattina limpida, bassa stagione, poche persone',
    when: 'Al tramonto, mare calmo',
    walk: 'Sentiero costiero · 40 min',
    experience: 'Cammina fino alla torre genovese e ascolta il racconto di Marta su cosa rese questo punto un avamposto sul mare.',
    benefit: 'Racconto audio di Marta + tappa segnata sul percorso',
    seed: 'zenobito-hero',
    video: true
  },
  feed: [{
    id: 'beppe',
    person: PEOPLE.beppe,
    category: 'Persona + Sapore',
    title: 'Il pesce del giorno di Beppe',
    location: 'Porto, Capraia',
    reasonNow: 'Barche rientrate stamattina',
    when: 'Pranzo · 12\u201314',
    meta: 'A 5 min dal porto',
    pass: true,
    seed: 'beppe-boat',
    kind: 'fish'
  }, {
    id: 'lucia',
    person: PEOPLE.lucia,
    category: 'Persona + Prodotto',
    title: 'La vigna sul mare di Lucia',
    location: 'Versante est',
    reasonNow: 'Visita in cantina oggi alle 17',
    when: 'Pomeriggio',
    meta: 'Degustazione · 45 min',
    pass: true,
    seed: 'lucia-vine',
    kind: 'grape'
  }, {
    id: 'sentiero',
    person: MARTA,
    category: 'Attivit\u00e0',
    title: 'Sentiero dello Zenobito',
    location: 'Costa sud',
    reasonNow: 'Vento debole, ideale a piedi',
    when: 'Mattina',
    meta: 'Trekking · 2h',
    pass: false,
    seed: 'sentiero-path',
    kind: 'mountain'
  }, {
    id: 'elsa',
    person: PEOPLE.elsa,
    category: 'Persona + Luogo',
    title: 'La bottega di Elsa',
    location: 'Paese',
    reasonNow: 'Apre tra poco',
    when: 'Tutto il giorno',
    meta: 'Nel borgo',
    pass: true,
    seed: 'elsa-shop',
    kind: 'store'
  }],
  collections: [{
    id: 'selvatica',
    title: 'Capraia selvatica',
    count: 8,
    seed: 'coll-wild',
    kind: 'mountain'
  }, {
    id: 'sapori',
    title: 'Sapori di bassa stagione',
    count: 6,
    seed: 'coll-food',
    kind: 'utensils'
  }, {
    id: 'tramonti',
    title: 'Tramonti dell\u2019isola',
    count: 5,
    seed: 'coll-sunset',
    kind: 'sunset'
  }],
  events: [{
    id: 'sannicola',
    title: 'Festa di San Nicola',
    when: 'Stasera · 21:00',
    where: 'Piazza del paese',
    person: PEOPLE.nico,
    seed: 'event-festa',
    kind: 'party-popper',
    live: true
  }, {
    id: 'mercato',
    title: 'Mercato del pesce',
    when: 'Domani · 09:00',
    where: 'Banchina',
    person: PEOPLE.beppe,
    seed: 'event-market',
    kind: 'fish'
  }],
  pass: {
    name: 'Visit Pass Capraia',
    price: '\u20ac19',
    duration: '7 giorni',
    count: 24,
    benefits: [{
      icon: 'headphones',
      label: 'Racconti audio dei narratori locali'
    }, {
      icon: 'gift',
      label: 'Omaggi selezionati in botteghe e cantine'
    }, {
      icon: 'map-pin',
      label: 'Tappe e luoghi nascosti sulla mappa'
    }, {
      icon: 'percent',
      label: 'Riduzioni in attivit\u00e0 autentiche della rete'
    }]
  },
  touchpoint: {
    partner: 'Hotel Le Volpi',
    kind: 'Soggiorno',
    host: 'Sara',
    room: 'Camera 4',
    welcome: 'Benvenuto a Capraia. Questa guida \u00e8 la nostra \u2014 i posti che amiamo, raccontati da chi li vive.',
    ref: 'levolpi',
    lang: 'IT'
  },
  wallet: {
    active: false
  }
};

// ---- People-first vertical card (person leads, place follows) ----
function PeopleCard({
  item,
  onClick,
  compact = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-soft)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      cursor: 'pointer',
      boxShadow: 'var(--shadow-xs)',
      fontFamily: 'var(--font-sans)',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '12px 14px 10px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: item.person.name,
    ring: true,
    size: 36,
    style: {
      background: `linear-gradient(150deg, ${gradientFor(item.person.seed)[0]}, ${gradientFor(item.person.seed)[1]})`,
      color: '#fff',
      boxShadow: '0 0 0 2px var(--green-500)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 800,
      color: 'var(--text-900)',
      lineHeight: 1.1
    }
  }, item.person.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-500)'
    }
  }, item.person.role)), /*#__PURE__*/React.createElement(Icon, {
    n: "bookmark",
    s: 17,
    c: "var(--neutral-400)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      padding: '0 14px'
    }
  }, /*#__PURE__*/React.createElement(Media, {
    seed: item.seed,
    kind: item.kind,
    aspect: compact ? '16 / 10' : '5 / 4',
    radius: 14,
    video: item.video
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 10,
      top: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      padding: '5px 10px',
      borderRadius: 999,
      background: 'rgba(255,255,255,.92)',
      fontSize: 11,
      fontWeight: 700,
      color: 'var(--ink-800)'
    }
  }, item.category)))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 14px 14px',
      display: 'flex',
      flexDirection: 'column',
      gap: 7
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 17,
      fontWeight: 800,
      color: 'var(--text-900)',
      letterSpacing: '-0.01em',
      lineHeight: 1.15
    }
  }, item.title), item.reasonNow && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      fontSize: 12.5,
      color: 'var(--green-700)',
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "sparkles",
    s: 13,
    sw: 2
  }), " ", item.reasonNow), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginTop: 2,
      fontSize: 12,
      color: 'var(--text-500)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "clock",
    s: 13,
    sw: 2
  }), item.when), item.meta && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "map-pin",
    s: 13,
    sw: 2
  }), item.meta)), item.pass && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      marginTop: 4,
      alignSelf: 'flex-start',
      padding: '5px 9px',
      borderRadius: 999,
      background: 'var(--green-50)',
      color: 'var(--green-700)',
      fontSize: 11.5,
      fontWeight: 700
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "ticket",
    s: 13,
    sw: 2
  }), " Incluso nel Visit Pass")));
}

// ---- Context bar (now / weather / season logic, visible) ----
function ContextBar({
  dark = false
}) {
  const c = DATA.context;
  const fg = dark ? 'rgba(255,255,255,.92)' : 'var(--text-700)';
  const sub = dark ? 'rgba(255,255,255,.6)' : 'var(--text-500)';
  const chip = (icon, text, key) => /*#__PURE__*/React.createElement("span", {
    key: key,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      padding: '6px 10px',
      borderRadius: 999,
      background: dark ? 'rgba(255,255,255,.14)' : 'var(--surface-100)',
      color: fg,
      fontSize: 12,
      fontWeight: 600,
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    n: icon,
    s: 13,
    sw: 2,
    c: dark ? '#fff' : 'var(--green-600)'
  }), text);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 7,
      overflowX: 'auto',
      paddingBottom: 2
    }
  }, chip(c.weather.icon, `${c.weather.temp} ${c.weather.label}`, 'w'), chip('sunrise', c.daypart, 'd'), chip('leaf', c.season, 's'), chip('waves', c.sea, 'sea'));
}

// ---- Bottom tab nav ----
const TABS = [{
  id: 'home',
  icon: 'compass',
  label: 'Oggi'
}, {
  id: 'map',
  icon: 'map',
  label: 'Mappa'
}, {
  id: 'path',
  icon: 'route',
  label: 'Percorsi'
}, {
  id: 'pass',
  icon: 'ticket',
  label: 'Pass'
}];
function BottomNav({
  active,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      height: 76,
      zIndex: 20,
      background: 'rgba(255,255,255,.92)',
      backdropFilter: 'blur(14px)',
      borderTop: '1px solid var(--border-soft)',
      display: 'flex',
      alignItems: 'flex-start',
      padding: '10px 8px 0',
      justifyContent: 'space-around'
    }
  }, TABS.map(t => {
    const on = active === t.id;
    return /*#__PURE__*/React.createElement("button", {
      key: t.id,
      onClick: () => onChange(t.id),
      style: {
        border: 0,
        background: 'none',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 4,
        padding: '4px 10px',
        color: on ? 'var(--green-700)' : 'var(--text-500)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      n: t.icon,
      s: 22,
      sw: on ? 2.2 : 1.8
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10.5,
        fontWeight: on ? 800 : 600
      }
    }, t.label));
  }));
}
Object.assign(window, {
  TKIcon: Icon,
  Media,
  gradientFor,
  DATA,
  MARTA,
  PeopleCard,
  ContextBar,
  BottomNav
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/traveler-web/TravelerKit.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.ContentCard = __ds_scope.ContentCard;

__ds_ns.DetailRow = __ds_scope.DetailRow;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.BottomSheet = __ds_scope.BottomSheet;

__ds_ns.EmptyState = __ds_scope.EmptyState;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.SelectCard = __ds_scope.SelectCard;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.TopBar = __ds_scope.TopBar;

})();
