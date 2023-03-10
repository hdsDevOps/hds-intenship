import { useState } from "react";
import type { User } from "../../utils/UserContextProvider";
import { useUserDetails } from "../../utils/UserContextProvider";
import { Navbar, Dropdown, Avatar } from "flowbite-react";
import { NavbarLinkProps, NavProfileProps } from "../../models";
import { useLocation, useLinkClickHandler } from "react-router-dom";

const NavLink = ({ to, text }: NavbarLinkProps) => {
  const location = useLocation();
  const clickHandler = useLinkClickHandler(to);

  return (
    <span onClick={clickHandler}>
      <Navbar.Link
        href={to}
        className={`rounded-md nav-link ${
          location.pathname === to ? "bg-[#ad1f29]" : "bg-[#ad1]"
        }`}
      >
        {location.pathname}
        {to}
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
  let { user , loginUser , logoutUser} = useUserDetails();

  console.log(user);
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
            {!user?.isLoggedIn ? (
              <NavLink to="/login" text="Login" />
            ) : (
              <NavLink to="/register" text="Register" />
            )}
          </Navbar.Collapse>
        </>
      </Navbar>
    </>
  );
};

export default Header;
