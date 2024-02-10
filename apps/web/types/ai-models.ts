export type AiModel = {
  id: string;
  // This `maxLength` variable is optional. If present, it guides the UI
  // validation of the length of the user's input in the chat input. If it's
  // over this value, the UI will show an error message. If absent, the UI will
  // not do any validation.
  maxLength: number;
  // This `tokenLimit` variable controls the maximum value of the "Max Tokens"
  // slider in the UI. If the user has enabled this paramter in the UI, we will
  // use their value in the `body.max_tokens` field of the request. Otherwise,
  // we will not set this value in the request.
  //
  // In the OpenAI API, the `max_tokens` field only specifies the max number of
  // tokens that the model MAY generate in the completion. It is not
  // necessarily the amount that the model WILL generate.
  tokenLimit: number;
  // This `requestLimit` controls the maximum number of tokens that unSAGED
  // will send to the model in a single request. If the user's input exceeds
  // this value, the UI will show an error message.
  requestLimit: number;
  vendor: 'OpenAI' | 'Anthropic' | 'Google' | 'Ollama';
  type: 'text';
} | {
  id: string;
  vendor: 'OpenAI';
  type: 'image';
}

export interface GetAvailableAIModelResponse {
  error?: any;
  data: any[];
}

export interface PossibleAiModelsInterface {
  [modelId: string]: AiModel;
}

