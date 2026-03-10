import React, { forwardRef } from 'react';

function cx(...values) {
  return values.filter(Boolean).join(' ');
}

function clampPercentage(value, max = 100) {
  if (!Number.isFinite(value) || !Number.isFinite(max) || max <= 0) {
    return 0;
  }

  return Math.min(100, Math.max(0, (value / max) * 100));
}

const surfaceVariantClass = {
  outer: 'tactile-outer',
  inner: 'tactile-inner',
  clay: 'tactile-clay',
};

const sizeClass = {
  sm: 'tactile-sm',
  md: '',
  lg: 'tactile-lg',
  xl: 'tactile-xl',
};

const buttonVariantClass = {
  default: 'tactile-button',
  primary: 'tactile-button-primary',
  clay: 'tactile-button-clay',
  clayPrimary: 'tactile-button-clay-primary',
};

const fabVariantClass = {
  default: 'tactile-fab',
  clay: 'tactile-fab-clay',
};

const fabSizeClass = {
  sm: {
    default: 'tactile-fab-sm',
    clay: 'tactile-fab-clay-sm',
  },
  md: {
    default: '',
    clay: '',
  },
  lg: {
    default: 'tactile-fab-lg',
    clay: 'tactile-fab-clay-lg',
  },
};

const keyboardKeyWidthClass = {
  normal: '',
  wide: 'tactile-keyboard-key-wide',
  xwide: 'tactile-keyboard-key-xwide',
  space: 'tactile-keyboard-key-space',
};

const keyboardClayKeyWidthClass = {
  normal: '',
  wide: 'tactile-keyboard-clay-key-wide',
  xwide: 'tactile-keyboard-clay-key-xwide',
  space: 'tactile-keyboard-clay-key-space',
};

const badgeToneClass = {
  default: '',
  primary: 'tactile-badge-primary',
  success: 'tactile-badge-success',
  danger: 'tactile-badge-danger',
  warning: 'tactile-badge-warning',
  info: 'tactile-badge-info',
};

const avatarSizeClass = {
  sm: 'tactile-avatar-sm',
  md: '',
  lg: 'tactile-avatar-lg',
  xl: 'tactile-avatar-xl',
};

const toastToneClass = {
  success: 'tactile-toast-success',
  danger: 'tactile-toast-danger',
  warning: 'tactile-toast-warning',
  info: 'tactile-toast-info',
};

export const TactileTheme = forwardRef(function TactileTheme(
  { as: Component = 'div', theme = 'classic', className, ...props },
  ref
) {
  return React.createElement(Component, {
    ref,
    'data-theme': theme === 'classic' ? undefined : theme,
    className: cx(theme !== 'classic' && `tactile-theme-${theme}`, className),
    ...props,
  });
});

export const TactileSurface = forwardRef(function TactileSurface(
  { as: Component = 'div', variant = 'outer', size = 'md', className, ...props },
  ref
) {
  return React.createElement(Component, {
    ref,
    className: cx(surfaceVariantClass[variant] || surfaceVariantClass.outer, sizeClass[size], className),
    ...props,
  });
});

export const TactileButton = forwardRef(function TactileButton(
  { variant = 'default', size = 'md', active = false, className, ...props },
  ref
) {
  return React.createElement('button', {
    ref,
    className: cx(
      buttonVariantClass[variant] || buttonVariantClass.default,
      sizeClass[size],
      active && 'tactile-active',
      className
    ),
    ...props,
  });
});

export const TactileInput = forwardRef(function TactileInput(
  { clay = false, className, ...props },
  ref
) {
  return React.createElement('input', {
    ref,
    className: cx(clay ? 'tactile-input-clay' : 'tactile-input', className),
    ...props,
  });
});

export const TactileField = forwardRef(function TactileField(
  { as: Component = 'div', label, hint, children, className, labelClassName, hintClassName, ...props },
  ref
) {
  return React.createElement(
    Component,
    {
      ref,
      className: cx('tactile-field', className),
      ...props,
    },
    label ? React.createElement('label', { className: cx('tactile-field-label', labelClassName) }, label) : null,
    children,
    hint ? React.createElement('div', { className: cx('tactile-field-hint', hintClassName) }, hint) : null
  );
});

