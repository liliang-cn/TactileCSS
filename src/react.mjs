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

function clampNumber(value, min = 0, max = 100) {
  if (!Number.isFinite(value)) {
    return min;
  }

  return Math.min(max, Math.max(min, value));
}

function calculateRangePercentage(value, min = 0, max = 100) {
  if (!Number.isFinite(min) || !Number.isFinite(max) || max <= min) {
    return 0;
  }

  return ((clampNumber(value, min, max) - min) / (max - min)) * 100;
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

const iconVariantClass = {
  raised: 'tactile-icon-raised',
  sculpted: 'tactile-icon-sculpted',
};

const utilityToneClass = {
  primary: 'tactile-primary',
  success: 'tactile-success',
  danger: 'tactile-danger',
  warning: 'tactile-warning',
  info: 'tactile-info',
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

export const TactileFieldLabel = forwardRef(function TactileFieldLabel(
  { as: Component = 'label', className, ...props },
  ref
) {
  return React.createElement(Component, {
    ref,
    className: cx('tactile-field-label', className),
    ...props,
  });
});

export const TactileFieldHint = forwardRef(function TactileFieldHint(
  { as: Component = 'div', className, ...props },
  ref
) {
  return React.createElement(Component, {
    ref,
    className: cx('tactile-field-hint', className),
    ...props,
  });
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

export const TactileSlider = forwardRef(function TactileSlider(
  {
    clay = false,
    className,
    defaultValue,
    disabled = false,
    inputProps,
    max = 100,
    min = 0,
    onChange,
    onValueChange,
    step = 1,
    thumbClassName,
    trackClassName,
    value,
    ...props
  },
  ref
) {
  const isControlled = value != null;
  const [internalValue, setInternalValue] = React.useState(() =>
    clampNumber(defaultValue ?? value ?? min, min, max)
  );

  React.useEffect(() => {
    if (!isControlled) {
      setInternalValue((currentValue) => clampNumber(currentValue, min, max));
    }
  }, [isControlled, min, max]);

  const currentValue = clampNumber(isControlled ? value : internalValue, min, max);
  const percentage = calculateRangePercentage(currentValue, min, max);
  const thumbSize = clay ? 32 : 28;
  const thumbStyle = {
    left: `calc(${percentage}% - ${thumbSize / 2}px)`,
    marginTop: `${thumbSize / -2}px`,
  };
  const inputStyle = {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    margin: 0,
    opacity: 0,
    cursor: disabled ? 'not-allowed' : 'pointer',
    ...inputProps?.style,
  };

  function handleChange(event) {
    const nextValue = clampNumber(Number(event.target.value), min, max);

    if (!isControlled) {
      setInternalValue(nextValue);
    }

    onChange?.(event);
    onValueChange?.(nextValue);
  }

  return React.createElement(
    'div',
    {
      ref,
      className: cx(clay ? 'tactile-slider-clay' : 'tactile-slider', className),
      'aria-disabled': disabled || undefined,
      ...props,
    },
    React.createElement('div', {
      className: cx(clay ? 'tactile-slider-clay-track' : 'tactile-slider-track tactile-inner', trackClassName),
      'aria-hidden': true,
    }),
    React.createElement('div', {
      className: cx(clay ? 'tactile-slider-clay-thumb' : 'tactile-slider-thumb', thumbClassName),
      style: thumbStyle,
      'aria-hidden': true,
    }),
    React.createElement('input', {
      ...inputProps,
      disabled,
      max,
      min,
      onChange: handleChange,
      step,
      style: inputStyle,
      type: 'range',
      value: currentValue,
    })
  );
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

export const TactileTone = forwardRef(function TactileTone(
  { as: Component = 'span', tone = 'primary', className, ...props },
  ref
) {
  return React.createElement(Component, {
    ref,
    className: cx(utilityToneClass[tone] || utilityToneClass.primary, className),
    ...props,
  });
});

export const TactileModalOverlay = forwardRef(function TactileModalOverlay(
  { open = false, className, ...props },
  ref
) {
  return React.createElement('div', {
    ref,
    className: cx('tactile-modal-overlay', open && 'tactile-open', className),
    'aria-hidden': !open,
    ...props,
  });
});

export const TactileModalHeader = forwardRef(function TactileModalHeader(
  { className, ...props },
  ref
) {
  return React.createElement('div', {
    ref,
    className: cx('tactile-modal-header', className),
    ...props,
  });
});

export const TactileModalTitle = forwardRef(function TactileModalTitle(
  { as: Component = 'h3', className, ...props },
  ref
) {
  return React.createElement(Component, {
    ref,
    className: cx('tactile-modal-title', className),
    ...props,
  });
});

export const TactileModalClose = forwardRef(function TactileModalClose(
  { className, type = 'button', ...props },
  ref
) {
  return React.createElement('button', {
    ref,
    type,
    className: cx('tactile-modal-close', className),
    ...props,
  });
});

export const TactileModalBody = forwardRef(function TactileModalBody(
  { className, ...props },
  ref
) {
  return React.createElement('div', {
    ref,
    className: cx('tactile-modal-body', className),
    ...props,
  });
});

export const TactileModalFooter = forwardRef(function TactileModalFooter(
  { className, ...props },
  ref
) {
  return React.createElement('div', {
    ref,
    className: cx('tactile-modal-footer', className),
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
    TactileModalOverlay,
    {
      className: overlayClassName,
      open,
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
          TactileModalHeader,
          null,
          title ? React.createElement(TactileModalTitle, null, title) : React.createElement('span'),
          !hideClose &&
            React.createElement(
              TactileModalClose,
              { onClick: onClose, 'aria-label': closeLabel },
              '×'
            )
        ),
      children ? React.createElement(TactileModalBody, null, children) : null,
      footer ? React.createElement(TactileModalFooter, null, footer) : null
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
    React.createElement(TactileToastIcon, null, icon ?? '•'),
    React.createElement(
      TactileToastContent,
      null,
      title ? React.createElement(TactileToastTitle, null, title) : null,
      message ? React.createElement(TactileToastMessage, null, message) : null
    ),
    !hideClose &&
      React.createElement(
        TactileToastClose,
        { onClick: onClose, 'aria-label': 'Close notification' },
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

export const TactileToastIcon = forwardRef(function TactileToastIcon(
  { className, ...props },
  ref
) {
  return React.createElement('div', {
    ref,
    className: cx('tactile-toast-icon', className),
    'aria-hidden': props['aria-hidden'] ?? true,
    ...props,
  });
});

export const TactileToastContent = forwardRef(function TactileToastContent(
  { className, ...props },
  ref
) {
  return React.createElement('div', {
    ref,
    className: cx('tactile-toast-content', className),
    ...props,
  });
});

export const TactileToastTitle = forwardRef(function TactileToastTitle(
  { as: Component = 'div', className, ...props },
  ref
) {
  return React.createElement(Component, {
    ref,
    className: cx('tactile-toast-title', className),
    ...props,
  });
});

export const TactileToastMessage = forwardRef(function TactileToastMessage(
  { as: Component = 'div', className, ...props },
  ref
) {
  return React.createElement(Component, {
    ref,
    className: cx('tactile-toast-message', className),
    ...props,
  });
});

export const TactileToastClose = forwardRef(function TactileToastClose(
  { className, type = 'button', ...props },
  ref
) {
  return React.createElement('button', {
    ref,
    type,
    className: cx('tactile-toast-close', className),
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

export const TactileIcon = forwardRef(function TactileIcon(
  { as: Component = 'span', variant = 'raised', className, ...props },
  ref
) {
  return React.createElement(Component, {
    ref,
    className: cx(iconVariantClass[variant] || iconVariantClass.raised, className),
    ...props,
  });
});

export const TactileText = forwardRef(function TactileText(
  { as: Component = 'span', sculpted = true, className, ...props },
  ref
) {
  return React.createElement(Component, {
    ref,
    className: cx(sculpted && 'tactile-text-sculpted', className),
    ...props,
  });
});

export default {
  TactileTheme,
  TactileSurface,
  TactileButton,
  TactileInput,
  TactileField,
  TactileFieldLabel,
  TactileFieldHint,
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
  TactileSlider,
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
  TactileTone,
  TactileModalOverlay,
  TactileModalHeader,
  TactileModalTitle,
  TactileModalClose,
  TactileModalBody,
  TactileModalFooter,
  TactileModal,
  TactileToast,
  TactileToastContainer,
  TactileToastIcon,
  TactileToastContent,
  TactileToastTitle,
  TactileToastMessage,
  TactileToastClose,
  TactileAccordion,
  TactileAccordionItem,
  TactileAccordionTrigger,
  TactileAccordionContent,
  TactileIcon,
  TactileText,
};