export const PossibleAiModels: PossibleAiModelsInterface = {
  //
  // OpenAI
  //
  'gpt-3.5-turbo': {
    id: 'gpt-3.5-turbo',
    maxLength: 12000,
    tokenLimit: 4000,
    requestLimit: 3000,
    vendor: 'OpenAI',
    type: 'text',
  },
  'gpt-3.5-turbo-16k': {
    id: 'gpt-3.5-turbo-16k',
    maxLength: 48000,
    tokenLimit: 16000,
    requestLimit: 12000,
    vendor: 'OpenAI',
    type: 'text',
  },
  'gpt-35-az': {
    id: 'gpt-35-az',
    maxLength: 12000,
    tokenLimit: 4000,
    requestLimit: 3000,
    vendor: 'OpenAI',
    type: 'text',
  },
  'gpt-4': {
    id: 'gpt-4',
    maxLength: 24000,
    tokenLimit: 8000,
    requestLimit: 6000,
    vendor: 'OpenAI',
    type: 'text',
  },
  'gpt-4-32k': {
    id: 'gpt-4-32k',
    maxLength: 96000,
    tokenLimit: 32000,
    requestLimit: 30000,
    vendor: 'OpenAI',
    type: 'text',
  },
  'gpt-4-1106-preview': {
    id: 'gpt-4-1106-preview',
    maxLength: 500000,
    tokenLimit: 4096,
    requestLimit: 128000,
    vendor: 'OpenAI',
    type: 'text',
  },
  'gpt-4-0125-preview': {
    id: 'gpt-4-0125-preview',
    maxLength: 500000,
    tokenLimit: 4096,
    requestLimit: 128000,
    vendor: 'OpenAI',
    type: 'text',
  },
  'dall-e-3': {
    id: 'dall-e-3',
    vendor: 'OpenAI',
    type: 'image',
  },
  'dall-e-2': {
    id: 'dall-e-2',
    vendor: 'OpenAI',
    type: 'image',
  },
  //
  // Azure
  //
  'gpt-35-turbo': {
    id: 'will get from azure',
    maxLength: 12000,
    tokenLimit: 4000,
    requestLimit: 3000,
    vendor: 'OpenAI',
    type: 'text',
  },
  'gpt-35-turbo-16k': {
    id: 'will get from azure',
    maxLength: 48000,
    tokenLimit: 16000,
    requestLimit: 12000,
    vendor: 'OpenAI',
    type: 'text',
  },
  //
  // Anthropic
  //
  'claude-instant-1': {
    id: 'claude-instant-1',
    maxLength: 400000,
    tokenLimit: 100000,
    requestLimit: 98000,
    vendor: 'Anthropic',
    type: 'text',
  },
  'claude-2': {
    id: 'claude-2',
    maxLength: 400000,
    tokenLimit: 100000,
    requestLimit: 98000,
    vendor: 'Anthropic',
    type: 'text',
  },
  //
  // Google
  //
  bard: {
    id: 'bard',
    maxLength: 12000,
    tokenLimit: 4096,
    requestLimit: 3000,
    vendor: 'Google',
    type: 'text',
  },
  //
  // Ollama
  //
  'llama2:latest': {
    id: 'llama2:latest',
    maxLength: 32000,
    tokenLimit: 4096,
    requestLimit: 3000,
    vendor: 'Ollama',
    type: 'text',
  },
  'llama2:7b': {
    id: 'llama2:7b',
    maxLength: 32000,
    tokenLimit: 4096,
    requestLimit: 3000,
    vendor: 'Ollama',
    type: 'text',
  },
  'llama2:13b': {
    id: 'llama2:13b',
    maxLength: 32000,
    tokenLimit: 4096,
    requestLimit: 3000,
    vendor: 'Ollama',
    type: 'text',
  },
  'llama2:70b': {
    id: 'llama2:70b',
    maxLength: 32000,
    tokenLimit: 4096,
    requestLimit: 3000,
    vendor: 'Ollama',
    type: 'text',
  },
  'codellama:latest': {
    id: 'codellama:latest',
    maxLength: 32000,
    tokenLimit: 4096,
    requestLimit: 3000,
    vendor: 'Ollama',
    type: 'text',
  },
  'codellama:python': {
    id: 'codellama:python',
    maxLength: 32000,
    tokenLimit: 4096,
    requestLimit: 3000,
    vendor: 'Ollama',
    type: 'text',
  },
  'codellama:code': {
    id: 'codellama:code',
    maxLength: 32000,
    tokenLimit: 4096,
    requestLimit: 3000,
    vendor: 'Ollama',
    type: 'text',
  },
  'codellama:7b-python': {
    id: 'codellama:7b-python',
    maxLength: 32000,
    tokenLimit: 4096,
    requestLimit: 3000,
    vendor: 'Ollama',
    type: 'text',
  },
  'codellama:7b-code': {
    id: 'codellama:7b-code',
    maxLength: 32000,
    tokenLimit: 4096,
    requestLimit: 3000,
    vendor: 'Ollama',
    type: 'text',
  },
  'codellama:7b': {
    id: 'codellama:7b',
    maxLength: 32000,
    tokenLimit: 4096,
    requestLimit: 3000,
    vendor: 'Ollama',
    type: 'text',
  },
  'codellama:13b-python': {
    id: 'codellama:13b-python',
    maxLength: 32000,
    tokenLimit: 4096,
    requestLimit: 3000,
    vendor: 'Ollama',
    type: 'text',
  },
  'codellama:13b-code': {
    id: 'codellama:13b-code',
    maxLength: 32000,
    tokenLimit: 4096,
    requestLimit: 3000,
    vendor: 'Ollama',
    type: 'text',
  },
  'codellama:13b': {
    id: 'codellama:13b',
    maxLength: 32000,
    tokenLimit: 4096,
    requestLimit: 3000,
    vendor: 'Ollama',
    type: 'text',
  },
  'codellama:34b': {
    id: 'codellama:34b',
    maxLength: 32000,
    tokenLimit: 4096,
    requestLimit: 3000,
    vendor: 'Ollama',
    type: 'text',
  },
  'codellama:34b-code': {
    id: 'codellama:34b-code',
    maxLength: 32000,
    tokenLimit: 4096,
    requestLimit: 3000,
    vendor: 'Ollama',
    type: 'text',
  },
  'codellama:34b-python': {
    id: 'codellama:34b-python',
    maxLength: 32000,
    tokenLimit: 4096,
    requestLimit: 3000,
    vendor: 'Ollama',
    type: 'text',
  },
  'wizardcoder:latest': {
    id: 'wizardcoder:latest',
    maxLength: 32000,
    tokenLimit: 4096,
    requestLimit: 3000,
    vendor: 'Ollama',
    type: 'text',
  },
  'wizardcoder:7b-python': {
    id: 'wizardcoder:7b-python',
    maxLength: 32000,
    tokenLimit: 4096,
    requestLimit: 3000,
    vendor: 'Ollama',
    type: 'text',
  },
  'wizardcoder:13b-python': {
    id: 'wizardcoder:13b-python',
    maxLength: 32000,
    tokenLimit: 4096,
    requestLimit: 3000,
    vendor: 'Ollama',
    type: 'text',
  },
  'wizardcoder:34b-python': {
    id: 'wizardcoder:34b-python',
    maxLength: 32000,
    tokenLimit: 4096,
    requestLimit: 3000,
    vendor: 'Ollama',
    type: 'text',
  },
  'phind-codellama:latest': {
    id: 'phind-codellama:latest',
    maxLength: 32000,
    tokenLimit: 4096,
    requestLimit: 3000,
    vendor: 'Ollama',
    type: 'text',
  },
  'phind-codellama:34b': {
    id: 'phind-codellama:34b',
    maxLength: 32000,
    tokenLimit: 4096,
    requestLimit: 3000,
    vendor: 'Ollama',
    type: 'text',
  },
  'phind-codellama:34b-v2': {
    id: 'phind-codellama:34b-v2',
    maxLength: 32000,
    tokenLimit: 4096,
    requestLimit: 3000,
    vendor: 'Ollama',
    type: 'text',
  },
  'phind-codellama:34b-python': {
    id: 'phind-codellama:34b-python',
    maxLength: 32000,
    tokenLimit: 4096,
    requestLimit: 3000,
    vendor: 'Ollama',
    type: 'text',
  },
  'mistral:latest': {
    id: 'mistral:latest',
    maxLength: 16000,
    tokenLimit: 4096,
    requestLimit: 3000,
    vendor: 'Ollama',
    type: 'text',
  },
  'mistral-openorca:latest': {
    id: 'mistral-openorca:latest',
    maxLength: 16000,
    tokenLimit: 4096,
    requestLimit: 3000,
    vendor: 'Ollama',
    type: 'text',
  },
  'mixtral:latest': {
    id: 'mixtral:latest',
    maxLength: 32000,
    tokenLimit: 4096,
    requestLimit: 3000,
    vendor: 'Ollama',
    type: 'text',
  },
  'mixtral:8x7b': {
    id: 'mixtral:8x7b',
    maxLength: 32000,
    tokenLimit: 4096,
    requestLimit: 3000,
    vendor: 'Ollama',
    type: 'text',
  },
  'mixtral:instruct': {
    id: 'mixtral:instruct',
    maxLength: 32000,
    tokenLimit: 4096,
    requestLimit: 3000,
    vendor: 'Ollama',
    type: 'text',
  },
  'mixtral:text': {
    id: 'mixtral:text',
    maxLength: 32000,
    tokenLimit: 4096,
    requestLimit: 3000,
    vendor: 'Ollama',
    type: 'text',
  },
  'openchat:latest': {
    id: 'openchat:latest',
    maxLength: 16000,
    tokenLimit: 4096,
    requestLimit: 3000,
    vendor: 'Ollama',
    type: 'text',
  },
  'neural-chat:latest': {
    id: 'neural-chat:latest',
    maxLength: 16000,
    tokenLimit: 4096,
    requestLimit: 3000,
    vendor: 'Ollama',
    type: 'text',
  },
  'goliath:latest': {
    id: 'goliath:latest',
    maxLength: 16000,
    tokenLimit: 4096,
    requestLimit: 3000,
    vendor: 'Ollama',
    type: 'text',
  },
  'vicuna:latest': {
    id: 'vicuna:latest',
    maxLength: 16000,
    tokenLimit: 4096,
    requestLimit: 3000,
    vendor: 'Ollama',
    type: 'text',
  },
  'orca-mini:latest': {
    id: 'orca-mini:latest',
    maxLength: 16000,
    tokenLimit: 4096,
    requestLimit: 3000,
    vendor: 'Ollama',
    type: 'text',
  },
  'llama2-uncensored:latest': {
    id: 'llama2-uncensored:latest',
    maxLength: 16000,
    tokenLimit: 4096,
    requestLimit: 3000,
    vendor: 'Ollama',
    type: 'text',
  },
  'yarn-mistral:7b-128k': {
    id: 'yarn-mistral:7b-128k',
    maxLength: 128000,
    tokenLimit: 4096,
    requestLimit: 3000,
    vendor: 'Ollama',
    type: 'text',
  },
  'deepseek-coder:latest': {
    id: 'deepseek-coder:latest',
    maxLength: 16000,
    tokenLimit: 4096,
    requestLimit: 3000,
    vendor: 'Ollama',
    type: 'text',
  },
  'deepseek-coder:6.7b': {
    id: 'deepseek-coder:6.7b',
    maxLength: 16000,
    tokenLimit: 4096,
    requestLimit: 3000,
    vendor: 'Ollama',
    type: 'text',
  },
  'deepseek-coder:33b': {
    id: 'deepseek-coder:33b',
    maxLength: 16000,
    tokenLimit: 4096,
    requestLimit: 3000,
    vendor: 'Ollama',
    type: 'text',
  },
  //
  // Ollama - Custom Models
  //
  'llama2_13B_2080:latest': {
    id: 'llama2_13B_2080:latest',
    maxLength: 32000,
    tokenLimit: 4096,
    requestLimit: 3000,
    vendor: 'Ollama',
    type: 'text',
  },
  'wizardcoder13b_python_2080:latest': {
    id: 'wizardcoder13b_python_2080:latest',
    maxLength: 32000,
    tokenLimit: 4000,
    requestLimit: 3000,
    vendor: 'Ollama',
    type: 'text',
  },
  'phindcodellama-34b-_2080:latest': {
    id: 'phindcodellama-34b-_2080:latest',
    maxLength: 32000,
    tokenLimit: 4096,
    requestLimit: 3000,
    vendor: 'Ollama',
    type: 'text',
  },
  'phind-codellama:34bv2-vram2080': {
    id: 'phind-codellama:34bv2-vram2080',
    maxLength: 32000,
    tokenLimit: 4096,
    requestLimit: 3000,
    vendor: 'Ollama',
    type: 'text',
  },
};

export interface ModelParams {
  temperature?: number;
  top_p?: number;
  top_k?: number;
  repeat_penalty?: number;
  presence_penalty?: number;
  stop?: string[];
  max_tokens?: number;
  seed?: number;
  n?: number | null;
  quality?: 'standard' | 'hd';
  response_format?: 'url' | 'b64_json' | null;
  size?: '256x256' | '512x512' | '1024x1024' | '1792x1024' | '1024x1792' | null;
  style?: 'vivid' | 'natural' | null;
}
