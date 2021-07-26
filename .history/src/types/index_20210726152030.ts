/**
 * 公共的类型定义文件
 */
export type Method = 'get' | 'GET' | 'POST' | 'post' | 'PUT' | 'put' | 'DELETE' | 'delete' | 'head' | 'options' | 'OPTIONS' | 'HEAD' | 'PATH' | 'patch';

export interface RequestConfig {
  url: string;
  method?: Method;
  data?: any;
  params?: any;
}