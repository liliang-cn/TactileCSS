import * as React from 'react';

type ThemeName = 'classic' | 'mono' | 'iron' | 'paper' | 'terminal' | 'warm';
type SurfaceVariant = 'outer' | 'inner' | 'clay';
type Size = 'sm' | 'md' | 'lg' | 'xl';
type ButtonVariant = 'default' | 'primary' | 'clay' | 'clayPrimary';
type FabVariant = 'default' | 'clay';
type FabSize = 'sm' | 'md' | 'lg';
type KeyWidth = 'normal' | 'wide' | 'xwide' | 'space';
type BadgeTone = 'default' | 'primary' | 'success' | 'danger' | 'warning' | 'info';
type ToastTone = 'success' | 'danger' | 'warning' | 'info';
type UtilityTone = 'primary' | 'success' | 'danger' | 'warning' | 'info';
type IconVariant = 'raised' | 'sculpted';
type AIMessageRole = 'assistant' | 'user' | 'system';
type AIStatusState = 'idle' | 'streaming' | 'ready' | 'error';

type SliderInputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'defaultValue' | 'max' | 'min' | 'onChange' | 'step' | 'type' | 'value'
>;

type PolymorphicProps<T extends React.ElementType, P> = P &
  Omit<React.ComponentPropsWithoutRef<T>, keyof P | 'as'> & {
    as?: T;
  };

export declare const TactileTheme: <T extends React.ElementType = 'div'>(
  props: PolymorphicProps<T, { theme?: ThemeName; className?: string }> & {
    ref?: React.Ref<Element>;
  }
) => React.ReactElement | null;

export declare const TactileSurface: <T extends React.ElementType = 'div'>(
  props: PolymorphicProps<T, { variant?: SurfaceVariant; size?: Size; className?: string }> & {
    ref?: React.Ref<Element>;
  }
) => React.ReactElement | null;

export declare const TactileButton: React.ForwardRefExoticComponent<
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    active?: boolean;
    className?: string;
    size?: Size;
    variant?: ButtonVariant;
  } & React.RefAttributes<HTMLButtonElement>
>;

export declare const TactileInput: React.ForwardRefExoticComponent<
  React.InputHTMLAttributes<HTMLInputElement> & {
    clay?: boolean;
    className?: string;
  } & React.RefAttributes<HTMLInputElement>
>;

export declare const TactileField: <T extends React.ElementType = 'div'>(
  props: PolymorphicProps<
    T,
    {
      children?: React.ReactNode;
      className?: string;
      hint?: React.ReactNode;
      hintClassName?: string;
      label?: React.ReactNode;
      labelClassName?: string;
    }
  > & {
    ref?: React.Ref<Element>;
  }
) => React.ReactElement | null;

export declare const TactileFieldLabel: <T extends React.ElementType = 'label'>(
  props: PolymorphicProps<T, { className?: string }> & {
    ref?: React.Ref<Element>;
  }
) => React.ReactElement | null;

export declare const TactileFieldHint: <T extends React.ElementType = 'div'>(
  props: PolymorphicProps<T, { className?: string }> & {
    ref?: React.Ref<Element>;
  }
) => React.ReactElement | null;

export declare const TactileSelect: React.ForwardRefExoticComponent<
  React.SelectHTMLAttributes<HTMLSelectElement> & {
    clay?: boolean;
    className?: string;
  } & React.RefAttributes<HTMLSelectElement>
>;

export declare const TactileTextarea: React.ForwardRefExoticComponent<
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    clay?: boolean;
    className?: string;
  } & React.RefAttributes<HTMLTextAreaElement>
>;

export declare const TactileCard: <T extends React.ElementType = 'div'>(
  props: PolymorphicProps<T, { variant?: SurfaceVariant; className?: string }> & {
    ref?: React.Ref<Element>;
  }
) => React.ReactElement | null;

export declare const TactileFab: React.ForwardRefExoticComponent<
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    className?: string;
    size?: FabSize;
    variant?: FabVariant;
  } & React.RefAttributes<HTMLButtonElement>