export const TactileSelect = forwardRef(function TactileSelect(
  { clay = false, className, children, ...props },
  ref
) {
  return React.createElement('select', {
    ref,
    className: cx('tactile-select', clay && 'tactile-select-clay', className),
    ...props,
  }, children);
});

export const TactileTextarea = forwardRef(function TactileTextarea(
  { clay = false, className, ...props },
  ref
) {
  return React.createElement('textarea', {
    ref,
    className: cx('tactile-textarea', clay && 'tactile-textarea-clay', className),
    ...props,
  });
});

export const TactileCard = forwardRef(function TactileCard(
  { as: Component = 'div', variant = 'outer', className, ...props },
  ref
) {
  const variantClass = variant === 'clay' ? 'tactile-card-clay' : cx('tactile-card', surfaceVariantClass[variant] || 'tactile-outer');

  return React.createElement(Component, {
    ref,
    className: cx(variantClass, className),
    ...props,
  });
});

export const TactileFab = forwardRef(function TactileFab(
  { variant = 'default', size = 'md', className, ...props },
  ref
) {
  const normalizedVariant = variant === 'clay' ? 'clay' : 'default';

  return React.createElement('button', {
    ref,
    className: cx(
      fabVariantClass[normalizedVariant],
      fabSizeClass[size]?.[normalizedVariant],
      className
    ),
    ...props,
  });
});

export const TactileSegment = forwardRef(function TactileSegment(
  { active = false, className, ...props },
  ref
) {
  return React.createElement('button', {
    ref,
    className: cx('tactile-segment', active && 'tactile-active', className),
    'aria-pressed': props['aria-pressed'] ?? active,
    ...props,
  });
});

export const TactileSegmented = forwardRef(function TactileSegmented(
  { clay = false, className, ...props },
  ref
) {
  return React.createElement('div', {
    ref,
    className: cx(clay ? 'tactile-segmented-clay' : 'tactile-segmented tactile-inner', className),
    ...props,
  });
});

export const TactileTabs = forwardRef(function TactileTabs(
  { className, ...props },
  ref
) {
  return React.createElement('div', {
    ref,
    className: cx('tactile-tabs', className),
    ...props,
  });
});

export const TactileTabList = forwardRef(function TactileTabList(
  { className, ...props },
  ref
) {
  return React.createElement('div', {
    ref,
    className: cx('tactile-tab-list tactile-inner', className),
    role: props.role ?? 'tablist',
    ...props,
  });
});

export const TactileTab = forwardRef(function TactileTab(
  { active = false, className, ...props },
  ref
) {
  return React.createElement('button', {
    ref,
    className: cx('tactile-tab', active && 'tactile-active', className),
    role: props.role ?? 'tab',
    'aria-selected': props['aria-selected'] ?? active,
    ...props,
  });
});

export const TactileTabPanel = forwardRef(function TactileTabPanel(
  { className, ...props },
  ref
) {
  return React.createElement('div', {
    ref,
    className: cx('tactile-tab-panel', className),
    role: props.role ?? 'tabpanel',
    ...props,
  });
});

export const TactileProgress = forwardRef(function TactileProgress(
  { value = 0, max = 100, clay = false, className, fillClassName, style, ...props },
  ref
) {
  const percentage = clampPercentage(value, max);

  return React.createElement(
    'div',
    {
      ref,
      className: cx(clay ? 'tactile-track-clay' : 'tactile-track tactile-inner', className),
      style,
      ...props,
    },
    React.createElement('div', {
      className: cx(clay ? 'tactile-track-clay-fill' : 'tactile-track-fill', fillClassName),
      style: { width: `${percentage}%` },
    })
  );
});

export const TactileGauge = forwardRef(function TactileGauge(
  { value = 0, max = 100, clay = false, label, showValue = true, className, style, ...props },
  ref
) {
  const percentage = clampPercentage(value, max);
  const gaugeClass = clay ? 'tactile-gauge-clay' : 'tactile-gauge tactile-inner';
  const centerClass = clay ? 'tactile-gauge-clay-center' : 'tactile-gauge-center';

  return React.createElement(
    'div',
    {
      ref,
      className: cx(gaugeClass, className),
      style: { ...style, '--progress': `${percentage}%` },
      ...props,
    },
    React.createElement(
      'div',
      { className: centerClass },
      showValue && React.createElement('span', { className: 'tactile-gauge-value' }, `${Math.round(percentage)}%`),
      label && React.createElement('span', { className: 'tactile-gauge-label' }, label)
    )
  );
});

