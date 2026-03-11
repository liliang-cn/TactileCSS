import { defineComponent, h, mergeProps, ref, watch } from 'vue';

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

function getClockAngles(hour = 0, minute = 0, second = 0) {
  const normalizedHour = ((hour % 12) + 12) % 12;
  const normalizedMinute = ((minute % 60) + 60) % 60;
  const normalizedSecond = ((second % 60) + 60) % 60;

  return {
    hour: normalizedHour * 30 + normalizedMinute * 0.5,
    minute: normalizedMinute * 6 + normalizedSecond * 0.1,
    second: normalizedSecond * 6,
  };
}

const elementType = [String, Object, Function];

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

const aiMessageRoleClass = {
  assistant: 'tactile-ai-message-assistant',
  user: 'tactile-ai-message-user',
  system: 'tactile-ai-message-system',
};

const aiStatusStateClass = {
  idle: '',
  streaming: 'tactile-ai-status-streaming',
  ready: 'tactile-ai-status-ready',
  error: 'tactile-ai-status-error',
};

function renderSlot(slots, name = 'default', fallback = null) {
  return slots[name] ? slots[name]() : fallback;
}

export const TactileTheme = defineComponent({
  name: 'TactileTheme',
  inheritAttrs: false,
  props: {
    as: { type: elementType, default: 'div' },
    theme: { type: String, default: 'classic' },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        props.as,
        mergeProps(attrs, {
          'data-theme': props.theme === 'classic' ? undefined : props.theme,
          class: cx(props.theme !== 'classic' && `tactile-theme-${props.theme}`),
        }),
        renderSlot(slots)
      );
  },
});

export const TactileSurface = defineComponent({
  name: 'TactileSurface',
  inheritAttrs: false,
  props: {
    as: { type: elementType, default: 'div' },
    variant: { type: String, default: 'outer' },
    size: { type: String, default: 'md' },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        props.as,
        mergeProps(attrs, {
          class: cx(surfaceVariantClass[props.variant] || surfaceVariantClass.outer, sizeClass[props.size]),
        }),
        renderSlot(slots)
      );
  },
});

export const TactileButton = defineComponent({
  name: 'TactileButton',
  inheritAttrs: false,
  props: {
    active: { type: Boolean, default: false },
    size: { type: String, default: 'md' },
    variant: { type: String, default: 'default' },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        'button',
        mergeProps(attrs, {
          class: cx(
            buttonVariantClass[props.variant] || buttonVariantClass.default,
            sizeClass[props.size],
            props.active && 'tactile-active'
          ),
        }),
        renderSlot(slots)
      );
  },
});

export const TactileInput = defineComponent({
  name: 'TactileInput',
  inheritAttrs: false,
  props: {
    clay: { type: Boolean, default: false },
    modelValue: { type: [String, Number], default: undefined },
    type: { type: String, default: 'text' },
  },
  emits: ['update:modelValue', 'input', 'change'],
  setup(props, { attrs, emit }) {
    function handleInput(event) {
      emit('update:modelValue', event.target.value);
      emit('input', event.target.value);
    }

    return () =>
      h('input', mergeProps(attrs, {
        class: cx(props.clay ? 'tactile-input-clay' : 'tactile-input'),
        type: props.type,
        value: props.modelValue ?? attrs.value,
        onInput: handleInput,
        onChange: (event) => emit('change', event),
      }));
  },
});

export const TactileField = defineComponent({
  name: 'TactileField',
  inheritAttrs: false,
  props: {
    as: { type: elementType, default: 'div' },
    hint: { type: [String, Number, Boolean, Object, Array], default: null },
    hintClass: { type: String, default: '' },
    label: { type: [String, Number, Boolean, Object, Array], default: null },
    labelClass: { type: String, default: '' },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        props.as,
        mergeProps(attrs, {
          class: 'tactile-field',
        }),
        [
          props.label != null ? h('label', { class: cx('tactile-field-label', props.labelClass) }, props.label) : null,
          renderSlot(slots),
          props.hint != null ? h('div', { class: cx('tactile-field-hint', props.hintClass) }, props.hint) : null,
        ]
      );
  },
});

export const TactileFieldLabel = defineComponent({
  name: 'TactileFieldLabel',
  inheritAttrs: false,
  props: {
    as: { type: elementType, default: 'label' },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(props.as, mergeProps(attrs, { class: 'tactile-field-label' }), renderSlot(slots));
  },
});

export const TactileFieldHint = defineComponent({
  name: 'TactileFieldHint',
  inheritAttrs: false,
  props: {
    as: { type: elementType, default: 'div' },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(props.as, mergeProps(attrs, { class: 'tactile-field-hint' }), renderSlot(slots));
  },
});

export const TactileSelect = defineComponent({
  name: 'TactileSelect',
  inheritAttrs: false,
  props: {
    clay: { type: Boolean, default: false },
    modelValue: { type: [String, Number], default: undefined },
  },
  emits: ['update:modelValue', 'change'],
  setup(props, { attrs, emit, slots }) {
    function handleChange(event) {
      emit('update:modelValue', event.target.value);
      emit('change', event.target.value);
    }

    return () =>
      h(
        'select',
        mergeProps(attrs, {
          class: cx('tactile-select', props.clay && 'tactile-select-clay'),
          value: props.modelValue ?? attrs.value,
          onChange: handleChange,
        }),
        renderSlot(slots)
      );
  },
});

