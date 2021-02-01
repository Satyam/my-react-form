// declare module '*.css';

declare module '*.module.css' {
  const classes: Record<string, string>;
  export default classes;
}

declare global {
  type BootstrapColor =
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'danger'
    | 'info'
    | 'dark'
    | 'light';
  type BootstrapSize = 'sm' | 'md' | 'lg';
}
export {};
