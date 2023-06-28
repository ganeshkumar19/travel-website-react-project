import { FaAddressBook, FaBriefcase, FaHome, FaInfo } from "react-icons/fa";

const MenuItems = [
  {
    title: 'Home',
    url :'/',
    cName: "nav-links",
    icon: <FaHome/>
  },
  {
    title: 'About',
    url :'/about',
    cName: "nav-links",
    icon: <FaInfo/>
  },
  {
    title: 'Service',
    url :'/service',
    cName: "nav-links",
    icon: <FaBriefcase/>
  },
  {
    title: 'Contact',
    url :'/contact',
    cName: "nav-links",
    icon: <FaAddressBook/>
  },
  {
    title: 'Sign Up',
    url :'/signup',
    cName: "nav-links-mobile",
  },

]
export default MenuItems