export const TactileTextarea = defineComponent({
  name: 'TactileTextarea',
  inheritAttrs: false,
  props: {
    clay: { type: Boolean, default: false },
    modelValue: { type: [String, Number], default: undefined },
  },
  emits: ['update:modelValue', 'input', 'change'],
  setup(props, { attrs, emit }) {
    function handleInput(event) {
      emit('update:modelValue', event.target.value);
      emit('input', event.target.value);
    }

    return () =>
      h('textarea', mergeProps(attrs, {
        class: cx('tactile-textarea', props.clay && 'tactile-textarea-clay'),
        value: props.modelValue ?? attrs.value,
        onInput: handleInput,
        onChange: (event) => emit('change', event),
      }));
  },
});

export const TactileCard = defineComponent({
  name: 'TactileCard',
  inheritAttrs: false,
  props: {
    as: { type: elementType, default: 'div' },
    variant: { type: String, default: 'outer' },
  },
  setup(props, { attrs, slots }) {
    const variantClass =
      props.variant === 'clay'
        ? 'tactile-card-clay'
        : cx('tactile-card', surfaceVariantClass[props.variant] || surfaceVariantClass.outer);

    return () =>
      h(props.as, mergeProps(attrs, { class: variantClass }), renderSlot(slots));
  },
});

export const TactileFab = defineComponent({
  name: 'TactileFab',
  inheritAttrs: false,
  props: {
    size: { type: String, default: 'md' },
    variant: { type: String, default: 'default' },
  },
  setup(props, { attrs, slots }) {
    const normalizedVariant = props.variant === 'clay' ? 'clay' : 'default';

    return () =>
      h(
        'button',
        mergeProps(attrs, {
          class: cx(
            fabVariantClass[normalizedVariant],
            fabSizeClass[props.size]?.[normalizedVariant]
          ),
        }),
        renderSlot(slots)
      );
  },
});

export const TactileSegment = defineComponent({
  name: 'TactileSegment',
  inheritAttrs: false,
  props: {
    active: { type: Boolean, default: false },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        'button',
        mergeProps(attrs, {
          class: cx('tactile-segment', props.active && 'tactile-active'),
          'aria-pressed': attrs['aria-pressed'] ?? props.active,
        }),
        renderSlot(slots)
      );
  },
});

export const TactileSegmented = defineComponent({
  name: 'TactileSegmented',
  inheritAttrs: false,
  props: {
    clay: { type: Boolean, default: false },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        'div',
        mergeProps(attrs, {
          class: props.clay ? 'tactile-segmented-clay' : 'tactile-segmented tactile-inner',
        }),
        renderSlot(slots)
      );
  },
});

export const TactileTabs = defineComponent({
  name: 'TactileTabs',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h('div', mergeProps(attrs, { class: 'tactile-tabs' }), renderSlot(slots));
  },
});

export const TactileTabList = defineComponent({
  name: 'TactileTabList',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () =>
      h(
        'div',
        mergeProps(attrs, {
          class: 'tactile-tab-list tactile-inner',
          role: attrs.role ?? 'tablist',
        }),
        renderSlot(slots)
      );
  },
});

export const TactileTab = defineComponent({
  name: 'TactileTab',
  inheritAttrs: false,
  props: {
    active: { type: Boolean, default: false },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        'button',
        mergeProps(attrs, {
          class: cx('tactile-tab', props.active && 'tactile-active'),
          role: attrs.role ?? 'tab',
          'aria-selected': attrs['aria-selected'] ?? props.active,
        }),
        renderSlot(slots)
      );
  },
});

export const TactileTabPanel = defineComponent({
  name: 'TactileTabPanel',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () =>
      h(
        'div',
        mergeProps(attrs, {
          class: 'tactile-tab-panel',
          role: attrs.role ?? 'tabpanel',
        }),
        renderSlot(slots)
      );
  },
});

