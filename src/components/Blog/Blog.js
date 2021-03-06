import React, { Fragment, lazy, Suspense } from "react";
import { NavLink, Redirect, Route, Switch } from "react-router-dom";
import Nomatch from "../Nomatch/Nomatch";

import classes from "./Blog.module.css";

const Users = lazy(() => import("../Users/Users"));
const Courses = lazy(() => import("../../containers/Courses/Courses"));

const Blog = (props) => {
  return (
    <Fragment>
      <header>
        <nav className={classes.Links}>
          <NavLink
            activeClassName="usersLink"
            activeStyle={{ color: "#ff7675", textDecoration: "none" }}
            to="/users"
          >
            Users
          </NavLink>
          <NavLink
            activeClassName="CoursesLink"
            activeStyle={{ color: "#ff7675", textDecoration: "none" }}
            to="/courses"
          >
            Courses
          </NavLink>
        </nav>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/users" component={Users} />
          <Route path="/courses" component={Courses} />
          <Route component={Nomatch} />
          <Redirect from="/all-courses" to="/courses" />
        </Switch>
      </Suspense>
    </Fragment>
  );
};

export default Blog;
