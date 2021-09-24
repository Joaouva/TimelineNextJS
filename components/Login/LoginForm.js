import React from "react";

function LoginForm(setIsLoggedIn) {
  const loginUser = (e) => {
    e.preventDefault();
    setIsLoggedIn.setIsLoggedIn(true);
    alert("hi");
  };

  return (
    <div>
      <div>
        <form>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button
            onClick={(e) => {
              loginUser(e);
            }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
export default LoginForm;
