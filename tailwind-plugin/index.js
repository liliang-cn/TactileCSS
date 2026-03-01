/**
 * Tactile CSS - Tailwind CSS Plugin
 *
 * This plugin adds tactile, 3D physical depth utilities and components to Tailwind CSS.
 *
 * @usage
 * // tailwind.config.js
 * module.exports = {
 *   plugins: [require('tactile-css/tailwind-plugin')]
 * }
 */

const plugin = require('tailwindcss/plugin')

module.exports = plugin(
  function({ addBase, addComponents, addUtilities, theme, matchUtilities }) {
    // ========================================
    // 1. BASE: CSS Variables (Design Tokens)
    // ========================================
    addBase({
      ':root': {
        // Colors with edges
        '--tac-neutral-50': '#f9fafb',
        '--tac-neutral-100': '#f3f4f6',
        '--tac-neutral-200': '#e5e7eb',
        '--tac-neutral-300': '#d1d5db',
        '--tac-neutral-400': '#9ca3af',
        '--tac-neutral-500': '#6b7280',
        '--tac-neutral-600': '#4b5563',
        '--tac-neutral-700': '#374151',
        '--tac-neutral-800': '#1f2937',
        '--tac-neutral-900': '#111827',

        '--tac-primary': '#8B5CF6',
        '--tac-primary-edge': '#6D28D9',
        '--tac-primary-light': '#A78BFA',

        '--tac-success': '#10B981',
        '--tac-success-edge': '#047857',
        '--tac-success-light': '#34D399',

        '--tac-warning': '#F59E0B',
        '--tac-warning-edge': '#B45309',
        '--tac-warning-light': '#FBBF24',

        '--tac-danger': '#EF4444',
        '--tac-danger-edge': '#B91C1C',
        '--tac-danger-light': '#F87171',

        '--tac-info': '#3B82F6',
        '--tac-info-edge': '#1D4ED8',
        '--tac-info-light': '#60A5FA',

        // Depth
        '--tac-depth-xs': '2px',
        '--tac-depth-sm': '4px',
        '--tac-depth-md': '6px',
        '--tac-depth-lg': '10px',
        '--tac-depth-xl': '14px',

        // Radius
        '--tac-radius-sm': '6px',
        '--tac-radius-md': '12px',
        '--tac-radius-lg': '16px',
        '--tac-radius-xl': '24px',
        '--tac-radius-full': '9999px',

        // Light & Shadow
        '--tac-highlight': 'rgba(255, 255, 255, 0.25)',
        '--tac-highlight-strong': 'rgba(255, 255, 255, 0.4)',
        '--tac-inner-glow': 'rgba(255, 255, 255, 0.8)',
        '--tac-shadow-ambient': 'rgba(0, 0, 0, 0.1)',
        '--tac-shadow-dark': 'rgba(0, 0, 0, 0.15)',
        '--tac-shadow-deep': 'rgba(0, 0, 0, 0.25)',

        // Motion
        '--tac-spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        '--tac-duration-fast': '0.1s',
        '--tac-duration-normal': '0.2s',
        '--tac-duration-slow': '0.3s',
      },

      '@media (prefers-color-scheme: dark)': {
        ':root': {
          '--tac-highlight': 'rgba(255, 255, 255, 0.15)',
          '--tac-highlight-strong': 'rgba(255, 255, 255, 0.25)',
          '--tac-inner-glow': 'rgba(255, 255, 255, 0.5)',
          '--tac-shadow-ambient': 'rgba(0, 0, 0, 0.3)',
          '--tac-shadow-dark': 'rgba(0, 0, 0, 0.4)',
          '--tac-shadow-deep': 'rgba(0, 0, 0, 0.6)',
        }
      }
    })

    // ========================================
    // 2. UTILITIES: Shadow & Depth Classes
    // ========================================
    addUtilities({
      // Raised utilities
      '.tac-raised': {
        'position': 'relative',
        'transition': 'transform var(--tac-duration-normal) var(--tac-spring), box-shadow var(--tac-duration-normal) var(--tac-spring)',
        'box-shadow': 'inset 0 2px 0 var(--tac-highlight), 0 var(--tac-depth-md) 0 var(--tw-shadow-color, var(--tac-shadow-ambient)), 0 calc(var(--tac-depth-md) + 4px) 12px var(--tac-shadow-ambient)',
      },
      '.tac-raised-xs': {
        'box-shadow': 'inset 0 1px 0 var(--tac-highlight), 0 var(--tac-depth-xs) 0 var(--tw-shadow-color, var(--tac-shadow-ambient)), 0 calc(var(--tac-depth-xs) + 2px) 4px var(--tac-shadow-ambient)',
      },
      '.tac-raised-sm': {
        'box-shadow': 'inset 0 1px 0 var(--tac-highlight), 0 var(--tac-depth-sm) 0 var(--tw-shadow-color, var(--tac-shadow-ambient)), 0 calc(var(--tac-depth-sm) + 3px) 8px var(--tac-shadow-ambient)',
      },
      '.tac-raised-lg': {
        'box-shadow': 'inset 0 3px 0 var(--tac-highlight), 0 var(--tac-depth-lg) 0 var(--tw-shadow-color, var(--tac-shadow-ambient)), 0 calc(var(--tac-depth-lg) + 6px) 16px var(--tac-shadow-dark)',
      },
      '.tac-raised-xl': {
        'box-shadow': 'inset 0 4px 0 var(--tac-highlight), 0 var(--tac-depth-xl) 0 var(--tw-shadow-color, var(--tac-shadow-ambient)), 0 calc(var(--tac-depth-xl) + 8px) 20px var(--tac-shadow-dark)',
      },

      // Sculpted utilities
      '.tac-sculpted': {
        'position': 'relative',
        'transition': 'box-shadow var(--tac-duration-normal) var(--tac-spring)',
        'box-shadow': 'inset 0 4px 8px rgba(0, 0, 0, 0.12), inset 0 -2px 4px var(--tac-inner-glow)',
      },
      '.tac-sculpted-light': {
        'box-shadow': 'inset 0 2px 4px rgba(0, 0, 0, 0.08), inset 0 -1px 2px var(--tac-inner-glow)',
      },
      '.tac-sculpted-deep': {
        'box-shadow': 'inset 0 6px 12px rgba(0, 0, 0, 0.18), inset 0 -3px 6px var(--tac-inner-glow)',
      },

      // Pressed state
      '.tac-pressed': {
        'transform': 'translateY(calc(var(--tac-depth-md) - var(--tac-depth-xs)))',
        'box-shadow': 'inset 0 1px 0 var(--tac-highlight), 0 var(--tac-depth-xs) 0 var(--tw-shadow-color, var(--tac-shadow-ambient)), 0 calc(var(--tac-depth-xs) + 2px) 4px var(--tac-shadow-dark)',
      },

      // Spring animation
      '.tac-spring': {
        'transition-timing-function': 'var(--tac-spring)',
      },
    })

    // ========================================
    // 3. COMPONENTS: Ready-to-use UI elements
    // ========================================
    addComponents({
      // Button base
      '.tac-btn': {
        'position': 'relative',
        'display': 'inline-flex',
        'alignItems': 'center',
        'justifyContent': 'center',
        'gap': '0.5rem',
        'padding': '0.75rem 1.5rem',
        'fontWeight': '700',
        'fontSize': '0.9375rem',
        'border': 'none',
        'borderRadius': 'var(--tac-radius-md)',
        'cursor': 'pointer',
        'userSelect': 'none',
        'transition': 'transform var(--tac-duration-normal) var(--tac-spring), box-shadow var(--tac-duration-normal) var(--tac-spring), background-color var(--tac-duration-fast) ease',

        '&:active': {
          'transform': 'translateY(4px)',
        },

        '&:disabled': {
          'opacity': '0.5',
          'cursor': 'not-allowed',
          'transform': 'none',
        },
      },

      // Button variants
      '.tac-btn-primary': {
        'backgroundColor': 'var(--tac-primary)',
        'color': '#fff',
        'boxShadow': 'inset 0 2px 0 rgba(255, 255, 255, 0.25), 0 6px 0 var(--tac-primary-edge), 0 10px 12px var(--tac-shadow-ambient)',

        '&:hover': {
          'backgroundColor': 'var(--tac-primary-light)',
        },

        '&:active': {
          'boxShadow': 'inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 2px 0 var(--tac-primary-edge), 0 4px 4px var(--tac-shadow-dark)',
        },
      },

      '.tac-btn-success': {
        'backgroundColor': 'var(--tac-success)',
        'color': '#fff',
        'boxShadow': 'inset 0 2px 0 rgba(255, 255, 255, 0.25), 0 6px 0 var(--tac-success-edge), 0 10px 12px var(--tac-shadow-ambient)',

        '&:hover': {
          'backgroundColor': 'var(--tac-success-light)',
        },

        '&:active': {
          'boxShadow': 'inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 2px 0 var(--tac-success-edge), 0 4px 4px var(--tac-shadow-dark)',
        },
      },

      '.tac-btn-danger': {
        'backgroundColor': 'var(--tac-danger)',
        'color': '#fff',
        'boxShadow': 'inset 0 2px 0 rgba(255, 255, 255, 0.25), 0 6px 0 var(--tac-danger-edge), 0 10px 12px var(--tac-shadow-ambient)',

        '&:hover': {
          'backgroundColor': 'var(--tac-danger-light)',
        },

        '&:active': {
          'boxShadow': 'inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 2px 0 var(--tac-danger-edge), 0 4px 4px var(--tac-shadow-dark)',
        },
      },

      '.tac-btn-neutral': {
        'backgroundColor': 'var(--tac-neutral-100)',
        'color': 'var(--tac-neutral-700)',
        'boxShadow': 'inset 0 2px 0 var(--tac-highlight), 0 6px 0 var(--tac-neutral-300), 0 10px 12px var(--tac-shadow-ambient)',

        '&:hover': {
          'backgroundColor': 'var(--tac-neutral-200)',
        },

        '&:active': {
          'boxShadow': 'inset 0 1px 0 var(--tac-highlight), 0 2px 0 var(--tac-neutral-300), 0 4px 4px var(--tac-shadow-dark)',
        },
      },

      // Button sizes
      '.tac-btn-sm': {
        'padding': '0.5rem 1rem',
        'fontSize': '0.8125rem',
      },
      '.tac-btn-lg': {
        'padding': '1rem 2rem',
        'fontSize': '1rem',
      },
      '.tac-btn-pill': {
        'borderRadius': 'var(--tac-radius-full)',
      },
      '.tac-btn-icon': {
        'padding': '0.75rem',
        'aspectRatio': '1',
      },

      // Input
      '.tac-input': {
        'width': '100%',
        'padding': '0.75rem 1rem',
        'fontSize': '0.9375rem',
        'fontWeight': '500',
        'color': 'var(--tac-neutral-800)',
        'backgroundColor': 'var(--tac-neutral-100)',
        'border': 'none',
        'borderRadius': 'var(--tac-radius-md)',
        'outline': 'none',
        'boxShadow': 'inset 0 4px 8px rgba(0, 0, 0, 0.1), inset 0 -2px 4px var(--tac-inner-glow)',
        'transition': 'box-shadow var(--tac-duration-normal) var(--tac-spring), background-color var(--tac-duration-fast) ease',

        '&::placeholder': {
          'color': 'var(--tac-neutral-400)',
        },

        '&:focus': {
          'backgroundColor': 'var(--tac-neutral-50)',
          'boxShadow': 'inset 0 4px 8px rgba(0, 0, 0, 0.08), inset 0 -2px 4px var(--tac-inner-glow), 0 0 0 3px var(--tac-primary-light)',
        },

        '&:disabled': {
          'opacity': '0.5',
          'cursor': 'not-allowed',
        },
      },

      // Card
      '.tac-card': {
        'backgroundColor': 'var(--tac-neutral-100)',
        'borderRadius': 'var(--tac-radius-lg)',
        'padding': '1.5rem',
        'boxShadow': 'inset 0 2px 0 var(--tac-highlight), 0 6px 0 var(--tac-neutral-300), 0 10px 16px var(--tac-shadow-ambient)',
      },

      '.tac-card-interactive': {
        'cursor': 'pointer',
        'transition': 'transform var(--tac-duration-normal) var(--tac-spring), box-shadow var(--tac-duration-normal) var(--tac-spring)',

        '&:hover': {
          'transform': 'translateY(-2px)',
          'boxShadow': 'inset 0 2px 0 var(--tac-highlight-strong), 0 8px 0 var(--tac-neutral-300), 0 14px 20px var(--tac-shadow-dark)',
        },

        '&:active': {
          'transform': 'translateY(4px)',
          'boxShadow': 'inset 0 1px 0 var(--tac-highlight), 0 2px 0 var(--tac-neutral-300), 0 4px 6px var(--tac-shadow-dark)',
        },
      },

      // Badge
      '.tac-badge': {
        'display': 'inline-flex',
        'alignItems': 'center',
        'justifyContent': 'center',
        'padding': '0.25rem 0.625rem',
        'fontSize': '0.75rem',
        'fontWeight': '700',
        'lineHeight': '1',
        'borderRadius': 'var(--tac-radius-sm)',
        'whiteSpace': 'nowrap',
      },

      '.tac-badge-primary': {
        'backgroundColor': 'var(--tac-primary)',
        'color': '#fff',
        'boxShadow': 'inset 0 1px 0 rgba(255, 255, 255, 0.25), 0 2px 0 var(--tac-primary-edge), 0 3px 4px var(--tac-shadow-ambient)',
      },
    })
  },

  // ========================================
  // 4. THEME EXTENSIONS
  // ========================================
  {
    theme: {
      extend: {
        borderRadius: {
          'tac-sm': 'var(--tac-radius-sm)',
          'tac-md': 'var(--tac-radius-md)',
          'tac-lg': 'var(--tac-radius-lg)',
          'tac-xl': 'var(--tac-radius-xl)',
          'tac-full': 'var(--tac-radius-full)',
        },
        spacing: {
          'tac-depth-xs': 'var(--tac-depth-xs)',
          'tac-depth-sm': 'var(--tac-depth-sm)',
          'tac-depth-md': 'var(--tac-depth-md)',
          'tac-depth-lg': 'var(--tac-depth-lg)',
          'tac-depth-xl': 'var(--tac-depth-xl)',
        },
        transitionTimingFunction: {
          'tac-spring': 'var(--tac-spring)',
        },
        colors: {
          'tac': {
            'primary': 'var(--tac-primary)',
            'primary-edge': 'var(--tac-primary-edge)',
            'primary-light': 'var(--tac-primary-light)',
            'success': 'var(--tac-success)',
            'success-edge': 'var(--tac-success-edge)',
            'warning': 'var(--tac-warning)',
            'warning-edge': 'var(--tac-warning-edge)',
            'danger': 'var(--tac-danger)',
            'danger-edge': 'var(--tac-danger-edge)',
          }
        }
      }
    }
  }
)