export const TactileKeypad = forwardRef(function TactileKeypad(
  { clay = false, className, ...props },
  ref
) {
  return React.createElement('div', {
    ref,
    className: cx(clay ? 'tactile-keypad-clay' : 'tactile-keypad tactile-inner', className),
    ...props,
  });
});

export const TactileKey = forwardRef(function TactileKey(
  { clay = false, action = false, className, ...props },
  ref
) {
  return React.createElement('button', {
    ref,
    className: cx(
      clay ? 'tactile-key-clay' : 'tactile-key',
      action && (clay ? 'tactile-key-clay-action' : 'tactile-key-action'),
      className
    ),
    ...props,
  });
});

export const TactileKeyboard = forwardRef(function TactileKeyboard(
  { clay = false, className, ...props },
  ref
) {
  return React.createElement('div', {
    ref,
    className: cx(clay ? 'tactile-keyboard-clay' : 'tactile-keyboard tactile-inner', className),
    ...props,
  });
});

export const TactileKeyboardRow = forwardRef(function TactileKeyboardRow(
  { clay = false, className, ...props },
  ref
) {
  return React.createElement('div', {
    ref,
    className: cx(clay ? 'tactile-keyboard-clay-row' : 'tactile-keyboard-row', className),
    ...props,
  });
});

export const TactileKeyboardKey = forwardRef(function TactileKeyboardKey(
  { clay = false, width = 'normal', primary = false, className, ...props },
  ref
) {
  const widthClasses = clay ? keyboardClayKeyWidthClass : keyboardKeyWidthClass;

  return React.createElement('button', {
    ref,
    className: cx(
      clay ? 'tactile-keyboard-clay-key' : 'tactile-keyboard-key',
      widthClasses[width] || '',
      primary && (clay ? 'tactile-keyboard-clay-key-primary' : 'tactile-keyboard-key-primary'),
      className
    ),
    ...props,
  });
});

export const TactileBadge = forwardRef(function TactileBadge(
  { as: Component = 'span', clay = false, tone = 'default', className, ...props },
  ref
) {
  return React.createElement(Component, {
    ref,
    className: cx(
      clay ? 'tactile-badge-clay' : 'tactile-badge',
      badgeToneClass[tone] || '',
      className
    ),
    ...props,
  });
});

export const TactileAvatar = forwardRef(function TactileAvatar(
  { as: Component = 'div', clay = false, size = 'md', src, alt = '', children, className, ...props },
  ref
) {
  return React.createElement(
    Component,
    {
      ref,
      className: cx('tactile-avatar', clay && 'tactile-avatar-clay', avatarSizeClass[size], className),
      ...props,
    },
    src ? React.createElement('img', { src, alt }) : children
  );
});

export const TactileDivider = forwardRef(function TactileDivider(
  { vertical = false, className, ...props },
  ref
) {
  return React.createElement('hr', {
    ref,
    className: cx(vertical ? 'tactile-divider-vertical' : 'tactile-divider', className),
    'aria-orientation': vertical ? 'vertical' : 'horizontal',
    ...props,
  });
});

export const TactileCheckbox = forwardRef(function TactileCheckbox(
  { clay = false, className, ...props },
  ref
) {
  return React.createElement('input', {
    ref,
    type: 'checkbox',
    className: cx('tactile-checkbox', clay && 'tactile-checkbox-clay', className),
    ...props,
  });
});

export const TactileSwitch = forwardRef(function TactileSwitch(
  { clay = false, className, ...props },
  ref
) {
  return React.createElement('input', {
    ref,
    type: 'checkbox',
    role: props.role ?? 'switch',
    className: cx('tactile-switch', clay && 'tactile-switch-clay', className),
    ...props,
  });
});

