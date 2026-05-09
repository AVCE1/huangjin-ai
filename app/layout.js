export const metadata = {
  title: "黄金AI分析平台",
  description: "AI黄金分析系统",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh">
      <body
        style={{
          margin: 0,
          background: "#000",
        }}
      >
        {children}
      </body>
    </html>
  );
}
