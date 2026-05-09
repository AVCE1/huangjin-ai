import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(req) {
  try {
    const body = await req.json()

    const completion = await openai.chat.completions.create({
      model: 'gpt-4.1-mini',
      messages: [
        {
          role: 'system',
          content:
            '你是一名专业黄金分析师，擅长分析黄金、美元、战争、美联储、原油与贵金属走势。',
        },
        {
          role: 'user',
          content: body.message,
        },
      ],
    })

    return Response.json({
      result: completion.choices[0].message.content,
    })
  } catch (error) {
    return Response.json({
      result: 'AI分析失败，请检查OpenAI API配置',
    })
  }
}
