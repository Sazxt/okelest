import Layoutdashboard from "@/components/Layoutdashboard";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Dashboard",
    description: "Dashboard Panel",
};

export default function RootLayout({ children }) {
    return (
        <Layoutdashboard>
            {children}
        </Layoutdashboard>
    );
}
