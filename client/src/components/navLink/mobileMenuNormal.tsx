import { NavLink } from 'react-router-dom'

interface Props {
  to?: string
  label: string
  sub?: boolean
}

const MobileMenuNormal = ({ to, label, sub = false }: Props) => {
  return (
    <NavLink to={to ?? '#'}>
      <li
        className={`py-2 text-sm text-gray-700 hover:bg-gray-100 ${
          sub ? 'px-4' : 'px-2'
        }`}>
        {label}
      </li>
    </NavLink>
  )
}

export default MobileMenuNormal
