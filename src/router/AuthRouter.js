import { message } from "antd";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { matchRoutes, useLocation, useNavigate } from "react-router-dom";
import routers from "./index";

const AuthRoute = ({ children, auth }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const token = localStorage.getItem("blogToken") || "";
  const mathchs = matchRoutes(routers, location);

  const isExist = mathchs?.some((item) => item.pathname === location.pathname);

  useEffect(() => {
    if (token === "" && auth) {
      message.error("token 过期，请重新登录!");
      navigate("/demo");
    }
    // 这里判断条件是：token 存在并且是匹配到路由并且是已经登录的状态
    if (token && isExist) {
      // 如果你已经登录了，但是你通过浏览器里直接访问login的话不允许直接跳转到login路由，必须通过logout来控制退出登录或者是token过期返回登录界面
      if (location.pathname === "/" || location.pathname === "/login") {
        navigate("/home");
      } else {
        // 如果是其他路由就跳到其他的路由
        navigate(location.pathname);
      }
    }
  }, [token, location.pathname, navigate, isExist, auth]);

  return children;
};
export default AuthRoute;
