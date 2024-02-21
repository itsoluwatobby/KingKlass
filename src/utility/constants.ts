export const MagicNumbers = {
  maxTextLength: 150,
  minTextLength: 135,
  imageSize: 1_400_000,
  timeout: 5_000,
  max_timeout: 8_000,
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

export const NavLinks = [
  { name: 'Home', link: '/' },
  { name: 'Products', link: '/products' },
  { name: 'Orders', link: '/orders' },
  { name: 'About Us', link: '/aboutus' },
  { name: 'Contact Us', link: '/#contactUs' },
]

export const FooterLinks = {
  QuickLinks: {
    name: "Quick Links",
    values: [...NavLinks]
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
  { name: "My Measurement", link: "" },
  { name: "Notifications", link: "" },
  { name: "Settings", link: "/settings" },
]

export const HomeNavLinks = [
  { name: 'Home', link: '/' },
  { name: 'Products', link: '/products' },
  { name: 'About Us', link: '/aboutus' },
  { name: 'Contact Us', link: '/#contactUs' },
]

export const AdminNavLinks = [
  { name: 'Dashboard', link: '/dashboard' },
  { name: 'Upload product', link: '/uploadProduct' },
  { name: 'Manage orders', link: '/adminOrders' },
  { name: 'Contacts', link: '/#contactUs' },
]

export const DesktopDropdown = [
  ...NavLinks,
  { name: "My Measurement", link: "" },
  { name: "Notifications", link: "" },
  { name: "Logout", link: "" },
]

export const OrderStatus: Record<OrderStatusType, OrderStatusType> = {
  'Pending': 'Pending',
  'In progress': 'In progress',
  'Completed': 'Completed'
}

export const orderProps: OrderPropsTypes = {
  "Pending": {
    bgColor: "bg-[#6E6E6E]",
    color: "text-[#6E6E6E]",
    width: "w-[0%]"
  },
  "In progress": {
    bgColor: "bg-[#E28835]",
    color: "text-[#E28835]",
    width: "w-[36%]"
  },
  "Completed": {
    bgColor: "bg-[#138F27]",
    color: "text-[#138F27]",
    width: "w-[100%]"
  }
}
export const hoverClass = "hover:opacity-90 active:opacity-100 transition-opacity"
export const OrderTableLabel = ['Order ID', 'Date', 'Status', 'Customer']
export const CustomerTableLabel = ['Customer', 'Phone Number', 'Email Address', 'Measurement']