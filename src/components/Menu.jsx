import MenuItem from "./MenuItem.jsx";

const routes = [
  { title: 'Home', route: '/'},
  { title: 'Services', route: '/services' },
  { title: 'About', route: '/about' },
  { title: 'Resume', route: '/resume' },
]
const Menu =  () => {
  return (
    <ul className="menu">
      {routes.map((item) => (
        <MenuItem key={item.route} item={item}/>
      ))}
    </ul>
  )
}

export default Menu
