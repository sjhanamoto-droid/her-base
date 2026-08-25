import React from 'react';
import { ArrowRight } from 'lucide-react';
import { JOIN_ANCHOR } from '../../constants';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'gold' | 'ink' | 'outline' | 'outlineLight';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  children: React.ReactNode;
  fullWidth?: boolean;
  withArrow?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'gold',
  size = 'md',
  children,
  className = '',
  fullWidth = false,
  withArrow = false,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-bold transition-all duration-300 border relative overflow-hidden group tracking-[0.15em] font-cinzel uppercase';

  const variants = {
    gold: 'bg-gold-500 text-white border-gold-500 hover:bg-transparent hover:text-gold-600',
    ink: 'bg-ink text-cream-50 border-ink hover:bg-transparent hover:text-ink',
    outline: 'bg-transparent border-ink text-ink hover:bg-ink hover:text-cream-50',
    outlineLight: 'bg-transparent border-white text-white hover:bg-white hover:text-ink',
  };

  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-8 py-3 text-sm',
    lg: 'px-10 py-4 text-base',
    xl: 'px-12 py-5 text-lg',
  };

  const widthStyles = fullWidth ? 'w-full' : '';

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (props.onClick) {
      props.onClick(e);
    } else {
      // 既定動作: 入会申し込みセクションへスムーズスクロール
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
        {withArrow && <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />}
      </span>
    </button>
  );
};

export default Button;
