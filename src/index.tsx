import {createRoot} from "react-dom/client";
import App from "@/components/App";

const container = document.getElementById('root');

if (!container) throw new Error('root not found');

createRoot(container).render(<App />);