export const TactileSlider = defineComponent({
  name: 'TactileSlider',
  inheritAttrs: false,
  props: {
    clay: { type: Boolean, default: false },
    defaultValue: { type: Number, default: undefined },
    disabled: { type: Boolean, default: false },
    max: { type: Number, default: 100 },
    min: { type: Number, default: 0 },
    modelValue: { type: Number, default: undefined },
    step: { type: Number, default: 1 },
    thumbClass: { type: String, default: '' },
    trackClass: { type: String, default: '' },
  },
  emits: ['update:modelValue', 'change', 'value-change'],
  setup(props, { attrs, emit }) {
    const currentValue = ref(clampNumber(props.modelValue ?? props.defaultValue ?? props.min, props.min, props.max));

    watch(
      () => props.modelValue,
      (value) => {
        if (value != null) {
          currentValue.value = clampNumber(value, props.min, props.max);
        }
      }
    );

    watch(
      () => [props.min, props.max],
      () => {
        currentValue.value = clampNumber(currentValue.value, props.min, props.max);
      }
    );

    function handleChange(event) {
      const nextValue = clampNumber(Number(event.target.value), props.min, props.max);

      if (props.modelValue == null) {
        currentValue.value = nextValue;
      }

      emit('update:modelValue', nextValue);
      emit('value-change', nextValue);
      emit('change', event);
    }

    return () => {
      const resolvedValue = clampNumber(
        props.modelValue != null ? props.modelValue : currentValue.value,
        props.min,
        props.max
      );
      const percentage = calculateRangePercentage(resolvedValue, props.min, props.max);
      const thumbSize = props.clay ? 32 : 28;

      return h(
        'div',
        mergeProps(attrs, {
          class: props.clay ? 'tactile-slider-clay' : 'tactile-slider',
          'aria-disabled': props.disabled || undefined,
        }),
        [
          h('div', {
            class: cx(
              props.clay ? 'tactile-slider-clay-track' : 'tactile-slider-track tactile-inner',
              props.trackClass
            ),
            'aria-hidden': true,
          }),
          h('div', {
            class: cx(props.clay ? 'tactile-slider-clay-thumb' : 'tactile-slider-thumb', props.thumbClass),
            style: {
              left: `calc(${percentage}% - ${thumbSize / 2}px)`,
              marginTop: `${thumbSize / -2}px`,
            },
            'aria-hidden': true,
          }),
          h('input', {
            type: 'range',
            min: props.min,
            max: props.max,
            step: props.step,
            disabled: props.disabled,
            value: resolvedValue,
            onInput: handleChange,
            onChange: handleChange,
            style: {
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              margin: 0,
              opacity: 0,
              cursor: props.disabled ? 'not-allowed' : 'pointer',
            },
          }),
        ]
      );
    };
  },
});

export const TactileProgress = defineComponent({
  name: 'TactileProgress',
  inheritAttrs: false,
  props: {
    clay: { type: Boolean, default: false },
    fillClass: { type: String, default: '' },
    max: { type: Number, default: 100 },
    value: { type: Number, default: 0 },
  },
  setup(props, { attrs }) {
    return () => {
      const percentage = clampPercentage(props.value, props.max);

      return h(
        'div',
        mergeProps(attrs, {
          class: props.clay ? 'tactile-track-clay' : 'tactile-track tactile-inner',
        }),
        [
          h('div', {
            class: cx(props.clay ? 'tactile-track-clay-fill' : 'tactile-track-fill', props.fillClass),
            style: { width: `${percentage}%` },
          }),
        ]
      );
    };
  },
});

export const TactileGauge = defineComponent({
  name: 'TactileGauge',
  inheritAttrs: false,
  props: {
    clay: { type: Boolean, default: false },
    label: { type: [String, Number, Boolean, Object, Array], default: null },
    max: { type: Number, default: 100 },
    showValue: { type: Boolean, default: true },
    value: { type: Number, default: 0 },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const percentage = clampPercentage(props.value, props.max);
      const gaugeClass = props.clay ? 'tactile-gauge-clay' : 'tactile-gauge tactile-inner';
      const centerClass = props.clay ? 'tactile-gauge-clay-center' : 'tactile-gauge-center';
      const labelContent = renderSlot(slots, 'label', props.label);

      return h(
        'div',
        mergeProps(attrs, {
          class: gaugeClass,
          style: { '--progress': `${percentage}%` },
        }),
        [
          h('div', { class: centerClass }, [
            props.showValue ? h('span', { class: 'tactile-gauge-value' }, `${Math.round(percentage)}%`) : null,
            labelContent ? h('span', { class: 'tactile-gauge-label' }, labelContent) : null,
          ]),
        ]
      );
    };
  },
});

export const TactileKeypad = defineComponent({
  name: 'TactileKeypad',
  inheritAttrs: false,
  props: {
    clay: { type: Boolean, default: false },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        'div',
        mergeProps(attrs, {
          class: props.clay ? 'tactile-keypad-clay' : 'tactile-keypad tactile-inner',
        }),
        renderSlot(slots)
      );
  },
});

export const TactileKey = defineComponent({
  name: 'TactileKey',
  inheritAttrs: false,
  props: {
    action: { type: Boolean, default: false },
    clay: { type: Boolean, default: false },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        'button',
        mergeProps(attrs, {
          class: cx(
            props.clay ? 'tactile-key-clay' : 'tactile-key',
            props.action && (props.clay ? 'tactile-key-clay-action' : 'tactile-key-action')
          ),
        }),
        renderSlot(slots)
      );
  },
});

export const TactileKeyboard = defineComponent({
  name: 'TactileKeyboard',
  inheritAttrs: false,
  props: {
    clay: { type: Boolean, default: false },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        'div',
        mergeProps(attrs, {
          class: props.clay ? 'tactile-keyboard-clay' : 'tactile-keyboard tactile-inner',
        }),
        renderSlot(slots)
      );
  },
});

