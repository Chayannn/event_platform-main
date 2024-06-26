export const headerLinks = [
  {
    label: 'Home',
    route: '/',
  },
  {
    label: 'Create Pass',
    route: '/subscribe',
  },
  {
    label: 'My Profile',
    route: '/profile',
  },
]

export const eventDefaultValues = {
  title: '',
  description: '',
  location: '',
  imageUrl: '',
  startDateTime: new Date(),
  endDateTime: new Date(),
  categoryId: '',
  price: '',
  isFree: false,
  url: '',
}
// route: '/events/create',