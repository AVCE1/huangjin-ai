export async function onRequestPost(context) {
  try {
    if (!context.env.DEEPSEEK_API_KEY) {
      return Response.json(
        { error: "缺少 DEEPSEEK_API_KEY，请先在 Cloudflare Pages 环境变量中配置。" },
        { status: 500 }
      )
    }

    const body = await context.request.json()
    const message = typeof body.message === "string" ? body.message.trim() : ""

    if (!message) {
      return Response.json(
        { error: "请输入需要分析的内容。" },
        { status: 400 }
      )
    }

    const response = await fetch(
      "https://api.deepseek.com/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${context.env.DEEPSEEK_API_KEY}`
        },
        body: JSON.stringify({
          model: "deepseek-chat",
          messages: [
            {
              role: "system",
              content:
                "你是一名专业黄金分析师，擅长分析黄金、美元、美联储、战争、原油与贵金属走势。"
            },
            {
              role: "user",
              content: message
            }
          ]
        })
      }
    )

    const data = await response.json()
    const result = data.choices?.[0]?.message?.content

    if (!response.ok || !result) {
      return Response.json(
        {
          error:
            data.error?.message ||
            data.message ||
            "DeepSeek 接口没有返回有效分析结果。"
        },
        { status: response.status || 502 }
      )
    }

    return Response.json({
      result
    })
  } catch (error) {
    return Response.json(
      { error: "AI接口错误: " + error.message },
      { status: 500 }
    )
  }
}
