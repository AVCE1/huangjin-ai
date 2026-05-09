export default function Home() {
  return (
    <main
      style={{
        background: "#0a0a0a",
        color: "white",
        minHeight: "100vh",
        padding: "60px",
        fontFamily: "Arial",
      }}
    >
      <h1
        style={{
          fontSize: "48px",
          fontWeight: "bold",
          marginBottom: "20px",
        }}
      >
        黄金AI分析平台
      </h1>

      <p
        style={{
          color: "#999",
          fontSize: "20px",
          marginBottom: "40px",
        }}
      >
        AI驱动的黄金 / 白银 / 美元 / 原油 / 战争避险分析系统
      </p>

      <div
        style={{
          border: "1px solid #333",
          borderRadius: "20px",
          padding: "30px",
          background: "#111",
        }}
      >
        <h2>实时分析模块</h2>

        <ul style={{ lineHeight: "40px", color: "#ccc" }}>
          <li>✔ 黄金趋势分析</li>
          <li>✔ AI新闻情绪分析</li>
          <li>✔ 战争风险监控</li>
          <li>✔ 美联储利率预测</li>
          <li>✔ 原油联动分析</li>
          <li>✔ AI自动策略建议</li>
        </ul>
      </div>
    </main>
  );
}
