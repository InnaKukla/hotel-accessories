import React, { useEffect, useState } from "react";
import LogOut from "../../assets/icons/logout-outline.svg";
import {
  PersonalAccountLogoutButton,
  PersonalAccountUserButtons,
  PersonalAccountUserButtonsWrap,
  PersonalAccountUserTitle,
  PersonalAccountUserWrap,
} from "./PersonalAccountUser.styled";
import { useDispatch, useSelector } from "react-redux";
import { getUser, isUserLogin, authToken } from "../../redux/auth/auth-selectors";
import { logout } from "../../redux/auth/auth-operations";
import PersonalAccountOrders from "./PersonalAccountOrders";
import formsOperations from "../../redux/forms/forms-operations";
import { selectOrdersList } from "../../redux/forms/forms-selectors";
import PersonalAccountUserProfile from "./PersonalAccountUserProfile";
import { persistor } from "../../redux/store";

const PersonalAccountUser = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(isUserLogin);
  const user = useSelector(getUser);
  const orders = useSelector(selectOrdersList);
  const [isActive, setIsActive] = useState(() => {
    return localStorage.getItem("path") || "information";
  });

  useEffect(() => {
    localStorage.setItem("path", isActive);
  }, [isActive]);

  useEffect(() => {
   if (isActive === "orders" && isLoggedIn) {
      const fetchOrders = async () => {
       try {
        await dispatch(formsOperations.fetchOrders());
       } catch (error) {
        console.error("Error fetching orders", error)
       }
      };
      fetchOrders();
    }
  }, [dispatch, isActive, isLoggedIn]);

  const handleLogOut = async () => {
    const id = user._id;

    await dispatch(logout(id));
    persistor.purge();
  };
  return (
    <div style={{ paddingBottom: "160px" }}>
      <PersonalAccountUserTitle>Personal account</PersonalAccountUserTitle>
      <PersonalAccountUserWrap>
        <PersonalAccountUserButtonsWrap>
          <PersonalAccountUserButtons
            isActive={isActive === "information"}
            onClick={() => setIsActive("information")}
          >
            <p>Information company</p>
          </PersonalAccountUserButtons>

          <PersonalAccountUserButtons
            isActive={isActive === "orders"}
            onClick={() => setIsActive("orders")}
          >
            <p>Your orders</p>
          </PersonalAccountUserButtons>

          <PersonalAccountLogoutButton onClick={handleLogOut}>
            <img src={LogOut} alt="log out" />
            <p>Log out</p>
          </PersonalAccountLogoutButton>
        </PersonalAccountUserButtonsWrap>
        <div>
          {isActive === "information" && (
            <PersonalAccountUserProfile user={user} />
          )}

          {isActive === "orders" && <PersonalAccountOrders orders={orders} />}
        </div>
      </PersonalAccountUserWrap>
    </div>
  );
};

export default PersonalAccountUser;
