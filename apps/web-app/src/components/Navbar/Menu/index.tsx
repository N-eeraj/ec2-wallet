import userStore from "@stores/user"

function Menu() {
  const user = userStore(state => state.user)

  return (
    <div className="relative">
      <span>
        {user?.name}
      </span>
    </div>
  )
}

export default Menu
