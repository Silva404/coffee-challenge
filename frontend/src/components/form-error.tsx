export function FormError({ error }: { error?: string }) {
  return error ? (
    <span
      role="alert"
      className="p-3 border border-red-600 text-red-700 w-full rounded-lg text-sm"
    >
      {error}
    </span>
  ) : null;
}
