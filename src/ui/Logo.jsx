import { Link } from "react-router-dom";

const Logo = ({ to }) => {
  if (to)
    return (
      <Link to={to} className="flex items-center gap-1 font-medium text-5xl">
        <img src="/images/freshcart-logo.svg" alt="logo" />
      </Link>
    );

  return <img src="/images/freshcart-logo.svg" alt="logo" />;
};

export default Logo;
