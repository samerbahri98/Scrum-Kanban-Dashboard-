import React from "react";

export default function Header() {
  return (
    <nav className="nav">
      <div className="nav-left">
        <a className="nav-item">
          <p className="title">Kanban board</p>
        </a>
      </div>

      <div className="nav-center">
        <a className="nav-item" href="https://github.com/samerbahri98/ToDo" target="_blank">
          <span className="icon">
            <i className="fa fa-github"></i>
          </span>
        </a>
        <a className="nav-item">
          <span className="icon">
            <i className="fa fa-linkedin"></i>
          </span>
        </a>
      </div>

      <span className="nav-toggle">
        <span></span>
        <span></span>
        <span></span>
      </span>

      <div className="nav-right nav-menu">
        <a className="nav-item">App</a>
        <a className="nav-item">Documentations</a>
        <a className="nav-item">About</a>
      </div>
    </nav>
  );
}