export const TactileKeyboardRow = defineComponent({
  name: 'TactileKeyboardRow',
  inheritAttrs: false,
  props: {
    clay: { type: Boolean, default: false },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        'div',
        mergeProps(attrs, {
          class: props.clay ? 'tactile-keyboard-clay-row' : 'tactile-keyboard-row',
        }),
        renderSlot(slots)
      );
  },
});

export const TactileKeyboardKey = defineComponent({
  name: 'TactileKeyboardKey',
  inheritAttrs: false,
  props: {
    clay: { type: Boolean, default: false },
    primary: { type: Boolean, default: false },
    width: { type: String, default: 'normal' },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const widthClasses = props.clay ? keyboardClayKeyWidthClass : keyboardKeyWidthClass;

      return h(
        'button',
        mergeProps(attrs, {
          class: cx(
            props.clay ? 'tactile-keyboard-clay-key' : 'tactile-keyboard-key',
            widthClasses[props.width] || '',
            props.primary && (props.clay ? 'tactile-keyboard-clay-key-primary' : 'tactile-keyboard-key-primary')
          ),
        }),
        renderSlot(slots)
      );
    };
  },
});

export const TactileBadge = defineComponent({
  name: 'TactileBadge',
  inheritAttrs: false,
  props: {
    as: { type: elementType, default: 'span' },
    clay: { type: Boolean, default: false },
    tone: { type: String, default: 'default' },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        props.as,
        mergeProps(attrs, {
          class: cx(props.clay ? 'tactile-badge-clay' : 'tactile-badge', badgeToneClass[props.tone] || ''),
        }),
        renderSlot(slots)
      );
  },
});

export const TactileAvatar = defineComponent({
  name: 'TactileAvatar',
  inheritAttrs: false,
  props: {
    alt: { type: String, default: '' },
    as: { type: elementType, default: 'div' },
    clay: { type: Boolean, default: false },
    size: { type: String, default: 'md' },
    src: { type: String, default: '' },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        props.as,
        mergeProps(attrs, {
          class: cx('tactile-avatar', props.clay && 'tactile-avatar-clay', avatarSizeClass[props.size]),
        }),
        props.src ? h('img', { src: props.src, alt: props.alt }) : renderSlot(slots)
      );
  },
});

export const TactileDivider = defineComponent({
  name: 'TactileDivider',
  inheritAttrs: false,
  props: {
    vertical: { type: Boolean, default: false },
  },
  setup(props, { attrs }) {
    return () =>
      h('hr', mergeProps(attrs, {
        class: props.vertical ? 'tactile-divider-vertical' : 'tactile-divider',
        'aria-orientation': props.vertical ? 'vertical' : 'horizontal',
      }));
  },
});

export const TactileCheckbox = defineComponent({
  name: 'TactileCheckbox',
  inheritAttrs: false,
  props: {
    clay: { type: Boolean, default: false },
    modelValue: { type: Boolean, default: undefined },
  },
  emits: ['update:modelValue', 'change'],
  setup(props, { attrs, emit }) {
    function handleChange(event) {
      emit('update:modelValue', event.target.checked);
      emit('change', event.target.checked);
    }

    return () =>
      h('input', mergeProps(attrs, {
        type: 'checkbox',
        checked: props.modelValue ?? attrs.checked,
        class: cx('tactile-checkbox', props.clay && 'tactile-checkbox-clay'),
        onChange: handleChange,
      }));
  },
});

export const TactileSwitch = defineComponent({
  name: 'TactileSwitch',
  inheritAttrs: false,
  props: {
    clay: { type: Boolean, default: false },
    modelValue: { type: Boolean, default: undefined },
  },
  emits: ['update:modelValue', 'change'],
  setup(props, { attrs, emit }) {
    function handleChange(event) {
      emit('update:modelValue', event.target.checked);
      emit('change', event.target.checked);
    }

    return () =>
      h('input', mergeProps(attrs, {
        type: 'checkbox',
        role: attrs.role ?? 'switch',
        checked: props.modelValue ?? attrs.checked,
        class: cx('tactile-switch', props.clay && 'tactile-switch-clay'),
        onChange: handleChange,
      }));
  },
});

export const TactileTone = defineComponent({
  name: 'TactileTone',
  inheritAttrs: false,
  props: {
    as: { type: elementType, default: 'span' },
    tone: { type: String, default: 'primary' },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(props.as, mergeProps(attrs, {
        class: utilityToneClass[props.tone] || utilityToneClass.primary,
      }), renderSlot(slots));
  },
});

export const TactileModalOverlay = defineComponent({
  name: 'TactileModalOverlay',
  inheritAttrs: false,
  props: {
    open: { type: Boolean, default: false },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h('div', mergeProps(attrs, {
        class: cx('tactile-modal-overlay', props.open && 'tactile-open'),
        'aria-hidden': !props.open,
      }), renderSlot(slots));
  },
});

export const TactileModalHeader = defineComponent({
  name: 'TactileModalHeader',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h('div', mergeProps(attrs, { class: 'tactile-modal-header' }), renderSlot(slots));
  },
});