>;

export declare const TactileSegment: React.ForwardRefExoticComponent<
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    active?: boolean;
    className?: string;
  } & React.RefAttributes<HTMLButtonElement>
>;

export declare const TactileSegmented: React.ForwardRefExoticComponent<
  React.HTMLAttributes<HTMLDivElement> & {
    clay?: boolean;
    className?: string;
  } & React.RefAttributes<HTMLDivElement>
>;

export declare const TactileTabs: React.ForwardRefExoticComponent<
  React.HTMLAttributes<HTMLDivElement> & {
    className?: string;
  } & React.RefAttributes<HTMLDivElement>
>;

export declare const TactileTabList: React.ForwardRefExoticComponent<
  React.HTMLAttributes<HTMLDivElement> & {
    className?: string;
  } & React.RefAttributes<HTMLDivElement>
>;

export declare const TactileTab: React.ForwardRefExoticComponent<
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    active?: boolean;
    className?: string;
  } & React.RefAttributes<HTMLButtonElement>
>;

export declare const TactileTabPanel: React.ForwardRefExoticComponent<
  React.HTMLAttributes<HTMLDivElement> & {
    className?: string;
  } & React.RefAttributes<HTMLDivElement>
>;

export declare const TactileSlider: React.ForwardRefExoticComponent<
  React.HTMLAttributes<HTMLDivElement> & {
    clay?: boolean;
    className?: string;
    defaultValue?: number;
    disabled?: boolean;
    inputProps?: SliderInputProps;
    max?: number;
    min?: number;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    onValueChange?: (value: number) => void;
    step?: number;
    thumbClassName?: string;
    trackClassName?: string;
    value?: number;
  } & React.RefAttributes<HTMLDivElement>
>;

export declare const TactileProgress: React.ForwardRefExoticComponent<
  React.HTMLAttributes<HTMLDivElement> & {
    clay?: boolean;
    className?: string;
    fillClassName?: string;
    max?: number;
    value?: number;
  } & React.RefAttributes<HTMLDivElement>
>;

export declare const TactileGauge: React.ForwardRefExoticComponent<
  React.HTMLAttributes<HTMLDivElement> & {
    clay?: boolean;
    className?: string;
    label?: React.ReactNode;
    max?: number;
    showValue?: boolean;
    value?: number;
  } & React.RefAttributes<HTMLDivElement>
>;

export declare const TactileKeypad: React.ForwardRefExoticComponent<
  React.HTMLAttributes<HTMLDivElement> & {
    clay?: boolean;
    className?: string;
  } & React.RefAttributes<HTMLDivElement>
>;

export declare const TactileKey: React.ForwardRefExoticComponent<
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    action?: boolean;
    clay?: boolean;
    className?: string;
  } & React.RefAttributes<HTMLButtonElement>
>;

export declare const TactileKeyboard: React.ForwardRefExoticComponent<
  React.HTMLAttributes<HTMLDivElement> & {
    clay?: boolean;
    className?: string;
  } & React.RefAttributes<HTMLDivElement>
>;

export declare const TactileKeyboardRow: React.ForwardRefExoticComponent<
  React.HTMLAttributes<HTMLDivElement> & {
    clay?: boolean;
    className?: string;
  } & React.RefAttributes<HTMLDivElement>
>;

export declare const TactileKeyboardKey: React.ForwardRefExoticComponent<
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    clay?: boolean;
    className?: string;
    primary?: boolean;
    width?: KeyWidth;
  } & React.RefAttributes<HTMLButtonElement>
>;

export declare const TactileBadge: <T extends React.ElementType = 'span'>(
  props: PolymorphicProps<T, { clay?: boolean; className?: string; tone?: BadgeTone }> & {
    ref?: React.Ref<Element>;
  }
) => React.ReactElement | null;