export const TactileModal = forwardRef(function TactileModal(
  {
    open = false,
    title,
    children,
    footer,
    onClose,
    overlayClassName,
    className,
    closeLabel = 'Close',
    hideClose = false,
    ...props
  },
  ref
) {
  return React.createElement(
    'div',
    {
      className: cx('tactile-modal-overlay', open && 'tactile-open', overlayClassName),
      'aria-hidden': !open,
    },
    React.createElement(
      'div',
      {
        ref,
        className: cx('tactile-modal', className),
        role: 'dialog',
        'aria-modal': true,
        ...props,
      },
      (title || !hideClose) &&
        React.createElement(
          'div',
          { className: 'tactile-modal-header' },
          title ? React.createElement('h3', { className: 'tactile-modal-title' }, title) : React.createElement('span'),
          !hideClose &&
            React.createElement(
              'button',
              { type: 'button', className: 'tactile-modal-close', onClick: onClose, 'aria-label': closeLabel },
              '×'
            )
        ),
      children ? React.createElement('div', { className: 'tactile-modal-body' }, children) : null,
      footer ? React.createElement('div', { className: 'tactile-modal-footer' }, footer) : null
    )
  );
});

export const TactileToast = forwardRef(function TactileToast(
  {
    tone = 'info',
    show = true,
    title,
    message,
    icon,
    onClose,
    hideClose = false,
    className,
    ...props
  },
  ref
) {
  return React.createElement(
    'div',
    {
      ref,
      className: cx('tactile-toast', toastToneClass[tone] || toastToneClass.info, show && 'tactile-toast-show', className),
      role: 'status',
      ...props,
    },
    React.createElement('div', { className: 'tactile-toast-icon', 'aria-hidden': true }, icon ?? '•'),
    React.createElement(
      'div',
      { className: 'tactile-toast-content' },
      title ? React.createElement('div', { className: 'tactile-toast-title' }, title) : null,
      message ? React.createElement('div', { className: 'tactile-toast-message' }, message) : null
    ),
    !hideClose &&
      React.createElement(
        'button',
        { type: 'button', className: 'tactile-toast-close', onClick: onClose, 'aria-label': 'Close notification' },
        '×'
      )
  );
});

export const TactileToastContainer = forwardRef(function TactileToastContainer(
  { className, ...props },
  ref
) {
  return React.createElement('div', {
    ref,
    className: cx('tactile-toast-container', className),
    ...props,
  });
});

export const TactileAccordion = forwardRef(function TactileAccordion(
  { className, ...props },
  ref
) {
  return React.createElement('div', {
    ref,
    className: cx('tactile-accordion', className),
    ...props,
  });
});

export const TactileAccordionItem = forwardRef(function TactileAccordionItem(
  { className, ...props },
  ref
) {
  return React.createElement('details', {
    ref,
    className: cx('tactile-accordion-item', className),
    ...props,
  });
});

export const TactileAccordionTrigger = forwardRef(function TactileAccordionTrigger(
  { className, ...props },
  ref
) {
  return React.createElement('summary', {
    ref,
    className: cx('tactile-accordion-trigger', className),
    ...props,
  });
});

export const TactileAccordionContent = forwardRef(function TactileAccordionContent(
  { className, ...props },
  ref
) {
  return React.createElement('div', {
    ref,
    className: cx('tactile-accordion-content', className),
    ...props,
  });
});

export default {
  TactileTheme,
  TactileSurface,
  TactileButton,
  TactileInput,
  TactileField,
  TactileSelect,
  TactileTextarea,
  TactileCard,
  TactileFab,
  TactileSegment,
  TactileSegmented,
  TactileTabs,
  TactileTabList,
  TactileTab,
  TactileTabPanel,
  TactileProgress,
  TactileGauge,
  TactileKeypad,
  TactileKey,
  TactileKeyboard,
  TactileKeyboardRow,
  TactileKeyboardKey,
  TactileBadge,
  TactileAvatar,
  TactileDivider,
  TactileCheckbox,
  TactileSwitch,
  TactileModal,
  TactileToast,
  TactileToastContainer,
  TactileAccordion,
  TactileAccordionItem,
  TactileAccordionTrigger,
  TactileAccordionContent,
};
