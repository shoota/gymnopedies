import { hrefFor } from "@blog/router"

export function homeHref() {
  return hrefFor({ name: "home" })
}

export function postsHref() {
  return hrefFor({ name: "posts" })
}

export function postHref(slug: string) {
  return hrefFor({ name: "post-detail", slug })
}
