import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavLink = (props) => {
  const router = useRouter();
  const defaultClass =
    'w-full flex items-center pl-6 p-2 my-2 transition-colors duration-200 justify-start';
  const normalClass =
    defaultClass + ' text-gray-400 hover:text-gray-800 border-l-4 border-transparent';
  const activeClass = defaultClass + ' text-gray-800 dark:text-white border-l-4 border-blue-500';

  const textClass = 'text-sm font-normal';

  const active = router.pathname === props.href;

  return (
    <Link href={props.href}>
      <a className={!active ? normalClass : activeClass} href="#">
        <span className="text-left">
          <FontAwesomeIcon icon={props.icon} />
        </span>
        <span className={active ? textClass + ' mx-2' : textClass + ' mx-4'}>
          {props.name}
        </span>
      </a>
    </Link>
  );
};

NavLink.propTypes = {
  name: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired
};

export default NavLink;
