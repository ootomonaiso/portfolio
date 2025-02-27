import ModeToggle from "@/components/ModeToggle";
import { ThemeProvider } from "../contexts/ThemeProvider";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="transition-all bg-white text-black dark:bg-black dark:text-green-500">
        <ThemeProvider>
          <div className="absolute top-4 right-4">
            {/* モード切り替えボタン */}
            <ModeToggle />
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
