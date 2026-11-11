import styles from './Button.module.css'

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  width: number;
  height: number;
  rounded?: string;
  onClick?: () => void;
}

interface RectangularButtonProps {
  children: React.ReactNode;
  className?: string;
  width?: number;
  height?: number;
  rounded?: string;
  onClick?: () => void;
}

interface SquareButtonProps {
  children: React.ReactNode;
  className?: string;
  size?: number;
  rounded?: string;
  onClick?: () => void;
}

// rounded not included in className because it affects both the top and bottom divs
export function Button({ children, className = '', width, height, rounded = '2xl', onClick }: ButtonProps) {
  return <button
    className={`${styles.container} relative cursor-pointer`}
    onClick={onClick}
    style={{width, height}}
  >
    <div className={`${styles.button} ${className} absolute z-10 flex items-center justify-center rounded-${rounded} border-4 border-brown3`}>
      {children}
    </div>
    <div className={`${styles.base} absolute z-0 bg-brown3 rounded-${rounded}`}></div>
  </button>;
}

export function RectangularButton({ children, className = '', width = 216, height = 66, rounded, onClick }: RectangularButtonProps) {
  return <Button
    className={className}
    width={width}
    height={height}
    rounded={rounded}
    onClick={onClick}
  >
    {children}
  </Button>
}

export function SquareButton({ children, className = '', size = 72, rounded, onClick }: SquareButtonProps) {
  return <Button
    className={className}
    width={size}
    height={size}
    rounded={rounded}
    onClick={onClick}
  >
    {children}
  </Button>
}
