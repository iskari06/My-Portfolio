import { Col } from "antd";
import { Link } from "react-router-dom";
import { PageRoutes } from "../../routes/allRoutes";

const ProtectedNavbar = () => {
  return (
    <>
      <Col className="bg-black h-16 flex items-center justify-center px-6">
        <div className="flex gap-8 space-x-10">
          {PageRoutes.map((route) => (
            <Link 
              key={route.key}
              to={route.path} 
              className="text-lg text-[#f7e6c8]! hover:text-[#947e57]! transition-colors px-4 py-2"
            >
              {route.name}
            </Link>
          ))}
        </div>
      </Col>
    </>
  );
};

export default ProtectedNavbar;