export const TactileModalTitle = defineComponent({
  name: 'TactileModalTitle',
  inheritAttrs: false,
  props: {
    as: { type: elementType, default: 'h3' },
  },
  setup(props, { attrs, slots }) {
    return () => h(props.as, mergeProps(attrs, { class: 'tactile-modal-title' }), renderSlot(slots));
  },
});

export const TactileModalClose = defineComponent({
  name: 'TactileModalClose',
  inheritAttrs: false,
  props: {
    type: { type: String, default: 'button' },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h('button', mergeProps(attrs, {
        type: props.type,
        class: 'tactile-modal-close',
      }), renderSlot(slots));
  },
});

export const TactileModalBody = defineComponent({
  name: 'TactileModalBody',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h('div', mergeProps(attrs, { class: 'tactile-modal-body' }), renderSlot(slots));
  },
});

export const TactileModalFooter = defineComponent({
  name: 'TactileModalFooter',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h('div', mergeProps(attrs, { class: 'tactile-modal-footer' }), renderSlot(slots));
  },
});

export const TactileModal = defineComponent({
  name: 'TactileModal',
  inheritAttrs: false,
  props: {
    closeLabel: { type: String, default: 'Close' },
    footer: { type: [String, Number, Boolean, Object, Array], default: null },
    hideClose: { type: Boolean, default: false },
    open: { type: Boolean, default: false },
    overlayClass: { type: String, default: '' },
    title: { type: [String, Number, Boolean, Object, Array], default: null },
  },
  emits: ['close'],
  setup(props, { attrs, emit, slots }) {
    function handleClose(event) {
      emit('close', event);
    }

    return () => {
      const bodyContent = renderSlot(slots);

      return h(
        TactileModalOverlay,
        { class: props.overlayClass, open: props.open },
        {
          default: () => [
            h(
              'div',
              mergeProps(attrs, {
                class: 'tactile-modal',
                role: 'dialog',
                'aria-modal': true,
              }),
              [
                (props.title != null || !props.hideClose) &&
                  h(TactileModalHeader, null, {
                    default: () => [
                      props.title != null || slots.title ? h(TactileModalTitle, null, {
                        default: () => renderSlot(slots, 'title', props.title),
                      }) : h('span'),
                      !props.hideClose
                        ? h(TactileModalClose, { 'aria-label': props.closeLabel, onClick: handleClose }, {
                            default: () => '×',
                          })
                        : null,
                    ],
                  }),
                bodyContent ? h(TactileModalBody, null, { default: () => bodyContent }) : null,
                props.footer != null || slots.footer
                  ? h(TactileModalFooter, null, {
                      default: () => renderSlot(slots, 'footer', props.footer),
                    })
                  : null,
              ]
            ),
          ],
        }
      );
    };
  },
});

export const TactileToastIcon = defineComponent({
  name: 'TactileToastIcon',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () =>
      h('div', mergeProps(attrs, {
        class: 'tactile-toast-icon',
        'aria-hidden': attrs['aria-hidden'] ?? true,
      }), renderSlot(slots));
  },
});

export const TactileToastContent = defineComponent({
  name: 'TactileToastContent',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h('div', mergeProps(attrs, { class: 'tactile-toast-content' }), renderSlot(slots));
  },
});

export const TactileToastTitle = defineComponent({
  name: 'TactileToastTitle',
  inheritAttrs: false,
  props: {
    as: { type: elementType, default: 'div' },
  },
  setup(props, { attrs, slots }) {
    return () => h(props.as, mergeProps(attrs, { class: 'tactile-toast-title' }), renderSlot(slots));
  },
});

export const TactileToastMessage = defineComponent({
  name: 'TactileToastMessage',
  inheritAttrs: false,
  props: {
    as: { type: elementType, default: 'div' },
  },
  setup(props, { attrs, slots }) {
    return () => h(props.as, mergeProps(attrs, { class: 'tactile-toast-message' }), renderSlot(slots));
  },
});

export const TactileToastClose = defineComponent({
  name: 'TactileToastClose',
  inheritAttrs: false,
  props: {
    type: { type: String, default: 'button' },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h('button', mergeProps(attrs, {
        type: props.type,
        class: 'tactile-toast-close',
      }), renderSlot(slots));
  },
});

export const TactileToast = defineComponent({
  name: 'TactileToast',
  inheritAttrs: false,
  props: {
    hideClose: { type: Boolean, default: false },
    icon: { type: [String, Number, Boolean, Object, Array], default: null },
    message: { type: [String, Number, Boolean, Object, Array], default: null },
    show: { type: Boolean, default: true },
    title: { type: [String, Number, Boolean, Object, Array], default: null },
    tone: { type: String, default: 'info' },
  },
  emits: ['close'],
  setup(props, { attrs, emit, slots }) {
    function handleClose(event) {
      emit('close', event);
    }

    return () =>
      h(
        'div',
        mergeProps(attrs, {
          class: cx('tactile-toast', toastToneClass[props.tone] || toastToneClass.info, props.show && 'tactile-toast-show'),
          role: 'status',
        }),
        [
          h(TactileToastIcon, null, {
            default: () => renderSlot(slots, 'icon', props.icon ?? '•'),
          }),
          h(TactileToastContent, null, {
            default: () => [
              props.title != null || slots.title
                ? h(TactileToastTitle, null, { default: () => renderSlot(slots, 'title', props.title) })
                : null,
              props.message != null || slots.message
                ? h(TactileToastMessage, null, { default: () => renderSlot(slots, 'message', props.message) })
                : null,
            ],
          }),
          !props.hideClose
            ? h(TactileToastClose, { 'aria-label': 'Close notification', onClick: handleClose }, {
                default: () => '×',
              })
            : null,
        ]
      );
  },
});

