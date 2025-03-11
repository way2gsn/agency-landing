import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const prompt = `
      Provide a list of the latest news in Artificial Intelligence. For each news item, include:
      - A catchy title
      - A short summary
      - A placeholder URL
    `;

    const response = await openai.createChatCompletion({
      model: 'gpt-4',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 500,
    });

    const blogs = response.data.choices[0].message.content
      .split('\n\n')
      .map((entry) => {
        const [title, summary, url] = entry.split('\n').map((line) => line.trim());
        return { title, summary, url: url || '#' };
      });

    res.status(200).json({ blogs });
  } catch (error) {
    console.error('Error generating blogs:', error);
    res.status(500).json({ error: 'Failed to generate blogs' });
  }
}
