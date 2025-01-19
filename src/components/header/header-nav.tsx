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
    blocked: true,
  },
  {
    name: 'Me contate',
    href: '#contact',
    blocked: true,
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
            href={!item.blocked ? item.href : ''}
            className={`stiky-element-default px-2 font-medium ${item.blocked ? 'cursor-not-allowed text-muted-foreground' : 'text-primary'}`}
          >
            {item.name + (index < items.length - 1 ? ',' : '')}
          </EncryptLink>
        ))}
      </ul>
    </nav>
  );
};

export default HeaderNav;
