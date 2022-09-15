import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function LayoutMain() {
  return (
    <>
      <Navbar />
      <main className="container-lg mt-5">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