export const TactileToastContainer = defineComponent({
  name: 'TactileToastContainer',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h('div', mergeProps(attrs, { class: 'tactile-toast-container' }), renderSlot(slots));
  },
});

export const TactileAccordion = defineComponent({
  name: 'TactileAccordion',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h('div', mergeProps(attrs, { class: 'tactile-accordion' }), renderSlot(slots));
  },
});

export const TactileAccordionItem = defineComponent({
  name: 'TactileAccordionItem',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h('details', mergeProps(attrs, { class: 'tactile-accordion-item' }), renderSlot(slots));
  },
});

export const TactileAccordionTrigger = defineComponent({
  name: 'TactileAccordionTrigger',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h('summary', mergeProps(attrs, { class: 'tactile-accordion-trigger' }), renderSlot(slots));
  },
});

export const TactileAccordionContent = defineComponent({
  name: 'TactileAccordionContent',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h('div', mergeProps(attrs, { class: 'tactile-accordion-content' }), renderSlot(slots));
  },
});

export const TactileAIChat = defineComponent({
  name: 'TactileAIChat',
  inheritAttrs: false,
  props: {
    as: { type: elementType, default: 'div' },
  },
  setup(props, { attrs, slots }) {
    return () => h(props.as, mergeProps(attrs, { class: 'tactile-ai-chat' }), renderSlot(slots));
  },
});

export const TactileAIMessage = defineComponent({
  name: 'TactileAIMessage',
  inheritAttrs: false,
  props: {
    as: { type: elementType, default: 'article' },
    role: { type: String, default: 'assistant' },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(props.as, mergeProps(attrs, {
        class: cx('tactile-ai-message', aiMessageRoleClass[props.role] || aiMessageRoleClass.assistant),
        'data-role': props.role,
      }), renderSlot(slots));
  },
});

export const TactileAIMessageMeta = defineComponent({
  name: 'TactileAIMessageMeta',
  inheritAttrs: false,
  props: {
    as: { type: elementType, default: 'div' },
  },
  setup(props, { attrs, slots }) {
    return () => h(props.as, mergeProps(attrs, { class: 'tactile-ai-message-meta' }), renderSlot(slots));
  },
});

export const TactileAIMessageBody = defineComponent({
  name: 'TactileAIMessageBody',
  inheritAttrs: false,
  props: {
    as: { type: elementType, default: 'div' },
  },
  setup(props, { attrs, slots }) {
    return () => h(props.as, mergeProps(attrs, { class: 'tactile-ai-message-body' }), renderSlot(slots));
  },
});

export const TactileAIToolbar = defineComponent({
  name: 'TactileAIToolbar',
  inheritAttrs: false,
  props: {
    as: { type: elementType, default: 'div' },
  },
  setup(props, { attrs, slots }) {
    return () => h(props.as, mergeProps(attrs, { class: 'tactile-ai-toolbar' }), renderSlot(slots));
  },
});

export const TactileAIAction = defineComponent({
  name: 'TactileAIAction',
  inheritAttrs: false,
  props: {
    type: { type: String, default: 'button' },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h('button', mergeProps(attrs, {
        class: 'tactile-ai-action',
        type: props.type,
      }), renderSlot(slots));
  },
});

export const TactileAISuggestions = defineComponent({
  name: 'TactileAISuggestions',
  inheritAttrs: false,
  props: {
    as: { type: elementType, default: 'div' },
  },
  setup(props, { attrs, slots }) {
    return () => h(props.as, mergeProps(attrs, { class: 'tactile-ai-suggestions' }), renderSlot(slots));
  },
});

export const TactileAISuggestion = defineComponent({
  name: 'TactileAISuggestion',
  inheritAttrs: false,
  props: {
    type: { type: String, default: 'button' },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h('button', mergeProps(attrs, {
        class: 'tactile-ai-suggestion',
        type: props.type,
      }), renderSlot(slots));
  },
});

export const TactileAIComposer = defineComponent({
  name: 'TactileAIComposer',
  inheritAttrs: false,
  props: {
    as: { type: elementType, default: 'div' },
  },
  setup(props, { attrs, slots }) {
    return () => h(props.as, mergeProps(attrs, { class: 'tactile-ai-composer' }), renderSlot(slots));
  },
});

