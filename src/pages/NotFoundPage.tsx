import { Link } from "react-router-dom";
import { Button } from "@/components/ui/Button";

export function NotFoundPage() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center px-6 py-32 text-center">
      <h1 className="font-serif-heading text-6xl font-semibold text-ink">404</h1>
      <p className="mt-4 text-lg text-ink-soft">Page not found.</p>
      <Link to="/" className="mt-8">
        <Button variant="primary">Back to Home</Button>
      </Link>
    </div>
  );
}