export declare const TactileAvatar: <T extends React.ElementType = 'div'>(
  props: PolymorphicProps<
    T,
    {
      alt?: string;
      children?: React.ReactNode;
      clay?: boolean;
      className?: string;
      size?: Size;
      src?: string;
    }
  > & {
    ref?: React.Ref<Element>;
  }
) => React.ReactElement | null;

export declare const TactileDivider: React.ForwardRefExoticComponent<
  React.HTMLAttributes<HTMLHRElement> & {
    className?: string;
    vertical?: boolean;
  } & React.RefAttributes<HTMLHRElement>
>;

export declare const TactileCheckbox: React.ForwardRefExoticComponent<
  React.InputHTMLAttributes<HTMLInputElement> & {
    clay?: boolean;
    className?: string;
  } & React.RefAttributes<HTMLInputElement>
>;

export declare const TactileSwitch: React.ForwardRefExoticComponent<
  React.InputHTMLAttributes<HTMLInputElement> & {
    clay?: boolean;
    className?: string;
  } & React.RefAttributes<HTMLInputElement>
>;

export declare const TactileTone: <T extends React.ElementType = 'span'>(
  props: PolymorphicProps<T, { className?: string; tone?: UtilityTone }> & {
    ref?: React.Ref<Element>;
  }
) => React.ReactElement | null;

export declare const TactileModalOverlay: React.ForwardRefExoticComponent<
  React.HTMLAttributes<HTMLDivElement> & {
    className?: string;
    open?: boolean;
  } & React.RefAttributes<HTMLDivElement>
>;

export declare const TactileModalHeader: React.ForwardRefExoticComponent<
  React.HTMLAttributes<HTMLDivElement> & {
    className?: string;
  } & React.RefAttributes<HTMLDivElement>
>;

export declare const TactileModalTitle: <T extends React.ElementType = 'h3'>(
  props: PolymorphicProps<T, { className?: string }> & {
    ref?: React.Ref<Element>;
  }
) => React.ReactElement | null;

export declare const TactileModalClose: React.ForwardRefExoticComponent<
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    className?: string;
  } & React.RefAttributes<HTMLButtonElement>
>;

export declare const TactileModalBody: React.ForwardRefExoticComponent<
  React.HTMLAttributes<HTMLDivElement> & {
    className?: string;
  } & React.RefAttributes<HTMLDivElement>
>;

export declare const TactileModalFooter: React.ForwardRefExoticComponent<
  React.HTMLAttributes<HTMLDivElement> & {
    className?: string;
  } & React.RefAttributes<HTMLDivElement>
>;

export declare const TactileModal: React.ForwardRefExoticComponent<
  React.HTMLAttributes<HTMLDivElement> & {
    className?: string;
    closeLabel?: string;
    footer?: React.ReactNode;
    hideClose?: boolean;
    onClose?: React.MouseEventHandler<HTMLButtonElement>;
    open?: boolean;
    overlayClassName?: string;
    title?: React.ReactNode;
  } & React.RefAttributes<HTMLDivElement>
>;

export declare const TactileToast: React.ForwardRefExoticComponent<
  React.HTMLAttributes<HTMLDivElement> & {
    className?: string;
    hideClose?: boolean;
    icon?: React.ReactNode;
    message?: React.ReactNode;
    onClose?: React.MouseEventHandler<HTMLButtonElement>;
    show?: boolean;
    title?: React.ReactNode;
    tone?: ToastTone;
  } & React.RefAttributes<HTMLDivElement>
>;

export declare const TactileToastContainer: React.ForwardRefExoticComponent<
  React.HTMLAttributes<HTMLDivElement> & {
    className?: string;
  } & React.RefAttributes<HTMLDivElement>
>;

export declare const TactileToastIcon: React.ForwardRefExoticComponent<
  React.HTMLAttributes<HTMLDivElement> & {
    className?: string;
  } & React.RefAttributes<HTMLDivElement>
>;

export declare const TactileToastContent: React.ForwardRefExoticComponent<
  React.HTMLAttributes<HTMLDivElement> & {
    className?: string;
  } & React.RefAttributes<HTMLDivElement>
