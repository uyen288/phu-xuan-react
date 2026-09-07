import MenuItem from './MenuItem'

function MenuList({ items = [], onToggleFavourite }) {
  return (
    <ul class="menu-list">
      {items.map((item) => (
        <li key={item.id}>
          <MenuItem {...item} onToggleFavourite={onToggleFavourite} />
        </li>
      ))}
    </ul>
  )
}

export default MenuList
