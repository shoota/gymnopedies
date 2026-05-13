import { Separator } from "@/components/ui/separator"

export function SiteFooter() {
  return (
    <footer className="mx-auto mt-24 w-full max-w-5xl px-6 pb-16 text-sm text-muted-foreground">
      <Separator className="mb-8" />
      <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
        <p className="m-0">
          Quiet Pages — a sample blog built with{" "}
          <a
            href="https://gymnopedies.shoota.work/"
            className="underline decoration-primary underline-offset-4"
          >
            gymnopédies
          </a>
          .
        </p>
        <p className="m-0">
          Components:{" "}
          <a
            href="https://gymnopedies.shoota.work/"
            className="underline decoration-primary underline-offset-4"
          >
            Storybook
          </a>{" "}
          ·{" "}
          <a
            href="https://github.com/shoota/gymnopedies"
            className="underline decoration-primary underline-offset-4"
          >
            GitHub
          </a>
        </p>
      </div>
    </footer>
  )
}
