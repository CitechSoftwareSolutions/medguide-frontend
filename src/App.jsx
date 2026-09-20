import { useEffect } from "react";
import "./portal.css";
import { AuthProvider, useAuth } from "./lib/auth.jsx";
import { navigate, useRoute } from "./lib/router.js";
import LoginPage from "./pages/LoginPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import PostsPage from "./pages/PostsPage.jsx";
import ChatPage from "./pages/ChatPage.jsx"; // <- your existing chatbot (old App.jsx)

function Screens() {
  const route = useRoute();
  const { user } = useAuth();

  // Keep the URL in step with the login state.
  useEffect(() => {
    if (!user && route !== "/login") navigate("/login");
    if (user && route === "/login") navigate("/");
  }, [user, route]);

  if (!user) return <LoginPage />;
  if (route === "/chat") return <ChatPage />;
  if (route.startsWith("/posts")) return <PostsPage postId={route.split("/")[2]} />;
  return <HomePage />;
}

export default function App() {
  return (
    <AuthProvider>
      <Screens />
    </AuthProvider>
  );
}
