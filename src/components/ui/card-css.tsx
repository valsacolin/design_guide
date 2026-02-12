import * as React from "react"
import "./card-css.css"

export interface CardCSSProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'bordered' | 'elevated'
}

const CardCSS = React.forwardRef<HTMLDivElement, CardCSSProps>(
  ({ className = '', variant = 'default', children, ...props }, ref) => {
    const cardClasses = `card-css card-css-${variant} ${className}`.trim()
    
    return (
      <div ref={ref} className={cardClasses} {...props}>
        {children}
      </div>
    )
  }
)
CardCSS.displayName = "CardCSS"

const CardCSSHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className = '', children, ...props }, ref) => {
    return (
      <div ref={ref} className={`card-css-header ${className}`.trim()} {...props}>
        {children}
      </div>
    )
  }
)
CardCSSHeader.displayName = "CardCSSHeader"

const CardCSSTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className = '', children, ...props }, ref) => {
    return (
      <h3 ref={ref} className={`card-css-title ${className}`.trim()} {...props}>
        {children}
      </h3>
    )
  }
)
CardCSSTitle.displayName = "CardCSSTitle"

const CardCSSDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className = '', children, ...props }, ref) => {
    return (
      <p ref={ref} className={`card-css-description ${className}`.trim()} {...props}>
        {children}
      </p>
    )
  }
)
CardCSSDescription.displayName = "CardCSSDescription"

const CardCSSContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className = '', children, ...props }, ref) => {
    return (
      <div ref={ref} className={`card-css-content ${className}`.trim()} {...props}>
        {children}
      </div>
    )
  }
)
CardCSSContent.displayName = "CardCSSContent"

const CardCSSFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className = '', children, ...props }, ref) => {
    return (
      <div ref={ref} className={`card-css-footer ${className}`.trim()} {...props}>
        {children}
      </div>
    )
  }
)
CardCSSFooter.displayName = "CardCSSFooter"

export {
  CardCSS,
  CardCSSHeader,
  CardCSSTitle,
  CardCSSDescription,
  CardCSSContent,
  CardCSSFooter,
}