>;

export declare const TactileToastTitle: <T extends React.ElementType = 'div'>(
  props: PolymorphicProps<T, { className?: string }> & {
    ref?: React.Ref<Element>;
  }
) => React.ReactElement | null;

export declare const TactileToastMessage: <T extends React.ElementType = 'div'>(
  props: PolymorphicProps<T, { className?: string }> & {
    ref?: React.Ref<Element>;
  }
) => React.ReactElement | null;

export declare const TactileToastClose: React.ForwardRefExoticComponent<
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    className?: string;
  } & React.RefAttributes<HTMLButtonElement>
>;

export declare const TactileAccordion: React.ForwardRefExoticComponent<
  React.HTMLAttributes<HTMLDivElement> & {
    className?: string;
  } & React.RefAttributes<HTMLDivElement>
>;

export declare const TactileAccordionItem: React.ForwardRefExoticComponent<
  React.DetailsHTMLAttributes<HTMLDetailsElement> & {
    className?: string;
  } & React.RefAttributes<HTMLDetailsElement>
>;

export declare const TactileAccordionTrigger: React.ForwardRefExoticComponent<
  React.HTMLAttributes<HTMLElement> & {
    className?: string;
  } & React.RefAttributes<HTMLElement>
>;

export declare const TactileAccordionContent: React.ForwardRefExoticComponent<
  React.HTMLAttributes<HTMLDivElement> & {
    className?: string;
  } & React.RefAttributes<HTMLDivElement>
>;

export declare const TactileAIChat: <T extends React.ElementType = 'div'>(
  props: PolymorphicProps<T, { className?: string }> & {
    ref?: React.Ref<Element>;
  }
) => React.ReactElement | null;

export declare const TactileAIMessage: <T extends React.ElementType = 'article'>(
  props: PolymorphicProps<T, { className?: string; role?: AIMessageRole }> & {
    ref?: React.Ref<Element>;
  }
) => React.ReactElement | null;

export declare const TactileAIMessageMeta: <T extends React.ElementType = 'div'>(
  props: PolymorphicProps<T, { className?: string }> & {
    ref?: React.Ref<Element>;
  }
) => React.ReactElement | null;

export declare const TactileAIMessageBody: <T extends React.ElementType = 'div'>(
  props: PolymorphicProps<T, { className?: string }> & {
    ref?: React.Ref<Element>;
  }
) => React.ReactElement | null;

export declare const TactileAIToolbar: <T extends React.ElementType = 'div'>(
  props: PolymorphicProps<T, { className?: string }> & {
    ref?: React.Ref<Element>;
  }
) => React.ReactElement | null;

export declare const TactileAIAction: React.ForwardRefExoticComponent<
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    className?: string;
  } & React.RefAttributes<HTMLButtonElement>
>;

export declare const TactileAISuggestions: <T extends React.ElementType = 'div'>(
  props: PolymorphicProps<T, { className?: string }> & {
    ref?: React.Ref<Element>;
  }
) => React.ReactElement | null;

export declare const TactileAISuggestion: React.ForwardRefExoticComponent<
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    className?: string;
  } & React.RefAttributes<HTMLButtonElement>
>;

export declare const TactileAIComposer: <T extends React.ElementType = 'div'>(
  props: PolymorphicProps<T, { className?: string }> & {
    ref?: React.Ref<Element>;
  }
) => React.ReactElement | null;

export declare const TactileAIComposerRow: <T extends React.ElementType = 'div'>(
  props: PolymorphicProps<T, { className?: string }> & {
    ref?: React.Ref<Element>;
  }
) => React.ReactElement | null;

export declare const TactileAIPrompt: React.ForwardRefExoticComponent<
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    className?: string;
  } & React.RefAttributes<HTMLTextAreaElement>
>;

export declare const TactileAIStatus: <T extends React.ElementType = 'div'>(
  props: PolymorphicProps<T, { className?: string; state?: AIStatusState }> & {
    ref?: React.Ref<Element>;
  }
) => React.ReactElement | null;

