import Cookies from "js-cookie";

export function getCookie(name) {
  return Cookies.get(name)
}

export function setCookie({
  name,
  content,
  expires = 1
}) {
  Cookies.set(name, content, { expires })
}

export function rmCookie(name) {
  Cookies.remove(name)
}