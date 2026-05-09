export async function onRequestPost(context) {
  try {
    const body = await context.request.json()

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
              content: body.message
            }
          ]
        })
      }
    )

    const data = await response.json()

    return Response.json({
      result:
        data.choices?.[0]?.message?.content ||
        JSON.stringify(data)
    })
  } catch (error) {
    return Response.json({
      result: "AI接口错误: " + error.message
    })
  }
}
