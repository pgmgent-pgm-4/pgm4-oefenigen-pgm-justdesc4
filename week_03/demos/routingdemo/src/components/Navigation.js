import React from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../routes/routes";

export default function Navigation() {
  return (
    <div>
      <NavLink to={ROUTES.home.path}>{ROUTES.home.title}</NavLink>
      <NavLink to={ROUTES.about.path}>{ROUTES.about.title}</NavLink>
      <NavLink to={ROUTES.contact.path}>{ROUTES.contact.title}</NavLink>
      <NavLink to={ROUTES.blog.path}>{ROUTES.blog.title}</NavLink>
    </div>
  );
}
