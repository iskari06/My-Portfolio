import { Layout, Row, Col } from "antd";
import { Navigate, Outlet } from "react-router-dom";
import { Content, Footer } from "antd/es/layout/layout";
import ProtectedNavbar from "../components/protected/ProtectedNavbar";

const MainLayout = () => {
  const currentYear = new Date().getFullYear();

	return (
		<>
			<Layout className="min-h-screen">
				<Row className="flex-col md:flex-row w-full">
					<Layout>
            {/* Header */}
						<Col>
							<ProtectedNavbar />
						</Col>
            {/* Main Content */}
						<Content className="py-10">
							<Col className="min-h-[calc(100vh-180px)]">
								{true ? <Outlet /> : <Navigate to="" />}
							</Col>
						</Content>
            {/* Footer */}
            <Footer className="bg-black text-white text-center py-4">Christopher Lazaga © {currentYear} All Rights Reserved.</Footer>
					</Layout>
				</Row>
			</Layout>
		</>
	);
};

export default MainLayout;
