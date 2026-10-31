import styles from './Button.module.css'

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  width: number;
  height: number;
  color: string;
  radius?: string;
  onClick?: () => void;
}

interface RectangularButtonProps {
  children: React.ReactNode;
  className?: string;
  width?: number;
  height?: number;
  color: string;
  radius?: string;
  onClick?: () => void;
}

interface SquareButtonProps {
  children: React.ReactNode;
  className?: string;
  size?: number;
  color: string;
  radius?: string;
  onClick?: () => void;
}

interface ButtonIconProps {
  src: string;
  size?: number;
  ignoreColor?: boolean;
}

export function Button({ children, className = '', width, height, color, radius = '3', onClick }: ButtonProps) {
  return <button className={`${styles.container} relative`} onClick={onClick} style={{
    '--radius': `var(--radius-${radius})`,
    width,
    height
  } as React.CSSProperties}>
    <div className={`${styles.button} ${className} absolute z-10 flex items-center justify-center`} style={{
      '--color-bg': `var(--color-${color}2)`,
      '--color-bg-hover': `var(--color-${color}1)`,
    } as React.CSSProperties}>
      {children}
    </div>
    <div className={`${styles.base} absolute z-0`}></div>
  </button>;
}

export function RectangularButton({ children, className = '', width = 216, height = 66, color, radius = "2", onClick }: RectangularButtonProps) {
  return <Button
    className={className}
    width={width}
    height={height}
    color={color}
    radius={radius}
    onClick={onClick}
  >
    <p className={styles.buttonText}>{children}</p>
  </Button>
}

export function SquareButton({ children, className = '', size = 72, color, radius = "3", onClick }: SquareButtonProps) {
  return <Button
    className={className}
    width={size}
    height={size}
    color={color}
    radius={radius}
    onClick={onClick}
  >
    {children}
  </Button>
}

export function ButtonIcon({ src, size = 42, ignoreColor = false }: ButtonIconProps) {
  return <img src={src} className={`${ignoreColor ? "" : styles.buttonIcon}`} width={size} height={size} />
}
