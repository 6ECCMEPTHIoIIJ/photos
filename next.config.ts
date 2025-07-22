import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    //TODO: Remove this shit
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "static-cdn5-2.vigbo.tech",
                port: "",
                pathname: "/**",
                search: "",
            }
        ]
    }

};
export default nextConfig;
