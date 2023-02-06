import { UserRole } from '../../types/user';

export interface HttpResponse {
  statusCode: number;
  body: any;
}

export interface HttpRequest {
  body?: any;
  headers?: any;
  user?: {
    email: string;
    role: UserRole;
    id: number;
  };
  query?: any;
}
