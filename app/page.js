'use client'

import { useState } from 'react'

export default function Home() {
  const [input, setInput] = useState('')
  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(false)

  async function analyzeGold() {
    setLoading(true)
    setResult('')

    try {
      const response = await fetch('/api/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: input,
        }),
      })

      const data = await response.json()

      setResult(data.result)
    } catch (error) {
      setResult('分析失败，请检查API配置')
    }

    setLoading(false)
  }

  return (
    <main
      style={{
        padding: '40px',
        fontFamily: 'Arial',
        maxWidth: '900px',
        margin: '0 auto',
      }}
    >
      <h1>黄金AI分析平台</h1>

      <p>输入黄金走势、新闻、行情进行AI分析</p>

      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="例如：分析今晚黄金走势，美联储鹰派会不会打压黄金？"
        style={{
          width: '100%',
          height: '160px',
          padding: '15px',
          marginTop: '20px',
          fontSize: '16px',
        }}
      />

      <button
        onClick={analyzeGold}
        style={{
          marginTop: '20px',
          padding: '12px 24px',
          fontSize: '16px',
          cursor: 'pointer',
        }}
      >
        {loading ? 'AI分析中...' : '开始AI分析'}
      </button>

      {result && (
        <div
          style={{
            marginTop: '40px',
            padding: '20px',
            border: '1px solid #ccc',
            borderRadius: '10px',
            whiteSpace: 'pre-wrap',
          }}
        >
          {result}
        </div>
      )}
    </main>
  )
}
