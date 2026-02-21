export interface NavLink {
  href: string
  label: string
}

export interface BenefitCard {
  icon: string
  title: string
  description: string
}

export interface FeatureCard {
  icon: string
  title: string
  description: string
}

export interface Testimonial {
  rating: number
  halfStar?: boolean
  quote: string
  name: string
  platform: string
  avatar: string
}

export interface FooterLink {
  label: string
  href: string
}

export interface FooterSection {
  title: string
  links: FooterLink[]
}
