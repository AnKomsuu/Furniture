interface SkeletonLoaderProps {
  className?: string;
  count?: number;
}

export default function SkeletonLoader({
  className = "",
  count = 1,
}: SkeletonLoaderProps) {
  return (
    <div className={`space-y-4 ${className}`}>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="skeleton rounded-lg h-48 w-full" />
      ))}
    </div>
  );
}
