import { useTheme, ThemeProvider } from "./context/ThemeContext";
import ThemeButton from "./components/ThemeButton";

const AppContent = () => {
  const { theme } = useTheme();

  const appStyle = {
    backgroundColor: theme === "light" ? "#FFF" : "#222",
    color: theme === "light" ? "#222" : "#FFF",
    minHeight: "100vh",
    padding: "20px",
    transition: "all 0.3s ease",
  };

  return (
    <div style={appStyle}>
      <h1>Demo Light/Dark Mode</h1>
      <ThemeButton />
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;