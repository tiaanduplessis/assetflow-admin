export default {
  admin: {
    path: '/people/',
    validate: (profile) => profile.isAdmin && profile.isEmployee
  }
}
