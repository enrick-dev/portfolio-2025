const items = [
  {
    name: 'Index',
    href: '/',
  },
  {
    name: 'Projetos',
    href: '#projects',
  },
  {
    name: 'Sobre mim',
    href: '#about',
  },
  {
    name: 'Me contate',
    href: '#contact',
  },
];

type HeaderNavProps = {
  className?: string;
};
const HeaderNav = ({ className }: HeaderNavProps) => {
  return (
    <nav className={className}>
      <ul className="flex gap-2">
        {items.map((item, index) => (
          <li key={index}>
            <a href={item.href} className="font-medium">
              {item.name}

              {index < items.length - 1 && ', '}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HeaderNav;
