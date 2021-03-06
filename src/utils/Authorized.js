import RenderAuthorized from "ant-design-pro/lib/Authorized";
import { getAuthority } from "./authority";

let Authorized = RenderAuthorized(getAuthority()); // eslint-disable-line

// Reload the rights component
const reloadAuthorized = () => {
  console.log("reloadAuthorized --> here");
  console.log("getAuthority() --> ", getAuthority());

  Authorized = RenderAuthorized(getAuthority());
};

export { reloadAuthorized };
export default Authorized;