export declare const TactileDateInput: React.ForwardRefExoticComponent<
  React.InputHTMLAttributes<HTMLInputElement> & {
    className?: string;
  } & React.RefAttributes<HTMLInputElement>
>;

export declare const TactileTimeInput: React.ForwardRefExoticComponent<
  React.InputHTMLAttributes<HTMLInputElement> & {
    className?: string;
  } & React.RefAttributes<HTMLInputElement>
>;

export declare const TactileCalendar: <T extends React.ElementType = 'div'>(
  props: PolymorphicProps<T, { className?: string }> & {
    ref?: React.Ref<Element>;
  }
) => React.ReactElement | null;

export declare const TactileCalendarHeader: <T extends React.ElementType = 'div'>(
  props: PolymorphicProps<T, { className?: string }> & {
    ref?: React.Ref<Element>;
  }
) => React.ReactElement | null;

export declare const TactileCalendarTitle: <T extends React.ElementType = 'div'>(
  props: PolymorphicProps<T, { className?: string }> & {
    ref?: React.Ref<Element>;
  }
) => React.ReactElement | null;

export declare const TactileCalendarNav: React.ForwardRefExoticComponent<
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    className?: string;
  } & React.RefAttributes<HTMLButtonElement>
>;

export declare const TactileCalendarWeekdays: <T extends React.ElementType = 'div'>(
  props: PolymorphicProps<T, { className?: string }> & {
    ref?: React.Ref<Element>;
  }
) => React.ReactElement | null;

export declare const TactileCalendarWeekday: <T extends React.ElementType = 'div'>(
  props: PolymorphicProps<T, { className?: string }> & {
    ref?: React.Ref<Element>;
  }
) => React.ReactElement | null;

export declare const TactileCalendarGrid: <T extends React.ElementType = 'div'>(
  props: PolymorphicProps<T, { className?: string }> & {
    ref?: React.Ref<Element>;
  }
) => React.ReactElement | null;

export declare const TactileCalendarDay: React.ForwardRefExoticComponent<
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    className?: string;
    muted?: boolean;
    selected?: boolean;
    today?: boolean;
  } & React.RefAttributes<HTMLButtonElement>
>;

export declare const TactileTimeCard: <T extends React.ElementType = 'div'>(
  props: PolymorphicProps<T, { className?: string }> & {
    ref?: React.Ref<Element>;
  }
) => React.ReactElement | null;

export declare const TactileTimeLabel: <T extends React.ElementType = 'div'>(
  props: PolymorphicProps<T, { className?: string }> & {
    ref?: React.Ref<Element>;
  }
) => React.ReactElement | null;

export declare const TactileTimeValue: <T extends React.ElementType = 'div'>(
  props: PolymorphicProps<T, { className?: string }> & {
    ref?: React.Ref<Element>;
  }
) => React.ReactElement | null;

export declare const TactileClock: React.ForwardRefExoticComponent<
  React.HTMLAttributes<HTMLDivElement> & {
    className?: string;
    faceClassName?: string;
    hour?: number;
    minute?: number;
    second?: number;
    size?: number | string;
  } & React.RefAttributes<HTMLDivElement>
>;

export declare const TactileIcon: <T extends React.ElementType = 'span'>(
  props: PolymorphicProps<T, { className?: string; variant?: IconVariant }> & {
    ref?: React.Ref<Element>;
  }
) => React.ReactElement | null;

export declare const TactileText: <T extends React.ElementType = 'span'>(
  props: PolymorphicProps<T, { className?: string; sculpted?: boolean }> & {
    ref?: React.Ref<Element>;
  }
) => React.ReactElement | null;

