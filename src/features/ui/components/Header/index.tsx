import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
import { cn } from "tailwind-cn";
import { LuLogOut, LuLogIn } from "react-icons/lu";
import { Menu } from "@headlessui/react";
import { BiChevronDown } from "react-icons/bi";

import { RootState } from "@/store";
import { logout } from "@/store/authSlice";
import { resetCategory } from "@/store/categorySlice";
import { resetCart } from "@/store/cartSlice";

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
    <header className="flex items-center justify-between px-5 py-3 bg-white ">
      <Link to="/" className=" font-[600] p-0.5 text-[calc(20px+0.390625vw)]">
        fakeStore
      </Link>
      <div className={cn("flex items-center px-2 space-x-1")}>
        <Link to="/cart" className={cn("p-1.5 rounded px-4")}>
          <AiOutlineShoppingCart className="text-2xl " />
        </Link>
        <MobileMenu
          handleLogout={handleLogout}
          isUserLoggedIn={isUserLoggedIn}
        />
      </div>
    </header>
  );
}

interface IMobileMenuProps {
  isUserLoggedIn: boolean;
  handleLogout: () => void;
}

function MobileMenu({ handleLogout, isUserLoggedIn }: IMobileMenuProps) {
  return (
    <div className="relative">
      <Menu as="div" className={cn("")}>
        {({ open }) => (
          <>
            <Menu.Button
              className={cn(
                "flex rounded px-3 py-1.5 duration-200  text-gray-700 justify-center hover:bg-blue-800 hover:text-white",
                open && "bg-blue-800 text-white"
              )}
            >
              <AiOutlineUser className={cn("text-2xl")} />
              <BiChevronDown className="mt-1 -ml-1 text-2xl" />
            </Menu.Button>
            <Menu.Items
              className={cn(
                "flex flex-col fixed w-56 right-[16px] top-[70px] bg-[#FFFFFF] space-y-1.5 rounded shadow z-50 p-1"
              )}
            >
              {isUserLoggedIn ? (
                <>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="/wishlist"
                        className={cn(
                          "w-full px-4 text-[calc(12px+0.390625vw)] rounded py-1.5 font-[500] flex items-center shadow-sm text-gray-700",
                          active && "bg-[#FAFAFA]"
                        )}
                      >
                        <AiOutlineHeart
                          className={cn("mr-2 text-[calc(12px+0.390625vw)]")}
                        />
                        My WishList
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
                      <Link
                        to="/"
                        className={cn(
                          "w-full px-4   text-[calc(12px+0.390625vw)] rounded py-1.5 font-[500] flex items-center text-gray-700",
                          active && "bg-[#FAFAFA]"
                        )}
                        onClick={handleLogout}
                      >
                        <LuLogOut
                          className={cn("mr-2 text-[calc(12px+0.390625vw)]")}
                        />
                        Logout
                      </Link>
                    )}
                  </Menu.Item>
                </>
              ) : (
                <>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="/login"
                        className={cn(
                          "w-full px-4  text-[calc(12px+0.390625vw)] rounded py-1.5 font-[500] flex items-center text-gray-700",
                          active && "bg-[#FAFAFA]"
                        )}
                        onClick={handleLogout}
                      >
                        <LuLogIn
                          className={cn("mr-2 text-[calc(12px+0.390625vw)]")}
                        />
                        Login
                      </Link>
                    )}
                  </Menu.Item>
                </>
              )}
            </Menu.Items>
          </>
        )}
      </Menu>
    </div>
  );
}
