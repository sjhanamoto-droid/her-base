import React from 'react';
import { JOIN_ANCHOR } from '../../constants';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'gold' | 'ink' | 'outline' | 'outlineLight' | 'cream';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  children: React.ReactNode;
  fullWidth?: boolean;
  withArrow?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'ink',
  size = 'md',
  children,
  className = '',
  fullWidth = false,
  withArrow = false,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center border transition-all duration-300 tracking-[0.18em] font-medium group';

  const variants = {
    gold: 'bg-ink text-base-50 border-ink hover:bg-transparent hover:text-ink',
    ink: 'bg-ink text-base-50 border-ink hover:bg-transparent hover:text-ink',
    outline: 'bg-transparent border-ink/60 text-ink hover:bg-ink hover:text-base-50',
    outlineLight: 'bg-transparent border-base-100/70 text-base-100 hover:bg-base-100 hover:text-ink',
    cream: 'bg-base-100 text-ink border-base-100 hover:bg-transparent hover:text-base-100',
  };

  const sizes = {
    sm: 'px-5 py-2.5 text-xs',
    md: 'px-8 py-3.5 text-xs md:text-sm',
    lg: 'px-10 py-4 text-sm',
    xl: 'px-12 py-5 text-sm md:text-base',
  };

  const widthStyles = fullWidth ? 'w-full' : '';

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (props.onClick) {
      props.onClick(e);
    } else {
      // 既定動作: ご相談セクションへスムーズスクロール
      const target = document.querySelector(JOIN_ANCHOR);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthStyles} ${className}`}
      {...props}
      onClick={handleClick}
    >
      <span className="relative z-10 flex items-center">
        {children}
        {withArrow && <span className="ml-4 transition-transform duration-300 group-hover:translate-x-1.5">→</span>}
      </span>
    </button>
  );
};

export default Button;
