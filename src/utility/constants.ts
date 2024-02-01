export const MagicNumbers = {
  maxTextLength: 150,
  minTextLength: 135,
} as const;

export const AboutUs = [
  {
    image: '',
    title: 'Meticulous Craftmanship',
    content: "Our seasoned artisans bring decades of expertise, ensuring each garment is a masterpiece of meticulous craftsmanship. From the initial measurements to the final stitch, we uphold a standard of excellence that defines our work."
  },
  {
    image: '',
    title: 'Personalization Redefined',
    content: "Experience tailoring that is truly yours. Collaborate with our skilled team to bring your unique vision to life. We offer a level of personalization that goes beyond measurements, ensuring each garment is a reflection of your individual style and personality."
  },
  {
    image: '',
    title: 'Online Convenience, Offline Quality',
    content: "Embrace the convenience of online ordering without compromising on the quality of traditional craftsmanship. Our online platform seamlessly integrates with our atelier, providing you with a modern, user-friendly experience."
  }
]

export const HowKingClassWorks = [
  {
    title: 'Explore Categories',
    content: 'Browse through our diverse collections, including Agbada, Suits and Native Attires.',
    textDirection: "text-start",
    position: "-left-2",
    padding: "pl-[22px]"
  },
  {
    title: 'Personalize Your Order',
    content: 'Customize your selection by choosing fabrics, styles, and adding personal details.',
    textDirection: "text-end",
    position: "-right-2",
    padding: "pr-[22px]"
  },
  {
    title: 'Place Your Order',
    content: 'Effortlessly place your order through our user-friendly platform.',     textDirection: "text-start",
    position: "-left-2",
    padding: "pl-[22px]"
  },
  {
    title: 'Track Progress',
    content: "Keep track of your order's journey from creation to completion.",
    textDirection: "text-end",
    position: "-right-2",
    padding: "pr-[22px]"
  },
  {
    title: 'Order Ready',
    content: 'Once completed, your bespoke creation is ready for delivery',
    textDirection: "text-start",
    position: "-left-2",
    padding: "pl-[22px]"
  }
]

export const UserFeedback = [
  {
    author: "Fatima Adeyemi",
    Comment: "I'm impressed by the level of personalization offered. My native attire was tailored to perfection, capturing the essence of Nigerian tradition with a modern twist. The communication throughout the process was excellent. I'll definitely be a repeat customer.",
    location: "Abuja",
    date: new Date().toUTCString()
  },
  {
    author: "Mark Daniel",
    Comment: "I'm impressed by the level of personalization offered. My native attire was tailored to perfection, capturing the essence of Nigerian tradition with a modern twist. The communication throughout the process was excellent. I'll definitely be a repeat customer.",
    location: "Lokoja",
    date: new Date().toUTCString()
  },
  {
    author: "Joseph Obimba",
    Comment: "I'm impressed by the level of personalization offered. My native attire was tailored to perfection, capturing the essence of Nigerian tradition with a modern twist. The communication throughout the process was excellent. I'll definitely be a repeat customer.",
    location: "Lagos",
    date: new Date().toUTCString()
  },
]

export const FooterLinks = {
  QuickLinks: {
    name: "Quick Links",
    values: [
      { name: 'Home', link: '/' },
      { name: 'Products', link: '/products' },
      { name: 'About Us', link: '#aboutUs' },
      { name: 'Contact Us', link: '#contactUs' },
      { name: 'Account', link: '/account' },
    ]
  }, 
  Support: {
    name: "Support",
    values: [
      { name: 'Privacy Policy', link: '/privacyPolicy' },
      { name: 'Return & Refund Policy', link: '/refund' },
      { name: 'FAQ', link: '/faq' }
    ]
  }
}

export const UserNavigation = [
  { name: "My Measurement", link: "/measurement" },
  { name: "Notifications", link: "/notifications" },
  { name: "Edit Profile", link: "/profile" },
  { name: "Settings", link: "/settings" },
  { name: "Logout", link: "logout" }
]