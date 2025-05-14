declare module '@splinetool/react-spline' {
  import { ComponentType } from 'react';
  interface SplineProps {
    scene: string;
    className?: string;
    style?: React.CSSProperties;
    onLoad?: (spline: unknown) => void;
  }
  const Spline: ComponentType<SplineProps>;
  export default Spline;
}