export function Star({ className = '' }: { className?: string }) {
  return (
    <span className={`star ${className}`} aria-hidden="true">
      ✦
    </span>
  );
}
