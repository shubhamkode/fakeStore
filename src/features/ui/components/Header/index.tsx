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
    <header className="flex items-center justify-between px-5 py-3 bg-white sm:py-2 sm:justify-around">
      <Link to="/" className=" font-[600] p-0.5 text-[calc(20px+0.390625vw)]">
        Fake Store
      </Link>
      {isUserLoggedIn ? (
        <MobileMenu handleLogout={handleLogout} />
      ) : (
        <div className="flex items-center space-x-2">
          <Link
            to="/cart"
            className={cn(
              "px-2 text-[calc(12px+0.390625vw)] rounded  font-[600] flex items-center justify-start hover:underline duration-300"
            )}
          >
            <AiOutlineShoppingCart
              className={cn("mr-1 text-[calc(12px+0.390625vw)]")}
            />{" "}
            My Cart
          </Link>
          <Link
            to="/login"
            className={cn(
              "px-2 text-[calc(12px+0.390625vw)] rounded  font-[600] flex items-center justify-start hover:underline duration-300"
            )}
          >
            <LuLogIn className={cn("mr-1 text-[calc(12px+0.390625vw)]")} />{" "}
            Login
          </Link>
        </div>
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
      <Menu as="div" className={cn("")}>
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
            "flex flex-col fixed w-56 right-[16px] top-[70px] bg-[#FFFFFF]  p-2  space-y-1.5 rounded shadow z-50"
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
