// In mainLayout.tsx
import { Layout, Row, Col } from "antd";
import { useRef } from "react";
import ProtectedNavbar from "../components/protected/ProtectedNavbar";
import { PageRoutes } from "../routes/allRoutes";
import type { SectionRefs } from "../routes/allRoutes";

const { Content, Footer } = Layout;

const MainLayout = () => {
  const currentYear = new Date().getFullYear();

  // Create refs for each route in PageRoutes
  const sectionRefs: SectionRefs = PageRoutes.reduce((refs, route) => {
    refs[route.key] = useRef<HTMLElement>(null);
    return refs;
  }, {} as SectionRefs);

  return (
    <>
      <Layout className="min-h-screen bg-transparent!">
        {/* Header */}
        <Row className="sticky top-0 z-50 flex justify-center items-center backdrop-blur-sm bg-black/60">
          <Col className="w-full sm:w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 h-20">
            <ProtectedNavbar sectionRefs={sectionRefs} />
          </Col>
        </Row>

        {/* Main Content */}
        <Content className="w-full min-h-screen font-bold text-lg flex-grow bg-black">
          {/* Map through routes to create sections */}
          {PageRoutes.map((route) => {
            const RouteElement = route.element;
            return (
              <section 
                key={route.key}
                ref={sectionRefs[route.key]} 
                id={route.key} 
                className={`min-h-screen ${route.key !== 'home' ? 'py-20' : ''}`}
              >
                {route.key === 'home' ? (
                  <RouteElement />
                ) : (
                  <Row className="flex justify-center">
                    <Col className="w-full sm:w-11/12 md:w-10/12 lg:w-9/12 xl:w-[90%]">
                      <RouteElement />
                    </Col>
                  </Row>
                )}
              </section>
            );
          })}
        </Content>

        {/* Footer */}
        <Footer className="special-gothic text-white! text-center py-8 bg-transparent! select-none">
          Christopher Lazaga © {currentYear} All Rights Reserved.
        </Footer>
      </Layout>
    </>
  );
};

export default MainLayout;