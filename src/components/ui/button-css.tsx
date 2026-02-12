import * as React from "react"
import "./button-css.css"

export interface ButtonCSSProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'destructive' | 'outline' | 'ghost'
  size?: 'small' | 'medium' | 'large'
}

const ButtonCSS = React.forwardRef<HTMLButtonElement, ButtonCSSProps>(
  ({ className = '', variant = 'primary', size = 'medium', children, ...props }, ref) => {
    // 클래스 이름 조합
    const buttonClasses = `btn-css btn-css-${variant} btn-css-${size} ${className}`.trim()
    
    return (
      <button
        ref={ref}
        className={buttonClasses}
        {...props}
      >
        {children}
      </button>
    )
  }
)
ButtonCSS.displayName = "ButtonCSS"

export { ButtonCSS }