export const TactileAIComposerRow = defineComponent({
  name: 'TactileAIComposerRow',
  inheritAttrs: false,
  props: {
    as: { type: elementType, default: 'div' },
  },
  setup(props, { attrs, slots }) {
    return () => h(props.as, mergeProps(attrs, { class: 'tactile-ai-composer-row' }), renderSlot(slots));
  },
});

export const TactileAIPrompt = defineComponent({
  name: 'TactileAIPrompt',
  inheritAttrs: false,
  props: {
    modelValue: { type: String, default: undefined },
  },
  emits: ['update:modelValue', 'input', 'change'],
  setup(props, { attrs, emit }) {
    function handleInput(event) {
      emit('update:modelValue', event.target.value);
      emit('input', event.target.value);
    }

    return () =>
      h('textarea', mergeProps(attrs, {
        class: 'tactile-ai-prompt',
        value: props.modelValue ?? attrs.value,
        onInput: handleInput,
        onChange: (event) => emit('change', event),
      }));
  },
});

export const TactileAIStatus = defineComponent({
  name: 'TactileAIStatus',
  inheritAttrs: false,
  props: {
    as: { type: elementType, default: 'div' },
    state: { type: String, default: 'idle' },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(props.as, mergeProps(attrs, {
        class: cx('tactile-ai-status', aiStatusStateClass[props.state] || ''),
        'data-state': props.state,
      }), renderSlot(slots));
  },
});

export const TactileDateInput = defineComponent({
  name: 'TactileDateInput',
  inheritAttrs: false,
  props: {
    modelValue: { type: String, default: undefined },
    type: { type: String, default: 'date' },
  },
  emits: ['update:modelValue', 'input', 'change'],
  setup(props, { attrs, emit }) {
    function handleInput(event) {
      emit('update:modelValue', event.target.value);
      emit('input', event.target.value);
    }

    return () =>
      h('input', mergeProps(attrs, {
        class: 'tactile-date-input',
        type: props.type,
        value: props.modelValue ?? attrs.value,
        onInput: handleInput,
        onChange: (event) => emit('change', event),
      }));
  },
});

export const TactileTimeInput = defineComponent({
  name: 'TactileTimeInput',
  inheritAttrs: false,
  props: {
    modelValue: { type: String, default: undefined },
    type: { type: String, default: 'time' },
  },
  emits: ['update:modelValue', 'input', 'change'],
  setup(props, { attrs, emit }) {
    function handleInput(event) {
      emit('update:modelValue', event.target.value);
      emit('input', event.target.value);
    }

    return () =>
      h('input', mergeProps(attrs, {
        class: 'tactile-time-input',
        type: props.type,
        value: props.modelValue ?? attrs.value,
        onInput: handleInput,
        onChange: (event) => emit('change', event),
      }));
  },
});

export const TactileCalendar = defineComponent({
  name: 'TactileCalendar',
  inheritAttrs: false,
  props: {
    as: { type: elementType, default: 'div' },
  },
  setup(props, { attrs, slots }) {
    return () => h(props.as, mergeProps(attrs, { class: 'tactile-calendar' }), renderSlot(slots));
  },
});

export const TactileCalendarHeader = defineComponent({
  name: 'TactileCalendarHeader',
  inheritAttrs: false,
  props: {
    as: { type: elementType, default: 'div' },
  },
  setup(props, { attrs, slots }) {
    return () => h(props.as, mergeProps(attrs, { class: 'tactile-calendar-header' }), renderSlot(slots));
  },
});

export const TactileCalendarTitle = defineComponent({
  name: 'TactileCalendarTitle',
  inheritAttrs: false,
  props: {
    as: { type: elementType, default: 'div' },
  },
  setup(props, { attrs, slots }) {
    return () => h(props.as, mergeProps(attrs, { class: 'tactile-calendar-title' }), renderSlot(slots));
  },
});

export const TactileCalendarNav = defineComponent({
  name: 'TactileCalendarNav',
  inheritAttrs: false,
  props: {
    type: { type: String, default: 'button' },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h('button', mergeProps(attrs, {
        class: 'tactile-calendar-nav',
        type: props.type,
      }), renderSlot(slots));
  },
});

export const TactileCalendarWeekdays = defineComponent({
  name: 'TactileCalendarWeekdays',
  inheritAttrs: false,
  props: {
    as: { type: elementType, default: 'div' },
  },
  setup(props, { attrs, slots }) {
    return () => h(props.as, mergeProps(attrs, { class: 'tactile-calendar-weekdays' }), renderSlot(slots));
  },
});

export const TactileCalendarWeekday = defineComponent({
  name: 'TactileCalendarWeekday',
  inheritAttrs: false,
  props: {
    as: { type: elementType, default: 'div' },
  },
  setup(props, { attrs, slots }) {
    return () => h(props.as, mergeProps(attrs, { class: 'tactile-calendar-weekday' }), renderSlot(slots));
  },
});

export const TactileCalendarGrid = defineComponent({
  name: 'TactileCalendarGrid',
  inheritAttrs: false,
  props: {
    as: { type: elementType, default: 'div' },
  },
  setup(props, { attrs, slots }) {
    return () => h(props.as, mergeProps(attrs, { class: 'tactile-calendar-grid' }), renderSlot(slots));
  },
});

