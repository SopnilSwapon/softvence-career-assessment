'use client';
import { cva, type VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
import { ButtonHTMLAttributes, ReactNode, CSSProperties } from 'react';

const buttonClasses = cva(
  'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        primary: 'bg-button-background text-button-text border-button-border hover:bg-primary-dark focus:ring-primary-background',
        secondary: 'bg-secondary-background text-secondary-foreground border-border-secondary hover:bg-primary-light focus:ring-primary-background',
        outline: 'border-2 border-primary-background text-primary-background bg-transparent hover:bg-primary-light focus:ring-primary-background',
        ghost: 'text-primary-background bg-transparent hover:bg-primary-light focus:ring-primary-background',
      },
      size: {
        small: 'text-sm px-3 py-1.5',
        medium: 'text-base px-4 py-2',
        large: 'text-lg px-6 py-3',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'medium',
    },
  }
);

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonClasses> {
  // Required parameters with defaults
  text?: string;
  text_font_size?: string;
  text_font_family?: string;
  text_font_weight?: string;
  text_line_height?: string;
  text_text_align?: string;
  text_color?: string;
  border_border?: string;
  border_border_radius?: string;
  
  // Optional parameters
  text_text_transform?: string;
  fill_background_color?: string;
  effect_box_shadow?: string;
  layout_width?: string;
  padding?: string;
  position?: string;
  margin?: string;
  
  // Standard React props
  children?: ReactNode;
}

const Button = ({
  // Required parameters with defaults
  text = "",
  text_font_size = "text-base",
  text_font_family = "Public Sans",
  text_font_weight = "font-semibold",
  text_line_height = "leading-base",
  text_text_align = "left",
  text_color = "text-primary-background",
  border_border = "1px solid #3ba334",
  border_border_radius = "rounded-md",
  
  // Optional parameters (no defaults)
  text_text_transform,
  fill_background_color,
  effect_box_shadow,
  layout_width,
  padding,
  position,
  margin,
  
  // Standard React props
  variant,
  size,
  disabled = false,
  className,
  children,
  onClick,
  type = 'button',
  ...props
}: ButtonProps) => {
  // Safe validation for optional parameters
  const hasValidTransform = text_text_transform && typeof text_text_transform === 'string' && text_text_transform.trim() !== ''
  const hasValidBackground = fill_background_color && typeof fill_background_color === 'string' && fill_background_color.trim() !== ''
  const hasValidShadow = effect_box_shadow && typeof effect_box_shadow === 'string' && effect_box_shadow.trim() !== ''
  const hasValidWidth = layout_width && typeof layout_width === 'string' && layout_width.trim() !== ''
  const hasValidPadding = padding && typeof padding === 'string' && padding.trim() !== ''
  const hasValidMargin = margin && typeof margin === 'string' && margin.trim() !== ''
  const hasValidPosition = position && typeof position === 'string' && position.trim() !== ''

  const optionalClasses = [
    hasValidTransform ? (text_text_transform === 'uppercase' ? 'uppercase' : text_text_transform === 'lowercase' ? 'lowercase' : text_text_transform === 'capitalize' ? 'capitalize' : '') : '',
    hasValidBackground ? `bg-[${fill_background_color}]` : '',
    hasValidShadow ? `shadow-[${effect_box_shadow}]` : '',
    hasValidWidth ? `w-[${layout_width}]` : '',
    hasValidPadding ? `p-[${padding}]` : '',
    hasValidMargin ? `m-[${margin}]` : '',
    hasValidPosition ? position : '',
  ].filter(Boolean).join(' ')

  // Build custom styles for non-Tailwind properties
  const customStyles: CSSProperties = {
    // Only use inline styles for truly custom values
    ...(text_font_family && !text_font_family.startsWith('font-') && { fontFamily: text_font_family }),
  }

  // Parse border string to extract border width and color
  const parseBorder = (borderStr: string) => {
    const match = borderStr.match(/(\d+)\s*(?:px)?\s*(solid|dashed|dotted)?\s*(.+)/)
    if (match) {
      const [, width, borderStyle = 'solid', color] = match // Rename 'style' to 'borderStyle'
      return `border-[${width}px] border-${borderStyle} border-[${color.trim()}]`
    }
    return 'border'
  }

  // Build Tailwind classes for styling
  const styleClasses = [
    text_font_size,
    text_font_family.startsWith('font-') ? text_font_family : '',
    text_font_weight,
    text_line_height,
    text_text_align === 'center' ? 'text-center' : text_text_align === 'right' ? 'text-right' : 'text-left',
    text_color,
    // Only apply these if not using variant system
    !variant ? parseBorder(border_border) : '',
    border_border_radius,
  ].filter(Boolean).join(' ')

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) {
      event.preventDefault()
      return
    }
    
    if (typeof onClick === 'function') {
      onClick(event)
    }
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={handleClick}
      style={customStyles}
      className={twMerge(
        buttonClasses({ variant, size }),
        styleClasses,
        optionalClasses,
        className
      )}
      aria-disabled={disabled}
      {...props}
    >
      {children || text}
    </button>
  )
}

export default Button