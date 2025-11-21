export function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" })
}

export function scrollToPlans() {
  const el = document.getElementById('plans')
  if(el) el.scrollIntoView({behavior:'smooth', block:'start'})
}

export function scrollToHowItWorks() {
  const el = document.getElementById('how-it-works')
  if(el) el.scrollIntoView({behavior:'smooth', block:'start'})
}
