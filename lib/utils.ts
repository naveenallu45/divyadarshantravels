export function createWhatsAppLink(message: string): string {
  const phone = "919581882895"; // 91 + phone number
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export function createCallLink(): string {
  return `tel:+919581882895`;
}
