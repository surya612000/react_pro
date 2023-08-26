const UserProfile = props => {
  const {UserDetails} = props
  const {imageUrl} = UserDetails
  return (
    <div>
      <img src={imageUrl} />
    </div>
  )
}
export default UserProfile
