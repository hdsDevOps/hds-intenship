import { useState } from "react";
import { Navbar, Dropdown, Avatar } from "flowbite-react";
import { NavbarLinkProps, NavProfileProps } from "../../models";
import { useLocation, useLinkClickHandler } from "react-router-dom";

const NavLink = ({ to, text }: NavbarLinkProps) => {
  const location = useLocation();
  const clickHandler = useLinkClickHandler(to);

  return (
    <span onClick={clickHandler}>
      <Navbar.Link href={to} active={location.pathname === to} className={`${location.pathname === to ? 'bg-[#ad1f29ee]' : ''} rounded-md nav-link`}>
        {text}
      </Navbar.Link>
    </span>
  );
};

const NavInfo = ({
  avatar: { alt, image },
  info: { name },
}: NavProfileProps) => {
  return (
    <Dropdown
      arrowIcon={false}
      inline={true}
      label={<Avatar alt={alt} img={image} rounded={true} />}
    >
      <Dropdown.Header>
        <span className="block text-sm">{name}</span>
        {/* <span className="block truncate text-sm font-medium">
            name@flowbite.com
          </span> */}
      </Dropdown.Header>
    </Dropdown>
  );
};

const Header = () => {
  return (
    <>
      <Navbar fluid={true} rounded={true}>
        {/* Left */}
        <Navbar.Brand />

        {/* Right */}
        <>
          <div className="flex md:order-2 gap-2">
            <NavInfo
              avatar={{
                alt: "Profile Picture",
                image:
                  "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
              }}
              info={{ name: "Graham Potter" }}
            />
            <Navbar.Toggle />
          </div>
          {/* Nav links */}
          <Navbar.Collapse>
            <NavLink to="/" text="Home" />
            <NavLink to="/login" text="Login" />
            <NavLink to="/register" text="Register" />
          </Navbar.Collapse>
        </>
      </Navbar>
    </>
  );
};

export default Header;