declare const _default: {
  TactileTheme: typeof TactileTheme;
  TactileSurface: typeof TactileSurface;
  TactileButton: typeof TactileButton;
  TactileInput: typeof TactileInput;
  TactileField: typeof TactileField;
  TactileFieldLabel: typeof TactileFieldLabel;
  TactileFieldHint: typeof TactileFieldHint;
  TactileSelect: typeof TactileSelect;
  TactileTextarea: typeof TactileTextarea;
  TactileCard: typeof TactileCard;
  TactileFab: typeof TactileFab;
  TactileSegment: typeof TactileSegment;
  TactileSegmented: typeof TactileSegmented;
  TactileTabs: typeof TactileTabs;
  TactileTabList: typeof TactileTabList;
  TactileTab: typeof TactileTab;
  TactileTabPanel: typeof TactileTabPanel;
  TactileSlider: typeof TactileSlider;
  TactileProgress: typeof TactileProgress;
  TactileGauge: typeof TactileGauge;
  TactileKeypad: typeof TactileKeypad;
  TactileKey: typeof TactileKey;
  TactileKeyboard: typeof TactileKeyboard;
  TactileKeyboardRow: typeof TactileKeyboardRow;
  TactileKeyboardKey: typeof TactileKeyboardKey;
  TactileBadge: typeof TactileBadge;
  TactileAvatar: typeof TactileAvatar;
  TactileDivider: typeof TactileDivider;
  TactileCheckbox: typeof TactileCheckbox;
  TactileSwitch: typeof TactileSwitch;
  TactileTone: typeof TactileTone;
  TactileModalOverlay: typeof TactileModalOverlay;
  TactileModalHeader: typeof TactileModalHeader;
  TactileModalTitle: typeof TactileModalTitle;
  TactileModalClose: typeof TactileModalClose;
  TactileModalBody: typeof TactileModalBody;
  TactileModalFooter: typeof TactileModalFooter;
  TactileModal: typeof TactileModal;
  TactileToast: typeof TactileToast;
  TactileToastContainer: typeof TactileToastContainer;
  TactileToastIcon: typeof TactileToastIcon;
  TactileToastContent: typeof TactileToastContent;
  TactileToastTitle: typeof TactileToastTitle;
  TactileToastMessage: typeof TactileToastMessage;
  TactileToastClose: typeof TactileToastClose;
  TactileAccordion: typeof TactileAccordion;
  TactileAccordionItem: typeof TactileAccordionItem;
  TactileAccordionTrigger: typeof TactileAccordionTrigger;
  TactileAccordionContent: typeof TactileAccordionContent;
  TactileAIChat: typeof TactileAIChat;
  TactileAIMessage: typeof TactileAIMessage;
  TactileAIMessageMeta: typeof TactileAIMessageMeta;
  TactileAIMessageBody: typeof TactileAIMessageBody;
  TactileAIToolbar: typeof TactileAIToolbar;
  TactileAIAction: typeof TactileAIAction;
  TactileAISuggestions: typeof TactileAISuggestions;
  TactileAISuggestion: typeof TactileAISuggestion;
  TactileAIComposer: typeof TactileAIComposer;
  TactileAIComposerRow: typeof TactileAIComposerRow;
  TactileAIPrompt: typeof TactileAIPrompt;
  TactileAIStatus: typeof TactileAIStatus;
  TactileDateInput: typeof TactileDateInput;
  TactileTimeInput: typeof TactileTimeInput;
  TactileCalendar: typeof TactileCalendar;
  TactileCalendarHeader: typeof TactileCalendarHeader;
  TactileCalendarTitle: typeof TactileCalendarTitle;
  TactileCalendarNav: typeof TactileCalendarNav;
  TactileCalendarWeekdays: typeof TactileCalendarWeekdays;
  TactileCalendarWeekday: typeof TactileCalendarWeekday;
  TactileCalendarGrid: typeof TactileCalendarGrid;
  TactileCalendarDay: typeof TactileCalendarDay;
  TactileTimeCard: typeof TactileTimeCard;
  TactileTimeLabel: typeof TactileTimeLabel;
  TactileTimeValue: typeof TactileTimeValue;
  TactileClock: typeof TactileClock;
  TactileIcon: typeof TactileIcon;
  TactileText: typeof TactileText;
};

export default _default;
