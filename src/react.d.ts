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

declare const _default: {
  TactileTheme: typeof TactileTheme;
  TactileSurface: typeof TactileSurface;
  TactileButton: typeof TactileButton;
  TactileInput: typeof TactileInput;
  TactileField: typeof TactileField;
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
  TactileModal: typeof TactileModal;
  TactileToast: typeof TactileToast;
  TactileToastContainer: typeof TactileToastContainer;
  TactileAccordion: typeof TactileAccordion;
  TactileAccordionItem: typeof TactileAccordionItem;
  TactileAccordionTrigger: typeof TactileAccordionTrigger;
  TactileAccordionContent: typeof TactileAccordionContent;
};

export default _default;
