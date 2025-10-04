import OpenAI from 'openai';

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
});

const response = openai.responses.create({
  model: 'gpt-5-nano',
  input: 'write a haiku about ai',
  store: true,
});

response.then((result) => console.log(result.output_text));
