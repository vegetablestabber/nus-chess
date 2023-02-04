import { SocialIcon } from "react-social-icons"

const SocialButton = ({ url }) => (
    <SocialIcon
        url={url}
        className="aspect-square"
        style={{ width: "44px", height: "auto" }}
    />
)

export default SocialButton
