const plugin = require('tailwindcss/plugin')

module.exports = plugin(
  function ({ addUtilities, addComponents, theme, e }) {
    // CSS Variables (Theme)
    addUtilities({
      ':root': {
        '--tactile-bg': '#e0e5ec',
        '--tactile-surface': '#e0e5ec',
        '--tactile-primary': '#8B5CF6',
        '--tactile-primary-light': '#A78BFA',
        '--tactile-primary-dark': '#6D28D9',
        '--tactile-text': '#374151',
        '--tactile-text-muted': '#6b7280',
        '--tactile-text-inverse': '#ffffff',
        '--tactile-light-shadow': 'rgba(255, 255, 255, 0.8)',
        '--tactile-dark-shadow': 'rgba(163, 177, 198, 0.6)',
        '--tactile-primary-light-shadow': 'rgba(255, 255, 255, 0.25)',
        '--tactile-primary-dark-shadow': 'rgba(109, 40, 217, 0.2)',
        '--tactile-offset': '6px',
        '--tactile-blur': '12px',
        '--tactile-transition': 'all 0.2s ease',
        '--tactile-spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        '--tactile-radius-sm': '6px',
        '--tactile-radius-md': '12px',
        '--tactile-radius-lg': '20px',
        '--tactile-radius-full': '9999px',
        '--tactile-success': '#10B981',
        '--tactile-danger': '#EF4444',
        '--tactile-warning': '#F59E0B',
        '--tactile-info': '#3B82F6',
      },
    })

    // Base Shadows (Outer, Inner, Clay)
    addUtilities({
      '.tactile-outer, .tactile-raised': {
        'background': 'var(--tactile-surface)',
        'box-shadow': `
          calc(var(--tactile-offset) * -1) calc(var(--tactile-offset) * -1) var(--tactile-blur) var(--tactile-light-shadow),
          var(--tactile-offset) var(--tactile-offset) var(--tactile-blur) var(--tactile-dark-shadow)
        `,
      },
      '.tactile-inner, .tactile-sculpted': {
        'background': 'var(--tactile-surface)',
        'box-shadow': `
          inset calc(var(--tactile-offset) * -1) calc(var(--tactile-offset) * -1) var(--tactile-blur) var(--tactile-light-shadow),
          inset var(--tactile-offset) var(--tactile-offset) var(--tactile-blur) var(--tactile-dark-shadow)
        `,
      },
      '.tactile-clay': {
        'background': 'var(--tactile-surface)',
        'box-shadow': `
          calc(var(--tactile-offset) * 1.2) calc(var(--tactile-offset) * 1.2) calc(var(--tactile-blur) * 1.2) rgba(0, 0, 0, 0.08),
          inset calc(var(--tactile-offset) * -1) calc(var(--tactile-offset) * -1) var(--tactile-blur) rgba(0, 0, 0, 0.05),
          inset var(--tactile-offset) var(--tactile-offset) var(--tactile-blur) var(--tactile-light-shadow)
        `,
      },
      // Size variants
      '.tactile-sm': { '--tactile-offset': '4px', '--tactile-blur': '8px' },
      '.tactile-lg': { '--tactile-offset': '10px', '--tactile-blur': '20px' },
      '.tactile-xl': { '--tactile-offset': '15px', '--tactile-blur': '30px' },
    })

    // Buttons
    addComponents({
      '.tactile-button': {
        'background': 'var(--tactile-surface)',
        'color': 'var(--tactile-text)',
        'border': 'none',
        'cursor': 'pointer',
        'transition': 'var(--tactile-transition)',
        'box-shadow': `
          calc(var(--tactile-offset) * -1) calc(var(--tactile-offset) * -1) var(--tactile-blur) var(--tactile-light-shadow),
          var(--tactile-offset) var(--tactile-offset) var(--tactile-blur) var(--tactile-dark-shadow)
        `,
        '&:hover': {
          filter: 'brightness(1.02)',
        },
        '&:active, &.tactile-active': {
          'box-shadow': `
            inset calc(var(--tactile-offset) * -0.5) calc(var(--tactile-offset) * -0.5) calc(var(--tactile-blur) * 0.5) var(--tactile-light-shadow),
            inset calc(var(--tactile-offset) * 0.5) calc(var(--tactile-offset) * 0.5) calc(var(--tactile-blur) * 0.5) var(--tactile-dark-shadow)
          `,
        },
      },
      '.tactile-button-primary': {
        'background': 'var(--tactile-primary)',
        'color': 'var(--tactile-text-inverse)',
        'border': 'none',
        'box-shadow': `
          0 -3px 0 var(--tactile-primary-dark) inset,
          0 3px 8px var(--tactile-primary-dark-shadow)
        `,
        '&:hover': {
          background: 'var(--tactile-primary-light)',
        },
        '&:active': {
          transform: 'translateY(2px)',
          'box-shadow': `
            0 -1px 0 var(--tactile-primary-dark) inset,
            0 1px 3px var(--tactile-primary-dark-shadow)
          `,
        },
      },
      // Clay Buttons
      '.tactile-button-clay': {
        'background': 'var(--tactile-surface)',
        'color': 'var(--tactile-text)',
        'border': 'none',
        'border-radius': 'var(--tactile-radius-lg)',
        'cursor': 'pointer',
        'transition': 'all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'box-shadow': `
          calc(var(--tactile-offset) * 1.2) calc(var(--tactile-offset) * 1.2) calc(var(--tactile-blur) * 1.2) rgba(0, 0, 0, 0.08),
          inset calc(var(--tactile-offset) * -1) calc(var(--tactile-offset) * -1) var(--tactile-blur) rgba(0, 0, 0, 0.05),
          inset var(--tactile-offset) var(--tactile-offset) var(--tactile-blur) var(--tactile-light-shadow)
        `,
        '&:hover': {
          transform: 'translateY(-2px)',
          'box-shadow': `
            calc(var(--tactile-offset) * 1.5) calc(var(--tactile-offset) * 1.5) calc(var(--tactile-blur) * 1.5) rgba(0, 0, 0, 0.1),
            inset calc(var(--tactile-offset) * -1) calc(var(--tactile-offset) * -1) var(--tactile-blur) rgba(0, 0, 0, 0.05),
            inset var(--tactile-offset) var(--tactile-offset) var(--tactile-blur) var(--tactile-light-shadow)
          `,
        },
        '&:active': {
          transform: 'scale(0.95)',
          'box-shadow': `
            calc(var(--tactile-offset) * 0.3) calc(var(--tactile-offset) * 0.3) calc(var(--tactile-blur) * 0.3) rgba(0, 0, 0, 0.05),
            inset calc(var(--tactile-offset) * -0.5) calc(var(--tactile-offset) * -0.5) calc(var(--tactile-blur) * 0.5) rgba(0, 0, 0, 0.04),
            inset calc(var(--tactile-offset) * 0.5) calc(var(--tactile-offset) * 0.5) calc(var(--tactile-blur) * 0.5) rgba(255, 255, 255, 0.8)
          `,
        },
      },
      '.tactile-button-clay-primary': {
        'background': 'var(--tactile-primary)',
        'color': 'var(--tactile-text-inverse)',
        'border': 'none',
        'cursor': 'pointer',
        'box-shadow': `
          calc(var(--tactile-offset) * 1.2) calc(var(--tactile-offset) * 1.2) calc(var(--tactile-blur) * 1.2) var(--tactile-primary-dark-shadow),
          inset calc(var(--tactile-offset) * -0.6) calc(var(--tactile-offset) * -0.6) calc(var(--tactile-blur) * 0.8) var(--tactile-primary-dark),
          inset calc(var(--tactile-offset) * 0.6) calc(var(--tactile-offset) * 0.6) calc(var(--tactile-blur) * 0.8) var(--tactile-primary-light)
        `,
        '&:hover': {
          background: 'var(--tactile-primary-light)',
          transform: 'translateY(-2px)',
        },
        '&:active': {
          transform: 'scale(0.95)',
        },
      },
    })

    // Input
    addComponents({
      '.tactile-input': {
        'width': '100%',
        'padding': '0.875rem 1.25rem',
        'font-size': '0.9375rem',
        'color': 'var(--tactile-text)',
        'background': 'var(--tactile-surface)',
        'border': 'none',
        'border-radius': 'var(--tactile-radius-lg)',
        'outline': 'none',
        'transition': 'var(--tactile-transition)',
        'box-shadow': `
          inset -4px -4px 8px var(--tactile-light-shadow),
          inset 4px 4px 8px var(--tactile-dark-shadow)
        `,
        '&::placeholder': {
          color: 'var(--tactile-text-muted)',
        },
        '&:focus': {
          'box-shadow': `
            inset -2px -2px 4px var(--tactile-light-shadow),
            inset 2px 2px 4px var(--tactile-dark-shadow),
            0 0 0 3px var(--tactile-primary)
          `,
        },
      },
      '.tactile-input-clay': {
        'width': '100%',
        'padding': '1rem 1.5rem',
        'font-size': '0.9375rem',
        'color': 'var(--tactile-text)',
        'background': 'var(--tactile-surface)',
        'border': 'none',
        'border-radius': 'var(--tactile-radius-lg)',
        'outline': 'none',
        'transition': 'all 0.2s ease',
        'box-shadow': `
          4px 4px 10px rgba(0, 0, 0, 0.05),
          inset -3px -3px 8px rgba(0, 0, 0, 0.04),
          inset 3px 3px 8px var(--tactile-light-shadow)
        `,
        '&::placeholder': {
          color: 'var(--tactile-text-muted)',
        },
        '&:focus': {
          'box-shadow': `
            4px 4px 10px rgba(0, 0, 0, 0.05),
            inset -3px -3px 8px rgba(0, 0, 0, 0.04),
            inset 3px 3px 8px var(--tactile-light-shadow),
            0 0 0 3px var(--tactile-primary)
          `,
        },
      },
    })

    // Card
    addComponents({
      '.tactile-card': {
        'padding': '1.5rem',
        'border-radius': 'var(--tactile-radius-lg)',
        'background': 'var(--tactile-surface)',
      },
      '.tactile-card-clay': {
        'padding': '1.5rem',
        'border-radius': '24px',
        'background': 'var(--tactile-surface)',
        'box-shadow': `
          8px 8px 20px rgba(0, 0, 0, 0.08),
          inset -5px -5px 12px rgba(0, 0, 0, 0.05),
          inset 5px 5px 12px var(--tactile-light-shadow)
        `,
      },
    })

    // FAB
    addComponents({
      '.tactile-fab': {
        'width': '64px',
        'height': '64px',
        'border-radius': '50%',
        'border': 'none',
        'cursor': 'pointer',
        'display': 'flex',
        'align-items': 'center',
        'justify-content': 'center',
        'font-size': '1.5rem',
        'color': 'var(--tactile-text-inverse)',
        'background': 'var(--tactile-primary)',
        'transition': 'var(--tactile-transition)',
        'box-shadow': `
          0 -4px 0 var(--tactile-primary-dark) inset,
          0 8px 16px var(--tactile-primary-dark-shadow)
        `,
        '&:hover': {
          transform: 'translateY(-2px)',
          'box-shadow': `
            0 -5px 0 var(--tactile-primary-dark) inset,
            0 12px 24px var(--tactile-primary-dark-shadow)
          `,
        },
        '&:active': {
          transform: 'translateY(3px)',
          'box-shadow': `
            0 -1px 0 var(--tactile-primary-dark) inset,
            0 3px 6px var(--tactile-primary-dark-shadow)
          `,
        },
      },
      '.tactile-fab-sm': { width: '48px', height: '48px', fontSize: '1.25rem' },
      '.tactile-fab-lg': { width: '80px', height: '80px', fontSize: '2rem' },
      '.tactile-fab-clay': {
        'width': '64px',
        'height': '64px',
        'border-radius': '50%',
        'border': 'none',
        'cursor': 'pointer',
        'display': 'flex',
        'align-items': 'center',
        'justify-content': 'center',
        'font-size': '1.5rem',
        'color': 'var(--tactile-text-inverse)',
        'background': 'var(--tactile-primary)',
        'transition': 'all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'box-shadow': `
          6px 6px 16px var(--tactile-primary-dark-shadow),
          inset -3px -3px 6px var(--tactile-primary-dark),
          inset 3px 3px 6px var(--tactile-primary-light)
        `,
        '&:hover': {
          transform: 'translateY(-3px) scale(1.02)',
          'box-shadow': `
            8px 8px 20px var(--tactile-primary-dark-shadow),
            inset -4px -4px 8px var(--tactile-primary-dark),
            inset 4px 4px 8px var(--tactile-primary-light)
          `,
        },
        '&:active': {
          transform: 'scale(0.92)',
          'box-shadow': `
            2px 2px 6px var(--tactile-primary-dark-shadow),
            inset -2px -2px 4px var(--tactile-primary-dark),
            inset 2px 2px 4px var(--tactile-primary-light)
          `,
        },
      },
      '.tactile-fab-clay-sm': { width: '48px', height: '48px', fontSize: '1.25rem' },
      '.tactile-fab-clay-lg': { width: '80px', height: '80px', fontSize: '2rem' },
    })

    // Color utilities
    addUtilities({
      '.tactile-primary': { background: 'var(--tactile-primary)', color: 'var(--tactile-text-inverse)' },
      '.tactile-success': { background: 'var(--tactile-success)', color: 'var(--tactile-text-inverse)' },
      '.tactile-danger': { background: 'var(--tactile-danger)', color: 'var(--tactile-text-inverse)' },
      '.tactile-warning': { background: 'var(--tactile-warning)', color: 'var(--tactile-text-inverse)' },
      '.tactile-info': { background: 'var(--tactile-info)', color: 'var(--tactile-text-inverse)' },
    })

    // Base
    addComponents({
      '.tactile': {
        'background': 'var(--tactile-bg)',
        'color': 'var(--tactile-text)',
        'transition': 'background 0.3s ease',
      },
    })
  },
  {
    theme: {
      extend: {
        colors: {
          tactile: {
            bg: 'var(--tactile-bg)',
            surface: 'var(--tactile-surface)',
            primary: 'var(--tactile-primary)',
            'primary-light': 'var(--tactile-primary-light)',
            'primary-dark': 'var(--tactile-primary-dark)',
            text: 'var(--tactile-text)',
            'text-muted': 'var(--tactile-text-muted)',
            success: 'var(--tactile-success)',
            danger: 'var(--tactile-danger)',
            warning: 'var(--tactile-warning)',
            info: 'var(--tactile-info)',
          },
        },
        borderRadius: {
          'tactile-sm': 'var(--tactile-radius-sm)',
          'tactile-md': 'var(--tactile-radius-md)',
          'tactile-lg': 'var(--tactile-radius-lg)',
          'tactile-full': 'var(--tactile-radius-full)',
        },
      },
    },
  }
)
