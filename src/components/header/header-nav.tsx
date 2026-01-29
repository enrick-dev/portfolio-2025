import EncryptLink from '../encrypt-link';

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
      <ul className="flex">
        {items.map((item, index) => (
          <EncryptLink
            key={index}
            href={item.href}
            className="stiky-element-default px-2 font-medium text-primary"
          >
            {item.name + (index < items.length - 1 ? ',' : '')}
          </EncryptLink>
        ))}
      </ul>
    </nav>
  );
};

export default HeaderNav;