export const TactileCalendarDay = defineComponent({
  name: 'TactileCalendarDay',
  inheritAttrs: false,
  props: {
    muted: { type: Boolean, default: false },
    selected: { type: Boolean, default: false },
    today: { type: Boolean, default: false },
    type: { type: String, default: 'button' },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h('button', mergeProps(attrs, {
        class: cx(
          'tactile-calendar-day',
          props.muted && 'tactile-calendar-day-muted',
          props.today && 'tactile-calendar-day-today',
          props.selected && 'tactile-calendar-day-selected'
        ),
        type: props.type,
        'aria-pressed': attrs['aria-pressed'] ?? props.selected,
      }), renderSlot(slots));
  },
});

export const TactileTimeCard = defineComponent({
  name: 'TactileTimeCard',
  inheritAttrs: false,
  props: {
    as: { type: elementType, default: 'div' },
  },
  setup(props, { attrs, slots }) {
    return () => h(props.as, mergeProps(attrs, { class: 'tactile-time-card' }), renderSlot(slots));
  },
});

export const TactileTimeLabel = defineComponent({
  name: 'TactileTimeLabel',
  inheritAttrs: false,
  props: {
    as: { type: elementType, default: 'div' },
  },
  setup(props, { attrs, slots }) {
    return () => h(props.as, mergeProps(attrs, { class: 'tactile-time-label' }), renderSlot(slots));
  },
});

export const TactileTimeValue = defineComponent({
  name: 'TactileTimeValue',
  inheritAttrs: false,
  props: {
    as: { type: elementType, default: 'div' },
  },
  setup(props, { attrs, slots }) {
    return () => h(props.as, mergeProps(attrs, { class: 'tactile-time-value' }), renderSlot(slots));
  },
});

export const TactileClock = defineComponent({
  name: 'TactileClock',
  inheritAttrs: false,
  props: {
    faceClass: { type: String, default: '' },
    hour: { type: Number, default: 10 },
    minute: { type: Number, default: 10 },
    second: { type: Number, default: 30 },
    size: { type: [Number, String], default: 280 },
  },
  setup(props, { attrs }) {
    return () => {
      const angles = getClockAngles(props.hour, props.minute, props.second);
      const marks = Array.from({ length: 12 }, (_, index) =>
        h('span', {
          class: cx('tactile-clock-mark', index % 3 === 0 && 'tactile-clock-mark-major'),
          style: { '--tactile-clock-mark-angle': `${index * 30}deg` },
          'aria-hidden': true,
        })
      );

      return h('div', mergeProps(attrs, {
        class: 'tactile-clock',
        style: {
          '--tactile-clock-size': typeof props.size === 'number' ? `${props.size}px` : props.size,
          '--tactile-clock-hour-angle': `${angles.hour}deg`,
          '--tactile-clock-minute-angle': `${angles.minute}deg`,
          '--tactile-clock-second-angle': `${angles.second}deg`,
        },
      }), [
        h('div', { class: cx('tactile-clock-face', props.faceClass) }, [
          ...marks,
          h('span', { class: 'tactile-clock-hand tactile-clock-hour', 'aria-hidden': true }),
          h('span', { class: 'tactile-clock-hand tactile-clock-minute', 'aria-hidden': true }),
          h('span', { class: 'tactile-clock-hand tactile-clock-second', 'aria-hidden': true }),
          h('span', { class: 'tactile-clock-center', 'aria-hidden': true }),
        ]),
      ]);
    };
  },
});

export const TactileIcon = defineComponent({
  name: 'TactileIcon',
  inheritAttrs: false,
  props: {
    as: { type: elementType, default: 'span' },
    variant: { type: String, default: 'raised' },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(props.as, mergeProps(attrs, {
        class: iconVariantClass[props.variant] || iconVariantClass.raised,
      }), renderSlot(slots));
  },
});

export const TactileText = defineComponent({
  name: 'TactileText',
  inheritAttrs: false,
  props: {
    as: { type: elementType, default: 'span' },
    sculpted: { type: Boolean, default: true },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(props.as, mergeProps(attrs, {
        class: cx(props.sculpted && 'tactile-text-sculpted'),
      }), renderSlot(slots));
  },
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
  TactileAIChat,
  TactileAIMessage,
  TactileAIMessageMeta,
  TactileAIMessageBody,
  TactileAIToolbar,
  TactileAIAction,
  TactileAISuggestions,
  TactileAISuggestion,
  TactileAIComposer,
  TactileAIComposerRow,
  TactileAIPrompt,
  TactileAIStatus,
  TactileDateInput,
  TactileTimeInput,
  TactileCalendar,
  TactileCalendarHeader,
  TactileCalendarTitle,
  TactileCalendarNav,
  TactileCalendarWeekdays,
  TactileCalendarWeekday,
  TactileCalendarGrid,
  TactileCalendarDay,
  TactileTimeCard,
  TactileTimeLabel,
  TactileTimeValue,
  TactileClock,
  TactileIcon,
  TactileText,
};
