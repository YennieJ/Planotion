export interface APIResponse<T = unknown> {
    success: boolean;
    data?: T;
    error?: string;
    message?: string;
    timestamp: string;
  }
  
  export interface ClaudeRequest {
    messages: Array<{
      role: 'user' | 'assistant';
      content: string;
    }>;
    model?: string;
    max_tokens?: number;
    temperature?: number;
  }
  
  export interface ClaudeResponse {
    content: Array<{
      type: 'text';
      text: string;
    }>;
    model: string;
    usage: {
      input_tokens: number;
      output_tokens: number;
    };
  }