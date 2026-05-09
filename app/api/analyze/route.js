import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.DEEPSEEK_API_KEY,
  baseURL: 'https://api.deepseek.com'
})

export async function POST(req) {
  try {
    const body = await req.json()

    const completion = await openai.chat.completions.create({
      model: 'deepseek-chat',
      messages: [
        {
          role: 'system',
          content:
            '你是一名专业黄金分析师，擅长分析黄金、美元、美联储、战争、原油与贵金属走势。'
        },
        {
          role: 'user',
          content: body.message
        }
      ]
    })

    return Response.json({
      result: completion.choices[0].message.content
    })
  } catch (error) {
    return Response.json({
      result: 'AI接口错误: ' + error.message
    })
  }
}
