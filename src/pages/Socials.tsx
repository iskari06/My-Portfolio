import { FacebookOutlined, GithubOutlined,
  LinkedinOutlined,
 } from '@ant-design/icons';
 import GmailLogo from "../assets/images/gmail.svg"

const Socials = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: <GithubOutlined />,
      url: "https://github.com",
      description: "Check out my code repositories and contributions"
    },
    {
      name: "LinkedIn",
      icon: <LinkedinOutlined />,
      url: "https://linkedin.com",
      description: "Connect with me professionally"
    },
    {
      name: "Facebook",
      icon: <FacebookOutlined className=""/>,
      url: "https://twitter.com",
      description: "Follow me for updates and tech discussions"
    },
    {
      name: "Gmail",
      icon: <img src={GmailLogo} alt="Gmail" className="w-8 h-8" />,
      url: "mailto:example@email.com",
      description: "Reach out directly for collaborations or questions"
    }
  ];

  return (
    <div className="text-white py-10">
      <h2 className="text-4xl mb-8 special-gothic">Connect With Me</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {socialLinks.map((social, index) => (
          <a 
            href={social.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            key={index}
            className="flex items-center p-6 bg-black/40 backdrop-blur-sm rounded-lg border border-[#947e57]/30 hover:border-[#947e57] transition-all hover:translate-y-[-5px] no-underline text-white"
          >
            <div className="text-4xl mr-4">{social.icon}</div>
            <div>
              <h3 className="text-xl mb-1 text-[#f7e6c8]">{social.name}</h3>
              <p className="text-gray-300">{social.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Socials;