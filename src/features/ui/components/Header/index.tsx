import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store";
import { logout } from "@/store/authSlice";
import { resetCart } from "@/store/productSlice";
import { resetCategory } from "@/store/categorySlice";

import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { cn } from "tailwind-cn";
import { LuLogOut, LuLogIn } from "react-icons/lu";

import { Menu } from "@headlessui/react";
import { BiChevronDown } from "react-icons/bi";

export default function Header() {
  const dispatch = useDispatch();
  const { token } = useSelector((store: RootState) => store.auth);

  const isUserLoggedIn: boolean = !!token;

  const handleLogout = () => {
    dispatch(resetCart());
    dispatch(resetCategory());
    dispatch(logout());
  };

  return (
    <header className="sticky top-0 left-0 right-0 z-50 flex items-center justify-between px-5 py-2 bg-white">
      <Link to="/" className=" font-[600] p-1.5 text-[calc(20px+0.390625vw)]">
        Fake Store
      </Link>
      {isUserLoggedIn ? (
        <MobileMenu handleLogout={handleLogout} />
      ) : (
        <Link
          to="/login"
          className={cn(
            "w-28 pl-4 text-[calc(12px+0.390625vw)] rounded py-1.5 font-[600] flex items-center text-white bg-blue-800 justify-start "
          )}
        >
          <LuLogIn className={cn("mr-2 text-[calc(12px+0.390625vw)]")} /> Login
        </Link>
      )}
    </header>
  );
}

interface IMobileMenuProps {
  handleLogout: () => void;
}

function MobileMenu({ handleLogout }: IMobileMenuProps) {
  return (
    <div className="relative">
      <Menu as="div" className={cn("fixed top-2 right-4  z-50")}>
        <Menu.Button
          className={cn(
            "flex rounded px-6 py-1.5 duration-200  text-gray-700 justify-center"
          )}
        >
          <AiOutlineUser className={cn("text-2xl")} />
          <BiChevronDown className="mt-1 -ml-1 text-2xl" />
        </Menu.Button>
        <Menu.Items
          className={cn(
            "flex flex-col fixed w-56 right-[16px] top-[70px] bg-[#FFFFFF]  p-2  space-y-1.5 rounded shadow"
          )}
        >
          <Menu.Item>
            {({ active }) => (
              <Link
                to="/login"
                className={cn(
                  "w-full px-4 text-[calc(12px+0.390625vw)] rounded py-1.5 font-[500] flex items-center shadow-sm text-gray-700",
                  active && "bg-[#FAFAFA]"
                )}
              >
                <AiOutlineShoppingCart
                  className={cn("mr-2 text-[calc(12px+0.390625vw)]")}
                />
                My Cart
              </Link>
            )}
          </Menu.Item>

          <Menu.Item>
            {({ active }) => (
              <Link
                to="/profile"
                className={cn(
                  "w-full px-4 text-[calc(12px+0.390625vw)] rounded py-1.5 font-[500] flex items-center shadow-sm text-gray-700",
                  active && "bg-[#FAFAFA]"
                )}
              >
                <AiOutlineUser
                  className={cn("mr-2 text-[calc(12px+0.390625vw)]")}
                />
                My Profile
              </Link>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <button
                className={cn(
                  "w-full px-4   text-[calc(12px+0.390625vw)] rounded py-1.5 font-[500] flex items-center text-gray-700",
                  active && "bg-[#FAFAFA]"
                )}
                onClick={handleLogout}
              >
                <LuLogOut className={cn("mr-2 text-[calc(12px+0.390625vw)]")} />
                Logout
              </button>
            )}
          </Menu.Item>
        </Menu.Items>
      </Menu>
    </div>
  );
}
