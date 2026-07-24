export default function LocaleLoading() {
  return (
    <div className="container-site flex min-h-[40vh] items-center justify-center py-20">
      <div
        className="h-8 w-8 animate-pulse rounded-full border-2 border-brand border-t-transparent"
        role="status"
        aria-label="Loading"
      />
    </div>
  );
}
