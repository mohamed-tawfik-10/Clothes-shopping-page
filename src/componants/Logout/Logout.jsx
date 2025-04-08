import React, { useEffect, useState } from 'react'
import Style from './Logout.module.css'
import { Link, useNavigate } from "react-router-dom";

export default function Logout() {
  const [Counter, SetCounter] = useState(0);
  useEffect(() => {
    handleLogout();
  }, [])
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    navigate("/Login");
    handleRefresh();
  };
  const handleRefresh = () => {
    window.location.reload(); // يقوم بتحديث الصفحة بالكامل
  };

  return (
    <></>
  );
}
